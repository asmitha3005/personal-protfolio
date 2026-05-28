// Typing effect
const text = "Full Stack Developer | AI-ML Enthusiast | Web Developer";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
  });
});
