function check(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var checkbox = document.getElementById("checkbox");
    
    if(name.length==0){
        alert("Name cannot be empty");
        return(false)
         
    }
    else if(email.length==0){
        alert("Email cannot be empty");
        return(false)
         
    }
    else if(password.length==0){
        alert("Password cannot be empty");
        return(false)
    }
    else if(address.length==0){
        alert("Adress cannot be empty");
        return(false)
    }
    else if(!checkbox.checked){
        alert("Check box agreement cannot be empty");
        return(false)
    }
    else{
        alert("Registered")
        retun (true)
    }
}
