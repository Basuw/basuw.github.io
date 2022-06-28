var dialLines = document.getElementsByClassName('diallines');

for (var i = 1; i < 60; i++) {
   dialLines[i] = $(dialLines[i-1]).clone()
                                   .insertAfter($(dialLines[i-1]));
   $(dialLines[i]).css('transform', 'rotate(' + 6 * i + 'deg)');
}

function tick() {
   var date = new Date();
   var seconds = date.getSeconds();
   var minutes = date.getMinutes();
   var hours = date.getHours();
   var day = date.getDate();
   
   var secAngle = seconds * 6;
   var minAngle = minutes * 6 + seconds * (360/3600);
   var hourAngle = hours * 30 + minutes * (360/720);
   
   $('.sec-hand').css('transform', 'rotate(' + secAngle + 'deg)');
   $('.min-hand').css('transform', 'rotate(' + minAngle + 'deg)');
   $('.hour-hand').css('transform', 'rotate(' + hourAngle + 'deg)');
   $('.date').text(day);
}

setInterval(tick, 100);
