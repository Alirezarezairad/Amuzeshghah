
# ✅ جلسه 13: Pseudo-Class ها در CSS

(جادوی حالت‌های خاص! ✨)

---

## 🎩 Pseudo-Class یعنی چی؟

Pseudo-Class (کلاس‌های شبه‌طور 😄) به CSS این امکان رو می‌دن که به **وضعیت خاص** یک عنصر واکنش نشون بده.
مثلاً:

* وقتی موس رفت روش
* وقتی روش کلیک شد
* وقتی اولین فرزنده
* وقتی فیلد پر شده
* و کلی حالت دیگه...

---

## 🎯 ساختار Pseudo-Class:

```css
selector:pseudo-class {
  /* استایل مخصوص اون حالت */
}
```

---

## 🎨 پرکاربردترین Pseudo-Class ها:

---

### 1️⃣ `:hover` → وقتی موس می‌ره روی عنصر

```css
button:hover {
  background-color: orange;
  cursor: pointer;
}
```

---

### 2️⃣ `:focus` → وقتی عنصر فوکوس می‌شه (مثلاً روش کلیک شده)

```css
input:focus {
  border-color: blue;
  outline: none;
  box-shadow: 0 0 5px skyblue;
}
```

---

### 3️⃣ `:active` → لحظه‌ای که روی عنصر کلیک می‌کنی

```css
button:active {
  transform: scale(0.95);
}
```

---

### 4️⃣ `:visited` و `:link` → وضعیت لینک‌ها

```css
a:link {
  color: blue;
}

a:visited {
  color: purple;
}
```

---

### 5️⃣ `:first-child` → وقتی عنصری اولین بچه‌ی والدشه

```css
p:first-child {
  color: red;
}
```

---

### 6️⃣ `:last-child` → آخرین بچه‌ی یک والد

```css
li:last-child {
  font-weight: bold;
}
```

---

### 7️⃣ `:nth-child(n)` → فرزند شماره n‌ام

```css
li:nth-child(3) {
  color: green;
}
```

---

### 8️⃣ `:checked` → برای checkbox یا radio انتخاب‌شده

```css
input[type="checkbox"]:checked {
  outline: 2px solid lime;
}
```

---

### 9️⃣ `:disabled` و `:enabled` → برای کنترل فیلدهایی که فعال/غیرفعال هستن

```css
input:disabled {
  background-color: #eee;
  color: #aaa;
}
```

---

## 🧪 تمرین جلسه ۱۳:

۱. یک لیست `ul` بساز با چند `li`

* به اولین آیتم رنگ قرمز بده
* به سومین آیتم رنگ سبز
* به آخرین آیتم فونت bold

۲. یک فرم بساز که:

* وقتی input فوکوس شد → border آبی بشه
* وقتی checkbox تیک خورد → رنگش تغییر کنه

---
