# ✅ جلسه 22: طراحی دکمه‌های متحرک با CSS

(دکمه‌هایی که می‌لرزن، می‌چرخن، رنگ عوض می‌کنن و کلی افکت دارن! 🔘💥)

---

## 🎯 هدف چیه؟

یاد می‌گیری چجوری با ترکیب:

* `transition`
* `transform`
* `animation`
* `hover` و `active`

دکمه‌هایی بسازی که حس زنده بودن بدن به سایتت ✅

---

## ✳️ دکمه ساده با افکت رنگ و سایز:

```css
.btn {
  background: #007bff;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn:hover {
  background: #0056b3;
  transform: scale(1.05);
}
```

✅ دکمه با حرکت نرم و بزرگ‌شدن موقع hover

---

## ✳️ دکمه لرزشی هنگام کلیک:

```css
.btn:active {
  animation: shake 0.3s;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
```

---

## ✳️ دکمه نئون با text-shadow:

```css
.btn-neon {
  background: black;
  color: #0ff;
  border: 2px solid #0ff;
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
  transition: 0.3s;
}

.btn-neon:hover {
  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
}
```

---

## ✳️ دکمه با border متحرک:

```css
.btn-border {
  position: relative;
  padding: 12px 25px;
  background: white;
  color: black;
  border: 2px solid black;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}

.btn-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: black;
  transition: left 0.3s ease;
  z-index: -1;
}

.btn-border:hover::before {
  left: 0;
}

.btn-border:hover {
  color: white;
}
```

✅ یه افکت خیلی حرفه‌ای و نرم فقط با CSS ✨

---

## 📝 تمرین جلسه ۲۲:

۱. یکی از این دکمه‌ها رو بساز و سفارشی کن
۲. رنگ‌ها، border-radius، فونت و سایز رو عوض کن
3. سعی کن برای هر حالت (`hover`, `active`, `focus`) افکت خاص بزاری
4. اگه خواستی، از `@keyframes` انیمیشن خاص خودتو بساز!

---
