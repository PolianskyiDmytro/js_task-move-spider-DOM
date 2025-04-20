var t=document.querySelector(".wall"),e=document.querySelector(".spider");t.addEventListener("click",function(f){var i=e.offsetWidth/2,o=e.offsetHeight/2,c=f.offsetX-i,a=f.offsetY-o;c=Math.max(0,Math.min(c,t.clientWidth-e.offsetWidth)),a=Math.max(0,Math.min(a,t.clientHeight-e.offsetHeight)),e.style.left="".concat(c,"px"),e.style.top="".concat(a,"px")});
//# sourceMappingURL=index.84b28be4.js.map
