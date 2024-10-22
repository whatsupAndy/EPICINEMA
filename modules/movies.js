const movies = [
    { id: "1", title: "Iron Man (2008)", description: "After being captured in hostile territory, billionaire and tech genius Tony Stark uses his brilliant mind to build a suit of armor that changes his life forever. With a newfound purpose, he becomes the iconic hero Iron Man and fights for justice – but his greatest battle might be against himself.", trailer: "https://www.youtube.com/embed/8ugaeA-nMTc"},
    { id: "2", title: "Captain America: The First Avenger (2011)", description: "In an era marked by war, the humble Steve Rogers transforms into the super-soldier Captain America. Armed with an unbreakable shield and a heart of steel, he fights against a sinister enemy threatening the future of the world. An epic journey begins that will define a legend.", trailer: "https://www.youtube.com/embed/JerVrbLldXw"},  
    { id: "3", title: "Thor (2011)", description: "In a world where gods walk among humans, the mighty Thor is banished to Earth without his powers. To prove his worth, he must overcome not only his enemies but also his own arrogance. A cosmic journey of power, responsibility, and courage awaits.", trailer: "https://www.youtube.com/embed/JOddp-nlNvQ"},  
    { id: "4", title: "Dr. Strange", description: "Dr.Strange", trailer: "https://www.youtube.com/embed/h7gvFravm4A"},  
    { id: "5", title: "Ironman", description: "", trailer: ""},  
    { id: "6", title: "Ironman", description: "", trailer: ""},  
    { id: "7", title: "Ironman", description: "", trailer: ""},  
    { id: "8", title: "Ironman", description: "", trailer: ""},  
    { id: "9", title: "Ironman", description: "", trailer: ""},  
    { id: "10", title: "Ironman", description: "", trailer: ""},  
    { id: "11", title: "Ironman", description: "", trailer: ""},  
    { id: "12", title: "Ironman", description: "", trailer: ""},  
    { id: "13", title: "Ironman", description: "", trailer: ""},  
    { id: "14", title: "Ironman", description: "", trailer: ""},  
    { id: "15", title: "Ironman", description: "", trailer: ""},  
    { id: "16", title: "Ironman", description: "", trailer: ""},  
    { id: "17", title: "Ironman", description: "", trailer: ""},  
    { id: "18", title: "Ironman", description: "", trailer: ""},  
    { id: "19", title: "Ironman", description: "", trailer: ""},  
    { id: "20", title: "Ironman", description: "", trailer: ""},  
  ];

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param)
  }
  
  const movieId = getQueryParam("id");
  console.log("Movie ID from URL:", movieId);
  
  const selectedMovie = movies.find(movie => movie.id === movieId);
  console.log("Selected Movie:", selectedMovie);
  
  if (selectedMovie) {
    console.log('Selected movie:', selectedMovie);
    document.getElementById("movie-title").textContent = selectedMovie.title;
    document.getElementById("movie-description").textContent = selectedMovie.description;
    document.getElementById("movie-trailer").src = selectedMovie.trailer;
  } else {
    console.error('Movie not found for id:', movieId);
  }
  