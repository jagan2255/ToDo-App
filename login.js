var username = document.getElementById("username");
var password = document.getElementById("password");

     // Function to validate Login Details

function validate(callback){

    
    if(username.value==""){
        alert("User Name cannot be Empty");
    }
    else if(password.value==""){
        alert("Password cannot be empty");
    }
    else if(username.value!="admin"){
        alert("Incorrect User Name!");
    }
    else if(password.value!="12345"){
        alert("Incorrect Password!");
    }
    else{
    //CallBack function
        callback();
    }
}
    //function to redirect to homepage after validation
    
function login(){
    location.replace("./home.html")
}