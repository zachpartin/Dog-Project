/*
1. Connect API
2. Add event listener for when size is selected from dropdown list
3. Get selection to pull info from Dog API for a random dog that matches the size selected
4. 
*/

// console.log("Connected");
const BASE_URL = "https://api.thedogapi.com/v1/breeds";
const API_KEY = "925c2150-f558-4883-9b84-a3973d3ed76c";
const API_URL = `${BASE_URL}?${API_KEY}`;
// const breedSearchURL = "https://api.thedogapi.com/v1/images/search";
// const breedSearch = `${breedSearchURL}?${API_KEY}&breed_id=`;
//To find specific breed add 'breed_id=(id)' as query parameter

console.log(API_URL);



let breed;

const fetchDog = () => {
  fetch(API_URL)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson);
      breed = responseJson;
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchDog();


const randomNumber = () => {
  return Math.floor(Math.random() * 172);
};
console.log(randomNumber());



const generateDog = (breed, ddMinWeight, ddMaxWeight) => {
  // const dropDown = document.querySelector("#selectSize");
  const generateDogDiv = document.querySelector("#generateDog");
  const dogPicDiv = document.querySelector("#dogPic");
  const lifeSpanDiv = document.querySelector("#lifeSpan");
  const weightDiv = document.querySelector("#weight");
  const temperamentDiv = document.querySelector("#temperament");

  let randoNum = randomNumber();

  const weightRange = breed[randoNum].weight.imperial.match(/\d+/g);
  //got match(/\d+/g) from https://stackoverflow.com/questions/8420890/extracting-multiple-integers-from-a-string-in-javascript

  console.log(weightRange);
  const minWeight = weightRange[0];
  const maxWeight = weightRange[1];
  console.log(minWeight);
  console.log(maxWeight);

  if (minWeight < ddMaxWeight && maxWeight > ddMinWeight) {
    generateDogDiv.innerText = breed[randoNum].name;
    dogPicDiv.src = breed[randoNum].image.url;
    lifeSpanDiv.innerText = `Lifespan: ${breed[randoNum].life_span}`;
    weightDiv.innerText = `Weight: ${breed[randoNum].weight.imperial} lbs`;
    temperamentDiv.innerText = `Temperament: ${breed[randoNum].temperament}`;
  } else {
    generateDog(breed, ddMinWeight, ddMaxWeight);

  }
  // generateDogDiv.innerText = breed[(randoNum)].name;
  // dogPicDiv.src = breed[(randoNum)].image.url;
};

const dropDown = document.querySelector("#selectSize");
const generateDogDiv = document.querySelector("#generateDog");

dropDown.addEventListener("change", (event) => {
  
  if (dropDown.value === "small") {
    generateDog(breed, 0, 30);
  } else if (dropDown.value === "medium") {
    generateDog(breed, 30, 50);
  } else if (dropDown.value === "large") {
    generateDog(breed, 50, 1000);
  }
});
