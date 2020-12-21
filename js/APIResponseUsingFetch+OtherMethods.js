// =============APIs using callback functions (deprecated method)===
// function getPizza(callback) {
//   let array = [];
//   let httpReq = new XMLHttpRequest();
//   httpReq.open("GET", "https://forkify-api.herokuapp.com/api/search?&q=pizza");
//   httpReq.send();
//   httpReq.addEventListener("readystatechange", function () {
//     if (httpReq.readyState == 4 && httpReq.status == 200) {
//       array = JSON.parse(httpReq.response).recipes;
//       console.log(array);
//       console.log("pizza");
//       callback();
//     }
//   });
// }
// function getSalad(callback) {
//   let httpReq = new XMLHttpRequest();
//   httpReq.open("GET", "https://forkify-api.herokuapp.com/api/search?&q=salad");
//   httpReq.send();
//   httpReq.addEventListener("readystatechange", function () {
//     if (httpReq.readyState == 4 && httpReq.status == 200) {
//       array = JSON.parse(httpReq.response).recipes;
//       console.log(array);
//       console.log("salad");
//       callback();
//     }
//   });
// }
// function getBeef() {
//   let httpReq = new XMLHttpRequest();
//   httpReq.open("GET", "https://forkify-api.herokuapp.com/api/search?&q=beef");
//   httpReq.send();
//   httpReq.addEventListener("readystatechange", function () {
//     if (httpReq.readyState == 4 && httpReq.status == 200) {
//       array = JSON.parse(httpReq.response).recipes;
//       console.log(array);
//       console.log("beef");
//     }
//   });
// }
// getSalad(function () {
//   getPizza(function () {
//     getBeef();
//   });
// });
// ========================APIs using promises (easier way than the above way but also deprecated)===================================
// function getPizza() {
//   return new Promise(function (callback) {
//     let array = [];
//     let httpReq = new XMLHttpRequest();
//     httpReq.open(
//       "GET",
//       "https://forkify-api.herokuapp.com/api/search?&q=pizza"
//     );
//     httpReq.send();
//     httpReq.addEventListener("readystatechange", function () {
//       if (httpReq.readyState == 4 && httpReq.status == 200) {
//         array = JSON.parse(httpReq.response).recipes;
//         console.log(array);
//         console.log("pizza");
//         callback();
//       }
//     });
//   });
// }
// function getSalad() {
//   return new Promise(function (callback) {
//     let array = [];
//     let httpReq = new XMLHttpRequest();
//     httpReq.open(
//       "GET",
//       "https://forkify-api.herokuapp.com/api/search?&q=salad"
//     );
//     httpReq.send();
//     httpReq.addEventListener("readystatechange", function () {
//       if (httpReq.readyState == 4 && httpReq.status == 200) {
//         array = JSON.parse(httpReq.response).recipes;
//         console.log(array);
//         console.log("salad");
//         callback();
//       }
//     });
//   });
// }
// function getBeef() {
//   return new Promise(function () {
//     let array = [];
//     let httpReq = new XMLHttpRequest();
//     httpReq.open("GET", "https://forkify-api.herokuapp.com/api/search?&q=beef");
//     httpReq.send();
//     httpReq.addEventListener("readystatechange", function () {
//       if (httpReq.readyState == 4 && httpReq.status == 200) {
//         array = JSON.parse(httpReq.response).recipes;
//         console.log(array);
//         console.log("beef");
//       }
//     });
//   });
// }
// getPizza()
//   .then(function () {
//     return getSalad();
//   })
//   .then(function () {
//     return getBeef();
//   });
//========APIs using the fetch function (easiest way)==============
async function getPizza() {
  let apiResponse = await fetch(
    "https://forkify-api.herokuapp.com/api/search?&q=pizza"
  ); //,method:{"GET"}); By default it is GET
  let allRecipes = await apiResponse.json();
  console.log(allRecipes.recipes);
  console.log("pizza");
  // apiResponse.then(function () {
  //   console.log(apiResponse);
  // }); this is equal to adding await before the fetch function
}
async function getSalad() {
  let apiResponse = await fetch(
    "https://forkify-api.herokuapp.com/api/search?&q=salad"
  );
  let allRecipes = await apiResponse.json();
  console.log(allRecipes.recipes);
  console.log("salad");
}
async function getBeef() {
  let apiResponse = await fetch(
    "https://forkify-api.herokuapp.com/api/search?&q=beef",
    {
      method: "GET",
    }
  );
  let allRecipes = await apiResponse.json();
  console.log(allRecipes.recipes);
  console.log("beef");
}

// async function Final() {
//  await getBeef();
//  await getPizza();
//  await getSalad();
// }
// Final();
//OR
(async function () {
  await getBeef();
  await getPizza();
  await getSalad();
})();
