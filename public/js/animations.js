const colors = ["black", "red", "black"];
var blobs = document.querySelectorAll("#background path");

blobs.forEach(blob => {
  blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});
