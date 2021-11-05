//Q1
//empty array
// strArray = [];
// //Q3
// //strings array
// arr = ["tahir" , "ouzar" , "hussain" , "moom" , "nehal"]
// //Q4/
// //number array
// numArr = [3 , 5, 54]
//Q5 
//Boolean Array


//newArr = [true]
//newArr = [false]
//Q6


//Mixed Array
//arr = [ 'Mango', { name: 'why' }, true, function() { alert('hello world'); } ];
//Q7
   
   document.write("<h1>Qualifications</h1>")
newArr = ["SSC part 1" , "HSC" , "MS" , "BS" , "BCOM" , "BSC" , "M.Phil." , "PhD"]

document.write( "1) " + " " +  newArr[0] + "<br>"+ "<br>") 
document.write( "2) " + " " +  newArr[1] + "<br>"+ "<br>")
document.write( "3) " + " " +  newArr[2]+ "<br>"+ "<br>")
document.write( "4) " + " " +  newArr[3]+ "<br>"+ "<br>")
document.write( "5) " + " " +  newArr[4]+ "<br>"+ "<br>")
document.write( "6) " + " " +  newArr[5]+ "<br>"+ "<br>")
document.write( "7) " + " " +  newArr[6]+ "<br>"+ "<br>")
document.write( "8) " + " " +  newArr[7]+ "<br>"+ "<br>")


///Q8
stdNames = ["Fahad" , "Hussain" , "Khanzada"]

stdScore = [234 , 250 , 888]

totalMarks = 500


var perc1 = stdScore[0]/totalMarks * 100
var perc2 = stdScore[1]/totalMarks * 100
var perc3 = stdScore[2]/totalMarks * 100
document.write("Score of " + stdNames[0] + " " + "is" + " "+ stdScore[0] + "<br>" + "& Percentage is " + perc1 + "%" + "<br>" + "<br>")
document.write("Score of " + stdNames[1] + " " + "is" + " "+ stdScore[1] + "<br>" + "& Percentage is " + perc2 + "%" + "<br>" + "<br>")
document.write("Score of " + stdNames[2] + " " + "is" + " "+ stdScore[2] + "<br>" + "& Percentage is " + perc3 + "%" + "<br>" + "<br>")



//Q9
colorArr = ["green" , "white" , "brown" , "black"]
document.write("<h1>Array with color names</h1>")
document.write(colorArr + "<br>")
//a 
document.write("<h1> a) new color name at beginning of the array</h1>" )

colorArr.unshift("red")
document.write(colorArr)


//b
colorArr.push("indigo")
document.write("<h1> b) new color name at the end of the array</h1>" + "<br>")

document.write(colorArr)

//c////


colorArr[0] = "sky blue"
colorArr[1] = " orange"

document.write("<h1>c) add two new color name at the beginning of the array</h1>" + "<br>")
document.write(colorArr)

//d///
colorArr.shift()
document.write("<h1> d) remove first color name of the array</h1>" + "<br>")

document.write(colorArr)

//e///
colorArr.pop()
document.write("<h1> e) remove last color name of the array</h1>" + "<br>")

document.write(colorArr)



//Q10//////
//Using Arrays sort method
arr = [320, 230, 480, 120]
document.write("<h1> A Program to store student scores in an array & sort the array in ascending order using Array’s sort method.</h1>")
document.write("<b>Scores of Students : </b>" + " " + arr + "<br>")
arr.sort()
document.write("<b>Ordered Scores of Students : </b>" + " " + arr + "<br>")

//Q11////////


 cities = ["Karachi", "Lahore", "Islamabad " , "Quetta" , "Peshawar"];
 selectedCities = cities.slice(2 , 4);
 document.write(   "<br>"+ selectedCities);



 //Q12 ///

 var arr = ["This" , "is" , "my" ,  "cat"];
 document.write(  "<br>" +"<br>" +"<br>" +"<br>" +"<br>" +"Array: " + " " + "<br>" +  arr)
document.write(  "<br>" +"<br>" +"<br>" +"<br>" + "String Array: " +  " " +  "<br>" + arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " " + ".")




///Q13 ////

devices = ["keyboard" , "mouse" , "printer" , "monitor"]
document.write(  "<br>" +"<br>" +"<br>" +"<br>" +"<br>" +"Devices: " + " " + "<br>" +  devices)

document.write(  "<br>" +"<br>" +"<br>" +"<br>" + "Output: " +  " " +  "<br>" + devices[0] + "<br>" + "<br>" +"Output: " + " " +  "<br>" + devices[1] + " " +  "<br>" +"<br>" +"Output: " +  "<br>" +devices[2] + " " + "<br>"  + "<br>" +"Output: " +  "<br>"  + devices[3])

//Q14////

document.write("<hr>")
devices = ["keyboard" , "speaker" , "laptop" , "printer"]
document.write(  "Devices: " + " " + "<br>" +  devices)

document.write(  "<br>" +"<br>" +"<br>" +"<br>" + "Output: " +  " " +  "<br>" + devices[3] + "<br>" + "<br>" +"Output: " + " " +  "<br>" + devices[2] + " " +  "<br>" +"<br>" +"Output: " +  "<br>" +devices[1] + " " + "<br>"  + "<br>" +"Output: " +  "<br>"  + devices[0])


//Q15///////

function favBrowser() {
    var mylist = document.getElementById("myList");
    document.getElementById("favorite").innerHTML= "Your phone manufacturer is: " +  mylist.options[mylist.selectedIndex].text;
}




