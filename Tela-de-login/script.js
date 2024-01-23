function validar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == 'admin' && senha == 'admin'){
        alert("Login efetuado com sucesso")
        location.href = "https://jjoaquimsx.github.io/Porfolio/Meu-Portfolio/"
    }else{
        alert("Usuario ou senha incorretos")
    }
}

