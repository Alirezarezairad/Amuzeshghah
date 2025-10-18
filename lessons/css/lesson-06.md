## 🎯 چرا فونت و متن مهمه؟

چون متن‌ها توی سایت، مثل صدای ما هستن!

وقتی متن زیبا، مرتب و خوندنی باشه → کاربر با لذت می‌خونه 😍

و وقتی فونت بد، سایز اشتباه، یا فاصله بد باشه → کاربر سریع می‌ره! 😬

---

## 🧠 ویژگی‌های مهم برای کنترل متن و فونت در CSS:

---

### 1️⃣ `font-family`: انتخاب فونت

```css
p {
  font-family: Tahoma, sans-serif;
}
```

📌 چند فونت پشت‌سرهم می‌نویسی → اگه اولی نبود، بعدی استفاده می‌شه

🔹 فونت‌های معروف: `Arial`, `Tahoma`, `Verdana`, `Georgia`, `Times New Roman`

---

### 2️⃣ `font-size`: اندازه فونت

```css
h1 {
  font-size: 24px;
}
```

🔹 با واحدهایی مثل `px`, `em`, `rem` قابل تنظیمه

---

### 3️⃣ `font-weight`: ضخامت متن

```css
h2 {
  font-weight: bold; /* یا عددی مثل 400, 600, 900 */
}
```

🔹 مقادیر: `normal`, `bold`, `lighter`, یا عددی از `100` تا `900`

---

### 4️⃣ `font-style`: حالت ایتالیک

```css
p {
  font-style: italic;
}
```

---

### 5️⃣ `text-align`: ترازبندی متن

```css
p {
  text-align: center;
}
```

🔹 مقادیر: `left`, `right`, `center`, `justify`

---

### 6️⃣ `text-decoration`: خط روی متن

```css
a {
  text-decoration: none;
}
```

🔹 مقادیر: `none`, `underline`, `line-through`, `overline`

---

### 7️⃣ `line-height`: فاصله بین خطوط

```css
p {
  line-height: 1.8;
}
```

🔹 عدد بیشتر = متن خواناتر

---

### 8️⃣ `letter-spacing` و `word-spacing`: فاصله بین حروف و کلمات

```css
h1 {
  letter-spacing: 2px;
  word-spacing: 5px;
}
```

---

## ✨ ترکیب همه‌ی ویژگی‌ها:

```css
p {
  font-family: "Tahoma", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: justify;
  line-height: 1.6;
}
```

---

## 📝 تمرین جلسه ۶:

۱. یک فایل HTML بساز با چند `h1`, `h2`, `p`
۲. روی هرکدوم فونت و استایل مخصوص بذار:

* یکی center باشه
* یکی ایتالیک
* یکی فونت bold
* یکی فونت فارسی اگه داری
* یکی فاصله بین خطوط و حروف بیشتر داشته باشه

---
