// team array
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let template = ""
let cardBox = document.getElementById("cardBox")
function cardDrowing() {
  for (let i of teamMembers) {

    template += `
    <!-- card ${i} -->
    <div style="flex: 1 1 auto; min-width: 400px;" class="debug d-flex p-3 pt-5 col-4">
      <div id="img-box" style="flex: 0 0 150px;" class="debug">
        <img class="debug" src="${i.img}" alt="${i.name}">
      </div>
      <div style="flex: 1 1 auto;" class="d-flex flex-column debug col-8 p-3 text-white bg-black">
        <h6 class="debug">${i.name.toUpperCase()}</h6>
        <p class="debug">${i.role}</p>
        <a class="debug text-decoration-none" href="">${i.email}</a>
      </div>
    </div>
`
  }
  cardBox.innerHTML = template;
}
cardDrowing();


const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
  let img = document.getElementById("image").value;
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let mail = document.getElementById("mail").value;
  let newCard = {
    name,
    role,
    mail,
  }
  teamMembers.push(newCard);
  console.log(teamMembers);
  cardDrowing();
})
