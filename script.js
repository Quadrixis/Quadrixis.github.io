function realtimeClock(){

    var rtClock = new Date();

    var hours = rtClock.getHours();

    var minutes = rtClock.getMinutes();

    var seconds = rtClock.getSeconds();


    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds;

   


    var rtDate = new Date();

    var year = rtDate.getFullYear();

    var month = rtDate.getUTCMonth() + 1;

    var day = rtDate.getUTCDate();

    document.getElementById('dates').innerHTML = month + " / " + day + " / " + year;

    


    var x = setTimeout(realtimeClock, 500);




}