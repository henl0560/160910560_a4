function on(imgURL) {
  document.getElementById("myImage").src=imgURL;
  document.getElementById("myImagem").src=imgURL;
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlaym").style.display = "block";

}
function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlaym").style.display = "none";

}
