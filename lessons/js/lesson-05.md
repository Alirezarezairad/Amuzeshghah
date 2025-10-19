
---

# 🎓 درس ۵ — کار با رشته‌ها (Strings) در JavaScript

## 🎯 هدف درس

یاد بگیری چطور متن‌ها رو:

* داخل رشته بنویسی (حتی با کاراکترهای خاص مثل `'`)
* به هم **وصل** کنی (Concatenation)
* با **Template Literals** تمیز و خوانا بسازی
* طول متن رو بگیری، حروف رو بزرگ/کوچیک کنی، کاراکتر خاص بگیری
* دنبال کلمه بگردی، **بُرش** بزنی، به **آرایه** تبدیل کنی، **جایگزین** کنی و وجود کلمه‌ای رو **چک** کنی 💪

> متغیرهای این درس (بر اساس کد خودت):
> `firtstName`, `lastName`, `age`, `job`, `fName`, `str`, `result`
> (دقت کن: در کدت اسم متغیر «first» به‌صورت `firtstName` نوشته شده و ما عین خودش استفاده می‌کنیم.)

---

## 1) Escape Character — کاراکتر فرار `\` ✨

📌 **کاربرد:** وقتی می‌خوای داخل رشته از `'` یا `"` استفاده کنی، قبلش `\` می‌ذاری تا خطا نشه.

کدِ تو:

```js
result = 'it\'s a great day to learn javascript';
console.log(result);
```

🎈 مثال واقعی: مثل گذاشتن «سپر» جلوی علامت خاص تا رشته نشکنه.

✅ تمرین کوچولو:

```js
let msg = "He said: \"Hello!\"";
console.log(msg);
```

---

## 2) Concatenation — اتصال رشته‌ها با `+` ➕

📌 **کاربرد:** چند تکه متن رو به هم می‌چسبونی.

کدِ تو:

```js
result = firtstName + " " + lastName;
console.log(result);

result = "hello my name is " + firtstName + " " + lastName + 
         " and i am " + age + " years old and i am a " + job + ".";
console.log(result);
```

🎈 مثال واقعی: مثل وصل‌کردن تسبیح مهره‌ها با نخ.

✅ تمرین:

```js
let hello = "Hi " + firtstName + "!";
console.log(hello);
```

---

## 3) Template Literals — بک‌تیک و `${}` 🧩

📌 **کاربرد:** نوشتن متن‌های طولانی **خواناتر** و راحت‌تر.

کدِ تو:

```js
result = `hello my name is ${firtstName} ${lastName} and i am ${age} years old and i am a ${job}.`;
console.log(result);
```

🎈 مثال واقعی: مثل فرم آماده‌ای که فقط جاهای خالی‌ش رو پر می‌کنی.

✅ تمرین:

```js
let info = `Name: ${firtstName} ${lastName} | Job: ${job}`;
console.log(info);
```

---

## 4) ویژگی‌ها و متدهای رشته‌ها 🔧

### a) `length` — طول رشته

📌 **کاربرد:** تعداد کاراکترها (فاصله هم حساب می‌شود).

```js
result = fName.length;
console.log(result);
```

✅ تمرین:

```js
console.log("JavaScript".length);
```

---

### b) `toUpperCase()` — همه حروف بزرگ

```js
result = fName.toUpperCase();
console.log(result);
```

### c) `toLowerCase()` — همه حروف کوچک

```js
result = fName.toLowerCase();
console.log(result);
```

🎈 مثال: مثل نوشتن با ماژیک **فقط بزرگ** یا **فقط کوچک**.

✅ تمرین:

```js
console.log("HeLLo".toLowerCase());
console.log("coding".toUpperCase());
```

---

### d) دسترسی با ایندکس `[]` — گرفتن یک کاراکتر خاص

📌 **اینجا:** آخرین کاراکتر رشته

```js
result = fName[fName.length - 1];
console.log(result);
```

✅ تمرین:

```js
let word = "Hello";
console.log(word[0]); // H
```

---

### e) `indexOf()` — اولین موقعیت یک کلمه/حرف

```js
result = fName.indexOf('hashemi');
console.log(result);
```

### f) `lastIndexOf()` — آخرین موقعیت یک حرف

```js
result = fName.lastIndexOf("d");
console.log(result);
```

🎈 مثال: مثل پیدا کردن **اولین** و **آخرین** بلیت شماره‌دار در یک دسته.

✅ تمرین:

```js
console.log("ababa".indexOf("a"));     // 0
console.log("ababa".lastIndexOf("a")); // 4
```

---

### g) `slice(start, end)` — برش بخشی از رشته

📌 **اینجا:** کاراکترهای 0 تا 3 → `"Hadi"`

```js
result = fName.slice(0,4);
console.log(result);
```

✅ تمرین:

```js
console.log("JavaScript".slice(4,10)); // "Script"
```

---

### h) `split(sep)` — تبدیل رشته به آرایه

📌 **اینجا:** جداکننده‌ی فاصله `" "`

```js
result = str.split(" ");
console.log(result);
```

🎈 مثال: جمله رو «کلمه کلمه» کن.

✅ تمرین:

```js
console.log("a,b,c".split(","));
```

---

### i) `replace(old, new)` — جایگزینی متن

📌 **اینجا:** `"Hadi"` با `"Mahdi"`

```js
result = fName.replace("Hadi","Mahdi");
console.log(result);
```

📌 نکتهٔ کدت: فقط **اولین** occurrence رو عوض می‌کنه (برای همه موارد باید از **regex** یا **replaceAll** استفاده کنی).

✅ تمرین:

```js
console.log("lala".replace("la","ma")); // "mala"
```

---

### j) `includes(sub)` — آیا زیررشته وجود دارد؟ (true/false)

```js
result = fName.includes("Hadi");
console.log(result);
```

✅ تمرین:

```js
console.log("hello".includes("ell")); // true
```

---

### k) `charAt(index)` — کاراکتر در ایندکس مشخص

📌 **اینجا:** کاراکتر 0 → `"H"`

```js
result = fName.charAt(0);
console.log(result);
```

✅ تمرین:

```js
console.log("World".charAt(4)); // d
```

---

## ✨ نکات آموزشی (عین کُد تو)

* **Concatenation (+)** روش قدیمی اتصال رشته‌هاست.

* **Template Literals** با بک‌تیک و `${}` روش مدرن و خواناترند.

* **length** یعنی تعداد کاراکترها (با فاصله‌ها).

* **slice** برای بریدن بخشی از متن.

* **split** برای تبدیل جمله به کلمات (آرایه).

* **replace** فقط اولین مورد را عوض می‌کند (برای همه موارد از regex یا `replaceAll` استفاده کن).

* **includes** خیلی سریع وجود یک زیررشته را چک می‌کند.

---

# 🧩 آزمون بخش (۱۵ سؤال فقط از همین درس)

1. چرا در رشتهٔ `'it\'s ...'` از `\` استفاده شده است؟

2. خروجی `firtstName + " " + lastName` چه می‌شود؟

3. فرق اصلی Concatenation و Template Literals در نوشتن جملهٔ طولانی چیست؟

4. `fName.length` چه چیزی برمی‌گرداند؟

5. `fName.toUpperCase()` چه می‌کند؟

6. چطور **آخرین کاراکتر** یک رشته را به‌دست می‌آوریم؟

7. `fName.indexOf('hashemi')` چه نوع مقداری برمی‌گرداند؟

8. `lastIndexOf("d")` به چه دردی می‌خورد؟

9. نتیجهٔ `fName.slice(0,4)` چیست (بر اساس همین کد)؟

10. `str.split(" ")` چه ساختاری تولید می‌کند؟

11. `fName.replace("Hadi","Mahdi")` چه می‌کند؟

12. `includes("Hadi")` چه نوع خروجی دارد؟

13. `charAt(0)` روی `"Hadi hashemi"` چه می‌دهد؟

14. چرا گفته شده `replace` فقط اولین occurrence را جایگزین می‌کند؟

15. یک مثال از Template Literal با استفاده از `${age}` بنویس.

---

## ✅ پاسخ‌نامهٔ کوتاه

1. برای اینکه `'` داخل رشته باعث شکستن رشته نشود (کاراکتر فرار).

2. رشتهٔ کامل نام و نام‌خانوادگی با یک فاصله بینشان.

3. Template Literals خواناتر و تعویض مقادیر با `${}` ساده‌تر است.

4. تعداد کل کاراکترها (با فاصله‌ها).

5. همهٔ حروف را به بزرگ تبدیل می‌کند.

6. با `str[str.length - 1]`.

7. یک عدد (ایندکسِ اولین وقوع).

8. ایندکسِ **آخرین** وقوع یک کاراکتر خاص را می‌دهد.

9. `"Hadi"`

10. یک **آرایه** از کلمات (با جداکنندهٔ فاصله).

11. اولین `"Hadi"` را با `"Mahdi"` جایگزین می‌کند.

12. مقدار بولی (`true/false`).

13. `"H"`

14. چون در این حالت فقط **اولین** مورد را هدف می‌گیرد (برای همه موارد باید regex یا `replaceAll` به‌کار رود).

15. مثل: `` `I am ${age} years old.` ``

---

# 🏠 تمرین‌های در خانه (حداقل ۱۰ تمرین)

1. یک جمله با `'` داخلش بساز و با `\` درستش کن (مثل: `it's ...`).

2. با Concatenation یک جمله بساز که در آن `firtstName`, `lastName`, `age`, `job` استفاده شود.

3. همان جملهٔ تمرین ۲ را با **Template Literals** بازنویسی کن.

4. طول رشتهٔ `"hello world"` را چاپ کن و آخرین کاراکترش را هم نشان بده.

5. نام خودت را یک‌بار با `toUpperCase()` و یک‌بار با `toLowerCase()` چاپ کن.

6. در رشتهٔ `"banana"` مقدار `indexOf("na")` و `lastIndexOf("a")` را بررسی کن.

7. از `"Hadi hashemi"` با `slice` فقط `"hashemi"` را جدا کن.

8. جمله‌ای مثل `"a,b,c,d"` را با `split(",")` به آرایه تبدیل کن.

9. در رشتهٔ `"hello Hadi, Hadi is here"` فقط اولین `"Hadi"` را با `"Mahdi"` جایگزین کن و نتیجه را چاپ کن.

10. بررسی کن `"JavaScript".includes("Script")` و `"JavaScript".includes("JavaS")` چه برمی‌گردانند.

11. با `charAt()` کاراکترهای 0، 1 و 2 رشتهٔ `"ABC"` را جداگانه چاپ کن.

12. یک متن طولانی در متغیر `bio` بساز و تعداد کاراکترهایش را با `length` نمایش بده.

---

## 🗒️ Cheat-Sheet (خلاصهٔ تقلبیِ همین درس)

| قابلیت           | نمونه                            | توضیح کوتاه                     |
| ---------------- | -------------------------------- | ------------------------------- |
| Escape `\`       | `'it\'s ok'`                     | استفاده از `'` یا `"` داخل رشته |
| اتصال قدیمی      | `"Hi " + name`                   | چسباندن رشته‌ها با `+`          |
| Template Literal | `` `Hi ${name}` ``               | قالب تمیز با بک‌تیک و `${}`     |
| طول              | `"ABC".length`                   | تعداد کاراکترها                 |
| بزرگ/کوچک        | `toUpperCase()/toLowerCase()`    | تغییر کل حروف                   |
| کاراکتر خاص      | `str[str.length-1]`, `charAt(i)` | گرفتن کاراکتر با ایندکس         |
| جستجو            | `indexOf() / lastIndexOf()`      | ایندکس اولین/آخرین وقوع         |
| برش              | `slice(start,end)`               | جداکردن بخشی از متن             |
| تبدیل به آرایه   | `split(" ")`                     | شکستن رشته به آرایه             |
| جایگزینی         | `replace("old","new")`           | جایگزینی اولین وقوع             |
| بررسی وجود       | `includes("sub")`                | `true/false`                    |

---
