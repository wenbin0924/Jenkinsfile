$(function() {
    var host = ''; //http://kkdh.test888.vip/
    var api = {

        init: host + '/service?action=init&type=208'
    };
    init(api.init);

});


function init(url) {
    $.ajax({
        url: url,
        dataType: 'json',
        cache: false,
        type: 'get',
        data: {},
        beforeSend: function() {

        },
        success: function(res) {
            if (res.errno == 0) {
                var arr = len = res.data[0];
                for (var i = 0; i < len.length; i++) {
                    var val = arr[i]["value"],
                        item = arr[i]["item"];
                    if (item.indexOf('link') > -1) {
                        $("." + item).attr("href", val);
                        // ios android移动网页立即玩
                        if (item === 'nav_wappage_link') {
                            $("." + item).html(val);
                        }
                    } else if (item === 'nav_vip_list') {
                        var tempArr = val.split(',');
                        var html = '';
                        for (var j = 0; j < 12; j++) {
                            var c = Math.floor(Math.random() * tempArr.length);
                            var val = tempArr[c] ? tempArr[c] : tempArr[0];
                            var domaintext = val.replace('http://', '').replace('https://', '')
                            $('.loadUl a').eq(j).attr('href', 'http://' + domaintext);
                        }
                    } else {
                        $("." + item).html(val);
                    }
                }

            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {

        }
    });
}