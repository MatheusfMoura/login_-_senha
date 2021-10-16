function Login(){
    var done=0;
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
    if (username=="admin" && password=="qwe123") {
    window.location="http://127.0.0.1:5500/Projetos/BelloAlimentos/BelloLogin_2/Bi.html"; done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
    }