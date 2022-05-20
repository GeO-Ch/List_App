//these functions work onload!
function startTime() {
    const thisday = new Date();
    let hour = thisday.getHours();
    let min = thisday.getMinutes();
    let sec = thisday.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);

    //show the time
    document.getElementById('time').innerHTML =  hour + ":" + min + ":" + sec;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers when its < 10
    return i;
  }