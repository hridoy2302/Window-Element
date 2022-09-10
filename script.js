const tabs = document.querySelector(".tabs")
const btnEl =document.querySelector(".button")
const articles = document.querySelector(".content")

tabs.addEventListener("click", (event)=>{
    

    const id = event.target.dataset.id;

    if(id){
       btnEl.forEach((btn)=>{
        btn.classList.remove("live");
       })
       event.target.classList.add("live");
       articles.forEach((articles)=>{
        articles.classList.remove("live")
       })
       const element = document.getElementById(id)
       element.classList.add("live")
    }
});