function lightsOn() {
    let lamps = [];
    lamps = document.querySelectorAll(".lamp");
    const colorList = ["#FFFF7F" , "#FFC04C", "#FF6666", "#4CFF4C", "#66C5FF"];
    let i = 0;
    lamps.forEach((item) => {
      item.style.animationPlayState = 'running';
      //item.style.setProperty('animation', 'initial');
      item.classList.toggle("remove-animation");
      item.style.setProperty('background-color', colorList[i]);
      item.style.setProperty('box-shadow', `2px 10px 20px ${colorList[i]}`);
      //item.style.setProperty('animation', );
      if (i >= 4) {
        i = 0;
      } else {
        i++;
      }    
    });
    console.log("it is on!");
  };
  
  function lightsOff() {
    let lamps = [];
    lamps = document.querySelectorAll(".lamp");
    lamps.forEach((item) => {
      item.style.setProperty('background-color', '#362211');
      item.style.setProperty('box-shadow', 'none');
      //item.style.setProperty('animation', 'none');
      item.classList.toggle("remove-animation");
      //item.style.animationPlayState = 'paused';   
    });
    console.log("it is off!");
  };