
function copyText(text) {
  var textarea = document.createElement("input")
  //当前获得焦点的元素
  var currentFocus = document.activeElement
  document.body.appendChild(textarea)
  textarea.value = text
  textarea.focus()
  if (textarea.setSelectionRange)
    //获取光标起始位置到结束位置
    textarea.setSelectionRange(0, textarea.value.length)
  else
    textarea.select()
  try {
    var flag = document.execCommand("copy")
  } catch (eo) {
    var flag = false
  }
  document.body.removeChild(textarea)
  currentFocus.focus()
  return flag
}

$("body").on("click", ".wechat .details .bg .text p .cope", function() {
  copyText($(".wechat .details .bg p span .wxh").html())
})