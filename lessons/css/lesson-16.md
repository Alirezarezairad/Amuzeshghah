# ✅ جلسه 16: Flexbox پیشرفته در CSS

(چیدمان هوشمند و واکنش‌گرا فقط با چند خط کد ✨)

---

## 🧠 Flexbox یعنی چی؟

**Flexbox** یا **Flexible Box Layout** یک مدل چیدمان قدرتمند توی CSS هست که بهت اجازه می‌ده:

✅ عناصر رو در یک ردیف یا ستون بچینی

✅ فاصله‌ی بینشون رو کنترل کنی

✅ وسط‌چین یا راست‌چین‌شون کنی

✅ بین دستگاه‌های مختلف واکنش‌گرا بشن

---

## 🎯 فعال‌سازی Flexbox:

کافیه به والد (container) اینو بدی:

```css
display: flex;
```

و بعد بچه‌هاش (items) طبق تنظیماتی که می‌دی، چیده می‌شن.

---

## 💡 مثال ساده:

### 🧱 HTML:

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### 🎨 CSS:

```css
.flex-container {
  display: flex;
  gap: 10px;
}

.flex-container div {
  background: lightblue;
  padding: 20px;
  border-radius: 5px;
}
```

---

## 🧭 ویژگی‌های مهم Flexbox (برای والد)

---

### 1️⃣ `flex-direction`

📌 تعیین جهت چیدمان عناصر

```css
flex-direction: row;       /* افقی (پیش‌فرض) */
flex-direction: column;    /* عمودی */
```

---

### 2️⃣ `justify-content`

📌 تنظیم چیدمان افقی (جهت اصلی)

```css
justify-content: flex-start;     /* چپ‌چین */
justify-content: center;         /* وسط‌چین */
justify-content: flex-end;       /* راست‌چین */
justify-content: space-between;  /* بین فاصله‌دار */
justify-content: space-around;   /* دور فاصله‌دار */
```

---

### 3️⃣ `align-items`

📌 تنظیم چیدمان عمودی (در محور عمود بر جهت)

```css
align-items: stretch;      /* پیش‌فرض */
align-items: center;       /* وسط‌چین عمودی */
align-items: flex-start;   /* چسبیده بالا */
align-items: flex-end;     /* چسبیده پایین */
```

---

### 4️⃣ `gap`

📌 فاصله بین آیتم‌ها:

```css
gap: 20px;
```

---

## 🔧 ویژگی‌های فرزندها (flex items)

### 1️⃣ `flex-grow`

📌 مشخص می‌کنه عنصر چقدر از فضای اضافی رو بگیره

```css
.flex-container div {
  flex-grow: 1;
}
```

---

### 2️⃣ `flex-shrink`

📌 اگه جا کم باشه، چقدر کوچیک بشه؟

---

### 3️⃣ `flex-basis`

📌 سایز اولیه‌ی آیتم قبل از رشد یا جمع‌شدن

```css
flex-basis: 200px;
```

---

### 🔄 خلاصه: می‌تونی همه رو با یک خط بنویسی:

```css
flex: 1 0 200px;  /* grow - shrink - basis */
```

---

## 📝 تمرین جلسه ۱۶:

۱. یه کانتینر بساز با ۳ تا `div` داخلش
۲. بهش `display: flex` بده
۳. تمرین کن با اینا بازی کنی:

* `flex-direction: row/column`
* `justify-content: space-between / center`
* `align-items: center`
* `gap`
* `flex-grow` برای هر آیتم

---
