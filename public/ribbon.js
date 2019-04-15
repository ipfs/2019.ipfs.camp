;(function() {
  function ready(fn) {
    if (document.readyState != 'loading') {
      fn()
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn)
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading') fn()
      })
    }
  }

  ready(function() {
    var head = document.getElementsByTagName('head')[0]

    // add style
    var style = document.createElement('link')
    style.href =
      window.location.href.indexOf('//localhost') > -1
        ? '//localhost:3000/ribbon.css'
        : '//camp.ipfs.io/ribbon.css'
    style.type = 'text/css'
    style.rel = 'stylesheet'
    head.append(style)

    // create ribbon
    var ribbon = document.createElement('div')
    var ribbonChild = document.createElement('div')
    ribbon.className = 'ipfs-camp-ribbon'
    ribbonChild.className = 'ipfs-camp-ribbon-inner'
    ribbonChild.onclick = function() {
      window.open('https://camp.ipfs.io')
    }
    ribbonChild.innerHTML =
      '<div>Join us at<br/><span style="font-size:18px; font-weight: bold">IPFS Camp</span><br/>27-30 June</div>'
    ribbon.appendChild(ribbonChild)
    document.body.append(ribbon)
  })
})()
