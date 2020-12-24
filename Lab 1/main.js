var myImage=document.querySelector('img');
var myButton = document.getElementById("nameBtn");
var myHeading = document.querySelector('h1');

myImage.onclick=function(){
var mySrc=myImage.getAttribute('src');
if (mySrc==='images/firefox-icon.png'){
    myImage.setAttribute('src','images/firefox2.png');
    myImage.width = 256
    myImage.height = 256
}
else 
{myImage.setAttribute('src','images/firefox-icon.png');

}
}


