



// $('.first-one').click(function(e){
	
// 	$('a').removeClass('active');
// 	$(e.target).addClass('active');
// });

function hideAll(){
	$('.top-nav').removeClass('active');
	$('.top-nav').addClass('non-active');
	$('.side-nav').removeClass('active');
	$('.side-nav').addClass('non-active');
	$('.album-one').removeClass('active');
	$('.album-one').addClass('non-active');
	$('.album-two').removeClass('active');
	$('.album-two').addClass('non-active');
	$('.album-three').removeClass('active');
	$('.album-three').addClass('non-active');
	$('.album-four').removeClass('active');
	$('.album-four').addClass('non-active');
	$('.album-five').removeClass('active');
	$('.album-five').addClass('non-active');
	$('.album-six').removeClass('active');
	$('.album-six').addClass('non-active');
	$('.image-display').removeClass('active');
	$('.image-display').addClass('non-active');
	$('.albums-all').removeClass('active');
	$('.albums-all').addClass('non-active');	
				
}


$('.album-one-index').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-one').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn1').addClass('clicked');

});

$('.album-two-index').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-two').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn2').addClass('clicked');

});
$('.album-three-index').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-three').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn3').addClass('clicked');
});
$('.album-four-index').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-four').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn4').addClass('clicked');
});
$('.album-five-index').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-five').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn5').addClass('clicked');
});
$('.album-six-index').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-six').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn6').addClass('clicked');
});

$('.btn1').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-one').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn1').addClass('clicked');

});

$('.btn2').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-two').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn2').addClass('clicked');
	
});

$('.btn3').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-three').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn3').addClass('clicked');
});

$('.btn4').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-four').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn4').addClass('clicked');
});

$('.btn5').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-five').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn5').addClass('clicked');
});

$('.btn6').click(function(e){
	hideAll();
	$('.side-nav').addClass('active');
	$('.album-six').addClass('active');
	$('.side-nav-button').removeClass('clicked');
	$('.btn6').addClass('clicked');
	
});



$('.album-one').click(function(e){
	

	switch($(e.target).text()){
		case 'Photo 1':
			
			$('.image-display-text').text('Photo 1');
			$('.image-display-image-box').attr('src','images/album001/1.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 1');
			break;
		case 'Photo 2':
			$('.image-display-text').text('Photo 2');
			$('.image-display-image-box').attr('src','images/album001/2.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 1');
			break;
		case 'Photo 3':
			$('.image-display-text').text('Photo 3');
			$('.image-display-image-box').attr('src','images/album001/3.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 1');
			break;
		case 'Photo 4':
			$('.image-display-text').text('Photo 4');
			$('.image-display-image-box').attr('src','images/album001/4.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 1');
			break;
		case 'Photo 5':
			$('.image-display-text').text('Photo 5');
			$('.image-display-image-box').attr('src','images/album001/5.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 1');
			break;
		case 'Photo 6':
			$('.image-display-text').text('Photo 6');
			$('.image-display-image-box').attr('src','images/album001/6.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 1');
			break;			
	}

});

$('.album-two').click(function(e){
	

	switch($(e.target).text()){
		case 'Photo 1':
			
			$('.image-display-text').text('Photo 1');
			$('.image-display-image-box').attr('src','images/album002/7.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 2');
			break;
		case 'Photo 2':
			$('.image-display-text').text('Photo 2');
			$('.image-display-image-box').attr('src','images/album002/8.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 2');
			break;
		case 'Photo 3':
			$('.image-display-text').text('Photo 3');
			$('.image-display-image-box').attr('src','images/album002/9.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 2');
			break;
		case 'Photo 4':
			$('.image-display-text').text('Photo 4');
			$('.image-display-image-box').attr('src','images/album002/10.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 2');
			break;
		case 'Photo 5':
			$('.image-display-text').text('Photo 5');
			$('.image-display-image-box').attr('src','images/album002/11.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 2');
			break;
		case 'Photo 6':
			$('.image-display-text').text('Photo 6');
			$('.image-display-image-box').attr('src','images/album002/12.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 2');
			break;			
	}

});

$('.album-three').click(function(e){
	

	switch($(e.target).text()){
		case 'Photo 1':
			
			$('.image-display-text').text('Photo 1');
			$('.image-display-image-box').attr('src','images/album003/13.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 3');
			break;
		case 'Photo 2':
			$('.image-display-text').text('Photo 2');
			$('.image-display-image-box').attr('src','images/album003/14.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 3');
			break;
		case 'Photo 3':
			$('.image-display-text').text('Photo 3');
			$('.image-display-image-box').attr('src','images/album003/15.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 3');
			break;
		case 'Photo 4':
			$('.image-display-text').text('Photo 4');
			$('.image-display-image-box').attr('src','images/album003/16.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 3');
			break;
		case 'Photo 5':
			$('.image-display-text').text('Photo 5');
			$('.image-display-image-box').attr('src','images/album003/17.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 3');
			break;
		case 'Photo 6':
			$('.image-display-text').text('Photo 6');
			$('.image-display-image-box').attr('src','images/album003/18.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 3');
			break;			
	}

});
$('.album-four').click(function(e){
	

	switch($(e.target).text()){
		case 'Photo 1':
			
			$('.image-display-text').text('Photo 1');
			$('.image-display-image-box').attr('src','images/album004/19.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 4');
			break;
		case 'Photo 2':
			$('.image-display-text').text('Photo 2');
			$('.image-display-image-box').attr('src','images/album004/20.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 4');
			break;
		case 'Photo 3':
			$('.image-display-text').text('Photo 3');
			$('.image-display-image-box').attr('src','images/album004/21.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 4');
			break;
		case 'Photo 4':
			$('.image-display-text').text('Photo 4');
			$('.image-display-image-box').attr('src','images/album004/22.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 4');
			break;
		case 'Photo 5':
			$('.image-display-text').text('Photo 5');
			$('.image-display-image-box').attr('src','images/album004/23.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 4');
			break;
		case 'Photo 6':
			$('.image-display-text').text('Photo 6');
			$('.image-display-image-box').attr('src','images/album004/24.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 4');
			break;			
	}

});
$('.album-five').click(function(e){
	

	switch($(e.target).text()){
		case 'Photo 1':
			
			$('.image-display-text').text('Photo 1');
			$('.image-display-image-box').attr('src','images/album005/25.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 5');
			break;
		case 'Photo 2':
			$('.image-display-text').text('Photo 2');
			$('.image-display-image-box').attr('src','images/album005/26.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 5');
			break;
		case 'Photo 3':
			$('.image-display-text').text('Photo 3');
			$('.image-display-image-box').attr('src','images/album005/27.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 5');
			break;
		case 'Photo 4':
			$('.image-display-text').text('Photo 4');
			$('.image-display-image-box').attr('src','images/album005/28.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 5');
			break;
		case 'Photo 5':
			$('.image-display-text').text('Photo 5');
			$('.image-display-image-box').attr('src','images/album005/29.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 5');
			break;
		case 'Photo 6':
			$('.image-display-text').text('Photo 6');
			$('.image-display-image-box').attr('src','images/album005/30.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 5');
			break;			
	}

});
$('.album-six').click(function(e){
	

	switch($(e.target).text()){
		case 'Photo 1':
			
			$('.image-display-text').text('Photo 1');
			$('.image-display-image-box').attr('src','images/album006/31.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 6');
			break;
		case 'Photo 2':
			$('.image-display-text').text('Photo 2');
			$('.image-display-image-box').attr('src','images/album006/32.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 6');
			break;
		case 'Photo 3':
			$('.image-display-text').text('Photo 3');
			$('.image-display-image-box').attr('src','images/album006/33.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 6');
			break;
		case 'Photo 4':
			$('.image-display-text').text('Photo 4');
			$('.image-display-image-box').attr('src','images/album006/34.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 6');
			break;
		case 'Photo 5':
			$('.image-display-text').text('Photo 5');
			$('.image-display-image-box').attr('src','images/album006/35.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 6');
			break;
		case 'Photo 6':
			$('.image-display-text').text('Photo 6');
			$('.image-display-image-box').attr('src','images/album006/36.jpeg');
			hideAll();
			$('.image-display').addClass('active');
			$('.image-display-back').text('Back to Album 6');
			break;			
	}

});









