
---

# 🎓 درس ۷ — شرط‌ها در جاوااسکریپت

---

## 🎯 هدف درس

یاد بگیری که چطور با استفاده از **if**, **else if**, **else** و **switch** به برنامه‌ات قدرت تصمیم‌گیری بدی 🎯
یعنی جاوااسکریپت بتونه بگه:

> اگه بارون اومد، چتر بردار ☂️

> اگه آفتاب بود، عینک بزن 😎

---

## 🧩 بخش ۱ — if (اگر)

📘 ساختار پایه:

```js
if (test) {
  statement;
}
```

📖 یعنی: اگر **شرط** درست بود (`true`)، کاری انجام بده.

📌 مثال از کدت:

```js
let number = 4;

if (number > 1) {
  console.log("over one");
}
```

🎯 چون `4 > 1` درسته → پیام چاپ می‌شه ✅

📖 مثال واقعی:

اگر دمای هوا بیشتر از ۳۰ بود، کولر روشن شه ❄️

✅ تمرین:

```js
let age = 18;
if (age >= 18) {
  console.log("You can vote!");
}
```

---

## 🧩 بخش ۲ — if ... else (اگر...وگرنه)

📘 برای دو مسیر تصمیم‌گیری:

```js
if (number > 1) {
  console.log("over one");
} else {
  console.log("under one");
}
```

🎯 یعنی: اگه درست نبود، برو مسیر دوم 🚪

📖 مثال واقعی:

اگر هوا بارانی است ☔، چتر ببر؛

اگر نه، عینک آفتابی 😎

✅ تمرین:

```js
let isHungry = false;
if (isHungry) {
  console.log("Eat something!");
} else {
  console.log("You’re not hungry.");
}
```

---

## 🧩 بخش ۳ — if ... else if ... else (چندشاخه‌ای)

📘 برای چند حالت مختلف:

```js
if (number > 1) {
  console.log("over one");
} else if (number < 1) {
  console.log("number is a zero");
} else if (number == 1) {
  console.log("number is one");
} else {
  console.log("it's not a number");
}
```

🎯 فقط **اولین شرط درست** اجرا می‌شود و بقیه نادیده گرفته می‌شوند.

📖 مثال واقعی:

اگر نمره بالای ۱۸ → عالی 👑

اگر بالای ۱۲ → خوب 🙂

اگر کمتر از ۱۲ → نیاز به تلاش بیشتر 😅

✅ تمرین:

```js
let score = 15;
if (score > 18) {
  console.log("Excellent!");
} else if (score >= 12) {
  console.log("Good job!");
} else {
  console.log("Try again!");
}
```

---

## 🧩 بخش ۴ — عملگرهای منطقی (&& ، || ، !)

📘 برای ترکیب چند شرط با هم:

| عملگر | معنا | مثال     | توضیح                 |    |   |    |                        |
| ----- | ---- | -------- | --------------------- | -- | - | -- | ---------------------- |
| `&&`  | و    | `a && b` | هر دو باید درست باشند |    |   |    |                        |
| `     |      | `        | یا                    | `a |   | b` | کافی است یکی درست باشد |
| `!`   | نقیض | `!a`     | برعکسِ مقدار فعلی     |    |   |    |                        |

📌 از کدت:

```js
let isRich = true;
let isKind = true;

if (isRich && isKind) {
  console.log("You are rich and kind");
} else if (isRich && !isKind) {
  console.log("You are rich but not kind");
} else if (!isRich && isKind) {
  console.log("You are kind but not rich");
} else {
  console.log("You are not rich and not kind");
}
```

🎯 یعنی ترکیب رفتارها مثل ترکیب رنگ‌ها 🎨

✅ اگر هر دو شرط `true` باشند → پیام اول چاپ می‌شود.

📖 مثال واقعی:

اگر هم پولداری 💰 **و هم مهربونی ❤️** → همه عاشقت می‌شن 😍

✅ تمرین:

```js
let hasTicket = true;
let hasID = false;

if (hasTicket && hasID) {
  console.log("You can enter!");
} else {
  console.log("You cannot enter!");
}
```

---

### مثال `OR` (یا)

📌 از کدت:

```js
if (isRich || isKind) {
  console.log("You are rich or kind");
}
```

🎯 کافی است **یکی** درست باشد.

---

## 🧩 بخش ۵ — زنجیرهٔ طولانی if/else برای حالت‌های عددی

📘 کاربرد: وقتی چند حالت عدد مشخص داریم:

```js
let number1 = 5;

if (number1 == 0) {
  console.log("zero is ok");
} else if (number1 == 1) {
  console.log("one is ok");
} else if (number1 == 2) {
  console.log("two is ok");
} else if (number1 == 3) {
  console.log("three is ok");
} else if (number1 == 4) {
  console.log("four is ok");
} else {
  console.log("enter a number between 0 and 4");
}
```

📖 مثال واقعی:

مثل دستگاه خودکار 🍬 که فقط سکه‌های ۱،۲،۳،۴ تایی رو قبول می‌کنه!

✅ تمرین:

```js
let day = 7;
if (day == 1) console.log("Monday");
else if (day == 2) console.log("Tuesday");
else if (day == 3) console.log("Wednesday");
else console.log("Weekend!");
```

---

## 🧩 بخش ۶ — switch (کلید انتخابی)

📘 وقتی مقدار ورودی دقیقاً یکی از حالت‌های ثابت است، **switch** خواناتر از if طولانی است:

```js
switch (number1) {
  case 0:
    console.log("zero is ok");
    break;
  case 1:
    console.log("one is ok");
    break;
  case 2:
    console.log("two is ok");
    break;
  case 3:
    console.log("three is ok");
    break;
  case 4:
    console.log("four is ok");
    break;
  default:
    console.log("enter a number between 0 and 4");
}
```

🎯 نکته: `break` لازم است تا به case بعدی نلغزد 🚦

📖 مثال واقعی:

مثل منوی فست‌فود 🍔

عدد ۱ = پیتزا، عدد ۲ = برگر، عدد ۳ = نوشیدنی 🥤

✅ تمرین:

```js
let fruit = "banana";
switch (fruit) {
  case "apple": console.log("🍎 Apple selected"); break;
  case "banana": console.log("🍌 Banana selected"); break;
  default: console.log("Unknown fruit");
}
```

---

## ✨ نکات آموزشی از کدت

✅ همیشه برای مساوی از `===` استفاده کن تا نوع داده هم چک شود.

✅ ترتیب در `else if` مهم است؛ اولین شرط `true` اجرا می‌شود.

✅ برای حالت‌های زیاد و ثابت، `switch` خواناتر است.

✅ از `&&`, `||`, `!` برای ترکیب شرط‌ها استفاده می‌شود.

---

## 🧩 آزمون بخش (۱۵ سؤال)

1️⃣ خروجی `if (4 > 1)` چیست؟

2️⃣ تفاوت `if` و `if ... else` چیست؟

3️⃣ اگر هیچ شرطی در `else if` درست نباشد چه اتفاقی می‌افتد؟

4️⃣ نقش `!` در شرط چیست؟

5️⃣ در شرط `isRich && isKind` چند شرط باید درست باشند؟

6️⃣ در شرط `isRich || isKind` چند شرط کافی است درست باشند؟

7️⃣ در `if (false) { ... }` آیا بلاک اجرا می‌شود؟

8️⃣ چرا در پروژه واقعی بهتر است از `===` استفاده کنیم؟

9️⃣ در ساختار switch نقش `break` چیست؟

1️⃣0️⃣ در switch اگر هیچ case یکسان نباشد چه اتفاقی می‌افتد؟

1️⃣1️⃣ در مثال `isRich && !isKind` خروجی چیست وقتی isRich =true و isKind =true؟

1️⃣2️⃣ اگر عدد ۵ را به زنجیرهٔ `if(number1==0...4)` بدهیم، کدام بخش اجرا می‌شود؟

1️⃣3️⃣ در شرط‌های پشت سر هم، چرا ترتیب نوشتن مهم است؟

1️⃣4️⃣ اگر دو شرط پشت سر هم true باشند، کدام اجرا می‌شود؟

1️⃣5️⃣ تفاوت switch و if ... else طولانی چیست؟


---

## ✅ پاسخ‌نامهٔ کوتاه

1️⃣ چاپ "over one"

2️⃣ if فقط بررسی می‌کند، else شاخهٔ دوم را اجرا می‌کند.

3️⃣ قسمت `else` اجرا می‌شود.

4️⃣ نقیض می‌گیرد؛ true ↔ false.

5️⃣ هر دو باید true باشند.

6️⃣ فقط یکی کافی است.

7️⃣ خیر، اجرا نمی‌شود.

8️⃣ چون هم مقدار و هم نوع را بررسی می‌کند.

9️⃣ جلوگیری از اجرای case بعدی.

1️⃣0️⃣ بخش `default` اجرا می‌شود.

1️⃣1️⃣ شرط false می‌شود، پس پیام اول اجرا نمی‌شود.

1️⃣2️⃣ پیام "enter a number between 0 and 4".

1️⃣3️⃣ چون اولین true اجرا می‌شود و بقیه نادیده گرفته می‌شوند.

1️⃣4️⃣ فقط اولین شرط true اجرا می‌شود.

1️⃣5️⃣ switch خواناتر و مخصوص مقایسهٔ مساوی‌های ثابت است.

---

## 🏠 تمرین‌های در خانه (۱۰ تمرین)

1️⃣ برنامه‌ای بنویس که بررسی کند آیا عدد مثبت، منفی یا صفر است.

2️⃣ برنامه‌ای بنویس که اگر سن کاربر بالای ۱۸ بود، بنویسد «مجاز» وگرنه «غیرمجاز».

3️⃣ با `if ... else if` نمرهٔ امتحان را به «عالی، خوب، ضعیف» تقسیم کن.

4️⃣ با `&&` برنامه‌ای بنویس که بگوید: اگر هوا سرد **و** بارانی بود، "کاپشن بپوش".

5️⃣ با `||` برنامه‌ای بساز که اگر کاربر پول دارد یا کارت بانکی دارد، اجازهٔ خرید بدهد.

6️⃣ با `!` شرطی بنویس که وقتی کاربر عضو **نیست**، پیام "ثبت‌نام کن!" چاپ شود.

7️⃣ از کاربر عددی بین ۰ تا ۴ بگیر و با `switch` پیام متناسب چاپ کن.

8️⃣ یک switch برای انتخاب رنگ بساز (red, blue, green, default).

9️⃣ برنامه‌ای بنویس که با `if` بررسی کند آیا کاربر هم کار دارد و هم تحصیل کرده است.

🔟 برنامه‌ای بساز که بررسی کند اگر عدد زوج است بنویسد "Even" وگرنه "Odd".

---

## 🗒️ Cheat-Sheet (خلاصهٔ تقلبی)

| ساختار     | معنی                      | مثال کوتاه           |                        |       |   |     |
| ---------- | ------------------------- | -------------------- | ---------------------- | ----- | - | --- |
| `if (شرط)` | اگر شرط درست بود اجرا کن  | `if (x>0)`           |                        |       |   |     |
| `else`     | در غیر این صورت           | `else {…}`           |                        |       |   |     |
| `else if`  | چند حالت پشت سر هم        | `if/else if/else`    |                        |       |   |     |
| `switch`   | انتخاب از حالت‌های مشخص   | `switch(x){case1:…}` |                        |       |   |     |
| `&&`       | هر دو شرط باید درست باشند | `if(a&&b)`           |                        |       |   |     |
| `          |                           | `                    | یکی کافی است درست باشد | `if(a |   | b)` |
| `!`        | نقیض مقدار                | `if(!a)`             |                        |       |   |     |
| `===`      | مقایسهٔ دقیق مقدار و نوع  | `if(x===5)`          |                        |       |   |     |

---
