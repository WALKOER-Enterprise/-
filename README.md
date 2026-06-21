# ♱ NEXUS - Ethereal Cyber-Gothic Portfolio ♱

Sebuah web portofolio pribadi yang menggabungkan estetika gelap gotik kontemporer (*Cyber-Gothic / Dark Mythological*) dengan fungsionalitas modern yang bersih (*clean interface*). Dirancang khusus untuk memamerkan keahlian di bidang teknik jaringan, arsitektur server Linux, dan otomatisasi sistem (TJKT).

Web ini mengintegrasikan latar belakang video bergerak dan musik latar yang berputar secara berulang secara harmonis tanpa melanggar kebijakan privasi browser modern.

## ✦ Fitur Utama

- **Bypass Autoplay Restrictions (Splash Screen):** Menggunakan mekanisme halaman selamat datang (*Initialize System*) untuk memicu interaksi pertama pengguna. Solusi mutakhir untuk memastikan musik latar (`辞九门回忆.mp3`) dan video latar belakang langsung menyala secara otomatis dengan suara tanpa diblokir oleh browser (Chrome, Safari, Edge, Firefox).
- **Interactive Audio Controller & Wave Equalizer:** Tombol kontrol *Mute/Unmute* minimalis di bagian navigasi yang terintegrasi langsung dengan animasi batang equalizer dinamis. Batang equalizer akan bergerak aktif jika musik menyala dan berhenti jika dimatikan.
- **Monochrome Stardust Canvas Engine:** Animasi jaringan partikel perak tipis interaktif berbasis HTML5 Canvas yang bergerak secara konstan di latar belakang untuk memperkuat atmosfer siber.
- **Dynamic Project Filtering:** Sistem penyaringan portofolio berbasis kategori (*All, Networking, System*) secara *real-time* menggunakan JavaScript tanpa perlu memuat ulang (*reload*) halaman.
- **Advanced Pop-up Modal:** Menampilkan detail spesifikasi proyek secara dinamis dan mendalam dengan efek transisi transparan yang halus saat kartu proyek diklik.
- **Responsive Fluid Layout:** Dioptimalkan sepenuhnya untuk berbagai ukuran layar, mulai dari monitor desktop hingga perangkat *mobile* (smartphone).

## 🛠️ Tech Stack

- **HTML5:** Struktur semantik untuk performa web yang optimal.
- **CSS3:** Variabel kustom (*CSS Variables*), efek *backdrop-filter blur*, grid responsif, overlay grid siber, dan animasi keyframes tingkat lanjut.
- **JavaScript (Vanilla):** Logika manipulasi DOM untuk filter, kontrol mesin audio, manajemen modal, dan animasi partikel canvas.

## 📂 Struktur Repositori

```pascal
├── index.html                  # File struktur utama dan logika JavaScript
├── style.css                   # File desain visual, variabel monokrom, dan animasi
├── 辞九门回忆.mp3               # File audio musik latar (Looping)
└── celestial-veil.1920x1080.mp4 # File video latar belakang (Autoplay & Muted)