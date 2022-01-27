// select elements for future use as addEventListener('click', callback)
    const submitBtn = document.getElementById('submit');
    const startBtn = document.getElementById('start');
    const resetBtn = document.getElementById('reset');
    
    // setting scope of variables to global
    let eventName;
    let eventDate;
    
    // submit variables into "state" so that recursion won't destroy them
    function handleSubmit (e) {
      e.preventDefault();
      eventName = document.getElementById("name").value;
      eventDate = document.getElementById("date").valueAsDate;
      return [eventName, eventDate];
    }
    
    // start the countdown with a click
    function handleStart (e) {
      e.preventDefault();
      countdown();
    }
    
    // go back to home screen
    function handleReset (e) {
      document.getElementById('counter').innerHTML = 
      `
        <form>
          <br>
          <label for="name"></label>
          <br>
          <input type="text" id="name" name="name">
          <br><br>
          <label for="date"></label>
          <br>
          <input type="date" id="date" name="date">
          <br><br>
          <button id="submit">Submit</button>
          <br><br>
          <button id="start">Start</button>
          <br><br>
          <button id="reset">Reset</button>
        </form>
      `;
    }
    
    // the logic of the countdown
	  function countdown () {

      // initializing the values of days, hours, minutes, seconds in milliseconds
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      
      //calculating time left to the event by recursively taking the day and dividing into days, etc.
      const today = new Date();
      const timespan = eventDate - today;
      const days = Math.floor(timespan / day);
      const hours = Math.floor((timespan % day) / hour);
      const minutes = Math.floor((timespan % hour) / minute);
      const seconds = Math.floor((timespan % minute) / second);
      
      // if it is the day of the event, put that in the eventContainer div
      if (timespan <= 0 && timespan > -day) {
        document.getElementById('counter').innerHTML = 
          `
            <h1>HAPPY ${eventName.toUpperCase()}!!!</h1>
            <form>
    	        <br><br>
              <button id="reset">Reset</button>
  	        </form>
          `;
        return;
      }
      
      // start the countdown and  put that to the eventContainer div
      document.getElementById('counter').innerHTML =
	      `
	          <div class="countdown">
	          <div class="until-component">
	            <div class="until-number">${days}</div>
	            <div class="until-unit">Days</div>
	          </div>
	          <div class="until-component">
	            <div class="until-number">${hours}</div>
	            <div class="until-unit">Hours</div>
	          </div>
	          <div class="until-component">
	            <div class="until-number">${minutes}</div>
	            <div class="until-unit">Minutes</div>
	          </div>
	          <div class="until-component">
	            <div class="until-number">${seconds}</div>
	            <div class="until-unit">Seconds</div>
	          </div>
  	        </div>
  	        <div class="until-event">Until ${eventName}</div>
  	        <div>
  	          <form>
  	          <br><br>
              <button id="reset">Reset</button>
  	        </form>
  	        </div>
	      `;
	      
	    // run countdown function every second   
	    setInterval(countdown, 1000);
    }
 
    // create callback functions when buttons are clicked. put below functions so that they refer to them, otherwise, they may not find them since they may or may not be hoisted
    submitBtn.addEventListener('click', handleSubmit);
    startBtn.addEventListener('click', handleStart);
    resetBtn.addEventListener('click', handleReset);