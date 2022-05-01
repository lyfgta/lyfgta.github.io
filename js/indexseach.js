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
    input 
