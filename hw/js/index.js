// 轮播图
$(()=>{
    $(document).ready(function(){
    var ul = $('.banner .banner-img'),
     width = $(window).width(),
     indicators = $('.indicators'),
     timer = null,
     moved = 0,
    duration=500,
        wait=3000
    function move(){
        ul.stop(true).animate({
            left:-moved*width
        },duration,function(){
            if(moved==7){
                moved=0
                ul.css('left',0)
            }
            indicators.children(`:eq(${moved})`).addClass('active').siblings().removeClass('active')
        })
        timer=setTimeout(()=>{
            moved++
            move()
        },wait+duration)
    }

     timer=setTimeout(()=>{
         moved++
         move()
     },wait+duration)

    indicators.on('mouseover','li',e=>{
        var $li=$(e.target)
        //防动画、定时器叠加
        clearTimeout(timer)
        moved=$li.index()
        move()
    })
    $('.banner-img').hover(
        ()=>clearTimeout(timer)
        ,

        ()=>timer=setTimeout(()=>{
                moved++
                move()
            },wait+duration)

        )
    })

})
//轮播新闻
$(()=>{
    var duration=500,
        wait=1000,
        timer=null
    function AutoScroll(obj) {
        $(obj).find("ul:first").animate({
            marginTop: "-48px"
        }, duration, function() {
            $(this).css({
                marginTop: "0px"
            }).find("li:first").appendTo(this);
        });
    }
        timer=setInterval(()=>{
            AutoScroll(".notice-content")
        }, duration+wait)
    $(window).blur = function(){
        clearInterval(timer)
    }
    $('.notice-content li').hover(
        ()=>{clearInterval(timer)},
        ()=>timer=setInterval(()=>{
            AutoScroll(".notice-content")
        },wait+duration)
    )
})

// 接收手机数据
$(()=>{
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:6060/phone",
        xhrFilds:{withCredentials:true},
    }).then((data)=>{
        var html = ''
            html += `
                <li>
                    <a href="#">
                        <img src="${data[0].p_img}" alt="">
                    </a>
                </li>`
                for(var i=1;i<data.length;i++) {
                    html += `<li class="grid-items">
                    <a href="#">
                    <img src="${data[i].p_img}" alt="">
                    <p class="grid-title">${data[i].p_name}</p>
                    <p class="grid-desc">${data[i].preferential}</p>
                    <p class="grid-price">${data[i].price}</p>
                    </a>
                </li>`
                }
        $('.phone>.goods-list>ul').html(html)
    })
})

// 接收电脑数据
$(()=>{
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:6060/computer",
        xhrFilds:{withCredentials:true},
    }).then((data)=>{
        var html = ''
        html += `
                <li>
                    <a href="#">
                        <img src="${data[0].c_img}" alt="">
                    </a>
                </li>`
        for(var i=1;i<data.length;i++) {
            html += `<li class="grid-items">
                    <a href="#">
                    <img src="${data[i].c_img}" alt="">
                    <p class="grid-title">${data[i].c_name}</p>
                    <p class="grid-desc">${data[i].preferential}</p>
                    <p class="grid-price">${data[i].price}</p>
                    </a>
                </li>`
        }
        $('.computer>.goods-list>ul').html(html)
    })
})


// 接收平板数据
$(()=>{
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:6060/flat",
        xhrFilds:{withCredentials:true},
    }).then((data)=>{
        var html = ''
        html += `
                <li>
                    <a href="#">
                        <img src="${data[0].f_img}" alt="">
                    </a>
                </li>`
        for(var i=1;i<data.length;i++) {
            html += `<li class="grid-items">
                    <a href="#">
                    <img src="${data[i].f_img}" alt="">
                    <p class="grid-title">${data[i].f_name}</p>
                    <p class="grid-desc">${data[i].preferential}</p>
                    <p class="grid-price">${data[i].price}</p>
                    </a>
                </li>`
        }
        $('.table-computer>.goods-list>ul').html(html)
    })
})


// 接收穿戴数据
$(()=>{
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:6060/apparel",
        xhrFilds:{withCredentials:true},
    }).then((data)=>{
        var html = ''
        html += `
                <li>
                    <a href="#">
                        <img src="${data[0].a_img}" alt="">
                    </a>
                </li>`
        for(var i=1;i<data.length;i++) {
            html += `<li class="grid-items">
                    <a href="#">
                    <img src="${data[i].a_img}" alt="">
                    <p class="grid-title">${data[i].a_name}</p>
                    <p class="grid-desc">${data[i].preferential}</p>
                    <p class="grid-price">${data[i].price}</p>
                    </a>
                </li>`
        }
        $('.Intelligent-wear>.goods-list>ul').html(html)
    })
})

//引入头部.尾部
$(document).ready(function(){
    $('#header').load('header.html')
    $('#footer').load('footer.html')
})