console.log('hello');

var famousPeople = [
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "download.jpeg",
  lifespan: "1747 - 1797"
},

{
  title: "Boxer",
  name: "Muhammad Ali",
  bio: "Muhammad Ali was an American professional boxer and activist. He is widely regarded as one of the most significant and celebrated sports figures of the 20th century.",
  image: "ali.jpeg",
  lifespan: "1942-2016"
},

{
  title: "President",
  name: "John F. Kennedy",
  bio: "John Fitzgerald 'Jack' Kennedy, commonly referred to by his initials JFK, was an American politician who served as the 35th President of the United States from January 1961 until his assassination in November 1963.",
  image: "JFK.jpeg",
  lifespan: "1917-1963"
},

{
  title: "Writer",
  name: "Thomas Wolfe",
  bio: "Thomas Clayton Wolfe was an American novelist of the early twentieth century. Wolfe wrote four lengthy novels, plus many short stories, dramatic works, and novellas.",
  image: "TWOLFE.jpg",
  lifespan: "1900-1938"
}
];


var people = "";
var divElement = document.getElementById("container");
for (prop in famousPeople) {
    var people = `<article class="famous">
                    <h3 class="name"> ${famousPeople[prop].name} </h3>
                    <h3 class="title"> ${famousPeople[prop].title} </h3>
                    <img class="img-thumbnail" src="${famousPeople[prop].image}" height="150" width="150">
                    <section class="bio"> ${famousPeople[prop].bio} </section>
                    <footer class="footer"> ${famousPeople[prop].lifespan}</footer>
                  </article>`;
                divElement.innerHTML += people;
};

// functions
function getFocus (){
  textInput.focus();
}
function clearField(){
  textInput.value = "";
}


var currentBio = "";

var textInput = document.getElementById("textInput");
textInput.addEventListener("keyup", function(event) {
  currentBio.innerHTML = event.target.value;
  var key = event.keyCode;
    if(key === 13) {
      clearField();
  }
});

var person = document.getElementsByClassName("famous"); //grabs an array
  for(var i = 0; i < person.length; i++) {
    person[i].addEventListener("click", function (event) {
      event.currentTarget.classList.toggle("border");
      currentBio = event.currentTarget.getElementsByClassName("bio")[0];
      console.log(currentBio);
      getFocus();
  })
};




