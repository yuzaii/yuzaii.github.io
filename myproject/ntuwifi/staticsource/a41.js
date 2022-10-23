/********************  公用配置参数  ********************/
var jsVersion='3.3.2';

var companyInfo="本宽带计费系统由城市热点提供";// 公司信息(底部文字)

var companyLink="http://www.doctorcom.com";// 公司链接

var redirectLink="http://www.ntu.edu.cn";// 登录重定向

var rebackLink="http://210.29.79.141?isReback=1";//返回重定向

var accountSuffix="";// 账号后缀

var accountPrefix=1;// 是否添加账号前缀(0-不添加；1-添加)默认添加账号前缀1

var enPerceive=0;// 是否支持快速登录(0-不支持；1-支持)

var eportalv6=0;// //0不显示加载v6参数，1显示加载v6参数

var autoPerceive=0;// 快速登录是否允许自提交(0-显示快速登陆；1-直接无感知)

var customPerceive=0;// 是否记录mac (0-记录；1-不记录)

var enHttps=0;// 是否需要Https(0-不需要；1-需要)

var enMd5=0;// 是否需要MD5(0-不需要；1-需要)

var enAdvert=0;// 是否显示广告(0-不显示；1-显示)

var advert_host="";// 广告统计服务器地址，例如：http://192.168.0.1:9080

var enSlideshow=0;// 是否显示幻灯片(0-不显示；1-显示)

var machineno="";// 设备编号

var onlineMonitor=0;//是否在线监听(0-9002端口监听；1-在线接口监听)

var acLogout=0;//多AC认证环境下通过后台接口注销功能(0-停用，1-radius注销，2-后台注销）

var unBindmac=0;//注销时使用解绑mac地址(1-启动)

var findMac=0;//1-启用BS全业务接口查询(0-默认内核查询)

var autoThrough=0;//自动审核

var radiusIP="210.29.79.141";//RADIUS服务器IP

var registerMode=1;//开户方式(0-私有云开户，1-BS开户，2-酒店版，3-2188访客系统)

var changePassMode=1;//修改密码方式(0-eportal页面，1-自服务(私有云不支持))

var cvlanid="4095";//绑定CVLANID(用户首次登陆时强制修改密码)

var enableR3=0; // 是否启用 r3 参数区分多运营商

var webPayUrl="http://210.29.64.71:80/WebPay/toRecharge"; // 充值链接

var isLang=0; //是否启动中英文 1-启用 0-关闭

var ISRedirect=1; //是否登录重定向 1-启用 0-关闭

var enbaleEduroamVerify=0; // 旁路启用 eduroam 审核模式

var duodianAppHidden=0; //是否隐藏哆点信息 1-隐藏 0-不隐藏

var storeExpireTime=86400; //缓存过期时间,单位-秒

var ipv6Delay=2000; //获取ipv6失败时，延迟时间，单位-毫秒

var enablev6=eportalv6; // 通过判断方案或页面的配置，最终决定是否启用 ipv6通过ipv4联动登录

var page = {
	kind:'pc',
	name:'NTDX',
	type:'ip',
	index:0,
	host:		window.location.protocol + '//' + window.location.host + '/',
	hostname:	window.location.protocol + '//' + window.location.hostname,
	path:		window.location.protocol + '//' + window.location.host + '/drcom/',
	eportal:	window.location.protocol + '//' + window.location.hostname + ':801/eportal/',
	programUrl:	'',
	redirectLink: '',
	loginMethod:0,
	vtype:'',
	timer:null,
	run: function(_kind) {
		var me = this;
		// 如果非访客扫码页面，检查是否需要跳转到访客扫码页面
		if(!_kind){
			me.checkIsGroupScanQRCode();
		}
		// 设置终端相关的参数
		term.init(_kind,function(){
			// 设置页面相关的参数
			me.setArgs(function(){
				if(_kind){
					switch (_kind){
						case 1:
						case 2:
						case 3:
							me.kind = (term.type == 2 ? 'mobile_3': 'pc_')+_kind;
							me.load_loginbox(function() {
								me.render(me.load_js_css);
							});
							break;
						case '09':
						case 23:
						case 25://钉钉认证回调页
						case 26://program 26为IOS11.3微信认证专用
						case 27:
						case 38:
							me.kind = (term.type == 2?'mobile_':'pc_')+_kind;
							me.load_loginbox(function() {
								me.render(me.load_js_css);
							});
							break;
						case 'eduroam':
							me.checkUserStatusAndLoginByIP(true);
							break;
					}

				} else {
					// 检查用户状态
					me.checkStatus();
				}
			});
		});
	},
	keepCheckState: function(){
		var me = this;
		me.timer && window.clearInterval(me.timer);
		me.timer = window.setInterval(function() {
			page.checkUserStatusAndLoginByIP();
		},8000); //每8秒自动刷新一次
	},
	// 监听情况，审核or未审核，审核通过eportal后台上线。
	checkUserStatusAndLoginByIP: function(firstRender) {   // firstRender 是否首次渲染页面
		var me = this;
		me.kind = term.type == 2 ? 'mobile_31': 'pc_1';
		var callback = me.load_js_css;
		var url = me.eportal + '?c=Portal&a=v_checkUserStateByIP';
		// 获取不到ip
		if(term.ip=='000.000.000.000'){
			alert('获取不到终端用户IP，请检查网络状态或配置！');
			if(!firstRender) return;
			me.load_loginbox(function() {
				me.render(callback);
			});
		}
		util._jsonp({
			url: url,
			time:10000,
			data:{
				'program_name': page.name,
				'web_type': page.type,
				'page_index': page.index,
				'login_method': page.loginMethod,
				'wlan_user_ip': term.ip,
				'wlan_user_mac': term.mac,
				'wlan_ac_ip': term.wlanacip,
				'wlan_ac_name': term.wlanacname,
				'jsVersion': jsVersion
			},
			success: function(json) {
				if (json.result == 1 || json.result == 'ok') {
					if(typeof(json.login_result) && json.login_result == 1 || json.login_result == 2){ // 在线或登录成功
						me.timer && window.clearInterval(me.timer);
						window.location = '3.htm'+window.location.search;
						return;
					}
					if(!firstRender) return;

					if(typeof(json.useflag)!='undefined'){
						if(json.useflag == 0){ // 停机
							me.kind = term.type == 2 ? 'mobile_32': 'pc_2';
							callback = function() {
								document.getElementById('message').innerHTML = '该账号已停机，请充值激活后再使用。';
								document.getElementById('message').setAttribute('data-localize','accountoutofservice')
								me.load_js_css();
							};
						}else{ // 在线未开户，需审核
							if(json.auditstate == 0){ // 已提交，待审核
								me.kind = term.type == 2 ? 'mobile_32': 'pc_2';
								callback = function() {
									document.getElementById('message').innerHTML = '已提交审核，请耐心等待短信通知！';
									document.getElementById('message').setAttribute('data-localize','submittedforreview')
									me.load_js_css(me.keepCheckState);
								};
							}else{ // -1 未提交审核
								me.kind = term.type == 2 ? 'mobile_eduroam': 'pc_eduroam';
							}
						}
					}
				}
				if(!firstRender) return;
				me.load_loginbox(function() {
					me.render(callback);
				});
			},
			error: function(){
				if(!firstRender) return;
				me.load_loginbox(function() {
					me.render(callback);
				});
			}
		});
	},
	// 检查是否为团体访客扫码，
	checkIsGroupScanQRCode:function(){
		if(term.redirect && (term.redirect.indexOf('api=groupQRCodeScan')>=0 || util.getQueryString('api')=='groupQRCodeScan')){
			var url = window.location.search;
			url+= "&" + term.redirect.substr(term.redirect.indexOf('?')+1);
			window.location = 'a30.htm'+url;
			return;
		}
	},
	// 向内核请求，检查用户状态 result: 0 不在线，1 在线
	checkStatus: function(data_format) {
		var me = this;
		var url = me.path + 'chkstatus';
		util._jsonp({
			url: url,
			time:5000,
			success: function(json) {
				if('undefined' != typeof(json.ss4) && json.ss4!='000000000000' && json.ss4!=''){
					// 优先以url上面的Mac为准
					term.mac =(term.mac == '000000000000' || term.mac == '111111111111') ? json.ss4:term.mac;
				}
				// 不在线，是否启用无感知
				if (json.result == 0 && enPerceive == 1) {
					me.checkMac();
					return false;
				}
				// 在线(此处代码存疑)
				if (json.result == 1) {
					json.uid && (term.account = json.uid);
					term.online = json;
					me.kind = term.type == 2 ? 'mobile_31': 'pc_1';
					// 如果启用 旁路eduroam审核，并且账号里带有 @的，则调用后台接口查询是否需要审核
					if(enbaleEduroamVerify == 1 && json.uid.indexOf('@') != -1){
						me.checkUserStatusAndLoginByIP(true);
						return;
					}
				}

				me.firstRender();
			},
			error: function(){
				document.getElementsByTagName('body')[0].innerHTML = '内核接口不可用，请检查内核命令跟内核版本！';
			}
		});
	},
	checkMac: function() {
		var me = this;
		var localurl = me.path + 'login';
		var portalurl = me.eportal + '?c=Portal&a=perceive';
		var url = portalurl;
		if(term.mac == '000000000000' || term.mac == '111111111111'){
			// alert('获取用户MAC地址失败！');
			me.firstRender();
			return;
		}
		var data = {};
		data.login_method = page.loginMethod;
		data.wlan_user_ip = term.ip;
		data.wlan_user_ipv6 = term.ipv6;
		data.wlan_vlan_id = term.vlan;
		data.wlan_user_mac 	= term.mac;
		data.wlan_ac_ip = term.wlanacip;
		data.wlan_ac_name = term.wlanacname;
		data.jsVersion = jsVersion;
		data.data_format = autoPerceive?2:0; // 2 无感知登录  0 返回无感知状态
		data.suffix = term.suffix;
		data.ssid = term.ssid;
		util._jsonp({
			url:url,
			data:data,
			success:function(json) {
				if(json.result == 1){ // 已在线或直接无感知登录成功显示成功页
					me.kind = term.type == 2?'mobile_33':'pc_3';
					if(typeof(json.account) != 'undefined'){
						term.account = json.account;
					}
				}else if(json.result == 10){ // 显示快速登录页
					me.kind = term.type == 2?'mobile_10':'pc_20';
				}else{ // 检测异常或未绑定MAC显示认证页
					me.kind = term.type == 2?'mobile':'pc';
				}
				me.firstRender();
			},
			error: function(){
				me.firstRender();
			}
		});
	},
	firstRender: function() {
		var me = this;
		me.load_loginbox(function() {
			if (advert_time_79 > 0) { // advert_time_79 -> loginbox
				me.advert();
			} else {
				me.render(me.load_js_css);
			}
		});
	},
	// 广告页
	advert: function() {
		var me = this;
		me.kind = term.type == 2 ? 'mobile_79': 'pc_79';
		me.render(function() {
			var time = advert_time_79;
			var timer = setInterval(function() {
					time--;
					if (time <= 0) {
						me.kind = term.type == 2 ? 'mobile': 'pc';
						me.render();
						window.clearInterval(timer);
					} else {
						document.getElementById('advertTime').innerHTML = time;
					}
				},
				1000);
			me.load_js_css();
		});
	},
	/*
	 * 渲染页面
	 * 解决图片，视频路径问题
	 */
	render: function(callback) {
		var me = this;
		var url = me.pageUrl + me.kind + '.js?v=_'+fileVersion;

		util._load('js', url, function() {
			var oFragmeng = document.createDocumentFragment();
			var dom = util.string2DOM(window.bodyContent)[0];
			// 替换图片路径
			var imgs = dom.getElementsByTagName('img');
			for (var i = imgs.length - 1; i >= 0; i--) {
				var src = imgs[i].src;
				if (src && src.length > 0) {
					var index = src.indexOf('/', 10);
					if (index > 0) {
						src = src.substr(index + 1); // 去掉 http://xxx部分
						var srcAry = src.split('/');
						//EditEportal 公用目录不做页面文件替换
						if (srcAry[0] == 'EditEportal') {
							imgs[i].src = me.eportal + src;
						} else {
							imgs[i].src = me.pageUrl + srcAry[srcAry.length - 1];
						}
					}
				}
			}

			//解决视频路径问题
			var videos = dom.getElementsByTagName('video');
			for (var i = videos.length - 1; i >= 0; i--) {
				var src = videos[i].src;
				if (src && src.length > 0) {
					var index = src.indexOf('/', 10);
					if (index > 0) {
						src = src.substr(index + 1); // 去掉 http://xxx部分
						var srcAry = src.split('/');
						videos[i].src = me.pageUrl + srcAry[srcAry.length - 1];
					}
				}
				videos[i].setAttribute('poster', me.eportal + 'EditEportal/Images/a03.jpg');
			}
			// 解决按钮背景图片路径问题
			var changeBtnImgPath = function(targets) {
				for (var i = targets.length - 1; i >= 0; i--) {
					var style = targets[i].getAttribute('style');
					if (style) {
						if (style.indexOf('url("') >= 0) {
							style = style.replace('url("', 'url("' + me.pageUrl); //IE
						} else {
							style = style.replace('url(', 'url(' + me.pageUrl);
						}
					}
					targets[i].setAttribute('style', style);
				}
			}
			changeBtnImgPath(dom.getElementsByTagName('button'));
			changeBtnImgPath(dom.getElementsByTagName('input'));

			//哆点显示问题
			if((typeof(duodianAppHidden) != 'undefined') && (duodianAppHidden == 1)){
				var a = dom.getElementsByTagName('a');
				for(var i = a.length;i>=0;i--){
					if(typeof(a[i]) != 'undefined'){
						if( (a[i].getAttribute('href') == 'http://www.doctorcom.com/duodian/') || (a[i].getAttribute('data-localize') == page.kind+'.common.downloadapp') || (a[i].getAttribute('class') == 'lightbox_a') || (a[i].getAttribute('desc') == 'duodian_download') || (a[i].getAttribute('href') == 'http://www.drcom.com.cn') ){
							if((typeof(a[i].style) != 'undefined') && (typeof(a[i].style.display) != 'undefined') ){
								a[i].style.display = 'none';
							}
						}
						if(a[i].getAttribute('name') == 'openApp'){
							if((typeof(a[i].parentElement) != 'undefined') && (typeof(a[i].style) != 'undefined') && (typeof(a[i].style.display) != 'undefined') ){
								a[i].parentElement.style.display = 'none';
							}
						}
					}
				}
			}

			document.body.innerHTML = '';
			document.body.appendChild(dom);

			// 页面里面放了一个字段，区分页面的类型，需要针对不同类型的页面做不同处理
			// 目前暂时用这个来判断页面是否为访客模板 guest visitor eduroam 三种
			document.getElementById("pagetype") && (me.vtype = document.getElementById("pagetype").value);

			// 渲染完成后 做一些初始化操作 以及调用回调函数
			if(typeof(_init) != 'undefined'){
				if(isLang && typeof(language) != 'undefined'){
					language.init(null, function(){
						_init(callback);
					})
				}else{
					_init(callback);
				}
			}else{
				callback && callback();
			}

		});
	},
	load_loginbox: function(next) {
		// 加载 loginbox.js
		var loginboxJs = this.programUrl + this.type + '/' + this.index + '/loginbox.js?v=_' + fileVersion;
		util._load('js', loginboxJs, function(){
			// 加载完 loginbox的配置，设置是否启用ipv6通过ipv4联动登录
			// 判断全局是否启用(eportalv6)，如果没启用就使用页面配置的ipv6_ipv4
			enablev6 = (eportalv6 || ipv6_ipv4)?1:0;
			next()
		});
	},
	/*
	 * 加载 页面需要的js 跟css 文件
	 */
	load_js_css: function(callback) {
		util._load('css', 'b82.css'); // Bootstrap v3.2.0
		util._load('css', 'a52.css'); // lightBox, 哆点下载用到
		util._load('css', 'a57.css'); // 自定义弹窗样式(兼容IOS11.3)
		// 其他js依赖 jquery,等jquery 加载完成再加载其他js
		util._load('js','a43.js',function(){
			util._load('js',  'a44.js');  // clipboard.js  复制内容到粘贴板插件
			util._load('js',  'a51.js');  // lightBox, 哆点下载用到
			util._load('js',  'a54.js');  // IE8/9兼容AJAX
			util._load('js',  'a58.js');  // 自定义弹窗操作(兼容IOS11.3)
			util._load('js',  'a77.js?v=_' + fileVersion);  // 浏览器探测重定向列表
			util._load('js',  'a78.js?v=_' + fileVersion);  // 错误自定义
			util._load('js',  'a45.js',function(){   //需先加载a45.js(jquery.i18n.properties)，a42.js中有用到$.i18n
				util._load('js',  'a76.js', function(){  // 本地存储，a42 依赖于本地存储，需要加载完才加载a42.js
					util._load('js',  'a42.js?v=_' + fileVersion, callback);  // 扩展功能
				});
			});
		});
	},
	/*
	 * 设置页面相关的参数
	 */
	setArgs: function(callback) {
		var me = this;
		/* 配置相关 */
		me.kind = term.type == 2 ? 'mobile': 'pc';
		me.programUrl = me.eportal+'extern/' + me.name + '/';
		util._load('js', me.programUrl+'config.js?version='+fileVersion, function(){
			me.type = getPageType(); //From config.js
			me.index = getMatchPage(term.vlan, term.ip, term.ssid, term.areaID, term.time,term.ipv6,term.apmac);//From config.js
			me.loginMethod = getLoginMethod(me.index);
			me.redirectLink = getRedirectLink(me.index); //From config.js,给3.htm使用
			me.pageUrl = me.programUrl + me.type + '/' + me.index + '/';
			term.suffix = util.getSuffix();
			callback && callback();
		})
	}
};
var util = {
	num : 1000,
	//自增,用于jsonp请求回调函数
	increment : function(){
		this.num++;
		return this.num;
	},
	string2DOM: function(str) {
		var div = document.createElement("div");
		if (typeof str == "string") div.innerHTML = str;
		return div.childNodes;
	},
	getQueryString: function(name) {
		var i;
		var l = arguments.length;
		var params = window.location.search.split("?");
		if (l < 1) return '';
		var getStr = function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			for (var index in params) {
				var r = params[index].match(reg);
				if (r != null) {
					return unescape(r[2]);
				}
			}
			return null;
		};
		if (l == 1) {
			return getStr(name) || '';
		} else {
			var ret = false;
			for (var i = 0; i <= arguments.length - 1; i++) {
				ret = getStr(arguments[i]);
				if (ret) return ret;
			}
			return '';
		}
	},
	getTermType: function() { // 访问设备:0-其他；1-PC；2-手机；3-平板
		var iTermType = 0;
		if (navigator.userAgent.indexOf('Android') > 0) { // 安卓
			if (navigator.userAgent.indexOf('PAD for Mobile') > 0) {
				iTermType = 3;
			} else {
				iTermType = 2;
			}
		} else if (navigator.userAgent.indexOf('BlackBerry') > 0) { // 蓝莓
			if (navigator.userAgent.indexOf('RIM Table OS') > 0) {
				iTermType = 3;
			} else {
				iTermType = 2;
			}
		} else if (navigator.userAgent.indexOf('Mac OS') > 0) { // 苹果
			if (navigator.userAgent.indexOf('iPad') > 0) {
				iTermType = 3;
			} else if (navigator.userAgent.indexOf('iPhone') > 0) {
				iTermType = 2;
			} else {
				iTermType = 1;
			}
		} else if (navigator.userAgent.indexOf('X11') > 0) { // Linux
			iTermType = 1;
		} else if (navigator.userAgent.indexOf('SymbOS') > 0) { // 塞班
			iTermType = 2;
		} else if (navigator.userAgent.indexOf('Windows') > 0) { // Windows
			if (navigator.userAgent.indexOf('Windows RT') > 0) {
				iTermType = 3;
			} else if (navigator.userAgent.indexOf('Windows Phone') > 0) {
				iTermType = 2;
			} else {
				iTermType = 1;
			}
		} else {
			iTermType = 2;
		}
		//UA识别成PC时，浏览器显示宽度小于高度则加载手机页
		if (iTermType == 1 && window.screen.width < window.screen.height) {
			iTermType = 2;
		}
		//UA识别成平板时，浏览器显示宽度小于页面固定宽度大小1200则加载手机页
		if (iTermType == 3 && window.screen.width < 1200) {
			iTermType = 2;
		}
		return iTermType;
	},
	_jsonp: function(params) {
		var me = this;
		//格式化参数
		var formatParams = function(data) {
			var arr = [];
			for (var name in data) {
				if( name == 'callback'){
					arr.unshift(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
				}else{
					arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
				}
			};
			// 添加一个随机数，防止缓存
			arr.push('v=' + random());
			return arr.join('&');
		};
		// 获取随机数
		var random = function() {
			return Math.floor(Math.random() * 10000 + 500);
		};

		params = params || {};
		params.data = params.data || {};

		// jsonp请求
		//创建script标签并加入到页面中
		var callbackName = 'dr' + me.increment(); // 自定义 callbackName
		var head = document.getElementsByTagName('head')[0];
		// 设置传递给后台的回调参数名
		params.data['callback'] = callbackName;
		var data = formatParams(params.data);
		var script = document.createElement('script');
		head.appendChild(script);
		//创建jsonp回调函数
		window[callbackName] = function(json) {
			head.removeChild(script);
			clearTimeout(script.timer);
			window[callbackName] = null;
			params.success && params.success(json);
		};
		//发送请求
		// script.src = params.url + (params.url.indexOf('?') > 0 ? '&': '?') + data;
		//为了得知此次请求是否成功，设置超时处理
		if (params.time) {
			script.timer = setTimeout(function() {
				window[callbackName] = null;
				head.removeChild(script);
				params.error && params.error({
					message: '超时'
				});
			}, params.time);
		}
	},
	_load: function(type, url, callback) {
		var _doc = document.getElementsByTagName('head')[0];
		if (type == "css") {
			var fileref = document.createElement("link");
			fileref.setAttribute("rel", "stylesheet");
			fileref.setAttribute("type", "text/css");
			fileref.setAttribute("href", url);

			_doc.appendChild(fileref);
		} else if (type == 'js') {
			var script = document.createElement('script');
			script.setAttribute('type', 'text/javascript');
			script.setAttribute('src', url);

			_doc.appendChild(script);
			script.onload = script.onreadystatechange = function() {
				if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
					script.onload = script.onreadystatechange = null;
					callback && callback();
				}
			};
		}
	},
	//将16进制IP转为点分十进制串
	hex16ToString: function(hex16IP) {
		var stringIP = parseInt(hex16IP.substr(0, 2), 16).toString(10) + "." + parseInt(hex16IP.substr(2, 2), 16).toString(10) + "." + parseInt(hex16IP.substr(4, 2), 16).toString(10) + "." + parseInt(hex16IP.substr(6, 2), 16).toString(10);
		return stringIP;
	},
	getSuffix: function(){
		var tmpSuffix = accountSuffix;
		// 获取虚拟编号
		var tempMachineno = getVirtualMachineno(machineno, page.index);
		// 获取虚拟后缀
		if (tempMachineno != machineno && tempMachineno.length > 4) {
			tmpSuffix = "@" + tempMachineno.substr(tempMachineno.length - 4); //虚拟编号后四位作为虚拟后缀
		}
		if (tempMachineno.indexOf("@") != -1) tmpSuffix = tempMachineno; //虚拟编号直接作为虚拟后缀
		return tmpSuffix;
	}
};
var term = {
	account: '',
	password: '',
	type: 2,
	// 访问设备:0-其他；1-PC；2-手机；3-平板
	ip: '000.000.000.000',
	ipv6: '',
	mac: '000000000000',
	vlan: 1,
	wlanacip: '000.000.000.000',
	wlanacname: '',
	wlanacmac: '000000000000',
	apmac:'000000000000',
	time:'',
	ssid: '',
	areaID: '',
	online: {},
	redirect:'',
	suffix:'',
	/*
	 * 设置终端相关的参数
	 */
	init: function(_kind, next) {
		this.type = util.getTermType();
		this.ip = util.getQueryString('ip', 'wlanuserip', 'userip', 'user-ip', 'UserIP', 'uip', 'station_ip') || (typeof(v46ip)!='undefined'?v46ip:false) || (typeof(ss5)!='undefined'?ss5:false) || (typeof(v4ip)!='undefined'?v4ip:false) || (typeof(ss3)!='undefined'?util.hex16ToString(ss3):'000.000.000.000');
		this.mac = (util.getQueryString('mac', 'usermac', 'wlanusermac', 'umac', 'client_mac', 'station_mac') || (typeof(ss4)!='undefined'?ss4:false) || (typeof(olmac)!='undefined'?olmac:false) || '000000000000').replace(/[\-\:]/g, '');
		this.vlan = util.getQueryString('vlan', 'vlanid') || (typeof(vlanid) != 'undefined' ? vlanid: 1);
		this.session = util.getQueryString('session') || ((typeof(ss3) != 'undefined' && typeof(ss4) != 'undefined' && typeof(ss2) != 'undefined') ? ss3 + "-" + ss4 + "-" + ss2: "");
		this.wlanacip = util.getQueryString('wlanacip','acip','switchip','nasip','nas-ip') || '';
		this.wlanacname = util.getQueryString('wlanacname','sysname','nasname','nas-name') || '';
		this.wlanacmac = (util.getQueryString('wlanacmac','gw_mac') || '000000000000').replace(/[\-\:]/g, '');
		this.apmac = (util.getQueryString('apmac','ap_mac') || '000000000000').replace(/[\-\:]/g, '');
		this.ssid = util.getQueryString('ssid','essid') || '';
		this.areaID = util.getQueryString('areaID') || '';
		this.redirect = util.getQueryString('redirect','redirect-url','desurl','url','originalUrl','success_url', 'Original_url') || '';
		var me = this;
		// eduroam 审核页是a27.htm 直接读不到ip，通过checkstatus 接口获取
		if(_kind == 'eduroam' || _kind == 27){
			var url = page.path + 'chkstatus';
			util._jsonp({
				url: url,
				time:5000,
				success: function(json) {
					me.ip = util.getQueryString('ip', 'wlanuserip', 'userip', 'user-ip', 'UserIP', 'uip', 'station_ip')  || (typeof(json.v46ip)!='undefined'?json.v46ip:false) || (typeof(json.ss5)!='undefined'?json.ss5:false) || (typeof(json.v4ip)!='undefined'?json.v4ip:false) || (typeof(json.ss3)!='undefined'?util.hex16ToString(json.ss3):'000.000.000.000')
					me.mac =  (util.getQueryString('mac', 'usermac', 'wlanusermac', 'umac', 'client_mac', 'station_mac') || (typeof(json.ss4)!='undefined'?json.ss4:false) || (typeof(json.olmac)!='undefined'?json.olmac:false) || '000000000000').replace(/[\-\:]/g, '');
					me.vlan = util.getQueryString('vlan', 'vlanid') || (typeof(json.vlanid) != 'undefined' ? json.vlanid: 0);
					me.page_type_data(_kind,next);
				},
				error: function(){
					me.page_type_data(_kind,next);
				}
			});
		}else{
			me.page_type_data(_kind,next);
		}
	},
	page_type_data: function(_kind,next){
		var url = page.eportal + '?c=Portal&a=page_type_data';
		util._jsonp({
			url: url,
			success: function(json) {
				if (json.result == 1) { // 成功
					term.time =  json.time;
				}
				next();
			},
			error: function(){
				next();
			}
		});
	},
};