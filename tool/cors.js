// index.html
// jsonp 跨域
function jsonp({
  url,
  params,
  callback
}) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    window[callback] = function (data) {
      resolve(data);
      document.body.removeChild(script);
    };
    params = {
      ...params,
      callback,
    }; // wd=b&callback=show
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join ('&')}`;
    document.body.appendChild(script);
  });
}
jsonp({
  url: 'http://localhost:8080/say',
  params: {
    wd: 'Iloveyou',
  },
  callback: 'show',
}).then(data => {
  console.log(data);
});

// jQuery的jsonp形式
$.ajax({
  url: 'http://crossdomain.com/jsonServerResponse',
  dataType: 'jsonp',
  type: 'get', //可以省略
  jsonpCallback: 'show', //->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
  jsonp: 'callback', //->把传递函数名的那个形参callback，可省略
  success: function (data) {
    console.log(data);
  },
});

// iframe
// a.html
// <iframe src="http://localhost:4000/b.html" frameborder="0" id="frame" onload="load()"></iframe> //等它加载完触发一个事件
//内嵌在http://localhost:3000/a.html
function load() {
  let frame = document.getElementById('frame');
  frame.contentWindow.postMessage('我爱你', 'http://localhost:4000'); //发送数据
  window.onmessage = function (e) {
    //接受返回数据
    console.log(e.data); //我不爱你
  };
}
// b.html
window.onmessage = function (e) {
  console.log(e.data); //我爱你
  e.source.postMessage('我不爱你', e.origin);
};