function nextPage(page){

document
.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document
.getElementById("page"+page)
.classList.add("active");

confetti({
particleCount:80,
spread:100
});

}

const noBtn =
document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener(
"mouseover",
()=>{

const x =
Math.random()*300;

const y =
Math.random()*200;

noBtn.style.position="absolute";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

}
);

}