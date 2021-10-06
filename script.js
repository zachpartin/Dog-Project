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
const breedSearchURL = "https://api.thedogapi.com/v1/images/search";
const breedSearch = `${breedSearchURL}?${API_KEY}&breed_id=`;
//To find specific breed add 'breed_id=(id)' as query parameter

let currentBreed = {}


console.log(API_URL);

const fetchDog = () => {
  fetch(API_URL)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson);
      // generateDog(responseJson);
      currentBreed = responseJson;
    })
    .catch((error) => {
      console.log(error);
    });
}
console.log(fetchDog())
// const pullDogBreed = (breedId) => {
//   fetch(`${breedSearch}${breedId}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((responseJson) => {
//       console.log(responseJson);
//       currentBreed = responseJson;
//       generateDog(responseJson);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// pullDogBreed(50);

// async function pullDogBreed(breedId) {

//   fetch(`${breedSearch}${breedId}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((responseJson) => {
//       console.log(responseJson);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const randomNumber = () => {
  return Math.floor(Math.random() * 172);
};
console.log(randomNumber());

// const dogBreed = () => {
//   pullDogBreed(randomNumber);
// };

const generateDog = (currentBreed) => {
  // const dropDown = document.querySelector("#selectSize");
  const generateDogDiv = document.querySelector("#generateDog");
  const dogPicDiv = document.querySelector('#dogPic')
  const randoNum = randomNumber();

  generateDogDiv.innerText = currentBreed[(randoNum)].name;
  dogPicDiv.src = currentBreed[(randoNum)].image.url;
};

const dropDown = document.querySelector("#selectSize");
const generateDogDiv = document.querySelector("#generateDog");


dropDown.addEventListener("change", (event) => {
  generateDog(currentBreed);
});
