let eyeIcon1 = document.getElementById("eyeIcon1");
let eyeIcon2 = document.getElementById("eyeIcon2");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

eyeIcon1.onclick = function (){
    if (password1.type == "password" ){
        password1.type = "text";
        eyeIcon1.src = "eye-open.png";
    }else{
        password1.type = "password";
        eyeIcon1.src = "eye-close.png";

    }
}
eyeIcon2.onclick = function (){
    if (password2.type == "password" ){
        password2.type = "text";
        eyeIcon2.src = "eye-open.png";
    }else{
        password2.type = "password";
        eyeIcon2.src = "eye-close.png";
    }
}
