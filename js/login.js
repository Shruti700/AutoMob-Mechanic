function login() {
    const user={
     username : document.getElementById("username").value,
     password : document.getElementById("password").value,
    }
    let result=localStorage.getItem(user.username)
    if(result !=null){
          if(result === user.password){
         
            location.pathname="./home.html";
            let data={
              user: user,
              timenow: Date.now()
            }
            sessionStorage.setItem("1",JSON.stringify(data));
          }
          else{
            alert("Password incorrect");
          }
      }
    else {
          alert("Username not found");           
      }
    }
