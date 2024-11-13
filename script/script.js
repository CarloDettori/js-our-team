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



for (let i of teamMembers) {

  template += `
    <!-- card ${i} -->
    <div class="debug d-flex p-3 col-4 ">
      <div class="debug">
        <img class="debug" src="${i.img}" alt="${i.name}">
      </div>
      <div class="d-flex flex-column debug col-8 p-3 text-white bg-black">
        <h6 class="debug">${i.name.toUpperCase()}</h6>
        <p class="debug">${i.role}</p>
        <a class="debug text-decoration-none" href="">${i.email}@team.com</a>
      </div>
    </div>
`
}
cardBox.innerHTML = template;


