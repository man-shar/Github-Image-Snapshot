function addHandler(str) {
  var imageExtensions = ["jpg", "jpeg", "exif", "tiff", "gif", "bmp", "png", "ppm", "pgm", "pbm", "pnm", "webp", "heif", "bat", "bpg", "cgm", "svg"];

  var list = document.getElementsByTagName("table")[0];

  var links = Array.from(list.getElementsByClassName("js-navigation-item"));

  links.forEach(function(el, i) {
    if(!i)
      return;

    var fileName = el.getElementsByClassName("js-navigation-open")[0];
    fileName = fileName.innerText;
    var extension = fileName.slice(fileName.lastIndexOf(".") + 1);

    if(imageExtensions.indexOf(extension) >= 0)
    {
      var svg = el.getElementsByTagName("svg")[0];
      svg.parentNode.removeChild(svg);
    }    
  });
};

window.addEventListener('pjax:success', function() {
  addHandler("pjax:success");
});

window.addEventListener('load', function() {
  addHandler("load");
});