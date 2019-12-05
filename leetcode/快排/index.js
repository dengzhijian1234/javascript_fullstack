a = [12, 23, 123, 53, 67, 34, 24, 89]
// 1. 选择一个元素作为基准 53
// 2. 所有小于基准的元素，都移到基准的左边，所有大于基准的元素，都移到基准的右边
// 3. 对基准左右两边的子集，重复 1  2 步骤


var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2)
  var pivot = arr.splice(pivotIndex, 1)[0] //5
  var left  = []
  var right = []

  for (i=0;i<arr.length;i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
  
}
console.log(quickSort(a))
