
//hamburger menu
function hamburger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//zmienne tablice
const contactPeople = [
  {
    name: "Karol",
    email: "karol@email.com",
    message: "Hello, I've reviewed your impressive portfolio and am interested in discussing a potential collaboration. Please call me at 712-218-123 to talk further."
  },
  {
    name: "Ernest",
    email: "ernest@email.com",
    message: "Hello, Please call me at 351-152-555 to talk further."
  },
  {
    name: "Jan",
    email: "jan@email.com",
    message: "Welcome Jan. You created really nice project",
  }
]

//uchwytanie elementów
const messagesLink = document.querySelectorAll(".messagesLink");
const projectsLink = document.querySelectorAll(".projectsLink");
const aboutLink = document.querySelectorAll(".aboutLink");
const contactLink = document.querySelectorAll(".contactLink");
const homeLink = document.querySelectorAll(".homeLink");
const nameClass = document.querySelector(".name");
const jobClass = document.querySelector(".job");
const main = document.querySelector("main");

//dodanie event listenerów
messagesLink.forEach(link => link.addEventListener("click", messagesPage));
projectsLink.forEach(link => link.addEventListener("click", projectsPage));
aboutLink.forEach(link => link.addEventListener("click", aboutPage));
contactLink.forEach(link => link.addEventListener("click", contactPage));
homeLink.forEach(link => link.addEventListener("click", homePage));


//funkcje stron
function messagesPage() {
  activClassOff();
  clearMain();

  messagesLink.forEach(link => link.classList.add("active"));

  nameClass.textContent = "MESSAGES";
  jobClass.textContent = "MESSAGE FROM THE INTERESTED PERSON";
  main.classList.add("main-messages");

  contactPeople.forEach(person => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("messageMain");
    messageDiv.innerHTML = `
      <div class="messagesMainText">Name: ${person.name}</div>
      <div class="messagesMainText">Email: ${person.email}</div>
      <div class="messagesMainText">Message: ${person.message}</div>
    `;
    main.appendChild(messageDiv);
  });
}

function contactPage() {
  activClassOff();
  clearMain();

  contactLink.forEach(link => link.classList.add("active"));
  nameClass.textContent = "CONTACT ME";
  jobClass.textContent = "SAY HELLO TO ME";

  main.innerHTML = `
  <form class="contactPageView">
    <div class="contactTitle">Contact me</div>

    <div class="contactRow">
      <div class="field">
        <label for="Name">Name</label>
        <input type="text" id="Name" placeholder="Your Name">
        <span class="error-message" id="nameError"></span>
      </div>
      <div class="field">
        <label for="Email">Email</label>
        <input type="email" id="Email" placeholder="email@example.com">
        <span class="error-message" id="emailError"></span>
      </div>
    </div>

    <div class="field">
      <label for="Message">Message</label>
      <textarea id="Message" placeholder="Hello, my name is ..."></textarea>
      <span class="error-message" id="messageError"></span>
    </div>

    <button id="contactButton" type="submit">Send message</button>
  </form>
`;
  const form = document.querySelector('form');
  const nameInput = document.getElementById('Name');
  const emailInput = document.getElementById('Email');
  const messageInput = document.getElementById('Message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    if (nameInput.value.trim().length < 3) {
      nameError.textContent = "The name must be at least 3 characters long.";
      document.getElementById('Name').style.borderBottom = '2px solid #AF0808';
      isValid = false;
    } else if (nameInput.value.trim().length > 20) {
      nameError.textContent = "The name must not exceed 20 characters." 
      document.getElementById('Name').style.borderBottom = '2px solid #AF0808';
      isValid = false;
    } else {
      nameError.textContent = '';
      document.getElementById('Name').style.borderBottom = '2px solid #1F2041';
    }
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      document.getElementById('Email').style.borderBottom = '2px solid #AF0808';
      isValid = false;
    } else {
      emailError.textContent = '';
      document.getElementById('Email').style.borderBottom = '2px solid #1F2041';
    }
    if (messageInput.value.trim() === '') {
      messageError.textContent = "The message cannot be empty.";
      document.getElementById('Message').style.borderBottom = '2px solid #AF0808';
      isValid = false;
    } else if (messageInput.value.trim().length > 100) {
      messageError.textContent = "The message must not exceed 100 characters.";
      document.getElementById('Message').style.borderBottom = '2px solid #AF0808';
      isValid = false;
    } else {
      messageError.textContent = '';
      document.getElementById('Message').style.borderBottom = '2px solid #1F2041'
    }
    if (isValid) {
      contactPeople.push({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value,
      });
      alert('Message sent successfully!');
      messagesPage();
    }

  });
}

function projectsPage() {
  activClassOff();
  clearMain();
  projectsLink.forEach(link => link.classList.add("active"));
}
function aboutPage() {
  activClassOff();
  clearMain();
  aboutLink.forEach(link => link.classList.add("active"));
}
function homePage() {
  activClassOff();
  clearMain();
  homeLink.forEach(link => link.classList.add("active"));
}

function activClassOff() {
  const links = document.querySelectorAll(".topnav a");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  const linksFooter = document.querySelectorAll(".footer-left a");
  linksFooter.forEach((link) => {
    link.classList.remove("active");
  })
}
function clearMain() {
  main.innerHTML = "";
  main.classList.remove("main-messages");
};