//stack(primitve) , heap(referenced)
let name="nidhi"
let anothername=name;
anothername="jindal"
console.log(name)
console.log(anothername)
/********** stack mein stack mein agr koi variable pass krte hain toh uski value ya 
bol sakte hain uski copy pass hoti hai rather than reference ans dusre variable ki value change krne mein phle 
per koi frak nhi padega */

let student=
{
    student_name : "nidhi",
    rollno : 42
}

let student1=student
student1.student_name="swapnil"
console.log(student)
/*
heap mein agr koi varibale pass krte toh uska reference pass hoga and ek variable mein change
krne se dusre variable mein bhi change dikhega
*/