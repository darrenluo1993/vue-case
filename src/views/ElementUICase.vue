<template>
  <div>
    <el-cascader
      v-model="selectedCategories"
      :options="cascadeOptions"
      :props="cascadeProps"
      :show-all-levels="true"
      @change="changeSelect"
      clearable
      filterable
      placeholder="请选择资源分类"
      style="width: 100%"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 选中的分类ID数组，格式为 [一级ID, 二级ID, 三级ID, 四级ID]
      selectedCategories: [],

      // 级联选择器的配置
      cascadeProps: {
        // 启用严格模式，可以选中任意一级
        checkStrictly: true,
        // 定义数据结构的字段映射
        value: 'id',
        label: 'name',
        children: 'child',
        // 可选：是否支持多选
        multiple: false,
        // 可选：是否在选择时自动展开下一级
        expandTrigger: 'hover',
      },

      // 级联数据源
      cascadeOptions: [],

      // 从URL获取的参数
      urlParams: {
        level1Id: '',
        level2Id: '',
        level3Id: '',
        level4Id: '',
      },
    }
  },

  async created() {
    // 1. 获取URL参数
    this.getUrlParams()

    // 2. 加载级联数据
    await this.loadCascadeData()

    // 3. 设置初始选中值
    this.setInitialSelection()
  },

  methods: {
    // 获取URL参数
    getUrlParams() {
      debugger
      // 根据你的实际路由获取方式调整
      const query = this.$route.query
      this.urlParams = {
        level1Id: query.level1Id || 'T2',
        level2Id: query.level2Id || 'T6',
        level3Id: query.level3Id || 'T60319',
        level4Id: query.level4Id || 'T6031903',
      }
    },

    // 加载级联数据
    async loadCascadeData() {
      try {
        // 替换为你的API调用，获取完整的级联数据
        // this.cascadeOptions = await this.$api.resource.getCategoryTree();
        this.cascadeOptions = [
          {
            id: 'T1',
            name: '硬件资源',
            child: [
              {
                id: 'T101',
                name: '物理机',
                child: [
                  {
                    id: 'T10101',
                    name: 'PC服务器',
                    child: [
                      {
                        id: 'T1010101',
                        name: '微型服务器',
                      },
                      {
                        id: 'T1010102',
                        name: '大型服务器',
                      },
                    ],
                  },
                  {
                    id: 'T10102',
                    name: '刀片机',
                  },
                ],
              },
              {
                id: 'T102',
                name: '存储设备',
                child: [
                  {
                    id: 'T10201',
                    name: '硬盘阵列',
                  },
                ],
              },
              {
                id: 'T103',
                name: '安全设备',
                child: [
                  {
                    id: 'T10301',
                    name: '防火墙',
                  },
                ],
              },
              {
                id: 'T104',
                name: '网络设备',
              },
              {
                id: 'T105',
                name: '终端设备',
                child: [
                  {
                    id: 'T10501',
                    name: '台式机',
                  },
                  {
                    id: 'T10502',
                    name: '笔记本',
                  },
                ],
              },
            ],
          },
          {
            id: 'T2',
            name: '软件资源',
            child: [
              {
                id: 'T6',
                name: '数据库',
                child: [
                  {
                    id: 'T60319',
                    name: '数据库实例',
                    child: [
                      {
                        id: 'T6031901',
                        name: 'Oracle',
                      },
                      {
                        id: 'T6031902',
                        name: 'MySQL',
                      },
                      {
                        id: 'T6031903',
                        name: 'PostgreSQL',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]

        // 或者如果接口是分级的，可以这样加载：
        // await this.loadLevel1Options();
      } catch (error) {
        console.error('加载分类数据失败:', error)
        this.$message.error('加载分类数据失败')
      }
    },

    // 设置初始选中状态
    setInitialSelection() {
      const { level1Id, level2Id, level3Id, level4Id } = this.urlParams

      // 构建选中数组，过滤掉空值
      const selectedArray = [level1Id, level2Id, level3Id, level4Id].filter((id) => id)

      if (selectedArray.length > 0) {
        // 需要等待DOM更新后设置，确保组件已渲染
        this.$nextTick(() => {
          this.selectedCategories = selectedArray
        })
      }
    },

    changeSelect(value) {
      console.log(value)
    },

    // 如果你的数据需要分级加载，可以使用这个方法
    async loadLevel1Options() {
      try {
        const level1Data = await this.$api.resource.getLevel1Options()
        this.cascadeOptions = level1Data

        // 如果有一级参数，继续加载二级
        if (this.urlParams.level1Id) {
          await this.loadchildOptions(this.cascadeOptions, this.urlParams.level1Id, 1)
        }
      } catch (error) {
        console.error('加载一级选项失败:', error)
      }
    },

    // 递归加载子级选项（用于分级加载的场景）
    async loadchildOptions(parentOptions, parentId, currentLevel) {
      const parentItem = parentOptions.find((item) => item.id === parentId)
      if (!parentItem) return

      try {
        // 根据当前级别加载下一级数据
        let childData = []
        if (currentLevel === 1) {
          childData = await this.$api.resource.getLevel2Options(parentId)
        } else if (currentLevel === 2) {
          childData = await this.$api.resource.getLevel3Options(parentId)
        } else if (currentLevel === 3) {
          childData = await this.$api.resource.getLevel4Options(parentId)
        }

        // Vue.set 确保响应式更新
        this.$set(parentItem, 'child', childData)

        // 如果有下一级参数，继续递归加载
        const nextLevelParam = this.urlParams[`level${currentLevel + 1}Id`]
        if (nextLevelParam && currentLevel < 3) {
          await this.loadchildOptions(childData, nextLevelParam, currentLevel + 1)
        }
      } catch (error) {
        console.error(`加载${currentLevel + 1}级选项失败:`, error)
      }
    },
  },

  watch: {
    // 监听选中值的变化
    selectedCategories(newVal) {
      if (newVal && newVal.length > 0) {
        console.log('当前选中:', newVal)
        // 这里可以处理选中变化后的逻辑
      }
    },

    // 监听路由参数变化（如果页面内参数可能变化）
    '$route.query': {
      handler(newQuery) {
        this.getUrlParams()
        this.setInitialSelection()
      },
      deep: true,
    },
  },
}
</script>
