let alluser=JSON.parse(localStorage.getItem("user"));
        console.log(alluser);    
function signin(e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        console.log(email,password)
        let alluser=JSON.parse(localStorage.getItem("user"));
        console.log(alluser);
        alluser.forEach( function(u){
            if (email === u.email && password === u.password) {
                window.location.href="../Html/index.html"
            }
        });
        alluser.forEach( function(u){
            if (email !== u.email || password !== u.password) {
                document.getElementById("error-msg").innerHTML="wrong email Password";
            }
        });
  }