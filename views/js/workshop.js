$(document).ready(function() {
   
	var currentPage = ".home-page";
	
    $(".default-hidden").hide();
	


var home = $("#home-menu-btn, .home-menu-btn").click( function() {
	    
	    $(".dynamic").hide();
		
		$(".home-page").show("slide", "right", 500, 
			
			function() {

		    	currentPage = ".home-page";
				
				$("#test1").text(currentPage);
				
				}
			);
	   
	});


  var blog = $("#blog-menu-btn, .blog-menu-btn").click( function() {
	  
	   $(".dynamic").hide();

	   $(".blog-page").show("slide", "right", 500, 
	   	 
	   	 function() {
		    
		    currentPage = ".blog-page";
		    
		    $("#test1").text(currentPage);
	   		
	   		}

		);
	  
	   
   });

		
 
	$( "#go_register" ).click( function() {
		
			var test = $( ".main-modal-register-content-block" );
 		
 				$( ".main-modal-login-content-block" ).hide( "blind", 1000 );
 		
 					test.show( "blind", 1000 );
 		
 						$(this).hide( "slide", 1000 );
 	});

	
	$("#back").click( function() {
		
		var test = $(".main-modal-register-content-block");
 		
 			$( ".main-modal-login-content-block" ).show( "blind", 1000 );
 		
 				test.hide("blind", 1000);

 					$("#go_register").show("slide", 1000);
 	});
	
	//var userSearchInput = $("#search-text input").val();
	var userSearchInput = "";

	$("#search-btn a").click(function(){
		
		userSearchInput = $("#search-text input").val();
		
		if ( userSearchInput ) {
		
			$( '.content-main > div' ).show();

		
			$( ".content-main" )
				.find("div div:contains("+userSearchInput.toLowerCase()+")")
					.show('slide', 500)
						.find(":contains(" + userSearchInput.toLowerCase() + ")")
							.effect('highlight', 500
								);
			
			$( ".content-main" )
				.find("div div:not(div:contains(" + userSearchInput.toLowerCase() + "))")
					.hide();

			$( "#close-search" )
				.show('slide', 500)
					.effect('bounce', 500
						);

			$( '#test2' ).text( userSearchInput );/*test2*/
				
		}	
	
	});
   
   
	
	$( "#close-search button" ).click( function() {
			
			userSearchInput = "";
			 
			$( ".content-main" )
				.find( "div div:contains(" + userSearchInput.toLowerCase() + ")" )
					.show( 'slide', 500
							);
            
			
			
			 $( "#close-search, .default-hidden, .dynamic:not(" + currentPage + ")" ).hide( 'clip', 500 ); 
			 
			 

			/*test2*/ $( '#test2' ).text( userSearchInput );
			
	    	}); 
	
	
   
   
   
});// end of DOCUMENT









