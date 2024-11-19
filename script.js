let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");


pass.addEventListener("input", () =>{
    if(pass.value.length > 0){
        msg.style.display = "block"
    }else{
        msg.style.display = "none"
    }
    if(pass.value.length < 5){
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925"
        msg.style.color = "#ff5925"
    }else if(pass.value.length >= 5 && pass.value.length < 8){
        str.innerHTML = "Medium"
         pass.style.borderColor = "yellow"
        msg.style.color = "yellow"
    }else if(pass.value.length >= 8){
        str.innerHTML = "Strong"
         pass.style.borderColor = "#26d730"
        msg.style.color = "#26d730"
    }
})