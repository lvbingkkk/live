  var video = document.getElementById('video');

  var ch = document.getElementById('ch').value
  console.log(ch)

  // var lurl = location.href
  // console.log(lurl)

  // var nurl = lurl +"?vurl="+ch.value
  // console.log(nurl)

  // var vurl = nurl.split('vurl=')[1];
  // console.log(vurl)

  // var vurl = location.search.split('vurl=')[1];
  // var videoSrc = vurl;

  var videoSrc = ch
  // 检查浏览器是否支持hls
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  // 如不支持则调用hls.min.js
  } else if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }

  $('#ch').change(function (e){
    // console.log(e)
    ch = document.getElementById('ch').value
    console.log(ch)

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = ch;
    // 如不支持则调用hls.min.js
    } else if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(ch);
      hls.attachMedia(video);
    }
  })
