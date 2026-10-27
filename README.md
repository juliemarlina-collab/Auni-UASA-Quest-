# Auni UASA Quest 2026

Hub ulang kaji UASA Tingkatan 1 untuk **Auni Nabilah Idzme** (SMK Warisan Puteri, Seremban).

Halaman: Utama (peringatan & senarai semak) · Jadual (countdown setiap ujian + Google Calendar) · Subjek (nota, kad imbas, cabaran, 2 kertas latihan setiap subjek) · Fokus (pemasa Pomodoro) · Raikan (markah UASA sebenar + sijil) · Lencana.

## Struktur fail

```
index.html          halaman utama (jangan perlu ubah)
css/style.css       semua gaya & susun atur (PC, tablet, telefon)
js/config.js        ★ NAMA, SEKOLAH, JADUAL UJIAN, PIN — ubah di sini
js/data/*.js        soalan & skema (bm, en, sej, geo, mt, sn, more = PJK/PI/ASK, learn = nota & kad imbas)
js/sims.js          simulasi Matematik/Sains/ASK
js/raikan.js        halaman Raikan (markah sebenar)
js/app.js           enjin app (navigasi, XP, lencana, pemarkahan)
assets/             letak gambar murid di sini
```

## Deploy ke GitHub Pages

1. Buat repo baharu di GitHub, contoh `auni-uasa-quest`.
2. **Add file → Upload files**, seret SEMUA kandungan folder ini (termasuk folder `css`, `js`, `assets` dan fail `.nojekyll`), kemudian **Commit**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pilih `main` dan `/ (root)`, tekan **Save**.
4. Tunggu 1–2 minit. Pautan: `https://<nama-pengguna>.github.io/auni-uasa-quest/`

## Ubah suai (js/config.js)

- **Gambar**: kartun Auni ada di `assets/auni.jpg` (potret) dan `assets/auni-wide.jpg` (landskap). Untuk tukar, ganti fail dengan nama yang sama.
- **Jadual**: setiap hari ada `date`, `papers` (`['07:50','09:50','Geografi']`) dan `ulangan` (pilihan). Countdown dibuat automatik untuk setiap ujian.
- **PIN ibu/bapa**: isi `parentPin: '1234'` supaya hanya ibu/bapa boleh memasukkan markah di halaman Raikan.
- **App untuk murid lain**: salin folder ini ke repo lain dan **tukar `storageKey`** (contoh `adik2026_`), supaya kemajuan tidak bercampur.

## Nota penting

- Kemajuan (XP, markah latihan, lencana) disimpan dalam pelayar peranti yang digunakan. Guna peranti yang sama untuk ulang kaji.
- Halaman Raikan menyimpan markah sebenar pada peranti yang sama juga (ibu/bapa masukkan markah pada peranti anak).
- Kertas latihan ialah sampel ikut format UASA Tingkatan 1 (KPM); semak dengan guru subjek jika ada perbezaan.
