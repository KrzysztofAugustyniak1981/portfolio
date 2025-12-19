
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
];
const projects = [
  {
    title: "Calculator",
    technologies: ["HTML"]},
  {
    title: "Non-governmental organization",
    technologies: ["HTML", "CSS"]},
  {
    title: "Calculator program",
    technologies: ["Javascript"]},
  {
    title: "Calculator",
    technologies: ["HTML"]},
  {
    title: "Non-governmental organization",
    technologies: ["HTML", "CSS"]},
];

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
  <button class="aboutButton" id="addProjectBtn">
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 0C8.44891 0 8.63968 0.0790175 8.78033 0.21967C8.92098 0.360322 9 0.551088 9 0.75V7.5H15.75C15.9489 7.5 16.1397 7.57902 16.2803 7.71967C16.421 7.86032 16.5 8.05109 16.5 8.25C16.5 8.44891 16.421 8.63968 16.2803 8.78033C16.1397 8.92098 15.9489 9 15.75 9H9V15.75C9 15.9489 8.92098 16.1397 8.78033 16.2803C8.63968 16.421 8.44891 16.5 8.25 16.5C8.05109 16.5 7.86032 16.421 7.71967 16.2803C7.57902 16.1397 7.5 15.9489 7.5 15.75V9H0.75C0.551088 9 0.360322 8.92098 0.21967 8.78033C0.0790175 8.63968 0 8.44891 0 8.25C0 8.05109 0.0790175 7.86032 0.21967 7.71967C0.360322 7.57902 0.551088 7.5 0.75 7.5H7.5V0.75C7.5 0.551088 7.57902 0.360322 7.71967 0.21967C7.86032 0.0790175 8.05109 0 8.25 0Z" fill="#1F2041"/></svg>
    &nbsp; Add project
  </button>

  <div class="projectsPageView"></div>
`;

  document
    .getElementById("addProjectBtn")
    .addEventListener("click", createProjectModal);

  renderProjects();
};

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
const aboutButton = document.querySelector(".aboutButton");
aboutButton.addEventListener("click", contactPage);
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

function createProjectModal() {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";

  modal.innerHTML = `
    <div class="modal">
      <button class="close-btn">✕</button>

      <h3>Project title</h3>
      <input type="text" id="projectTitle" placeholder="Project title">
      <span class="error-message" id="titleError"></span>
      <h3>Technologies</h3>
      <input type="text" id="projectTech" placeholder="html, css, javascript">
      <span class="error-message" id="techError"></span>
      <button class="add-btn" type="submit"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 0C8.44891 0 8.63968 0.0790175 8.78033 0.21967C8.92098 0.360322 9 0.551088 9 0.75V7.5H15.75C15.9489 7.5 16.1397 7.57902 16.2803 7.71967C16.421 7.86032 16.5 8.05109 16.5 8.25C16.5 8.44891 16.421 8.63968 16.2803 8.78033C16.1397 8.92098 15.9489 9 15.75 9H9V15.75C9 15.9489 8.92098 16.1397 8.78033 16.2803C8.63968 16.421 8.44891 16.5 8.25 16.5C8.05109 16.5 7.86032 16.421 7.71967 16.2803C7.57902 16.1397 7.5 15.9489 7.5 15.75V9H0.75C0.551088 9 0.360322 8.92098 0.21967 8.78033C0.0790175 8.63968 0 8.44891 0 8.25C0 8.05109 0.0790175 7.86032 0.21967 7.71967C0.360322 7.57902 0.551088 7.5 0.75 7.5H7.5V0.75C7.5 0.551088 7.57902 0.360322 7.71967 0.21967C7.86032 0.0790175 8.05109 0 8.25 0Z" fill="#1F2041"/></svg>
    &nbsp; Add project</button>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelector(".close-btn").onclick = () => modal.remove();
  modal.onclick = e => {
    if (e.target === modal) modal.remove();
  };
    modal.querySelector(".add-btn").onclick = () => {
  const titleInput = document.getElementById("projectTitle");
  const techInput = document.getElementById("projectTech");

  const titleError = document.getElementById("titleError");
  const techError = document.getElementById("techError");

  let isValid = true;

  titleError.textContent = "";
  techError.textContent = "";
  titleInput.style.borderBottom = "2px solid #1F2041";
  techInput.style.borderBottom = "2px solid #1F2041";

  if (titleInput.value.trim().length < 3) {
    titleError.textContent = "The title must be at least 3 characters long";
    titleInput.style.borderBottom = "2px solid #AF0808";
    isValid = false;
  } else if (titleInput.value.trim().length > 30) {
    titleError.textContent = "The title must not exceed 30 characters";
    titleInput.style.borderBottom = "2px solid #AF0808";
    isValid = false;
  }

  if (techInput.value.trim() === "") {
    techError.textContent = "Please add some technologies";
    techInput.style.borderBottom = "2px solid #AF0808";
    isValid = false;
  }

  if (!isValid) return;

  projects.push({
    title: titleInput.value.trim(),
    technologies: techInput.value.split(",").map(t => t.trim())
  });

  modal.remove();
  renderProjects();
};

}
function renderProjects() {
  const container = document.querySelector(".projectsPageView");
  container.innerHTML = "";

  if (projects.length === 0) {
    const noProjectsMsg = document.createElement("h3");
    noProjectsMsg.textContent = "There are no projects to display";
    container.appendChild(noProjectsMsg);
    return;
  }

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "projectCard";

    const techList = project.technologies
    .map(tech => `<li>${tech}</li>`)
    .join("");

    card.innerHTML = `
      <button class="delete-btn" data-index="${index}">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.11061V3.34773C17.5395 3.4718 19.0728 3.65022 20.5961 3.88254C20.7112 3.90009 20.8211 3.93745 20.9198 3.99246C21.0184 4.04747 21.1038 4.11907 21.171 4.20317C21.2383 4.28726 21.2861 4.38221 21.3117 4.48258C21.3373 4.58295 21.3402 4.68679 21.3203 4.78816C21.3004 4.88953 21.258 4.98645 21.1956 5.07338C21.1331 5.16032 21.0519 5.23557 20.9565 5.29483C20.8611 5.3541 20.7533 5.39622 20.6395 5.41879C20.5256 5.44136 20.4078 5.44394 20.2927 5.42638L20.045 5.38982L18.8539 19.0421C18.7852 19.8292 18.382 20.5645 17.7248 21.101C17.0675 21.6374 16.2048 21.9354 15.309 21.9355H6.02549C5.12972 21.9354 4.26697 21.6374 3.60976 21.101C2.95254 20.5645 2.54927 19.8292 2.4806 19.0421L1.2883 5.38982L1.0406 5.42638C0.925581 5.44394 0.807765 5.44136 0.693878 5.41879C0.579991 5.39622 0.472264 5.3541 0.376846 5.29483C0.184142 5.17514 0.053279 4.99289 0.0130448 4.78816C-0.0271895 4.58343 0.026501 4.37301 0.162305 4.20317C0.298109 4.03333 0.504902 3.918 0.737193 3.88254C2.26047 3.64994 3.79376 3.47153 5.33334 3.34773V3.11061C5.33334 1.47694 6.77097 0.0814205 8.67082 0.0281485C10.0014 -0.00938282 11.3331 -0.00938282 12.6637 0.0281485C14.5636 0.0814205 16 1.47694 16 3.11061ZM8.72771 1.59393C10.0204 1.55749 11.3141 1.55749 12.6068 1.59393C13.4993 1.619 14.2222 2.28124 14.2222 3.11061V3.22865C11.854 3.10189 9.4793 3.10189 7.11111 3.22865V3.11061C7.11111 2.28124 7.83289 1.619 8.72771 1.59393ZM8.30697 7.80377C8.30245 7.7009 8.27499 7.59981 8.22615 7.50628C8.17731 7.41276 8.10805 7.32862 8.02231 7.25869C7.93658 7.18876 7.83606 7.13439 7.72649 7.0987C7.61691 7.063 7.50044 7.04668 7.38371 7.05065C7.26698 7.05463 7.15228 7.07883 7.04616 7.12188C6.94004 7.16493 6.84458 7.22597 6.76524 7.30153C6.68589 7.37709 6.6242 7.46568 6.5837 7.56225C6.5432 7.65882 6.52468 7.76148 6.52919 7.86436L6.94045 17.2653C6.94956 17.4729 7.05189 17.6689 7.22493 17.81C7.3106 17.8799 7.41106 17.9342 7.52056 17.9699C7.63006 18.0056 7.74646 18.0219 7.86311 18.0179C7.97977 18.0139 8.09439 17.9897 8.20043 17.9467C8.30648 17.9037 8.40187 17.8427 8.48117 17.7672C8.56046 17.6917 8.6221 17.6031 8.66258 17.5066C8.70305 17.4101 8.72155 17.3075 8.71704 17.2047L8.30697 7.80377ZM14.8018 7.86436C14.8105 7.7595 14.7951 7.65418 14.7567 7.55466C14.7182 7.45514 14.6574 7.36347 14.5779 7.28509C14.4984 7.20672 14.4018 7.14326 14.2938 7.09848C14.1859 7.05371 14.0688 7.02853 13.9496 7.02447C13.8304 7.0204 13.7115 7.03752 13.6 7.07481C13.4885 7.11209 13.3866 7.16879 13.3004 7.2415C13.2143 7.31422 13.1456 7.40148 13.0985 7.49808C13.0514 7.59468 13.0269 7.69864 13.0264 7.80377L12.6151 17.2047C12.606 17.4125 12.6909 17.615 12.8512 17.7675C13.0114 17.9201 13.2339 18.0104 13.4696 18.0184C13.7054 18.0265 13.9351 17.9516 14.1082 17.8104C14.2814 17.6692 14.3838 17.4731 14.3929 17.2653L14.8018 7.86436Z" fill="#1F2041"/></svg>
      </button>

      <h3>${project.title}</h3>

      <ul class="tech-list">
        ${techList}
      </ul>
    `;

    container.appendChild(card);
  });
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index;
      projects.splice(index, 1);
      renderProjects();
    });
  });
}