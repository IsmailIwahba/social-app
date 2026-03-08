<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>Ismail's Git Guide 🚀</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
        body { font-family: 'Cairo', sans-serif; background-color: #f8fafc; }
        .code-block { direction: ltr; font-family: monospace; }
    </style>
</head>
<body class="p-5 md:p-10">
    <div class="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-200">
        <div class="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white text-center">
            <h1 class="text-3xl font-900 mb-2">🚀 دليل أوامر Git الاحترافي</h1>
            <p class="text-slate-400">إعداد: إسماعيل وهبة - مسار Angular (Route)</p>
        </div>

        <div class="p-8 space-y-8">
            <section>
                <h2 class="text-xl font-bold text-slate-800 mb-4 border-r-4 border-blue-500 pr-3">1. البداية (مرة واحدة للمشروع)</h2>
                <div class="grid gap-4">
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span class="text-slate-600">بدء مراقبة المشروع (Initialization)</span>
                        <code class="code-block bg-slate-800 text-green-400 px-3 py-1 rounded">git init</code>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span class="text-slate-600">ربط المشروع بجيت هاب (Remote)</span>
                        <code class="code-block bg-slate-800 text-green-400 px-3 py-1 rounded">git remote add origin [URL]</code>
                    </div>
                </div>
            </section>

            <section class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h2 class="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-star text-yellow-500"></i> المثلث الذهبي (الشغل اليومي)
                </h2>
                <div class="space-y-3">
                    <div class="flex items-center gap-4">
                        <span class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                        <code class="code-block bg-white border border-blue-200 p-2 rounded-lg flex-1">git add .</code>
                        <span class="text-sm text-blue-700 font-bold">تحضير كل الملفات</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                        <code class="code-block bg-white border border-blue-200 p-2 rounded-lg flex-1">git commit -m "feat: description"</code>
                        <span class="text-sm text-blue-700 font-bold">تسجيل النسخة بوصف</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                        <code class="code-block bg-white border border-blue-200 p-2 rounded-lg flex-1">git push</code>
                        <span class="text-sm text-blue-700 font-bold">الرفع للسحاب ☁️</span>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-bold text-slate-800 mb-4 border-r-4 border-purple-500 pr-3">2. أنواع الرسائل الاحترافية (Conventional)</h2>
                <table class="w-full text-right border-collapse">
                    <thead>
                        <tr class="bg-slate-100">
                            <th class="p-3 border">النوع</th>
                            <th class="p-3 border text-center">متى تستخدمه؟</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-3 border font-bold text-blue-600">feat:</td><td class="p-3 border">إضافة ميزة جديدة (زرار، صفحة، خدمة)</td></tr>
                        <tr><td class="p-3 border font-bold text-red-600">fix:</td><td class="p-3 border">تصليح غلطة أو مشكلة (Bug)</td></tr>
                        <tr><td class="p-3 border font-bold text-green-600">style:</td><td class="p-3 border">تعديل ألوان أو كلاسات Tailwind</td></tr>
                        <tr><td class="p-3 border font-bold text-purple-600">refactor:</td><td class="p-3 border">تنظيم الكود وتقسيمه (Clean Code)</td></tr>
                        <tr><td class="p-3 border font-bold text-orange-600">docs:</td><td class="p-3 border">كتابة شرح في ملف README</td></tr>
                    </tbody>
                </table>
            </section>

            <footer class="text-center pt-5 border-t text-slate-400 text-sm italic">
                "عاش يا بطل، كود نضيف يعني مبرمج شاطر!" ✨
            </footer>
        </div>
    </div>

</body>
</html>
