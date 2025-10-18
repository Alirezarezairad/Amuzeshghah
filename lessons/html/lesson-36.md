# 🛒   پروژه نهایی – ساخت فروشگاه فقط با HTML

**(بدون CSS و JS، فقط با HTML، ولی خیلی حرفه‌ای)**

✅ این پروژه ترکیبیه از همه‌ی درس‌های قبلی

✅ بهت نشون می‌ده که حتی با خود HTML هم می‌تونی ساختار یه فروشگاه واقعی بسازی

---

## 🧩 هدف پروژه:

🔸 ساخت یک صفحه فروشگاه شامل:

1. هدر (Header)
2. منوی ناوبری (Navigation)
3. بنر تبلیغاتی
4. بخش محصولات (کارت محصول)
5. فرم جستجو
6. فرم تماس با ما
7. فوتر سایت

---

## 🧱 ساختار صفحه فروشگاه

### ✅ ۱. هدر:

```html
<header>
  <h1>🛍️ فروشگاه آنلاین من</h1>
</header>
```

---

### ✅ ۲. منوی ناوبری:

```html
<nav>
  <ul>
    <li><a href="#">خانه</a></li>
    <li><a href="#">محصولات</a></li>
    <li><a href="#">درباره ما</a></li>
    <li><a href="#">تماس با ما</a></li>
  </ul>
</nav>
```

---

### ✅ ۳. بنر معرفی:

```html
<section>
  <h2>🎉 فروش ویژه تابستانه</h2>
  <p>تا ۵۰٪ تخفیف روی محصولات منتخب!</p>
</section>
```

---

### ✅ ۴. بخش محصولات:

```html
<section>
  <h2>📦 محصولات ما</h2>

  <article itemscope itemtype="https://schema.org/Product">
    <h3 itemprop="name">کفش ورزشی</h3>
    <img src="shoe.webp" width="300" height="200" alt="کفش ورزشی" itemprop="image">
    <p itemprop="description">سبک، راحت و بادوام</p>
    <span itemprop="price">۲,۵۰۰,۰۰۰ تومان</span>
  </article>

  <article itemscope itemtype="https://schema.org/Product">
    <h3 itemprop="name">کوله‌پشتی لپ‌تاپ</h3>
    <img src="bag.webp" width="300" height="200" alt="کوله‌پشتی لپ‌تاپ" itemprop="image">
    <p itemprop="description">ضد آب، با فضای زیاد</p>
    <span itemprop="price">۱,۸۰۰,۰۰۰ تومان</span>
  </article>
</section>
```

---

### ✅ ۵. فرم جستجو:

```html
<form>
  <label for="search">جستجوی محصول:</label>
  <input type="text" id="search" name="search" placeholder="مثلاً کفش" required>
  <button type="submit">🔍 جستجو</button>
</form>
```

---

### ✅ ۶. فرم تماس با ما:

```html
<form>
  <label for="name">نام:</label>
  <input type="text" id="name" name="name" required><br>

  <label for="email">ایمیل:</label>
  <input type="email" id="email" name="email" required><br>

  <label for="message">پیام:</label>
  <textarea id="message" name="message" rows="4" required></textarea><br>

  <button type="submit">📨 ارسال</button>
</form>
```

---

### ✅ ۷. فوتر:

```html
<footer>
  <p>📧 ایمیل پشتیبانی: support@mysite.com</p>
  <p>© 2025 تمامی حقوق محفوظ است</p>
</footer>
```

---

## 🧪 تمرین پروژه‌ای:

✅ تمرین ۱: کل صفحه فروشگاه رو تو یه فایل `shop.html` بساز

✅ تمرین ۲: حداقل ۳ محصول با ساختار microdata اضافه کن

✅ تمرین ۳: فرم جستجو و فرم تماس رو کامل کن

✅ تمرین ۴: از تگ‌های semantic مثل `<header>`, `<main>`, `<article>` استفاده کن

✅ تمرین ۵: صفحه‌ت رو توی مرورگر باز کن و تست کن

---

## 🎓 تبریک! تو الان…

✅ ساختار کامل صفحات وب رو بلدی

✅ می‌تونی پروژه کامل HTML فقط با تگ‌های حرفه‌ای بسازی

✅ آماده‌ای برای ورود به دنیای CSS و طراحی حرفه‌ای ظاهر سایت

---
