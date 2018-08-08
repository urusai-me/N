var ranImg = Array();
var n = Math.floor(Math.random() * 7 + 0);
ranImg[n] = "/bgs/" + n + ".png";
var ranImg = ranImg[n];
document.write('<div style="background:url(' + ranImg + ') center no-repeat;background-size:cover;height:100vh;z-index:1;" id="div2"></div>');
