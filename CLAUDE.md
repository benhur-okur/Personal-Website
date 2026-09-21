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
- Ana profesyonel konumlandırma full-stack engineering ve AI-powered systems.
  Mobil geliştirme destekleyici ürün deneyimidir; ayrı bir ana kimlik gibi
  sunulmaz. Dil seviyesi: Turkish (native), English (B2), German (basic).
- Proje kartındaki iddiaları GitHub'daki gerçek repo içeriğiyle doğrula
  (README, dosya listesi). Repo adı bazen güncel değil.

## Proje kartları

İki tip var:

- **Featured** (`.project-featured`) — büyük kart, solda anlatım + sağda kod/UI
  mockup'ı. Sıra: ReelVocab, Vocabify, AutoEDA, preScan, LLM Proxy Service.
- **Grid** (`.project-card`) — `.project-grid` içindeki küçük kartlar.

Featured kartlar sağ/sol dönüşümlü diziliyor: bir kart normal, sonraki
`.project-featured--alt`. Araya kart eklersen sonrasındaki tüm kartların
sınıflarını yeniden sırala, yoksa iki kart üst üste aynı yöne bakar.

ReelVocab birinci sırada duran flagship üründür (`#reelvocab`,
`.project-featured--hero`) — Chrome MV3 uzantısıdır ve ilk Web Store
gönderimine hazırlanmaktadır. Vocabify ikinci sırada duran (`#vocabify`) Flutter
mobil uygulamasıdır ve özel Android alpha testindedir. Hero'daki durum şeridi
ikisine de bağlanır. Yeni proje eklerken bu iki ürünü ilk iki sıradan indirme.

## Vocabify hakkında yazarken

Uygulama bu repoda değil, o yüzden buradaki bilgiler dışında bir şey yazma —
gerekiyorsa kullanıcıdan Vocabify oturumundan doğrulatmasını iste.

Doğru olanlar: bir kart = bir ifade + o ifadenin geçtiği kısa klip; ekrandaki
satır her zaman klipte duyulan satırdır; kullanıcı üç şıkla kendini
değerlendirir (I knew it / Not sure / New to me); ifadenin **o sahnedeki**
anlamı ve nüansı cevaptan sonra açılır; vadesi gelen ifadeler ayrı bir ekranda
değil, feed'in içinde tekrar gelir; puanı yalnızca sunucu yazar (RLS).
27 sahne, 303 ifade, test klasöründe 246 test çağrısı / 35 test dosyası.

Yazma:
- **Türkçe karşılık yok** — uygulama tamamen İngilizce, anlam İngilizce açıklanıyor.
- **"AI-powered" deme** — çalışma zamanında LLM yok, AI sadece içerik hazırlığında.
- **"SM-2 / SuperMemo" deme** — sabit aralıklı kendi şeması (7 / 3 / 1 gün).
- **Streak, genel sıralama tablosu, puanla içerik açma yok** — bilinçli olarak reddedildi.
- **Replik uydurma.** İçerik telifli; kaynağı ve nasıl toplandığı (indirme aracı,
  YouTube vb.) sitede geçmemeli. Mockup'taki ifade/anlam/nüans metinleri
  uygulamanın gerçek verisinden alındı; değiştirmen gerekirse yenisini de
  kullanıcıdan doğrulat, altyazı satırı bilerek soyut çubuk olarak duruyor.
- **Çıkış tarihi, indirme/kullanıcı sayısı yok.** Mevcut doğru durum: APK küçük
  bir arkadaş grubuna Drive üzerinden gönderiliyor ve gerçek Android cihazlarda
  geri bildirim toplanıyor. APK debug anahtarıyla imzalı olduğu için "released"
  veya "production Android release" deme. TestFlight build'i henüz yüklenmedi;
  "on TestFlight" deme.

## ReelVocab hakkında yazarken

Chrome Manifest V3 uzantısıdır. İngilizce YouTube altyazılarında kelimelerinden
tahmin edilemeyen ifadeleri seçer ve sahnedeki muhtemel anlamlarını gösterir.
TypeScript, esbuild, Mistral API ve BYOK kullanır. Anahtar
`chrome.storage.local` içinde kalır; model çağrısı service worker'dan yapılır.
Manuel/ASR altyazı ayrımı, birden fazla YouTube altyazı biçimi, SPA gezinmesi,
yerel önbellek, şema doğrulama ve altı deterministik çıktı kapısı vardır.

- Bugünkü durum **Chrome Web Store release candidate / submission preparation**.
  Gerçek gönderim yapılmadan "in review", onaylanmadan "available" deme.
- Repo ve Web Store bağlantıları kullanıcı public olacağına karar verene kadar
  eklenmez.
- Kullanıcı/indirme sayısı, yayın tarihi veya doğruluk oranı uydurulmaz.

## preScan hakkında yazarken

Kaynak repo: `https://github.com/benhur-okur/preScan-breath-assist`.
Bu proje ses/Librosa projesi değildir. Offline, front-view MP4 videolarda
breath-hold event detection yapar. Final model `MobileNetV3Temporal v4`:
MobileNetV3-Small frame backbone, 15-frame window, max temporal pooling, stride
5, deployment threshold 0.90 ve minimum hold süresi 2.0 saniye. Çıktı
start/end/duration içeren anlamlı segmentlerdir. Veri 24 video ve 6 denekten
oluşur; geliştirmede LOSO kullanılmıştır. Streamlit arayüzü local/offline
demo'dur, real-time sistem değildir. Klinik geçerlilik iddiası yoktur.

## Değişiklikten sonra

- Görsel doğrulama için headless Chrome ile ekran görüntüsü al:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --screenshot=out.png --window-size=1400,900 --virtual-time-budget=4000 "file://$PWD/index.html"`
  Hero dışındaki bölümler `.reveal` yüzünden ekran görüntüsünde boş çıkar;
  geçici bir kopyaya `.reveal{opacity:1!important;transform:none!important}`
  ekleyip onu çek, sonra kopyayı sil.
- Her iki temayı da kontrol et (sağ üstteki ay/güneş düğmesi) ve dar ekranı unutma.
- `main` üzerinde çalışılıyor; push doğrudan siteyi canlıya alır, **push etmeden
  önce sor**.
