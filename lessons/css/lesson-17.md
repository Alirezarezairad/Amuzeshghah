# ✅ جلسه 17: Grid پیشرفته در CSS

(چیدمان جدولی، منظم، واکنش‌گرا و کاملاً کنترل‌شده 🧮✨)

---

## 🧠 CSS Grid چیه؟

**CSS Grid Layout** یه سیستم چیدمان دو‌بعدی (ستون و ردیف هم‌زمان) هست
که باهاش می‌تونی صفحات وب رو **دقیق، منظم و حرفه‌ای** بچینی! 😍

برخلاف Flexbox که فقط در یک جهت (افقی یا عمودی) کار می‌کنه،
**Grid هم‌زمان در هر دو جهت کار می‌کنه.**

---

## 🎯 فعال‌سازی Grid:

کافیه روی عنصر والد اینو بنویسی:

```css
display: grid;
```

و بعد با ویژگی‌هایی مثل `grid-template-columns` و `grid-template-rows` مشخص می‌کنی چند ستون و چند ردیف داشته باشه.

---

## 💡 مثال ساده:

### 🧱 HTML:

```html
<div class="grid-container">
  <div>۱</div>
  <div>۲</div>
  <div>۳</div>
  <div>۴</div>
</div>
```

### 🎨 CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* دو ستون مساوی */
  gap: 10px;
}

.grid-container div {
  background: lightgreen;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}
```

---

## 🔢 ویژگی‌های مهم Grid:

---

### 1️⃣ `grid-template-columns`

📌 تعیین تعداد ستون‌ها و اندازه‌شون

```css
grid-template-columns: 200px 1fr 2fr;
```

---

### 2️⃣ `grid-template-rows`

📌 ردیف‌ها:

```css
grid-template-rows: 100px 150px auto;
```

---

### 3️⃣ `gap`

📌 فاصله بین ردیف و ستون:

```css
gap: 20px;                /* بین همه */
row-gap: 10px;
column-gap: 30px;
```

---

### 4️⃣ `grid-column` و `grid-row`

📌 تعیین محل قرارگیری هر آیتم:

```css
.item1 {
  grid-column: 1 / 3;   /* از ستون ۱ تا ۳ کشیده بشه */
}
```

---

### 5️⃣ `repeat()` → نوشتن خلاصه‌تر

```css
grid-template-columns: repeat(3, 1fr);  /* سه ستون مساوی */
```

---

### 6️⃣ `auto-fit` و `minmax()` → برای واکنش‌گرایی حرفه‌ای

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

📌 یعنی ستون‌هایی که خودشون واکنش‌گرا باشن ✅

---

## 📝 تمرین جلسه ۱۷:

۱. یک `div` بساز با کلاس `grid-container`
۲. داخلش ۶ تا `div` قرار بده (آیتم‌ها)
۳. با CSS:

* `display: grid`
* `grid-template-columns: repeat(3, 1fr)`
* `gap: 20px`
* به آیتم ۱ بگو `grid-column: 1 / span 2`
* رنگ‌ها و استایل جذاب بده

---
