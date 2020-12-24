function myAjax(type, url, data, callback) {
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