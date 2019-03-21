/*轮播图 */
var i = 0;
var c = null;
c = setTimeout(carousel, 1000); //开始执行
function carousel() {
    window.clearTimeout(c); //清除定时器

    $("#pic" + i).removeClass("active");
    $("#pic" + (i + 1)).addClass("active");
    i++;
    $("ol li").removeClass("active");
    $("ol li:eq(" + i + ")").addClass("active");

    if (i > 1) {
        $("#pic" + (i - 1)).removeClass("active");
        $("#pic0").addClass("active");
        i = 0;
        $("ol li:eq(" + i + ")").addClass("active");

    }
    c = setTimeout(carousel, 1500); //设定定时器，循环执行             
}