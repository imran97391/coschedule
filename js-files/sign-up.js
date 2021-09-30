    function signup(e){
        e.preventDefault();
        let name = document.getElementById("name").value;
        console.log(name)
        let email =document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let company = document.getElementById("company").value;
        let website=document.getElementById("website").value;

        console.log(name,email,password,company,website);
        if (localStorage.getItem("user")=== null) {
            localStorage.setItem("user",JSON.stringify([]));
        }

        let user={
            name,
            email,
            password,
            company,
            website,
        }

        let arr=JSON.parse(localStorage.getItem("user"));
        arr.push(user);

        localStorage.setItem("user", JSON.stringify(arr));

        let useri = document.getElementById("signedup");
        console.log(useri);
        if (email !=="" && password !=="" && company !=="" && website !=="" && name!=="") {
            window.location.href = "../Html/sign-in.html";
        }
}