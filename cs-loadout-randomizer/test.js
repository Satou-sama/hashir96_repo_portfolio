// const wepCTSPistol = ["Ancient","Anubis","Basalt","Dust 2","Edin","Inferno","Italy","Mirage","Nuke","Office","Overpass","Train","Vertigo"];
// const selectTPistol = [];

// function getRandomNumber(arr,selectArr,count) {
//     // get random index value
//     for(i=0; selectArr.length < count; i++)
//       {
//      randomIndex = Math.floor(Math.random() * arr.length);
//     console.log(randomIndex)
//     // get random item
    
//       if(!selectArr.includes(arr[randomIndex])){
//         selectArr.push(arr[randomIndex]);
//       console.log(selectArr)
//       }
//     //   return item;
//       }
//       console.log(selectArr)
//       return selectArr;
//     // console.log(item)
// }

//   let randomNumber = [getRandomNumber(wepCTSPistol,selectTPistol,5)];
//   console.log(randomNumber)

let letters = ['a', 'b', 'c', 'd', 'e'];
let leftSide = letters.splice(0, Math.ceil(letters.length /2));
let rightSide = letters;
console.log(leftSide);
console.log(letters);
console.log(rightSide);
