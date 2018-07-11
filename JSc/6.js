var a1=[1 ,5 ,4 ,7];
       var a2=[5,4,9,2];
       var a3=a1.concat(a2);
       var newArray = a3.filter((elem, i, arr)=>{
 if (arr.indexOf(elem) === i) {
   return elem
 }

})
    console.log(newArray);