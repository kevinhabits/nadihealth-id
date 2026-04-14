"use client";

import "./peptida.css";
import Link from "next/link";

const peptidaHtml = `<header class="hero">
  <div class="hero-inner">
    <div class="hero-badge">NadiHealth.id — Riset &amp; Edukasi</div>
    <h1>Panduan Lengkap <em>Peptida</em> 2026</h1>
    <p class="hero-sub">Database terlengkap di Indonesia — 40+ peptida untuk kecantikan, penurunan berat badan, pemulihan, anti-aging, dan kesehatan. Berbasis riset ilmiah dengan panduan regulasi BPOM dan status halal.</p>
    <div class="hero-meta">
      <span>📅 Diperbarui: April 2026</span>
      <span>📊 40+ Peptida</span>
      <span>🔬 Referensi Ilmiah</span>
      <span>🇮🇩 Konteks Indonesia</span>
    </div>
  </div>
</header>

<!-- ═══════════════════════════════════════ TOC ═══════════════════════════════════════ -->
<nav class="toc container" aria-label="Daftar Isi">
  <div class="toc-title">Daftar Isi</div>
  <ol>
    <li><a href="#apa-itu-peptida">Apa Itu Peptida?</a></li>
    <li><a href="#tabel-tujuan">Referensi Cepat: Peptida Berdasarkan Tujuan</a></li>
    <li><a href="#glp1">Peptida GLP-1 &amp; Metabolik (Penurunan Berat Badan)</a></li>
    <li><a href="#pemulihan">Peptida Pemulihan &amp; Penyembuhan</a></li>
    <li><a href="#hormon-pertumbuhan">Peptida Hormon Pertumbuhan (GH Secretagogues)</a></li>
    <li><a href="#kulit-kecantikan">Peptida Kulit, Kecantikan &amp; Anti-Aging</a></li>
    <li><a href="#kosmetik-topikal">Peptida Kosmetik (Topikal/Skincare)</a></li>
    <li><a href="#kognitif">Peptida Kognitif &amp; Neuropeptida</a></li>
    <li><a href="#suplemen-konsumen">Suplemen Peptida Konsumen</a></li>
    <li><a href="#lainnya">Peptida Lainnya (Seksual, Imun, Longevity)</a></li>
    <li><a href="#regulasi-indonesia">Regulasi &amp; Legalitas di Indonesia</a></li>
    <li><a href="#halal">Panduan Halal untuk Peptida</a></li>
    <li><a href="#referensi">Referensi Ilmiah</a></li>
  </ol>
</nav>

<main class="container">

<!-- ═══════════════════════════════════ APA ITU PEPTIDA ═══════════════════════════════ -->
<section class="section" id="apa-itu-peptida">
  <h2 class="section-title">Apa Itu Peptida?</h2>
  <p class="section-subtitle">Fondasi ilmiah sebelum menyelami database lengkap</p>

  <p>Peptida adalah rantai pendek asam amino — "blok bangunan" protein. Jika protein seperti rumah lengkap, peptida adalah batu bata individu yang membentuknya. Tubuh kita secara alami memproduksi ratusan peptida yang berfungsi sebagai "pembawa pesan" biologis: mereka memberi sinyal kepada sel untuk melakukan tugas spesifik seperti memproduksi kolagen, membakar lemak, melepaskan hormon pertumbuhan, atau memperbaiki jaringan yang rusak.</p>

  <p>Seiring bertambahnya usia, produksi peptida alami menurun — dan di sinilah terapi peptida berperan. Dengan menyuplai peptida tertentu, kita dapat mendukung fungsi tubuh yang mulai melambat.</p>

  <div class="info-box info-box-teal">
    <h4>🧬 Kategori Utama Peptida untuk Konsumen</h4>
    <ul>
      <li><strong>Peptida GLP-1 (Metabolik)</strong> — Semaglutide, Tirzepatide: untuk penurunan berat badan dan diabetes</li>
      <li><strong>Peptida Pemulihan</strong> — BPC-157, TB-500: untuk penyembuhan jaringan dan cedera</li>
      <li><strong>Peptida Hormon Pertumbuhan</strong> — CJC-1295, Ipamorelin: untuk anti-aging dan komposisi tubuh</li>
      <li><strong>Peptida Kecantikan (Topikal)</strong> — GHK-Cu, Matrixyl, Argireline: untuk kulit dan anti-kerut</li>
      <li><strong>Peptida Kolagen (Oral)</strong> — Kolagen hidrolisis: untuk kulit, rambut, kuku, sendi</li>
      <li><strong>Neuropeptida</strong> — Semax, Selank: untuk fungsi kognitif dan kecemasan</li>
      <li><strong>Peptida Seksual</strong> — PT-141: untuk disfungsi seksual</li>
      <li><strong>Peptida Longevity</strong> — MOTS-c, Epithalon: untuk kesehatan mitokondria dan penuaan</li>
    </ul>
  </div>

  <div class="info-box info-box-coral">
    <h4>⚠️ Peringatan Penting</h4>
    <p>Sebagian besar peptida terapeutik (selain GLP-1 yang disetujui FDA dan kolagen oral) masih dalam tahap <strong>riset praklinis</strong> — artinya sebagian besar bukti berasal dari studi pada hewan, bukan uji klinis besar pada manusia. Seperti yang dicatat oleh Dr. Eric Topol (kardiolog terkemuka), <strong>tidak ada bukti dari uji acak terkontrol pada manusia</strong> bahwa peptida non-GLP-1 memberikan manfaat yang diklaim. Selalu konsultasikan dengan dokter sebelum memulai terapi peptida apapun.</p>
  </div>
</section>

<!-- ═══════════════════════════════ TABEL REFERENSI CEPAT ═══════════════════════════ -->
<section class="section" id="tabel-tujuan">
  <h2 class="section-title">Referensi Cepat: Peptida Berdasarkan Tujuan</h2>
  <p class="section-subtitle">Temukan peptida terbaik sesuai kebutuhan Anda</p>

  <div class="goal-table-wrap">
    <table class="goal-table">
      <thead>
        <tr>
          <th>Tujuan</th>
          <th>Peptida Terbaik</th>
          <th>Kekuatan Bukti</th>
          <th>Ketersediaan di Indonesia</th>
          <th>Format</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="goal-name">Penurunan Berat Badan</td>
          <td>Semaglutide (Ozempic/Wegovy), Tirzepatide (Mounjaro/Zepbound)</td>
          <td><span class="badge badge-evidence-strong">Kuat — FDA</span></td>
          <td>Resep dokter melalui klinik</td>
          <td>Injeksi mingguan</td>
          <td>Premium</td>
        </tr>
        <tr>
          <td class="goal-name">Anti-Aging Kulit (Topikal)</td>
          <td>GHK-Cu, Matrixyl, Argireline</td>
          <td><span class="badge badge-evidence-moderate">Sedang-Kuat</span></td>
          <td>OTC — Sephora, Sociolla, Shopee</td>
          <td>Serum/krim topikal</td>
          <td>Murah–Sedang</td>
        </tr>
        <tr>
          <td class="goal-name">Kesehatan Kulit (Oral)</td>
          <td>Kolagen Peptida (Marine/Laut)</td>
          <td><span class="badge badge-evidence-strong">Kuat — RCT</span></td>
          <td>Supermarket, apotek, Shopee/Tokopedia</td>
          <td>Bubuk/minuman/kapsul</td>
          <td>Murah</td>
        </tr>
        <tr>
          <td class="goal-name">Pemulihan Cedera</td>
          <td>BPC-157, TB-500</td>
          <td><span class="badge badge-evidence-moderate">Sedang (hewan)</span></td>
          <td>Klinik medis di Bali/Jakarta</td>
          <td>Injeksi subkutan</td>
          <td>Sedang–Premium</td>
        </tr>
        <tr>
          <td class="goal-name">Pertumbuhan Rambut</td>
          <td>GHK-Cu (topikal), Copper Peptide serum</td>
          <td><span class="badge badge-evidence-moderate">Sedang</span></td>
          <td>Serum OTC tersedia</td>
          <td>Aplikasi topikal kulit kepala</td>
          <td>Murah–Sedang</td>
        </tr>
        <tr>
          <td class="goal-name">Kesehatan Usus</td>
          <td>BPC-157 (oral), Kolagen Peptida</td>
          <td><span class="badge badge-evidence-moderate">Sedang</span></td>
          <td>Klinik (BPC-157), OTC (kolagen)</td>
          <td>Oral</td>
          <td>Murah–Sedang</td>
        </tr>
        <tr>
          <td class="goal-name">Cerah Kulit</td>
          <td>L-Glutathione, GHK-Cu</td>
          <td><span class="badge badge-evidence-moderate">Sedang</span></td>
          <td>Klinik IV, suplemen — sangat populer</td>
          <td>Infus IV, oral, topikal</td>
          <td>Murah–Premium</td>
        </tr>
        <tr>
          <td class="goal-name">Anti-Aging (Sistemik)</td>
          <td>CJC-1295 + Ipamorelin, Epithalon</td>
          <td><span class="badge badge-evidence-low">Rendah-Sedang</span></td>
          <td>Klinik wellness khusus</td>
          <td>Injeksi subkutan</td>
          <td>Premium</td>
        </tr>
        <tr>
          <td class="goal-name">Dukungan Imun</td>
          <td>Thymosin Alpha-1, NAD+ Precursors</td>
          <td><span class="badge badge-evidence-moderate">Sedang</span></td>
          <td>Klinik spesialis</td>
          <td>Injeksi, Oral/IV</td>
          <td>Sedang–Premium</td>
        </tr>
        <tr>
          <td class="goal-name">Fungsi Kognitif</td>
          <td>Semax, Selank</td>
          <td><span class="badge badge-evidence-low">Rendah-Sedang</span></td>
          <td>Riset/klinik spesialis</td>
          <td>Intranasal</td>
          <td>Sedang</td>
        </tr>
        <tr>
          <td class="goal-name">Kesehatan Seksual</td>
          <td>PT-141 (Bremelanotide)</td>
          <td><span class="badge badge-evidence-strong">Kuat — FDA</span></td>
          <td>Klinik spesialis</td>
          <td>Injeksi subkutan</td>
          <td>Premium</td>
        </tr>
        <tr>
          <td class="goal-name">Kuku &amp; Sendi</td>
          <td>Kolagen Peptida (Verisol/Fortigel)</td>
          <td><span class="badge badge-evidence-moderate">Sedang-Kuat</span></td>
          <td>Suplemen OTC</td>
          <td>Oral</td>
          <td>Murah</td>
        </tr>
        <tr>
          <td class="goal-name">Longevity</td>
          <td>MOTS-c, NAD+, Epithalon</td>
          <td><span class="badge badge-evidence-low">Rendah (praklinis)</span></td>
          <td>Riset/klinik NAD+</td>
          <td>Berbagai</td>
          <td>Premium</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ═══════════════════════════════════ GLP-1 / METABOLIK ══════════════════════════════ -->
<section class="section" id="glp1">
  <h2 class="section-title">Peptida GLP-1 &amp; Metabolik</h2>
  <p class="section-subtitle">Revolusi penurunan berat badan dan kesehatan metabolik — kategori peptida dengan bukti ilmiah paling kuat</p>

  <h3 class="category-title">Semaglutide</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Semaglutide</div>
        <div class="peptide-aliases">Ozempic, Wegovy, Rybelsus • Agonis reseptor GLP-1 • 31 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-fda">FDA-Approved</span>
        <span class="badge badge-rx">Resep Dokter</span>
        <span class="badge badge-indo">🇮🇩 Relevansi Tinggi</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme Kerja</label>
        <p>Meniru hormon GLP-1 alami; menekan nafsu makan, memperlambat pengosongan lambung, dan meningkatkan sensitivitas insulin. Half-life ~7 hari berkat ikatan albumin.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan Utama</label>
        <p>Penurunan berat badan, Diabetes tipe 2. Juga: perlindungan kardiovaskular, potensi untuk Alzheimer (uji coba EVOKE, hasil September 2026), fatty liver (MASH).</p>
      </div>
      <div class="peptide-field">
        <label>Administrasi &amp; Dosis</label>
        <p>Injeksi subkutan sekali seminggu. Dosis eskalasi: 0,25–2,4 mg/minggu. Tersedia juga dalam tablet oral (Rybelsus).</p>
      </div>
      <div class="peptide-field">
        <label>Kekuatan Bukti</label>
        <p><strong>Sangat Kuat.</strong> Uji STEP: penurunan berat badan 15-17% dalam 68 minggu. Uji SELECT: pengurangan risiko kardiovaskular 20%. Puluhan ribu peserta uji klinis.</p>
      </div>
      <div class="safety-warning">
        <label>⚠️ Keamanan &amp; Efek Samping</label>
        <p>Efek samping GI (mual, diare) terutama saat titrasi. Risiko kehilangan massa otot tanpa latihan resistensi. Laporan pankreatitis langka. Kontraindikasi: riwayat MEN2/kanker tiroid meduler.</p>
      </div>
      <div class="peptide-indo">
        <label>🇮🇩 Relevansi Indonesia</label>
        <p>Permintaan SANGAT TINGGI. Tingkat obesitas meningkat pesat di Indonesia. GLP-1 semakin tersedia melalui klinik di Jakarta dan Bali. Hambatan biaya tinggi tetapi minat kuat dari konsumen mampu. Novo Nordisk memiliki kehadiran di Indonesia.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Tirzepatide</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Tirzepatide</div>
        <div class="peptide-aliases">Mounjaro, Zepbound • Agonis ganda GIP/GLP-1 • 39 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-fda">FDA-Approved</span>
        <span class="badge badge-rx">Resep Dokter</span>
        <span class="badge badge-indo">🇮🇩 Relevansi Tinggi</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme Kerja</label>
        <p>Mengaktifkan reseptor GIP DAN GLP-1 secara bersamaan — sensitivitas insulin superior dan penekanan nafsu makan lebih kuat dari semaglutide.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan Utama</label>
        <p>Penurunan berat badan, Diabetes tipe 2. Juga: sleep apnea, fatty liver (MASH), PCOS, gagal jantung (HFpEF).</p>
      </div>
      <div class="peptide-field">
        <label>Administrasi &amp; Dosis</label>
        <p>Injeksi subkutan sekali seminggu. Dosis eskalasi: 2,5–15 mg/minggu.</p>
      </div>
      <div class="peptide-field">
        <label>Kekuatan Bukti</label>
        <p><strong>Sangat Kuat.</strong> SURMOUNT-1: penurunan berat badan hingga 22,5%. Uji SURPASS: reduksi A1c superior vs semaglutide. Data sleep apnea positif.</p>
      </div>
      <div class="safety-warning">
        <label>⚠️ Keamanan &amp; Efek Samping</label>
        <p>Profil GI serupa semaglutide. Reaksi tempat injeksi. Risiko kehilangan otot tanpa olahraga resistance.</p>
      </div>
      <div class="peptide-indo">
        <label>🇮🇩 Relevansi Indonesia</label>
        <p>Eli Lilly memperluas distribusi di Asia Tenggara. Data penurunan berat badan lebih kuat dari semaglutide. Posisi premium untuk klinik high-end di Jakarta/Bali. Sudut wisata medis yang berkembang.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Retatrutide</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Retatrutide</div>
        <div class="peptide-aliases">LY3437943 (Eli Lilly) • Triple agonis GLP-1/GIP/Glukagon • 39 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-moderate">Fase 3</span>
        <span class="badge badge-rx">Investigasi</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme Kerja</label>
        <p>Mengaktifkan TIGA reseptor: GLP-1, GIP, DAN glukagon. Hasil penurunan berat badan terkuat dari peptida manapun yang pernah diteliti.</p>
      </div>
      <div class="peptide-field">
        <label>Kekuatan Bukti</label>
        <p><strong>Fase 3 (berlangsung).</strong> Fase 2: penurunan berat badan hingga 24,2% dalam 48 minggu. Uji TRIUMPH Fase 3 sedang berlangsung. Pengajuan FDA potensial 2026-2027.</p>
      </div>
      <div class="peptide-field full-width">
        <label>Catatan</label>
        <p>Belum tersedia secara komersial. Akan menghasilkan minat besar ketika disetujui. Posisikan sebagai peptida "generasi berikutnya" dalam konten edukasi.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Liraglutide &amp; CagriSema</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Liraglutide</div>
        <div class="peptide-aliases">Victoza, Saxenda • Agonis GLP-1 generasi lama • 31 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-fda">FDA-Approved</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Catatan</label>
        <p>Versi injeksi harian yang lebih lama. Penurunan berat badan ~8% (uji SCALE). Tersedia di Indonesia sebagai alternatif biaya lebih rendah dari semaglutide. Sebagian besar digantikan oleh agen yang lebih baru.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis</label>
        <p>0,6–3,0 mg/hari injeksi subkutan.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">CagriSema</div>
        <div class="peptide-aliases">Cagrilintide + Semaglutide (Novo Nordisk) • Kombinasi analog amylin + agonis GLP-1</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-moderate">Fase 3</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field full-width">
        <label>Catatan</label>
        <p>Jalur ganda: amylin untuk kenyang + GLP-1 untuk nafsu makan/glukosa. Uji Fase 3 REDEFINE menunjukkan ~22% penurunan berat badan. Potensi melampaui tirzepatide. Belum tersedia secara komersial.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════ PEMULIHAN ═══════════════════════════════════ -->
<section class="section" id="pemulihan">
  <h2 class="section-title">Peptida Pemulihan &amp; Penyembuhan</h2>
  <p class="section-subtitle">Untuk cedera, perbaikan jaringan, dan pemulihan — kategori paling populer di dunia wellness</p>

  <h3 class="category-title">BPC-157</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">BPC-157</div>
        <div class="peptide-aliases">Body Protection Compound-157, Pentadecapeptide • Peptida lambung sintetis • 15 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-moderate">Praklinis (Luas)</span>
        <span class="badge badge-rx">Via Klinik</span>
        <span class="badge badge-indo">🇮🇩 Relevansi Tinggi</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme Kerja</label>
        <p>Mendorong angiogenesis (upregulasi VEGF), aktivitas fibroblas, remodeling kolagen, modulasi nitric oxide, dan efek anti-inflamasi.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p><strong>Utama:</strong> perbaikan jaringan, penyembuhan usus. <strong>Sekunder:</strong> perbaikan tendon/ligamen, neuroproteksi, perlindungan kardiovaskular, pemulihan kerusakan NSAID.</p>
      </div>
      <div class="peptide-field">
        <label>Administrasi &amp; Dosis</label>
        <p>Injeksi subkutan: 250–500 mcg 1-2x sehari. Oral (untuk usus): dosis sama secara oral.</p>
      </div>
      <div class="peptide-field">
        <label>Kekuatan Bukti</label>
        <p><strong>Luas tetapi sebagian besar praklinis.</strong> Seri kasus 17 pasien: &gt;90% pengurangan gejala cedera tendon/ligamen lutut. Puluhan studi tikus. PERINGATAN: STAT News (Feb 2026) melaporkan 35 dari 36 studi hanya pada hewan dari satu laboratorium dengan konflik kepentingan.</p>
      </div>
      <div class="safety-warning">
        <label>⚠️ Keamanan</label>
        <p>Tidak disetujui FDA. Kemurnian sumber SANGAT PENTING. Risiko teoritis kanker karena promosi angiogenesis (tidak ada data manusia). Status FDA AS: Kategori 2 (Sept 2023), menunggu reklasifikasi ke Kategori 1 (pengumuman HHS Feb 2026).</p>
      </div>
      <div class="peptide-indo">
        <label>🇮🇩 Relevansi Indonesia</label>
        <p>Sangat populer di scene klinik wellness Bali. Tersedia melalui klinik medis (Boost Health Clinic, Eterna Clinic). Legal bila diresepkan dokter Indonesia. Permintaan kuat dari komunitas expatriat dan wisata medis.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">TB-500</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">TB-500</div>
        <div class="peptide-aliases">Fragmen Thymosin Beta-4 • Peptida sintetis • 43 asam amino (Tβ4 penuh)</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-moderate">Praklinis + Veteriner</span>
        <span class="badge badge-rx">Via Klinik</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme Kerja</label>
        <p>Mendorong polimerisasi aktin, perekrutan sel progenitor, migrasi sel, anti-inflamasi, pengurangan jaringan parut.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p>Regenerasi otot, pemulihan cedera, peningkatan fleksibilitas, perbaikan jaringan ikat.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis</label>
        <p>2,5–5 mg per minggu (loading), lalu 2,5 mg setiap dua minggu.</p>
      </div>
      <div class="peptide-field">
        <label>Bukti</label>
        <p>Penggunaan veteriner luas (kuda pacu). Data praklinis untuk perbaikan tendon/otot. Catatan: ditemukan mempercepat pertumbuhan tumor dorman dalam eksperimen hewan.</p>
      </div>
      <div class="safety-warning">
        <label>⚠️ Keamanan</label>
        <p>Hanya grade riset. Potensi mempercepat pertumbuhan tumor dorman (data hewan). Dapat mengganggu respons imun. Kemurnian sumber SANGAT PENTING.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Thymosin Alpha-1</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Thymosin Alpha-1</div>
        <div class="peptide-aliases">Zadaxin • Peptida imunomodulator • 28 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-fda">Disetujui di 35+ Negara</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Meningkatkan pematangan sel T, aktivitas sel NK, fungsi sel dendritik. Modulasi respons imun.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p>Dukungan imun, terapi tambahan hepatitis B/C, dukungan onkologi, penyakit infeksi.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis</label>
        <p>1,6 mg injeksi subkutan 2x/minggu.</p>
      </div>
      <div class="peptide-field">
        <label>Relevansi Indonesia</label>
        <p>Relevan untuk beban hepatitis B Indonesia. Disetujui di beberapa pasar Asia. Bisa diposisikan untuk dukungan imun di lingkungan penyakit tropis.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════ HORMON PERTUMBUHAN ═══════════════════════════════ -->
<section class="section" id="hormon-pertumbuhan">
  <h2 class="section-title">Peptida Hormon Pertumbuhan (GH Secretagogues)</h2>
  <p class="section-subtitle">Untuk anti-aging, komposisi tubuh, dan optimasi hormon</p>

  <div class="info-box info-box-gold">
    <h4>💡 Memahami Peptida GH</h4>
    <p>Peptida ini merangsang kelenjar hipofisis untuk melepaskan hormon pertumbuhan (GH) secara alami. GH berperan dalam metabolisme, perkembangan otot, pembakaran lemak, dan vitalitas keseluruhan. Kadar GH menurun seiring bertambahnya usia.</p>
  </div>

  <h3 class="category-title">CJC-1295 + Ipamorelin</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">CJC-1295</div>
        <div class="peptide-aliases">Modified GRF 1-29 • Analog GHRH (modifikasi) • 29 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-low">Praklinis / Off-label</span>
        <span class="badge badge-rx">Via Klinik</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Analog GHRH long-acting. Merangsang pelepasan GH berkelanjutan. Versi DAC memiliki half-life ~8 hari.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p>Optimasi GH, anti-aging, penurunan lemak, peningkatan otot, tidur, pemulihan.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis</label>
        <p>No DAC: 100 mcg sebelum tidur. DAC: 2 mg/minggu.</p>
      </div>
      <div class="peptide-field">
        <label>Bukti</label>
        <p>Peningkatan GH yang ditunjukkan dalam studi manusia. Sering digabung dengan Ipamorelin untuk sinergi. Tidak disetujui FDA.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Ipamorelin</div>
        <div class="peptide-aliases">Peptida pelepas hormon pertumbuhan (GHRP) selektif • 5 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-low">Praklinis / Off-label</span>
        <span class="badge badge-rx">Via Klinik</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Secretagogue GH selektif — merangsang reseptor ghrelin TANPA peningkatan kortisol/prolaktin yang signifikan. Dianggap GHRP paling aman.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p>Optimasi GH, tidur, perkembangan otot, penurunan lemak, pemulihan, kepadatan tulang.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis</label>
        <p>200–300 mcg sebelum tidur via injeksi subkutan.</p>
      </div>
      <div class="peptide-field">
        <label>Catatan</label>
        <p>Kombinasi CJC-1295 + Ipamorelin adalah "gold standard" stack GH — menggabungkan pelepasan GH pulsatif dan berkelanjutan. Populer di klinik anti-aging Indonesia.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Peptida GH Lainnya</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div><div class="peptide-name">Sermorelin</div>
      <div class="peptide-aliases">Analog GHRH • Pernah disetujui FDA (Geref, dihentikan) • 29 asam amino</div></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field full-width">
        <p>Merangsang hipofisis untuk melepaskan GH secara alami. Pernah disetujui FDA — memberikan posisi legal/bukti unik. Dosis: 200-300 mcg/hari sebelum tidur. Umumnya ditoleransi baik. Kurang poten dari secretagogues baru.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div><div class="peptide-name">Tesamorelin</div>
      <div class="peptide-aliases">Egrifta • Analog GHRH • FDA-approved untuk lipodistrofi HIV • 44 asam amino</div></div>
      <div class="peptide-badges"><span class="badge badge-fda">FDA-Approved</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field full-width">
        <p>Satu-satunya analog GHRH yang disetujui FDA. Menargetkan pengurangan lemak visceral secara spesifik. Disetujui untuk lipodistrofi terkait HIV. Dosis: 2 mg/hari. Relevansi Indonesia terbatas kecuali untuk wisata medis.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div><div class="peptide-name">MK-677 (Ibutamoren)</div>
      <div class="peptide-aliases">Bukan peptida — secretagogue GH oral non-peptida</div></div>
      <div class="peptide-badges"><span class="badge badge-evidence-moderate">Fase II</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Keunikan</label>
        <p>ORAL — tidak memerlukan injeksi. Agonis reseptor ghrelin yang meningkatkan GH dan IGF-1 secara berkelanjutan.</p>
      </div>
      <div class="peptide-field">
        <label>Peringatan</label>
        <p>Peningkatan nafsu makan, retensi air, peningkatan gula darah, kantuk. Keamanan jangka panjang tidak diketahui. Populer di pasar abu-abu Asia Tenggara karena format oral.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div><div class="peptide-name">GHRP-2 &amp; GHRP-6</div>
      <div class="peptide-aliases">Growth Hormone Releasing Peptides • 6 asam amino</div></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field full-width">
        <p><strong>GHRP-2:</strong> Pelepasan GH lebih kuat dari Ipamorelin tetapi kurang selektif — meningkatkan kortisol dan prolaktin. Stimulasi nafsu makan kuat. <strong>GHRP-6:</strong> Serupa, dengan efek stimulasi nafsu makan yang bahkan lebih kuat — berguna untuk pasien yang memerlukan kenaikan berat badan. Kedua-duanya kurang umum ditawarkan di Indonesia dibanding Ipamorelin.</p>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════ KULIT & KECANTIKAN ══════════════════════════════ -->
<section class="section" id="kulit-kecantikan">
  <h2 class="section-title">Peptida Kulit, Kecantikan &amp; Anti-Aging</h2>
  <p class="section-subtitle">Dari serum topikal hingga injeksi — peptida yang langsung berdampak pada penampilan</p>

  <h3 class="category-title">GHK-Cu (Copper Peptide)</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">GHK-Cu</div>
        <div class="peptide-aliases">Copper Peptide, Glycyl-L-histidyl-L-lysine copper, Copper Tripeptide-1 • 3 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-strong">Praklinis Luas + Studi Kosmetik</span>
        <span class="badge badge-otc">OTC (Topikal)</span>
        <span class="badge badge-indo">🇮🇩 Relevansi Tinggi</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme Kerja</label>
        <p>Merangsang sintesis kolagen dan elastin, mendorong penyembuhan luka, anti-inflamasi, antioksidan. Mengupregulasi lebih dari 4.000 gen terkait perbaikan jaringan. Kadar plasma menurun tajam seiring usia.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p><strong>Utama:</strong> peremajaan kulit, penyembuhan luka. <strong>Sekunder:</strong> stimulasi pertumbuhan rambut, neuroproteksi (baru muncul), anti-aging sistemik.</p>
      </div>
      <div class="peptide-field">
        <label>Format</label>
        <p><strong>Topikal:</strong> serum/krim konsentrasi 1-2% (OTC). <strong>Injeksi:</strong> 1-3 mg/hari (melalui klinik).</p>
      </div>
      <div class="peptide-field">
        <label>Bukti</label>
        <p>Diteliti sejak 1970-an. Bukti kuat untuk stimulasi kolagen, penyembuhan luka, kekencangan kulit. Data CNS/neurodegenerasi yang baru muncul. Topikal sangat ditoleransi.</p>
      </div>
      <div class="peptide-indo">
        <label>🇮🇩 Relevansi Indonesia</label>
        <p>SEMPURNA untuk Indonesia. Pasar kecantikan/skincare sangat besar ($355M suplemen kecantikan pada 2030). Format topikal = adopsi konsumen mudah. Selaras dengan budaya kecantikan Indonesia. Tersedia di produk The Ordinary, Paula's Choice yang sudah dijual di Indonesia melalui Sephora, Sociolla, dan Shopee.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Kolagen Peptida</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Kolagen Peptida (Hidrolisis)</div>
        <div class="peptide-aliases">Hydrolyzed Collagen, Collagen Hydrolysate • Fragmen kolagen bioaktif</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-strong">Beberapa RCT Manusia</span>
        <span class="badge badge-otc">OTC</span>
        <span class="badge badge-halal">Halal (Marine)</span>
        <span class="badge badge-indo">🇮🇩 Relevansi Tinggi</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Menyediakan blok bangunan untuk sintesis kolagen. Merangsang aktivitas fibroblas. Meningkatkan hidrasi dan elastisitas kulit.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p>Kesehatan kulit, dukungan sendi, kekuatan kuku, pertumbuhan rambut, dukungan lapisan usus.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis &amp; Format</label>
        <p>2,5–15 g/hari oral (bubuk, minuman, kapsul). Efek terlihat pada 8-12 minggu penggunaan konsisten.</p>
      </div>
      <div class="peptide-field">
        <label>Bukti</label>
        <p><strong>Kuat.</strong> Beberapa RCT menunjukkan peningkatan elastisitas kulit, hidrasi, dan pengurangan kerutan. Meta-analisis Zhu et al. (2022) positif. Data kesehatan sendi juga mendukung.</p>
      </div>
      <div class="peptide-indo">
        <label>🇮🇩 Relevansi Indonesia — PALING PENTING</label>
        <p>SUDAH SANGAT BESAR di Indonesia. Minuman kolagen adalah arus utama — merek seperti Somethinc, YOU Beauty, Wardah. Dipasarkan sebagai "minuman kolagen." Titik masuk konten yang sempurna. <strong>Sertifikasi HALAL sangat penting</strong> — kolagen marine (dari ikan) adalah pilihan terbaik untuk 87% populasi Muslim Indonesia. Tersedia di semua kanal ritel termasuk Shopee dan Tokopedia.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Epithalon &amp; Peptida Longevity</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Epithalon (Epitalon)</div>
        <div class="peptide-aliases">Ala-Glu-Asp-Gly • Tetrapeptida sintetis dari kelenjar pineal • 4 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-low">Praklinis + Studi Manusia Kecil</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Mengaktifkan telomerase, berpotensi memperpanjang telomer. Berasal dari peptida Epithalamin kelenjar pineal.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p>Longevity, anti-aging, regulasi tidur, produksi melatonin, fungsi imun.</p>
      </div>
      <div class="peptide-field">
        <label>Bukti</label>
        <p>Lab Khavinson (Rusia): studi hewan menunjukkan perpanjangan umur. Studi manusia kecil menyarankan aktivasi telomerase. Validasi Barat SANGAT TERBATAS.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis</label>
        <p>5–10 mg/hari untuk siklus 10-20 hari. Injeksi subkutan atau intranasal.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">L-Glutathione</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">L-Glutathione</div>
        <div class="peptide-aliases">GSH, Reduced Glutathione • Tripeptida antioksidan • 3 asam amino</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-moderate">Beberapa Studi</span>
        <span class="badge badge-otc">OTC (Oral)</span>
        <span class="badge badge-indo">🇮🇩 Relevansi SANGAT Tinggi</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Antioksidan master. Detoksifikasi, dukungan imun, regulasi melanin.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan</label>
        <p>Antioksidan, pencerahan kulit, detoksifikasi hati, dukungan imun, anti-aging.</p>
      </div>
      <div class="peptide-field">
        <label>Format &amp; Dosis</label>
        <p>Oral: 250–1000 mg/hari. IV infus: 600–1200 mg per sesi. Bioavailabilitas oral diperdebatkan — IV/liposomal lebih baik diserap.</p>
      </div>
      <div class="peptide-field">
        <label>Keamanan</label>
        <p>Umumnya aman. IV dosis tinggi dapat menyebabkan kram. Penipisan zinc dengan penggunaan kronis.</p>
      </div>
      <div class="peptide-indo">
        <label>🇮🇩 Relevansi Indonesia — MASSIF</label>
        <p>Drip glutathione IV ("drip pemutih/brightening") SANGAT populer di Indonesia. Penggerak pendapatan utama klinik estetika di Jakarta, Bali, dan Surabaya. Suplemen oral tersedia di Shopee/Tokopedia. Kombinasikan dengan konten edukasi peptida — dari "drip pemutih" menuju pemahaman ilmiah tentang antioksidan dan kesehatan kulit.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════ KOSMETIK TOPIKAL ═══════════════════════════════ -->
<section class="section" id="kosmetik-topikal">
  <h2 class="section-title">Peptida Kosmetik (Topikal/Skincare)</h2>
  <p class="section-subtitle">Peptida dalam produk skincare sehari-hari — kemungkinan besar Anda sudah menggunakannya!</p>

  <div class="info-box info-box-teal">
    <h4>💡 Tahukah Anda?</h4>
    <p>Jika Anda menggunakan produk dari The Ordinary, Paula's Choice, CeraVe, atau Olay — Anda mungkin sudah menggunakan peptida. Peptida kosmetik adalah bahan aktif yang telah dibuktikan membantu merangsang produksi kolagen, mengurangi kerutan, dan memperkuat barrier kulit.</p>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Matrixyl (Palmitoyl Pentapeptide-4)</div>
        <div class="peptide-aliases">Pal-KTTKS • Signal peptide • 5 asam amino</div>
      </div>
      <div class="peptide-badges"><span class="badge badge-otc">OTC</span><span class="badge badge-indo">🇮🇩 Tersedia Luas</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Cara Kerja</label>
        <p>Meniru sinyal fragmen kolagen untuk merangsang produksi kolagen baru. Pengurangan kerutan sebanding dengan retinol tetapi tanpa iritasi.</p>
      </div>
      <div class="peptide-field">
        <label>Bukti &amp; Ketersediaan</label>
        <p>Beberapa studi klinis. Sudah ada di banyak produk yang dijual di Indonesia (The Ordinary, Olay). Sangat ditoleransi.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Matrixyl 3000</div>
        <div class="peptide-aliases">Palmitoyl Tripeptide-1 + Palmitoyl Tetrapeptide-7 • Campuran signal peptide</div>
      </div>
      <div class="peptide-badges"><span class="badge badge-otc">OTC</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field full-width">
        <p>Peptida ganda: merangsang kolagen (Pal-GHK) + mengurangi peradangan. Studi menunjukkan pengurangan kerutan sinergistik ketika kedua peptida digabungkan. Digunakan di banyak lini skincare premium.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Argireline (Acetyl Hexapeptide-8)</div>
        <div class="peptide-aliases">"Botox dalam botol" • Peptida penghambat neurotransmitter • 6 asam amino</div>
      </div>
      <div class="peptide-badges"><span class="badge badge-otc">OTC</span><span class="badge badge-indo">🇮🇩 Populer</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Cara Kerja</label>
        <p>Menghambat pembentukan kompleks SNARE, mengurangi sinyal kontraksi otot. Efek relaksasi otot topikal — jalur yang sama dengan Botox tetapi jauh lebih ringan.</p>
      </div>
      <div class="peptide-field">
        <label>Bukti</label>
        <p>Studi menunjukkan pengurangan kerutan ~30% dalam 30 hari. Sangat aman secara topikal. Jauh lebih lemah dari Botox injeksi — hasil halus.</p>
      </div>
      <div class="peptide-field full-width">
        <label>🇮🇩 Catatan Indonesia</label>
        <p>Dipasarkan sebagai "alternatif Botox" — menarik bagi konsumen Indonesia yang menginginkan hasil tanpa injeksi. Sudah ada di produk di Shopee/Tokopedia.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Peptida Kosmetik Lainnya</div>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Snap-8 (Acetyl Octapeptide-3)</label>
        <p>Versi diperpanjang dari Argireline. Mekanisme penghambatan SNARE yang sama. Kadang digambarkan sebagai "Argireline yang lebih kuat."</p>
      </div>
      <div class="peptide-field">
        <label>Leuphasyl (Pentapeptide-18)</label>
        <p>Mengurangi aktivitas neuron mirip enkefalin. Sinergistik dengan Argireline untuk pengurangan garis ekspresi.</p>
      </div>
      <div class="peptide-field">
        <label>Palmitoyl Tripeptide-5 (Syn-Coll)</label>
        <p>Mengaktifkan TGF-β untuk merangsang sintesis kolagen. Stimulasi kolagen sebanding retinol tanpa iritasi — baik untuk kulit sensitif.</p>
      </div>
      <div class="peptide-field">
        <label>GHK-Cu untuk Kulit Kepala/Rambut</label>
        <p>Copper peptide yang sama diterapkan ke kulit kepala — merangsang folikel rambut, meningkatkan aliran darah, anti-inflamasi. Serum kulit kepala copper peptide = segmen pasar yang berkembang.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════ KOGNITIF ═══════════════════════════════ -->
<section class="section" id="kognitif">
  <h2 class="section-title">Peptida Kognitif &amp; Neuropeptida</h2>
  <p class="section-subtitle">Untuk fokus, ketajaman mental, dan ketahanan terhadap stres</p>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Semax</div>
        <div class="peptide-aliases">Analog ACTH sintetis • 7 asam amino • Disetujui di Rusia</div>
      </div>
      <div class="peptide-badges"><span class="badge badge-fda">Disetujui di Rusia</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Memodulasi BDNF, dopamin, serotonin. Meningkatkan neuroplastisitas dan fungsi kognitif.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan &amp; Dosis</label>
        <p>Peningkatan kognitif, fokus, neuroproteksi, ketahanan stres. 200–600 mcg/hari intranasal.</p>
      </div>
      <div class="peptide-field full-width">
        <label>Catatan</label>
        <p>Data klinis Rusia untuk stroke, gangguan kognitif. Validasi klinis Barat terbatas. Minat nootropik yang tumbuh di komunitas tech/startup Indonesia. Format intranasal = administrasi mudah.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Selank</div>
        <div class="peptide-aliases">Analog tuftsin sintetis • 7 asam amino • Disetujui di Rusia</div>
      </div>
      <div class="peptide-badges"><span class="badge badge-fda">Disetujui di Rusia</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Memodulasi GABA, serotonin, dopamin. Efek anxiolytic (anti-kecemasan) dan nootropik. Anti-kecemasan TANPA sedasi.</p>
      </div>
      <div class="peptide-field">
        <label>Kegunaan &amp; Dosis</label>
        <p>Pengurangan kecemasan, ketahanan stres, peningkatan kognitif. 250–500 mcg/hari intranasal.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Peptida Kognitif Lainnya</div>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>DSIP (Delta Sleep-Inducing Peptide)</label>
        <p>Memodulasi arsitektur tidur, mendorong tidur gelombang delta. 100–300 mcg sebelum tidur. Data terbatas tetapi menjanjikan untuk insomnia dan jet lag.</p>
      </div>
      <div class="peptide-field">
        <label>Dihexa</label>
        <p>Mengaktifkan jalur HGF/c-Met. Data hewan menunjukkan 10 juta kali lebih kuat dari BDNF dalam mendorong sinaptogenesis. SANGAT eksperimental — data keamanan sangat terbatas. Hanya untuk konteks riset.</p>
      </div>
      <div class="peptide-field">
        <label>Pinealon</label>
        <p>Tripeptida sintetis — regulasi ritme sirkadian via fungsi kelenjar pineal. Bagian dari riset bioregulator peptida Rusia. Validasi independen sangat terbatas.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════ SUPLEMEN KONSUMEN ═══════════════════════════════ -->
<section class="section" id="suplemen-konsumen">
  <h2 class="section-title">Suplemen Peptida Konsumen</h2>
  <p class="section-subtitle">Tersedia tanpa resep — produk yang bisa Anda beli hari ini</p>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Kolagen Peptida Bioaktif (Verisol)</div>
        <div class="peptide-aliases">Peptida kolagen spesifik yang dioptimalkan • Format: bubuk, kapsul</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-strong">Beberapa RCT</span>
        <span class="badge badge-otc">OTC</span>
        <span class="badge badge-halal">Halal (Marine)</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Bukti</label>
        <p>RCT Verisol: peningkatan elastisitas kulit 15% pada 8 minggu, pengurangan kerutan mata, peningkatan pertumbuhan kuku. Fortigel: dukungan tulang rawan sendi.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis</label>
        <p>2,5 g/hari (kulit), 5 g/hari (sendi). Sangat aman.</p>
      </div>
      <div class="peptide-indo">
        <label>🇮🇩 KRITIKAL untuk Indonesia</label>
        <p>Minuman dan suplemen kolagen adalah pasar bernilai miliaran rupiah. Kolagen marine bersertifikat halal SANGAT relevan. Merek: Somethinc, YOU Beauty, Wardah, merek impor Jepang. Tersedia di mana-mana — supermarket, apotek, Shopee/Tokopedia.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Kolagen Marine (Kolagen Ikan)</div>
        <div class="peptide-aliases">Fish Collagen • Hidrolisis kolagen dari kulit/sisik ikan</div>
      </div>
      <div class="peptide-badges">
        <span class="badge badge-evidence-strong">Studi Manusia</span>
        <span class="badge badge-halal">Halal-Friendly</span>
        <span class="badge badge-indo">🇮🇩 PILIHAN #1</span>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Keunggulan</label>
        <p>Kolagen Tipe I dari ikan. Berat molekul lebih kecil = penyerapan lebih baik. <strong>KEUNGGULAN HALAL:</strong> Kolagen marine bisa disertifikasi halal — kritikal untuk 87% populasi Muslim Indonesia. Kolagen bovine memerlukan sertifikasi halal terpisah. Kolagen porcine TIDAK bisa halal.</p>
      </div>
      <div class="peptide-field">
        <label>Dosis &amp; Catatan</label>
        <p>5–10 g/hari. Aman. Kontraindikasi alergi ikan. Rasa amis pada beberapa produk. Kombinasi dengan vitamin C meningkatkan penyerapan.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Suplemen Konsumen Lainnya</div>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Keratin Peptida</label>
        <p>Blok bangunan untuk protein keratin — mendukung struktur rambut dan kuku. 250–500 mg/hari. Bukti terbatas tetapi aman. Sering dibundel dengan kolagen dan biotin.</p>
      </div>
      <div class="peptide-field">
        <label>Elastin Peptida</label>
        <p>Mendukung elastisitas kulit dan kesehatan vaskular. Riset yang baru muncul. Kurang dipelajari dibanding kolagen — sebutkan tetapi catat bukti yang lebih lemah.</p>
      </div>
      <div class="peptide-field">
        <label>NAD+ Precursors (NMN/NR)</label>
        <p>Memulihkan kadar NAD+ yang menurun seiring usia. Mendukung perbaikan DNA, fungsi mitokondria, aktivitas sirtuin. Suplemen oral 250-1000 mg/hari. Klinik NAD+ IV sudah ada di Jakarta dan Bali. NMN oral tersedia di Shopee/Tokopedia.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════ LAINNYA ═══════════════════════════════ -->
<section class="section" id="lainnya">
  <h2 class="section-title">Peptida Lainnya</h2>
  <p class="section-subtitle">Kesehatan seksual, imun, longevity, dan penurunan lemak</p>

  <h3 class="category-title">Kesehatan Seksual</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">PT-141 (Bremelanotide)</div>
        <div class="peptide-aliases">Vyleesi • Agonis reseptor melanocortin • 7 asam amino</div>
      </div>
      <div class="peptide-badges"><span class="badge badge-fda">FDA-Approved 2019</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Bekerja pada reseptor melanocortin di otak — memodulasi gairah seksual secara sentral (BUKAN via aliran darah seperti Viagra/Cialis).</p>
      </div>
      <div class="peptide-field">
        <label>Catatan</label>
        <p>Disetujui FDA untuk gangguan hasrat seksual hipoaktif pada wanita pramenopause. Mual umum (40%+). Max 8 dosis/bulan. Tersedia di klinik spesialis di Bali.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">Melanotan II</div>
        <div class="peptide-aliases">MT-II • Agonis melanocortin non-selektif • 7 asam amino</div>
      </div>
      <div class="peptide-badges"><span class="badge badge-evidence-low">DITINGGALKAN — Masalah Keamanan</span></div>
    </div>
    <div class="peptide-body">
      <div class="safety-warning">
        <label>🚨 PERINGATAN KEAMANAN SERIUS</label>
        <p>Menghasilkan efek tanning dan gairah seksual. Pengembangan farmasi DITINGGALKAN karena masalah keamanan. MASALAH SERIUS: mual, flushing wajah, penggelapan tahi lalat, <strong>risiko melanoma potensial</strong> (mendorong aktivitas melanosit). Sumber tidak teregulasi = risiko kontaminasi. Populer di pasar abu-abu Indonesia — konten HARUS menekankan masalah keamanan.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Penurunan Lemak</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">AOD-9604</div>
        <div class="peptide-aliases">Advanced Obesity Drug, HGH Fragment 176-191 • Fragmen GH modifikasi • 15 asam amino</div>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Catatan Jujur</label>
        <p>Merangsang lipolisis tanpa mempengaruhi gula darah. NAMUN: uji Fase 2 untuk obesitas <strong>GAGAL memenuhi titik akhir primer</strong>. Bukti lebih lemah dari GLP-1. Dipasarkan di klinik Indonesia tetapi jujurlah tentang keterbatasan vs semaglutide/tirzepatide.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Longevity &amp; Mitokondria</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div>
        <div class="peptide-name">MOTS-c</div>
        <div class="peptide-aliases">Mitochondrial ORF of 12S rRNA-c • Peptida turunan mitokondria • 16 asam amino</div>
      </div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Mekanisme</label>
        <p>Mengatur homeostasis metabolik, metabolisme glukosa, "mimikri olahraga" di tingkat molekuler. Dikodekan dalam genom mitokondria — unik.</p>
      </div>
      <div class="peptide-field">
        <label>Catatan</label>
        <p>Studi tikus: peningkatan metabolisme glukosa, sensitivitas insulin. Kadar endogen menurun seiring usia. Data keamanan manusia sangat terbatas. 5-10 mg/minggu. Menarik untuk segmen biohacking/longevity.</p>
      </div>
    </div>
  </div>

  <h3 class="category-title">Dukungan Imun</h3>
  <div class="peptide-card">
    <div class="peptide-card-header">
      <div><div class="peptide-name">LL-37 (Cathelicidin)</div></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field full-width">
        <p>Peptida antimikroba endogen. Aktivitas antimikroba langsung + modulasi imun. Relevan untuk beban penyakit tropis Indonesia dan masalah resistensi antibiotik. Area yang baru muncul.</p>
      </div>
    </div>
  </div>

  <div class="peptide-card">
    <div class="peptide-card-header">
      <div><div class="peptide-name">Cerebrolysin</div></div>
      <div class="peptide-badges"><span class="badge badge-fda">Disetujui di 40+ Negara</span></div>
    </div>
    <div class="peptide-body">
      <div class="peptide-field">
        <label>Catatan</label>
        <p>Campuran peptida neurotrofik dari otak babi. Untuk neuroproteksi, pemulihan stroke, TBI. Disetujui di 40+ negara.</p>
      </div>
      <div class="safety-warning">
        <label>⚠️ ISU HALAL</label>
        <p><strong>Berasal dari babi</strong> — bermasalah untuk pasar Muslim Indonesia (87% populasi). HARUS ditandai jelas. Mungkin memiliki penggunaan niche di komunitas non-Muslim atau wisata medis.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════ REGULASI INDONESIA ═══════════════════════════════ -->
<section class="section" id="regulasi-indonesia">
  <h2 class="section-title">Regulasi &amp; Legalitas Peptida di Indonesia</h2>
  <p class="section-subtitle">Yang perlu Anda ketahui tentang BPOM dan kerangka hukum</p>

  <div class="info-box info-box-coral">
    <h4>⚖️ Prinsip Utama</h4>
    <p>Peptida terapeutik <strong>LEGAL di Indonesia</strong> bila diresepkan oleh dokter berlisensi dan didistribusikan melalui apotek terdaftar. Peptida TIDAK diklasifikasikan sebagai narkotika. BPOM mengatur distribusinya untuk keamanan pasien. <strong>Selalu konsultasikan dengan dokter</strong> sebelum memulai terapi peptida apapun.</p>
  </div>

  <div class="reg-grid">
    <div class="reg-card">
      <h4>🏛️ BPOM (Badan Pengawas Obat dan Makanan)</h4>
      <p>Setara FDA Indonesia. Mengatur makanan, obat, suplemen, kosmetik, dan alat kesehatan. Semua produk yang diimpor/didistribusikan harus terdaftar. Registrasi BPOM = jaminan keamanan.</p>
    </div>
    <div class="reg-card">
      <h4>💊 Peptida Terapeutik</h4>
      <p>Legal bila diresepkan dokter dan diperoleh melalui apotek terdaftar. BPC-157, TB-500, GLP-1 — tersedia melalui klinik medis berlisensi. Membeli dari penjual tidak berlisensi = risiko hukum dan kesehatan.</p>
    </div>
    <div class="reg-card">
      <h4>💄 Peptida Kosmetik</h4>
      <p>Produk kosmetik mengandung peptida (GHK-Cu, Matrixyl, Argireline) harus didaftarkan melalui sistem e-Notifikasi BPOM. PerBPOM No. 25/2025 memperbarui persyaratan bahan efektif Oktober 2026.</p>
    </div>
    <div class="reg-card">
      <h4>🧴 Suplemen Kesehatan</h4>
      <p>3 kategori: (1) Bahan terisolasi, (2) Bahan alami, (3) Bentuk sediaan baru. Harus terdaftar BPOM. Suplemen kolagen termasuk di sini. Registrasi = jaminan keamanan untuk konsumen.</p>
    </div>
    <div class="reg-card">
      <h4>📦 Aturan Impor (2025-2026)</h4>
      <p>Permendag 16/2025 dan 22/2025 memperketat aturan impor. NIB wajib. Lisensi API-U atau API-P diperlukan. Registrasi BPOM sebelum distribusi. Serialisasi untuk farmasi.</p>
    </div>
    <div class="reg-card">
      <h4>🇺🇸 Status FDA AS (Konteks)</h4>
      <p>19 peptida dibatasi dari compounding (2023). Feb 2026: HHS mengumumkan ~14 peptida akan direklasifikasi kembali ke Kategori 1. Regulasi AS tidak langsung berlaku di Indonesia tetapi mempengaruhi ketersediaan global.</p>
    </div>
  </div>

  <div class="info-box info-box-gold">
    <h4>⚠️ Hindari Pasar Abu-Abu</h4>
    <p>Semakin banyak penjual online dan media sosial yang mengklaim menawarkan "peptida riset" atau "injeksi fitness." Banyak produk ini tidak terdaftar, underdosed, atau terkontaminasi — menimbulkan risiko kesehatan serius. Peptida adalah molekul biologis yang sensitif: penanganan yang tidak tepat (paparan panas, penyimpanan tidak steril) dapat menghancurkan efektivitasnya atau memperkenalkan bakteri. <strong>Hanya klinik medis dan apotek terdaftar yang berwenang mengimpor dan mendistribusikan peptida secara legal di Indonesia.</strong></p>
  </div>
</section>

<!-- ═══════════════════════════════ HALAL ═══════════════════════════════ -->
<section class="section" id="halal">
  <h2 class="section-title">Panduan Halal untuk Peptida</h2>
  <p class="section-subtitle">Non-negotiable untuk 87% populasi Muslim Indonesia</p>

  <div class="info-box info-box-teal">
    <h4>🕌 UU Jaminan Produk Halal (UU No. 33/2014)</h4>
    <p>Sertifikasi halal WAJIB untuk makanan, minuman, dan kosmetik per Oktober 2026. Fase farmasi menyusul setelah 2026. BPJPH (Badan Penyelenggara Jaminan Produk Halal) mengawasi proses sertifikasi.</p>
  </div>

  <div class="goal-table-wrap">
    <table class="goal-table">
      <thead>
        <tr>
          <th>Sumber Peptida</th>
          <th>Status Halal</th>
          <th>Catatan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="goal-name">Kolagen Marine (Ikan)</td>
          <td><span class="badge badge-halal">✅ Halal-Friendly</span></td>
          <td>PILIHAN TERBAIK untuk Indonesia. Dapat disertifikasi halal. Penyerapan baik. Dominasi pasar.</td>
        </tr>
        <tr>
          <td class="goal-name">Kolagen Bovine (Sapi)</td>
          <td><span class="badge badge-evidence-moderate">⚠️ Perlu Sertifikasi</span></td>
          <td>Memerlukan sertifikasi halal terpisah (proses penyembelihan). Tersedia tetapi memerlukan verifikasi.</td>
        </tr>
        <tr>
          <td class="goal-name">Kolagen Porcine (Babi)</td>
          <td><span class="badge badge-evidence-low">❌ TIDAK Halal</span></td>
          <td>TIDAK BISA halal. Hindari sepenuhnya untuk pasar Indonesia Muslim.</td>
        </tr>
        <tr>
          <td class="goal-name">Peptida Sintetis (BPC-157, Semaglutide, dll.)</td>
          <td><span class="badge badge-evidence-moderate">⚠️ Konteks Medis</span></td>
          <td>Peptida sintetis/rekombinan umumnya dianggap halal dalam konteks medis di bawah prinsip darurat/kebutuhan (dharurah). Konsultasikan ulama jika ragu.</td>
        </tr>
        <tr>
          <td class="goal-name">Cerebrolysin</td>
          <td><span class="badge badge-evidence-low">❌ Berasal dari Babi</span></td>
          <td>Berasal dari otak babi. TIDAK halal. Harus ditandai jelas dalam semua konten.</td>
        </tr>
        <tr>
          <td class="goal-name">Suplemen Kolagen (Kapsul)</td>
          <td><span class="badge badge-evidence-moderate">⚠️ Periksa Kapsul</span></td>
          <td>Bahkan jika kolagen halal, kapsul gelatin bisa dari babi. Periksa apakah kapsul menggunakan gelatin halal atau HPMC (kapsul vegetarian).</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ═══════════════════════════════ REFERENSI ═══════════════════════════════ -->
<section class="section" id="referensi">
  <h2 class="section-title">Referensi Ilmiah</h2>
  <p class="section-subtitle">Sumber utama yang mendukung database ini</p>

  <ol class="ref-list">
    <li>Wilding et al. "Once-Weekly Semaglutide in Adults with Overweight or Obesity." <em>NEJM</em>, 2021. (Uji STEP 1: penurunan BB 14,9% vs 2,4% placebo)</li>
    <li>Lincoff et al. "Semaglutide and Cardiovascular Outcomes in Obesity." <em>NEJM</em>, 2023. (Uji SELECT: pengurangan risiko kardiovaskular 20%)</li>
    <li>Jastreboff et al. "Tirzepatide Once Weekly for the Treatment of Obesity." <em>NEJM</em>, 2022. (SURMOUNT-1: penurunan BB hingga 22,5%)</li>
    <li>Jastreboff et al. "Triple–Hormone-Receptor Agonist Retatrutide for Obesity." <em>NEJM</em>, 2023. (Fase 2: penurunan BB hingga 24,2%)</li>
    <li>Uji coba EVOKE / EVOKE+ — Semaglutide untuk penyakit Alzheimer. ClinicalTrials.gov: NCT04777396. Hasil diharapkan September 2026.</li>
    <li>Gwyer et al. Seri kasus injeksi BPC-157 intra-artikular lutut (n=17): pengurangan gejala &gt;90% pada follow-up 6 bulan.</li>
    <li>Investigasi STAT News, Februari 2026: 35 dari 36 studi BPC-157 hanya pada hewan dari satu laboratorium dengan konflik kepentingan yang tidak diungkapkan.</li>
    <li>Sikiric et al. Publikasi multipel tentang BPC-157 (1999-2025) — perbaikan jaringan pada tendon, ligamen, usus, otot, saraf, kardiovaskular dalam model tikus.</li>
    <li>Pickart et al. Penelitian GHK-Cu (1970-an hingga sekarang): upregulasi &gt;4.000 gen terkait perbaikan jaringan, anti-inflamasi via modulasi NF-κB.</li>
    <li>Zhu et al. Meta-analisis uji acak terkontrol kolagen peptida, 2022: peningkatan signifikan elastisitas kulit dan hidrasi.</li>
    <li>Uji klinis Verisol: peningkatan elastisitas kulit 15% pada 8 minggu, pengurangan kerutan mata, peningkatan pertumbuhan kuku.</li>
    <li>Studi klinis Matrixyl: pengurangan kerutan sebanding retinol tanpa iritasi.</li>
    <li>Studi klinis Argireline: pengurangan kedalaman kerutan ~30% dalam 30 hari.</li>
    <li>Khavinson et al. Penelitian Epithalon — aktivasi telomerase dalam kultur sel manusia, perpanjangan umur dalam model hewan (2003-2015).</li>
    <li>Lee et al. Penelitian MOTS-c: sensitivitas insulin, regulasi metabolik, mimikri olahraga dalam model tikus (2015-sekarang).</li>
    <li>Uji Fase 3 PT-141 (RECONNECT) — mengarah pada persetujuan FDA 2019 untuk gangguan hasrat seksual hipoaktif.</li>
    <li>Topol, Eric. "The Peptide Craze." <em>Ground Truths</em>, 2025. Ulasan kritis: tidak ada bukti dari uji acak terkontrol pada manusia untuk manfaat peptida non-GLP-1.</li>
    <li>Daftar peptida yang disetujui FDA 2026: lebih dari 80 obat peptida yang disetujui, dipimpin oleh agonis GLP-1. (thepeptideguides.com)</li>
    <li>Allied Market Research: Pasar suplemen kecantikan Indonesia diproyeksikan mencapai $355,87 juta pada 2030 dengan CAGR 7,82%.</li>
    <li>PerBPOM No. 25/2025: Persyaratan teknis bahan kosmetik yang diperbarui, efektif penuh Oktober 2026.</li>
    <li>UU No. 33/2014 (Jaminan Produk Halal): Sertifikasi halal wajib untuk makanan, minuman, kosmetik per Oktober 2026.</li>
    <li>Pengumuman HHS (27 Februari 2026): ~14 dari 19 peptida yang sebelumnya dibatasi akan direklasifikasi dari Kategori 2 ke Kategori 1, memulihkan akses melalui apotek compounding berlisensi.</li>
    <li>Boost Health Clinic Indonesia: "Are Peptides Legal in Indonesia?" — peptida terapeutik legal bila diresepkan dan bersumber dari klinik medis terdaftar.</li>
    <li>PeptideExaminer, 2025: Impor peptida Tiongkok ke AS meningkat dua kali lipat menjadi $328M; iklan peptida online naik 678% sejak 2022.</li>
    <li>PMC: "Peptides: Emerging Candidates for the Prevention and Treatment of Skin Senescence" — ulasan komprehensif peptida kosmetik dan klasifikasinya.</li>
    <li>PMC: "Therapeutic Peptides in Orthopaedics" — ulasan terbaru peptida BPC-157, TB-500, GHK-Cu dalam konteks ortopedi.</li>
  </ol>
</section>

</main>

<!-- ═══════════════════════════════ DISCLAIMER ═══════════════════════════════ -->
<div class="disclaimer">
  <div class="container">
    <p><strong>Disclaimer / Penyangkalan</strong></p>
    <p>Konten ini hanya untuk tujuan edukasi dan informasi. Ini BUKAN nasihat medis. Selalu konsultasikan dengan dokter berlisensi sebelum memulai terapi peptida, suplemen, atau program kesehatan apapun. Banyak peptida yang disebutkan dalam panduan ini belum disetujui untuk penggunaan manusia oleh FDA atau BPOM dan hanya tersedia sebagai senyawa riset. NadiHealth.id tidak menjual, meresepkan, atau mendistribusikan peptida. Informasi didasarkan pada literatur ilmiah yang tersedia per April 2026 dan dapat berubah seiring munculnya riset baru.</p>
    <p style="margin-top:0.75rem"><strong>Sumber:</strong> Database ini disusun dari literatur peer-reviewed, data uji klinis (ClinicalTrials.gov), sumber regulasi (FDA, BPOM), dan analisis pasar yang diterbitkan. Lihat bagian <a href="#referensi">Referensi Ilmiah</a> untuk daftar lengkap.</p>
  </div>
</div>
`;

export default function PeptidaContent() {
  return (
    <>
      {/* Cross-link banner to Clinic Directory */}
      <div className="bg-primary-light/30 border-b border-border">
        <div className="container-custom py-3 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-text-secondary">Mencari klinik yang menyediakan terapi peptida?</span>
          <Link href="/direktori-klinik#bali" className="text-primary font-semibold hover:underline">
            Lihat Direktori Klinik &rarr;
          </Link>
        </div>
      </div>

      <div
        className="peptida-wrap"
        dangerouslySetInnerHTML={{ __html: peptidaHtml }}
      />

      {/* Bottom cross-link CTA */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-text mb-3">Siap Memulai Terapi Peptida?</h3>
            <p className="text-sm text-text-secondary mb-6">
              Temukan klinik dan rumah sakit yang menyediakan layanan terapi peptida, GLP-1, dan penurunan berat badan di seluruh Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/direktori-klinik"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#0C5E75] transition-colors"
              >
                Lihat Direktori Klinik
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-primary-light transition-colors"
              >
                Cek Kesesuaian GLP-1
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
