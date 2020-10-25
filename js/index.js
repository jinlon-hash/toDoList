$(function () {
  // 思路  得有数组数据
  var list = [
    { value: '吃饭', done: true },
    { value: '吃饭', done: false },
    { value: '吃饭', done: true },
    { value: '吃饭', done: false },
  ];
  for (var i = 0; i < list.length; i++) {
    if (list[i].done) {
      $(`<li></li>`).appendTo($('#todolist'));
    } else {
      $(`<li></li>`).appendTo($('#todolist'));
    }
  }
  $('#title').on('keyup', function (e) {
    if (e.keyCode === 13) {
      console.log('触发输入框');
    }
  });
});
