/* ================= SAINS ================= */
const snPaper=(id,short,A,B,C)=>({id,subj:'SN',lang:'ms',title:'Sains · '+short,short,color:'leaf',kertas:[{k:'Kertas Sains (2 jam)',time:120,mk:100,sec:[
 {h:'Bahagian A',mk:20,ins:'Jawab semua soalan. Pilih satu jawapan yang paling tepat.',g:[{stim:'',items:A.map((q,i)=>{const [o,na]=SHUF(q[1],q[2],i*5+(id==='sn2'?9:4));return MM(String(i+1),q[0],o,na,q[3],q[4])})}]},
 {h:'Bahagian B',mk:20,ins:'Jawab semua soalan. Setiap soalan membawa 4 markah.',g:B},
 {h:'Bahagian C',mk:60,ins:'Jawab semua soalan. Setiap soalan membawa 10 markah. Selepas hantar, baca skema dan beri markah (pelajar / '+CONFIG.parentTitle+').',g:C}
]}]});
const OPTS=(n,q,opts,a,ex)=>MM(n,q,opts,a,ex);

/* figures */
const FIG_CELL=svgFig(340,230,`<rect x="40" y="25" width="200" height="180" rx="14" fill="#C9F2C7" stroke="#17171C" stroke-width="5"/><rect x="50" y="35" width="180" height="160" rx="10" fill="#E8FBE6" stroke="#1FA35A" stroke-width="2"/><rect x="95" y="60" width="110" height="110" rx="40" fill="#BFE3FF" stroke="#17171C" stroke-width="2"/><circle cx="72" cy="70" r="16" fill="#B98CFF" stroke="#17171C" stroke-width="2"/>${[[70,160],[100,182],[215,60],[218,150],[170,182]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="11" ry="6" fill="#1FA35A" stroke="#17171C"/>`).join('')}${LN(240,40,285,40,2)}${TX(296,45,'P')}${LN(229,150,285,120,2)}${TX(296,125,'Q')}${LN(170,115,285,175,2)}${TX(296,180,'R')}${LN(60,70,20,110,2)}${TX(12,118,'S')}`,'Rajah sel tumbuhan');
const FIG_FLOWER=svgFig(320,240,`<path d="M160 230 V150" stroke="#1FA35A" stroke-width="6"/><ellipse cx="160" cy="150" rx="26" ry="18" fill="#FFB5A0" stroke="#17171C" stroke-width="2"/><path d="M110 150 Q90 90 130 80 Q150 110 145 150Z M210 150 Q230 90 190 80 Q170 110 175 150Z" fill="#FFD43B" stroke="#17171C" stroke-width="2"/><path d="M160 140 V70" stroke="#2BC3C9" stroke-width="5"/><ellipse cx="160" cy="64" rx="12" ry="7" fill="#2BC3C9" stroke="#17171C" stroke-width="2"/><path d="M140 145 L128 92 M180 145 L192 92" stroke="#17171C" stroke-width="2"/><ellipse cx="127" cy="86" rx="9" ry="6" fill="#FF6B4A" stroke="#17171C" stroke-width="2"/><ellipse cx="193" cy="86" rx="9" ry="6" fill="#FF6B4A" stroke="#17171C" stroke-width="2"/>${LN(172,62,240,40,2)}${TX(252,44,'P')}${LN(118,86,60,60,2)}${TX(48,62,'Q')}${LN(184,150,250,170,2)}${TX(262,174,'R')}${LN(135,118,60,130,2)}${TX(48,134,'S')}`,'Rajah keratan bunga');
const FIG_MIRROR=svgFig(320,190,`<rect x="40" y="150" width="240" height="10" fill="#7EC4FF" stroke="#17171C" stroke-width="2"/>${[...Array(12)].map((_,i)=>`<line x1="${46+i*20}" y1="160" x2="${36+i*20}" y2="172" stroke="#17171C"/>`).join('')}<line x1="160" y1="150" x2="160" y2="20" stroke="#17171C" stroke-dasharray="6 5" stroke-width="2"/><line x1="85" y1="43" x2="160" y2="150" stroke="#E2412B" stroke-width="3"/><path d="M110 79l-4 -12 10 7z" fill="#E2412B"/><line x1="160" y1="150" x2="235" y2="43" stroke="#2F8FE0" stroke-width="3"/>${TX(140,80,'35°',{fs:14})}${TX(182,80,'r',{fs:16})}${TX(160,14,'Garis normal',{fs:12})}${TX(70,36,'Sinar tuju',{fs:12})}${TX(255,36,'Sinar pantulan',{fs:12})}`,'Pantulan cahaya pada cermin satah');

/* ===== SAINS SAMPEL 1 ===== */
PAPERS.sn1=snPaper('sn1','Sains Sampel 1',[
 ['Alat yang paling sesuai untuk mengukur isi padu 25 ml air dengan tepat ialah',['silinder penyukat','bikar','kelalang kon','tabung uji'],0],
 ['Unit SI bagi masa ialah',['saat','minit','jam','hari'],0],
 ['Label pada sebuah botol menunjukkan bahan di dalamnya mudah terbakar. Langkah keselamatan yang betul ialah',['jauhkan botol daripada api','simpan di bawah cahaya matahari','hidu bahan itu','campurkan dengan air'],0],
 ['Struktur sel yang mengawal semua aktiviti sel ialah',['nukleus','membran sel','sitoplasma','vakuol'],0],
 ['Respirasi sel berlaku di dalam',['mitokondrion','kloroplas','dinding sel','vakuol'],0],
 ['Fotosintesis berlaku di dalam',['kloroplas','mitokondrion','nukleus','membran sel'],0],
 ['Antara berikut, yang manakah hasil respirasi sel?',['Tenaga, karbon dioksida dan air','Glukosa dan oksigen','Klorofil dan air','Oksigen dan tenaga sahaja'],0],
 ['Apakah tindak balas badan apabila suhu persekitaran sangat panas?',['Berpeluh','Menggigil','Bulu roma tegak','Salur darah mengecut'],0,'Penyejatan peluh membawa haba keluar dari badan.'],
 ['Bagaimanakah tumbuhan mengurangkan kehilangan air pada hari yang panas?',['Menutup stoma','Membuka semua stoma','Menambah daun','Memanjangkan akar sahaja'],0],
 ['Organisma yang membiak melalui belahan dedua ialah',['Amoeba','ikan','kucing','pokok mangga'],0],
 ['Bahagian bunga yang menghasilkan debunga ialah',['anter','stigma','ovari','stil'],0],
 ['Jirim ialah',['apa-apa yang mempunyai jisim dan memenuhi ruang','benda yang boleh dilihat sahaja','benda hidup sahaja','tenaga yang bergerak'],0],
 ['Perubahan keadaan jirim daripada gas kepada cecair dikenali sebagai',['kondensasi','pendidihan','peleburan','pemejalwapan'],0],
 ['Kapur barus di dalam almari semakin mengecil kerana berlaku',['pemejalwapan','peleburan','kondensasi','pembekuan'],0,'Pepejal terus bertukar kepada gas.'],
 ['Antara berikut, yang manakah unsur logam?',['Kuprum','Karbon','Oksigen','Sulfur'],0],
 ['Air laut ialah contoh',['campuran','unsur','sebatian','logam'],0],
 ['Gas yang paling banyak di dalam udara ialah',['nitrogen','oksigen','karbon dioksida','argon'],0],
 ['Tiga syarat yang diperlukan untuk pembakaran ialah',['bahan api, oksigen dan haba','air, oksigen dan haba','bahan api, nitrogen dan haba','bahan api, air dan cahaya'],0,'Ini dikenali sebagai segi tiga api.'],
 ['Ciri imej yang terbentuk pada cermin satah ialah',['tegak, sama saiz dan songsang sisi','songsang, kecil dan nyata','tegak, besar dan nyata','songsang, sama saiz dan maya'],0,'','refl'],
 ['Lapisan Bumi yang paling luar ialah',['kerak','mantel','teras luar','teras dalam'],0]
],[
 {stim:'<b>1</b> Padankan alat pengukur dengan kegunaannya. <span class="tag">4 markah</span>',items:[
  OPTS('1(a)','Termometer',['mengukur suhu','mengukur jisim','mengukur masa','mengukur panjang'],0),
  OPTS('1(b)','Neraca tiga alur',['mengukur suhu','mengukur jisim','mengukur masa','mengukur panjang'],1),
  OPTS('1(c)','Jam randik',['mengukur suhu','mengukur jisim','mengukur masa','mengukur panjang'],2),
  OPTS('1(d)','Pembaris meter',['mengukur suhu','mengukur jisim','mengukur masa','mengukur panjang'],3)]},
 {stim:'<b>2</b> Tandakan <b>Betul</b> atau <b>Salah</b> tentang sel. <span class="tag">4 markah</span>',items:[
  TF('2(a)','Sel tumbuhan mempunyai dinding sel.',true),TF('2(b)','Sel haiwan mempunyai kloroplas.',false),TF('2(c)','Sel darah merah ialah contoh sel haiwan.',true),TF('2(d)','Organisma unisel terdiri daripada banyak sel.',false)]},
 {stim:'<b>3</b> Namakan proses perubahan keadaan jirim. <span class="tag">4 markah</span>',items:[
  S('3(a)','Pepejal → cecair',['peleburan','lebur','melebur']),S('3(b)','Cecair → pepejal',['pembekuan','beku','membeku']),
  S('3(c)','Cecair → gas',['pendidihan','penyejatan','mendidih','sejatan','menyejat','didih']),S('3(d)','Pepejal → gas (terus)',['pemejalwapan','pemejal wapan','memejalwap'])]},
 {stim:'<b>4</b> Kelaskan bahan berikut sebagai <b>unsur</b>, <b>sebatian</b> atau <b>campuran</b>. <span class="tag">4 markah</span>',items:[
  OPTS('4(a)','Oksigen',['unsur','sebatian','campuran'],0),OPTS('4(b)','Air (H₂O)',['unsur','sebatian','campuran'],1),
  OPTS('4(c)','Udara',['unsur','sebatian','campuran'],2),OPTS('4(d)','Garam biasa (natrium klorida)',['unsur','sebatian','campuran'],1)]},
 {stim:'<b>5</b> Tandakan <b>Betul</b> atau <b>Salah</b> tentang cahaya. <span class="tag">4 markah</span>',items:[
  TF('5(a)','Cahaya bergerak dalam garis lurus.',true),TF('5(b)','Pelangi terbentuk akibat penyebaran cahaya.',true),
  {...TF('5(c)','Straw kelihatan bengkok di dalam air kerana pantulan cahaya.',false),ex:'Sebabnya ialah <b>pembiasan</b> cahaya.'},TF('5(d)','Langit kelihatan biru kerana penyerakan cahaya.',true)]}
],[
 {stim:`<b>1</b> Penyiasatan Saintifik <span class="tag">10 markah</span><p>Ali menjalankan eksperimen untuk mengkaji kesan suhu air terhadap masa yang diambil untuk 5 g gula melarut dalam 100 ml air.</p><div style="overflow-x:auto"><table class="dtab"><tr><th>Suhu air (°C)</th><td>20</td><td>40</td><td>60</td><td>80</td></tr><tr><th>Masa gula melarut (s)</th><td>120</td><td>80</td><td>45</td><td>20</td></tr></table></div>`,items:[
  S('1(a)','Nyatakan pemboleh ubah dimanipulasi.',['suhu air','suhu']),
  S('1(b)','Nyatakan pemboleh ubah bergerak balas.',['masa gula melarut','masa melarut','masa','masa untuk gula melarut','masa yang diambil untuk gula melarut']),
  O('1(c)','Nyatakan dua pemboleh ubah yang dimalarkan.',2,'Jisim gula (5 g); isi padu air (100 ml); jenis gula. 1m setiap satu.'),
  O('1(d)','Tulis satu hipotesis bagi eksperimen ini.',2,'<b>Semakin tinggi suhu air, semakin singkat masa yang diambil untuk gula melarut.</b> (Mesti ada kedua-dua pemboleh ubah.)'),
  O('1(e)','Ramalkan masa untuk gula melarut pada suhu 70°C. Terangkan.',2,'Antara 20 s hingga 45 s (contoh: 30 s) <i>(1m)</i>, kerana 70°C berada di antara 60°C dan 80°C <i>(1m)</i>.'),
  O('1(f)','Nyatakan satu kesimpulan.',2,'Suhu air mempengaruhi kadar gula melarut: semakin tinggi suhu, semakin cepat gula melarut. Hipotesis diterima.')]},
 {stim:`<b>2</b> Sel sebagai Unit Asas Hidupan <span class="tag">10 markah</span><p>Rajah menunjukkan sebuah sel tumbuhan.</p>${FIG_CELL}`,items:[
  S('2(a)(i)','Namakan struktur P.',['dinding sel']),S('2(a)(ii)','Namakan struktur Q.',['kloroplas']),S('2(a)(iii)','Namakan struktur S.',['nukleus']),
  O('2(b)','Nyatakan fungsi struktur R (vakuol).',1,'Menyimpan air, garam mineral dan sap sel / mengekalkan bentuk sel.'),
  O('2(c)','Susun aras organisasi hidupan berikut dari yang paling ringkas: <i>organ, sel, organisma, tisu, sistem</i>.',2,'Sel → tisu → organ → sistem → organisma.'),
  O('2(d)','Tulis persamaan perkataan bagi fotosintesis.',2,'Karbon dioksida + air → glukosa + oksigen <i>(1m)</i>, dengan syarat cahaya matahari dan klorofil <i>(1m)</i>.'),
  O('2(e)','Terangkan mengapa tumbuhan penting kepada haiwan.',2,'Tumbuhan membebaskan oksigen untuk respirasi haiwan <i>(1m)</i> dan menjadi sumber makanan (pengeluar) <i>(1m)</i>.')]},
 {stim:'<b>3</b> Koordinasi dan Gerak Balas (Homeostasis) <span class="tag">10 markah</span>',items:[
  O('3(a)','Apakah maksud homeostasis?',2,'Proses mengawal atur keadaan dalaman badan <i>(1m)</i> supaya kekal stabil walaupun keadaan luar berubah <i>(1m)</i>.'),
  O('3(b)','Pada hari yang panas, terangkan dua cara badan manusia menurunkan suhu.',4,'Berpeluh <i>(1m)</i>: penyejatan peluh menyerap haba dari kulit <i>(1m)</i>. Salur darah di bawah kulit mengembang <i>(1m)</i>: lebih banyak haba dibebaskan ke persekitaran <i>(1m)</i>.'),
  O('3(c)','Mengapakah kita perlu minum lebih banyak air selepas bersukan?',2,'Badan kehilangan banyak air melalui peluh <i>(1m)</i>; air perlu diganti untuk mengekalkan kandungan air badan / mengelakkan dehidrasi <i>(1m)</i>.'),
  O('3(d)','Nyatakan dua cara tumbuhan mengawal kehilangan air pada hari yang panas.',2,'Menutup stoma; daun menjadi layu/menggulung untuk mengurangkan luas permukaan; menggugurkan daun.')]},
 {stim:`<b>4</b> Pembiakan <span class="tag">10 markah</span><p>Rajah menunjukkan keratan sejenis bunga.</p>${FIG_FLOWER}`,items:[
  S('4(a)(i)','Namakan P.',['stigma']),S('4(a)(ii)','Namakan Q.',['anter']),S('4(a)(iii)','Namakan R.',['ovari']),
  O('4(b)','Apakah maksud pendebungaan?',2,'Pemindahan debunga dari anter <i>(1m)</i> ke stigma <i>(1m)</i>.'),
  O('4(c)','Nyatakan dua agen pendebungaan dan satu ciri bunga yang didebungakan oleh serangga.',3,'Agen: serangga, angin, burung, air <i>(2m)</i>. Ciri: kelopak berwarna terang / berbau wangi / ada madu <i>(1m)</i>.'),
  O('4(d)','Selepas persenyawaan, ovari berkembang menjadi ____ dan ovul menjadi ____.',2,'Ovari → <b>buah</b> <i>(1m)</i>; ovul → <b>biji benih</b> <i>(1m)</i>.')]},
 {stim:'<b>5</b> Udara <span class="tag">10 markah</span><p>Sebatang lilin yang menyala ditutup dengan sebuah balang gas. Selepas beberapa saat, nyalaan lilin terpadam.</p>',items:[
  O('5(a)','Mengapakah nyalaan lilin terpadam?',2,'Oksigen di dalam balang telah habis digunakan <i>(1m)</i>; pembakaran memerlukan oksigen <i>(1m)</i>.'),
  O('5(b)','Ramalkan apa yang berlaku jika balang yang lebih besar digunakan. Terangkan.',2,'Lilin menyala lebih lama <i>(1m)</i> kerana terdapat lebih banyak oksigen <i>(1m)</i>.'),
  O('5(c)','Nyatakan dua punca pencemaran udara.',2,'Asap kenderaan; asap kilang; pembakaran terbuka; kebakaran hutan.'),
  O('5(d)','Cadangkan dua langkah untuk mengurangkan pencemaran udara.',2,'Guna pengangkutan awam; larang pembakaran terbuka; tanam lebih banyak pokok; pasang penapis pada cerobong kilang.'),
  O('5(e)','Nyatakan dua kesan jerebu kepada kesihatan manusia.',2,'Batuk / sesak nafas; mata pedih; asma bertambah teruk.')]},
 {stim:'<b>6</b> Bumi <span class="tag">10 markah</span>',items:[
  O('6(a)','Namakan tiga lapisan utama Bumi.',3,'Kerak; mantel; teras.'),
  S('6(b)','Jenis batuan yang terbentuk apabila lava atau magma menyejuk dan membeku ialah batuan ____.',['igneus','batuan igneus']),
  O('6(c)','Nyatakan dua contoh geobencana.',2,'Gempa bumi; tanah runtuh; letusan gunung berapi; tsunami; banjir lumpur.'),
  O('6(d)','Terangkan dua langkah untuk mengurangkan risiko tanah runtuh di kawasan tanah tinggi.',4,'Menanam tumbuhan penutup bumi <i>(1m)</i> supaya akar mencengkam tanah <i>(1m)</i>; membina sistem saliran yang baik <i>(1m)</i> supaya air hujan tidak meresap berlebihan ke dalam tanah cerun <i>(1m)</i>. Terima: tembok penahan, elak menebang hutan di cerun.')]}
]);

/* ===== SAINS SAMPEL 2 ===== */
PAPERS.sn2=snPaper('sn2','Sains Sampel 2',[
 ['Langkah pertama dalam penyiasatan saintifik ialah',['mengenal pasti masalah','membuat kesimpulan','menjalankan eksperimen','mengumpul data'],0],
 ['1 kg bersamaan dengan',['1000 g','100 g','10 g','10 000 g'],0],
 ['Alat yang digunakan untuk melihat sel dengan jelas ialah',['mikroskop','kanta tangan','teleskop','periskop'],0],
 ['Antara berikut, yang manakah organisma unisel?',['Paramesium','cendawan','ikan','manusia'],0],
 ['Respirasi sel menggunakan',['glukosa dan oksigen','karbon dioksida dan air','klorofil dan cahaya','nitrogen dan air'],0],
 ['Fungsi klorofil ialah',['menyerap cahaya matahari','menyimpan air','mengawal aktiviti sel','memberi sokongan kepada sel'],0],
 ['Menggigil membantu badan',['menghasilkan haba','membebaskan haba','mengurangkan air','menyerap oksigen'],0],
 ['Organ yang membantu mengawal kandungan air dalam badan manusia ialah',['ginjal','jantung','paru-paru','perut'],0],
 ['Pembiakan seks melibatkan',['persenyawaan gamet jantan dan gamet betina','satu induk sahaja','pertunasan','keratan batang'],0],
 ['Antara berikut, yang manakah contoh pembiakan vegetatif?',['Keratan batang ubi kayu','Biji benih padi','Telur ayam','Spora paku pakis'],0],
 ['Fungsi stigma ialah',['menerima debunga','menghasilkan debunga','menyokong anter','melindungi ovul'],0],
 ['Zarah-zarah dalam pepejal',['tersusun rapat dan bergetar di kedudukan tetap','bergerak bebas dan rawak','berjauhan antara satu sama lain','tidak mempunyai tenaga'],0],
 ['Ketumpatan air ialah 1 g/cm³. Objek manakah akan terapung di atas air?',['Objek dengan ketumpatan 0.6 g/cm³','Objek dengan ketumpatan 2.7 g/cm³','Objek dengan ketumpatan 7.9 g/cm³','Objek dengan ketumpatan 1.5 g/cm³'],0,'Kurang tumpat daripada air → terapung.','dens'],
 ['Bahan yang terbentuk apabila dua atau lebih unsur bergabung secara kimia ialah',['sebatian','campuran','logam','aloi'],0],
 ['Neon dan argon terletak dalam Kumpulan ____ Jadual Berkala.',['18','1','2','17'],0,'Kumpulan 18 = gas adi.'],
 ['Gas yang menyokong pembakaran ialah',['oksigen','nitrogen','karbon dioksida','wap air'],0],
 ['Kesan rumah hijau bertambah teruk akibat peningkatan gas',['karbon dioksida','oksigen','nitrogen','neon'],0],
 ['Cermin cembung sering dipasang di selekoh jalan raya kerana',['memberikan pandangan yang lebih luas','membesarkan imej','menghasilkan imej songsang','memantulkan cahaya ke atas'],0],
 ['Apabila cahaya merah dan cahaya hijau digabungkan, warna yang terhasil ialah',['kuning','magenta','sian','putih'],0,'','mix'],
 ['Batuan sedimen terbentuk melalui',['pemendapan dan pemampatan sedimen','penyejukan magma','pemanasan batuan pada suhu tinggi','letusan gunung berapi'],0]
],[
 {stim:'<b>1</b> Padankan bahagian sel dengan fungsinya. <span class="tag">4 markah</span>',items:[
  OPTS('1(a)','Membran sel',['mengawal keluar masuk bahan','mengawal semua aktiviti sel','menjalankan respirasi sel','memberi bentuk tetap kepada sel'],0),
  OPTS('1(b)','Nukleus',['mengawal keluar masuk bahan','mengawal semua aktiviti sel','menjalankan respirasi sel','memberi bentuk tetap kepada sel'],1),
  OPTS('1(c)','Mitokondrion',['mengawal keluar masuk bahan','mengawal semua aktiviti sel','menjalankan respirasi sel','memberi bentuk tetap kepada sel'],2),
  OPTS('1(d)','Dinding sel',['mengawal keluar masuk bahan','mengawal semua aktiviti sel','menjalankan respirasi sel','memberi bentuk tetap kepada sel'],3)]},
 {stim:'<b>2</b> Tandakan <b>Betul</b> atau <b>Salah</b>. <span class="tag">4 markah</span>',items:[
  TF('2(a)','Suhu badan normal manusia ialah kira-kira 37°C.',true),TF('2(b)','Badan berpeluh lebih banyak pada hari yang sejuk.',false),
  TF('2(c)','Ubi kentang boleh membiak secara aseks melalui ubinya.',true),{...TF('2(d)','Persenyawaan pada tumbuhan berbunga berlaku di dalam anter.',false),ex:'Persenyawaan berlaku di dalam <b>ovul</b> (dalam ovari).'}]},
 {stim:'<b>3</b> Ketumpatan = jisim ÷ isi padu. Ketumpatan air = 1 g/cm³. <span class="tag">4 markah</span>',items:[
  N('3(a)','Objek X: jisim 60 g, isi padu 20 cm³. Ketumpatan X = ___ g/cm³',['3'],1,'60 ÷ 20 = 3','dens'),
  N('3(b)','Objek Y: jisim 24 g, isi padu 30 cm³. Ketumpatan Y = ___ g/cm³',['0.8','.8'],1,'24 ÷ 30 = 0.8','dens'),
  OPTS('3(c)','Di dalam air, objek X akan',['terapung','tenggelam'],1),OPTS('3(d)','Di dalam air, objek Y akan',['terapung','tenggelam'],0)]},
 {stim:'<b>4</b> Udara <span class="tag">4 markah</span>',items:[
  N('4(a)','Peratus nitrogen dalam udara ≈ ___%',['78']),N('4(b)','Peratus oksigen dalam udara ≈ ___%',['21']),
  S('4(c)','Gas yang digunakan oleh tumbuhan semasa fotosintesis',['karbon dioksida','co2']),S('4(d)','Gas yang menyebabkan air kapur menjadi keruh',['karbon dioksida','co2'])]},
 {stim:'<b>5</b> Penambahan cahaya. Pilih warna yang terhasil. <span class="tag">4 markah</span>',items:[
  OPTS('5(a)','Merah + biru',['kuning','magenta','sian','putih'],1,'','mix'),OPTS('5(b)','Hijau + biru',['kuning','magenta','sian','putih'],2,'','mix'),
  OPTS('5(c)','Merah + hijau + biru',['kuning','magenta','sian','putih'],3,'','mix'),OPTS('5(d)','Penapis merah hanya membenarkan cahaya ____ melaluinya.',['merah','hijau','biru','putih'],0)]}
],[
 {stim:`<b>1</b> Penyiasatan Saintifik <span class="tag">10 markah</span><p>Seorang murid mengkaji kesan panjang tali bandul terhadap masa untuk 10 ayunan lengkap. Jisim ladung yang sama digunakan.</p><div style="overflow-x:auto"><table class="dtab"><tr><th>Panjang tali (cm)</th><td>20</td><td>40</td><td>60</td><td>80</td></tr><tr><th>Masa 10 ayunan (s)</th><td>9.0</td><td>12.7</td><td>15.5</td><td>18.0</td></tr></table></div>`,items:[
  O('1(a)','Nyatakan tujuan eksperimen ini.',2,'Untuk mengkaji kesan panjang tali bandul <i>(1m)</i> terhadap masa ayunan <i>(1m)</i>.'),
  S('1(b)','Pemboleh ubah dimanipulasi:',['panjang tali','panjang tali bandul']),
  S('1(c)','Pemboleh ubah bergerak balas:',['masa 10 ayunan','masa ayunan','masa untuk 10 ayunan','masa','masa 10 ayunan lengkap']),
  S('1(d)','Pemboleh ubah dimalarkan:',['jisim ladung','ladung','jisim','jisim bandul']),
  O('1(e)','Nyatakan hubungan antara panjang tali dengan masa ayunan.',2,'Semakin panjang tali <i>(1m)</i>, semakin panjang masa yang diambil untuk 10 ayunan <i>(1m)</i>.'),
  O('1(f)','Mengapakah masa untuk 10 ayunan diukur, bukan untuk satu ayunan sahaja?',2,'Untuk mengurangkan ralat <i>(1m)</i> kerana satu ayunan terlalu cepat untuk diukur dengan tepat <i>(1m)</i>.'),
  S('1(g)','Nyatakan unit SI bagi masa.',['saat','s'])]},
 {stim:'<b>2</b> Respirasi Sel dan Fotosintesis <span class="tag">10 markah</span><p>Sejenis tumbuhan akuatik diletakkan di dalam air di bawah lampu. Gelembung gas terbebas daripada tumbuhan itu.</p>',items:[
  O('2(a)','Tulis persamaan perkataan bagi respirasi sel.',2,'Glukosa + oksigen <i>(1m)</i> → karbon dioksida + air + tenaga <i>(1m)</i>.'),
  O('2(b)','Nyatakan dua perbezaan antara respirasi sel dengan fotosintesis.',4,'Respirasi menggunakan oksigen, fotosintesis membebaskan oksigen <i>(2m)</i>; respirasi berlaku di mitokondrion, fotosintesis di kloroplas <i>(2m)</i>. Terima: respirasi berlaku sepanjang masa, fotosintesis hanya ketika ada cahaya.'),
  S('2(c)','Namakan gas dalam gelembung itu.',['oksigen','o2']),
  O('2(d)','Ramalkan apa yang berlaku kepada bilangan gelembung jika lampu dijauhkan.',1,'Bilangan gelembung berkurang (kerana keamatan cahaya berkurang).'),
  O('2(e)','Terangkan kepentingan fotosintesis kepada keseimbangan gas di atmosfera.',2,'Fotosintesis menyerap karbon dioksida <i>(1m)</i> dan membebaskan oksigen, menggantikan oksigen yang digunakan dalam respirasi dan pembakaran <i>(1m)</i>.')]},
 {stim:'<b>3</b> Pembiakan <span class="tag">10 markah</span>',items:[
  O('3(a)','Nyatakan dua perbezaan antara pembiakan seks dengan pembiakan aseks.',4,'Seks melibatkan dua induk, aseks satu induk <i>(2m)</i>; seks melibatkan persenyawaan gamet, aseks tiada persenyawaan <i>(2m)</i>. Terima: anak hasil seks ada variasi, aseks seiras induk.'),
  O('3(b)','Padankan setiap organisma dengan cara pembiakan aseksnya: Amoeba, yis, cendawan.',3,'Amoeba → belahan dedua; yis → pertunasan; cendawan → pembentukan spora. 1m setiap satu.'),
  O('3(c)','Terangkan mengapa ibu mengandung perlu mengambil makanan seimbang dan mengelakkan asap rokok.',3,'Makanan seimbang membekalkan nutrien untuk tumbesaran janin <i>(1m)</i>. Bahan berbahaya daripada asap rokok boleh sampai kepada janin <i>(1m)</i> dan menjejaskan perkembangan janin <i>(1m)</i>.')]},
 {stim:'<b>4</b> Jadual Berkala dan Jirim <span class="tag">10 markah</span>',items:[
  O('4(a)','Nyatakan dua perbezaan sifat antara logam dengan bukan logam.',4,'Logam berkilat, bukan logam pudar <i>(2m)</i>; logam mengalirkan elektrik dan haba, bukan logam penebat <i>(2m)</i>. Terima: logam mulur dan boleh ditempa.'),
  OPTS('4(b)(i)','Kaedah terbaik untuk mengasingkan pasir daripada air:',['penurasan','penyejatan','kromatografi','tarikan magnet'],0),
  OPTS('4(b)(ii)','Kaedah terbaik untuk mendapatkan garam daripada larutan garam:',['penurasan','penyejatan','kromatografi','tarikan magnet'],1),
  OPTS('4(b)(iii)','Kaedah terbaik untuk mengasingkan serbuk besi daripada serbuk sulfur:',['penurasan','penyejatan','kromatografi','tarikan magnet'],3),
  OPTS('4(b)(iv)','Kaedah terbaik untuk mengasingkan warna-warna dalam dakwat:',['penurasan','penyejatan','kromatografi','tarikan magnet'],2),
  O('4(c)','Mengapakah dawai elektrik diperbuat daripada kuprum dan disalut dengan plastik?',2,'Kuprum ialah konduktor elektrik yang baik <i>(1m)</i>; plastik ialah penebat yang mengelakkan renjatan elektrik <i>(1m)</i>.')]},
 {stim:`<b>5</b> Cahaya dan Optik <span class="tag">10 markah</span><p>Rajah menunjukkan sinar cahaya yang mengenai sebuah cermin satah.</p>${FIG_MIRROR}`,items:[
  N('5(a)','Nyatakan nilai sudut pantulan, r (dalam darjah).',['35'],1,'Sudut pantulan = sudut tuju.','refl'),
  O('5(b)','Nyatakan dua hukum pantulan.',2,'Sudut tuju sama dengan sudut pantulan <i>(1m)</i>; sinar tuju, sinar pantulan dan garis normal terletak pada satah yang sama <i>(1m)</i>.'),
  O('5(c)','Periskop menggunakan dua cermin satah. Nyatakan satu kegunaan periskop.',2,'Melihat objek di atas halangan / dari kapal selam ke permukaan laut / melihat di atas kepala orang ramai. (Penerangan 2m.)'),
  O('5(d)','Terangkan bagaimana pelangi terbentuk.',3,'Cahaya matahari masuk ke dalam titisan air hujan <i>(1m)</i>, lalu dibiaskan dan disebarkan <i>(1m)</i> kepada tujuh warna (merah hingga ungu) <i>(1m)</i>.'),
  O('5(e)','Mengapakah dasar kolam kelihatan lebih cetek daripada kedalaman sebenar?',2,'Pembiasan cahaya <i>(1m)</i>: cahaya membengkok menjauhi normal apabila keluar dari air ke udara, jadi imej kelihatan lebih tinggi <i>(1m)</i>.')]},
 {stim:'<b>6</b> Bumi <span class="tag">10 markah</span>',items:[
  OPTS('6(a)(i)','Batuan yang terbentuk melalui pemendapan dan pemampatan:',['sedimen','igneus','metamorf'],0),
  OPTS('6(a)(ii)','Batuan yang terbentuk apabila magma menyejuk:',['sedimen','igneus','metamorf'],1),
  OPTS('6(a)(iii)','Batuan yang terbentuk apabila batuan lain dikenakan suhu dan tekanan tinggi:',['sedimen','igneus','metamorf'],2),
  O('6(b)','Nyatakan dua cara saintis menganggar usia Bumi.',2,'Kajian fosil; pentarikhan radioaktif batuan; kajian lapisan batuan sedimen.'),
  O('6(c)','Nyatakan dua sumber Bumi dan kegunaannya.',4,'Petroleum → bahan api <i>(2m)</i>; batu kapur → membuat simen <i>(2m)</i>. Terima: bijih timah → tin, pasir silika → kaca, emas → barang kemas.'),
  O('6(d)','Cadangkan satu cara memulihara sumber Bumi.',1,'Amalkan 3R / kitar semula logam / guna tenaga boleh baharu.')]}
]);
