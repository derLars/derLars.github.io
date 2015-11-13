$(document).ready(function() {
    	
    	$( "#digitalSignal" ).on( "click", function() {
    		if(($("#digitalSignal").attr('unfolded')) == "true") {
    			$("#digitalSignalContent").css("visibility","hidden");
    			$( "#digitalSignal" ).animate({height:"40"},400);
    			$("#digitalSignal").attr('unfolded', 'false');
    		} else {
   				$("#digitalSignalContent").css("visibility","visible");
    			$( "#digitalSignal" ).animate({height:"350"},400);
    			$("#digitalSignal").attr('unfolded', 'true');
    		}    		
    	});

    	
    	$( "#powerSupply" ).on( "click", function() {
    		if(($("#powerSupply").attr('unfolded')) == "true") {
    			$("#powerSupplyContent").css("visibility","hidden");
    			$( "#powerSupply" ).animate({height:"40"},400);
    			$("#powerSupply").attr('unfolded', 'false');
    		} else {
   				$("#powerSupplyContent").css("visibility","visible");
    			$( "#powerSupply" ).animate({height:"1500"},400);	
    			$("#powerSupply").attr('unfolded', 'true');
    		}    		
    	});

    	$( "#signalEncoder" ).on( "click", function() {
    		if(($("#signalEncoder").attr('unfolded')) == "true") {
    			$("#signalEncoderContent").css("visibility","hidden");
    			$( "#signalEncoder" ).animate({height:"40"},400);
    			$("#signalEncoder").attr('unfolded', 'false');
    		} else {
   				$("#signalEncoderContent").css("visibility","visible");
    			$( "#signalEncoder" ).animate({height:"1100"},400);			
    			$("#signalEncoder").attr('unfolded', 'true');
    		}    		
    	});

    	$( "#firstTestcycle" ).on( "click", function() {
    		if(($("#firstTestcycle").attr('unfolded')) == "true") {
    			$("#firstTestcycleContent").css("visibility","hidden");
    			$( "#firstTestcycle" ).animate({height:"40"},400);
    			$("#firstTestcycle").attr('unfolded', 'false');
    		} else {
   				$("#firstTestcycleContent").css("visibility","visible");
    			$( "#firstTestcycle" ).animate({height:"400"},400);
    			$("#firstTestcycle").attr('unfolded', 'true');
    		}    		
    	});

    	$( "#unfoldAll" ).on( "click", function() {
				$("#firstTestcycleContent").css("visibility","visible");
    			$( "#firstTestcycle" ).animate({height:"400"},400);		
    			$("#firstTestcycle").attr('unfolded', 'true');
    			$("#signalEncoderContent").css("visibility","visible");
    			$( "#signalEncoder" ).animate({height:"1100"},400);			
    			$("#signalEncoder").attr('unfolded', 'true');
    			$("#powerSupplyContent").css("visibility","visible");
    			$( "#powerSupply" ).animate({height:"1500"},400);	
    			$("#powerSupply").attr('unfolded', 'true');
   				$("#digitalSignalContent").css("visibility","visible");
    			$( "#digitalSignal" ).animate({height:"350"},400);
    			$("#digitalSignal").attr('unfolded', 'true');
		});
});
