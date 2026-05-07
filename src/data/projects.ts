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
];
