# ✅ جلسه 21: transition و animation در CSS

(افکت‌های نرم و انیمیشن‌های جذاب، بدون نیاز به JavaScript! ⚡)

---

## 🎯 تفاوت transition و animation چیه؟

| ویژگی                  | transition | animation |
| ---------------------- | ---------- | --------- |
| 🔄 تغییر بین دو حالت   | ✅          | ✅         |
| 🔁 حرکت مداوم و پیچیده | ❌          | ✅         |
| شروع با hover یا focus | ✅          | ❌         |
| دارای فریم‌های مختلف   | ❌          | ✅         |

---

## ✳️ بخش 1: Transition

### 💡 چی هست؟

Transition یعنی وقتی یه ویژگی CSS تغییر می‌کنه (مثلاً رنگ یا سایز)،
به‌جای اینکه ناگهانی تغییر کنه، **نرم و با زمان** تغییر کنه.

---

### ✅ مثال ساده:

```css
button {
  background-color: teal;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: darkcyan;
}
```

📌 یعنی وقتی موس رفت روی دکمه، به‌جای تغییر سریع رنگ، **توی ۰.۳ ثانیه و با نرمی** تغییر کنه.

---

### ⏱ مشخصات Transition:

```css
transition: ویژگی زمان نوع‌حرکت تاخیر;
```

مثلاً:

```css
transition: all 0.5s ease-in-out 0.2s;
```

| بخش                            | توضیح                                     |
| ------------------------------ | ----------------------------------------- |
| `all` یا اسم ویژگی مثل `color` | چی تغییر کنه                              |
| `0.5s`                         | چند ثانیه طول بکشه                        |
| `ease-in-out`                  | نوع حرکت نرم (ease, linear, ease-in, ...) |
| `0.2s`                         | تاخیر قبل از شروع                         |

---

## 🧩 تمرین Transition:

```css
.box {
  width: 100px;
  height: 100px;
  background: tomato;
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.1);
}
```

✅ وقتی موس بره روش، با نرمی بزرگ‌تر می‌شه

---

## ✳️ بخش 2: Animation

### 💡 چی هست؟

Animation یعنی ساخت انیمیشن‌های چندمرحله‌ای با استفاده از **keyframes**

---

### ✅ مثال ساده:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.box {
  animation: fadeIn 1s ease-out;
}
```

📌 وقتی `.box` لود بشه، با افکت محو و بالا اومدن ظاهر می‌شه!

---

### ✨ ویژگی‌های animation:

```css
animation: name duration timing-function delay iteration direction;
```

مثال:

```css
animation: spin 2s linear infinite;
```

🔁 یعنی:

* اسم انیمیشن: `spin`
* مدت: ۲ ثانیه
* نوع حرکت: `linear`
* تعداد: `infinite` = بی‌نهایت تکرار

---

## 🌀 تمرین انیمیشن چرخشی:

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid lightgray;
  border-top: 5px solid teal;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

---

## 📝 تمرین جلسه ۲۱:

۱. یک دکمه با افکت hover و `transition` بساز
۲. یک باکس بساز که با `animation` fade in بشه
۳. یک دایره‌ی لودینگ بچرخون با `@keyframes` و `infinite`

---
