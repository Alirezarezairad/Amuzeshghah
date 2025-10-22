
### 🧩 درس ۱۹ — تفاوت `null` و `undefined` (مقادیر خالی/از دست رفته) (صفحهٔ ۱۱۳ تا ۱۱۵)

این درس به طور دقیق تفاوت‌های دو مقدار اصلی در جاوااسکریپت که نشان‌دهندهٔ «خالی بودن» یا «عدم تخصیص مقدار» هستند، می‌پردازد.

### 🎯 هدف درس

هدف اصلی این درس این است که شما:

1. تفاوت اساسی بین `null` (تهی بودن عامدانه) و `undefined` (عدم تخصیص مقدار) را درک کنید.

2. بدانید جاوااسکریپت چه زمانی به طور خودکار `undefined` را اختصاص می‌دهد.

3. بدانید شما به عنوان برنامه‌نویس چه زمانی باید به صورت دستی `null` را تخصیص دهید.

4. نحوهٔ رفتار این دو مقدار را با عملگرهای منطقی و عملگر `typeof` درک کنید.


---

### 🧠 توضیح مفهومی ساده و روان با مثال‌های واقعی

تصور کنید در حال بررسی یک **کمد لباس** در اتاق هستید:

1. **`undefined` (نامشخص):**

   * قفسهٔ کمد **وجود دارد، اما هنوز هیچ چیز داخل آن نگذاشته‌اید**.

   * در برنامه‌نویسی، `undefined` یعنی: **«اینجا باید مقداری باشد، اما هنوز مقداری به آن تخصیص داده نشده است.»** این حالت اغلب توسط خود جاوااسکریپت ایجاد می‌شود.

2. **`null` (تهی):**

   * روی قفسه یک برچسب زده‌اید: **«عمداً خالی»**.


   * در برنامه‌نویسی، `null` یعنی: **«می‌دانم اینجا چیزی نیست—و خودم عمداً هیچ چیز قرار نداده‌ام.»** (تخصیص آگاهانه توسط برنامه‌نویس)

**تفاوت کلیدی:** `undefined` یعنی «هنوز تعیین/تخصیص نشده»، `null` یعنی «عمداً هیچ است».

---

### ⚙️ آموزش گام‌به‌گام با همه مفاهیم و زیر‌بخش‌ها

#### ۱) متغیر تعریف‌شده بدون مقدار → `undefined`

```javascript
let userName;
console.log(userName); // undefined
```

#### ۲) پارامترهای تابعی که آرگومان نگرفته‌اند → `undefined`

```javascript
function printPersonInformation(firstName, lastName, age) {
  console.log(`Vorname: ${firstName}`);
  console.log(`Nachname: ${lastName}`);
  console.log(`Alter: ${age}`);
}

printPersonInformation('Max', 'Mustermann');
// Alter: undefined
```

#### ۳) دسترسی به چیزِ ناموجود (ویژگی شیء/اندیس آرایه) → `undefined`

```javascript
const person = { name: 'Max' };
console.log(person.age); // undefined (ویژگی وجود ندارد)

const nums = [10, 20, 30];
console.log(nums[5]);    // undefined (اندیس خارج از محدوده)
```

#### ۴) تخصیص عامدانهٔ `null`

```javascript
let userObject = { id: 4711, name: 'Max' };
// ... بعد از اتمام کار:
userObject = null;       // تهی‌سازی عامدانهٔ ارجاع
console.log(userObject); // null
```

#### ۵) `null` در DOM و برخی APIها

```javascript
const el = document.getElementById('nonExistent');
if (el !== null) {
  el.className = 'border';
} else {
  console.log('Element nicht gefunden (null zurückgegeben)');
}
```

#### ۶) رفتار با `typeof`

```javascript
let a = undefined;
let b = null;

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"  ← میراث/باگ تاریخی زبان
```

> نکته: برای تشخیص `null` از مقایسهٔ مستقیم `x === null` استفاده کنید.

#### ۷) مقایسهٔ نرم/سخت

```javascript
console.log(null == undefined);  // true  (نرم)
console.log(null === undefined); // false (سخت‌گیرانه: نوع‌ها متفاوت‌اند)
```

#### ۸) رفتار منطقی و مقادیر Falsy

هر دو `null` و `undefined`، **Falsy** هستند:

```javascript
console.log(!null);      // true
console.log(!undefined); // true

// عملگر && مقدار falsy را زودبرگشتی برمی‌گرداند:
console.log(null && 'Max');       // null
console.log(undefined && 'Max');  // undefined

// عملگر ?? و ??=
let v = null ?? 'default'; // "default" فقط وقتی null/undefined باشد جایگزین می‌کند
let tries;                 // undefined
tries ??= 5;               // 5
```

---

### 📊 جداول مرور سریع

#### جدول ۱: تفاوت‌های کلیدی

| ویژگی                | `undefined`            | `null`                    |
| -------------------- | ---------------------- | ------------------------- |
| معنی                 | تخصیص‌نیافته/نامشخص    | تهیِ عامدانه              |
| چه کسی تعیین می‌کند؟ | موتور JS (به‌طور ضمنی) | برنامه‌نویس (صریح)        |
| `typeof`             | `"undefined"`          | `"object"` (میراث تاریخی) |
| برابری نرم با دیگری  | با `null` برابر است    | با `undefined` برابر است  |

#### جدول ۲: رفتار منطقی

| عبارت        | نتیجه                                         | توضیح                  |
| ------------ | --------------------------------------------- | ---------------------- |
| `!undefined` | `true`                                        | `undefined`، falsy است |
| `!null`      | `true`                                        | `null`، falsy است      |
| `x && null`  | `null` (اگر `x` truthy باشد)                  | AND کوتاه‌مدار         |
| `x ?? y`     | `x` مگر آنکه `x` یکی از `null/undefined` باشد | Nullish coalescing     |

#### جدول ۳: رایج‌ترین منابع `undefined`

| موقعیت                     | مثال                                     |
| -------------------------- | ---------------------------------------- |
| متغیر اعلان‌شده بدون مقدار | `let x; // undefined`                    |
| پارامتر بدون آرگومان       | `fn(a, b)` ولی فقط `fn(10)` فراخوانی شود |
| ویژگی شیء ناموجود          | `obj.missingProp`                        |
| اندیس خارج از محدوده       | `[1,2,3][10]`                            |

---

### 💬 نکات طلایی استاد

1. **برای «پاک‌کردن ارجاع» از `null` استفاده کن.**
 بعد از اتمام کار با منابع (DOM، اتصال‌ها، کش‌ها) ارجاع را `null` کن تا GC آسان‌تر جمع کند.

2. **به `typeof null` اعتماد نکن.**
 تنها موردی که `typeof` روی مقدار اولیه، `"object"` می‌دهد. برای تست `null` از `x === null` استفاده کن.

3. **از `??`/`??=` بجای `||` وقتی صفر/رشتهٔ خالی/false معتبرند استفاده کن.**
 `||` همهٔ falsy‌ها را جایگزین می‌کند؛ `??` فقط `null/undefined` را.

---

### 🧪 تمرین‌ها

**تمرین ۱ (اجباری):**

```javascript
let city;
let country = null;
console.log(typeof city);    // ؟
console.log(typeof country); // ؟
```

**تمرین ۲ (اجباری):** نتیجهٔ `null === 0` و `null == 0` چیست و چرا؟

**تمرین ۳ (اجباری):**

```javascript
const settings = { theme: 'dark' };
console.log(settings.language); // ؟
```

**تمرین ۴ (اجباری):** کِی باید `null` را صریحاً تخصیص دهیم؟ یک مثال بزن.

**تمرین ۵ (تکمیلی):** خروجی `console.log(undefined || 42)` چیست و چرا؟

**تمرین ۶ (تکمیلی):** خروجی `[].pop()` چیست؟

**تمرین ۷ (تکمیلی):** اگر `document.getElementById('form-login')` عنصری نیابد، چه برمی‌گرداند و قبل از استفاده چه چکی بکنیم؟

**تمرین ۸ (تکمیلی):**

```javascript
let maxAttempts = undefined;
maxAttempts ??= 5;
console.log(maxAttempts); // ؟
```

---

### 💡 پروژهٔ کوچک: پاکسازی منابع

```javascript
// 1) منبع سنگین فرضی
let heavyResource = { id: 101, data: 'Some large configuration data' };
console.log(`Resource is defined: ${!!heavyResource}`); // true

// 2) متغیری که مقدار نگرفته است
let cleanupStatus;
console.log(`Cleanup status: ${cleanupStatus}`);        // undefined

// 3) پاکسازی عامدانهٔ منبع
heavyResource = null;
console.log(`Resource value after cleanup: ${heavyResource}`); // null
console.log(`Cleanup status after error: ${cleanupStatus}`);   // undefined
```

---

### 🧾 خلاصه (Cheat Sheet)

| مفهوم   | مقدار                        | تعریف                                    | `typeof`    | نکتهٔ کلیدی               |   |                 |
| ------- | ---------------------------- | ---------------------------------------- | ----------- | ------------------------- | - | --------------- |
| نامشخص  | `undefined`                  | تخصیص‌نیافته/فراموش‌شده                  | `undefined` | توسط JS/محیط ایجاد می‌شود |   |                 |
| تهی     | `null`                       | تهیِ عامدانه                             | `object`    | برای پاکسازی ارجاع‌ها     |   |                 |
| نرم/سخت | `null == undefined` → `true` | `null === undefined` → `false`           | —           | مراقب Coercion باشید      |   |                 |
| Nullish | `x ?? y`                     | فقط برای `null/undefined` جایگزین می‌شود | —           | با `                      |   | ` اشتباه نگیرید |

---

### 📚 آزمون پایانی (۱۰ سؤال)

1. کدام وضعیت معمولاً منجر به `undefined` می‌شود؟

الف) مقداردهی صریح با `null`

ب) اعلان بدون مقداردهی 

ج) داخل حلقه تعریف شود 

د) `typeof` روی تابع

2. خروجی `typeof null` چیست؟

الف) `null` 

ب) `undefined` 

ج) `object` 

د) `string`

3. کدام مقدار «نبودن عامدانه» است و باید صریحاً تخصیص یابد؟

الف) `undefined` 

ب) `void` 

ج) `null` 

د) `NaN`

4. `(null == undefined)`؟

   الف) `true` 

    ب) `false`

    ج) `NaN` 

    د) `Error`

5. خروجی دسترسیِ خارج از محدوده:


   `console.log([1,2,3][10]);`

   الف) `null` 

    ب) `0` 

    ج) `undefined` 

    د) `Error`

6. `document.getElementById('missing-id')` اگر چیزی نیابد؟


   الف) `{}` 

    ب) `undefined` 

    ج) `null` 

    د) `0`

7. نتیجهٔ `!null` و `!undefined` چیست؟

   الف) `false` 

    ب) `0` 

    ج) `true` 

    د) `NaN`

8. پارامتر سومِ تابعِ سه‌پارامتری وقتی با دو آرگومان صدا زده شود؟
   الف) `null` 

    ب) `""` 

    ج) `0` 

    د) `undefined`

9. چرا `(null === undefined)`، `false` است؟

   الف) چون هر دو falsy‌اند 

    ب) چون `null` به ۰ می‌شود 

    ج) چون نوع‌ها متفاوت‌اند 

    د) چون `undefined` همیشه `false` می‌شود

10. امن‌ترین دسترسی به `user.contact.email` وقتی `contact` ممکن است تهی باشد؟

    αλ) `user.contact && user.contact.email` 

     ب) `user.contact?.email` 

     ج) `user.contact.email || null` 

     د) الف و ب هر دو


---

### 📝 پاسخنامهٔ تشریحی

1. **ب** — اعلان بدون مقداردهی → `undefined`.

2. **ج** — میراث تاریخی: `typeof null === "object"`.

3. **ج** — `null` تهیِ عامدانه است.

4. **الف** — در مقایسهٔ نرم برابرند.

5. **ج** — اندیس نامعتبر آرایه → `undefined`.

6. **ج** — در DOM معمولاً `null` بازمی‌گردد.

7. **ج** — هر دو falsy‌اند، `!` آن‌ها را `true` می‌کند.

8. **د** — پارامتر بدون آرگومان → `undefined`.

9. **ج** — مقایسهٔ سخت مقدار و **نوع** را بررسی می‌کند.

10. **د** — هر دو الگو ایمن‌اند؛ `?.` راه‌حل مدرن و دقیق‌تری است.
