var bob = document.querySelector(".bob");

bob.addEventListener("click", function() {
    bob.style.backgroundColor="pink";
    bob.style.color = "white";
    bob.setAttribute("id", "coolId");
})

var createH1 = document.createElement("h1");
createH1.textContent ="Hi there!";
bob.append(createH1);

// Window alerts
//1. Input: prompt()
var inputData = prompt("What's your name?");

//2. True/False confirm()

var trueFalse = confirm("Do you like Javascript?")
console.log("Name: ", inputData)
console.log("Likes coding: ", trueFalse)
// 3. notification alert()
alert("Hi Chloe!")

// var array = ["dog", "cat", "lion", "elephant"]

// for (var i=0; i < array.length; i++) {
//     //console.log(array[i])
//     if (array[i] ==="dog") {
//         console.log("dog!")
//     } else if(array[i]==="cat") {
//         console.log("Cat!!")
//     } else {
//         console.log("Not a dog or cat")
//     }


// }

// // for (var i=0; i < 2; i++) {
// //     console.log(array[i])

// // }

// // for (var i=2; i < array.length; i++) {
// //     console.log(array[i])

// // }

// //function() {
//     //action
// //}

// function nameOfFunction() {
//     if() {

//     }
// }

// nameOfFunction();



// Window Pop Ups
    // Notification: alert("message");
    // True/False: confirm("message");
    // User Input: prompt("message");


    var createdPassword = "";
  for(var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random()* mustChooseOne.length);
    createdPassword = createdPassword + mustChooseOne;
  }