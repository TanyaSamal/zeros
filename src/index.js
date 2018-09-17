module.exports = function getZerosCount(number) {
  let count = 0;
  for(let i = 1; i <= number; i++){
      if (i % 5 == 0){
          let divFive = i;
          while(divFive % 5 == 0){
              divFive /= 5;
              count++;
          }
      }
  }
  return count;
}
