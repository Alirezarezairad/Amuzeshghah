
# ✅ جلسه 14: ساخت منوی ساده با CSS

(منوی افقی، زیبا، واکنش‌گرا و فقط با CSS! 🍔)

---

## 🎯 منو چیه؟ چطوری کار می‌کنه؟

منو یه لیسته از لینک‌هاست که به کاربر کمک می‌کنه بین صفحات مختلف سایت جابه‌جا بشه.

ما الان با ترکیب تگ‌های `ul`, `li`, `a` یه منوی افقی ساده می‌سازیم و با CSS استایلش می‌دیم.

---

## 🧱 ساختار HTML منو:

```html
<ul class="menu">
  <li><a href="#">خانه</a></li>
  <li><a href="#">درباره ما</a></li>
  <li><a href="#">خدمات</a></li>
  <li><a href="#">تماس با ما</a></li>
</ul>
```

---

## 🎨 استایل‌دهی با CSS:

```css
.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #333;
  display: flex;
  justify-content: center;
}

.menu li {
  margin: 0;
}

.menu a {
  display: block;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.menu a:hover {
  background-color: #555;
}
```

---

## 📱 نکات مهم:

| بخش                       | توضیح                                |
| ------------------------- | ------------------------------------ |
| `display: flex`           | برای افقی شدن منو                    |
| `justify-content: center` | وسط‌چین کردن آیتم‌ها                 |
| `padding`                 | ایجاد فضای بین متن و کادر            |
| `transition`              | افکت نرم هنگام hover                 |
| `:hover`                  | تغییر رنگ موقع رفتن موس روی گزینه‌ها |

---

## 🧪 تمرین جلسه ۱۴:

۱. منوی بالا رو بساز
۲. با رنگ‌ها و فونت‌های دلخواه خودت سفارشی کن
۳. جای منو رو تغییر بده (چپ، راست، وسط)
۴. سعی کن دکمه‌ی فعال (active) رو مشخص کنی با کلاس دستی:

```html
<li><a class="active" href="#">خانه</a></li>
```

```css
.menu a.active {
  background-color: #007bff;
}
```

---
