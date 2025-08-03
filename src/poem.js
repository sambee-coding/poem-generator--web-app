function peomGeneration(event){
    event.preventDefault();
    let topicElement=document.querySelector(".inputValue").value;
    document.querySelector(".topic").textContent=topicElement;
    
new Typewriter('#the-poem', {
  strings: [' abeba yehushi lemi lemi'],
  autoStart: true,
  delay:1,
  cursor:"",
});
  
}




let poemElement=document.querySelector(".form");
poemElement.addEventListener("submit",peomGeneration);