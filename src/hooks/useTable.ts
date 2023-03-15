import { ref, reactive, computed, onMounted, toRefs, onActivated } from 'vue'

/**
 * @description table 页面操作方法封装
 * @param {Function} api 获取表格数据 api 方法(必传)
 * @param {Object} initParam 获取数据初始化参数(不必传，默认为{})
 * @param {Boolean} isPageable 是否有分页(不必传，默认为true)
 * @param {Function} dataCallBack 对后台返回的数据进行处理的方法(非必传)
 * */
export const useTable = (
  api: (params: any) => Promise<any>,
  initParam: object = {},
  isPageable = true,
  dataCallBack?: (data: any) => any
) => {
  const state = reactive({
    // 表格数据
    tableData: [],
    // 其他信息
    others: <any>{},
    // 分页数据
    pageable: {
      // 当前页数
      page: 1,
      // 每页显示条数
      size: 20,
      // 总条数
      totalElements: 0
    },
    // 查询参数(只包括查询)
    searchParam: <any>{},
    // 初始化默认的查询参数
    initSearchParam: {},
    // 总参数(包含分页和查询参数)
    totalParam: {}
  })

  /**
   * @description 分页查询参数(只包括分页和表格字段排序,其他排序方式可自行配置)
   * */
  const pageParam = computed({
    get: () => {
      return {
        page: state.pageable.page,
        size: state.pageable.size
      }
    },
    set: (newVal: any) => {
      console.log('我是分页更新之后的值', newVal)
    }
  })

  // 初始化的时候需要做的事情就是 设置表单查询默认值 && 获取表格数据(reset函数的作用刚好是这两个功能)
  onMounted(() => {
    reset()
  })
  onActivated(() => {
    getTableList()
  })
  /**
   * @description 获取表格数据
   * @return void
   * */
  const isSuccess = ref(undefined)
  const getTableList = async () => {
    try {
      // 先更新查询参数
      updatedTotalParam()
      Object.assign(state.totalParam, initParam)
      let { data } = await api(state.totalParam)
      dataCallBack && (data = dataCallBack(data))
      state.tableData = isPageable ? data.content : data
      state.others = data.others
      // 解构后台返回的分页数据(如果有分页更新分页信息)
      const { page, size, totalElements } = data
      isPageable && updatePageable({ page, size, totalElements })
      isSuccess.value = true
    } catch (error) {
      // 判断请求是否成功
      isSuccess.value = false
      console.log(error)
    }
  }
  /**
   * @description 更新查询参数
   * @return void
   * */
  const updatedTotalParam = () => {
    state.totalParam = {}
    // 处理查询参数，可以给查询参数加自定义前缀操作
    const nowSearchParam: { [propName: string]: any } = {}
    // 防止手动清空输入框携带参数（可以自定义查询参数前缀）
    for (const key in state.searchParam) {
      // * 某些情况下参数为 false/0 也应该携带参数
      if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
        nowSearchParam[key] = state.searchParam[key]
      }
    }
    // 特殊处理createTime字段
    if (nowSearchParam.createTime) {
      nowSearchParam.startTime = nowSearchParam.createTime[0]
      nowSearchParam.endTime = nowSearchParam.createTime[1]
      // 兼容测评管理部分的列表查询接口
      nowSearchParam.from = nowSearchParam.createTime[0]
      nowSearchParam.to = nowSearchParam.createTime[1]
      nowSearchParam.createTime = undefined
    }
    Object.assign(state.totalParam, nowSearchParam, isPageable ? pageParam.value : {})
  }

  /**
   * @description 更新分页信息
   * @param {Object} resPageable 后台返回的分页数据
   * @return void
   * */
  const updatePageable = (resPageable) => {
    Object.assign(state.pageable, resPageable)
  }

  /**
   * @description 表格数据查询
   * @return void
   * */
  const search = () => {
    state.pageable.page = 1
    getTableList()
  }

  /**
   * @description 表格数据重置
   * @return void
   * */
  const reset = () => {
    state.pageable.page = 1
    state.searchParam = {}
    // 重置搜索表单的时，如果有默认搜索参数，则重置默认的搜索参数
    Object.keys(state.initSearchParam).forEach((key) => {
      state.searchParam[key] = state.initSearchParam[key]
    })
    getTableList()
  }

  /**
   * @description 每页条数改变
   * @param {Number} val 当前条数
   * @return void
   * */
  const handleSizeChange = (val: number) => {
    state.pageable.page = 1
    state.pageable.size = val
    getTableList()
  }

  /**
   * @description 当前页改变
   * @param {Number} val 当前页
   * @return void
   * */
  const handleCurrentChange = (val: number) => {
    state.pageable.page = val
    getTableList()
  }
  /**
   * @description 当获取数据序号
   * @param {Number} val 当前页
   * @return number
   */
  function typeIndex(index) {
    return index + (state.pageable.page - 1) * state.pageable.size + 1
  }
  return {
    ...toRefs(state),
    getTableList,
    search,
    reset,
    handleSizeChange,
    handleCurrentChange,
    typeIndex,
    isSuccess
  }
}