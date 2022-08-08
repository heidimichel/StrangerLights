function lightsOn() {
  let lamps = [];
  lamps = document.querySelectorAll(".lamp");
  const colorList = ["#FFFF7F" , "#FFC04C", "#FF6666", "#4CFF4C", "#66C5FF"];
  let i = 0;
  lamps.forEach((item) => {
    if (item.classList.contains("remove-animation")) {
      item.style.animationPlayState = 'running';
    item.classList.toggle("remove-animation");
    item.style.setProperty('background-color', colorList[i]);
    item.style.setProperty('box-shadow', `2px 10px 20px ${colorList[i]}`);
    if (i >= 4) {
        i = 0;
      } else {
        i++;
      }
    };
  });
  console.log("it is on!"); 
};

function lightsOff() {
  let lamps = [];
  lamps = document.querySelectorAll(".lamp");
  lamps.forEach((item) => {
    if (!item.classList.contains("remove-animation")) {
     item.style.setProperty('background-color', '#362211');
     item.style.setProperty('box-shadow', 'none');
     item.classList.toggle("remove-animation"); 
    }
  });
  console.log("it is off!");
};