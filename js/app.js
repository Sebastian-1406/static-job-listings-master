const lista = document.getElementById("listCards");
const bg = document.querySelector(".bg-header");
const btnRemove = document.querySelector(".limpiar");
const listaFilters = document.querySelector(".lista-filter")


lista.addEventListener("click", evt => {


  let valor = evt.target
  let clase = valor.parentNode.classList
  let card = document.querySelectorAll(".card")    
  if(clase.contains("perfil-tecnologia")){
    let li = document.createElement("li")
    let texto = document.createTextNode(valor.textContent)

    let button = document.createElement("button")
    let img = document.createElement("img")

    img.src = "./images/icon-remove.svg"
    button.classList.add("remove")
    button.appendChild(img)
    li.appendChild(texto)
    li.append(button)
    listaFilters.appendChild(li)  
  }
  card.forEach(element => {
      
    if(valor.textContent === "Senior"){
      if(element.classList.contains("Senior")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Junior"){
      if(element.classList.contains("Junior")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Midweight"){
      if(element.classList.contains("Midweight")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Fullstack"){
      if(element.classList.contains("Fullstack")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Frontend"){
      if(element.classList.contains("Frontend")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Backend"){
      if(element.classList.contains("Backend")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "CSS"){
      if(element.classList.contains("CSS")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "JavaScript"){
      if(element.classList.contains("JavaScript")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "HTML"){
      if(element.classList.contains("HTML")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Ruby"){
      if(element.classList.contains("Ruby")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Python"){
      if(element.classList.contains("Python")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "RoR"){
      if(element.classList.contains("RoR")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Sass"){
      if(element.classList.contains("Sass")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Vue"){
      if(element.classList.contains("Vue")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "Django"){
      if(element.classList.contains("Django")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }
    else if(valor.textContent === "React"){
      if(element.classList.contains("React")){
        element.classList.remove("delete")
      }else {
        element.classList.add("delete")
      }
    }

  })

})


listaFilters.addEventListener("click", (evt) => {

  let valor = evt.target
  let card = document.querySelectorAll(".card")

  if(valor.classList.contains("remove")){  
    valor.parentNode.outerHTML = ""
    card.forEach(element => {
      if(element.classList.contains("delete")){
        element.classList.remove("delete")
      }
    })
  }else if(valor.nodeName == "IMG"){
    valor.parentNode.parentNode.outerHTML = ""
    card.forEach(element => {
      if(element.classList.contains("delete")){
        element.classList.remove("delete")
      }
    })
  }


})


btnRemove.addEventListener("click", () => {
  let card = document.querySelectorAll(".card")
  
  listaFilters.innerHTML = ""
  card.forEach(element => {
    if(element.classList.contains("delete")){
      element.classList.remove("delete")
    }
  })

})

const getData = () => {
    fetch("../data.json")
    .then(data => data.json())
    .then(response => listsOfCards(response))
}

const ventana = () => {

  const width = window.innerWidth


  if(window.innerWidth >= 700){
      bg.src = "./images/bg-header-desktop.svg"
  }
  else {
      bg.src = "./images/bg-header-mobile.svg"
  }

}

const listsOfCards = (data) => {
 
    data.forEach(({company, contract, featured, languages, level, location, logo, position, postedAt, role, neew, tools}) => {
        let salida = ""
        
        salida = `
        <div class="card ${role} ${level} ${languages.map(element => `${element}`).join(" ")} ${tools.map(element => `${element}`).join("")}">
            <div class="perfil">
              <img src=${logo} alt="" class="img-card">
              <div>
                <ul class="perfil-post">
                  <li>${company}</li>
                  ${neew ? '<li class="alert new">new!</li>' : ""}
                  ${featured ? '<li class="alert featured">featured</li>' : ""}
                </ul>
                <p class="position">${position}</p>
                <ul class="time">
                  <li>${postedAt}</li>
                  <li>${contract}</li>
                  <li>${location}</li>
                </ul>
              </div>
            </div>
            <div class="perfil-tecnologia">
              <p class="role">${role}</p>
              <p class="level">${level}</p>
              ${languages.map(element => `<p>${element}</p>`).join("")}
              ${tools.map(element => `<p>${element}</p>`).join("")}
            
            </div>
        </div>`

        lista.innerHTML += salida
    });
}



window.addEventListener("load", getData);
window.addEventListener("load", ventana);

