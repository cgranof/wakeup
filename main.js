$(document).on('ready', function() {
  	var outerShell = $('<div class="outer-shell"></div>');
  	var innerShell = $('<div class="inner-shell"></div>');
  	var leftAmpm = $('<div class="left-ampm"></div>');
  	var clockScreen = $('<div class="clock-screen"></div>');
  	var clockAmpm = $('<div class="clock-ampm"></div>');
  	var clockText = $('<div class=clock-text>12:17</div>');
  	var bottomAm = $('<div class=bottom-am><span>AM 53 60 70 90 110 140 170</span></div>');
  	var bottomPm = $('<div class=bottom-pm><span>PM 88 92 96 102 106 108</span></div>');


		//$(outerShell).css({"background-color": "#141414", "width": "500px"});
  		
  		
  		$(outerShell).append(innerShell);

  		$(innerShell)
  			.append(leftAmpm)
  			.append(clockScreen)
  			.append(bottomAm)
  			.append(bottomPm);

  		$(clockScreen)
  			.append(clockAmpm)
  			.append(clockText);
  	
  			

  		$('.container').append(outerShell);



});