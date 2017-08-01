function mergeTwoSortedArrays(a, b) {
  let i = 0, j = 0, sorted = [];
  while (i < a.length && j < b.length) {
    if (a[i] >= b[j]) {
      sorted.push(b[j++]);
    }
    else {
      sorted.push(a[i++]);
    }
  }
  return [...sorted, ...a.slice(i), ...b.slice(j)];
}

function mergeSort(items) {
  if (items.length < 2) {
      return items;
  }
  let middle = items.length / 2 | 0,
      left   = items.slice(0, middle),
      right  = items.slice(middle);
  return mergeTwoSortedArrays(mergeSort(left), mergeSort(right));
}
