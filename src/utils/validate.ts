const rules = (val,rule)=>{
	if(rule){
		if(rule.test(val)){
			return true
		}else{
			return false
		}
	}else{
		if(!val) return false;
		return true;
	}
} 

/**
 * 身份证号校验
 */
export const idCard = val=> rules(val,/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/)

//正整数正则
export const pos = val=> rules(val,/^\d+$/)

//负整数正则
export const neg = val=> rules(val,/^-\d+$/)

//整数正则
export const int = val=> rules(val,/^-?\d+$/)

/**
 * 检测验证码格式是否正确（4位且纯数字）
 */
export const code = val=> rules(val,/^\d{4}$/)

/**
 * 检测中文姓名格式是否正确（2-4位）
 */
export const nameCh = val=> rules(val,/^[\u4E00-\u9FA5]{2,10}$/)

/**
 * 检测手机号格式是否正确（11位且手机格式）
 */
export const mobile = val=> rules(val,/^1[3456789]\d{9}$/)

/**
 * 邮箱校验
 * 
 */
export const email = val=> rules(val,/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)

/**
 * 密码校验
 * 6-16位数字、大、小字母、特殊字符中至少三种组合
 */
export const password = val=> rules(val,/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z,.:;，。？''""；；‘’“”·、_~!@#$^&*()%<>{}【】|?\/+=-]+$)(?![a-z0-9]+$)(?![a-z,.:;，。？''""；；‘’“”_~!@#$^&*()%<>{}【】|?/+=-]+$)(?![0-9,.:;，。？''""；；‘’“”_~!@#$^&*()%<>{}【】|?/+=-]+$)[a-zA-Z0-9,.:;，。？''""；；‘’“”_~!@#$^&*()%<>{}【】|?/+=-]{6,16}$/)
