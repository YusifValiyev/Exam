
# 📘 Exam Registration System

Bu Angular tətbiqi dərs, şagird və imtahan məlumatlarının idarə olunmasını təmin edir. İstifadəçilər dərs əlavə edə, şagirdləri qeyd edə və imtahan nəticələrini daxil edə bilərlər.

---

## 📁 Layihə Strukturu

```
src/
 ┣ app/
 ┃ ┣ lesson/           # Dərslərlə bağlı komponent və service
 ┃ ┣ student/          # Şagirdlərlə bağlı komponent və service
 ┃ ┣ exam/             # İmtahan qeydiyyatı komponent və service
 ┃ ┣ core/             # Model faylları (lesson.model.ts, student.model.ts və s.)
 ┣ assets/             # Stil və şəkillər
```

---

## 🚀 Texnologiyalar

- Angular (v15+)
- TypeScript
- HTML / CSS

---

## ⚙️ Quraşdırma və İşə Salma

1. **Repository-ni klonlayın:**

```bash
git clone https://github.com/sizin-username/Exam.git
cd Exam
```

2. **Lazımi paketləri yükləyin:**

```bash
npm install
```

3. **Tətbiqi işlədin:**

```bash
ng serve
```

4. Brauzerə daxil olun:

```
http://localhost:4200
```

---

## 🧠 İstifadə Qaydası

- **Dərs əlavə et:** `Lesson` bölməsində dərs kodu, adı ,sinif və müəllim məlumatları daxil edilərək yeni dərs yaradılır.
- **Şagird əlavə et:** `Student` bölməsində nömrə, sinif və şagird məlumatları daxil edilərək yeni şagird yaradılır.
- **İmtahan əlavə et:** `Exam` bölməsində mövcud dərslərdən biri seçilir və uyğun sinifə aid şagirdlər siyahıya düşür. Şagird, tarix və qiymət daxil edilərək imtahan qeyd edilir.

---

## ✅ Gələcək Planlar

- Backend əlavə olunması (Node.js / Firebase və s.)
- İstifadəçi qeydiyyatı və giriş
- Qrafiklərlə nəticə analizi

---

## 🤝 Müəllif

- Yusif Vəliyev
- Frontend Developer
