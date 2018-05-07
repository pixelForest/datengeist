//HISTORY SNIFFER

const visited = {};


/**
* Display the results.
* @param {string} url The url to display
* @param {Element} elem
*/

function display (url, elem) {
  const li = document.createElement('li')
  const host = url.replace('http://', '').replace('www.', '').replace(':443', '').split('/')[0]
  li.appendChild(document.createTextNode(host))
  elem.appendChild(li)
}

function test() {
  const button = document.querySelector('button')
  const visitedElem = document.getElementById('visited')
  const notVisitedElem = document.getElementById('not_visited')
  if (!window.fetch || !window.performance) {
    window.alert('please try a newer browser.')
  }
  window.performance.setResourceTimingBufferSize(1000)
  window.HOSTS.forEach(function (url, i) {
    if (window.BLACKLIST_HOSTS.includes(url) || url.length > 33) {
      // These hosts are too flakey or obscure
      return
    }
    window.fetch(url, {mode: 'no-cors'}).then(() => {
      display(url, notVisitedElem)
    }).catch(() => {
      display(url, notVisitedElem)
    })
  })
  const intervalId = setInterval(() => {
    const timings = window.performance.getEntriesByType('resource')
    timings.forEach((timing) => {
      let url = timing.name
      if (url.includes(':443') && !visited[url]) {
        switch (url) {
          case 'http://npalstudent.np.edu.sg:443/':
          display(url, visitedElem)
          visited[url] = 'Ngee Ann Polytechnic'
          info.schools.push('Ngee Ann Polytechnic');
          break;

          case 'http://myleo.rp.edu.sg:443/':
          display(url, visitedElem)
          visited[url] = 'Republic Polytechnic'
          info.schools.push('Republic Polytechnic');
          break;

          case 'http://www.dbs.com.sg:443/':
          display(url, visitedElem)
          visited[url] = 'DBS Bank'
          info.banks.push('DBS Bank');
          break;

          case 'http://www.posb.com.sg:443/':
          display(url, visitedElem)
          visited[url] = 'POSB Bank'
          info.banks.push('POSB Bank');
          break;

          case 'http://www.ocbc.com:443/':
          display(url, visitedElem)
          visited[url] = 'OCBC Bank'
          info.banks.push('OCBC Bank');
          break;

          case 'http://www.sc.com:443/':
          display(url, visitedElem)
          visited[url] = 'Standard Charted Bank'
          info.banks.push('Standard Charted Bank');
          break;

          case 'http://www.uobgroup.com:443/':
          display(url, visitedElem)
          visited[url] = 'United Overseas Bank';
          info.banks.push('United Overseas Bank');
          break;

          case 'http://www.google.com:443/':
          display(url, visitedElem)
          visited[url] = 'Google';
          info.searchEngines.push('Google');
          break;

          case 'http://sg.yahoo.com:443/':
          display(url, visitedElem)
          visited[url] = 'Yahoo!';
          info.searchEngines.push('Yahoo!');
          break;

          case 'http://duckduckgo.com:443/':
          display(url, visitedElem)
          visited[url] = 'DuckDuckGo';
          info.searchEngines.push('DuckDuckGo');
          break;

          case 'http://accounts.spotify.com:443/':
          display(url, visitedElem)
          visited[url] = 'Spotify';
          info.entertainment.push('Spotify');
          break;

          case 'http://www.icloud.com:443/':
          display(url, visitedElem)
          visited[url] = 'iCloud';
          info.storage.push('iCloud');
          info.mail.push('Gmail');
          break;

          case 'http://www.facebook.com:443/':
          display(url, visitedElem)
          visited[url] = 'Facebook';
          info.socialMedia.push('Facebook');
          break;

          case 'http://www.instagram.com:443/':
          display(url, visitedElem)
          visited[url] = 'Instagram';
          info.socialMedia.push('Instagram');
          break;

          case 'http://www.twitter.com:443/':
          display(url, visitedElem)
          visited[url] = 'Twitter';
          info.socialMedia.push('Twitter');
          break;

          case 'http://www.tumblr.com:443/':
          display(url, visitedElem)
          visited[url] = 'Tumblr';
          info.socialMedia.push('Tumblr');
          break;

          case 'http://www.netflix.com:443/':
          display(url, visitedElem)
          visited[url] = 'Netflix';
          info.entertainment.push('Netflix');
          break;

          case 'http://www.dropbox.com:443/':
          display(url, visitedElem)
          visited[url] = 'Dropbox';
          info.storage.push('Dropbox');
          break;

          case 'http://www.box.com:443/':
          display(url, visitedElem)
          visited[url] = 'Box.com';
          info.storage.push('Box.com');
          break;

          case 'http://www.drive.google.com:443/':
          display(url, visitedElem)
          visited[url] = 'Google Drive';
          info.storage.push('Google Drive');
          break;

          case 'http://www.airbnb.com:443/':
          display(url, visitedElem)
          visited[url] = 'Airbnb';
          info.travelServices.push('Airbnb');
          break;

          case 'http://www.hotels.com:443/':
          display(url, visitedElem)
          visited[url] = 'Hotels.com';
          info.travelServices.push('Hotels.com');
          break;

          case 'http://www.youtube.com:443/':
          display(url, visitedElem)
          visited[url] = 'YouTube';
          info.entertainment.push('YouTube');
          break;

          case 'http://www.vimeo.com:443/':
          display(url, visitedElem)
          visited[url] = 'Vimeo';
          info.entertainment.push('Vimeo');
          break;

          case 'http://www.gmail.com:443/':
          display(url, visitedElem)
          visited[url] = 'Gmail';
          info.mail.push('Gmail');
          break;

          case 'http://login.yahoo.com:443/':
          display(url, visitedElem)
          visited[url] = 'Yahoo! mail';
          info.mail.push('Yahoo! mail');
          break;

          case 'http://login.microsoftonline.com:443/':
          display(url, visitedElem)
          visited[url] = 'Office 365';
          info.mail.push('Office 365');
          break;

          case 'http://www.pornhub.com:443/':
          display(url, visitedElem)
          visited[url] = 'PornHub';
          info.porn.push('PornHub');
          break;

          case 'http://xhamster.com:443/':
          display(url, visitedElem)
          visited[url] = 'xHamster';
          info.porn.push('xHamster');
          break;

          case 'http://www.xvideos.com:443/':
          display(url, visitedElem)
          visited[url] = 'XVideos';
          info.porn.push('XVideos');
          break;

          case 'http://www.youporn.com:443/':
          display(url, visitedElem)
          visited[url] = 'YouPorn';
          info.porn.push('YouPorn');
          break;

          case 'http://www.youjizz.com:443/':
          display(url, visitedElem)
          visited[url] = 'YouJizz';
          info.porn.push('YouJizz');
          break;

          case 'http://www.porn.com:443/':
          display(url, visitedElem)
          visited[url] = 'Porn.com';
          info.porn.push('Porn.com');
          break;
        }
      }
    })
  }, 666)
  setTimeout(() => {
    console.log('timing out')
    clearInterval(intervalId)
  }, 300000)
}

window.onload = test;
