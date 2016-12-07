$(function() {
  
  $("input[placeholder], textarea[placeholder]").placeholder();
  
  /* navigation */
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    
    if(top > 150) {
      $('.navigation').css({'position': 'fixed', 'top': '0px', 'left': '0px', 'z-index': '90', 'width': '100%'});
      $('.header .centered').css({'padding-bottom': '36px'});
    }
    else {
      $('.navigation').removeAttr('style');
      $('.header .centered').removeAttr('style');
    }
  });
  /* end */
  
  /* slider */
  $(".slide_prev").click(function() {
    $(".slidesjs-previous").click();
  });
  
  $(".slide_next").click(function() {
    $(".slidesjs-next").click();
  });
  /* end */
  
  /* subservice hidden text */
  $('.subservise .title').on('click', function() {
	var service = $(this).parent();
	
	if (service.hasClass('opened')) {
	  service.removeClass('opened');
	}
	else {
	  service.addClass('opened');
	}
  });
  /* end */
  
  /* upload file fields */
  var fileInput = $('.file_input');
  
  fileInput.change(function() {
    $this = $(this);
	var filename_text = $this.val().split("\\").pop();
	
	if(filename_text.length > 26) {
	  var current_text = jQuery.trim(filename_text).substring(0, 25).slice(0, -1) + "...";
	}
	else {
	  current_text = filename_text
	}
	
	$('.upload_photo .file_name').text(current_text);
  })
  /* end*/
  
  /* faq */
  $('.question_block .question').on('click', function() {
    
	if ($(this).parent().hasClass('opened')) {
	  $(this).parent().removeClass('opened');
	}
	else {
	  $(this).parent().addClass('opened');
	}
  });
  /* end */
  
  /* questionnaire */
  $('.user_agreement').on('click', function() {
    if($(this).hasClass('not_agree')) {
      $(this).removeClass('not_agree');
    }
  });
  /* end */
  
});