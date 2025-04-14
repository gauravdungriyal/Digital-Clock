const hour=document.querySelector(".hour")
const minute=document.querySelector(".minute")
const seconds=document.querySelector(".seconds")

function update(){
const date=new Date();
const currHours=date.getHours();
const currMinutes=date.getMinutes();
const currSeconds=date.getSeconds();
hour.innerHTML=currHours+":";
minute.innerHTML=currMinutes+":";
seconds.innerHTML=currSeconds;
}
setInterval(update,1000);
