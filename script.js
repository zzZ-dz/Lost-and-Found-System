// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// 自动轮播
setInterval(() => {
    showImage(currentIndex + 1);
}, 3000);

// User Authentication forms (in user-auth.html)
const registerBtn = document.querySelector(".auth-buttons .btn:nth-child(1)");
const loginBtn = document.querySelector(".auth-buttons .btn:nth-child(2)");
const registerSection = document.getElementById("register-section");
const loginSection = document.getElementById("login-section");

if (registerBtn && loginBtn && registerSection && loginSection) {
    // Show registration form
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        registerSection.style.display = "block";
        loginSection.style.display = "none";
    });

    // Show login form
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginSection.style.display = "block";
        registerSection.style.display = "none";
    });
}
// Toggle between login and registration forms
document.getElementById("login-btn").addEventListener("click", function() {
    document.getElementById("login-form").classList.add("active");
    document.getElementById("register-form").classList.remove("active");
    this.classList.add("active");
    document.getElementById("register-btn").classList.remove("active");
});

document.getElementById("register-btn").addEventListener("click", function() {
    document.getElementById("register-form").classList.add("active");
    document.getElementById("login-form").classList.remove("active");
    this.classList.add("active");
    document.getElementById("login-btn").classList.remove("active");
});
// Forget Password functionality
const forgetPasswordLink = document.createElement("p");
forgetPasswordLink.classList.add("forget-password");
forgetPasswordLink.innerHTML = `<a href="#">Forget Password?</a>`;
forgetPasswordLink.style.textAlign = "right"; // Align to the right
forgetPasswordLink.style.marginTop = "10px"; // Add some spacing

// Append Forget Password link to the login form if it exists
if (loginSection) {
    loginSection.querySelector("form").appendChild(forgetPasswordLink);
}

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                alert("Thank you for your feedback!");
                contactForm.reset(); // 重置表单
            } else {
                alert("Please fill in all required fields.");
            }
        });
    }
});

// Placeholder for admin login form submission
document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Admin login successful!"); // 提示成功
});

document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Admin login successful!");
    }
});








    






