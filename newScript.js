const persons = [
  {
    firstName: "aniko",
    lastName: "shaverdashvili",
    age: 22,
    city: "Tbilisi",
  },
  {
    firstName: "luka",
    lastName: "beridze",
    age: 28,
    city: "Kutaisi",
  },
  {
    firstName: "mariam",
    lastName: "giorgadze",
    age: 21,
    city: "Rustavi",
  },
  {
    firstName: "dato",
    lastName: "kachkachishvili",
    age: 30,
    city: "Telavi",
  },
  {
    firstName: "nino",
    lastName: "tsiklauri",
    age: 27,
    city: "Zugdidi",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
  {
    firstName: "giorgi",
    lastName: "melikishvili",
    age: 24,
    city: "Gori",
  },
];

const userList = document.getElementById("users");

function getUsers(users) {
  userList.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `  
        <h3>saxeli:${user.firstName}</h3>
        <h3>gvari:${user.lastName}</h3>
        <h3>asali:${user.age}</h3>
        <h3>qalaqi:${user.city}</h3>
        <button class="remove-btn">delete</button>
        
        `;
    userList.appendChild(card);
  });
  deleteUser();
}
getUsers(persons);

function deleteUser() {
  const deleteBtns = document.querySelectorAll(".remove-btn");
  deleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      persons.splice(index, 1);
      getUsers(persons);
    });
  });
}
