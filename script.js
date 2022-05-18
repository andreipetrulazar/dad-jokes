const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('btn');


jokeBtn.addEventListener("click", getJoke)


getJoke();


function getJoke() {
      const config = {
        headers: {
          Accept: "application/json",
        },
      }

      fetch("https://icanhazdadjoke.com", config)
      .then(response => response.json())
      .then(data => {
        jokeElement.innerHTML = data.joke;
      })
}