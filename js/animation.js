const documentBody = document.querySelector('body');

var newElement1 = document.createElement("div");
newElement1.setAttribute("class","leftCurtainbg");
documentBody.prepend(newElement1);
var newElement2 = document.createElement("div");
newElement2.setAttribute("class","rightCurtainbg");
documentBody.prepend(newElement2);


documentBody.classList.add('pageOn');

setTimeout(function(){ 
    newElement1.style.display = "none";
    newElement2.style.display = "none";
  }, 2000);

window.addEventListener("beforeunload", () => {
  documentBody.classList.add('fadeout');
  setTimeout(function(){ 
    documentBody.style.display = "none"; 
  }, 1000);
}, false);
