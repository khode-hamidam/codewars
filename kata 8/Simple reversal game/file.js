function solve(n,k){
    let arr = [...Array(n).keys()];
    for(let i=0; i<n-1; i++){
      arr = [...arr.slice(0,i),...arr.slice(i).reverse()];
    } return arr.indexOf(k);
  }