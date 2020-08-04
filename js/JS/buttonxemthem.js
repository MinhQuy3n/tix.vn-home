var btnXemThem = function (height,nameDiv) {
  var tabcontent = document.getElementById(nameDiv);
  var intHeight = parseInt(height);
  var heightDiv = tabcontent.clientHeight;
  var defaultHeight = intHeight + heightDiv ;
  tabcontent.style.maxHeight = defaultHeight + "px";
};

