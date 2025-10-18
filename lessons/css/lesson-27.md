# ✅ جلسه 27: فرم‌های حرفه‌ای در CSS

(فرم‌هایی که فقط فرم نیستن، بلکه زیبایی و تجربه کاربری بالا دارن! 🧾💎)

---

## 🎯 چی یاد می‌گیریم؟

✅ استایل پیشرفته برای `input`, `textarea`, `select`

✅ حالت‌های `focus`, `hover`, `disabled`

✅ افکت‌های زیبا برای فرم‌ها

✅ مرتب‌سازی، رنگ‌دهی، و طراحی چشم‌نواز

---

## 🧱 ساختار HTML فرم:

```html
<form class="form">
  <label for="name">نام:</label>
  <input type="text" id="name" placeholder="نام خود را وارد کنید">

  <label for="email">ایمیل:</label>
  <input type="email" id="email" placeholder="example@email.com">

  <label for="message">پیام:</label>
  <textarea id="message" rows="4" placeholder="پیام شما"></textarea>

  <button type="submit">ارسال</button>
</form>
```

---

## 🎨 CSS فرم حرفه‌ای:

```css
.form {
  max-width: 500px;
  margin: 50px auto;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  font-family: sans-serif;
}

.form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.form input,
.form textarea {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form input:focus,
.form textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 8px rgba(0,123,255,0.3);
}

.form button {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.form button:hover {
  background: #0056b3;
}
```

---

## ✨ نکات مهم:

| ویژگی                          | تکنیک                           |
| ------------------------------ | ------------------------------- |
| 🔷 افکت `focus`                | مرز و سایه رنگی برای ورودی      |
| ⬜ گرد کردن ورودی               | `border-radius` برای تجربه بهتر |
| 🎯 واکنش‌پذیری                 | `max-width` و `width: 100%`     |
| 💡 استفاده از placeholder زیبا | با فونت و رنگ ملایم             |

---

## 📝 تمرین جلسه ۲۷:

۱. فرم بالا رو پیاده‌سازی کن
۲. رنگ‌ها و سایه‌ها رو دلخواه خودت کن
۳. فونت‌ و فاصله‌ها رو تغییر بده
۴. سعی کن جای فرم رو وسط صفحه نگه داری (با Flex یا Margin Auto)
۵. به `input:disabled` هم یه استایل خاص بده

---