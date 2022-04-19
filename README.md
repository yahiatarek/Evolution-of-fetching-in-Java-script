# Evolution of "fetching" in java script
# fetching APIs with different methods
## This project is done using the forkify-api .com (displaying food lists names) to show the evolution of using the fetch("API",true) method introduced in ES6.
1- in the first part of the code i used the deprecated way which was done by using callback functions and calling them at the end as one function as the parameter of the other :

getSalad(function () {
   getPizza(function () {
     getBeef();
   });
 });
 2- In the second part the same code is written but now by introducing the Promise object and by returning Promise form each function we can use the then property and our final call would be more readable:
 
 getPizza()
   .then(function () {
     return getSalad();
   })
   .then(function () {
     return getBeef();
   });
3- In the third part the same code is written but now by introducing the fetch () method which replaces many parts that we used to write including the opening, sending, and checking the status of the URL. Moreover final call is more and more readable:
 
 (async function () {
  await getBeef();
  await getPizza();
  await getSalad();
})();
