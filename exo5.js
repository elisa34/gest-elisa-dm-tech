/////////////5
function plusGrand(num) {
  for (let i = 0; i < num.length; i++) {
      for (let j = i + 1; j < num.length; j++) {
          if (num[i] > num[j]) {
              let other = num[i];
              num[i] = num[j];
              num[j] = other;
          }
      }
  }
  return num;
}

console.log(plusGrand([78, 57, 39, 2, 21]));