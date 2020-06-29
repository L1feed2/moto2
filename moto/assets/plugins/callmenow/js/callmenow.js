$(document).ready(function() {
	
	
		$('.callmenow').click(function() {
			
			var pos=$(this).offset();
			$('.callme_window').css('left',pos.left-200);
			if ($('.callme_window').height() > pos.top)	{
				$('.callme_window').css('top',pos.top+20);	
			} else {
				$('.callme_window').css('top',pos.top-220);	
			}
			$('.callme_window').fadeIn();	
			return false;
		});


		$('.close_callme').click(function() {
			$('.callme_window').hide();				
		});
		
		$('#callme_form').submit(function() {
			
			$.post($('#callme_form').attr('action'), {callme_name : $('#callme_name').val() , callme_phone: $('#callme_phone').val() , callme_theme: $('#callme_theme').val() }, function(data){
			
				if (parseInt(data) == 0) {
					 alert('Укажите свои Имя и Телефон!');
				} else {
					alert('Мы свяжемся с Вами в самое ближайшее время!')
					$('.callme_window').hide();
				 }
		 
			});
			return false;
		});
		
		
	
	
	
});