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
	videoDiv=document.getElementById("content");
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
		document.getElementById("twitterfeed").innerHTML = "";
		setVideoAccordingly();
	} 
}

window.onload = initPage;