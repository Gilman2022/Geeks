// For welcome section
  var images = ["/assets/top-tiger.jpg", "/assets/welcome.jpg", "/assets/2-water ball-sports.jpg", "/assets/5-sports.jpg", "/assets/sports-soccer.jpg", "/assets/academic-1.jpg", "/assets/acdemics-1.jpg", "/assets/top-5.jpg", "/assets/events-headboy.jpg"];

  function preloadImages() {
    for (var i = 0; i < images.length; i++) {
      var img = new Image();
      img.src = images[i];
    }
  }

  window.onload = preloadImages;

/*---------------------------------------
-----------------------------------------*/
  // For sports section


window.onload = function() {
    var items = document.getElementsByClassName("item-sports");
    var circles = document.getElementsByClassName("circle-sports");
    var leftBtn = document.getElementById("btn-left-sports");
    var rightBtn = document.getElementById("btn-right-sports");
    var content = document.querySelector('.content-sports');
    var index = 0;
    var timer = null;
  
    // clear class
    var clearclass = function() {
      for (let i = 0; i < items.length; i++) {
        items[i].className = "item-sports";
        circles[i].className = "circle-sports";
        circles[i].setAttribute("data-num", i);
      }
    }
  
    /*only display one class*/
    function move() {
      clearclass();
      items[index].className = "item-sports active";
      circles[index].className = "circle-sports active";
    }
  
    // click right button display next image
    rightBtn.onclick = function() {
      if (index < items.length - 1) {
        index++;
      } else {
        index = 0;
      }
      move();
    }
  
    // click left button display previous image
    leftBtn.onclick = function() {
      if (index > 0) {
        index--;
      } else {
        index = items.length - 1;
      }
      move();
    }
  
    // Start the timer, click the button on the right to realize the carousel
    timer = setInterval(function() {
      rightBtn.onclick();
    }, 1500)
  
    // When the dot is clicked, jump to the corresponding picture
    for (var i = 0; i < circles.length; i++) {
      circles[i].addEventListener("click", function() {
        var point_index = parseInt(this.getAttribute("data-num"));
        index = point_index;
        move();
      })
  
    }
  
    // Move the mouse in to clear the timer, and start a three-second timer to make the slow rotation
    content.onmouseover = function() {
      clearInterval(timer);
      timer = setInterval(function() {
        rightBtn.onclick();
      }, 3000)
    }
  
    // Mouse out and start the timer
    content.onmouseleave = function() {
      clearInterval(timer);
      timer = setInterval(function() {
        rightBtn.onclick();
      }, 1500)
    }
  }


