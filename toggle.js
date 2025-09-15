let clock=document.getElementById("clock")
let theme=document.getElementById("theme")
function update(){
    const now= new Date();
    const hours=String(now.getHours()).padStart(2,'0');
    const min=String(now.getMinutes()).padStart(2,'0');
    const sec=String(now.getSeconds()).padStart(2,'0');
    clock.textContent=`${hours}:${min}:${sec}`
}
setInterval(update,1000)
update()
theme.addEventListener('click',()=>{
    document.body.style.backgroundColor=document.body.style.backgroundColor=='black'?'white':'black';
});