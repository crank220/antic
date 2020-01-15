function isObject (val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}

// 是否为空字符串
String.prototype.isEmpty = function() {
  return this.replace(/\s/gi, '').length === 0
}

// 校验密码：只能输入6-20个字母、数字、下划线
String.prototype.isPassword = function() {
  var paten = /^[a-zA-Z0-9_\u4e00-\u9fa5\w]{6,20}$/
  return paten.exec(this)
}
// 新校验密码：设置8-20位，包含字母，数字，特殊字符。
String.prototype.isXinPassword = function() {
  var paten = /^(?![a-zA-Z]+$)(?![a-z0-9]+$)(?![a-z\W_!""#$%&'()*+,-./:;<=>?@\[\]\^`{|}]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!""#$%&'()*+,-./:;<=>?@\[\]\^`{|}]{8,20}$/
  return paten.test(this)
}
// 校验手机
String.prototype.isPhone = function() {
  var paten = /^1[34587]\d{9}$/
  return paten.test(this)
}
// 校验邮箱
String.prototype.isEmail = function() {
  var paten = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return paten.exec(this)
}
// 校验登录名：只能输入5-20个以字母开头、可带数字、“_”的字串
String.prototype.isUserName = function() {
  var paten = /^[a-zA-Z0-9_\u4e00-\u9fa5\w]{6,16}$/
  return paten.test(this)
}
// 校验登录名：不能为纯数字
String.prototype.IsNumber = function() {
  var paten = /^[0-9]\d*$/
  return paten.test(this)
}