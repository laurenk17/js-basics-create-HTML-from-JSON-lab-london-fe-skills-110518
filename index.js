document.getElementById("Titanic").addEventListener("click", (e) => {
  document.getElementById("title").innerHTML = movies.Titanic.title;
  document.getElementById("director").innerHTML = movies.Titanic.director;
  document.getElementById("genre").innerHTML = movies.Titanic.genre;
  document.getElementById("filmRating").innerHTML = movies.Titanic.filmRating;
  document.getElementById("poster").innerHTML = movies.Titanic.poster;
  document.getElementById("description").innerHTML = movies.Titanic.description;
 // document.getElementById("cast").innerHTML = movies.Titanic.cast;
 
 
 for (var i in movies.Titanic.cast) {
  let role = (movies.Titanic.cast[i].role);
  let actor = (movies.Titanic.cast[i].actor);
  
  console.log(role);
  console.log(actor);
  
  var roleTi = document.createElement('p')
  document.body.listSection.cast.appendChild(roleTi)
  roleTi.innerHTML = role
 
 
 
 }
 
 
 
 
 
 document.getElementById("audienceScore").innerHTML = movies.Titanic.audienceScore;
 document.getElementById("reviews").innerHTML = movies.Titanic.reviews;
 document.getElementById("poster").innerHTML = movies.Titanic.poster;
})

document.getElementById("Titanic").addEventListener("click", (e) => {
  document.getElementById("title").innerHTML = movies['Terminator 2'].title;
 document.getElementById("genre").innerHTML = movies['Terminator 2'];genre;
 document.getElementById("filmRating").innerHTML = movies["Terminator 2"];filmRating;
  document.getElementById("poster").innerHTML = movies["Terminator 2"];poster;
  document.getElementById("description").innerHTML = movies["Terminator 2"];description;
 document.getElementById("cast").innerHTML = movies["Terminator 2"];cast;
 document.getElementById("audienceScore").innerHTML = movies["Terminator 2"];audienceScore;
 document.getElementById("reviews").innerHTML = movies["Terminator 2"];reviews;
 document.getElementById("poster").innerHTML = movies["Terminator 2"];poster;
})