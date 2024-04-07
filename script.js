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

