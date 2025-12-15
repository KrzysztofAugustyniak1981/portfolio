
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
  { name: "Karol",
    email: "karol@email.com",
    message: "Hello, I've reviewed your impressive portfolio and am interested in discussing a potential collaboration. Please call me at 712-218-123 to talk further."
  },
  { name: "Ernest",
    email: "ernest@email.com",
    message: "Hello, Please call me at 351-152-555 to talk further."
  },
  { name: "Jan",
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


function activClassOff() {
  const links = document.querySelectorAll(".topnav a");
  links.forEach((link) => {
    link.classList.remove("active");
  });
}
function clearMain() {
  main.innerHTML = "";
  main.classList.remove("main-messages");
};