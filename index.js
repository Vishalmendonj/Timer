

​

    function startTimer() {

      const hours = document.getElementById('hours').value;

      const minutes = document.getElementById('minutes').value;

      const seconds = document.getElementById('seconds').value;

    

      

      

      

      let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        

      

      

      if (totalSeconds <= 0) {

        alert('Please enter a valid time');

        return;

      }

​

      timerInterval = setInterval(() => {

        const hoursLeft = Math.floor(totalSeconds / 3600);

        const minutesLeft = Math.floor((totalSeconds % 3600) / 60);

        const secondsLeft = totalSeconds % 60;

​

        document.getElementById('hours').value = hoursLeft; 
        document.getElementById('minutes').value = minutesLeft; 
        document.getElementById('seconds').value = secondsLeft; 

​

        if (totalSeconds <= 0) {

          clearInterval(timerInterval);

alert("tome's up")
          document.getElementById('audio').play();

        } else {

          totalSeconds--;

        }

      }, 1000);

    }

​

    function stopTimer() {

      clearInterval(timerInterval);

      document.getElementById('hours').value=0;
      document.getElementById('minutes').value=0;
      document.getElementById('seconds').value=0;

    }

​

    document.getElementById('play').addEventListener('click', startTimer);

    document.getElementById('stop').addEventListener('click', stopTimer);