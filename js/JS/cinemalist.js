function openCinemaList(CinemaName) {
  var cinemaList;
  cinemaList = document.getElementsByClassName("cinema__list");
  for (var i = 0; i < cinemaList.length; i++) {
    cinemaList[i].style.display = "none";
  }
  document.getElementById(CinemaName).style.display = "block";
}
document.getElementById("defaultOpen").click();

function openFilmList(CinemaListName) {
  var listFlim;
  listFlim = document.getElementsByClassName("listflim");
  for (var i = 0; i < listFlim.length; i++) {
    listFlim[i].style.display = "none";
  }
  document.getElementById(CinemaListName).style.display = "block";
}
document.getElementById("defaultOpen1").click();
