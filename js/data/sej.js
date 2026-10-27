const SHUF=(o,a,seed)=>{let r=(seed*9301+49297)%233280;const idx=o.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){r=(r*9301+49297)%233280;const j=r%(i+1);[idx[i],idx[j]]=[idx[j],idx[i]]}const no=idx.map(k=>o[k]);return [no,no.indexOf(o[a])]};
const SEJ_A_INS='Jawab semua soalan. Pilih satu jawapan yang paling tepat.';
const SEJ_B_INS='Jawab semua soalan. Setiap soalan membawa 10 markah.';
const SEJ_C_INS='Jawab <b>satu</b> soalan sahaja, sama ada Soalan 1 atau Soalan 2. Markah dikira daripada soalan yang kamu jawab.';
const sejPaper=(id,short,color,A,B,C)=>({id,subj:'SEJ',lang:'ms',title:'Sejarah · '+short,short,color,kertas:[{k:'Kertas Sejarah (2 jam)',time:120,mk:80,sec:[
 {h:'Bahagian A',mk:20,ins:SEJ_A_INS,g:[{stim:'',items:A.map((q,i)=>M(String(i+1),q[0],q[1],q[2],q[3]))}]},
 {h:'Bahagian B',mk:40,ins:SEJ_B_INS,g:B.map((b,i)=>({stim:`<b>${i+1}</b> ${b[0]}`,items:b[1].map((s,j)=>O(`B${i+1}(${'abcd'[j]})`,s[0],s[1],s[2]))}))},
 {h:'Bahagian C',mk:20,pick:1,ins:SEJ_C_INS,g:C.map((c,i)=>({stim:`<b>Soalan ${i+1}: ${c[0]}</b><div class="passage"><p><b>Maklumat:</b> ${c[1]}</p></div>`,items:c[2].map((s,j)=>O(`C${i+1}(${'abc'[j]})`,s[0],s[1],s[2]))}))}
]}]});

/* ===== Set 1 (set contoh) ===== */
PAPERS.sej1=sejPaper('sej1','Sejarah Set 1','sun',[
 ['Apakah unit masa yang bersamaan dengan 100 tahun?',['Alaf','Dekad','Abad','Masihi'],2],
 ['Antara yang berikut, yang manakah sumber primer?',['Buku teks sejarah','Diari asal seorang tokoh','Ensiklopedia moden','Artikel ulasan sejarah'],1],
 ['Seorang penyelidik menemu bual bekas anggota polis tentang pengalamannya. Apakah kaedah penyelidikan yang digunakan?',['Kaedah lisan','Kaedah bertulis','Kaedah arkeologi','Kaedah ekskavasi'],0],
 ['Apakah kesan pencairan air batu terhadap kawasan tanah rendah di Asia Tenggara?',['Paras laut menurun','Daratan menjadi semakin luas','Semua sungai menjadi kering','Sebahagian daratan ditenggelami air'],3],
 ['Pentas Sunda menghubungkan kawasan daratan di rantau manakah?',['Asia Barat','Asia Tenggara','Eropah Selatan','Afrika Utara'],1],
 ['Apakah perubahan penting dalam kehidupan manusia pada Zaman Neolitik?',['Mula bercucuk tanam dan menternak','Bergantung sepenuhnya pada pemburuan','Menghasilkan mesin berkuasa wap','Membina kilang perindustrian'],0],
 ['Apakah kegunaan kapak batu kepada manusia Zaman Prasejarah?',['Mencetak buku','Menghasilkan elektrik','Memotong dan menetak','Mengukur suhu'],2],
 ['Antara yang berikut, yang manakah tapak prasejarah di Sarawak?',['Gua Niah','Kota A Famosa','Lembah Bujang','Kota Cornwallis'],0],
 ['Apakah ciri yang menunjukkan kewujudan tamadun awal?',['Kehidupan tanpa organisasi','Ketiadaan kegiatan ekonomi','Penggunaan sumber secara rawak','Petempatan kekal dan sistem pemerintahan'],3],
 ['Mengapakah lembah sungai sesuai dijadikan petempatan tamadun awal?',['Jauh daripada sumber makanan','Mempunyai tanah subur dan bekalan air','Sentiasa bebas daripada banjir','Tidak memerlukan sistem pengairan'],1],
 ['Tamadun Mesopotamia berkembang di antara dua sungai, iaitu',['Nil dan Indus','Huang He dan Nil','Tigris dan Euphrates','Indus dan Ganges'],2],
 ['Apakah tujuan utama Kod Undang-undang Hammurabi?',['Mengawal kelakuan masyarakat melalui peraturan dan hukuman','Menghapuskan semua kegiatan perdagangan','Menggantikan semua kegiatan pertanian','Mewajibkan semua penduduk menjadi tentera'],0],
 ['Apakah yang dimaksudkan dengan polis dalam Tamadun Yunani?',['Rumah ibadat','Pasukan keselamatan moden','Pelabuhan perdagangan sahaja','Negara-kota'],3],
 ['Apakah fungsi akueduk dalam Tamadun Rom?',['Tempat pertandingan gladiator','Menyalurkan bekalan air ke bandar','Tempat menyimpan senjata','Dewan persidangan senat'],1],
 ['Apakah kesan Perang Kalinga terhadap pemerintahan Asoka?',['Baginda menutup semua pusat agama','Baginda menghentikan semua hubungan luar','Baginda menekankan keamanan dan penyebaran agama Buddha','Baginda memusnahkan semua bandar'],2],
 ['Apakah asas penting pemilihan pegawai kerajaan melalui peperiksaan awam dalam Tamadun China?',['Keupayaan dan penguasaan ilmu','Keturunan semata-mata','Bilangan tanah milik keluarga','Kekuatan fizikal sahaja'],0],
 ['Apakah maksud amalan assabiyah yang melampau?',['Kerjasama antara semua bangsa','Semangat kesukuan yang membuta tuli','Sistem kutipan cukai','Amalan membaca kitab'],1],
 ['Gelaran al-Amin yang diberikan kepada Nabi Muhammad SAW merujuk sifat',['berani','pemurah','bijaksana','boleh dipercayai'],3],
 ['Apakah kepentingan wahyu pertama yang bermula dengan perintah membaca?',['Menolak semua bentuk pembelajaran','Mengehadkan ilmu kepada pemimpin','Menekankan kepentingan ilmu pengetahuan','Mengutamakan perdagangan sahaja'],2],
 ['Apakah fungsi baitulmal?',['Mengurus harta dan kewangan negara','Melatih tentera berkuda sahaja','Membina kapal perdagangan sahaja','Menentukan musim pertanian'],0]
],[
 ['Penyelidikan sejarah membantu kita memahami peristiwa masa lalu berdasarkan bukti.',[
  ['Nyatakan tiga kaedah penyelidikan sejarah.',3,'Kaedah bertulis; kaedah lisan; kaedah arkeologi.'],
  ['Jelaskan tiga sebab sejarawan perlu menyemak kesahihan sesuatu sumber.',3,'Mengelakkan maklumat palsu; memastikan ketepatan fakta; mengurangkan kecenderungan atau berat sebelah; menghasilkan penulisan yang boleh dipercayai. Terima mana-mana tiga.'],
  ['Anda menemukan mesej sejarah yang tular di media sosial. Huraikan dua tindakan untuk memastikan maklumat itu boleh dipercayai.',4,'Semak penulis atau penerbit (1) supaya latar kepakarannya diketahui (1); bandingkan dengan sumber berwibawa seperti buku teks atau arkib (1) supaya fakta dapat disahkan (1).']]],
 ['Manusia Zaman Prasejarah menyesuaikan kehidupan dengan alam sekitar.',[
  ['Nyatakan tiga tahap Zaman Prasejarah selain Zaman Logam.',3,'Paleolitik; Mesolitik; Neolitik.'],
  ['Jelaskan tiga ciri kehidupan manusia Zaman Neolitik.',3,'Hidup menetap; bercucuk tanam; menternak; menghasilkan tembikar; menggunakan alat batu yang dilicinkan. Terima mana-mana tiga.'],
  ['Huraikan dua manfaat amalan bercucuk tanam kepada masyarakat pada masa kini.',4,'Membekalkan makanan (1) untuk memenuhi keperluan penduduk (1); menjana pendapatan (1) melalui jualan hasil pertanian (1).']]],
 ['Sungai memainkan peranan penting dalam perkembangan tamadun awal dunia.',[
  ['Namakan dua tamadun awal dunia yang berkembang di lembah sungai.',2,'Mesopotamia; Mesir Purba; Indus; Huang He. Terima mana-mana dua.'],
  ['Jelaskan dua kepentingan sungai kepada masyarakat tamadun awal.',4,'Bekalan air (1) untuk kegunaan harian atau pengairan (1); laluan pengangkutan (1) untuk membawa barangan dagangan (1). Terima tanah subur berserta huraian.'],
  ['Cadangkan dua langkah menjaga kebersihan sungai di negara kita dan huraikan setiap langkah.',4,'Menguatkuasakan larangan membuang sisa (1) supaya pencemaran dapat dibendung (1); mengadakan gotong-royong (1) untuk membersihkan sampah di tebing sungai (1).']]],
 ['Islam membawa perubahan terhadap kehidupan masyarakat Arab.',[
  ['Nyatakan tiga amalan negatif masyarakat Arab Jahiliah.',3,'Berjudi; minum arak; menanam bayi perempuan hidup-hidup; membalas dendam; assabiyah melampau. Terima mana-mana tiga.'],
  ['Nyatakan tiga sifat mulia Nabi Muhammad SAW yang wajar dicontohi.',3,'Siddiq (benar); amanah (boleh dipercayai); tabligh (menyampaikan); fatanah (bijaksana). Terima mana-mana tiga.'],
  ['Huraikan dua kesan sekiranya sikap fanatik terhadap kumpulan sendiri diamalkan di sekolah.',4,'Menimbulkan pergaduhan (1) kerana murid mempertahankan kumpulan tanpa menilai kesalahan (1); menjejaskan perpaduan (1) kerana murid enggan bekerjasama dengan kumpulan lain (1).']]]
],[
 ['Zaman Air Batu dan perubahan alam sekitar','Ketika paras laut lebih rendah, kawasan Pentas Sunda merupakan daratan luas yang menghubungkan beberapa kawasan Asia Tenggara. Pencairan air batu kemudiannya mengubah keadaan ini.',[
  ['Jelaskan keadaan Pentas Sunda sebelum ditenggelami air laut.',4,'Daratan luas di Asia Tenggara; wujud apabila paras laut lebih rendah; menghubungkan tanah besar dengan kawasan yang kini berupa pulau; membolehkan pergerakan manusia dan haiwan melalui daratan. 1m setiap isi.'],
  ['Huraikan dua kesan pencairan air batu terhadap bentuk muka bumi dan dua kesan terhadap kehidupan manusia.',8,'<b>Muka bumi:</b> paras laut meningkat (1) lalu menenggelamkan tanah rendah (1); daratan berpecah (1) lalu membentuk pulau atau selat (1).<br><b>Manusia:</b> berpindah ke kawasan lebih tinggi (1) untuk mengelakkan kawasan ditenggelami air (1); menyesuaikan kegiatan mencari makanan (1) kerana perubahan kawasan daratan dan pesisir (1).'],
  ['Cadangkan empat amalan untuk menjaga alam sekitar. Huraikan setiap amalan.',8,'Asingkan sisa mengikut jenis (1) untuk memudahkan kitar semula (1); guna semula barangan (1) untuk mengurangkan sampah (1); jimatkan air (1) dengan membaiki atau melaporkan paip bocor (1); tanam pokok (1) untuk menghijaukan persekitaran (1).']]],
 ['Tamadun Indus dan perancangan bandar','Harappa dan Mohenjo-Daro memperlihatkan perancangan bandar yang tersusun. Keadaan ini menunjukkan kebolehan masyarakat Indus mengurus kehidupan bandar.',[
  ['Nyatakan empat ciri perancangan bandar dalam Tamadun Indus.',4,'Jalan lurus dan bersilang; susun atur bandar terancang; sistem saliran; penggunaan batu bata; tempat mandi awam; pembahagian kawasan bandar. Terima mana-mana empat.'],
  ['Jelaskan empat kepentingan perancangan bandar yang teratur kepada masyarakat Indus.',8,'Saliran mengalirkan air buangan (1) untuk menjaga kebersihan (1); jalan tersusun memudahkan pergerakan (1) termasuk membawa barangan (1); pembahagian kawasan mengatur fungsi ruang (1) seperti kediaman dan bangunan awam (1); kemudahan air memenuhi keperluan penduduk (1) untuk kegunaan harian (1).'],
  ['Huraikan empat langkah menjadikan bandar pada masa kini selamat dan selesa didiami.',8,'Pasang lampu jalan (1) untuk keselamatan waktu malam (1); selenggara longkang (1) untuk mengurangkan banjir kilat (1); sediakan pengangkutan awam (1) untuk memudahkan pergerakan (1); urus kutipan sampah (1) untuk menjaga kesihatan penduduk (1).']]]
]);

/* ===== Set 2 (set contoh) ===== */
PAPERS.sej2=sejPaper('sej2','Sejarah Set 2','sun',[
 ['Apakah istilah bagi urutan peristiwa mengikut masa?',['Artifak','Tafsiran','Kronologi','Ekskavasi'],2],
 ['Apakah yang dimaksudkan dengan sumber sekunder?',['Bahan asal yang belum diolah','Hasil penulisan yang mengolah sumber asal','Benda purba yang digali','Rakaman asal sesuatu peristiwa'],1],
 ['Dua sejarawan memberikan tafsiran berbeza tentang peristiwa yang sama. Apakah tindakan terbaik seorang murid?',['Memilih tafsiran yang paling pendek','Menolak kedua-duanya tanpa membaca','Menerima pendapat yang paling popular','Membandingkan bukti yang digunakan'],3],
 ['Apakah hubungan peningkatan suhu dengan pencairan air batu?',['Peningkatan suhu mempercepat pencairan air batu','Peningkatan suhu membekukan semua lautan','Suhu tidak berkaitan dengan pencairan','Peningkatan suhu sentiasa menurunkan paras laut'],0],
 ['Apakah perubahan yang berlaku apabila sebahagian Pentas Sunda ditenggelami air?',['Semua pulau bercantum','Seluruh Asia menjadi gurun','Terbentuk pemisahan daratan oleh laut','Semua petempatan berpindah ke Eropah'],2],
 ['Antara yang berikut, yang manakah ciri kehidupan manusia Zaman Paleolitik?',['Menggunakan mesin moden','Berpindah-randah mencari makanan','Menjalankan perusahaan besar','Menggunakan tulisan dalam pentadbiran'],1],
 ['Apakah perubahan teknologi yang dikaitkan dengan Zaman Logam?',['Penggunaan kertas cetak','Penghasilan alat plastik','Pembinaan enjin petrol','Penghasilan alat daripada gangsa dan besi'],3],
 ['Apakah yang boleh dipelajari daripada lukisan gua prasejarah?',['Kegiatan dan cara hidup manusia pada masa lalu','Keputusan peperiksaan penduduk','Jadual penerbangan antarabangsa','Undang-undang jalan raya moden'],0],
 ['Apakah maksud pengkhususan pekerjaan dalam masyarakat bertamadun?',['Semua orang melakukan kerja yang sama','Setiap keluarga mengasingkan diri','Penduduk menjalankan pekerjaan mengikut kemahiran','Semua pekerjaan hanya dilakukan oleh raja'],2],
 ['Apakah kepentingan sistem tulisan kepada tamadun awal?',['Menggantikan semua aktiviti lisan','Merekod urusan pentadbiran dan perdagangan','Menghapuskan keperluan undang-undang','Menghalang penyebaran ilmu'],1],
 ['Sungai manakah menjadi nadi Tamadun Mesir Purba?',['Tigris','Indus','Euphrates','Nil'],3],
 ['Apakah ciri perancangan bandar dalam Tamadun Indus?',['Jalan tersusun dan sistem saliran','Rumah dibina tanpa susunan','Semua bangunan terapung','Ketiadaan kemudahan air'],0],
 ['Tamadun Huang He berkembang di lembah sungai yang juga dikenali sebagai',['Sungai Merah','Sungai Biru','Sungai Kuning','Sungai Putih'],2],
 ['Apakah ciri utama demokrasi di Athens?',['Kuasa mutlak seorang maharaja','Penglibatan warganegara lelaki yang layak dalam pentadbiran','Semua hamba menjadi pemerintah','Semua penduduk tanpa pengecualian mempunyai hak politik yang sama'],1],
 ['Apakah kegunaan utama Colosseum pada zaman Rom?',['Pusat peperiksaan awam','Saluran air ke bandar','Tempat penyimpanan bijirin sahaja','Arena pertunjukan dan pertandingan gladiator'],3],
 ['Apakah pendekatan Asoka menyampaikan ajaran dan peraturan kepada rakyat?',['Mengukirnya pada tiang batu','Menyiarkannya melalui radio','Mencetaknya dalam akhbar harian','Menghantarnya melalui televisyen'],0],
 ['Mengapakah pendidikan diberi penekanan dalam Tamadun China?',['Untuk menghapuskan pentadbiran','Untuk menghalang mobiliti sosial','Untuk melahirkan pegawai yang berilmu','Untuk mengehadkan pengetahuan pertanian'],2],
 ['Apakah ajaran yang menjadi pegangan golongan Hunafa’?',['Penyembahan api','Ajaran Nabi Ibrahim a.s. yang mentauhidkan Allah','Penyembahan berhala','Penyembahan roh nenek moyang'],1],
 ['Apakah usaha Abu Bakar al-Siddiq untuk mempertahankan kesatuan umat Islam?',['Memindahkan kerajaan ke China','Menghapuskan institusi zakat','Menamatkan semua urusan pentadbiran','Memerangi golongan murtad'],3],
 ['Apakah nilai yang paling sesuai dicontohi daripada perkembangan ilmu dalam tamadun Islam?',['Rajin menuntut ilmu dan berkongsi pengetahuan','Menyembunyikan semua ilmu','Menolak bukti dalam penyelidikan','Mengabaikan pendidikan masyarakat'],0]
],[
 ['Bukti sejarah dapat diperoleh melalui pelbagai jenis sumber.',[
  ['Berikan dua contoh sumber primer.',2,'Diari asal; surat asal; batu bersurat; manuskrip asal; dokumen rasmi asal. Terima mana-mana dua.'],
  ['Jelaskan dua perbezaan antara sumber primer dengan sumber sekunder.',4,'Sumber primer ialah bahan asal (1), manakala sumber sekunder ialah olahan atau tafsiran terhadap sumber asal (1); contoh primer ialah diari asal (1), manakala contoh sekunder ialah buku sejarah yang membincangkan diari itu (1).'],
  ['Huraikan dua cara murid boleh membantu memelihara bahan sejarah keluarga.',4,'Menyimpan dokumen di tempat kering (1) untuk mengelakkan kerosakan akibat kelembapan (1); membuat salinan digital (1) supaya kandungan masih boleh dirujuk jika bahan asal rosak (1).']]],
 ['Perubahan iklim pada akhir Zaman Air Batu mempengaruhi bentuk muka bumi.',[
  ['Nyatakan dua perubahan fizikal yang berlaku akibat pencairan air batu.',2,'Paras laut meningkat; kawasan tanah rendah ditenggelami air; terbentuk tasik; perubahan garis pantai. Terima mana-mana dua.'],
  ['Jelaskan dua kesan penenggelaman Pentas Sunda terhadap kawasan Asia Tenggara.',4,'Daratan yang dahulunya bersambung terpisah (1) oleh laut atau selat (1); hidupan terpaksa menyesuaikan diri atau berpindah (1) kerana kawasan habitat ditenggelami air (1).'],
  ['Huraikan dua tindakan murid untuk membantu mengurangkan pembaziran sumber dalam kehidupan harian.',4,'Menggunakan semula kertas (1) dengan menulis pada kedua-dua belahnya (1); menjimatkan elektrik (1) dengan menutup lampu apabila tidak digunakan (1).']]],
 ['Tamadun Yunani dan Rom memberikan sumbangan dalam bidang pemerintahan dan seni bina.',[
  ['Nyatakan maksud polis.',2,'Negara-kota (1) yang menjadi unit politik tersendiri dalam Tamadun Yunani (1).'],
  ['Jelaskan fungsi dua binaan Rom, iaitu akueduk dan Colosseum.',4,'Akueduk menyalurkan air (1) bagi keperluan penduduk bandar (1); Colosseum menjadi arena pertunjukan (1), contohnya pertandingan gladiator (1).'],
  ['Huraikan dua kepentingan perancangan bandar yang baik kepada penduduk.',4,'Mewujudkan persekitaran sihat (1) melalui sistem saliran dan pengurusan sampah yang baik (1); memudahkan pergerakan (1) melalui jalan dan pengangkutan yang teratur (1).']]],
 ['Ilmu dan pentadbiran yang teratur menyumbang kepada perkembangan tamadun.',[
  ['Nyatakan dua bidang sumbangan tamadun Islam dalam perkembangan ilmu.',2,'Perubatan; matematik; astronomi; geografi; seni bina. Terima mana-mana dua.'],
  ['Jelaskan dua kepentingan peperiksaan awam kepada pentadbiran Tamadun China.',4,'Memilih pegawai berilmu (1) untuk mengurus pentadbiran dengan cekap (1); memberi peluang berdasarkan pencapaian peperiksaan (1) bagi memperoleh jawatan kerajaan (1).'],
  ['Huraikan dua cara anda mencontohi semangat keilmuan masyarakat tamadun terdahulu.',4,'Membaca bahan berwibawa secara konsisten (1) supaya pengetahuan bertambah (1); bertanya dan berbincang dengan guru (1) untuk memperbetul kefahaman yang salah (1).']]]
],[
 ['Zaman Prasejarah dan pemeliharaan warisan','Tinggalan seperti alat batu, tembikar dan lukisan gua membolehkan ahli arkeologi mengkaji kehidupan manusia Zaman Prasejarah.',[
  ['Nyatakan empat ciri kehidupan manusia Zaman Paleolitik.',4,'Hidup berpindah-randah; memburu binatang; mengumpul hasil hutan; menggunakan alat batu yang ringkas; tinggal di gua atau kawasan terbuka. Terima mana-mana empat.'],
  ['Jelaskan empat perubahan kehidupan manusia daripada Zaman Paleolitik kepada Zaman Neolitik.',8,'Daripada berpindah-randah (1) kepada hidup lebih menetap (1); daripada mengumpul makanan (1) kepada menghasilkan makanan melalui pertanian (1); daripada memburu (1) kepada turut menternak haiwan (1); daripada alat batu ringkas (1) kepada alat batu yang dilicinkan (1).'],
  ['Huraikan empat langkah untuk melindungi tapak prasejarah di Malaysia.',8,'Hadkan akses ke kawasan sensitif (1) untuk mengelakkan kerosakan (1); kuatkuasakan larangan vandalisme (1) bagi mencegah contengan pada gua (1); adakan pendidikan warisan (1) supaya pengunjung menghargai tapak (1); jalankan penyelidikan dan dokumentasi (1) supaya tinggalan direkod dan dipelihara (1).']]],
 ['Kepimpinan dan sumbangan tamadun Islam','Nabi Muhammad SAW menunjukkan teladan kepimpinan yang berakhlak. Perkembangan tamadun Islam turut memperlihatkan kepentingan ilmu, kebajikan dan pentadbiran.',[
  ['Nyatakan empat sifat utama Nabi Muhammad SAW.',4,'Siddiq; amanah; tabligh; fatanah. 1m setiap sifat.'],
  ['Jelaskan empat sumbangan tamadun Islam dalam bidang ilmu, ekonomi atau kemasyarakatan.',8,'Memajukan perubatan (1) melalui penyelidikan dan penulisan (1); mengembangkan matematik (1) termasuk algebra (1); mengurus baitulmal (1) untuk mengendalikan kewangan negara (1); mengamalkan zakat (1) untuk membantu golongan yang memerlukan (1).'],
  ['Anda dilantik sebagai ketua kelas. Huraikan empat cara mengamalkan kepimpinan berakhlak.',8,'Bersikap amanah (1) dengan mengurus wang kelas secara telus (1); berlaku adil (1) dengan membahagikan tugas secara saksama (1); bermusyawarah (1) dengan mendengar pandangan rakan (1); berkomunikasi secara berhemah (1) dengan menegur tanpa menghina (1).']]]
]);

/* ===== Set 3 (BAHARU) ===== */
PAPERS.sej3=sejPaper('sej3','Sejarah Set 3','sun',[
 ['Perkataan <i>sejarah</i> berasal daripada perkataan Arab <i>syajaratun</i> yang bermaksud',['pokok','sungai','bintang','tanah'],0,'<i>Syajaratun</i> = pokok, melambangkan salasilah yang bercabang.'],
 ['Siapakah tokoh yang digelar Bapa Sejarah?',['Herodotus','Socrates','Ibnu Khaldun','Plato'],0],
 ['Antara yang berikut, yang manakah sumber yang diperoleh melalui kaedah arkeologi?',['Tembikar','Akhbar','Rakaman temu bual','Buku teks'],0],
 ['Apakah yang dimaksudkan dengan Zaman Air Batu?',['Zaman apabila sebahagian besar permukaan bumi diliputi ais','Zaman apabila semua sungai menjadi kering','Zaman apabila manusia mula menggunakan besi','Zaman apabila hujan turun sepanjang tahun'],0],
 ['Apakah tindakan haiwan ketika suhu bumi menjadi terlalu sejuk pada Zaman Air Batu?',['Berhijrah ke kawasan yang lebih panas','Membina sarang di atas ais','Berhenti mencari makanan','Berpindah ke kutub'],0],
 ['Antara berikut, yang manakah tapak Zaman Paleolitik di Malaysia?',['Kota Tampan, Perak','Lembah Bujang, Kedah','Bukit Cina, Melaka','Kota Kuala Kedah'],0],
 ['Gendang gangsa yang ditemui di Malaysia merupakan artifak zaman',['Logam','Paleolitik','Mesolitik','Neolitik'],0],
 ['Antara berikut, yang manakah ciri-ciri tamadun?<br>I Petempatan kekal<br>II Sistem tulisan<br>III Organisasi sosial<br>IV Hidup berpindah-randah',['I, II dan III sahaja','I, II dan IV sahaja','II, III dan IV sahaja','I, II, III dan IV'],0],
 ['Sistem tulisan Tamadun Mesopotamia dikenali sebagai',['kuneiform','hieroglif','piktograf Cina','Sanskrit'],0],
 ['Piramid di Mesir Purba dibina sebagai',['makam firaun','kubu pertahanan','tempat menyimpan gandum','pusat pentadbiran'],0],
 ['Tulisan pada tulang ramalan dikaitkan dengan Tamadun',['Huang He','Indus','Mesir Purba','Rom'],0],
 ['Negara-kota Sparta terkenal kerana',['kekuatan ketenteraan','perkembangan falsafah','perdagangan rempah','seni lukis'],0],
 ['Undang-undang Dua Belas Jadual diperkenalkan dalam Tamadun',['Rom','Yunani','China','India'],0],
 ['Sukan Olimpik berasal daripada Tamadun',['Yunani','Rom','Mesopotamia','Huang He'],0],
 ['Universiti Nalanda di India terkenal sebagai pusat pengajian agama',['Buddha','Islam','Kristian','Tao'],0],
 ['Ajaran Confucius menekankan',['nilai moral dan hubungan baik dalam masyarakat','kekuatan tentera semata-mata','penyembahan berhala','perdagangan antarabangsa'],0],
 ['Pembinaan Tembok Besar China dimulakan secara besar-besaran pada zaman Dinasti',['Qin','Ming','Han','Tang'],0],
 ['Peristiwa Hijrah ialah perpindahan Nabi Muhammad SAW dari Mekah ke',['Madinah','Taif','Baitulmuqaddis','Habsyah'],0],
 ['Apakah tujuan Piagam Madinah?',['Menyatupadukan masyarakat Madinah yang berbilang kaum dan agama','Mengisytiharkan perang terhadap Mekah','Menentukan harga barang di pasar','Melantik khalifah pertama'],0],
 ['Ibnu Sina terkenal dalam bidang perubatan melalui kitabnya',['al-Qanun fi al-Tibb','al-Muqaddimah','al-Jabr wa al-Muqabalah','Kitab al-Hind'],0]
].map(([q,o,a,ex],i)=>{const [no,na]=SHUF(o,a,i*7+3);return [q,no,na,ex]}),[
 ['Sejarah membantu kita memahami masa lalu dan merancang masa hadapan.',[
  ['Nyatakan maksud sejarah.',2,'Kajian tentang peristiwa masa lalu (1) yang benar-benar berlaku dan dibuktikan dengan sumber (1).'],
  ['Jelaskan dua kepentingan mempelajari sejarah.',4,'Mengenali identiti bangsa (1) supaya kita tahu asal usul masyarakat (1); mengambil iktibar daripada peristiwa lalu (1) supaya kesilapan tidak berulang (1). Terima: memupuk semangat patriotisme dengan huraian.'],
  ['Huraikan dua cara anda dapat menghayati sejarah keluarga sendiri.',4,'Membina salasilah keluarga (1) untuk mengenali generasi terdahulu (1); menemu bual datuk dan nenek (1) untuk mendengar pengalaman mereka (1). Terima: menyimpan album gambar lama dengan huraian.']]],
 ['Penemuan logam mengubah kehidupan manusia prasejarah.',[
  ['Nyatakan tiga artifak Zaman Logam yang ditemui di Malaysia.',3,'Gendang gangsa; loceng gangsa; bejana gangsa; alat besi seperti tulang mawas; manik. Terima mana-mana tiga.'],
  ['Jelaskan tiga kegunaan logam kepada manusia prasejarah.',3,'Membuat alat pertanian; membuat senjata; membuat perhiasan; digunakan dalam upacara keagamaan. Terima mana-mana tiga.'],
  ['Huraikan dua kepentingan teknologi kepada kehidupan masyarakat pada masa kini.',4,'Memudahkan komunikasi (1) melalui telefon pintar dan internet (1); meningkatkan pengeluaran (1) kerana mesin mempercepat kerja (1). Terima kepentingan lain dengan huraian.']]],
 ['Sungai Nil menjadi nadi kepada Tamadun Mesir Purba.',[
  ['Nyatakan dua sumbangan Tamadun Mesir Purba.',2,'Piramid; kalendar; kertas papirus; tulisan hieroglif; teknik pengawetan mayat (mumia). Terima mana-mana dua.'],
  ['Jelaskan dua kepentingan Sungai Nil kepada penduduk Mesir Purba.',4,'Banjir bermusim membawa tanah lanar (1) yang subur untuk pertanian (1); menjadi jalan pengangkutan (1) untuk perdagangan dan membawa batu binaan (1).'],
  ['Huraikan dua cara menghargai warisan seni bina negara kita.',4,'Melawat bangunan bersejarah (1) untuk mengenali nilai warisannya (1); tidak melakukan vandalisme (1) supaya bangunan kekal terpelihara (1). Terima cara lain dengan huraian.']]],
 ['Tamadun India dan China banyak menyumbang kepada dunia.',[
  ['Nyatakan tiga bidang sumbangan Tamadun India.',3,'Matematik (angka sifar, sistem perpuluhan); perubatan (Ayurveda); kesusasteraan (Ramayana, Mahabharata); seni bina (stupa). Terima mana-mana tiga.'],
  ['Jelaskan tiga ciptaan Tamadun China yang masih digunakan hingga kini.',3,'Kertas; kompas; teknik percetakan; serbuk letupan; kain sutera. Terima mana-mana tiga.'],
  ['Huraikan dua cara anda dapat mengamalkan semangat inovasi dalam kehidupan.',4,'Mencipta penyelesaian kepada masalah harian (1), contohnya projek kitar semula di sekolah (1); menyertai pertandingan sains atau reka cipta (1) untuk mengasah idea kreatif (1).']]]
],[
 ['Sumbangan Tamadun Yunani dan Rom','Tamadun Yunani dan Rom meninggalkan warisan dalam bidang pemerintahan, undang-undang, seni bina dan sukan yang masih dirasai hingga hari ini.',[
  ['Nyatakan empat sumbangan Tamadun Yunani.',4,'Sistem demokrasi di Athens; Sukan Olimpik; falsafah (Socrates, Plato, Aristotle); seni bina seperti Parthenon; drama dan teater; matematik (Pythagoras). Terima mana-mana empat.'],
  ['Jelaskan empat sumbangan Tamadun Rom dalam bidang undang-undang dan seni bina.',8,'Undang-undang Dua Belas Jadual (1) menjadi asas sistem undang-undang (1); akueduk (1) menyalurkan air ke bandar (1); jalan raya (1) menghubungkan wilayah empayar (1); Colosseum (1) menjadi arena pertunjukan (1). Terima Pantheon atau kubah dengan huraian.'],
  ['Huraikan empat cara mengamalkan nilai demokrasi dalam kehidupan murid di sekolah.',8,'Mengundi ketua kelas (1) secara adil dan rahsia (1); menghormati pendapat rakan (1) semasa perbincangan (1); mematuhi keputusan majoriti (1) walaupun berbeza pendapat (1); bermesyuarat dalam kelab (1) untuk membuat keputusan bersama (1).']]],
 ['Kepimpinan Nabi Muhammad SAW di Madinah','Selepas peristiwa Hijrah, Nabi Muhammad SAW berjaya membentuk sebuah negara Islam di Madinah yang aman walaupun penduduknya terdiri daripada pelbagai kaum dan agama.',[
  ['Nyatakan empat langkah Nabi Muhammad SAW menyatukan masyarakat di Madinah.',4,'Membina Masjid Nabawi; mempersaudarakan golongan Muhajirin dan Ansar; menggubal Piagam Madinah; mengadakan perjanjian damai dengan kaum lain. 1m setiap isi.'],
  ['Jelaskan empat kepentingan Piagam Madinah.',8,'Menjamin kebebasan beragama (1) bagi semua penduduk (1); menetapkan hak dan tanggungjawab (1) setiap golongan (1); mewujudkan pertahanan bersama (1) apabila Madinah diserang (1); menjadikan Nabi Muhammad SAW sebagai rujukan (1) dalam menyelesaikan pertikaian (1).'],
  ['Huraikan empat cara mengukuhkan perpaduan dalam masyarakat Malaysia.',8,'Menyambut perayaan bersama (1) seperti rumah terbuka (1); bergaul dengan rakan pelbagai kaum (1) di sekolah (1); menghormati agama dan budaya lain (1) supaya tidak berlaku salah faham (1); menyertai aktiviti kemasyarakatan (1) seperti gotong-royong (1).']]]
]);
