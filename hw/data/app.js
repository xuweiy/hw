//1:加载对应模块
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");        //处理post请求
const cookieParser = require("cookie-parser");    //cook
const expressSession = require("express-session");//session
const cors = require("cors");                      //cors
const pool = require("./pool");
//2:引用连接池
//3:创建express 对象
var app = express();
var server = http.createServer(app);
server.listen(6060);
//4:配置第三方模块
//4.1:配置跨域模块
//origin 允许来自哪个域名下跨域访问
app.use(cors({
    origin:["http://127.0.0.1"],
    credentials:true
}));
//4.2:post  req.body.uname
app.use(bodyParser.urlencoded({extended:false}));
//4.3:cookie/session
app.use(cookieParser());
app.use(expressSession({
    resave:false,           //每次请求是否重新设置session
    saveUninitialized:true,//每次请求是否设置cookie
    secret:"teducn",       //https加密码传输，密钥
}));

// 获取手机列表
app.get('/phone',(req,res)=>{
    //获取连接
    pool.getConnection((err,conn)=>{
        if(err) throw err
        var sql =  "SELECT * FROM hw_phone"
        conn.query(sql,(err,result)=>{
            if(err)throw err
            res.json(result)
        })
        conn.release()
    })
})


 // 获取笔记本电脑列表
app.get('/computer',(req,res)=>{
    //获取连接
    pool.getConnection((err,conn)=>{
        if(err) throw err
        var sql =  "SELECT * FROM hw_computer"
        conn.query(sql,(err,result)=>{
            if(err)throw err
            res.json(result)
        })
        conn.release()
    })
})

// 获取平板电脑列表
app.get('/flat',(req,res)=>{
    //获取连接
    pool.getConnection((err,conn)=>{
        if(err) throw err
        var sql =  "SELECT * FROM hw_flat"
        conn.query(sql,(err,result)=>{
            if(err)throw err
            res.json(result)
        })
        conn.release()
    })
})

// 获取穿戴列表
app.get('/apparel',(req,res)=>{
    //获取连接
    pool.getConnection((err,conn)=>{
        if(err) throw err
        var sql =  "SELECT * FROM hw_apparel"
        conn.query(sql,(err,result)=>{
            if(err)throw err
            res.json(result)
        })
        conn.release()
    })
})


//用户登录
app.get('/login',(req,res) =>{
    var p = req.query.upwd
    var u = req.query.uname
    var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
    var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    if(regPhone.test(u)){
        var sql = "SELECT uid FROM hw_user WHERE phone = ? AND upwd = ?"
    }else if(regEmail.test(u)){
        var sql = "SELECT uid FROM hw_user WHERE email = ? AND upwd = ?"
    }else{
        res.json({code:-1,msg:"手机或邮箱格式不正确"});
        return;
    }
    var regUpwd = /^[a-zA-Z0-9_-]{4,16}$/
    if(!regUpwd.test(p)){
        res.json({code:-1,msg:"密码格式不正确"});
        return;
    }
    pool.query(sql,[u,p],(err,result)=>{
        if(err)throw err
        if(result.length>0){
            req.session.uid = result[0].uid
            res.json({code:1,msg:'登录成功'})
            req.session.uname = result[0].uname
        }else{
            res.json({code:-1,msg:'用户名或密码错误'})
        }
    })
})



//用户注册
app.post('/enroll',(req,res) => {
    var upwd = req.body.upwd
    var phone = req.body.phone
    var email = req.body.email
    var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
    var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    var regUpwd = /^[a-zA-Z0-9_-]{4,16}$/
    if(!regPhone.test(phone)){
        res.json({code:-2,msg:"手机号格式不正确"});
        return;
    }
    if(!regEmail.test(email)){
        res.json({code:-3,msg:"邮箱格式不正确"});
        return;
    }
    if(!regUpwd.test(upwd)){
        res.json({code:-4,msg:"密码格式不正确"});
        return;
    }
    pool.getConnection((err,conn)=>{
        if(err)throw err
        var sql = "INSERT INTO hw_user(upwd,phone,email) VALUES(?,?,?)"
        conn.query(sql,[upwd,phone,email],(err,result)=>{
            if(err)throw err
            if(result.affectedRows>0){
                res.json({code:1,msg:"注册成功!"})
            }else{
                res.json({code:-1,msg:"注册失败!"})
            }
        })
        conn.release()
    })
})

// 手机号是否被用验证
app.get('/valiphone',(req,res)=>{
    var phone = req.query.phone
    var regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
    if(!regPhone.test(phone)){
        res.json({code:-2,msg:"手机号格式不正确"});
        return;
    }
    pool.getConnection((err,conn)=>{
        if(err)throw err
        var sql = "SELECT phone FROM hw_user WHERE phone=?"
        conn.query(sql,[phone],(err,result)=>{
            if(err)throw err
            res.json(result)
            conn.release()
        })
    })
})
