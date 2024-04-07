document.addEventListener("DOMContentLoaded", () => {
    const signInBtn = document.getElementById("sign-in-btn");
    const signOutBtn = document.getElementById("sign-out-btn");
    const userName = document.getElementById("user-name");
  
    if (localStorage.getItem("isUserSignedIn")) {
      const initials = localStorage.getItem("userName").charAt(0).toUpperCase();
      userName.innerHTML = initials;
      signInBtn.style.display = "none";
      signOutBtn.style.display = "flex";
      userName.style.display = "flex";
    }
  
    // Add a sign-in click listener
    signInBtn.addEventListener("click", () => {
      localStorage.setItem("isUserSignedIn", true);
      localStorage.setItem("userName", document.getElementById("sign-in-username").value);
      window.location.href = "index.html";
    });
  
    // Add a sign-out click listener
    signOutBtn.addEventListener("click", () => {
      localStorage.removeItem("isUserSignedIn");
      localStorage.removeItem("userName");
      window.location.href = "index.html";
    });
  });