function confirm_pass() {

    let senha = document.getElementById("password").value;
    let senha_confirmar = document.getElementById("password-confirm").value;

    if (senha == senha_confirmar) {
        alert("Cadastro feito com sucesso!!");
        let nome = document.getElementById("name-register").value;
        let Email = document.getElementById("email-register").value;
        let CPF = document.getElementById("cpf-register").value;

        window.location.href = "login.html";
        localStorage.setItem("password", senha);
        localStorage.setItem("name-register", nome);
        localStorage.setItem("cpf-register", CPF);
        localStorage.setItem("email-register", Email);

    } else if(nome == "" || Email == "" || CPF == "" || senha_confirmar == ""){
                alert("Senhas incorretas!!");
    }else {
        alert("Senhas incorretas!!");
    }
}


function confirm_login() {

    let nome = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let CPF = document.getElementById("cpf").value;
    let data = document.getElementById("date").value;
    let senha_login = document.getElementById("password-login").value;

    let CPF_register = localStorage.getItem("cpf-register");
    let Email_register = localStorage.getItem("email-register");
    let nome_register = localStorage.getItem("name-register");
    let senha = localStorage.getItem("password");
    ;
    let data_atual = new Date();
    let ano = data_atual.getFullYear();
    let mes = String(data_atual.getMonth() + 1).padStart(2, '0');
    let dia = String(data_atual.getDate()).padStart(2, '0');

    let data_atual_formatada = `${ano}-${mes}-${dia}`;

    if (nome !== nome_register) {
        alert("Nome de usuário incorreto!!");
        return;
    }
    if (Email !== Email_register) {
        alert("E-mail incorreto!!");
        return;
    }
    if (senha_login !== senha) {
        alert("Senha incorreta!!");
        return;
    }
    if (CPF !== CPF_register) {
        alert("CPF incorreto!!");
        return;
    }
    if (data !== data_atual_formatada) {
        alert("Data atual incorreta!!");
        return;
    }
    alert(`Bem vindo ${nome}!!`);
    alert(`Suas informações: 
        CPF: ${CPF}
        E-mail: ${Email}
        Senha: ${senha}`)
    window.location.href = "index.html";
}


function page(){

    let info = document.getElementById("pergunta").value;
    
    alert(`Enviando seguinte informações da doação ao nosso suporte:

        ${info}

        Entre em contato com o nosso suporte através do número no final desta página para
        doação ser aprovada, a data atual de hoje já foi salva como "provável doação" ao sistema do nosso suporte. :)`);
}