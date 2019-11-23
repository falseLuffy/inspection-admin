const statusList = [
  {value: '1', label: '启用'},
  {value: '2', label: '禁用'}
]

const spotCheckStatusList = [
  {value: '1', label: '合格'},
  {value: '0', label: '不合格'}
]
const defectList = [
  {value: '1', label: '有'},
  {value: '0', label: '无'}
]
const publishList = [
  {value: '1', label: '已发布'},
  {value: '0', label: '未发布'}
]

function getLabelByVal(val, arr) {
  let l = arr.length
  let label = ''
  if (l > 0) {
    for (let i = 0; i < l; i++) {
      if (arr[i]['value'] === val) {
        label = arr[i]['label']
        break
      }
    }
    return label
  }
}

export default {
  statusList,
  spotCheckStatusList,
  defectList,
  publishList,
  getLabelByVal
}
