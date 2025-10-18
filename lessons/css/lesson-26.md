# ✅ جلسه 26: افکت پارالاکس در CSS

(حرکت جذاب پس‌زمینه هنگام اسکرول! 🏞️✨)

---

## 🎯 پارالاکس یعنی چی؟

**Parallax** یعنی وقتی اسکرول می‌کنی، ‌**پس‌زمینه آهسته‌تر از متن حرکت می‌کنه**
و این باعث ایجاد یه حس عمق و جذابیت فوق‌العاده می‌شه 😍

---

## 🧠 چطور با CSS ساده پارالاکس بسازیم؟

با استفاده از:

* `background-attachment: fixed`
* همراه با تصویر بزرگ و تنظیمات پس‌زمینه

---

## 🧱 HTML ساده:

```html
<div class="parallax"></div>

<div class="content">
  <h2>محتوای سایت</h2>
  <p>اینجا یه متن تستی هست برای دیدن افکت پارالاکس.</p>
</div>
```

---

## 🎨 CSS پارالاکس:

```css
.parallax {
  background-image: url('https://picsum.photos/id/1018/1000/600');
  height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.content {
  padding: 50px;
  background: white;
  text-align: center;
  font-family: sans-serif;
}
```

---

## ✨ توضیح ویژگی‌ها:

| ویژگی                          | کارش چیه؟                         |
| ------------------------------ | --------------------------------- |
| `background-attachment: fixed` | فیکس نگه داشتن تصویر نسبت به صفحه |
| `background-position`          | مرکز‌چین کردن عکس                 |
| `background-size: cover`       | پر کردن کامل با حفظ نسبت          |

---

## ⚠️ نکته مهم:

در موبایل بعضی مرورگرها مثل Safari از `fixed` پشتیبانی نمی‌کنن ❌
تو اون حالت باید با JavaScript یا کتابخونه‌های حرفه‌ای‌تر کار کرد
(تو بخش پیشرفته JavaScript یاد می‌گیریم 😊)

---

## 📝 تمرین جلسه ۲۶:

1. یه سکشن با `class="parallax"` بساز
2. یک تصویر پس‌زمینه‌ی زیبا بهش بده
3. بخش‌های دیگه‌ی صفحه هم بساز تا افکت اسکرول بهتر دیده بشه
4. رنگ‌ها و فونت‌ها رو به دلخواه خودت تنظیم کن
5. تست کن توی دسکتاپ و موبایل

---
