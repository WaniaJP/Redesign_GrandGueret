$(document).ready( function(){
	$('.bar-btn').on("click",function(){
				  if($(this).hasClass('opened')){
					  $('.mobile-menu').css('display', 'none');
					  $(this).removeClass('opened');
				  }
				  else{
					  $('.mobile-menu').css('display', 'block');
					  $(this).addClass('opened');
				  }
			  });
}
);

