# Personal-Website

Benhur Okur'un kişisel portföy sitesi. GitHub Pages üzerinde yayında:
https://benhur-okur.github.io/Personal-Website/

## Yapı

Build adımı, paket yöneticisi ve framework yok — üç dosyalık statik bir site.
Tarayıcıda `index.html`'i açmak siteyi olduğu gibi çalıştırır.

- `index.html` — tüm içerik. Bölümler sırayla: Hero, About (01), Experience (02),
  Projects (03), Skills (04), Contact (05), Footer.
- `style.css` — tüm stiller. Tema değişkenleri en üstte `:root` (koyu, varsayılan)
  ve `body.light` (açık) bloklarında. Yeni renk yazarken bu değişkenleri kullan,
  sabit hex gömme — yoksa açık temada bozulur.
- `script.js` — tema geçişi, mobil menü, scroll progress bar ve `.reveal`
  animasyonları için IntersectionObserver.
- `Benhur_Okur_Resume.pdf` — CV. Header'daki "Resume" ve hero'daki
  "Download résumé" linkleri bu isme bakar; dosya adı değişirse ikisini de güncelle.
- `icons/`, `images/`, `vesikalık.jpeg` — statik varlıklar.

## İçerik yazarken

- Site dili **İngilizce**. Amerikan İngilizcesi kullan (analyze, visualization).
- Sitedeki bilgiler CV (`Benhur_Okur_Resume.pdf`) ile tutarlı olmalı. İkisi
  çelişirse **uydurma, kullanıcıya sor** — geçmişte mezuniyet tarihi, proje
  konusu ve freelance işveren adı bu şekilde yanlış kalmıştı.
- Kullanıcının bilgileri: İzmir Ekonomi Üniversitesi Bilgisayar Mühendisliği
  mezunu (Haziran 2026, tam burslu), SOCRadar'da yazılım mühendisliği stajı
  (Tem–Ağu 2025), freelance daemon sistemleri geliştirme (Tem 2024 – Ağu 2025,
  self-employed). Bunları "öğrenci" olarak yazma.
- Proje kartındaki iddiaları GitHub'daki gerçek repo içeriğiyle doğrula
  (README, dosya listesi). Repo adı bazen güncel değil.

## Proje kartları

İki tip var:

- **Featured** (`.project-featured`) — büyük kart, solda anlatım + sağda kod/UI
  mockup'ı. Sıra: Vocabify, AutoEDA, preScan, LLM Proxy Service.
- **Grid** (`.project-card`) — `.project-grid` içindeki küçük kartlar.

Featured kartlar sağ/sol dönüşümlü diziliyor: bir kart normal, sonraki
`.project-featured--alt`. Araya kart eklersen sonrasındaki tüm kartların
sınıflarını yeniden sırala, yoksa iki kart üst üste aynı yöne bakar.

Vocabify birinci sırada duran flagship üründür (`#vocabify`,
`.project-featured--hero`) — Flutter ile geliştirilen, henüz yayınlanmamış,
film/dizi sahnelerinden İngilizce kelime öğreten mobil uygulama. Hero'daki
"Currently building Vocabify" şeridi de buraya bağlanır. Yeni proje eklerken
Vocabify'ı ilk sıradan indirme.

## Değişiklikten sonra

- Görsel doğrulama için headless Chrome ile ekran görüntüsü al:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --screenshot=out.png --window-size=1400,900 --virtual-time-budget=4000 "file://$PWD/index.html"`
  Hero dışındaki bölümler `.reveal` yüzünden ekran görüntüsünde boş çıkar;
  geçici bir kopyaya `.reveal{opacity:1!important;transform:none!important}`
  ekleyip onu çek, sonra kopyayı sil.
- Her iki temayı da kontrol et (sağ üstteki ay/güneş düğmesi) ve dar ekranı unutma.
- `main` üzerinde çalışılıyor; push doğrudan siteyi canlıya alır, **push etmeden
  önce sor**.
