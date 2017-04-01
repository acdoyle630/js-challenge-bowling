/*jshint esversion: 6*/

module.exports = ( arr ) => {
  var score = 0;
  if( arr instanceof Array === true ){
    for(var i=0; i<arr.length; i++) {
      if(arr[i][1] !== 10 ){
      score += arr[i][1];
      score += arr[i][2];
      }
      if(arr[i][1] + arr[i][2] === 10 && arr[i] !== arr[9]){
        score += arr[i + 1][1];
      }
      if(arr[i][1] === 10 && arr[i] !== arr[9]){
        score += arr[i][1];
        score += arr[i+1][1];
        score += arr[i+1][2];
      }
      if(arr[i][1] + arr[i][2] === 10 && arr[i] === arr[9] ){
        score += arr[i][3];
        score += arr[i][3];
      }
      if(arr[i][1] === 10 && arr[i] === arr[9]){
        score += arr[i][1];
        score += arr[i][2];
        score += arr[i][3];
      }

  }

  } return score;

};


//console.log(module.exports([{1:8, 2:1}]));

