$(document).ready(function(){
    $('.Submit').on('click',function(e){
        e.preventDefault()
        alert("we received your message")
    })
})

function validate(){
    var username= $("#username").val();
    
    var password = $("#psw").val();
    if ( username === "" && password === ""){
    
        alert("Enter your inputs please!")   
    }
     else if ( password.length < 8){
         alert("Your Password is too short!")
     }
     else if (username === "melek houidi" && password !== "melekmelek123"){
        alert("Wrong password!")
     }
     else if ( username !== "melek houidi" || password !== "melekmelek123"){
     alert("Wrong Inputs!")
     }

    else {window.location.replace("file:///C:/Users/RBK/Desktop/RBK-project/index.html");
     
        (alert("welcome melek!" ))
    }
    document.getElementById("psw").value = '' 
    document.getElementById("username").value = '' 
}

  $(document).ready(function(){
    $('.Post').on('click',function(){
        alert("we received your message")
    })
})


