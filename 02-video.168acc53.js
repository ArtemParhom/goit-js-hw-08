!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){console.log("played the video!")})),t.getVideoTitle().then((function(e){console.log("title:",e)}));t.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",e.seconds),console.log(localStorage.getItem("videoplayer-current-time"))})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.168acc53.js.map
