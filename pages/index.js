var myJs = ["../js/mui.min.js","../js/vue.js", "components/nav.js","components/goodsItem.js",]
var myIdx = 0;
window.onload = function() {
	load(myJs[myIdx])
}


function load(src) {

	var script = document.createElement("script"); //创建一个script标签
	script.type = "text/javascript";
	script.src = src
	document.getElementsByTagName('head')[0].appendChild(script);
	script.onload = () => {
		myIdx++;
		if (myIdx == myJs.length) {
			
			initData();
			return
		}
		load(myJs[myIdx])
	}
}
