$(function() {
    //获取公共配置信息
    $.ajax({
        type: 'get',
        url: '/service?action=init&type=340',
        success: function(response) {
            if (response.errno == 0) {
                var data = response.data[0];
                for (var i = 0; i < data.length; i++) {
                    var val = data[i]["value"],
                        item = data[i]["item"];
                    if (item.indexOf('link') > -1) {
                        $("." + item).attr("href", val);
                    } else {
                        $("#" + item).html(val);
                    }
                }
            }
        }
    })

})