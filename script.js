const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
function opennav(){
    const mobnav = document.getElementById("allnavcancel");
    mobnav.style.display = "block";
}
function cancelnav(){
    const nvcancel = document.getElementById("allnavcancel");
    nvcancel.style.display = "none";
}
const users = [];

function reg() {
    let username = document.getElementById("u-Name").value;
    let email = document.getElementById("reg-Email").value;
    let password = document.getElementById("pwd").value;
    let confirmpassword = document.getElementById("conpwd").value;
    let pwd1 = password === confirmpassword;

    if (username && email && password && confirmpassword && pwd1) {
        users.push({ Username: username, email: email, password: password, confirmpassword: confirmpassword });

        console.log("You have successfully added a user");
        alert("Registration Successful");
        console.log(users);
        document.getElementById("u-Name").value = '';
        document.getElementById("reg-Email").value = '';
        document.getElementById("pwd").value = '';
        document.getElementById("conpwd").value = '';
    } else if (!username) {
        alert("Please fill your registration form");
        console.log("Username input is empty");
    } else if (!email) {
        console.log("Email input is empty");
    } else if (!password) {
        console.log("Please enter your strong password");
    } else if (!confirmpassword) {
        console.log("Please confirm your password");
    } else if (password !== confirmpassword) {
        alert("Your confirm password is incorrect");
    }
}

function login() {
    let loginemail = document.getElementById("logemail").value;
    let loginpassword = document.getElementById("logpwd").value;
    let user = users.find(user => user.email === loginemail && user.password === loginpassword);
    if (user) {
        alert("Login successful");
        let cardWidth = prompt("Enter card width (e.g., '300px'):");
        let cardHeight = prompt("Enter card height (e.g., '200px'):");
        let cardBorder = prompt("Enter card border (e.g., '1px solid black'):");
        let cardBorderRadius = prompt("Enter card border radius (e.g., '10px'):");
        let cardFontSize = prompt("Enter card font size (e.g., '16px'):");
        let cardFontColor = prompt("Enter card font color (e.g., '#000'):");
        let cardFontStyle = prompt("Enter card font style (e.g., 'italic', 'normal'):");
        showUserCard(user, cardWidth, cardHeight, cardBorder, cardBorderRadius, cardFontSize, cardFontColor, cardFontStyle);
    } else {
        alert("Invalid email or password");
    }
}

function showUserCard(user, width, height, border, borderRadius, fontSize, fontColor, fontStyle) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = `
        <div class="user-card animate-card" style="width: ${width}; height: ${height}; border: ${border}; border-radius: ${borderRadius}; font-size: ${fontSize}; color: ${fontColor}; font-style: ${fontStyle}; margin-top: 50px;">
            <p>Username: ${user.Username}</p>
            <p>Email: ${user.email}</p>
            <p>Password: ${'*'.repeat(user.password.length)}</p>
        </div>
    `;

    const card = document.querySelector('.user-card');
    setTimeout(() => {
        card.classList.remove('animate-card');
    }, 1000); // Adjust the timing as necessary
}

// Adding styles for the card and animation
const style = document.createElement('style');
style.innerHTML = `
    .user-card {
        padding: 20px;
        margin: 20px;
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
    }
    .animate-card {
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);