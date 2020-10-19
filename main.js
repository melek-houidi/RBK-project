$(document).ready(function(){
    $('.Submit').on('click',function(e){
        e.preventDefault()
        alert("we received your message")
    })
})

function validate(){
    var email = $("#username").val();
    var password = $("#psw").val();
    if ( email === "" && password === ""){
        alert("Enter your inputs please!")
    
    }
     else if ( password.length < 5){
         alert("Your Password is too short!")
     }
    else if ( email === "melek" && password !== "melekmelek"){
        alert("welcome")
    }
}