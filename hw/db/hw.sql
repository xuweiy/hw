#设置MySQL客户端连接服务器所用字符集为UTF8
SET NAMES UTF8;
#丢弃数据库(如果存在的话)hw
DROP DATABASE IF EXISTS hw;
#创建数据库hw，使用字符集为UTF8
CREATE DATABASE hw CHARSET=UTF8;
#进入数据库hw
USE hw;

/*创建“手机模块”相关的表*/
#创建手机表
CREATE TABLE hw_phone(
	pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,	#手机ID
	p_name VARCHAR(32),				#手机名
	preferential VARCHAR(32),			#优惠
	price VARCHAR(16),				#价格
	p_img VARCHAR(64)				#图片
);
INSERT INTO  hw_phone VALUES(
    "","","","","img/page/1514732386423.jpg"
);
INSERT INTO  hw_phone VALUES(
    "","荣耀畅玩6","限时优惠50元","¥599","img/page/428_428_1504174310613mp.jpg"
);
INSERT INTO  hw_phone VALUES(
    "","HUAWEI nova 青春版","直降200","¥1799","img/page/428_428_1493110604858mp.jpg"
);
INSERT INTO  hw_phone VALUES(
    "","HUAWEI 麦芒6","限时直降200","¥2199","img/page/428_428_1505273765269mp.jpg"
);
/*创建“笔记本电脑模块”相关的表*/
#创建笔记本电脑表
CREATE TABLE hw_computer(
	cid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,	#电脑ID
	c_name VARCHAR(32),				#电脑名
	preferential VARCHAR(32),			#优惠
	price VARCHAR(16),				#价格
	c_img VARCHAR(64)				#图片
);
INSERT INTO  hw_computer VALUES(
    "","","","","img/page/1515425591000.jpg"
);
INSERT INTO  hw_computer VALUES(
    "","HUAWEI MateBook X",
    "尊享6期分期免息 ",
    "¥5988",
    "img/page/428_428_1495008740731mp.jpg"
);
INSERT INTO  hw_computer VALUES(
    "","HUAWEI MateBook E",
    "尊享6期免息 ",
    "¥5888",
    "img/page/428_428_1495007640609mp.jpg"
);
INSERT INTO  hw_computer VALUES(
    "","HUAWEI MateBook",
    "最高直降500元 ",
    "¥7488",
    "img/page/428_428_1506670584035mp.jpg"
);
/*创建“平板电脑模块”相关的表*/
#创建平板电脑表
CREATE TABLE hw_flat(
	fid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,	#平板ID
	f_name VARCHAR(32),				#平板名
	preferential VARCHAR(32),			#优惠
	price VARCHAR(16),				#价格
	f_img VARCHAR(64)				#图片
);
INSERT INTO  hw_flat VALUES(
    "","","","","img/page/1514994369062.jpg"
);
INSERT INTO  hw_flat VALUES(
    "","华为平板 M3 青春版 10.1英寸",
    "EMUI5.1流畅体验  ",
    "¥1799",
    "img/page/428_428_1495096799385mp.jpg"
);
INSERT INTO  hw_flat VALUES(
    "","荣耀畅玩平板2 9.6英寸",
    "护眼滤蓝光高清大屏   ",
    "¥1299",
    "img/page/428_428_1500455962969mp.jpg"
);
INSERT INTO  hw_flat VALUES(
    "","华为平板 M3",
    "2K高清屏 HI-FI音效  ",
    "¥1888",
    "img/page/1496236247761.png"
);
/*创建“穿戴模块”相关的表*/
#创建穿戴表
CREATE TABLE hw_apparel(
	aid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,	#穿戴ID
	a_name VARCHAR(32),				#穿戴名
	preferential VARCHAR(32),			#优惠
	price VARCHAR(16),				#价格
	a_img VARCHAR(64)				#图片
);
INSERT INTO  hw_apparel VALUES(
    "","","","","img/page/1510043740940.jpg"
);
INSERT INTO  hw_apparel VALUES(
    "","华为手环 B3",
    "蓝牙耳机与智能手环结合  ",
    "¥899",
    "img/page/428_428_1469093643984mp.jpg"
);
INSERT INTO  hw_apparel VALUES(
    "","华为运动手环",
    "50米防水游泳    ",
    "¥278",
    "img/page/428_428_1498098860450mp.jpg"
);
INSERT INTO  hw_apparel VALUES(
    "","荣耀畅玩手环 A2",
    "13-15日优惠20元   ",
    "¥179",
    "img/page/428_428_1504584577479mp.jpg"
);


/*创建“用户登录注册”相关的表*/
CREATE TABLE hw_user(
	uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,	#用户ID
	uname VARCHAR(32),				#用户名
	upwd VARCHAR(32),				#用户密码
	email VARCHAR(32),				#电子邮件
	phone VARCHAR(32)				#手机
);

INSERT INTO  hw_user VALUES(
    "","TOM",
    "123456",
    "tom@qq.com",
    "18888888888"
);

INSERT INTO  hw_user VALUES(
    "","Jack",
    "123456",
    "jack@qq.com",
    "16666666666"
);

INSERT INTO  hw_user VALUES(
    "","dingding",
    "123456",
    "ding@qq.com",
    "19999999999"
);

INSERT INTO  hw_user VALUES(
    "","doudou",
    "123456",
    "dou@qq.com",
    "17777777777"
);