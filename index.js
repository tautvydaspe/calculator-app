let temp
let numbersForAction = []
let afterEqual=false


const zero = document.getElementById("0")
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const plus = document.getElementById("+")
const minus = document.getElementById("-")
const multiplication = document.getElementById("*")
const division = document.getElementById("/")
const equal = document.getElementById("e")
const deleteall = document.getElementById("del")

const field = document.querySelector(".text-field")
const input = document.querySelector(".input")
const print = document.querySelector(".print")
const answerBottom = document.querySelector(".answer")

zero.addEventListener("click", numberPress)
one.addEventListener("click", numberPress)
two.addEventListener("click", numberPress)
three.addEventListener("click", numberPress)
four.addEventListener("click", numberPress)
five.addEventListener("click", numberPress)
six.addEventListener("click", numberPress)
seven.addEventListener("click", numberPress)
eight.addEventListener("click", numberPress)
nine.addEventListener("click", numberPress)
plus.addEventListener("click", actionPress)
minus.addEventListener("click", actionPress)
multiplication.addEventListener("click", actionPress)
division.addEventListener("click", actionPress)
equal.addEventListener("click", equalPress)
deleteall.addEventListener("click", deleteAllPress)


function numberPress(e) {
     input.textContent += parseInt(e.target.innerText)
     if (afterEqual) {
          numbersForAction = []
          answerBottom.textContent = ""
          print.textContent = ""
          afterEqual=false
     }
}

function actionPress(e) {
     temp = input.textContent
     input.textContent = undefined
     if (afterEqual==false) {
          numbersForAction.push(parseInt(temp))
     } else if(e.target.id == "+"||e.target.id == "-"||e.target.id == "*"||e.target.id == "/") {
          afterEqual=false
     } else {

     }
     if (e.target.id == "+") {
          numbersForAction.push("+")
     } else if (e.target.id == "-") {
               numbersForAction.push("-")
     } else if (e.target.id == "/") {
               numbersForAction.push("/")
     } else if (e.target.id == "*") {
               numbersForAction.push("*")
     }
     print.textContent=undefined
     for (let i = 0; i < numbersForAction.length - 1; i++){
          print.textContent += numbersForAction[i]
     }
}

function equalPress() {
     if (afterEqual == false) {
     let ans
     let act
     let isact = false
     temp = input.textContent
     numbersForAction.push(parseInt(temp))
     input.textContent = ""
     for (let i = 0; i < numbersForAction.length; i++){
               
          if ((numbersForAction[i] == "+" && i == 0) || (numbersForAction[i] == "-" && i == 0) || (numbersForAction[i] == "*" && i == 0) || (numbersForAction[i] == "/" && i == 0)) {
               ans="FALSE DATA"
               break
          } else if ((numbersForAction[i] == "+" && isact==true) || (numbersForAction[i] == "-" && isact==true) || (numbersForAction[i] == "*" && isact==true) || (numbersForAction[i] == "/" && isact==true)) {
               ans="FALSE DATA"
               break
          } else if (numbersForAction[i] == "+" || numbersForAction[i] == "-" || numbersForAction[i] == "*" || numbersForAction[i] == "/") {
               act = numbersForAction[i]
               isact=true
          } else {
               isact=false
               if (i != 0) {
                    if (act == "+") {
                         ans = ans + numbersForAction[i]
                    } else if (act == "-") {
                         ans=ans-numbersForAction[i]
                    } else if (act == "/") {
                         console.log("ATEJOM")
                         ans=ans/numbersForAction[i]
                    } else if (act == "*") {
                         ans=ans*numbersForAction[i]
                    }
               } else {
                    ans = parseInt(numbersForAction[i])
               }
               
          }
     }
     if (ans == "FALSE DATA") {
          answerBottom.textContent = ans
     } else {
          answerBottom.textContent = "Answer: " + ans
          print.textContent=undefined
          for (let i = 0; i < numbersForAction.length; i++){
               print.textContent += numbersForAction[i]
          }
     }
     afterEqual=true
     }

}

function deleteAllPress() {
     input.textContent = ""
     print.textContent = ""
     answerBottom.textContent=""
     numbersForAction = []
     afterEqual=false
}