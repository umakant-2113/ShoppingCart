let datafromls= JSON.parse(localStorage.getItem("userData"))

console.log(datafromls)

let formSignup= document.getElementById("signup");
formSignup.addEventListener("submit", submitForm);
// console.log(datafromls)

function submitForm(event){
    event.preventDefault()
    let email=document.getElementById("email").value;
    let password= document.getElementById("password").value

    console.log(email,password)

    datafromls.filter(elm=>{
       if(elm.email==email && elm.password==password){
        alert("sign up success fully")
           window.location.href="data.html"
       }else if(elm.email !==email && elm.password==password){
        alert("email is wrong please fill right email")
       }else if (elm.email==email && elm.password !==password) {
        alert("password is wrong please fill right password")
       }
    })
}