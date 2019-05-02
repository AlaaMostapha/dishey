import $ from '../../../node_modules/jquery/dist/jquery';
$('.nav ul li a').on('click', function () {
    console.log($(this))
	$('.nav ul').find('li.active').removeClass('active');
    $(this).addClass('active');
    console.log($(this))
});
//console.log("j query")
