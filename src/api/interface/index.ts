/*
 * @Author: yujingbo
 * @Date: 2022-11
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-02
 * @Description:
 */
// * 请求响应参数(不包含data)
export interface Result {
  code: number
  message: string
  debug: string
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data?: T
}

// * 分页响应参数
export interface ResPage<T> {
  datalist: T[]
  pageNum: number
  pageSize: number
  total: number
}

// * 分页请求参数
export interface ReqPage {
  page: number
  size: number
  startTime?: string //导入完成开始时间
  endTime?: string //导入完成结束时间
  name?: string //名称
}

// * 登录
export namespace Login {
  export interface ReqLoginForm {
    username: string
    password: string
    code: string
    uuid: string
  }
  export interface ResLogin {
    access_token: string
  }
  export interface ResAuthButtons {
    [propName: string]: any
  }
  export interface verificationCode {
    uuid: string
    img: string
  }
}

// * 用户管理
export namespace User {
  export interface ReqGetUserParams extends ReqPage {
    username: string
    gender: number
    idCard: string
    email: string
    address: string
    createTime: string[]
    status: number
  }
  export interface ResUserList {
    id: string
    username: string
    gender: string
    age: number
    idCard: string
    email: string
    address: string
    createTime: string
    status: number
    avatar: string
    children?: ResUserList[]
  }
}
// 上传
// export namespace Upload {
//   export interface ReqUpload {
//     id: FormData
//     dataFile: File
//   }
// }

// 数据集
export namespace dataset {
  export interface addDataset {
    name: string //数据集名称
    keywords: string //数据集关键字，以英文逗号隔开
    usage: string //数据集用途 通用 训练集 测试集 验证集
    source: string //导入来源 本地导入 数据源 API 系统内置
    modal: string //数据模态 图像IMAGE 文本TEXT 音频AUDIO 表格TABLE
    extra: string //备注
  }
  export interface searchDataset extends ReqPage {
    modal?: string //模态
  }
  export interface editDataset extends addDataset {
    remark: string //备注
    id: string //数据集id
    uuid: string //uuid
    length: string //数据集元素数量
    dataInfo: string //数据信息
    size: string //数据文件大小
    state: string //数据集状态
    finishImportTime: string //导入完成时间
    user: string //创建数据集的用户
    deleted: string //逻辑删除
    createdTime: string //创建时间
    modifiedTime: string //修改时间
  }
  export interface getDetail extends ReqPage {
    id: string
  }
}

// 模型
export namespace model {
  export interface addModel {
    name: string //模型名称
    keywords: string //模型关键词，以英文逗号隔开
    source: string //模型导入来源 本地导入，API，训练任务
    apiUrl: string //模型API地址
    authenticationMethod: string //认证方式 NONE，BASIC，JWT，OAUTH，BEARER_TOKEN，CUSTOM
    token: string //token字符串
    extra: string //备注
    modal: string //模型模态 IMAGE表示图像，TEXT表示文本，AUDIO表示音频，TABLE表示表格，VIDEO表示视频
  }
  export interface apiTest {
    url: string
    auth: string
    token: string
  }
  export interface searchModel extends ReqPage {
    modal?: string //模态
    source?: string //模型来源
  }
  export interface editModel extends addModel {
    id: string //模型id
    uuid: string //uuid
    type: string
    desc: string //模型描述
    state: string //模型状态
    finishImportTime: string //导入完成时间
    user: string //创建模型用户
    deleted: string //逻辑删除
    createdTime: string //创建时间
    modifiedTime: string //修改时间
  }
}

export namespace assess {
  export interface searchAssess extends ReqPage {
    sort?: string
    type?: string
  }
  export interface getMthods {
    name: string // 基于alias搜索
    type?: string // 黑白盒分类：可选参数值：黑盒、白盒
    kind?: string // 测评方法主类
  }
  export interface Method {
    alias: string
    deleted?: boolean
    framework: string
    hidden: string
    id: number
    kind: string
    modal: string
    name: string
    required: boolean
    style: string
    type: string
    interferenceIntensity?: number
    sampleSize?: number
  }

  export interface createAssess {
    name: string
    type: string
    modal: string
    desc: string
    args?: string
    dataset_id: number
    model_id: number
    tests: Array<{
      method: string
      args: string
    }>
  }
  export interface editAssess {
    name: string
    desc: string
  }
}

export namespace task {
  interface test {
    method: string
    args: string
  }
  export interface searchTask extends ReqPage {
    sort?: string
    type?: string
  }
  export interface editPrivacyAssess {
    name: string
    desc: string
  }
  export interface addPrivacyAssess extends editPrivacyAssess {
    modal?: string
    type?: string
  }
  export interface startPrivacyAssess {
    file_uuid: string
    args: string
    tests: test[]
  }
}

export namespace report {
  export interface search extends ReqPage {
    sort?: string[]
  }
  export interface update {
    name: string
    desc: string
  }
  export interface add extends update {
    appWeight: number
    securityWeight: number
    performanceWeight: number
  }
}
