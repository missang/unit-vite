
/**
 * 检测手机号格式是否正确（11位且手机格式）
 * @param {*} mobile
 */
export const mobileCheck = (mobile) => {
  const reg = /^1[3456789]\d{9}$/
  if (reg.test(mobile)) {
    return true
  } else {
    return false
  }
}
/**
 * 检测验证码格式是否正确（4位且纯数字）
 * @param {*} code
 */
export const codeCheck = (code) => {
  let reg = /^\d{4}$/
  if (reg.test(code)) {
    return true
  } else {
    return false
  }
}

/**
 * 身份证号校验
 */

export const IDNumCheck = (IDNum) => {
  let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
  if (reg.test(IDNum)) {
    return true
  } else {
    return false
  }
}

//防抖
let timeout = null
export const debounce = (cb, wait = 1000) => {
  if (timeout !== null) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(() => {
    timeout = null
    cb && cb()
  }, wait)
}
 


/**
 * 时间戳转需要的格式
 * @param {*} date 
 */
export const creactTime = date =>{
  let str =  ''
  if(date){str = date.replace(/-/g, "/")}
  date = new Date(str);
  var y = date.getFullYear();
  var M = date.getMonth() + 1;
  M = M < 10 ? ('0' + M) : M;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  var s = date.getSeconds();
  s = s < 10 ? ('0' + s) : s;
  
  return y + '-' + M + '-' + d;
}
/**
 * 时间戳转天数，小时，分钟，秒
 * @param {*} second 
 */
export const formatSecond = second => {
  const days = Math.floor(second / 86400);
  const hours = Math.floor((second % 86400) / 3600);
  const minutes = Math.floor(((second % 86400) % 3600) / 60);
  const seconds = Math.floor(((second % 86400) % 3600) % 60);
  let str = '';
  if(days > 0){
      str = days+'天'
  }
  if(hours > 0){
      str += hours+'小时'
  }
  if(minutes > 0){
      str += minutes+'分钟'
  }
  if(seconds > 0){
      str += seconds+'秒'
  }
  return str;
}


/*
* 判断是否在微信浏览器
*/

export const isWeiXinLogin = ()=> {
	var ua = window.navigator.userAgent.toLowerCase();
	console.log(ua);
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}

/**
 * 获取当前路由参数
 * @param {string} url
 * */
 export const getRouterInfo = urlStr=> {
	if (typeof urlStr == "undefined") {
		var url = decodeURI(location.search); //获取url中"?"符后的字符串
	} else {
		var url = "?" + urlStr.split("?")[1];
	}
	var routerInfo = new Object();
		let strs;
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			routerInfo[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
		}
	}
	return routerInfo;
}

/**
 * 四舍五入保留2位小数（不够位数，则用0替补）
 */
 export const getNumfixed = (num, digits = 2) => {
  let result = parseFloat(num);
  if (isNaN(result)) {
    // alert('传递参数错误，请检查！');
    return '';
  }
  result = Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
  var s_x = result.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + digits) {
    s_x += '0';
  }
  return s_x;
}