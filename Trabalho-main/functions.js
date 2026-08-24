function confirm_pass() {
    let senha = document.getElementById("password").value;
    let senha_confirmar = document.getElementById("password-confirm").value;
    if (senha == senha_confirmar) {
        alert("Cadastro feito com sucesso!!");
        window.location.href = "login.html";
    }else{
        alert("Senha incorreta!!");
    }
}

function confirm_login(){
    let nome = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let CPF = document.getElementById("cpf").value;
    let data = document.getElementById("date").value;
    let senha_login = document.getElementById("password-login").value;

    let CPF_register = document.getElementById("cpf-register").value;
    let Email_register = document.getElementById("email-register").value;
    let nome_register = document.getElementById("name-register").value;

    if (nome == nome_register){
        if (Email == Email_register){
            if (senha_login == senha){
                if (CPF == CPF_register){
                    alert(`Bem vindo ${nome} !!`)
                }   window.location.href = "index.html";
            }    
        }   
    }
}