const hourElement = document.getElementById("hourNum");
const miniteElement = document.getElementById("minuteNum");
const secondElement = document.getElementById("secondNum");
const ampmElement = document.getElementById("ampmText");

const getCurrentTime = ()=>{
    //Get current system time
   let time = new Date();
   let h = time.getHours();
   let m = time.getMinutes();
   let s = time.getSeconds();

   if(h > 12){
        h = h - 12;
        ampmElement.textContent = "PM";
        document.body.style.backgroundImage = "url('images/night.jpg')";
   }
   
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;

   hourElement.textContent = h;
   miniteElement.textContent = m;
   secondElement.textContent = s;

   setInterval(()=>{
        getCurrentTime();
   }, 1000);

}
getCurrentTime();





