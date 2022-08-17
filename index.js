 document.querySelector("form").addEventListener("submit",submitForm)
 let arr=JSON.parse(localStorage.getItem("userData")) || []

function submitForm(event){
 event.preventDefault()
let name= document.getElementById("name").value;
let email= document.getElementById("email").value;
let password= document.getElementById("password").value;

let obj={
    name:name,
    email:email,
    password:password
}
arr.push(obj)
localStorage.setItem("userData" , JSON.stringify(arr));

window.location.href="signup.html"
alert("register successfully")
}
