function myAjax(type, url, data, callback) {
  if (data instanceof FormData) {
    $.ajax({
      url: 'http://localhost:8080/api/v1' + url,
      type: type,
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      data: data,
      contentType: false,
      processData: false,
      success: function (resData) {
        if (resData.code == 403) {
          // window.parent.location = '../admin/login.html';
          window.parent.location = './login.html';
          return;
        }
        callback(resData);
      }
    })
  } else {
    $.ajax({
      url: 'http://localhost:8080/api/v1' + url,
      type: type,
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      data: data,
      success: function (resData) {
        if (resData.code == 403) {
          // window.parent.location = '../admin/login.html';
          window.parent.location = './login.html';
          return;
        }
        callback(resData);
      }
    })
  }
}