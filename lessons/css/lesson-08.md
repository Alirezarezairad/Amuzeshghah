
# ✅ جلسه 8: margin, padding, border — کنترل حرفه‌ای فواصل و قاب‌ها



## 🧠 هدف این جلسه:

✔ دقیق بفهمی margin و padding چجوری کار می‌کنن

✔ یاد بگیری چجوری فقط بالا، پایین، راست یا چپ رو تنظیم کنی

✔ با `border` حرفه‌ای بازی کنی و استایل بدهی 😎

---

## ✳️ مرور سریع:

| ویژگی     | کجا اثر می‌ذاره؟ |
| --------- | ---------------- |
| `padding` | فضای داخلی عنصر  |
| `margin`  | فضای بیرونی عنصر |
| `border`  | قاب اطراف عنصر   |

---

## 🧩 ترتیب جهت‌ها در CSS (مهم!)

وقتی چهار مقدار پشت‌سرهم می‌نویسی، ترتیبش اینه:

```
بالا - راست - پایین - چپ  
(top - right - bottom - left)
```

مثلاً:

```css
div {
  margin: 10px 20px 30px 40px;
}
```

✅ یعنی:

🔹 بالا: 10px

🔹 راست: 20px

🔹 پایین: 30px

🔹 چپ: 40px


---

## 🧪 انواع نوشتن margin و padding

### 1️⃣ تک‌جهت:

```css
margin-top: 20px;
padding-left: 10px;
```

---

### 2️⃣ دو مقدار:

```css
margin: 10px 20px;
```

✅ یعنی:

بالا و پایین = 10px

چپ و راست = 20px

---

### 3️⃣ سه مقدار:

```css
padding: 10px 20px 30px;
```

✅ یعنی:

بالا = 10px

چپ و راست = 20px

پایین = 30px

---

### 4️⃣ چهار مقدار:

```css
padding: 10px 15px 20px 25px;
```

✅ بالا، راست، پایین، چپ به ترتیب

---

## 🎨 Border – قاب دور عنصر

```css
div {
  border: 2px solid red;
}
```

📌 سه بخش داره:

1. **ضخامت (2px)**
2. **نوع (solid, dashed, dotted)**
3. **رنگ (red)**

---

### 🎨 انواع استایل border:

```css
border: 3px dashed green;
border: 1px dotted blue;
border: 4px double purple;
```

---

### ✂ تکه‌تکه کردن border:

```css
border-top: 2px solid red;
border-bottom: none;
```

---

## 📝 تمرین جلسه ۸:

۱. یه `div` طراحی کن که:

* `padding` بالا و پایین = 20px

* `margin` چپ و راست = 30px

* `border` فقط بالا و پایین داشته باشه

* استایلش جذاب و رنگی باشه

مثلاً:

```css
div {
  padding: 20px 0;
  margin: 0 30px;
  border-top: 3px solid blue;
  border-bottom: 3px solid blue;
}
```

---