; (function () {
  // polyfill for ie11
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach
  }

  function ready(fn) {
    if (document.readyState != 'loading') {
      fn()
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn)
    } else {
      document.attachEvent('onreadystatechange', function () {
        if (document.readyState != 'loading') fn()
      })
    }
  }

  ready(function () {
    // camp complete, disable ribbon until next event 🙌
    if (Date.now() > 1561933800000) return

    var head = document.getElementsByTagName('head')[0]

    // add style
    var style = document.createElement('link')
    style.href =
      window.location.href.indexOf('//localhost') > -1
        ? '//localhost:3000/ribbon.css'
        : '//2019.ipfs.camp/ribbon.css'
    style.type = 'text/css'
    style.rel = 'stylesheet'
    head.appendChild(style)

    // create ribbon
    var ribbon = document.createElement('div')
    var ribbonChild = document.createElement('div')
    ribbon.className = 'ipfs-camp-ribbon'
    ribbon.style = 'display:none;'
    ribbonChild.className = 'ipfs-camp-ribbon-inner'
    ribbonChild.onclick = function () {
      window.open('https://2019.ipfs.camp')
    }
    ribbonChild.innerHTML =
      '<div>Join us at<br/><span style="font-size:18px; font-weight: bold">IPFS Camp</span><br/>27-30 June</div>'
    ribbon.appendChild(ribbonChild)

    // remove any existing ribbons
    if ('querySelectorAll' in document)
      document.querySelectorAll('.' + ribbon.className).forEach(function (n) {
        n.remove()
      })

    // inject ribbon
    document.body.appendChild(ribbon)
  })
})()
