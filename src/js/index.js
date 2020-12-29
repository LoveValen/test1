$(function () {
  $('.search_txt').focusin(function () {
    $('.search_txt').prop('placeholder', '');
  }).focusout(function () {
    $('.search_txt').prop('placeholder', '黑洞照片');
  });
  // 搜索
  $('.search_btn').click(function () {
    search();
  });
  // 文章类别
  category();
  // 热点图
  heatMap();
  // 一周热门排行
  hotList();
  // 最新资讯
  latestNews();
  // 最新评论
  comments();
  // 焦点关注
  focusList();
});

// 搜索
function search() {
  let $search = $('.search_txt');
  let keyWords = $search.val();

}

// 文章分类
function category() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/api/v1/index/category',
    data: null,
    success: function (resData) {
      let navgationHtml = template('navigation_tpl', resData);
      $('.left_menu').append(navgationHtml);
    }
  });
}

// 热点图
function heatMap() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/api/v1/index/hotpic',
    data: null,
    success: function (resData) {
      let heatMapHtml = template('heatMap_tpl', resData);
      $('.focus_list').html(heatMapHtml);
      $('.focus_list>li').first().addClass('first');
    }
  });
}

// 一周热门排行
function hotList() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/api/v1/index/rank',
    data: null,
    success: function (resData) {
      let hotListHtml = template('hotList_tpl', resData);
      $('.hotrank_list').html(hotListHtml);
      $('.hotrank_list>li').eq(0).find('span').addClass('first');
      $('.hotrank_list>li').eq(1).find('span').addClass('second');
      $('.hotrank_list>li').eq(2).find('span').addClass('third');
    }
  });
}

// 最新资讯
function latestNews() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/api/v1/index/latest',
    data: null,
    success: function (resData) {
      let newsHtml = template('News_tpl', resData);
      $('.common_news').html(newsHtml);
    }
  });
}

// 最新评论
function comments() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/api/v1/index/latest_comment',
    data: null,
    success: function (resData) {
      let comHtml = template('comments_tpl', resData);
      $('.comment_list').html(comHtml);
      // let date = new Date();
      // resData.data.forEach((item, index) => {
      //     let dateArr = item.date.split('-');
      //     let time = `${dateArr[1]}-${dateArr[2]}`;
      //     let month = `${(date.getFullYear() - dateArr[0]) * dateArr[1]}个月前`;
      //     if ((date.getFullYear() - dateArr[0]) * dateArr[1] == 0) {
      //         month = `这个月`;
      //     }
      //     $('.comment_list>li>b>em:odd').eq(index).text(month + '(' + time + ')说:');
      // });
    }
  });
}

// 焦点关注
function focusList() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/api/v1/index/attention',
    data: null,
    success: function (resData) {
      let focusHtml = template('focus_tpl', resData);
      $('.guanzhu_list').html(focusHtml);
    }
  });
}
