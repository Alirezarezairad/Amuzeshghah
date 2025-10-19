
---

# 🌈 درس 2 : تفاوت کپی آبجکت و آرایه در جاوااسکریپت

## 🎯 ایده‌ی اصلی

* وقتی با علامت `=` یک **آبجکت** یا **آرایه** را به متغیر دیگری می‌دهی، **فقط آدرسش** کپی می‌شود (هر دو به یک داده اشاره می‌کنند) ➝ به این می‌گوییم **Normal Assignment** یا **Shallow Copy (سطحی)**.

* وقتی با `Object.assign` (یا در کامنتِ کدت: `...spread`) کپی می‌گیری، یک **نمونه‌ی جدید و مستقل** ساخته می‌شود ➝ به این می‌گوییم **Deep Assignment** (در همین درس یعنی مستقل از مرجع قبلی).

> ✅ طبق کد تو:

> برای **آبجکت**: `aPerson = Object.assign({}, person)`

> برای **آرایه**: `aNumber = Object.assign([], number)`

---

## 🧩 بخش ۱ — Object (آبجکت)

### 🔹 حالت Normal Assignment (با `=`)

* **کاربرد در کد**: (کامنت شده بود)

  ```js
  // aPerson = person;
  ```

* **معنا**: فقط **آدرس حافظه** کپی می‌شود.

  اگر `aPerson.name` را عوض کنی، `person.name` هم عوض می‌شود؛ چون هر دو به **یک آبجکت** اشاره می‌کنند.

📦 مثال کوتاه برای تمرین:

```js
let person = { name: "Hadi" };
let aPerson = person; // فقط آدرس
aPerson.name = "Mahdi";
console.log(person.name);   // Mahdi ✅
console.log(aPerson.name);  // Mahdi ✅
```

---

### 🔹 حالت Deep Assignment (با `Object.assign`)

* **کاربرد در کد**:

  ```js
  aPerson = Object.assign({}, person);
  aPerson.name = "Mahdi";
  console.log(person);   // { name: "Hadi" }
  console.log(aPerson);  // { name: "Mahdi" }
  ```

* **معنا**: یک **آبجکت جدید و مستقل** ساخته می‌شود.

  تغییرات روی `aPerson` دیگر روی `person` اثر ندارد. ✨

📦 تمرین کوتاه:

```js
let person = { name: "Hadi" };
let copy = Object.assign({}, person);
copy.name = "Reza";
console.log(person.name); // Hadi
console.log(copy.name);   // Reza
```

> ℹ️ در کامنت کدت گفته شده: «اگه مقداردهی نشه، `undefined` می‌مونه و خطا می‌ده.»

> معنی‌اش اینه که اگر این خط‌ها را **غیرفعال** کنی و قبل از مقداردهی به `aPerson` بخواهی `aPerson.name` را تغییر دهی، خطا می‌گیری.

> اما در **کد فعلی** چون `Object.assign` فعال است، مشکلی پیش نمی‌آید.

---

## 🧩 بخش ۲ — Array (آرایه)

### 🔹 حالت Normal Assignment (با `=`)

* **کاربرد در کد**: (کامنت شده بود)

  ```js
  // aNumber = number;
  ```

* **معنا**: فقط **آدرس آرایه** کپی می‌شود.

  تغییر در `aNumber` روی `number` هم اثر می‌گذارد.

📦 تمرین کوتاه:

```js
let number = [1, 2, 3];
let aNumber = number;   // فقط آدرس
aNumber[0] = 0;
console.log(number); // [0, 2, 3] ✅
```

---

### 🔹 حالت Deep Assignment (با `Object.assign`)

* **کاربرد در کد**:

  ```js
  aNumber = Object.assign([], number);
  aNumber[0] = 0;
  console.log(number); // [1, 2, 3]
  console.log(aNumber); // [0, 2, 3]
  ```

* **معنا**: یک **آرایه‌ی جدید و مستقل** ساخته می‌شود.

  تغییر در `aNumber` دیگر روی `number` اثر نمی‌گذارد. ✨

📦 تمرین کوتاه:

```js
let base = [10, 20, 30];
let copy = Object.assign([], base);
copy[1] = 999;
console.log(base); // [10, 20, 30]
console.log(copy); // [10, 999, 30]
```

> ℹ️ مشابه توضیح بالا: اگر قبل از مقداردهی به `aNumber` بخواهی به `aNumber[0]` دسترسی بگیری، خطا می‌گیری.

> ولی در **کد فعلی** چون `Object.assign` فعال است، مقدار دارد و خطا نمی‌آید.

---

## 💡 نکات آموزشی (دقیقاً همان‌هایی که در کدت اشاره شده)

* با `=` فقط **آدرس** کپی می‌شود (هر دو متغیر به یک داده اشاره می‌کنند).

* برای کپی درست و مستقل، از روش‌هایی مثل:

  * `Object.assign({}, person)` برای آبجکت

  * `Object.assign([], number)` برای آرایه

  * یا طبق کامنت خودت: **اسپرد**: `{...person}` و `[...number]`

* **کاربرد واقعی**:

  * اگر فقط یک **نام مستعار (alias)** می‌خواهی → **Normal Assignment** کافی است.

  * اگر داده‌ها باید **کاملاً مستقل** باشند (مثلاً نسخه‌ی پشتیبان فرم) → **Deep Copy** لازم است.

---

## ✏️ مینی تمرین‌های مرحله‌ای (همه کوچک و کاربردی)

1. تغییر مستقل اسم در کپی آبجکت:

```js
let p = { name: "Hadi" };
let pCopy = Object.assign({}, p);
pCopy.name = "Mahdi";
console.log(p.name);   // Hadi
console.log(pCopy.name); // Mahdi
```

2. تغییر مستقل اولین عضو آرایه:

```js
let arr = [1,2,3];
let arrCopy = Object.assign([], arr);
arrCopy[0] = 100;
console.log(arr);     // [1,2,3]
console.log(arrCopy); // [100,2,3]
```

3. نمایش تفاوت Normal vs Deep در آبجکت:

```js
let x = { v: 10 };
let alias = x; // آدرس مشترک
let clone = Object.assign({}, x); // مستقل
alias.v = 99;
clone.v = 77;
console.log(x.v);     // 99
console.log(alias.v); // 99
console.log(clone.v); // 77
```

---

## 🧩 آزمون بخش (۱۵ سؤال — فقط از همین درس)

1. وقتی `aPerson = person` باشد، تغییر `aPerson.name` روی `person.name` اثر می‌گذارد؟ چرا؟

2. در کدت، برای ساختن کپی مستقل آبجکت از چه دستوری استفاده شده است؟

3. در کدت، برای ساختن کپی مستقل آرایه از چه دستوری استفاده شده است؟

4. اگر `aPerson` مقداردهی نشده باشد و بنویسیم `aPerson.name = "X"`, چه می‌شود؟

5. فرق اصلی Normal Assignment و Deep Assignment چیست؟

6. وقتی می‌گیم «آدرس حافظه کپی می‌شود» یعنی چه؟

7. در مثال آرایه، بعد از `aNumber = Object.assign([], number)` اگر `aNumber[0] = 0` شود، مقدار `number[0]` چیست؟

8. در حالت Normal Assignment برای آرایه، اگر `aNumber[1] = 9` کنیم، آیا `number[1]` هم تغییر می‌کند؟

9. در کد، خروجی لاگ `console.log(person)` بعد از `aPerson.name = "Mahdi"` در حالت Deep Assignment چیست؟

10. یکی از روش‌هایی که در کامنت کدت برای کپی مستقل اشاره شده (غیر از `Object.assign`) را نام ببر.

11. چه زمانی Normal Assignment «کافی» است؟ (طبق کاربرد واقعی‌ای که در کدت نوشته‌ای)

12. چه زمانی Deep Copy «لازم» است؟ (طبق کاربرد واقعی‌ای که در کدت نوشته‌ای)

13. جمله‌ی «هر دو متغیر به همون داده‌ی اصلی اشاره می‌کنن» به کدام حالت مربوط است؟

14. در کدت، چرا گفته شده «اگر مقداردهی نشوند، `undefined` هستند و خطا می‌دهد»؟

15. اگر بخواهیم آرایه‌ای مستقل از `number` داشته باشیم تا تغییرش اثر نگذارد، کدام خط کد درست است؟ (یکی بنویس)

---

## ✅ پاسخ‌نامه کوتاه

1. بله؛ چون در Normal Assignment فقط آدرس کپی می‌شود و هر دو به یک آبجکت اشاره دارند.

2. `aPerson = Object.assign({}, person)`

3. `aNumber = Object.assign([], number)`

4. خطا می‌دهد؛ چون `aPerson` هنوز `undefined` است و property ندارد.

5. در Normal فقط آدرس مشترک است؛ در Deep نمونه‌ی جدید و مستقل ساخته می‌شود.

6. یعنی متغیر جدید به همان داده‌ی قبلی اشاره می‌کند، نه اینکه داده‌ی تازه بسازد.

7. `number[0]` همان مقدار قبلی می‌ماند (`1`).

8. بله؛ چون هر دو یک آرایه را نشان می‌دهند.

9. `{ name: "Hadi" }` (در حالت Deep مستقل است و تغییر نمی‌کند)

10. **اسپرد**: `{...person}` برای آبجکت یا `[...number]` برای آرایه.

11. وقتی فقط یک **نام مستعار (alias)** لازم داری و استقلال مهم نیست.

12. وقتی می‌خواهی داده‌ها **مستقل** باشند (مثل نسخه‌ی پشتیبان فرم).

13. مربوط به **Normal Assignment**.

14. چون اگر خط مقداردهی (مثل `Object.assign`) را غیرفعال کنیم و بلافاصله به property دسترسی بزنیم، متغیر هنوز `undefined` است.

15. مثلاً: `let aNumber = Object.assign([], number);`

---

## 🗒️ Cheat-Sheet (خلاصه تقلبی)

* **Normal Assignment (`=`)**: فقط **آدرس** کپی می‌شود ➝ تغییر در یکی = تغییر در دیگری.

* **Deep Assignment با `Object.assign`**:

  * آبجکت: `const copy = Object.assign({}, person);`

  * آرایه: `const copy = Object.assign([], number);`

* **اسپرد (طبق کامنت کدت)**:

  * آبجکت: `const copy = { ...person };`

  * آرایه: `const copy = [ ...number ];`

* **هشدار**: قبل از دسترسی به property/اندیس، مطمئن شو متغیر مقداردهی شده؛ وگرنه `undefined` → خطا.

* **کاربرد**:

  * **Alias** بخواهی → Normal کافی

  * **استقلال داده** بخواهی → Deep Copy لازم

---
