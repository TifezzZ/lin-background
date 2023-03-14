/*
 * @Author: yujingbo
 * @Date: 2023-01
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description: 判断是否修改了传入的数据
 */
import { ref, watch, toRaw } from 'vue'
import { cloneDeep, isEqual } from 'lodash-es'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'

export const useBackTip = (basicForm) => {
  const isEdit = ref(false)
  const initial = cloneDeep(toRaw(basicForm))
  const router = useRouter()

  function confirmation() {
    ElMessageBox.confirm('当前内容未确认保存，是否直接关闭？', '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      router.back()
    })
  }
  function cancel() {
    console.log(isEdit.value)

    if (isEdit.value) {
      confirmation()
    } else {
      router.back()
    }
  }
  watch(basicForm, (val) => {
    if (isEqual(initial, val)) {
      isEdit.value = false
    } else {
      isEdit.value = true
    }
  })
  return {
    isEdit,
    cancel,
    confirmation
  }
}
