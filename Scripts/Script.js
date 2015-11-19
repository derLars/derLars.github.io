$(document).ready(function() {
    	
    	$( "#digitalSignalContent" ).slideUp("fast", resizeWindows());
        $( "#powerSupplyContent" ).slideUp("fast", resizeWindows());
        $( "#signalEncoderContent" ).slideUp("fast", resizeWindows());
        $( "#firstTestcycleContent" ).slideUp("fast", resizeWindows());
        $( "#theTrackContent" ).slideUp("fast", resizeWindows());
        $( "#mainControlBoardContent" ).slideUp("fast", resizeWindows());
        $( "#digitalSignalContent" ).slideUp("fast", resizeWindows());
        $( "#levelShifterContent" ).slideUp("fast", resizeWindows());
        $( "#switchControlBoardContent" ).slideUp("fast", resizeWindows());
        $( "#secondTestcycleContent" ).slideUp("fast", resizeWindows());
        $( "#imageProcessingContent" ).slideUp("fast", resizeWindows());
        $( "#commingSoonContent" ).slideUp("fast", resizeWindows());
        
        function resizeWindows() {
            $("#digitalSignal").css("width",$("#introduction").width());
            $("#powerSupply").css("width",$("#introduction").width());
            $("#signalEncoder").css("width",$("#introduction").width());
            $("#firstTestcycle").css("width",$("#introduction").width());
            $("#theTrack").css("width",$("#introduction").width());
            $("#mainControlBoard").css("width",$("#introduction").width());
            $("#levelShifter").css("width",$("#introduction").width());
            $("#switchControlBoard").css("width",$("#introduction").width());
            $("#secondTestcycle").css("width",$("#introduction").width());
            $("#imageProcessing").css("width",$("#introduction").width());
            $("#commingSoon").css("width",$("#introduction").width());
        }

        $( "#digitalSignalButton" ).on( "click", function() {           
            $( "#digitalSignalContent" ).slideToggle( "slow", resizeWindows())
        });

        $( "#powerSupply" ).on( "click", function() {        
            $( "#powerSupplyContent" ).slideToggle( "slow", resizeWindows())                  
        });

        $( "#signalEncoderButton" ).on( "click", function() {        
            $( "#signalEncoderContent" ).slideToggle( "slow", resizeWindows())         
        });
        
        $( "#firstTestcycleButton" ).on( "click", function() {       
            $( "#firstTestcycleContent" ).slideToggle( "slow", resizeWindows())
        });

        $( "#theTrackButton" ).on( "click", function() {       
            $( "#theTrackContent" ).slideToggle( "slow", resizeWindows())
        });

        $( "#mainControlBoardButton" ).on( "click", function() {       
            $( "#mainControlBoardContent" ).slideToggle( "slow", resizeWindows())
        });

        $( "#levelShifterButton" ).on( "click", function() {       
            $( "#levelShifterContent" ).slideToggle( "slow", resizeWindows())
        });

        $( "#switchControlBoardButton" ).on( "click", function() {       
            $( "#switchControlBoardContent" ).slideToggle( "slow", resizeWindows())
        });
  	
        $( "#secondTestcycleButton" ).on( "click", function() {       
            $( "#secondTestcycleContent" ).slideToggle( "slow", resizeWindows())
        });

        $( "#imageProcessingButton" ).on( "click", function() {       
            $( "#imageProcessingContent" ).slideToggle( "slow", resizeWindows())
        });

        $( "#commingSoonButton" ).on( "click", function() {       
            $( "#commingSoonContent" ).slideToggle( "slow", resizeWindows())
        });

        $(window).resize(function() {
            resizeWindows();
        });

        $( "#unfoldAll" ).on( "click", function() {
            $( "#digitalSignalContent" ).slideDown("fast", resizeWindows());
            $( "#powerSupplyContent" ).slideDown("fast", resizeWindows());
            $( "#signalEncoderContent" ).slideDown("fast", resizeWindows());
            $( "#firstTestcycleContent" ).slideDown("fast", resizeWindows());
            $( "#theTrackContent" ).slideDown("fast", resizeWindows());
            $( "#mainControlBoardContent" ).slideDown("fast", resizeWindows());
            $( "#levelShifterContent" ).slideDown("fast", resizeWindows());
            $( "#switchControlBoardContent" ).slideDown("fast", resizeWindows());
            $( "#secondTestcycleContent" ).slideDown("fast", resizeWindows());
            $( "#imageProcessingContent" ).slideDown("fast", resizeWindows());
             $( "#commingSoonContent" ).slideDown("fast", resizeWindows());
        });
});
