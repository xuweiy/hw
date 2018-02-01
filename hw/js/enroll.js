// 失去焦点判断是否手机号已存在或手机号格式不正确
$(() => {
    var phone = $('.e-phone')
    var proving = $('.proving')
    phone.blur((e)=>{
     var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
        var val = $(e.target).val()
        console.log(val)
        $.ajax({
            type:'GET',
            url:'http://127.0.0.1:6060/valiphone',
            data:{phone:val},
            xhrFilds:{withCredentials:true},
        }).then((result)=>{
            console.log(result)
          if(result.length>0){
              proving.eq(1).css('display','block')
          }else{
              proving.eq(1).css('display','none')
            }
        })
        if(regPhone.test(phone.val())){
            proving.eq(0).css('display','none')
        }else{
            proving.eq(0).css('display','block')
        }
    })
})
// 失去焦点判断邮件地址、密码确认密码的格式验证
$(()=>{
    var email = $('.e-email')
    var upwd = $('.e-password')
    var qUpwd = $('.confirmation-code')
    var proving = $('.proving')
    email.blur(()=>{
        var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-/.])+[A-Za-z\d]{2,4}$/
        if(regEmail.test(email.val())){
            proving.eq(2).css('display','none')
        }else{
            proving.eq(2).css('display','block')
        }
    })
   upwd.blur(()=>{
        var regUpwd = /^[a-zA-Z0-9_-]{4,16}$/
        if(regUpwd.test(upwd.val())){
            proving.eq(3).css('display','none')
        }else{
            proving.eq(3).css('display','block')
        }
    })
    qUpwd.blur(()=>{
        if(upwd.val()===qUpwd.val()){
            proving.eq(4).css('display','none')
        }else{
            proving.eq(4).css('display','block')
        }
    })
})

// 注册用户
$(()=>{
    $('.e-submit').click(() => {
        var phone = $('.e-phone').val()
        var email = $('.e-email').val()
        var upwd = $('.e-password').val()
        $.ajax({
        type:'POST',
        url:'http://127.0.0.1:6060/enroll',
        data:{phone,email,upwd},
        xhrFilds:{withCredentials:true},
        }).then((data)=>{
            alert(data.msg)
            location.href = 'login.html'
        })
    })
})
