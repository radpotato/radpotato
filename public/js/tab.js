var cid = function(id) { //getElementById
    var tmp = id === "body" ? document.body : document.getElementById(id);
	return tmp;
},
ctn = function(tn,id) { //getElementsByTagName
	var tmp = id ? cid(id).getElementsByTagName(tn) : document.body.getElementsByTagName(tn);
	return tmp;
}, 
ccn = function(cn,id,tn) {
	var tmp = id ? tn ? ctn(tn,id) : ctn('*',id) : ctn('*'), ln = tmp.length, i = 0, j = 0, atmp = new Array();
	for(i; i < ln; i++) {
		if(tmp[i].className === cn) {
			atmp[j] = tmp[i];
			j++;
		}
	};
	return atmp;
} //getElementsByClassName

var tabNavs = ctn("a","tabNavi");
for(var i = 0; i < tabNavs.length; i++) {
    tabNavs[i].onclick = function() {
		var cont = this.textContent.toLowerCase(),
			offC = ccn("on","rTime");
			offC[0].className = "off";
		cid(cont).className = cid(cont).className === "off" ? cid(cont).className = "on" : cid(cont).className = "off";
	}
}
var tabMenu = ctn("a","menu");
for(var i = 0; i < tabMenu.length; i++) {
	tabMenu[i].onclick = function() {
		var tmp = ccn("tabCont","tabMenu"),
			rel = this.getAttribute("rel");
			tmp[0].className = "tabCont off";
		cid(rel).className = "tabCont";
	}
};
var lp = ccn("tabBar","tabMenu");
for(var i = 0; i < lp.length; i++) {
	lp[i].onclick = function() {
		imgs = this.getElementsByTagName("img");
		img = imgs[0];
		this.style.width = img.naturalWidth+"px";
		this.style.height = img.naturalHeight+"px";
		this.style.marginLeft = "-" + img.naturalWidth / 2 + "px";
		this.style.marginTop = "-" + img.naturalHeight / 2 + "px";
		if(cid("layer")) cid("layer").removeAttribute("id");
		this.id = "layer";
		if(!cid("dimd")) {
			var dimd = document.createElement("div")
			dimd.id = "dimd";
			document.body.appendChild(dimd);
		}
		cid("dimd").onclick = function() {
			cid("layer").removeAttribute("style");
			cid("layer").removeAttribute("id");
			var dimd = cid("dimd");
			document.body.removeChild(dimd);
		}
	}
};
var n = function() {
	noti = ccn("on","notice");
	if(noti[0].nextSibling === null) {
		lis = ctn("li","notice");
		lis[0].className = "on";
	} else {
		noti[0].nextSibling.className = "on"
	}
	noti[0].className = "off";
},
p = function() {
	noti = ccn("on","notice");
	if(noti[0].previousSibling === null) {
		lis = ctn("li","notice");
		lis[3].className = "on";
	} else {
		noti[0].previousSibling.className = "on"
	}
	noti[0].className = "off";
};