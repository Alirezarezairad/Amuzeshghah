# ✅ جلسه 12: استایل‌دهی به فرم‌ها و inputها در CSS

(فرم ورود، جستجو، ثبت‌نام، تماس با ما … همه رو حرفه‌ای کن! 🧾)

---

## 📥 تگ‌های مهم در فرم‌ها:

| تگ                                    | کاربرد                                |
| ------------------------------------- | ------------------------------------- |
| `<form>`                              | فرم اصلی                              |
| `<input>`                             | ورودی متن، ایمیل، پسورد، چک‌باکس و... |
| `<textarea>`                          | چند خطی نوشتن                         |
| `<select>` و `<option>`               | منوی کشویی                            |
| `<button>` یا `<input type="submit">` | دکمه ارسال                            |

---

## 🎯 استایل‌دهی به input و فرم‌ها

### 📦 استایل پایه برای `input`:

```css
input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
```

---

### 📘 استایل دادن به `textarea`:

```css
textarea {
  width: 100%;
  height: 120px;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
}
```

---

### 🧪 افکت hover و focus:

```css
input:hover,
textarea:hover {
  border-color: dodgerblue;
}

input:focus,
textarea:focus {
  border-color: royalblue;
  outline: none;
  box-shadow: 0 0 5px rgba(65, 105, 225, 0.5);
}
```

✅ وقتی روش کلیک می‌کنی یا موس می‌ره روش، جلوه می‌گیره!

---

### 🎨 استایل `label`‌ها:

```css
label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}
```

---

### 🟢 استایل checkbox و radio:

```css
input[type="checkbox"],
input[type="radio"] {
  accent-color: teal;
  width: 16px;
  height: 16px;
}
```

✅ رنگ تیک‌ها و اندازه‌ها قابل تغییرن

---

### 💬 استایل placeholder:

```css
input::placeholder {
  color: #aaa;
  font-style: italic;
}
```

---

### 🧠 نکته مهم: مرتب‌سازی فرم با flex یا grid توی جلسات آینده گفته می‌شه! الان فقط استایل پایه رو یاد می‌گیریم.

---

## 📝 تمرین جلسه ۱۲:

یه فرم بساز با موارد زیر:

* نام کاربر (input)
* ایمیل (input type="email")
* پیام (textarea)
* دکمه ارسال (`button`)
* استایل کامل و زیبا با:

```css
padding, border-radius, focus effect, placeholder style
```

مثال HTML ساده:

```html
<form>
  <label for="name">نام:</label>
  <input type="text" id="name" placeholder="نام شما">

  <label for="email">ایمیل:</label>
  <input type="email" id="email" placeholder="ایمیل شما">

  <label for="msg">پیام:</label>
  <textarea id="msg" placeholder="متن پیام شما"></textarea>

  <button type="submit">ارسال</button>
</form>
```

---
