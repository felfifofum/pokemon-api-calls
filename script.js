// DOM interaction for header
const h2 = document.querySelector("h2");
const p = document.createElement("p");

p.innerHTML = "Pokémon API";
h2.appendChild(p);

// DOM interaction for main
const main = document.querySelector("main");

// Form handling
const form = document.querySelector("#api-request-form");
form.addEventListener("submit", (evt) => {

  evt.preventDefault();
  

  const formData = new FormData(form);

  console.log(formData.get("actual-form"));

  logPokemon(formData.get("actual-form"));
});


let additional=''
// async function to handle requests
async function logPokemon(character) {
  try {

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${character}`
    );
    const responseImg = await fetch(`https://pokeapi.co/api/v2/pokemon/${character}`)
    const data = await response.json();
    // Image
    const pokemonImage = document.createElement('img')
    pokemonImage.src = data.sprites['front_default']//or change default to shiny
    
    additional=data.name +`'s ability is `
    // Linking with DOM tree
    const h5 = document.createElement('h5')
    h5.classList.add('name-title')
    h5.innerHTML=data.name
    const p = document.createElement("p");
    main.appendChild(h5)

    p.innerHTML = additional + data.abilities[1].ability.name + ".";
    main.appendChild(p);
    main.appendChild(pokemonImage)



  } catch (error) {
    console.log(error);
  }
}

//logPokemon('caterpie')

// Need to clear form after user input
