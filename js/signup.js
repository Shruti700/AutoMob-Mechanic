const patternTest = (username, email,  password, confirmPassword) => {
    let emailPattern = new RegExp("(?=.*@)(?=.+.com)");
    let passwordPattern = new RegExp("(?=.*[0-9]{10})");
    //   let passwordPattern = new RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])");
    let result=true;
    if(username.length < 4){
        alert("Username is too short");
        result=false;}
    if(!emailPattern.test(email)){
        alert("Email wrong");
        result=false;} 
      if(!passwordPattern.test(password)){ 
        alert("Password wrong");
        result=false;}
      if(password !== confirmPassword ){ 
        alert("Password does not match");
        result=false;}
    return result;
  };
  
  function signup() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    if (patternTest(username, email, password, confirmPassword) == false) {
      localStorage.removeItem(username);
    } 
    else {
      if (localStorage.getItem(username)) {
        localStorage.removeItem(username);
        alert("This username already exists");
      } else {
        localStorage.setItem(username, password);
        window.open("./login.html");
      }
    }
  }
  