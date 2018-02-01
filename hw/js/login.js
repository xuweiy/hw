// 账号密码失去焦点验证
$(()=>{
    var uname = $('.uname')
    var upwd = $('.upwd')
    var shows = $('.show')
    uname.blur(function(){
var reg = /^(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8})|([A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4})$/
        if(reg.test($(this).val())){
            shows.eq(0).css('display','none')
        }else{
            shows.eq(0).css('display','block')
        }
    })
    upwd.blur(function(){
        var reg = /^[a-zA-Z0-9_-]{4,16}$/
        if(reg.test($(this).val())){
            shows.eq(1).css('display','none')
        }else{
            shows.eq(1).css('display','block')
        }
    })
})

// 扫码登录动画效果
$(()=>{
    $('.tdc').mouseover(function(){
        $('.tdc').css('marginLeft','-100px')
        $('.mobile-phone').css('opacity','1')
    })
    $('.tdc').mouseleave(function(){
        $('.tdc').css('marginLeft','0px')
        $('.mobile-phone').css('opacity','0')
    })
})


// 登录扫码点击切换
$(()=>{
    $('.login').click(()=>{
        $('.scan').css('display','none').nextAll().css('display','block')
        $('.entry').css('color','#333')
        $('.login').css('color','red')
    })
    $('.entry').click(()=>{
        $('.login').css('color','#333')
        $('.entry').css('color','red')
        $('.scan').css('display','block').nextAll().css('display','none')
    })
})

//用户登录
$(() => {
    $('.submit').click(()=>{
        var u = $('.uname').val()
        var p = $('.upwd').val()
        $.ajax({
            type:'GET',
            url:'http://127.0.0.1:6060/login',
            data:{uname:u,upwd:p},
            xhrFilds:{withCredentials:true},
        }).then((data)=>{
            if(data.code>0){
                location.href = 'index.html'
            }else{
                alert(data.msg)
            }
        })
    })
})