var url=document.URL;
var isBlack = false;
var isTwitch = false;
var vid;
function getYoutubeHTML(){
	return "<iframe id=\"youtube\" name=\"YouTube\" src=http://www.youtube.com/embed/" + vid + "?rel=0 frameborder=\"0\" allowfullscreen></iframe>";
}

function getTwitchHTML(){
	return "<object type=\"application/x-shockwave-flash\" id=\"live_embed_player_flash\" data=\"http://www.twitch.tv/widgets/live_embed_player.swf?channel=vaygrim\" bgcolor=\"#000000\"><param name=\"allowFullScreen\" value=\"true\" /><param name=\"allowScriptAccess\" value=\"always\" /><param name=\"allowNetworking\" value=\"all\" /><param name=\"movie\" value=\"http://www.twitch.tv/widgets/live_embed_player.swf\" /><param name=\"flashvars\" value=\"hostname=www.twitch.tv&channel=vaygrim&auto_play=true&start_volume=25\" /></object>";
}

function switchColor(){
    if (isBlack) {
        document.all.main.style.backgroundColor="#FEFEFE";
        document.body.style.backgroundColor="#f6f6f6";
        isBlack = false;
    } else {
        document.all.main.style.backgroundColor="#202020";
        document.body.style.backgroundColor="#101010";
        isBlack = true;
    }
}

function setVideoAccordingly(){
	videoDiv=document.getElementById("video");
	if(isTwitch){
		videoDiv.innerHTML = getTwitchHTML();
	} else {
		videoDiv.innerHTML = getYoutubeHTML();
	}
}

function switchVideo(){
	isTwitch = !isTwitch;
	setVideoAccordingly();
}

function initPage(){
	if (url.indexOf("?v=") != -1){
		vid = url.split("v=")[1].split("&")[0];
		setVideoAccordingly();
	} else {
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
		document.write("<a class=\"twitter-timeline\" align=\"center\" height=\"350\" data-dnt=\"true\" href=\"https://twitter.com/search?q=%23livestream+from%3AVaygrim\" data-widget-id=\"463738422134177793\">Vaygrim's Livestream tweets</a>");
	}
}

window.onload = initPage;