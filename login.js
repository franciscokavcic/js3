document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
  
    // datos de usuarios almacenados en un array para validar
    const usuarios = [
      { nombreUsuario: "francisco", contrasena: "coder" },
      { nombreUsuario: "usuario2", contrasena: "contrasena2" },
      // Paca hasta que me aburra
    ];
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nombreUsuario = document.getElementById("nombreUsuario").value;
      const contrasena = document.getElementById("contrasena").value;
  
      login(nombreUsuario, contrasena);
    });
  
    function login(nombreUsuario, contrasena) {
      // datos para validar usuarios
      let usuarioValido = false;
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombreUsuario === nombreUsuario && usuarios[i].contrasena === contrasena) {
          usuarioValido = true;
          break;
        }
      }
  
      if (usuarioValido) {
        // inicio de sesión exitoso redireccionar 
        window.location.href = "main.html";
      } else {
        // nombre de usuario o contraseña incorrectos mostrar un mensaje de error.
        alert("Nombre de usuario o contraseña incorrectos. Por favor, intenta nuevamente.");
  
        // limpiar los campos del formulario.
        document.getElementById("nombreUsuario").value = "";
        document.getElementById("contrasena").value = "";
      }
    }
  });
  