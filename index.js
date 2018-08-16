function produceDrivingRange(blockrange) {
  return function(firstblock, secondblock){
    let blockdiff = secondblock.slice(0,2) - firstblock.slice(0,2);
    console.log(blockdiff);
    //debugger;
    if (blockdiff > blockrange) {
      return (blockdiff - blockrange) + ' blocks out of range';
    } else {
      return 'within range by ' + (blockrange - blockdiff);
    }
  }
}

function produceTipCalculator(percentTip){
  return function (bill) {
    return bill * percentTip;
  }
}
