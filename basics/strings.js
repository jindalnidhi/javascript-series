let str='nidhi'//can create in single quotes
let s="jindal" // can create in double quotes
/*
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
*/
let answer1="It's alright"
let answer2="He is called 'Johnny'"
let answer3='He is called "Johnny"'
/****template allow double or single quotes inside a string*/
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
/*
\' 	' 	Single quote
\" 	" 	Double quote
\\ 	\ 	Backslash
*/
let text1 = "We are the so-called \"Vikings\" from the north."; 
// template allow multiline string
//template not support in internet explorer
let text3 =
`The quick
brown fox
jumps over
the lazy dog`;

let y = new String("John"); // ab ye y object ban jyega
console.log(typeof y);
console.log(typeof text);


let x = new String("John");
let a= new String("John");
console.log(x==y) // false

console.log(x===y) //false
// false bcaz x and s ka reference alag alag hoga 
//agr normal string ko compare krenge unki direct value ko check krega
// agr string ko object ki form check krenge toh unke reference ko bhi dekhega

//*********************//

/*
\b 	Backspace
\f 	Form Feed(move cursor beginning of the next page)
\n 	New Line
\r 	Carriage Return
\t 	Horizontal Tabulator
\v 	Vertical Tabulator(down krega cursor dependaple kis position per krega beginning ya khin bich mein)
*/