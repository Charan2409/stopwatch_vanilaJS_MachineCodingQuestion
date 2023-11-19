import "./styles.css";

let buttonParent = document.querySelector(".buttons__container");

let currentTime = document.querySelector('.time');

let seconds = 0;
let minutes= 0;
let hours = 0;
let timerId;

// function displayTime(hours,seconds,minutes){
  //we can still optimize the function
// }

const handleClick = (event) =>{
  console.log(event.target.name)
  const button = event.target.name;
  if(button === 'start'){
   timerId = setInterval(()=>{
      seconds++;
      if(seconds > 58){
        seconds = 0;
        minutes++;
        if(minutes > 58){
          minutes = 0;
          hours++
        }
      }
      // currentTime.innerText = `${hours}: ${minutes}: ${seconds}`;
      currentTime.innerText =`${hours < 10 ? `0${hours}` : hours}: ${minutes <10 ? `0${minutes}` : minutes }: ${seconds <10 ? `0${seconds}`: seconds}`;
    },100);
  } 

  if(button === "stop"){
    clearInterval(timerId);
  }

  if(button ==='reset'){
    clearInterval(timerId);
    seconds = minutes= hours = 0;
    currentTime.innerText =`${hours < 10 ? `0${hours}` : hours}: ${minutes <10 ? `0${minutes}` : minutes }: ${seconds <10 ? `0${seconds}`: seconds}`;
  }
}

buttonParent.addEventListener('click', handleClick);


