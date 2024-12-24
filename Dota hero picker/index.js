const btn = document.getElementById("btn");
const selectedHero = document.querySelector(".selectedHero");

import herodata from './herodata.json' with { type: 'json' };
  
// Heroes JSON
// console.log(herodata.result.heroes);

    const heroId = herodata.result.heroes;
    const heroName = herodata.result.heroes;

console.log('\n');

function getRandomNumber(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    // console.log(item)
    return item;

}

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber(herodata.result.heroes);
//   console.log(randomNumber);
  
  selectedHero.textContent = randomNumber.localized_name;
});

