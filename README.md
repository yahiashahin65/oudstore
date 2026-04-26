# Oud Store Demo

متجر عطور سعودي تجريبي مبني بـ Next.js، جاهز للرفع على GitHub ثم Vercel.

## التشغيل محليًا

```bash
npm install
npm run dev
```

افتح:

```bash
http://localhost:3000
```

## الرفع على GitHub

```bash
git init
git add .
git commit -m "Initial oud store demo"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## النشر على Vercel

1. ادخل على Vercel.
2. New Project.
3. اختار GitHub repo.
4. Deploy.

## مهم بخصوص الدفع

الدفع الحقيقي الآمن يحتاج حساب تاجر في بوابة دفع مثل Moyasar أو HyperPay، ثم إضافة المفاتيح في Vercel Environment Variables.

لا تضع Secret Key داخل ملفات الواجهة أبدًا.

طرق الدفع المناسبة للسعودية:
- مدى
- Visa / Mastercard
- Apple Pay
- STC Pay
- تحويل بنكي

## الخطوة القادمة

- ربط المنتجات بـ Firestore.
- ربط الصور بـ Cloudinary.
- إنشاء API Route للدفع الحقيقي.
- إنشاء Admin Dashboard لإضافة المنتجات والطلبات.
