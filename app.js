function upload(fileinput) {
  var image = new SimpleImage(fileinput);
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}
