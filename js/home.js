const user = JSON.parse(sessionStorage.getItem("1")).user;
function logOut() {
  sessionStorage.clear();
  location.pathname = "./home.html";
}
if (user !== null) {
  const navbar = document.getElementById("nav");
  navbar.innerHTML = "Hi " + user.username + " | ";
  navbar.style = "color:white; ";
  let home = document.createElement("a");
    home.href = "home.html";
    home.innerHTML = "Home";
    navbar.append(home);
  if (user.username === "admin" || user.username === "Admin") {
    let report = document.createElement("a");
    report.href = "report.html";
    report.innerHTML = "Reports";
    navbar.append(report);
  } else {
    let service = document.createElement("a");
    service.href = "services.html";
    service.innerHTML = "Services";
    navbar.appendChild(service);
    let booking = document.createElement("a");
    booking.href = "booking.html";
    booking.innerHTML = "Booking";
    navbar.appendChild(booking);
  }
  let logout = document.createElement("a");
  logout.innerHTML = "Logout";
  navbar.appendChild(logout);
  logout.addEventListener("click", () => logOut());
  let about = document.createElement("a");
  about.href = "mailto:contact@automob.co.in";
  about.innerHTML = "contact@automob.co.in";
  navbar.append(about);
  let mob = document.createElement("a");
  mob.innerHTML = "999 999 9999";
  navbar.append(mob);
  let bookbtn=document.getElementById('bookbtn');
    bookbtn.href="booking.html";
  let servicebtn=document.getElementById('servicebtn');
    servicebtn.href="services.html";
}

