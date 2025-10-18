# ✅ جلسه 18: ترکیب Grid و Flex در CSS

(چیدمان ترکیبی برای ساخت صفحات کامل و حرفه‌ای 🔀✨)

---

## 🎯 چرا باید Grid و Flex رو ترکیب کنیم؟

چون هر کدوم برای یه نوع چیدمان عالی هستن:

| سیستم    | مناسب برای                                     |
| -------- | ---------------------------------------------- |
| **Grid** | چیدمان کلی صفحه (صفحه‌بندی ۲ بعدی)             |
| **Flex** | چیدمان داخلی عناصر در یک ردیف یا ستون (جزئیات) |

📌 پس تو می‌تونی ساختار کلی صفحه رو با **Grid** بسازی،
و مثلاً آیتم‌های داخل هر بخش رو با **Flexbox** بچینی.

---

## 💡 یه مثال واقعی از ترکیب:

---

### ✅ هدف: صفحه با ۳ بخش:

* **سربرگ (Header)**

* **اصلی (Main)** با دو ستون

* **پاورقی (Footer)**

---

### 🧱 HTML:

```html
<div class="layout">
  <header>سربرگ</header>
  <aside>سایدبار</aside>
  <main>
    <div class="cards">
      <div class="card">۱</div>
      <div class="card">۲</div>
      <div class="card">۳</div>
    </div>
  </main>
  <footer>پاورقی</footer>
</div>
```

---

### 🎨 CSS:

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 10px;
}

header {
  grid-area: header;
  background: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
}

aside {
  grid-area: aside;
  background: #eee;
  padding: 20px;
}

main {
  grid-area: main;
  background: #f9f9f9;
  padding: 20px;
}

footer {
  grid-area: footer;
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
```

---

## ✅ حالا توی `main` از Flexbox استفاده می‌کنیم:

```css
.cards {
  display: flex;
  gap: 10px;
}

.card {
  background: lightgreen;
  flex: 1;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}
```

---

## 🎯 نتیجه:

✅ با **Grid** ساختار صفحه رو ساختیم

✅ با **Flex** داخل بخش `main` کارت‌ها رو در یک ردیف چیدیم

---

## 📝 تمرین جلسه ۱۸:

۱. ساختار کامل بالا رو بساز
۲. برای بخش main چند کارت دیگه اضافه کن
۳. با media query تست کن که در موبایل کارت‌ها ستونی بشن
۴. رنگ‌ها و فونت‌ها رو دلخواه کن

---
