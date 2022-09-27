export function track() {

    var img = document.getElementById('photo');
    //var demoContainer = document.querySelector('.demo-container');

    function get_closest_color(r,g,b) {
        var hsl  = rgbToHsl(r,g,b);

        var hue = hsl[0] * 360;
        var sat = hsl[1];
        var lgt = hsl[2]; 

        if (lgt < 0.2)  return "black";
        if (lgt > 0.8)  return "white";

        if (sat < 0.25) return "gray";

        if (hue < 18)   return "red";
        if (hue < 40)   return "orange";
        if (hue < 70)   return "yellow";
        if (hue < 170)  return "green";
        if (hue < 250)  return "blue";
        if (hue < 300)  return "purple";

        return "red";
    }




    tracking.ColorTracker.registerColor('red', function(r, g, b) {
        var closest = get_closest_color(r,g,b);

        return closest == "red";
    });

    
    tracking.ColorTracker.registerColor('orange', function(r, g, b) {
        var closest = get_closest_color(r,g,b);

        return closest == "orange";
    });

    
    tracking.ColorTracker.registerColor('yellow', function(r, g, b) {
        var closest = get_closest_color(r,g,b);

        return closest == "yellow";
    });


    tracking.ColorTracker.registerColor('green', function(r, g, b) {
        var closest = get_closest_color(r,g,b);

        return closest == "green";
    });

    tracking.ColorTracker.registerColor('blue', function(r, g, b) {
        var closest = get_closest_color(r,g,b);

        return closest == "blue";
    });

    tracking.ColorTracker.registerColor('purple', function(r, g, b) {
        var closest = get_closest_color(r,g,b);

        return closest == "purple";
    });



    var tracker = new tracking.ColorTracker(['red', 'orange', 'yellow', 'green', 'blue', 'purple']);

    tracker.on('track', function(event) {
      event.data.forEach(function(rect) {
        window.plot(rect.x, rect.y, rect.width, rect.height, rect.color);
      });
    });


    document.getElementById('photo').style.display = 'block';
    document.getElementById('startbutton').style.display = 'none';
    
    tracking.track('#photo', tracker);

    window.plot = function(x, y, w, h, color) {
      console.log('plot')
      var rect = document.createElement('div');
      document.querySelector('.demo-container').appendChild(rect);
      rect.classList.add('rect');
      rect.style.border = '2px solid ' + color;
      rect.style.width = w + 'px';
      rect.style.height = h + 'px';
      rect.style.left = (img.offsetLeft + x) + 'px';
      rect.style.top = (img.offsetTop + y) + 'px';
      rect.style.color = '#fff';
      rect.innerText = color;
    };
  };
