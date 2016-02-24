var getapi = function(url) {
	return 'https://api.facebook.com/method/fql.query?query=select%20%20like_count%20from%20link_stat%20where%20url=%22'+url+'%22';
}

var originCount = 0;

var getCount = function(fbapi) {
	var sound = $('#sound')[0];
	$.get(fbapi).success(function(res) {
		var count = $(res).find('like_count').text();
		if(count != originCount) {
			//播放声音
			sound.play();
			originCount = count;
		}
		console.log(count);
		$('#count').text(count);
		getCount(fbapi);
	})
}
$(function() {
	var fbapi = getapi('https://www.facebook.com/Insta360Camera/');
	getCount(fbapi);
})