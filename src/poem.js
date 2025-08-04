function peomGeneration(event){
    event.preventDefault();
    let topicElement=document.querySelector(".inputValue").value;
    document.querySelector(".topic").textContent=topicElement;
  
let poemStart=document.querySelector(".poem");
poemStart.style.display="block";
poemStart.innerHTML=`<div class="blink">🌱 Generating your poem with ${topicElement} title </div>`;

      let apiKey = "2faae9d4e47d0b0a09a9to05afdf381d";
  let prompt = `Write a beautiful and creative poem about "${topicElement}"  in english. Maximum 8 lines and separate each line with <br>.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  axios.get(apiUrl).then(function (response) {
    let poemText = response.data.answer;


      let blinkElement = document.querySelector(".blink");
        if (blinkElement) {
            blinkElement.style.display = "none";
        }
   let poemTarget = document.querySelector("#the-poem");
    poemTarget.textContent = ""; // clear old poem

    new Typewriter(poemTarget, {
      strings: [poemText],
      autoStart: true,
      delay: 50,
      cursor: "",
      pauseFor:4000,
    });
  });
}

let poemElement=document.querySelector(".form");
poemElement.addEventListener("submit",peomGeneration);

