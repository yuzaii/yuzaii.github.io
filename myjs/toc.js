// alert(123)
// console.log(123)
// console.log($(".toc-link.active"))
//
//
$('.toc-link').click(function () {
    // console.log($(this).attr('class'))

    // console.log(this)
    // console.log($(this).parent()[0])//获取父节点
    var parent = $($(this).parent()[0])
    //判断此处是否展开
    //var classlist=$(this).attr('class')
    var classlist=parent.attr('class')
    // console.log(classlist.indexOf('active'))
    if(classlist.indexOf('active')>0){
        //如果已经展开点击就关闭
        // console.log("已展开")
        parent.removeClass('active')
    }else{
        // console.log("没有展开")
        parent.addClass('active')
    }
    // console.log(classlist)
    // // alert("目录点击了")
    // console.log("目录点击了")
})
