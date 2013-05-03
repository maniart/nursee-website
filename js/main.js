$(document).ready(function(){
	
    // vars
    var $wh = $(window).height(),
    	$ww = $(window).width(),
    	$window = $(window),
    	modulesVertPos = new Array();
    
    // methods
    function setHeight(el, perc){
		var ht = $wh * perc / 100;
		$(el).css({
			height : ht
		});
    };
    
    function setVertPos($el, perc){
    	var ht = $el.height(),
    		topShift = (($wh * perc / 100) - (ht/2)) + 'px';
    		//console.log(topShift);
    	
    	$($el).css({
    		top : topShift
    	});
    	
    };
    
    
    // css manipulation        
    $('.blowUp .content').css({
	   height: $wh 
    });
    
    $('.blowUp .sandwich').css({
	   height: $wh 
    });
	
	$('.blowUp .showApp').css({
	   height: $wh 
    });
    
     
    var i = 0;
    $('.module').each(function(){
	   setVertPos($(this), 60-i*3);
	   modulesVertPos.push(parseInt($(this).css('top')));
	   i++;
    });
        
    console.log(modulesVertPos);
	function getCenterPos($el){
		var w = $el.width();
		return parseInt((($ww/2) - (w/2)));
	}
		    
	$('.blowUp').find('.content').waypoint(function(direction){
	    
    if(direction == 'down'){
	    var thisModule = $(this).find('.module'); 
	    thisModule.transition({
	    	left : getCenterPos(thisModule)//,
		   //opacity: 1 
	    },500,'snap');
    } else {
	    $(this).find('.module').transition({
	    	left : '-100%'//,
		   //opacity: 1 
	    },500,'ease');
    }

    });
    
    $('.blowUp').find('.sandwich').waypoint(function(direction){
	    
	    if(direction == 'down'){
	    	console.log('sandwhich down');
		    $('.module').transition({
		    	top : ($wh/3)
			    
		    },500,'easeInBack');    
		} else {
			var j = 0;
	   		$('.module').each(function(){
		   		$(this).transition({
			   		top : modulesVertPos[j]
		   		}, 500, 'easeOutBack');
		   		j++;
		   		if(j > modulesVertPos.lenght) j = modulesVertPos.lenght; 
	   		});
		   			
	   		
	   		
		}

    });
    
    $('.blowUp').find('.showApp').waypoint(function(direction){
	    
	    if(direction == 'down'){
	    	console.log('showApp down');
		    $('.module').transition({
		    	left : '-100%',
		    	opacity: 0
			    
		    },300,'ease');    
		} else {
			$('.module').transition({
		    	opacity : 1,
		    	left : $ww/2-300
				    
		    },500,'snap');
		   			
	   		
	   		
		}

    });
    
    // call methods
    setHeight('.home', 100);
    setHeight('.overlayBlack', 100);
    setHeight('.blowUp', 1100);
    setVertPos($('.home .content'), 40, false);
    
	    
    
});