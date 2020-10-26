$(function () {
  var list = [
    {
      content: '吃饭1',
      done: false,
    },
    {
      content: '吃饭2',
      done: true,
    },
    {
      content: '吃饭3',
      done: false,
    },
    {
      content: '吃饭4',
      done: true,
    },
  ];
  load();
  function load() {
    $.each(list, function (i, item) {
      if (!item.done) {
        $(` <li>
    <input type="checkbox" >
    <p>${item.content}</p>
    <a href="javascript:;"></a>
  </li>`).appendTo($('#todolist'));
      } else {
        $(` <li>
      <input type="checkbox" checked>
      <p>${item.content}</p>
      <a href="javascript:;"></a>
    </li>`).appendTo($('#donelist'));
      }
      $('#todocount').text($('#todolist li').length);
      $('#donecount').text($('#donelist li').length);
    });
  }
});
