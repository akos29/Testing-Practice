function stringLength(a) {
  const len=  a.length;
  if(len>0 && len<=10){
    return len;
  } 
  throw new Error( "The character length must between one and ten");
}

module.exports = stringLength;