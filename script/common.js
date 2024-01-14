 
// 使用 JavaScript 在 DOM 載入時滾動到底部並定位元素
document.addEventListener('DOMContentLoaded', function () {
   // 獲取頁面的高度
   var body = document.body,
     html = document.documentElement;

   var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

   // 滾動到頁面底部
   window.scrollTo(0, height);

   // 定位程式碼
   const imgage = document.getElementById('background-image');
   const divformat = document.getElementById('format');

   divformat.style.width = imgage.width + 'px';
   divformat.style.height = imgage.height + 'px';
	
	console.log("通用script執行完畢。");
 });
