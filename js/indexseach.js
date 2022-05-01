
//显示隐藏div

        function $(id) {
            return document.getElementById(id)
        }
        var oMenu = $("myInput"),
            oModel = $("hidden");
        document.onclick = function () {
            oModel.style.display = "none";
        }
        
        // 方法一：使用dom0方式

        // oMenu.onclick = function(e){

        //     stopFunc(e);

        //     oModel.style.display = "block";

        // }

        // oModel.onclick = function(e){

        //     stopFunc(e);

        // }


        //方法二：使用dom2方式

        oMenu.addEventListener('click', function (e) {
            stopFunc(e);
            oModel.style.display = "block";
        }, false)
        oModel.addEventListener('click', function (e) {
            stopFunc(e);
        }, false)
        
        //阻止事件向上传递

        function stopFunc(e) { 
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
        }

//本地搜索

function myFunction() {
    // 声明变量

    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // 循环所有列表，查找匹配项

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//自动提交给百度

        (function(){
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            if (curProtocol === 'https') {
                bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
            }
            else {
                bp.src = 'http://push.zhanzhang.baidu.com/push.js';
            }
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
        })();
