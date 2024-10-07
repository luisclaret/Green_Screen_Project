function upload(inputFile) {
  console.log(inputFile.files)
  var FR = new FileReader();
  var canvas_ = document.getElementById("can");
  var ctx_ = canvas_.getContext("2d");
  FR.onload = function (e) {
    var img = new Image();
    var result = e.target.result;
    img.src = result;
    img.onload = function () {
      canvas_.width = this.width;
      canvas_.height = this.height;
      ctx_.drawImage(this, 0, 0,
        this.width, this.height);
    };
  };
  FR.readAsDataURL(inputFile.files[0]);
}
