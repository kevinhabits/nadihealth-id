export interface FaqGroup {
  title: string;
  icon: string;
  items: { question: string; answer: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "Tentang GLP-1",
    icon: "🔬",
    items: [
      {
        question: "Apa itu obat GLP-1 dan bagaimana cara kerjanya?",
        answer:
          "GLP-1 (Glucagon-Like Peptide-1) adalah hormon alami yang diproduksi usus saat Anda makan. Obat GLP-1 meniru hormon ini dan bekerja dengan memperlambat pengosongan lambung, meningkatkan produksi insulin, menekan glukagon, dan mengurangi nafsu makan di otak. Hasilnya adalah penurunan kadar gula darah dan berat badan secara bersamaan.",
      },
      {
        question: "Obat GLP-1 apa saja yang tersedia di Indonesia?",
        answer:
          "Di Indonesia, tersedia dua obat GLP-1 yang sudah terdaftar BPOM: Semaglutide (Ozempic) untuk diabetes tipe 2 dengan dosis 0,5mg dan 1mg, dan Liraglutide (Victoza) untuk diabetes tipe 2. Wegovy (semaglutide 2,4mg) dan Mounjaro (tirzepatide) sedang dalam proses registrasi BPOM dan diperkirakan segera hadir.",
      },
      {
        question: "Seberapa efektifkah GLP-1 untuk penurunan berat badan?",
        answer:
          "Hasil klinis sangat menjanjikan. Dalam uji klinis STEP 1, peserta yang menggunakan semaglutide 2,4mg (Wegovy) mengalami penurunan berat badan rata-rata 14,9% dalam 68 minggu. Semaglutide dosis Ozempic (1mg) menunjukkan penurunan sekitar 6-8%. Tirzepatide (Mounjaro) bahkan menunjukkan penurunan hingga 22% dalam studi SURMOUNT-1.",
      },
      {
        question: "Apakah GLP-1 hanya untuk penderita diabetes?",
        answer:
          "Tidak. Meskipun GLP-1 awalnya dikembangkan untuk diabetes tipe 2, obat seperti Wegovy telah mendapat persetujuan khusus untuk penurunan berat badan pada orang dengan BMI ≥30 (obesitas) atau BMI ≥27 dengan setidaknya satu kondisi komorbiditas seperti hipertensi atau dislipidemia. Di Indonesia, dokter dapat meresepkan off-label untuk kasus yang tepat.",
      },
    ],
  },
  {
    title: "Kelayakan & Siapa yang Cocok",
    icon: "👤",
    items: [
      {
        question: "Apakah saya cocok menggunakan Ozempic atau GLP-1?",
        answer:
          "Anda mungkin cocok menggunakan GLP-1 jika: (1) Anda memiliki diabetes tipe 2 yang belum terkontrol baik, (2) BMI Anda ≥30 (obesitas) atau ≥27 dengan kondisi terkait, (3) Anda telah mencoba diet dan olahraga namun belum mencapai hasil memadai, dan (4) tidak ada kontraindikasi medis. Cek kesesuaian Anda melalui kuesioner kami untuk mendapat penilaian dari dokter.",
      },
      {
        question: "Siapa yang TIDAK boleh menggunakan GLP-1?",
        answer:
          "GLP-1 tidak direkomendasikan untuk: ibu hamil atau menyusui, orang dengan riwayat kanker tiroid meduler atau sindrom MEN2, penderita pankreatitis akut, dan individu dengan alergi terhadap komponen obat. Konsultasi dokter diperlukan untuk menilai kondisi individual, termasuk jika Anda memiliki gangguan ginjal, hati, atau penyakit jantung.",
      },
      {
        question: "Berapa BMI minimal untuk memulai pengobatan GLP-1?",
        answer:
          "Pedoman internasional merekomendasikan BMI ≥30 (obesitas) atau BMI ≥27 dengan kondisi penyerta seperti diabetes, hipertensi, atau kolesterol tinggi. Namun untuk diabetes tipe 2, Ozempic dapat digunakan pada BMI berapapun jika diindikasikan untuk kontrol gula darah. Dokter Nadi Health akan menilai kelayakan Anda secara individual.",
      },
    ],
  },
  {
    title: "Harga & Pembayaran",
    icon: "💳",
    items: [
      {
        question: "Berapa harga Ozempic di Nadi Health?",
        answer:
          "Harga Ozempic (semaglutide) di Nadi Health berkisar antara Rp 2,6 juta hingga Rp 3,1 juta per pen, tergantung dosis (0,5mg atau 1mg). Harga sudah termasuk biaya konsultasi dokter dan resep digital. Satu pen Ozempic biasanya cukup untuk 4 minggu penggunaan. Kami menyediakan berbagai metode pembayaran termasuk transfer bank, GoPay, OVO, dan DANA.",
      },
      {
        question: "Apakah ada biaya konsultasi dokter tambahan?",
        answer:
          "Biaya konsultasi dokter sudah termasuk dalam paket layanan Nadi Health. Tidak ada biaya tersembunyi. Konsultasi awal mencakup penilaian kesehatan komprehensif, dan follow-up berkala (biasanya setiap 4-8 minggu) untuk pemantauan kemajuan dan penyesuaian dosis jika diperlukan.",
      },
      {
        question: "Apakah BPJS Kesehatan menanggung biaya GLP-1?",
        answer:
          "Saat ini BPJS Kesehatan belum menanggung biaya obat GLP-1 seperti Ozempic dan Victoza untuk indikasi penurunan berat badan. Untuk diabetes tipe 2, BPJS menanggung metformin dan beberapa obat antidiabetes lini pertama. Nadi Health menyediakan layanan mandiri dengan harga transparan dan pembayaran cicilan tersedia.",
      },
      {
        question: "Apakah ada program cicilan atau diskon?",
        answer:
          "Ya, Nadi Health menyediakan opsi cicilan melalui kartu kredit (0% bunga untuk tenor tertentu) dan paylater. Kami juga menawarkan program berlangganan bulanan dengan harga lebih hemat. Hubungi tim kami via WhatsApp untuk informasi promo terkini.",
      },
    ],
  },
  {
    title: "Efek Samping",
    icon: "⚠️",
    items: [
      {
        question: "Apa saja efek samping GLP-1 yang umum?",
        answer:
          "Efek samping paling umum adalah gangguan pencernaan: mual (40-50% pasien), muntah, diare, dan konstipasi. Biasanya efek samping ini bersifat sementara dan membaik setelah 2-4 minggu pertama penggunaan. Efek samping lebih serius yang jarang terjadi meliputi pankreatitis, gangguan ginjal, dan reaksi alergi. Strategi titrasi dosis yang tepat dapat meminimalkan ketidaknyamanan.",
      },
      {
        question: "Bagaimana cara mengatasi mual akibat Ozempic?",
        answer:
          "Tips untuk mengurangi mual: mulai dengan dosis rendah dan tingkatkan perlahan (titrasi), makan dalam porsi kecil tapi sering, hindari makanan berlemak dan pedas, makan perlahan, minum cukup air putih, dan hindari berbaring segera setelah makan. Jika mual parah, dokter dapat memperpanjang periode titrasi atau meresepkan obat antimual.",
      },
      {
        question: "Apakah penggunaan jangka panjang aman?",
        answer:
          "Data keamanan jangka panjang (hingga 4 tahun) dari uji klinis SUSTAIN dan STEP menunjukkan profil keamanan yang baik untuk semaglutide. Bahkan studi LEADER untuk liraglutide menunjukkan manfaat kardiovaskular. Pemantauan rutin oleh dokter diperlukan untuk memastikan keamanan optimal selama penggunaan berkelanjutan.",
      },
    ],
  },
  {
    title: "Status Halal & Agama",
    icon: "☪️",
    items: [
      {
        question: "Apakah Ozempic dan GLP-1 halal?",
        answer:
          "Semaglutide diproduksi secara sintetis dan tidak mengandung bahan hewani atau alkohol langsung. Berdasarkan kaidah fiqih 'al-istihalah' (transformasi zat), produk farmasi modern yang diproduksi melalui proses sintetis umumnya dapat diterima dalam Islam jika digunakan untuk pengobatan. MUI belum mengeluarkan fatwa khusus untuk semaglutide, namun prinsip darurat medis (dharurah) juga berlaku. Konsultasikan dengan ulama terpercaya Anda untuk ketenangan pikiran.",
      },
      {
        question: "Bolehkah menggunakan Ozempic saat Ramadan?",
        answer:
          "Ini pertanyaan yang perlu dikonsultasikan dengan dokter dan ulama. Secara medis, injeksi subkutan (di bawah kulit) pada umumnya tidak membatalkan puasa menurut mayoritas ulama karena tidak masuk melalui lubang tubuh alami dan tidak memberikan nutrisi. Namun praktiknya mungkin perlu penyesuaian jadwal injeksi dan pemantauan medis lebih ketat selama Ramadan.",
      },
    ],
  },
  {
    title: "Cara Kerja Layanan Nadi Health",
    icon: "🏥",
    items: [
      {
        question: "Bagaimana cara memulai dengan Nadi Health?",
        answer:
          "Prosesnya sangat mudah: (1) Isi kuesioner kesehatan online selama 5-10 menit, (2) Tim medis kami meninjau jawaban Anda dan menghubungi untuk konsultasi online via video call atau chat, (3) Dokter mengeluarkan resep digital jika Anda cocok, (4) Obat dikirim ke alamat Anda dalam kemasan diskrit, (5) Follow-up rutin untuk pemantauan kemajuan.",
      },
      {
        question: "Berapa lama proses dari pendaftaran hingga menerima obat?",
        answer:
          "Setelah konsultasi dokter dan resep diterbitkan, pengiriman obat membutuhkan 2-5 hari kerja tergantung lokasi Anda di Indonesia. Konsultasi awal biasanya bisa dijadwalkan dalam 24-48 jam setelah pengisian kuesioner. Proses keseluruhan dari pendaftaran hingga obat tiba bisa selesai dalam 3-7 hari.",
      },
      {
        question: "Apakah dokter Nadi Health berlisensi resmi?",
        answer:
          "Ya, semua dokter di Nadi Health adalah dokter berlisensi IDI (Ikatan Dokter Indonesia) dengan spesialisasi atau minat khusus di bidang endokrinologi, penyakit dalam, atau kedokteran obesitas. Platform kami beroperasi sesuai regulasi telemedicine Kemenkes RI.",
      },
      {
        question: "Bagaimana privasi saya dijaga?",
        answer:
          "Privasi Anda adalah prioritas utama kami. Semua data medis dienkripsi dan disimpan sesuai standar keamanan data kesehatan. Obat dikirim dalam kemasan diskrit tanpa label yang mengidentifikasi isi paket. Kami tidak membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, sesuai kebijakan privasi kami.",
      },
      {
        question: "Apakah saya bisa stop pengobatan kapan saja?",
        answer:
          "Ya, Anda dapat menghentikan pengobatan kapan saja. Namun dianjurkan untuk berkonsultasi dengan dokter Anda terlebih dahulu, karena penghentian mendadak dapat mempengaruhi kontrol gula darah (untuk diabetes) atau menyebabkan kenaikan berat badan kembali. Dokter akan membantu Anda merencanakan penghentian yang aman jika diperlukan.",
      },
    ],
  },
  {
    title: "BPOM & Regulasi",
    icon: "📋",
    items: [
      {
        question: "Apakah Ozempic sudah terdaftar di BPOM Indonesia?",
        answer:
          "Ya, Ozempic (semaglutide) telah terdaftar di BPOM RI dengan nomor registrasi DKI2164605043A1. Ini memastikan bahwa obat yang kami sediakan adalah produk resmi yang telah melalui evaluasi keamanan, efektivitas, dan kualitas oleh regulator Indonesia.",
      },
      {
        question: "Bagaimana cara memastikan obat yang saya terima asli?",
        answer:
          "Semua obat yang disediakan Nadi Health berasal dari distributor resmi dan memiliki kemasan asli dengan hologram dan nomor batch yang dapat diverifikasi. Kami tidak pernah menjual obat palsu atau tanpa kemasan resmi. Setiap pen dilengkapi dengan leaflet resmi dalam bahasa Indonesia.",
      },
    ],
  },
];

export const homeFaqs = [
  {
    question: "Apakah saya bisa mendapatkan Ozempic tanpa resep dokter?",
    answer:
      "Tidak. Ozempic dan semua obat GLP-1 adalah obat keras yang memerlukan resep dokter di Indonesia. Nadi Health menyediakan layanan konsultasi dokter online yang legal dan terdaftar, sehingga Anda bisa mendapatkan resep dan obat secara aman dan sesuai regulasi.",
  },
  {
    question: "Berapa biaya konsultasi dokter di Nadi Health?",
    answer:
      "Biaya konsultasi dokter sudah termasuk dalam harga layanan kami. Tidak ada biaya tersembunyi. Konsultasi awal dan follow-up berkala sudah termasuk dalam paket.",
  },
  {
    question: "Apakah Ozempic tersedia di seluruh Indonesia?",
    answer:
      "Ya, Nadi Health melayani pengiriman ke seluruh Indonesia. Kami bekerja sama dengan layanan kurir terpercaya dengan pengiriman dalam kemasan diskrit dan aman.",
  },
  {
    question: "Berapa lama saya harus menggunakan GLP-1?",
    answer:
      "Durasi penggunaan sangat individual. Untuk diabetes, pengobatan biasanya jangka panjang selama masih efektif dan ditoleransi baik. Untuk penurunan berat badan, studi menunjukkan bahwa penghentian obat sering diikuti kenaikan berat badan kembali, sehingga banyak pasien melanjutkan penggunaan jangka panjang dengan pengawasan dokter.",
  },
  {
    question: "Apakah GLP-1 halal?",
    answer:
      "Semaglutide diproduksi secara sintetis dan tidak mengandung bahan hewani langsung. Banyak ulama mempertimbangkannya boleh untuk pengobatan medis. Namun kami menyarankan konsultasi dengan ulama terpercaya Anda untuk ketenangan pikiran spiritual.",
  },
  {
    question: "Apakah ada efek rebounded setelah stop Ozempic?",
    answer:
      "Sebagian besar pasien mengalami kenaikan berat badan setelah menghentikan GLP-1, karena obat ini mengendalikan nafsu makan dan bukan menyembuhkan kondisi yang mendasarinya. Oleh karena itu, pengobatan jangka panjang dengan pengawasan dokter dan perubahan gaya hidup adalah pendekatan yang direkomendasikan.",
  },
  {
    question: "Bisakah saya menggunakan Ozempic jika saya tidak punya diabetes?",
    answer:
      "Di Indonesia, Ozempic saat ini terdaftar BPOM untuk diabetes tipe 2. Namun dokter dapat meresepkan secara off-label untuk indikasi lain berdasarkan penilaian klinis. Nadi Health menyediakan konsultasi dokter untuk menilai kelayakan individual Anda.",
  },
  {
    question: "Bagaimana cara menyimpan Ozempic?",
    answer:
      "Ozempic yang belum dibuka harus disimpan di lemari es pada suhu 2-8°C. Setelah dibuka, pen dapat disimpan pada suhu kamar (hingga 30°C) selama maksimal 56 hari. Jangan dibekukan. Jauhkan dari cahaya langsung.",
  },
];
