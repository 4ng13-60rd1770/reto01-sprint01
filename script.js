

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

let printInfo = document.getElementById("Info")

btn1.addEventListener("click",()=>{
    
    btn1.classList.add("color")
    btn2.classList.remove("color")
    btn3.classList.remove("color")

    printInfo.innerHTML =" "

    printInfo.innerHTML =`
   
<div class="containerImgInfo1">
  <img src="https://res.cloudinary.com/dpyo5aklw/image/upload/v1649034176/izq_e8xlgi.png" alt="">
</div>

<div class="container-Info">

<h1>A Simple Bookmark Manager</h1>

          <p>
            Organize your bookmarks however you like. Our <br> 
            simple drag-and-drop interface gives you complete <br>
             control over how you manage your favourite sites.
          </p>

    <button class= "btnmore"> More Info</button>
</div>
    
    `


})

btn2.addEventListener("click",()=>{
    btn2.classList.add("color")
    btn1.classList.remove("color")
    btn3.classList.remove("color")
    printInfo.innerHTML =" "
    printInfo.innerHTML =`
   
    <div class="containerImgInfo2">
      <img src="https://res.cloudinary.com/dpyo5aklw/image/upload/v1649035701/illustration-features-tab-2_scmvtm.svg" alt="">
    </div>
    
    <div class="container-Info">
    
    <h1> Intelligent search</h1>
    
              <p>
              Our powerful search feature will help you find<br>
               saved sites in no time at all. <br>
              No need to trawl through all of your bookmarks..
              </p>
              <button class= "btnmore"> More Info</button>
    </div>
        
        `
})

btn3.addEventListener("click", ()=>{
    btn3.classList.add("color")
    btn1.classList.remove("color")
    btn2.classList.remove("color")
    printInfo.innerHTML =" "

    printInfo.innerHTML =`
   
    <div class="containerImgInfo2">
      <img src="https://res.cloudinary.com/dpyo5aklw/image/upload/v1649035711/illustration-features-tab-3_u5742c.svg" alt="">
    </div>
    
    <div class="container-Info">
    
    <h1>Share your bookmarks </h1>
    
              <p>
              Easily share your bookmarks and collections with others. <br>
               Create a shareable link that you can send at <br>the click of a button
              </p>
              <button class= "btnmore"> More Info</button>
    </div>

        `

})



let desplegar1 = document.getElementById("desplegar1")
 
desplegar1.addEventListener("click",function(){
  let container1 = document.getElementById("container1")
    container1.classList.toggle("none")
    console.log(container1.classList.toggle("none"))

})

let desplegar2 = document.getElementById("desplegar2")
 
desplegar2.addEventListener("click",()=>{
  let container2 = document.getElementById("container2")
    container2.classList.toggle("none")

})

let desplegar3 = document.getElementById("desplegar3")
 
desplegar3.addEventListener("click",()=>{
  let container3 = document.getElementById("container3")
    container3.classList.toggle("none")

})

let desplegar4 = document.getElementById("desplegar4")
 
desplegar4.addEventListener("click",()=>{
  let container4 = document.getElementById("container4")
    container4.classList.toggle("none")

})


//Formulario validacion
function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('Email no valido');
	}
	else alert('Email valido');
	}

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }