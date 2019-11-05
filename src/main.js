$(".vote").click(function() {
  var voteId = parseInt(this.getAttribute('voteid'))
  $.ajax({
    type: "get",
    voteId: voteId,
    url: "http://littlepoll1.people.com.cn/button/index.php/cip/button/617/" + voteId,//每一个投票对应一个type的值
    dataType: "json",
    data: "jsonCallback=?",
    cache: false,
    success: function (data) {
      console.log(data)
      if (data.b == 1) {
        // alert("投票成功，感谢您的支持！");
        var num = parseInt($("#vote" + voteId).text().replace('已投 ', '')) + 1
        $("#vote" + voteId).text("已投 " + num);
      }
      else if (data.b == 2) { alert("一个IP一天只能投5票！"); }
      else if (data.b == 3) { alert("您已经投过此选项！"); }
      else if (data.b == 8) { alert("投票未开始！"); }
      else if (data.b == 9) { alert("投票已结束！"); }
      else if (data.b == 0) { alert("没有此投票！"); }
    }
  })
})

