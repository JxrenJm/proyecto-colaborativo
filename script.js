document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Inicio de sesión exitoso.");
        window.location.href = "dashboard.html";
      });
    }
  
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Registro completado.");
        window.location.href = "login.html";
      });
    }
  });
  