//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let myNumber1, myNumber2, myNumber3: number;
myNumber1 = parseInt(prompt('المرجو كتابة العدد الاول'));
myNumber2 = parseInt(prompt('المرجو كتابة العدد الثاني'));
myNumber3 = myNumber1 * myNumber2;
if (myNumber3 > 0) {
  console.log('ضرب العددين موجب');
} else {
  console.log('اضرب العدد سالب');
}
