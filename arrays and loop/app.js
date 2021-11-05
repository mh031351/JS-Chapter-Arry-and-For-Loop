
//Q2
arr = [
    [0 , 1 , 2 , 3],
    [1 , 0, 1, 2],
    [2, 1, 0, 1]
]

// document.write(arr[0] + "<br>")
// document.write(arr[1] + "<br>")
// document.write(arr[2] + "<br>")
document.write('0' +  " " + '1' +  " " + '2'+  " " +  '3'+   "<br>")
document.write('1' +  " " + '0' +  " " + '1'+  " " +  '2'+   "<br>")
document.write('2' +  " " + '1' +  " " + '0'+  " " +  '1'+   "<br>" + "<br>")



///Q3

//using For Loop
for(i = 1; i <= 10; i++){
  document.write(i + "<br>")
}


///Q4
// var tableNum = +prompt("Enter a number to show its multiplication table!")
// var tableLength = +prompt("Enter length multiplication table!")

// document.write("Table Number : " + tableNum + " " +  "<br>"  +  " "  +  "Table Length : " + tableLength  + "<br>")

// for(i = 1; i <= tableLength; i++){
//     document.write(tableNum + " x" + "  " + i + " " + "=" + " " + tableNum*i + "<br>")
// }


//Q5
fruits = ["apple", "banana", "mango", "orange", 
    "strawberry"]

for(i = 0; i < fruits.length; i++){
        document.write("Element at index "   +  i   + "  " +   "is"   + " " + fruits[i] + "<br>")

}



///Q6

//a 
document.write(  "<br>"  +   "Counting  : ")
for(i = 1; i <= 15; i++){
 
    document.write( i +   " ," + "  ")
  }


  //b
  var myArray = [];
document.write(  "<br>"  +   "Reverse Counting  : ")
for(i = 1; i > 0; i-=1){
 
    myArray.push(i);
    document.write( i +   " ," + "  ")

  }
