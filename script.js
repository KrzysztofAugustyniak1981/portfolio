
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
  nameClass.textContent = "MY PROJECTS";
  jobClass.textContent = "";
  main.innerHTML = `
  <button class="aboutButton"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 0C8.44891 0 8.63968 0.0790175 8.78033 0.21967C8.92098 0.360322 9 0.551088 9 0.75V7.5H15.75C15.9489 7.5 16.1397 7.57902 16.2803 7.71967C16.421 7.86032 16.5 8.05109 16.5 8.25C16.5 8.44891 16.421 8.63968 16.2803 8.78033C16.1397 8.92098 15.9489 9 15.75 9H9V15.75C9 15.9489 8.92098 16.1397 8.78033 16.2803C8.63968 16.421 8.44891 16.5 8.25 16.5C8.05109 16.5 7.86032 16.421 7.71967 16.2803C7.57902 16.1397 7.5 15.9489 7.5 15.75V9H0.75C0.551088 9 0.360322 8.92098 0.21967 8.78033C0.0790175 8.63968 0 8.44891 0 8.25C0 8.05109 0.0790175 7.86032 0.21967 7.71967C0.360322 7.57902 0.551088 7.5 0.75 7.5H7.5V0.75C7.5 0.551088 7.57902 0.360322 7.71967 0.21967C7.86032 0.0790175 8.05109 0 8.25 0Z" fill="#1F2041"/>
</svg>
&nbsp; Add project</button>
  <div class="projectsPageView">
    <div class="projectCard">
    </div>
  </div>

`;
}
function aboutPage() {
  activClassOff();
  clearMain();
  aboutLink.forEach(link => link.classList.add("active"));
  nameClass.textContent = "ABOUT ME";
  jobClass.textContent = "IT’S A-ME, KRZYS!";
  main.innerHTML = `
  <div class="aboutPageView">
    <img src="./Pictures/f2dbb7e465bd82241abc68d7da376fd7d832d4fd.jpg" alt="Photo of Krzysztof Augustyniak" class="aboutPhoto">
    <div class="aboutTitle">My background</div>

    <div class="aboutTextOne">
      <div class="aboutTextParagraph">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </div>
      <br>
      <div class="aboutTextParagraph">
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </div>
      <br>
      <div class="aboutTextParagraph">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      <br>
      <div class="aboutTextParagraph">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      <br>
      <div class="aboutTextParagraph">
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
      </div>
    </div>

    <div class="aboutTitle">My hobbies and interests</div>
    <div class="aboutTextOne">
      <div class="aboutTextParagraph">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </div><br>
      <div class="aboutTextParagraph">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      <div class="aboutTextParagraph">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div><br>
      <div class="aboutTextParagraph">
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
      </div>
    </div>
  </div>
  <button class="aboutButton"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.64959 1.28033C9.28347 0.987437 9.28347 0.512563 9.64959 0.21967C10.0157 -0.0732233 10.6093 -0.0732233 10.9754 0.21967L15.9754 4.21967C16.3415 4.51256 16.3415 4.98744 15.9754 5.28033L10.9754 9.28033C10.6093 9.57322 10.0157 9.57322 9.64959 9.28033C9.28347 8.98744 9.28347 8.51256 9.64959 8.21967L13.0492 5.5H0.9375C0.419734 5.5 0 5.16421 0 4.75C0 4.33579 0.419734 4 0.9375 4H13.0492L9.64959 1.28033Z" fill="#1F2041"/>
</svg>&nbsp; &nbsp; Contact me</button>
`;
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