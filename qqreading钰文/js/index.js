/*防止手机端滑动*/
$(document).ready(function() {
	document.body.addEventListener("touchmove", function(event) {　　　　
		event.preventDefault();　　
	});
});

$("#goAndGet").click(function() {
	_paq.push(["trackEvent", "点击领券按钮", "点击事件跟踪"]);
	MtaH5.clickStat("getcoupon");

	var message;
	var tel = document.getElementById("tel").value;
	if(!(/^1[34578]\d{9}$/.test(tel)) || tel === "") {
		message = "请填写手机号码才能领阅读券哦";
		toast(message);
	} else {
		let param = "{\"phone\":" + tel + "}"
		$.ajax({
			url: "//yunying.lipush.com/h5/wandafilm/api/qq-reader/upload/phone",
			type: "post", //post请求方式
			dataType: "json",
			data: param,
			headers: {
				"Content-Type": "application/json",
			},
			processData: false,
			async: true,
			crossDomain: true,
			success: function(result) {
				if(~~result.code === 0000) {
					window.location.href = 'download.html';
				}
				if(~~result.code === 0002) {
					message = result.message
					toast(message)
					setTimeout(function() {
						window.location.href = 'download.html';
					}, 2000)
				}
			},
			error: function(result, status) {
				message = result.message
				toast(message)
			}
		});
	}
});

function toast(message) {
	$('#m-toast-inner-text').text(message);
	$('#m-toast-pop').fadeIn();
	setTimeout(function() {
		$('#m-toast-pop').fadeOut();
	}, 2000);
}

var is_weixin = (function() {
	var ua = navigator.userAgent.toLowerCase();
	if(/micromessenger/.test(ua)) {
		return true;
	} else {
		return false;
	}
});

var downloadbtn = function() {
	_paq.push(["trackEvent", "点击下载按钮", "点击事件跟踪"]);
	MtaH5.clickStat("download")
	
	var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
	var btn = document.getElementsByClassName('background-download');
	var tip = document.getElementById('weixin-tip');
	var close = document.getElementById('close');
	if(is_weixin()) {
		for(let i = 0; i < btn.length; i++) {
			btn[i].onclick = function(e) {
				tip.style.height = winHeight + 'px';
				tip.style.display = 'block';
				return false;
			}
		}
		close.onclick = function() {
			tip.style.display = 'none';
		}
	} else {
		window.location.href = "https://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10033515";
	}
};