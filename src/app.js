// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    document.querySelector(".btn-patty").classList.add("active");
    checkIngredients();
  } else {
    patty.style.display = "none";
    document.querySelector(".btn-patty").classList.remove("active");
    checkIngredients();
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese");
  if(state.Cheese)
  {
    cheese.style.display="inherit";
    document.querySelector(".btn-cheese").classList.add("active");
    checkIngredients();
  } else {
    cheese.style.display="none";
    document.querySelector(".btn-cheese").classList.remove("active");
    checkIngredients();
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById("tomato");
  if(state.Tomatoes)
  {
    tomatoes.style.display="inherit";
    document.querySelector(".btn-tomatoes").classList.add("active");
    checkIngredients();
  } else {
    tomatoes.style.display="none";
    document.querySelector(".btn-tomatoes").classList.remove("active");
    checkIngredients();
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.getElementById("onion");
  if(state.Onions)
  {
    onions.style.display="inherit";
    document.querySelector(".btn-onions").classList.add("active");
    checkIngredients();
  } else {
    onions.style.display="none";
    document.querySelector(".btn-onions").classList.remove("active");
    checkIngredients();
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if(state.Lettuce)
  {
    lettuce.style.display="inherit";
    document.querySelector(".btn-lettuce").classList.add("active");
    checkIngredients();
  } else {
    lettuce.style.display="none";
    document.querySelector(".btn-lettuce").classList.remove("active");
    checkIngredients();
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function checkIngredients ()
{
  for(let i=0; i<Object.keys(state).length; i++)
  {
    if(Object.values(state)[i]==false)
      {
        document.getElementsByClassName("items")[i].classList.add("disp");
      }
      else
      {
        document.getElementsByClassName("items")[i].classList.remove("disp");
      }
  }
  displayPrice();
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function displayPrice()
{
  let price = wholeWheatBun;
  for(let i=0; i<Object.keys(state).length; i++)
  {
    if(Object.values(state)[i]==true)
      {
        price += Object.values(ingredients)[i];
      }
  }
  document.getElementsByClassName("price-details")[0].textContent="INR "+price;
}