// DETECT BROWSER

var browserApp;		//stores browser name
var deviceType;		//stores user device platform
var userIP;			//stores user IP address
var country;		//stores user country name
var city;			//stores user city name
var region;			//stores user region name
var ISP;			//stores user ISP name

document.addEventListener("DOMContentLoaded", detectBrowser);
document.addEventListener("DOMContentLoaded", detectDevice);
document.addEventListener("DOMContentLoaded", detectPlugins);
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://ipinfo.io/json", true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    userIP = response.ip;
    country = response.country;
    city = response.city;
    region = response.region;
    ISP = response.org;
    console.log(userIP, country, city, region, ISP);
    collateInfo();
  }
}

function detectBrowser() {
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
  {
    browserApp = "Opera";
    console.log(browserApp);
  }
  else if(navigator.userAgent.indexOf("Chrome") != -1 )
  {
    browserApp = "Chrome";
    console.log(browserApp);
  }
  else if(navigator.userAgent.indexOf("Safari") != -1)
  {
    browserApp = "Safari";
    console.log(browserApp);
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1 )
  {
    browserApp = "Firefox";
    console.log(browserApp);
  }
  else
  {
    browserApp = "Unknown";
    console.log(browserApp);
  }
}

function detectDevice() {
  if(navigator.platform.indexOf("MacIntel") != -1 )
  {
    deviceType = "macOS Device";
    console.log(deviceType);
  }
  else if(navigator.platform.indexOf("Win32") != -1 )
  {
    deviceType = "Windows Device";
    console.log(deviceType);
  }
  else if(navigator.platform.indexOf("Android") != -1 )
  {
    deviceType = "Android Device";
    console.log(deviceType);
  }
  else if(navigator.platform.indexOf("iPhone") != -1 )
  {
    deviceType = "iPhone";
    console.log(deviceType);
  }
  else if(navigator.platform.indexOf("iPad") != -1 )
  {
    deviceType = "iPad";
    console.log(deviceType);
  }
  else
  {
    deviceType = "Unknown Device";
    console.log(deviceType);
  }
}

function detectPlugins(){
  //Spit Out Installed Plugins
  var plugins=navigator.plugins.length; // store the total no of plugin
  var userPlugins = {}

  console.log("Total plugin installed: "+plugins+". Complete list stored under userPlugins object.");
  console.log("Visited sites stored under 'visited' object with key/value pairs.")
  for(var i=0;i<plugins;i++){
    userPlugins += (navigator.plugins[i].name+", ");
    info.plugins.push(navigator.plugins[i].name);
  }
}
