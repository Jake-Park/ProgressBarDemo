   var selectedBar = 1;
    var bars = [
		{ id: 1, value: 35, width: 35, color: 1 },
	     { id: 2, value: 50, width: 50, color: 1 },
	     { id: 3, value: 75, width: 75, color: 1 }
	];

     var add = function(param) {
          var idx = selectedBar-1;
          var cur_val = bars[idx].value + param;          
          var cur_width = cur_val;
          if(cur_val <= 0) {
            cur_val = 0;
            cur_width = 0;
          }
          else if(cur_val > 100) {
            bars[idx].color = 2;
            cur_width = 100;
          }
          else if(cur_val <= 100) {
            bars[idx].color = 1;
          }
      	bars[idx].value = cur_val;
          bars[idx].width = cur_width;
      	//this.set('bars', bars)
      }
    var setSelectedBar = function ( id ) {
  	selectedBar = id;
    };



