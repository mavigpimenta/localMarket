var loginNo = document.getElementById("modalLoginNo");
function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  loginNo.style.display = "none";

  if (nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };
    
    localStorage.setItem("usuario", JSON.stringify(user));
    window.location.href = "../Loja/loja.html";
  } else {
    loginNo.style.display = "block";
  }
}

function error() {
  loginNo.style.display = "none";
}