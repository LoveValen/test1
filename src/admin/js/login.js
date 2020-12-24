$(function () {
  $('#login_form').submit(function (e) {
    e.preventDefault();
    let formData = $('#login_form').serialize();
    let index = null;
    $.ajax({
      url: 'http://localhost:8080/api/v1/admin/user/login',
      type: 'post',
      data: formData,
      beforeSend: function () {
        index = layer.load();
      },
      complete: function () {
        layer.close(index);
      },
      success: function (resData) {
        if (resData.code != 200) {
          alert(resData.msg);
          return;
        }
        localStorage.setItem('token', resData.token);
        // sessionStorage.setItem('token', resData.token);
        // location.assign('../admin/index.html');
        window.location = './index.html';
      }
    });
  });
})