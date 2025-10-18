# ✅ جلسه 15: پروژه عملی – ساخت فرم لاگین حرفه‌ای با HTML و CSS

(جمع‌بندی کامل مباحث مقدماتی CSS 🎯)

---

## 🎯 چی می‌سازیم؟

✅ یه **فرم لاگین** ساده و حرفه‌ای با موارد زیر:

* فیلد نام کاربری و رمز عبور
* دکمه‌ی ورود
* استایل‌دهی کامل با رنگ، فاصله، فونت، border
* افکت hover و focus
* طراحی جعبه‌بندی با Box Model
* استفاده از کلاس‌ها، Pseudo-Class‌ها، و واحدهای استاندارد

---

## 🧱 کد HTML فرم:

```html
<div class="login-box">
  <h2>ورود به حساب</h2>
  <form>
    <label for="username">نام کاربری</label>
    <input type="text" id="username" placeholder="نام کاربری را وارد کنید">

    <label for="password">رمز عبور</label>
    <input type="password" id="password" placeholder="رمز عبور را وارد کنید">

    <button type="submit">ورود</button>
  </form>
</div>
```

---

## 🎨 کد CSS فرم:

```css
body {
  background-color: #f0f0f0;
  font-family: Tahoma, sans-serif;
}

.login-box {
  width: 300px;
  margin: 100px auto;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.login-box h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-box label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.login-box input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border 0.3s;
}

.login-box input:focus {
  border-color: #007bff;
  outline: none;
}

.login-box button {
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-box button:hover {
  background-color: #0056b3;
}
```

---

## ✅ تکنیک‌هایی که توی این پروژه استفاده کردیم:

| مبحث                                  | استفاده‌شده؟ |
| ------------------------------------- | ------------ |
| فرم و input                           | ✅            |
| label و placeholder                   | ✅            |
| کلاس و ID                             | ✅            |
| pseudo-classها مثل `:hover`, `:focus` | ✅            |
| box model (padding, margin, border)   | ✅            |
| border-radius و box-shadow            | ✅            |
| واحدهای `px` و درصد                   | ✅            |
| رنگ و فونت                            | ✅            |

---

## 📝 تمرین جلسه ۱۵:

1. این فرم رو بساز و تست کن
2. رنگ‌ها رو عوض کن به رنگ دلخواه خودت
3. فونت‌ها و سایزها رو سفارشی کن
4. جای فرم رو وسط نگه دار
5. دکمه‌ی ورود رو با hover قشنگ‌تر کن

---
