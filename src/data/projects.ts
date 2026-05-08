// Project images — RAPMAFEST #9
import rapmafest9Thumb from "../assets/projects/project-1/rapmafest9.png";
import rapmafest9Sc1 from "../assets/projects/project-1/rapmafest9-1.png";
import rapmafest9Sc2 from "../assets/projects/project-1/rapmafest9-2.png";
import rapmafest9Sc3 from "../assets/projects/project-1/rapmafest9-3.png";

// Project images — RAPMAFEST #10
import rapmafest10Thumb from "../assets/projects/project-2/rapmafest10.png";
import rapmafest10Sc1 from "../assets/projects/project-2/rapmafest10-1.png";
import rapmafest10Sc2 from "../assets/projects/project-2/rapmafest10-2.png";
import rapmafest10Sc3 from "../assets/projects/project-2/rapmafest10-3.png";

// Project images — Jelajah Tulang
import jelajahTulangThumb from "../assets/projects/project-3/jelajah-tulang.png";
import jelajahTulangSc1 from "../assets/projects/project-3/jelajah-tulang-1.png";
import jelajahTulangSc2 from "../assets/projects/project-3/jelajah-tulang-2.png";
import jelajahTulangSc3 from "../assets/projects/project-3/jelajah-tulang-3.png";

// Project images — Jelajah Sendi
import jelajahSendiThumb from "../assets/projects/project-4/jelajah-sendi.png";
import jelajahSendiSc1 from "../assets/projects/project-4/jelajah-sendi-1.png";
import jelajahSendiSc2 from "../assets/projects/project-4/jelajah-sendi-2.png";
import jelajahSendiSc3 from "../assets/projects/project-4/jelajah-sendi-3.png";

// Project images — Jelajah Saraf
import jelajahSarafThumb from "../assets/projects/project-5/jelajah-saraf.png";
import jelajahSarafSc1 from "../assets/projects/project-5/jelajah-saraf-1.png";
import jelajahSarafSc2 from "../assets/projects/project-5/jelajah-saraf-2.png";
import jelajahSarafSc3 from "../assets/projects/project-5/jelajah-saraf-3.png";

// Project images — E-Posyandu Si Bunda
import ePosyanduThumb from "../assets/projects/project-6/eposyandu.png";
import ePosyanduSc1 from "../assets/projects/project-6/eposyandu-1.png";
import ePosyanduSc2 from "../assets/projects/project-6/eposyandu-2.png";
import ePosyanduSc3 from "../assets/projects/project-6/eposyandu-3.png";

// Project images — Document Approval Management System
import damsThumb from "../assets/projects/project-7/dams.png";
import damsSc1 from "../assets/projects/project-7/dams-1.png";
import damsSc2 from "../assets/projects/project-7/dams-2.png";
import damsSc3 from "../assets/projects/project-7/dams-3.png";

// Project images — PTPN Radio Solo
import ptpnRadioThumb from "../assets/projects/project-8/ptpn.png";
import ptpnRadioSc1 from "../assets/projects/project-8/ptpn-1.png";
import ptpnRadioSc2 from "../assets/projects/project-8/ptpn-2.png";
import ptpnRadioSc3 from "../assets/projects/project-8/ptpn-3.png";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  tags: string[];
  color: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Landing Page RAPMAFEST #9",
    description:
      "Landing page yang dibuat khusus untuk memperkenalkan acara RAPMAFEST #9 sekaligus mengelola seluruh penjualan tiket online dalam satu tempat.",
    longDescription:
      "Landing page yang dirancang dan dikembangkan secara khusus untuk acara RAPMAFEST #9 — sebuah festival musik dan seni yang diselenggarakan oleh mahasiswa. Website ini berfungsi sebagai pusat informasi utama bagi calon pengunjung, menampilkan detail acara, lineup pengisi acara, dan jadwal kegiatan. Selain itu, halaman ini juga terintegrasi dengan sistem pembelian tiket online sehingga seluruh proses transaksi dapat dilakukan dengan mudah dan cepat. Dibangun menggunakan HTML, CSS, dan Bootstrap untuk memastikan tampilan yang responsif di berbagai perangkat.",
    image: rapmafest9Thumb,
    screenshots: [rapmafest9Sc1, rapmafest9Sc2, rapmafest9Sc3],
    tags: ["HTML", "CSS", "Bootstrap"],
    color: "bg-neo-pink",
    link: "https://landing-page-rapmafest9.vercel.app/",
  },
  {
    title: "Landing Page RAPMAFEST #10",
    description:
      "Landing page yang dibuat khusus untuk memperkenalkan acara RAPMAFEST #10 sekaligus mengelola seluruh penjualan tiket online dalam satu tempat.",
    longDescription:
      "Landing page edisi ke-10 dari RAPMAFEST yang hadir dengan desain yang lebih segar dan modern dibandingkan edisi sebelumnya. Website ini menyajikan informasi lengkap seputar acara mulai dari konsep tema, pengisi acara, hingga lokasi dan waktu pelaksanaan. Fitur utamanya adalah sistem pembelian tiket online yang terintegrasi langsung, memudahkan calon penonton untuk membeli tiket dari mana saja. Dibangun dengan HTML, CSS, dan Bootstrap sehingga tampilannya tetap optimal di perangkat desktop maupun mobile.",
    image: rapmafest10Thumb,
    screenshots: [rapmafest10Sc1, rapmafest10Sc2, rapmafest10Sc3],
    tags: ["HTML", "CSS", "Bootstrap"],
    color: "bg-neo-teal",
    link: "https://landing-page-rapmafest10.vercel.app/",
  },
  {
    title: "Jelajah Tulang",
    description:
      "Aplikasi pembelajaran interaktif yang dibangun dengan Next.js 16. Dirancang untuk membuat proses belajar sistem rangka manusia menjadi lebih menarik melalui video pembelajaran, kuis, dan audio untuk setiap tulang.",
    longDescription:
      "Jelajah Tulang adalah aplikasi web edukasi interaktif yang dikembangkan menggunakan Next.js 16 dan Tailwind CSS, berfokus pada materi sistem rangka manusia. Aplikasi ini dirancang agar proses belajar menjadi lebih menyenangkan dan mudah dipahami. Fitur-fitur utamanya meliputi video pembelajaran berkualitas tinggi yang menjelaskan setiap bagian tulang secara detail, kuis interaktif untuk mengukur pemahaman pengguna, serta fitur audio yang membantu pengguna mendengarkan dan menghafalkan nama-nama tulang dengan pelafalan yang benar. Cocok digunakan sebagai media pembelajaran pendamping bagi mahasiswa atau siswa yang mempelajari anatomi tubuh manusia.",
    image: jelajahTulangThumb,
    screenshots: [jelajahTulangSc1, jelajahTulangSc2, jelajahTulangSc3],
    tags: ["Next Js", "Tailwind CSS"],
    color: "bg-neo-yellow",
    link: "https://jelajah-tulang.vercel.app/",
    github: "https://github.com/rwynns/jelajah-tulang",
  },
  {
    title: "Jelajah Sendi",
    description:
      "Website pembelajaran yang dirancang sebagai pengenalan terhadap sendi pada tubuh manusia. Aplikasi ini menggunakan puzzle interaktif dan animasi GIF gerakan sendi untuk menciptakan pengalaman belajar yang unik dan menarik.",
    longDescription:
      "Jelajah Sendi adalah website edukasi interaktif yang bertujuan untuk memperkenalkan berbagai jenis sendi pada tubuh manusia dengan cara yang menyenangkan. Aplikasi ini dibangun menggunakan React dan Chakra UI, menghadirkan pendekatan belajar yang berbeda dari konvensional. Pengguna dapat menyelesaikan puzzle interaktif untuk mengenal struktur sendi, serta melihat animasi GIF yang memvisualisasikan bagaimana setiap sendi bergerak secara nyata. Pendekatan gamifikasi ini membuat proses belajar terasa lebih engaging dan mudah diingat, terutama bagi mahasiswa atau siswa yang sedang mempelajari sistem gerak manusia.",
    image: jelajahSendiThumb,
    screenshots: [jelajahSendiSc1, jelajahSendiSc2, jelajahSendiSc3],
    tags: ["React", "Chakra UI"],
    color: "bg-neo-purple",
    link: "https://jelajah-sendi.vercel.app/",
    github: "https://github.com/rwynns/jelajah-sendi",
  },
  {
    title: "Jelajah Saraf",
    description:
      "Website pembelajaran yang bertujuan untuk memperkenalkan sistem saraf manusia. Aplikasi ini menggunakan video pembelajaran untuk penyampaian materi dan kuis interaktif untuk menguji pemahaman.",
    longDescription:
      "Jelajah Saraf adalah website edukasi yang dirancang khusus untuk memperkenalkan dan menjelaskan sistem saraf pada tubuh manusia. Dibangun menggunakan React dan Chakra UI, aplikasi ini menyajikan materi pembelajaran melalui video edukatif yang mudah dipahami serta dilengkapi dengan kuis interaktif yang membantu pengguna menguji sejauh mana pemahaman mereka terhadap materi yang telah dipelajari. Dengan antarmuka yang bersih dan intuitif, Jelajah Saraf menjadi media belajar yang efektif dan menyenangkan bagi siapa saja yang ingin memahami cara kerja sistem saraf manusia secara mendalam.",
    image: jelajahSarafThumb,
    screenshots: [jelajahSarafSc1, jelajahSarafSc2, jelajahSarafSc3],
    tags: ["React", "Chakra UI"],
    color: "bg-neo-orange",
    link: "https://jelajah-saraf-sandy.vercel.app/",
    github: "https://github.com/rwynns/jelajah-saraf",
  },
  {
    title: "E-Posyandu Si Bunda",
    description:
      "Solusi digital yang dibangun untuk memodernisasi pemantauan kesehatan anak dengan menggantikan buku KMS Posyandu konvensional. Aplikasi web ini terintegrasi langsung dengan timbangan digital IoT untuk pencatatan data tinggi dan berat badan balita secara otomatis.",
    longDescription:
      "E-Posyandu Si Bunda adalah aplikasi web yang dikembangkan sebagai solusi digital untuk menggantikan pencatatan manual pada buku KMS (Kartu Menuju Sehat) Posyandu. Proyek ini menggabungkan teknologi IoT dan web development — di mana timbangan digital yang terhubung ke internet secara otomatis mengirimkan data tinggi dan berat badan balita ke dalam sistem. Data tersebut kemudian diolah dan ditampilkan dalam dashboard yang informatif, sehingga kader Posyandu dan orang tua dapat memantau tumbuh kembang anak secara real-time. Dibangun dengan arsitektur fullstack menggunakan Laravel sebagai backend, Next.js sebagai frontend, dan MySQL sebagai database, aplikasi ini dirancang untuk mempermudah proses pencatatan dan meningkatkan akurasi data kesehatan balita di tingkat Posyandu.",
    image: ePosyanduThumb,
    screenshots: [ePosyanduSc1, ePosyanduSc2, ePosyanduSc3],
    tags: ["IoT", "Laravel", "Next.js", "MySQL"],
    color: "bg-neo-mint",
  },
  {
    title: "Document Approval Management System",
    description:
      "Sistem manajemen persetujuan dokumen berbasis web yang dibangun untuk PT. Tiga Serangkai. Aplikasi ini mengelola alur persetujuan bertingkat, tanda tangan digital, dan notifikasi real-time menggunakan Laravel 12, React 19, dan Inertia.js.",
    longDescription:
      "Document Approval Management System adalah aplikasi web komprehensif yang dikembangkan khusus untuk PT. Tiga Serangkai guna mendigitalisasi seluruh proses persetujuan dokumen internal perusahaan. Sistem ini memungkinkan konfigurasi alur persetujuan bertingkat (multi-level approval) secara dinamis berdasarkan jenis dokumen dan jabatan pengguna, sehingga setiap dokumen melewati proses verifikasi yang tepat sesuai struktur organisasi. Fitur tanda tangan digital terintegrasi dengan verifikasi identitas yang ketat untuk memastikan keabsahan setiap dokumen yang disetujui. Aplikasi ini juga dilengkapi dengan notifikasi real-time melalui WebSocket (Laravel Reverb) yang memberikan pembaruan instan setiap kali status dokumen berubah. Sistem kontrol akses berbasis peran (RBAC) memastikan setiap pengguna hanya dapat mengakses fitur sesuai jabatan dan perannya. Selain itu, fitur context switching memungkinkan pengguna yang memiliki lebih dari satu jabatan untuk berpindah konteks organisasi dengan mudah. Dibangun dengan arsitektur modern menggunakan Laravel 12 sebagai backend, React 19 dan Inertia.js 2.0 sebagai frontend, Tailwind CSS 4 dan Shadcn UI untuk styling, MySQL sebagai database, serta Laravel Sanctum dan Google OAuth untuk autentikasi.",
    image: damsThumb,
    screenshots: [damsSc1, damsSc2, damsSc3],
    tags: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS", "Shadcn UI"],
    color: "bg-neo-blue",
  },
  {
    title: "PTPN Radio Solo",
    description:
      "Website resmi untuk PTPN Radio Solo — stasiun radio yang telah mengudara sejak 1968. Dibangun menggunakan WordPress dengan fitur live streaming, jadwal siaran, profil penyiar, galeri, artikel berita, dan informasi event.",
    longDescription:
      "PTPN Radio Solo adalah website resmi yang dikembangkan untuk salah satu stasiun radio bersejarah di Kota Surakarta yang telah mengudara sejak tahun 1968. Website ini dibangun menggunakan WordPress dan berfungsi sebagai pusat informasi digital bagi pendengar setia maupun calon pendengar baru. Fitur utama meliputi live audio streaming yang memungkinkan pendengar menikmati siaran secara langsung dari mana saja, jadwal siaran lengkap sepanjang minggu yang menampilkan berbagai program unggulan seperti Zona Pagi, Dopamin, Hits Corner, Indienesia, hingga Nite Trip, serta profil para penyiar profesional yang mengisi setiap program. Selain itu, website ini juga dilengkapi dengan halaman artikel dan berita terkini seputar dunia musik dan broadcasting, galeri foto dokumentasi kegiatan, serta informasi event dan aktivitas off-air yang diselenggarakan oleh PTPN Radio. Halaman kontak terintegrasi memudahkan pendengar untuk menghubungi tim radio melalui WhatsApp maupun email.",
    image: ptpnRadioThumb,
    screenshots: [ptpnRadioSc1, ptpnRadioSc2, ptpnRadioSc3],
    tags: ["WordPress"],
    color: "bg-neo-red",
    link: "https://ptpnradio.com/",
  },
];
