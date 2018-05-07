var info = {
  "browserApp" : "",
  "deviceType" : "",
  "country" : "",
  "city" : "",
  "region" : "",
  "plugins" : [],
  "ipAddress" : "",
  "isp" : "",
  "schools" : [],
  "banks":[],
  "searchEngines":[],
  "entertainment":[],
  "travelServices":[],
  "storage":[],
  "mail":[],
  "socialMedia":[],
  "porn":[]
};

function collateInfo(){
  info.browserApp = browserApp;
  info.deviceType = deviceType;
  info.country = country;
  info.city = city;
  info.region = region;
  info.ipAddress = userIP;
  info.isp = ISP;
}

function storeInfo(){
  document.getElementById('info').value = JSON.stringify(info);
  document.getElementById('submitInfo').click();
  console.log(document.getElementById('info').value);
}

setTimeout(storeInfo,10000);
