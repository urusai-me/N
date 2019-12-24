var ranImg = Array();
var n = Math.floor(Math.random() * 7 + 0);
ranImg[n] = "https://seek.moe/网站媒体/图片/bgs/" + n + ".png";
var ranImg = ranImg[n];
document.write('<div style="background:url(' + ranImg + ') center no-repeat;background-size:cover;height:100vh!important;z-index:1;" id="div2"></div>');