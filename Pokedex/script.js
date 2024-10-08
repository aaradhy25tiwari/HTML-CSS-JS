async function fetchData() {
  const pokemonName = document.getElementById("pokemonName").value.toLowercase();
  const pokemonSprite = document.getElementById("pokemonSprite");
  const nameSection = document.getElementById("pokemonNameSection");
  const weightSection = document.getElementById("pokemonWeightSection");
  const typeSection = document.getElementById("pokemonTypeSection");

  try {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`);
    const data = await response.json();

    // Display Pokémon data
    pokemonSprite.src = data.sprites.front_default;
    pokemonSprite.style.display = "block";
    
    nameSection.textContent = `${data.name}`;
    nameSection.style.display = "block"; // Ensure visibility
    
    weightSection.textContent = `${data.weight}`;
    weightSection.style.display = "block"; // Ensure visibility
    
    typeSection.textContent = `${data.types.map(type => type.type.name).join(", ")}`;
    typeSection.style.display = "block"; // Ensure visibility
  } catch (error) {
    console.error(error);
    alert("Pokemon not found.");
  }
}
