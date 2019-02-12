var canva = document.getElementById("canvas");
    
    var ctx = canva.getContext("2d");
    canva.style.width = "50%";
    var r1 = 94.3398113206;
    var reach1 = 0;
    var reach2 = 1;
    var reach3 = 1;
    function Ball(x, y, speedx, speedy)
    { var radius = 10;
      var alpha = 0;
      this.angle = 180 ;
      this.x = x;
      this.y = y;
      this.speedx = speedx;
      this.speedy = speedy;
      this.reached = false;
      this.reached2 = false;
      this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        ctx.fill();
      }
      this.move1 = function()
      {     if(reach1 == 0 && reach2 == 0)
            {
              this.x = x - r1 * Math.cos(this.angle * (Math.PI/180));
            this.y = y - r1 * Math.sin(this.angle * (Math.PI/180));
            this.angle++;
            }
          
      }
      this.move2 = function()
      { 
            if(reach1 == 1 && reach2 == 1)
            {this.x = x - r1 * Math.cos(this.angle * (Math.PI/180));
            this.y = y - r1 * Math.sin(this.angle * (Math.PI/180));
            this.angle--;
            }
          
      }
      this.move3 = function()
      {     if(reach1 == 1 & reach2 == 0)
            {
            this.x = x + r1 * Math.cos(this.angle * (Math.PI/180));
            this.y = y + r1 * Math.sin(this.angle * (Math.PI/180));
            this.angle--;
            }
            
      }
      this.move4 = function()
      {     if(reach1 == 0 && reach2 == 1)
            {
            this.x = x + r1 * Math.cos(this.angle * (Math.PI/180));
            this.y = y + r1 * Math.sin(this.angle * (Math.PI/180));
            this.angle++;
            }
         

      }
      
      
      this.linedraw = function(a)
      { 
        ctx.beginPath();
        ctx.moveTo(a, 0);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = "white";
        ctx.stroke();
      }

    }
    var ball1 = new Ball (160, 0, 1 , 1)
    function update()
    {  ctx.clearRect(0, 0, canva.width, canva.height);
      ball1.move1();
      ball1.move2();
      ball1.draw();
      check();
      
     ball6.draw();
     ball6.move3();
     ball6.move4();
     

     ball2.draw();
     ball3.draw();
     ball4.draw();
     ball5.draw();
    
    }
    var t = setInterval(update, 20);
    var ball2 = new Ball(150, 80, 0 , 0);
    var ball3 = new Ball(170, 80, 0 , 0);
    var ball4 = new Ball(190, 80, 0 , 0);
    var ball5 = new Ball(130, 80, 0 , 0);
    ball2.draw();
    ball3.draw();
    ball4.draw();
    ball5.draw();
    var ball6 = new Ball(160, 0, 1 ,1 );
    
    ball6.y = 80.5;
    ball6.x = 110;
    ball6.angle = 150;
    ball1.angle = 200;
    ball6.draw();
    
      function check()
      { 
        if(ball1.y > 80 && ball1.y < 81 && ball6.y > 80 && ball6.y < 81 && reach3 == 0 )
        {
          reach1 = 0;
          reach2 = 1;
          reach3 = 1;
        }
        else if(ball1.angle == 200 && ball6.y > 80 && ball6.y < 81)
        {
          reach1 = 0;
          reach2 = 0;
          reach3 = 0;
        }
        else if(ball6.angle == 160 && ball1.y > 80 && ball1.y < 81)
        {
          reach1 = 1;
          reach2 = 0;
        }
        else if(ball1.y > 80 && ball1.y < 81 && ball6.y > 80 && ball6.y < 81 && reach3 == 1 )
        {
          reach1 = 1;
          reach2 = 1;
          reach3 = 0;
        }
        console.log( reach1);
        console.log( reach2);
        console.log( reach3);
      }
      var name = document.getElementById("name");
            var namtxt = "";
            var string = "Ashutosh Bharambe";
            var cursor = document.getElementById("cursor");
            var x = 0;
        
            function colorchange()
            {  
                if(x == 0)
                {
                    cursor.style.opacity = "0";
                    x++;
                    
                }
                else if(x == 1)
                {
                    cursor.style.backgroundColor = "#ffffff";
                    cursor.style.opacity = "1";
                    x--;
                   
                }
        
            }   
           
            function blinkcursor()
            {
                var t = setInterval(colorchange, 500);
            }
            blinkcursor();
            var i = 0;
    var txt = 'Ashutosh Bharambe ';
    var speed = 300;
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("Ashutosh").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
      
    