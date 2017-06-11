$(function(){
    //判断设备显示字体
    if(judge.platform() == "ios"){
		var str = "<style> body{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif!important;}</style>";
		$('head').append(str);
	}
	if(judge.platform()=="android"){
		var str = "<style>body{ font-family: 'RobotoRegular', 'Droid Sans', sans-serif!important;}</style>";
		$('head').append(str);
	}
	$('#index').click(function () {
	    if ($('#js_menu').hasClass('show')) {
	        $('#js_menu').removeClass('show');
	    } else {
	        $('#js_menu').addClass('show');
	    }
	});
	//$('#code').click(function () {
	//    if ($('#js_qrcode').hasClass('show')) {
	//        $('#js_qrcode').removeClass('show');
	//    } else {
	//        $('#js_qrcode').addClass('show');
	//    }
	//});
	$('.tab_Bar .tab_Trigger').click(function()
        {   
        	var index=$(this).index();
            $(this).addClass("active").siblings().removeClass("active"); 
            // $('.tab_Content').hide();
            // $('.tab_Content').eq(index).show();
        });
})
