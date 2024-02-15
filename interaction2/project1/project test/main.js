
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

  function addBall() {
    const container = document.getElementById('container');
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.animationDuration = (Math.random() * 2 + 1) + 's'; 
    ball.style.left = '0';
    ball.style.top = Math.random() * (container.offsetHeight - 20) + 'px';
    container.appendChild(ball);
  }

  function removeBall() {
    const container = document.getElementById('container');
    const balls = container.querySelectorAll('.ball');
    if (balls.length > 0) {
      container.removeChild(balls[balls.length - 1]);
    }
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
  


  