const btnCTPistol = document.getElementById("btn-ctPistol");
const btnCTLoadout = document.getElementById("btn-ctLoadout");
const btnCTMid = document.getElementById("btn-ctMid");
const btnCTRifle = document.getElementById("btn-ctRifle");

const btnTLoadout = document.getElementById("btn-TLoadout");
const btnTPistol = document.getElementById("btn-tPistol");
const btnTMid = document.getElementById("btn-tMid");
const btnTRifle = document.getElementById("btn-tRifle");

// Image variables to select the images
const imgCtStart = document.getElementById("img-ctstart");
const imgCtP1 = document.getElementById("img-ctp1");
const imgCtP2 = document.getElementById("img-ctp2");
const imgCtP3 = document.getElementById("img-ctp3");
const imgCtP4 = document.getElementById("img-ctp4");

const imgCtM1 = document.getElementById("img-ctMid1");
const imgCtM2 = document.getElementById("img-ctMid2");
const imgCtM3 = document.getElementById("img-ctMid3");
const imgCtM4 = document.getElementById("img-ctMid4");
const imgCtM5 = document.getElementById("img-ctMid5");

const imgCtR1 = document.getElementById("img-ctRifle1");
const imgCtR2 = document.getElementById("img-ctRifle2");
const imgCtR3 = document.getElementById("img-ctRifle3");
const imgCtR4 = document.getElementById("img-ctRifle4");
const imgCtR5 = document.getElementById("img-ctRifle5");

const imgTP1 = document.getElementById("img-tP1");
const imgTP2 = document.getElementById("img-tP2");
const imgTP3 = document.getElementById("img-tP3");
const imgTP4 = document.getElementById("img-tP4");

const imgTM1 = document.getElementById("img-tMid1");
const imgTM2 = document.getElementById("img-tMid2");
const imgTM3 = document.getElementById("img-tMid3");
const imgTM4 = document.getElementById("img-tMid4");
const imgTM5 = document.getElementById("img-tMid5");

const imgTR1 = document.getElementById("img-tRifle1");
const imgTR2 = document.getElementById("img-tRifle2");
const imgTR3 = document.getElementById("img-tRifle3");
const imgTR4 = document.getElementById("img-tRifle4");
const imgTR5 = document.getElementById("img-tRifle5");

// Select Text to replace
const ctS1 = document.querySelector(".CTstart");
const ctP1 = document.querySelector(".ctP1");
const ctP2 = document.querySelector(".ctP2");
const ctP3 = document.querySelector(".ctP3");
const ctP4 = document.querySelector(".ctP4");

const ctM1 = document.querySelector(".ctMid1");
const ctM2 = document.querySelector(".ctMid2");
const ctM3 = document.querySelector(".ctMid3");
const ctM4 = document.querySelector(".ctMid4");
const ctM5 = document.querySelector(".ctMid5");

const ctR1 = document.querySelector(".ctRifle1");
const ctR2 = document.querySelector(".ctRifle2");
const ctR3 = document.querySelector(".ctRifle3");
const ctR4 = document.querySelector(".ctRifle4");
const ctR5 = document.querySelector(".ctRifle5");

const tP1 = document.querySelector(".tP1");
const tP2 = document.querySelector(".tP2");
const tP3 = document.querySelector(".tP3");
const tP4 = document.querySelector(".tP4");

const tM1 = document.querySelector(".tMid1");
const tM2 = document.querySelector(".tMid2");
const tM3 = document.querySelector(".tMid3");
const tM4 = document.querySelector(".tMid4");
const tM5 = document.querySelector(".tMid5");

const tR1 = document.querySelector(".tRifle1");
const tR2 = document.querySelector(".tRifle2");
const tR3 = document.querySelector(".tRifle3");
const tR4 = document.querySelector(".tRifle4");
const tR5 = document.querySelector(".tRifle5");

// Data Arrays

const wepCTSPistol = ["P2000","USP-S"];
const wepCTPistol = ["P250","Five-Seven","CZ75-Auto","Dual Berettas","Desert Eagle","R8 Revolver"];
const wepCTMid = ["MP7","MP9","MP5-SD","UMP","PP-Bizon","P90","Nova","Mag-7","XM1014","Negev","M249"];
const wepCTRifle = ["AUG","AWP","SSG-08","Scar-20","Famas","M4A4","M4A1-S"];

const wepTPistol = ["P250","Tec-9","CZ75-Auto","Dual Berettas","Desert Eagle","R8 Revolver"];
const wepTMid = ["MP7","Mac-10","MP5-SD","UMP","PP-Bizon","P90","Nova","Sawed-Off","XM1014","Negev","M249"];
const wepTRifle = ["SG 553","AWP","SSG-08","G3SG1","Galil AR","AK-47"];

const CTSPImg = ['./img/p2000.webp','./img/usp-s.webp'];
const CTPistolImg = ['./img/p250.webp','./img/five-seven.webp','./img/cz75-auto.webp','./img/dual_berettas.webp','./img/desert_eagle.webp','./img/r8_revolver.webp'];
const CTMidImg = ['./img/mp7.webp','./img/mp9.webp','./img/mp5-sd.webp','./img/ump-45.webp','./img/pp-bizon.webp','./img/p90.webp','./img/nova.webp','./img/mag-7.webp','./img/xm1014.webp','./img/negev.webp','./img/m249.webp'];
const CTRifleImg = ['./img/aug.webp','./img/awp.webp','./img/ssg-08.webp','./img/scar-20.webp','./img/famas.webp','./img/m4a4.webp','./img/m4a1-s.webp'];

const TPistolImg = ['./img/p250.webp','./img/tec-9.webp','./img/cz75-auto.webp','./img/dual_berettas.webp','./img/desert_eagle.webp','./img/r8_revolver.webp'];
const TMidImg = ['./img/mp7.webp','./img/mac-10.webp','./img/mp5-sd.webp','./img/ump-45.webp','./img/pp-bizon.webp','./img/p90.webp','./img/nova.webp','./img/sawed-off.webp','./img/xm1014.webp','./img/negev.webp','./img/m249.webp'];
const TRifleImg = ['./img/sg_553.webp','./img/awp.webp','./img/ssg-08.webp','./img/g3sg1.webp','./img/galil-ar.webp','./img/ak-47.webp'];

//

let selectCTPistol = [];
let selectCTStart = [];
let selectCTMid = [];
let selectCTRifle = [];
let selectTPistol = [];
let selectTMid = [];
let selectTRifle = [];

let imgSelectCTPistol = [];
let imgSelectCTStart = [];
let imgSelectCTMid = [];
let imgSelectCTRifle = [];
let imgSelectTPistol = [];
let imgSelectTMid = [];
let imgSelectTRifle = [];

let imgSelectArr = [];

// Randomizer Function

function getRandomNumber(arr,selectArr,imgArr,imgSelectArr,count) {
  // get random index value
  let i;
  selectArr = []
  imgSelectArr = []
  for(i=0; selectArr.length < count; i++)
    {
   let randomIndex = Math.floor(Math.random() * arr.length);
  // get random item
  
    if(!selectArr.includes(arr[randomIndex])){
      selectArr.push(arr[randomIndex]);
      imgSelectArr.push(imgArr[randomIndex])
    
    }

    }

    return [selectArr,imgSelectArr];
  // console.log(item)
}

// Randomize CT Side

// Random CT Whole Loadout

btnCTLoadout.addEventListener("click", function () {
  const randomNumber = getRandomNumber(wepCTPistol,selectCTPistol,CTPistolImg,imgSelectCTPistol,4);
  const randomCTStart = getRandomNumber(wepCTSPistol,selectCTStart,CTSPImg,imgSelectCTStart,1);
  const randomCTMid = getRandomNumber(wepCTMid,selectCTMid,CTMidImg,imgSelectCTMid,5);
  const randomCTRifle = getRandomNumber(wepCTRifle,selectCTRifle,CTRifleImg,imgSelectCTRifle,5);

  // Starter Pistol
  ctS1.textContent = randomCTStart[0][0];
  imgCtStart.src = randomCTStart[1][0];

  // Pistols
  imgCtP1.src = randomNumber[1][0];
  imgCtP2.src = randomNumber[1][1];
  imgCtP3.src = randomNumber[1][2];
  imgCtP4.src = randomNumber[1][3];
  
  ctP1.textContent = randomNumber[0][0];  
  ctP2.textContent = randomNumber[0][1];
  ctP3.textContent = randomNumber[0][2];
  ctP4.textContent = randomNumber[0][3];

  // Mid Tier
  ctM1.textContent = randomCTMid[0][0];
  ctM2.textContent = randomCTMid[0][1];
  ctM3.textContent = randomCTMid[0][2];
  ctM4.textContent = randomCTMid[0][3];
  ctM5.textContent = randomCTMid[0][4];

  imgCtM1.src = randomCTMid[1][0];
  imgCtM2.src = randomCTMid[1][1];
  imgCtM3.src = randomCTMid[1][2];
  imgCtM4.src = randomCTMid[1][3];
  imgCtM5.src = randomCTMid[1][4];

  // Rifles
  ctR1.textContent = randomCTRifle[0][0];
  ctR2.textContent = randomCTRifle[0][1];
  ctR3.textContent = randomCTRifle[0][2];
  ctR4.textContent = randomCTRifle[0][3];
  ctR5.textContent = randomCTRifle[0][4];

  imgCtR1.src = randomCTRifle[1][0];
  imgCtR2.src = randomCTRifle[1][1];
  imgCtR3.src = randomCTRifle[1][2];
  imgCtR4.src = randomCTRifle[1][3];
  imgCtR5.src = randomCTRifle[1][4];
});

// Random CT Pistol Only
btnCTPistol.addEventListener("click", function () {
  const randomNumber = getRandomNumber(wepCTPistol,selectCTPistol,CTPistolImg,imgSelectCTPistol,4);
  const randomCTStart = getRandomNumber(wepCTSPistol,selectCTStart,CTSPImg,imgSelectCTStart,1);

  // Starter Pistol
  ctS1.textContent = randomCTStart[0][0];
  imgCtStart.src = randomCTStart[1][0];

  // Pistols
  imgCtP1.src = randomNumber[1][0];
  imgCtP2.src = randomNumber[1][1];
  imgCtP3.src = randomNumber[1][2];
  imgCtP4.src = randomNumber[1][3];
  
  ctP1.textContent = randomNumber[0][0];  
  ctP2.textContent = randomNumber[0][1];
  ctP3.textContent = randomNumber[0][2];
  ctP4.textContent = randomNumber[0][3];
});

// Random CT Mid Tier

btnCTMid.addEventListener("click", function () {
  const randomNumber = getRandomNumber(wepCTMid,selectCTMid,CTMidImg,imgSelectCTMid,5);
  ctM1.textContent = randomNumber[0][0];
  ctM2.textContent = randomNumber[0][1];
  ctM3.textContent = randomNumber[0][2];
  ctM4.textContent = randomNumber[0][3];
  ctM5.textContent = randomNumber[0][4];

  imgCtM1.src = randomNumber[1][0];
  imgCtM2.src = randomNumber[1][1];
  imgCtM3.src = randomNumber[1][2];
  imgCtM4.src = randomNumber[1][3];
  imgCtM5.src = randomNumber[1][4];

});

// Random CT Rifle

btnCTRifle.addEventListener("click", function () {
  const randomNumber = getRandomNumber(wepCTRifle,selectCTRifle,CTRifleImg,imgSelectCTRifle,5);

  ctR1.textContent = randomNumber[0][0];
  ctR2.textContent = randomNumber[0][1];
  ctR3.textContent = randomNumber[0][2];
  ctR4.textContent = randomNumber[0][3];
  ctR5.textContent = randomNumber[0][4];

  imgCtR1.src = randomNumber[1][0];
  imgCtR2.src = randomNumber[1][1];
  imgCtR3.src = randomNumber[1][2];
  imgCtR4.src = randomNumber[1][3];
  imgCtR5.src = randomNumber[1][4];

});

//  Randomize T Side

  // Random Whole T Loadout

btnTLoadout.addEventListener("click", function () {
  const randomNumber = getRandomNumber(wepTPistol,selectTPistol,TPistolImg,imgSelectTPistol,4);
  const randomTMid = getRandomNumber(wepTMid,selectTMid,TMidImg,imgSelectTMid,5);

  const randomTRifle = getRandomNumber(wepTRifle,selectTRifle,TRifleImg,imgSelectTRifle,5);
  
    //Pistols
    imgTP1.src = randomNumber[1][0];
    imgTP2.src = randomNumber[1][1];
    imgTP3.src = randomNumber[1][2];
    imgTP4.src = randomNumber[1][3];
    
    tP1.textContent = randomNumber[0][0];  
    tP2.textContent = randomNumber[0][1];
    tP3.textContent = randomNumber[0][2];
    tP4.textContent = randomNumber[0][3];
  
    // Mid Tier
    tM1.textContent = randomTMid[0][0];
    tM2.textContent = randomTMid[0][1];
    tM3.textContent = randomTMid[0][2];
    tM4.textContent = randomTMid[0][3];
    tM5.textContent = randomTMid[0][4];
  
    imgTM1.src = randomTMid[1][0];
    imgTM2.src = randomTMid[1][1];
    imgTM3.src = randomTMid[1][2];
    imgTM4.src = randomTMid[1][3];
    imgTM5.src = randomTMid[1][4];
  
    // Rifles
    tR1.textContent = randomTRifle[0][0];
    tR2.textContent = randomTRifle[0][1];
    tR3.textContent = randomTRifle[0][2];
    tR4.textContent = randomTRifle[0][3];
    tR5.textContent = randomTRifle[0][4];
  
    imgTR1.src = randomTRifle[1][0];
    imgTR2.src = randomTRifle[1][1];
    imgTR3.src = randomTRifle[1][2];
    imgTR4.src = randomTRifle[1][3];
    imgTR5.src = randomTRifle[1][4];

});

// Random T Pistol Only
btnTPistol.addEventListener("click", function () {
  const randomNumber = getRandomNumber(wepTPistol,selectTPistol,TPistolImg,imgSelectTPistol,4);

  tP1.textContent = randomNumber[0][0];
  tP2.textContent = randomNumber[0][1];
  tP3.textContent = randomNumber[0][2];
  tP4.textContent = randomNumber[0][3];

  imgTP1.src = randomNumber[1][0];
  imgTP2.src = randomNumber[1][1];
  imgTP3.src = randomNumber[1][2];
  imgTP4.src = randomNumber[1][3];
  
});

// Random T Mid Tier

btnTMid.addEventListener("click", function () {
  const randomNumber = getRandomNumber(wepTMid,selectTMid,TMidImg,imgSelectTMid,5);

  tM1.textContent = randomNumber[0][0];
  tM2.textContent = randomNumber[0][1];
  tM3.textContent = randomNumber[0][2];
  tM4.textContent = randomNumber[0][3];
  tM5.textContent = randomNumber[0][4];

  imgTM1.src = randomNumber[1][0];
  imgTM2.src = randomNumber[1][1];
  imgTM3.src = randomNumber[1][2];
  imgTM4.src = randomNumber[1][3];
  imgTM5.src = randomNumber[1][4];
});

// Random T Rifle

btnTRifle.addEventListener("click", function () {
  const randomNumber = getRandomNumber(wepTRifle,selectTRifle,TRifleImg,imgSelectTRifle,5);

  tR1.textContent = randomNumber[0][0];
  tR2.textContent = randomNumber[0][1];
  tR3.textContent = randomNumber[0][2];
  tR4.textContent = randomNumber[0][3];
  tR5.textContent = randomNumber[0][4];

  imgTR1.src = randomNumber[1][0];
  imgTR2.src = randomNumber[1][1];
  imgTR3.src = randomNumber[1][2];
  imgTR4.src = randomNumber[1][3];
  imgTR5.src = randomNumber[1][4];

});