# ✅ جلسه 19: CSS Variables – تعریف و استفاده از متغیرها در CSS

(مثل یه مهندس حرفه‌ای رنگ و سایز و همه‌چی رو مدیریت کن 🎛️🧪)

---

## 🧠 CSS Variable چیه؟

CSS Variable یا همون **متغیر CSS** یعنی می‌تونی یه مقدار رو یه بار تعریف کنی
و هر جا خواستی ازش استفاده کنی! ✅

مثلاً:

```css
--main-color: #007bff;
```

و بعد هر جا خواستی رنگ استفاده کنی، اینو بزنی:

```css
color: var(--main-color);
```

---

## 🧱 تعریف متغیر در CSS

### داخل ریشه (root):

```css
:root {
  --main-color: #007bff;
  --text-color: #333;
  --radius: 10px;
  --padding: 15px;
}
```

🔹 `:root` یعنی کل صفحه (بالاترین سطح)

---

## 🎯 استفاده از متغیر:

```css
button {
  background-color: var(--main-color);
  color: var(--text-color);
  border-radius: var(--radius);
  padding: var(--padding);
}
```

---

## 💡 چرا استفاده کنیم؟

| مزیت                | توضیح                                               |
| ------------------- | --------------------------------------------------- |
| 🎨 تمیز بودن کد     | فقط یک بار تعریف می‌کنی                             |
| 🔧 راحتی در تغییر   | اگه رنگ یا سایز عوض بشه، فقط یه جا تغییرش می‌دی     |
| 🎯 استفاده در تم‌ها | برای حالت روشن/تاریک عالیه                          |
| 📱 واکنش‌گرا        | می‌تونی توی media query هم متغیر جداگانه تعریف کنی! |

---

## 🧪 تمرین جلسه ۱۹:

۱. داخل `:root` متغیرهای زیر رو تعریف کن:

```css
--primary: #00b894;
--secondary: #ffeaa7;
--radius: 8px;
--gap: 20px;
```

۲. یه دکمه بساز و با این متغیرها استایل بده

۳. توی یک `div` هم `background-color` از `--secondary` استفاده کن

---

## ✨ مثال کامل:

```css
:root {
  --primary: #00b894;
  --secondary: #ffeaa7;
  --radius: 8px;
  --gap: 20px;
}

button {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius);
  padding: 10px 20px;
  cursor: pointer;
}
```

---
