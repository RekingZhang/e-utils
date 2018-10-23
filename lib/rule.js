/*
 * @Author: reking
 * @Date:   2018-03-15
 * @Last Modified by:   reking
 * @Last Modified time:  2018-03-15 16:54:43
 *
 */

function isEmail(str) {
	return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
		str
	);
}

/**
 * 2018年3月15更新
 *
 * 中国电信号段：133、149、153、173、177、180、181、189、199
 * 中国联通号段：130、131、132、145、155、156、166、175、176、185、186
 * 中国移动号段：134(0-8)、135、136、137、138、139、147、150、151、152、157、158、159、178、182、183、184、187、188、198
 *
 * 其他号段：
 * 14号段以前为上网卡专属号段，如中国联通的是145，中国移动的是147等等。
 * 虚拟运营商
 * 电信：1700、1701、1702
 * 移动：1703、1705、1706
 * 联通：1704、1707、1708、1709、171
 */
function isMobilePhone(str) {
	return /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
		str
	);
}
/**
 *
 * 【根据〖中华人民共和国国家标准 GB 11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，由十七位* 数字本体码和一位数字校验码组成。排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一* 位数字校验码。
 *
 * 1、地址码：表示编码对象常住户口所在县(市、旗、区)的行政区划代码。
 * 2、出生日期码：表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。
 * 3、顺序码：表示同一地址码所标识的区域范围内，对同年、月、日出生的人员编定的顺序号。顺序码的奇数分给男性，偶数分给女性。
 * 4、校验码：是根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的检验码。
 *
 * 15位校验规则 6位地址编码+6位出生日期(例：1991-3-23 => 910323)+3位顺序号
 * 18位校验规则 6位地址编码+8位出生日期+3位顺序号+1位校验位
 *
 * 校验位规则     公式:∑(ai×Wi)(mod 11)……………………………………(1)
 *                公式(1)中：
 *                i----表示号码字符从由至左包括校验码在内的位置序号；
 *                ai----表示第i位置上的号码字符值；
 *                Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。
 *                i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
 *                Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1
 *
 *
 */
function isCreditCard(str) {
	const provinces =
		'11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91';
	let codeLen = str.length;
	//长度校验
	if (codeLen !== 18 && codeLen !== 15) {
		return false;
	}
	//地址码校验
	if (provinces.indexOf(str.substring(0, 2)) === -1) {
		return false;
	}
	//出生日期码校验
	let birthCode =
		codeLen === 18 ? str.substring(6, 14) : '19' + str.substring(6, 12);
	let year = birthCode.substring(0, 4) - 0;
	let month = birthCode.substring(4, 6) - 1; //因为js中的月份从0开始
	let day = birthCode.substring(6, 8) - 0;
	let brithday = new Date(year, month, day);
	if (
		brithday.getFullYear() !== year ||
		brithday.getMonth() !== month ||
		brithday.getDate() !== day
	) {
		return false;
	}
	//校验码校验
	if (codeLen === 18) {
		const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //加权因子
		const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]; //校验位
		let code = str.substring(17);
		//∑(ai×Wi)(mod 11)
		let sum = 0;
		for (let i = 0; i < 17; i++) {
			sum += str[i] * factor[i];
		}
		// eslint-disable-next-line
		if (parity[sum % 11] == code.toUpperCase()) {
			return true;
		}
		return false;
	}
	return true;
}

export default {
	isCreditCard,
	isEmail,
	isMobilePhone
};
