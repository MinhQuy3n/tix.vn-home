$(document).on('click','ul li',function(){
    $(this).addClass('active').siblings().removeClass('active');
})

$(document).on('click','div',function(){
    $(this).addClass('active').siblings().removeClass('active');
})