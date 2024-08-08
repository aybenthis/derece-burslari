function calTuition(arr, name) {
  let price = 150000;
  if (arr[0] === name || arr[1] === name || arr[2] === name) {
    price = 0;
  } else if (arr[3] === name || arr[4] === name || arr[5] === name) {
    price = price * 0.5;
  } else if (
    arr[6] === name ||
    arr[7] === name ||
    arr[8] === name ||
    arr[9] === name
  ) {
    price = price * 0.7;
  }
  return price;
}
