(function () {
    "use strict"; //good to catch bugs

    /********************
    var declarations
    *********************/
    //for incrementer
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var clear = document.getElementById('clear');
    var submit = document.getElementById('submit');
    var seconds = 0, minutes = 0, hours = 0, days = 0,
    t = 0, countTarget = 0, counter = 0;

    //for decrementer
    var startD= document.getElementById('start1');
    var stopD = document.getElementById('stop1');
    var clearD = document.getElementById('clear1');
    var secondsD = 0, minutesD = 0, hoursD = 0, daysD = 0,
    tD = 0, countTargetD = 0, counterD = 0;

    /********************
    incrementing implementation
    *********************/
    function addI() {

        //do while counter <= countTarget
        if (++counter <= countTarget) {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                    if (hours >= 24) {
                        hours = 0;
                        days++;
                    }
                }
            }
        }
        //else, make button usable
        else {
            postStartState();
        }

        //output
        setWatch();
        timerI();
    }

    function setWatch() {
        document.getElementById('t1').textContent = (days ? (days > 9 ? days : "0" + days) : "00") + " days " + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + " hours " + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " minutes " + (seconds > 9 ? seconds : "0" + seconds) + " seconds ";
    }

    function timerI() {
        t = setTimeout(addI, 1000);
    }

    /********************
    decrementing implementation
    *********************/
    function addD() {
        //do while counter <= countTarget
        if (++counterD <= countTargetD) {
            secondsD--;
            if (secondsD < 0) {
                secondsD = 59;
                minutesD--;
                if (minutesD < 0) {
                    minutesD = 59;
                    hoursD--;
                    if (hoursD < 0) {
                        hoursD = 23;
                        daysD--;
                    }
                }
            }
        }
        //else, make button usable
        else {
            postStartStateD();
        }
        //output
        setWatchD();
        timerD();
    }

    function setWatchD() {
        document.getElementById('t2').textContent = (daysD ? (daysD > 9 ? daysD : "0" + daysD) : "00") + " days " + (hoursD ? (hoursD > 9 ? hoursD : "0" + hoursD) : "00") + " hours " + (minutesD ? (minutesD > 9 ? minutesD : "0" + minutesD) : "00") + " minutes " + (secondsD > 9 ? secondsD : "0" + secondsD) + " seconds ";
    }

    function timerD() {
        tD = setTimeout(addD, 1000);
    }
    
    /********************
    incrementor buttons
    *********************/
    /* Start button */
    start.onclick = function () {
        if (document.getElementById("countTarget").value > 0) {
            startState();
            timerI();
        }
    }

    /* Stop button */
    stop.onclick = function () {
        stopState();
        clearTimeout(t);
    }

    /* Clear button */
    clear.onclick = function () {
        clearState();
        t1.textContent = "00 days 00 hours 00 minutes 00 seconds";
        seconds = 0;
        minutes = 0;
        hours = 0;
        days = 0;
        counter = 0;
        countTarget = 0;
        clearTimeout(t);
        document.getElementById("countTarget").value = 0;
    }

    /*submit button*/
    submit.onclick = function () {
        submitState();
        counter = 0;
        counterD = 0;
        countTarget = document.getElementById("countTarget").value;
        countTargetD = countTarget;

        if (countTarget > 0) {
            secondsD = countTarget % 60;
            minutesD = parseInt(countTarget / 60);
            hoursD = parseInt(minutesD / 60);
            minutesD = minutesD % 60;
            daysD = parseInt(hoursD / 24);
            hoursD = hoursD % 24;
        }
        setWatch();
        setWatchD();
    }

    /********************
    decrementer buttons
    *********************/

    /* Start button */
    startD.onclick = function () {
        if (document.getElementById("countTarget").value > 0) {            
            startStateD();
            timerD();
        }
    }

    /* Stop button */
    stopD.onclick = function () {
        stopStateD();
        clearTimeout(tD);
    }

    /* Clear button */
    clearD.onclick = function () {
        clearStateD();
        t2.textContent = "00 days 00 hours 00 minutes 00 seconds";
        secondsD = 0;
        minutesD = 0;
        hoursD = 0;
        daysD = 0;
        counterD = 0;
        countTargetD = 0;
        clearTimeout(tD);
        document.getElementById("countTarget").value = 0;
    }

    /********************
    button state functions
    *********************/
    function submitState() {
        start.disabled = false;
        clear.disabled = false;
        stop.disabled = true;
        startD.disabled = false;
        clearD.disabled = false;
        stopD.disabled = true;
    }

    function startState() {
        start.disabled = true;
        clear.disabled = true;
        stop.disabled = false;
        submit.disabled = true;
    }

    function stopState() {
        start.disabled = false;
        clear.disabled = false;
        stop.disabled = true;
        submit.disabled = true;
    }

    function clearState() {
        start.disabled = false;
        clear.disabled = false;
        stop.disabled = false;
        submit.disabled = false;
    }

    function postStartState() {
        start.disabled = true;
        clear.disabled = false;
        stop.disabled = true;
        submit.disabled = true;
    }

    function initialState() {
        start.disabled = true;
        clear.disabled = true;
        stop.disabled = true;
        submit.disabled = false;
        startD.disabled = true;
        clearD.disabled = true;
        stopD.disabled = true;
    }

    function startStateD() {
        startD.disabled = true;
        clearD.disabled = true;
        stopD.disabled = false;
        submit.disabled = true;
    }

    function stopStateD() {
        startD.disabled = false;
        clearD.disabled = false;
        stopD.disabled = true;
        submit.disabled = true;
    }

    function clearStateD() {
        startD.disabled = false;
        clearD.disabled = false;
        stopD.disabled = false;
        submit.disabled = false;
    }

    function postStartStateD() {
        startD.disabled = true;
        clearD.disabled = false;
        stopD.disabled = true;
        submit.disabled = true;
    }

    initialState();

})();