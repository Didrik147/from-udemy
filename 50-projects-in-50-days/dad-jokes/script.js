const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// Using .then()
function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then(data => {
            jokeEl.innerHTML = data.joke
        })
}

// Using async/await
async function generateJoke2(){
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    
    const data = await res.json()

    joke.innerHTML = data.joke
}

