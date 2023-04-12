function ass1() {
  var firstNumber = prompt("Enter First Number");
  var secondNumber = prompt("Enter second Number");

  console.log("Assignment 1");

  if (firstNumber > secondNumber) {
    console.log("The Larger Number is " + firstNumber);
    // document.getElementById ("button1").innerText="The Larger Number is " + firstNumber  ;
  } else if (secondNumber > firstNumber) {
    console.log("The Larger Number is " + secondNumber);
    // document.getElementById ("button1").innerText="The Larger Number is " +secondNumber;
  } else {
    console.log("Both Numbers are Equal");
  }
}

function ass2() {
  var thirdNumber = prompt("Enter any Number");
  console.log("Assignment 2");
  if (thirdNumber > 0) {
    console.log("The Sign is  +");
    // document.getElementById ("button2").innerText="The Sign is + ";
  } else {
    console.log("The Sign is  -");
    // document.getElementById ("button2").innerText="The Sign is - ";
  }
}

function ass3() {
  console.log("assignment 3");
  var num1 = prompt("Enter First Number");
  var num2 = prompt("Enter second Number");
  var num3 = prompt("Enter Third Number");
  var num4 = prompt("Enter Fourth Number");
  var num5 = prompt("Enter Fifth Number");

  var larger = Math.max(num1, num2, num3, num4, num5);
  console.log("The Larger Number is " + larger);
  // document.getElementById ("button3").innerText="The Larger Number is " +larger;
}
function ass4() {
  console.log("Assignment 4");
  for (var i = 0; i < 16; i++)
    if (i % 2 === 0) {
      console.log(i + "is even");
      // document.getElementById ("button3").innerText=i+ "is even";
    } else {
      console.log(i + "is Odd");
      // document.getElementById ("button3").innerText=i+ "is Odd";
    }
}
function ass5(){
    console.log("Assignment 5");
    for (var i=0; i<101; i++)
    if(i%3===0){
    console.log("Fizz");
}
else if (i%5===0){
    console.log("Buzz");
}
else if(i%3===0 && i%5===0){
    console.log("FIzzBuzz")
}
else {
    console.log(i);
}
}

function ass6(){
    console.log("Assignment 6");
    var input1 = Number(document.getElementById("input1").value);
    var input2 = Number(document.getElementById("input2").value);
    var input3 = Number(document.getElementById("input3").value);
    var input4 = Number(document.getElementById("input4").value);
    var input5 = Number(document.getElementById("input5").value);

    var sumOfInput = input1 + input2 + input3 + input4 + input5 ;
    document.getElementById("totalNumber").innerText=" Total Number "+" "+sumOfInput;
    console.log(" Total Number "+" "+sumOfInput);
    var average = sumOfInput /500 * 100 ;
    var tatalAverage = document.getElementById("average").innerText=" Average "+" "+average+"%";
    console.log(" Average "+" "+average+"%");
     if (average<35){
        document.getElementById("grade").innerText="Failed"
        console.log("Failed")

    }
    else if(average<40){
        document.getElementById("grade").innerText="Grage E";
        console.log("Grage E");
    }
   else if(average<50){
        document.getElementById("grade").innerText="Grage D";
        console.log("Grage D");

    }
   else if(average<60){
        document.getElementById("grade").innerText="Grage C";
        console.log("Grage C");

    }
   else if(average<70){
        document.getElementById("grade").innerText="Grage B";
        console.log("Grage B");

    }
   else if(average<80){
        document.getElementById("grade").innerText="Grage A";
        console.log("Grage A");

    }
   else if(average<90){
        document.getElementById("grade").innerText="Grage A+";
        console.log("Grage A+");

    }
   else if(average<100){
        document.getElementById("grade").innerText="Grage A+";
        console.log("Grage A+");

    }




}
