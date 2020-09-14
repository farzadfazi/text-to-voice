
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
const inputElement = document.getElementById('input');
const inputVoice = document.getElementById('toggle');
// const inputElement = document.getElementById('input');
// VoiceRSS Javascript SDK
// const VoiceRSS={speech:function(e){this._validate(e),this._request(e)},_validate:function(e){if(!e)throw"The settings are undefined";if(!e.key)throw"The API key is undefined";if(!e.src)throw"The text is undefined";if(!e.hl)throw"The language is undefined";if(e.c&&"auto"!=e.c.toLowerCase()){var a=!1;switch(e.c.toLowerCase()){case"mp3":a=(new Audio).canPlayType("audio/mpeg").replace("no","");break;case"wav":a=(new Audio).canPlayType("audio/wav").replace("no","");break;case"aac":a=(new Audio).canPlayType("audio/aac").replace("no","");break;case"ogg":a=(new Audio).canPlayType("audio/ogg").replace("no","");break;case"caf":a=(new Audio).canPlayType("audio/x-caf").replace("no","")}if(!a)throw"The browser does not support the audio codec "+e.c}},_request:function(e){var a=this._buildRequest(e),t=this._getXHR();t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){if(0==t.responseText.indexOf("ERROR"))throw t.responseText;audioElement.src=t.responseText,audioElement.play()}},t.open("POST","https://api.voicerss.org/",!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.send(a)},_buildRequest:function(e){var a=e.c&&"auto"!=e.c.toLowerCase()?e.c:this._detectCodec();return"key="+(e.key||"")+"&src="+(e.src||"")+"&hl="+(e.hl||"")+"&r="+(e.r||"")+"&c="+(a||"")+"&f="+(e.f||"")+"&ssml="+(e.ssml||"")+"&b64=true"},_detectCodec:function(){var e=new Audio;return e.canPlayType("audio/mpeg").replace("no","")?"mp3":e.canPlayType("audio/wav").replace("no","")?"wav":e.canPlayType("audio/aac").replace("no","")?"aac":e.canPlayType("audio/ogg").replace("no","")?"ogg":e.canPlayType("audio/x-caf").replace("no","")?"caf":""},_getXHR:function(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw"The browser does not support HTTP request"}};

// Disable/Enable button
function toggleButton(){
  button.diabled=!button.disabled;
  }
// const text = document.getElementById('input').value;
function checkInputVoice(){
if (inputVoice.checked){
  inputVoice.value = "Mike";
}else{
  inputVoice.value = "Mary";
}
}

// inputVoice.value = "John";
// Passing joke to voice RSS API
function tellMe(){
  // const voice = inputVoice.value;
  checkInputVoice();
  const text = inputElement.value;
  // const jokeString = joke.trim().replace(/ /g, '%20');
   VoiceRSS.speech({
    key: 'YOUR ApI KEY HERE!!!!!',
    src: text,
    hl: 'en-us',
    v: inputVoice.value,
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
    });
}

// trigger the button element with enter key . 
inputElement.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('button').click();

         }
      });

// Add event lister to play joke on click 

button.addEventListener('click', tellMe);
audioElement.addEventListener('ended',toggleButton)
// inputElement.addEventListener('click').value ='';
  tellMe();



