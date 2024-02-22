document.addEventListener('mousedown', function() {
    document.body.style.cursor = "grabbing";
});

addEventListener('mouseup', function() {
    document.body.style.cursor = "grab"
});

    function addBall() {
        const container = document.getElementById('container');
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.left = Math.random() * (container.offsetWidth - 20) + 'px';
        ball.style.top = Math.random() * (container.offsetHeight - 20) + 'px';
        ball.dx = (Math.random() - 1) * 4; // Random speed in x-direction
        ball.dy = (Math.random() - 1) * 4; // Random speed in y-direction
        container.appendChild(ball);
    }

    function removeBall() {
        const container = document.getElementById('container');
        const balls = container.querySelectorAll('.ball');
        if (balls.length > 0) {
            container.removeChild(balls[balls.length - 1]);
        }
    }

    function moveBalls() {
        const container = document.getElementById('container');
        const balls = container.querySelectorAll('.ball');
        balls.forEach(ball => {
            ball.style.left = (parseFloat(ball.style.left) + ball.dx) + 'px';
            ball.style.top = (parseFloat(ball.style.top) + ball.dy) + 'px';
            // Bounce off the container edges
            if (parseFloat(ball.style.left) <= 0 || parseFloat(ball.style.left) >= container.offsetWidth - 20) {
                ball.dx = -ball.dx;
            }
            if (parseFloat(ball.style.top) <= 0 || parseFloat(ball.style.top) >= container.offsetHeight - 20) {
                ball.dy = -ball.dy;
            }
        });
        requestAnimationFrame(moveBalls);
    }

    // Start moving the balls
    moveBalls();


const balls = [
    { id: 1, x: 80, y: 108, xSpeed: 1, ySpeed: 0.5,},
    { id: 2, x: 150, y: 540, xSpeed: 3, ySpeed: 0.9 },
    { id: 3, x: 380, y: 300, xSpeed: -2, ySpeed: -3 },
    { id: 4, x: 780, y: 140, xSpeed: 4, ySpeed: 0.6 },
    { id: 5, x: 1000, y: 440, xSpeed: -2, ySpeed: -2 },
  ];

  function createBallElement(ball) {
    const ballElement = document.createElement('div');
    ballElement.classList.add('ball');
    ballElement.id = `ball-${ball.id}`;
    document.body.appendChild(ballElement);
    return ballElement;
  }

  function updateBallPosition(ball, ballElement) {
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;

    if (ball.x + 50 > window.innerWidth || ball.x < 0) {
      ball.xSpeed = -ball.xSpeed;
    }
    if (ball.y + 50 > window.innerHeight || ball.y < 0) {
      ball.ySpeed = -ball.ySpeed;
    }

    ballElement.style.left = ball.x + "px";
    ballElement.style.top = ball.y + "px";
  }

  function animate() {
    for (const ball of balls) {
      const ballElement = document.getElementById(`ball-${ball.id}`) || createBallElement(ball);
      updateBallPosition(ball, ballElement);
    }

    requestAnimationFrame(animate);
  }


  animate();

  var audio = document.getElementById('audio');
  var playButton = document.getElementById('playButton');
  
  playButton.addEventListener('click', function() {
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
          audio.currentTime = 0; 
      }
  });

  const Audio = new audio('imgs/click.mp3'); // Replace 'click_sound.mp3' with the path to your sound file

// Add click event listener to the document
document.addEventListener('click', function() {
    // Play the audio when the document is clicked
    audio.play();
});

  

  
