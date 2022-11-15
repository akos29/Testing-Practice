const capitalize= (str) =>{
    let words= str.split(" ");
    words.forEach((el,i,arr) => {
        arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    });
  return words.join(" ");
}

module.exports =capitalize;