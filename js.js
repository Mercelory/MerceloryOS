function myFunction() {
    var x = document.getElementById("mercelory");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var y = document.getElementById("mercelory_notepad");

    if (y.style.display === "none") {
      y.style.display = "flex";
    } else {
      y.style.display = "none";
    }
}

function Start() {
    var z = document.getElementById("start");

    if (z.style.display === "none") {
      z.style.display = "flex";
    } else {
      z.style.display = "none";
    }
}

function PaintFunc() {
  var z = document.getElementById("paint");

  if (z.style.display === "none") {
    z.style.display = "flex";
  } else {
    z.style.display = "none";
  }
}

$( ".mercelory, .paint" ).draggable({
  cursor: "pointer"
});