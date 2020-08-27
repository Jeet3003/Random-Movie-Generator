var movieNames = [
  "Bahubali",
  "RowdyRathore",
  "Dabang",
  "Error404",
  "Section375",
  "Article15",
  "Kesari",
  "Lal Kaptaan",
  "Drishyam",
  "Kahaani",
  "URI",
  "Airlift",
  "Wazir",
];
function myfunction() {
  var getRandomNumber = Math.floor(Math.random() * movieNames.length);
  var getMovieNames = movieNames[getRandomNumber];

  document.getElementById("generate").addEventListener("click", function () {
    document.getElementById("random-name").innerText = getMovieNames;
  });
}
