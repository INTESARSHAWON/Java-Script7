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
