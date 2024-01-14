 
// 使用 JavaScript 在 DOM 載入時滾動到底部並定位元素
document.addEventListener('DOMContentLoaded', function () {
   // 獲取頁面的高度
   var body = document.body,
     html = document.documentElement;

   var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

   // 滾動到頁面底部
   window.scrollTo(0, height);

 });

   // 定位程式碼
 	const imgage = document.getElementById('background-image');
  if (imgage) {
        imgage.onload = function() {
            const divformat = document.getElementById('frame-item');
            const rect = imgage.getBoundingClientRect();
            divformat.style.width = rect.width + 'px';
            divformat.style.height = rect.height + 'px';
            console.log("Frame寬高使用Script設定完成, reac.width=>" + rect.width + " rect.height=>" + rect.height);
        };
   }
   else {
       console.error("無法找到背景圖片 (background-image) 元素。");
   }

