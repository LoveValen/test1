let baseUrl = 'http://localhost:8080/api/v1';
function ajax(options) {

  options.url = baseUrl + options.url;

  if (!options.type) {
    options.type = 'GET';
  }

  if (!options.url) {
    alert('传入的url必须有值');
    return;
  }

  // 创建XMLHttpRequest对象
  let xhr = new XMLHttpRequest();

  if (options.data && options.type.toUpperCase() == 'GET') {
    let jsString = objectToParamsString(options.data);
    // options.url += '?' + jsString;
    xhr.open(options.type, options.url + '?' + jsString);
  } else {
    xhr.open(options.type, options.url);
  }

  if (options.type.toUpperCase() == 'POST') {
    xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  } else {
    xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
  }

  if (options.type.toUpperCase() == 'POST') {
    if (options.data) {
      let jsString = objectToParamsString(options.data);
      xhr.send(jsString);
    }
  } else {
    xhr.send();
  }

  xhr.onload = function () {
    let resString = xhr.responseText;
    let resObj = JSON.parse(resString);
    // if (resObj.code == 403) {
    //   window.parent.location = './login.html';
    //   return;
    // }
    options.success(resObj);
  };

}

function objectToParamsString(paramsObj) {
  let arr = [];
  for (let key in paramsObj) {
    arr.push(`${key}=${paramsObj[key]}`);
  }
  return arr.join('&');
}

