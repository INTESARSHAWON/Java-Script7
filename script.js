console.log("hihi");
//alert("hi DOM");
console.dir(document);
console.dir(document.body);
// console.dir() diye js er moddhe html ki ache seta dekhe


//id-> getElementById()
let myParagrah = document.getElementById("paragraph");
console.dir(myParagrah);


//class ->getElementsByClassName()
let myHeading = document.getElementsByClassName("heading");
console.dir(myHeading);
// class HTML COLLECTION akare ashe/ eta array'r motoi index akare ashe


//tag->getElementsByTagName()
let anotherParagraph = document.getElementsByTagName("p");
console.dir(anotherParagraph);

//query selector-> eta id, class tag sobkichur kaj korte pare// eta node (tree er parent,chlid) return kore
let firstTagElement = document.querySelector("p");
console.dir(firstTagElement);
// eta sudhu firstElement e return korbe


// querySelectorAll -> eta id, class tag sobkichur kaj korte pare// eta node (tree er parent,chlid) return kore
let allTagElement = document.querySelectorAll("p");
console.dir(allTagElement);
// eta pura node e return korbe


// style er motoi ID niye likhte gele querySelector ba querySelectorAll a # use korte hoy
let firstIdElement = document.querySelector("#paragraph");
console.dir(firstIdElement);


// style er motoi CLASS niye likhte gele querySelector ba querySelectorAll a . use korte hoy
let firstClassElement = document.querySelector(".heading");
console.dir(firstClassElement);


let div = document.querySelector("div");
console.dir (div);
// console a giye dekhte hoy...,div ashbe, div.innertext dile text ashbe, div.innerhtml dile pura code eshe porbe
//div.textContent a dile hidden item o show korbe...,eigula DOM manuplation a behi use hoy, bakigula hoy na 




//exercise
let h5 = document.querySelector("h5");
console.dir (h5.innerText);
h5.innerText= h5.innerText + ' from apna college students' ;



let divs = document.querySelectorAll(".box");
divs[0].innerText= "shawon";
divs[1].innerText= "married";
divs[2].innerText= "nawshin";
console.dir (divs);
