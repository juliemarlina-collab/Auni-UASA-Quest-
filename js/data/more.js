/* ===== generic builder ===== */
const mcqSec=(h,mk,ins,list,seed)=>({h,mk,ins,g:[{stim:'',items:list.map((q,i)=>{const [o,na]=SHUF(q[1],q[2],i*7+seed);return MM(String(i+1),q[0],o,na,q[3],q[4])})}]});
const tfSec=(h,ins,list,start)=>({h,mk:list.length,ins,g:[{stim:'',items:list.map((q,i)=>({...TF(String(start+i),q[0],q[1]),ex:q[2]||''}))}]});
const ordItems=(pref,steps,lab)=>{const [o]=SHUF(steps,0,steps.length*3+pref.length);return steps.map((s,i)=>MM(`${pref}${i+1}`,`${lab||'Langkah'} ke-${i+1}`,o,o.indexOf(s)))};
const matchItems=(pref,pairs,opts0)=>{const [opts]=SHUF(opts0,0,opts0.length*5+pref.length+pairs.length);return pairs.map(([q,a],i)=>MM(`${pref}(${'abcdef'[i]})`,q,opts,opts.indexOf(a)))};
const paper=(id,subj,short,color,k,time,mk,sec)=>({id,subj,lang:'ms',title:short,short,color,kertas:[{k,time,mk,sec}]});

/* ================= PJK ================= */
const PJK_A_INS='Jawab semua soalan. Pilih satu jawapan yang paling tepat.';
const PJK_B_INS='Tandakan <b>Betul</b> atau <b>Salah</b> bagi setiap pernyataan.';
const KOMP=['daya tahan kardiovaskular','kelenturan','daya tahan otot abdomen','kekuatan dan daya tahan otot tangan & bahu'];
const DRSABC=['Pastikan kawasan selamat (Bahaya)','Periksa tindak balas mangsa (Respons)','Minta bantuan / hubungi 999 (Seru)','Buka saluran pernafasan (Saluran udara)','Periksa pernafasan mangsa (Pernafasan)','Mulakan CPR (Peredaran)'];
PAPERS.pjk1=paper('pjk1','PJK','PJK Sampel 1','sky','Kertas PJK (1 jam)',60,50,[
 mcqSec('Bahagian A',30,PJK_A_INS,[
  ['Antara berikut, yang manakah komponen kecergasan berasaskan kesihatan?',['Kelenturan','Ketangkasan','Imbangan','Masa tindak balas'],0],
  ['Ujian naik turun bangku dalam SEGAK mengukur',['daya tahan kardiovaskular','kelenturan','kelajuan','imbangan'],0],
  ['Ujian jangkauan melunjur mengukur',['kelenturan','kekuatan otot','kelajuan','koordinasi'],0],
  ['Ujian ringkuk tubi separa mengukur',['daya tahan otot abdomen','kelenturan','daya tahan kardiovaskular','ketangkasan'],0],
  ['Tujuan utama aktiviti memanaskan badan ialah',['meningkatkan suhu badan dan mengurangkan risiko kecederaan','memenatkan otot','menurunkan kadar nadi','menggantikan latihan utama'],0],
  ['Antara berikut, yang manakah aktiviti menyejukkan badan?',['Regangan statik secara perlahan','Lari pecut','Lompat bintang laju','Tekan tubi'],0],
  ['Kadar nadi boleh diambil pada',['pergelangan tangan atau leher','lutut','siku','buku lali'],0],
  ['Bilangan pemain bola sepak bagi satu pasukan di padang ialah',['11','7','6','9'],0],
  ['Dalam bola jaring, pemain yang boleh menjaringkan gol ialah',['GS dan GA','GK dan GD','C dan WA','WD dan WA'],0],
  ['Dalam bola tampar, kemahiran memukul bola dengan kuat ke gelanggang lawan dipanggil',['rejaman','servis','hantaran atas','benteng'],0],
  ['Dalam badminton, pukulan tinggi ke bahagian belakang gelanggang lawan dipanggil',['lob','dropshot','smesy','servis pendek'],0],
  ['Teknik permulaan bagi acara lari pecut 100 m ialah',['mula duduk','mula berdiri','mula berjalan','mula melompat'],0],
  ['Susunan fasa lompat jauh yang betul ialah',['lari landas, lonjakan, layangan, mendarat','lonjakan, lari landas, mendarat, layangan','layangan, lonjakan, lari landas, mendarat','lari landas, layangan, lonjakan, mendarat'],0],
  ['Dalam lontar peluru, peluru mesti',['ditolak dari bahu','dibaling dari atas kepala','dilempar seperti lembing','digolek di atas tanah'],0],
  ['Gaya lompat tinggi dengan belakang badan melepasi palang ialah',['Fosbury Flop','gaya gunting','gaya guling sisi','gaya straddle'],0],
  ['Dalam gimnastik, bentuk badan dengan lutut dirapatkan ke dada dipanggil',['tuck (bulat)','pike','kangkang','lurus'],0],
  ['Tapak perkhemahan yang sesuai ialah',['kawasan rata dan jauh dari tebing sungai','di bawah pokok mati','di tepi sungai','di lereng bukit yang curam'],0],
  ['Antara berikut, yang manakah menunjukkan etika kesukanan?',['Menghormati keputusan pengadil','Bertengkar dengan lawan','Meninggalkan padang ketika kalah','Mengejek pasukan lawan'],0],
  ['Perubahan fizikal yang berlaku kepada remaja lelaki semasa akil baligh ialah',['suara menjadi garau','tinggi badan berhenti bertambah','rambut berhenti tumbuh','suara menjadi nyaring'],0],
  ['Cara yang betul untuk menjaga kulit berjerawat ialah',['mencuci muka dengan pencuci lembut dan tidak memicit jerawat','memicit jerawat setiap hari','tidak mencuci muka langsung','menggunakan sabun basuh pakaian'],0],
  ['Berdasarkan Pinggan Sihat Malaysia, separuh pinggan perlu diisi dengan',['sayur-sayuran dan buah-buahan','nasi','ayam goreng','kuih-muih'],0],
  ['Zat makanan yang penting untuk membina dan membaiki tisu badan ialah',['protein','karbohidrat','lemak','gula'],0],
  ['Malnutrisi bermaksud',['kekurangan atau berlebihan zat makanan','makan tiga kali sehari','minum air yang cukup','makan makanan seimbang'],0],
  ['Bahan dalam rokok dan vape yang menyebabkan ketagihan ialah',['nikotin','vitamin','kalsium','glukosa'],0],
  ['Perokok pasif ialah orang yang',['menghidu asap rokok orang lain','menjual rokok','merokok setiap hari','berhenti merokok'],0],
  ['Penyakit yang dibawa oleh nyamuk Aedes ialah',['denggi','diabetes','asma','darah tinggi'],0],
  ['Antara berikut, yang manakah penyakit tidak berjangkit?',['Diabetes','Denggi','Batuk kering','Selesema'],0],
  ['Cara yang sihat untuk mengurus tekanan (stres) ialah',['bersenam dan berkongsi masalah dengan orang yang dipercayai','berkurung seorang diri','tidak tidur','makan berlebihan'],0],
  ['Dalam prosedur DRSABC, huruf D bermaksud',['bahaya: pastikan kawasan selamat','doktor','dada','darah'],0],
  ['Nisbah tekanan dada kepada hembusan bantuan pernafasan semasa CPR ialah',['30 : 2','15 : 1','10 : 10','5 : 1'],0]
 ],3),
 tfSec('Bahagian B',PJK_B_INS,[
  ['Daya tahan kardiovaskular ialah keupayaan jantung dan paru-paru bekerja dalam tempoh yang lama.',true],
  ['Ketangkasan ialah komponen kecergasan berasaskan kesihatan.',false,'Ketangkasan ialah komponen berasaskan <b>perlakuan motor</b>.'],
  ['Bola jaring dimainkan oleh 7 orang pemain bagi satu pasukan.',true],
  ['Dalam bola tampar, satu pasukan boleh menyentuh bola maksimum tiga kali sebelum menghantarnya ke gelanggang lawan.',true],
  ['Aktiviti menyejukkan badan tidak perlu dilakukan selepas bersenam.',false],
  ['Jerawat perlu dipicit supaya cepat sembuh.',false],
  ['Sarapan pagi penting untuk membekalkan tenaga kepada badan.',true],
  ['Vape tidak mengandungi bahan yang memudaratkan kesihatan.',false],
  ['Penyakit denggi boleh dicegah dengan memusnahkan tempat pembiakan nyamuk.',true],
  ['Kita perlu terus terjun ke dalam air untuk menyelamatkan mangsa lemas walaupun tidak tahu berenang.',false,'Gunakan kaedah <b>capai, baling</b> (kayu, tali, pelampung) dan minta bantuan.']
 ],1),
 {h:'Bahagian C',mk:10,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Susun langkah pertolongan cemas <b>DRSABC</b> mengikut urutan yang betul. <span class="tag">6 markah</span>',items:ordItems('1.',DRSABC)},
  {stim:'<b>2</b> Padankan ujian SEGAK dengan komponen kecergasan yang diuji. <span class="tag">4 markah</span>',items:matchItems('2',[['Naik turun bangku','daya tahan kardiovaskular'],['Tekan tubi','kekuatan dan daya tahan otot tangan & bahu'],['Jangkauan melunjur','kelenturan'],['Ringkuk tubi separa','daya tahan otot abdomen']],KOMP)}
 ]}
]);
const LUKA=['Pakai sarung tangan','Tekan luka dengan kain bersih','Tinggikan bahagian yang luka','Balut luka','Bawa ke klinik jika darah tidak berhenti'];
const GAME=['badminton','bola tampar','bola sepak','bola jaring','olahraga'];
PAPERS.pjk2=paper('pjk2','PJK','PJK Sampel 2','sky','Kertas PJK (1 jam)',60,50,[
 mcqSec('Bahagian A',30,PJK_A_INS,[
  ['Antara berikut, yang manakah komponen kecergasan berasaskan perlakuan motor?',['Ketangkasan','Kelenturan','Komposisi badan','Daya tahan otot'],0],
  ['Indeks Jisim Badan (BMI) dikira menggunakan formula',['berat (kg) ÷ tinggi² (m²)','tinggi (m) ÷ berat (kg)','berat (kg) × tinggi (m)','tinggi² (m²) ÷ berat (kg)'],0],
  ['Ujian SEGAK mengukur kecergasan',['berasaskan kesihatan','berasaskan kemahiran sukan','berasaskan akademik','berasaskan emosi'],0],
  ['Kelajuan ialah keupayaan',['bergerak dari satu tempat ke tempat lain dalam masa yang singkat','mengekalkan keseimbangan badan','menggerakkan sendi dengan luas','mengangkat beban yang berat'],0],
  ['Contoh senaman aerobik ialah',['berjoging','angkat berat','tekan tubi','lompat setempat sekali'],0],
  ['Dalam prinsip latihan FITT, huruf F bermaksud',['frekuensi (kekerapan)','fokus','fleksibel','fizikal'],0],
  ['Dalam bola sepak, kemahiran menghantar bola menggunakan kepala dipanggil',['tandukan','gelecek','sepakan sudut','tackle'],0],
  ['Penjaga gol bola sepak boleh menyentuh bola dengan tangan di',['kawasan penalti sendiri','seluruh padang','kawasan lawan','garisan tengah'],0],
  ['Dalam bola jaring, pemain C (Center) boleh bergerak di',['semua kawasan kecuali kedua-dua separuh bulatan gol','separuh bulatan gol sahaja','kawasan pertahanan sahaja','kawasan serangan sahaja'],0],
  ['Dalam bola tampar, hantaran menggunakan kedua-dua lengan bawah dipanggil',['hantaran bawah','rejaman','servis atas','benteng'],0],
  ['Dalam badminton, pukulan menjunam laju ke bawah dipanggil',['smesy','lob','dropshot','pandu'],0],
  ['Satu set permainan badminton dimenangi oleh pemain yang terlebih dahulu mencapai',['21 mata','15 mata','11 mata','25 mata'],0],
  ['Antara berikut, yang manakah acara padang?',['Lempar cakera','Lari berganti-ganti','Lari pecut 100 m','Lari berpagar'],0],
  ['Dalam lari berganti-ganti 4 × 100 m, baton mesti diserahkan di dalam',['zon pertukaran','garisan permulaan','garisan penamat','lorong lawan'],0],
  ['Lontaran peluru dikira sah jika peluru jatuh di dalam',['sektor lontaran','bulatan lontaran','trek larian','kotak pasir'],0],
  ['Dalam gimnastik, bentuk badan dengan kaki lurus dan badan bengkok di pinggang dipanggil',['pike','tuck','kangkang','lentik'],0],
  ['Contoh aktiviti rekreasi luar ialah',['mendaki bukit','bermain permainan video','menonton televisyen','membaca di bilik'],0],
  ['Antara langkah keselamatan semasa perkhemahan ialah',['memadamkan unggun api sebelum tidur','meninggalkan unggun api menyala','memasang khemah di tepi sungai','mandi di sungai pada waktu malam'],0],
  ['Perubahan emosi yang biasa berlaku semasa akil baligh ialah',['emosi mudah berubah','tidak pernah marah','tidak berminat dengan rakan','sentiasa mengantuk'],0],
  ['Kekerapan mandi yang digalakkan ialah',['sekurang-kurangnya dua kali sehari','seminggu sekali','dua hari sekali','sebulan sekali'],0],
  ['Antara berikut, yang manakah sumber karbohidrat?',['Nasi','Ikan','Telur','Sayur bayam'],0],
  ['Vitamin C banyak terdapat dalam',['buah oren dan jambu','minyak masak','nasi putih','gula'],0],
  ['Pengambilan gula dan lemak yang berlebihan boleh menyebabkan',['obesiti','rabun','pekak','demam'],0],
  ['Penyalahgunaan dadah memberi kesan buruk terutamanya kepada',['otak dan sistem saraf','kuku','rambut','gigi susu'],0],
  ['Cara terbaik untuk menolak ajakan rakan untuk merokok ialah',['berkata "tidak" dengan tegas dan beredar','mencuba sekali sahaja','merokok secara sembunyi','mengikut kehendak rakan'],0],
  ['Antara berikut, yang manakah penyakit berjangkit melalui udara?',['Batuk kering (tuberkulosis)','Denggi','Diabetes','Darah tinggi'],0],
  ['Langkah mencegah penyakit berjangkit ialah',['mencuci tangan dengan sabun','berkongsi tuala','tidak menutup mulut ketika batuk','makan tanpa mencuci tangan'],0],
  ['Antara tanda seseorang mengalami tekanan (stres) ialah',['sukar tidur dan mudah marah','sentiasa gembira','tidur yang cukup','berselera makan seperti biasa'],0],
  ['Dalam kaedah RICE untuk merawat terseliuh, huruf I bermaksud',['ais','insulin','iodin','imbangan'],0],
  ['Nombor telefon kecemasan di Malaysia ialah',['999','911','112','100'],0]
 ],5),
 tfSec('Bahagian B',PJK_B_INS,[
  ['Kelenturan ialah keupayaan sendi bergerak dalam julat pergerakan maksimum.',true],
  ['BMI 30 menunjukkan berat badan yang normal.',false,'BMI 30 ke atas dikategorikan sebagai obes.'],
  ['Perlawanan bola sepak rasmi dimainkan selama 2 × 45 minit.',true],
  ['Pemain GK dalam bola jaring boleh menjaringkan gol.',false],
  ['Dalam lari berganti-ganti, baton boleh dibaling kepada rakan sepasukan.',false],
  ['Dalam lontar peluru, peluru dibaling seperti melontar lembing.',false,'Peluru mesti <b>ditolak</b> dari bahu.'],
  ['Remaja digalakkan tidur 8 hingga 10 jam setiap malam.',true],
  ['Makanan segera boleh dimakan setiap hari kerana zatnya lengkap.',false],
  ['Ais boleh digunakan untuk mengurangkan bengkak akibat terseliuh.',true],
  ['Rokok elektronik (vape) boleh menyebabkan ketagihan nikotin.',true]
 ],1),
 {h:'Bahagian C',mk:10,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Padankan kemahiran dengan sukan. <span class="tag">5 markah</span>',items:matchItems('1',[['Smesy','badminton'],['Rejaman','bola tampar'],['Tandukan','bola sepak'],['Hantaran dada','bola jaring'],['Teknik luncur (lontar peluru)','olahraga']],GAME)},
  {stim:'<b>2</b> Susun langkah merawat luka yang berdarah mengikut urutan yang betul. <span class="tag">5 markah</span>',items:ordItems('2.',LUKA)}
 ]}
]);

/* ================= PENDIDIKAN ISLAM ================= */
const AR=s=>`<span class="ar" dir="rtl" lang="ar">${s}</span>`;
const PI_A_INS='Jawab semua soalan. Pilih satu jawapan yang paling tepat.';
const TAJ=['Izhar Halqi','Idgham Maal Ghunnah','Idgham Bila Ghunnah','Iqlab','Ikhfa\' Haqiqi'];
const TAJM=['Ikhfa\' Syafawi','Idgham Mithlain','Izhar Syafawi'];
const MALAIKAT=['menyampaikan wahyu','menurunkan hujan dan rezeki','meniup sangkakala','mencabut nyawa','mencatat amalan baik dan buruk'];
const NAJIS=['Mughallazah (berat)','Mutawassitah (sederhana)','Mukhaffafah (ringan)'];
PAPERS.pi1=paper('pi1','PI','Pendidikan Islam Sampel 1','teal','Kertas Pendidikan Islam (2 jam)',120,100,[
 mcqSec('Bahagian A',20,PI_A_INS,[
  ['Huruf-huruf qalqalah ialah',[AR('ق ط ب ج د'),AR('ء ه ع ح غ خ'),AR('ي ن م و'),AR('ل ر')],0],
  ['Bacaan mad asli (mad tabi\'i) dipanjangkan sebanyak',['2 harakat','4 harakat','6 harakat','1 harakat'],0],
  ['Bilangan huruf Izhar Halqi ialah',['6','4','2','15'],0],
  ['Rukun Iman yang keempat ialah beriman kepada',['para rasul','malaikat','kitab','hari akhirat'],0],
  ['Kitab Zabur diturunkan kepada',['Nabi Daud a.s.','Nabi Musa a.s.','Nabi Isa a.s.','Nabi Ibrahim a.s.'],0],
  ['Sifat Wujud bagi Allah bermaksud',['Allah itu ada','Allah itu sedia','Allah itu kekal','Allah itu esa'],0],
  ['Malaikat yang bertugas menjaga pintu syurga ialah',['Ridwan','Malik','Mikail','Israfil'],0],
  ['Air yang suci lagi menyucikan dipanggil air',['mutlak','musta\'mal','mutanajjis','musyammas'],0],
  ['Bilangan rukun wuduk ialah',['6','4','5','13'],0],
  ['Antara berikut, yang manakah membatalkan wuduk?',['Tidur yang tidak tetap punggung','Makan','Minum','Memotong kuku'],0],
  ['Tayammum dilakukan menggunakan',['debu tanah yang suci','pasir pantai yang basah','air hujan','batu bata'],0],
  ['Bilangan rakaat solat Maghrib ialah',['3','2','4','5'],0],
  ['Nabi Muhammad SAW dilahirkan pada Tahun',['Gajah','Kesedihan','Hijrah','Wahyu'],0],
  ['Ibu susuan Nabi Muhammad SAW ialah',['Halimatus Saadiah','Aminah','Khadijah','Fatimah'],0],
  ['Wahyu pertama diturunkan di',['Gua Hira\'','Gua Thur','Masjidil Haram','Bukit Uhud'],0],
  ['Masjid pertama yang dibina dalam sejarah Islam ialah',['Masjid Quba\'','Masjid Nabawi','Masjidil Aqsa','Masjidil Haram'],0],
  ['Dakwah Nabi SAW secara rahsia berlangsung selama kira-kira',['3 tahun','10 tahun','13 tahun','1 tahun'],0],
  ['Antara berikut, yang manakah sifat mahmudah?',['Amanah','Hasad dengki','Mengumpat','Sombong'],0],
  ['Adab terhadap guru ialah',['mendengar dengan teliti ketika guru mengajar','bercakap ketika guru mengajar','tidur dalam kelas','membantah dengan kasar'],0],
  ['Ejaan Jawi yang betul bagi perkataan <b>sekolah</b> ialah',[AR('سکوله'),AR('سکولة'),AR('سيکوله'),AR('سکولا')],0]
 ],11),
 {h:'Bahagian B · Al-Quran, Hadis & Jawi',mk:20,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Tajwid: nyatakan hukum bacaan bagi setiap keadaan. <span class="tag">10 markah</span>',items:[
   ...matchItems('1',[['Nun mati / tanwin bertemu huruf '+AR('ب'),'Iqlab'],['Nun mati / tanwin bertemu huruf '+AR('ح'),'Izhar Halqi'],['Nun mati / tanwin bertemu huruf '+AR('ي'),'Idgham Maal Ghunnah'],['Nun mati / tanwin bertemu huruf '+AR('ل'),'Idgham Bila Ghunnah'],['Nun mati / tanwin bertemu huruf '+AR('س'),'Ikhfa\' Haqiqi']],TAJ),
   ...matchItems('1.2',[['Mim mati bertemu huruf '+AR('ب'),'Ikhfa\' Syafawi'],['Mim mati bertemu huruf '+AR('م'),'Idgham Mithlain'],['Mim mati bertemu huruf selain '+AR('م')+' dan '+AR('ب'),'Izhar Syafawi']],TAJM),
   O('1(i)','Nyatakan cara membaca hukum Iqlab.',2,'Bunyi nun mati / tanwin ditukar kepada bunyi mim <i>(1m)</i>, dibaca dengan dengung 2 harakat <i>(1m)</i>.')]},
  {stim:'<b>2</b> Hadis dan Jawi <span class="tag">10 markah</span><div class="passage"><p>Rasulullah SAW bersabda yang bermaksud: <i>“Menuntut ilmu itu wajib ke atas setiap Muslim.”</i> (Riwayat Ibnu Majah)</p></div>',items:[
   O('2(a)','Berdasarkan hadis di atas, nyatakan hukum menuntut ilmu.',1,'Wajib.'),
   O('2(b)','Nyatakan dua kepentingan menuntut ilmu.',2,'Mengenal Allah dan agama; memperoleh kejayaan dunia dan akhirat; dapat membantu masyarakat; terhindar daripada kejahilan.'),
   O('2(c)','Huraikan dua cara anda mengamalkan pengajaran hadis ini sebagai pelajar.',3,'Hadir ke kelas dan memberi tumpuan <i>(1m)</i>; mengulang kaji secara konsisten <i>(1m)</i>; menghormati guru dan bertanya apabila tidak faham <i>(1m)</i>.'),
   MM('2(d)(i)','Pilih ejaan Jawi yang betul bagi <b>buku</b>.',[AR('بوکو'),AR('بوکوه'),AR('بوكو'),AR('بکو')],0),
   MM('2(d)(ii)','Pilih ejaan Jawi yang betul bagi <b>ibu</b>.',[AR('ايبو'),AR('ابو'),AR('ايبوه'),AR('عيبو')],0),
   MM('2(d)(iii)','Pilih ejaan Jawi yang betul bagi <b>rumah</b>.',[AR('رومه'),AR('رومة'),AR('روماه'),AR('رمه')],0),
   MM('2(d)(iv)','Pilih ejaan Jawi yang betul bagi <b>makan</b>.',[AR('ماکن'),AR('مکن'),AR('ماکان'),AR('ماكن')],0)]}
 ]},
 {h:'Bahagian C · Akidah',mk:20,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Beriman kepada Allah, malaikat dan kitab <span class="tag">20 markah</span>',items:[
   O('1(a)','Senaraikan enam Rukun Iman mengikut urutan.',6,'Beriman kepada Allah; malaikat; kitab-kitab; para rasul; hari akhirat; qada\' dan qadar. 1m setiap satu.'),
   ...matchItems('1(b)',[['Jibril','menyampaikan wahyu'],['Mikail','menurunkan hujan dan rezeki'],['Israfil','meniup sangkakala'],['Izrail','mencabut nyawa'],['Raqib dan Atid','mencatat amalan baik dan buruk']],MALAIKAT),
   O('1(c)','Padankan kitab dengan rasul yang menerimanya: Taurat, Injil, al-Quran.',3,'Taurat → Nabi Musa a.s.; Injil → Nabi Isa a.s.; al-Quran → Nabi Muhammad SAW.'),
   O('1(d)','Huraikan tiga kesan beriman kepada malaikat dalam kehidupan seorang remaja.',6,'Sentiasa berhati-hati dalam tindakan <i>(1m)</i> kerana setiap amalan dicatat oleh Raqib dan Atid <i>(1m)</i>; ikhlas melakukan kebaikan <i>(1m)</i> walaupun tiada orang melihat <i>(1m)</i>; menjauhi maksiat <i>(1m)</i> kerana yakin diawasi <i>(1m)</i>.')]}
 ]},
 {h:'Bahagian D · Fikah',mk:20,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Bersuci (Thaharah) <span class="tag">20 markah</span>',items:[
   ...matchItems('1(a)',[['Anjing dan babi','Mughallazah (berat)'],['Air kencing bayi lelaki di bawah 2 tahun yang hanya minum susu ibu','Mukhaffafah (ringan)'],['Darah dan nanah','Mutawassitah (sederhana)']],NAJIS),
   O('1(b)','Terangkan cara menyucikan najis mughallazah (sertu).',4,'Buang ain najis terlebih dahulu <i>(1m)</i>; basuh 7 kali dengan air mutlak <i>(1m)</i>; salah satu basuhan dicampur dengan air tanah <i>(1m)</i>; sehingga hilang warna, bau dan rasa <i>(1m)</i>.'),
   O('1(c)','Senaraikan enam rukun wuduk.',6,'Niat; membasuh muka; membasuh kedua-dua tangan hingga siku; menyapu sebahagian kepala; membasuh kedua-dua kaki hingga buku lali; tertib.'),
   O('1(d)','Nyatakan tiga perkara yang membatalkan wuduk.',3,'Keluar sesuatu dari qubul atau dubur; tidur yang tidak tetap punggung; hilang akal; bersentuh kulit lelaki dan perempuan ajnabi tanpa lapik; menyentuh kemaluan dengan tapak tangan.'),
   O('1(e)','Mengapakah umat Islam perlu menjaga kebersihan diri dan tempat?',4,'Kebersihan sebahagian daripada iman <i>(1m)</i>; syarat sah ibadah seperti solat <i>(1m)</i>; menjaga kesihatan <i>(1m)</i>; memberi keselesaan kepada orang lain <i>(1m)</i>.')]}
 ]},
 {h:'Bahagian E · Sirah, Tamadun & Akhlak',mk:20,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Kehidupan awal Nabi Muhammad SAW dan akhlak Islamiah <span class="tag">20 markah</span>',items:[
   O('1(a)','Nyatakan nama ibu, bapa dan datuk Nabi Muhammad SAW.',3,'Ibu: Aminah binti Wahab; bapa: Abdullah bin Abdul Muttalib; datuk: Abdul Muttalib.'),
   O('1(b)','Nyatakan dua peristiwa semasa Nabi SAW dipelihara oleh Halimatus Saadiah.',2,'Peristiwa pembelahan dada; ternakan dan tanaman keluarga Halimah menjadi subur/berkat.'),
   O('1(c)','Terangkan tiga sifat terpuji Nabi Muhammad SAW sebelum menjadi rasul.',6,'Amanah <i>(1m)</i>: digelar al-Amin kerana boleh dipercayai <i>(1m)</i>; jujur dalam berniaga <i>(1m)</i>: membawa barang dagangan Khadijah <i>(1m)</i>; bijaksana <i>(1m)</i>: menyelesaikan pertikaian meletakkan Hajarul Aswad <i>(1m)</i>.'),
   O('1(d)','Senaraikan tiga adab terhadap ibu bapa.',3,'Bercakap dengan lemah lembut; mematuhi suruhan yang baik; mendoakan mereka; membantu kerja rumah; meminta izin sebelum keluar.'),
   O('1(e)','Rakan anda suka mengumpat. Huraikan tiga cara anda menasihatinya.',6,'Menegur secara berhemah <i>(1m)</i> dan tidak memalukannya di khalayak <i>(1m)</i>; menerangkan mengumpat ialah dosa <i>(1m)</i> seperti memakan daging saudara sendiri <i>(1m)</i>; mengalih topik perbualan kepada perkara baik <i>(1m)</i> dan menunjukkan contoh teladan <i>(1m)</i>.')]}
 ]}
]);
PAPERS.pi2=paper('pi2','PI','Pendidikan Islam Sampel 2','teal','Kertas Pendidikan Islam (2 jam)',120,100,[
 mcqSec('Bahagian A',20,PI_A_INS,[
  ['Huruf Iqlab ialah',[AR('ب'),AR('ل'),AR('م'),AR('ح')],0],
  ['Huruf Idgham Bila Ghunnah ialah',[AR('ل ر'),AR('ي ن م و'),AR('ق ط ب ج د'),AR('ء ه ع')],0],
  ['Bilangan huruf Ikhfa\' Haqiqi ialah',['15','6','4','2'],0],
  ['Rukun Iman yang terakhir ialah beriman kepada',['qada\' dan qadar','hari akhirat','para rasul','malaikat'],0],
  ['Kitab Taurat diturunkan kepada',['Nabi Musa a.s.','Nabi Daud a.s.','Nabi Isa a.s.','Nabi Nuh a.s.'],0],
  ['Sifat Baqa\' bagi Allah bermaksud',['Allah itu kekal','Allah itu ada','Allah itu esa','Allah itu berdiri sendiri'],0],
  ['Malaikat yang bertugas menyoal mayat di dalam kubur ialah',['Munkar dan Nakir','Raqib dan Atid','Ridwan dan Malik','Jibril dan Mikail'],0],
  ['Air yang telah digunakan untuk mengangkat hadas dipanggil air',['musta\'mal','mutlak','mutanajjis','mawar'],0],
  ['Najis mukhaffafah disucikan dengan',['merenjiskan air ke seluruh tempat yang terkena najis','membasuh 7 kali dengan air tanah','membakar tempat itu','menyapu dengan kain kering sahaja'],0],
  ['Rukun wuduk yang pertama ialah',['niat','membasuh muka','membasuh tangan','tertib'],0],
  ['Jumlah rakaat solat fardu dalam sehari semalam ialah',['17','15','20','12'],0],
  ['Solat yang mempunyai 2 rakaat ialah solat',['Subuh','Zohor','Asar','Isyak'],0],
  ['Datuk yang memelihara Nabi Muhammad SAW selepas kematian ibunya ialah',['Abdul Muttalib','Abu Talib','Abu Lahab','Abbas'],0],
  ['Nabi Muhammad SAW dilahirkan di',['Mekah','Madinah','Taif','Syam'],0],
  ['Wahyu pertama ialah surah',['al-\'Alaq ayat 1 hingga 5','al-Fatihah','al-Ikhlas','al-Baqarah ayat 1 hingga 5'],0],
  ['Malaikat yang menyampaikan wahyu pertama kepada Nabi SAW ialah',['Jibril','Mikail','Israfil','Izrail'],0],
  ['Peristiwa perpindahan Nabi SAW dari Mekah ke Madinah dikenali sebagai',['Hijrah','Isra\' Mikraj','Fathu Makkah','Haji Wida\''],0],
  ['Antara berikut, yang manakah sifat mazmumah?',['Hasad dengki','Pemaaf','Jujur','Sabar'],0],
  ['Adab terhadap jiran ialah',['tidak mengganggu jiran dengan bunyi bising','membuang sampah di hadapan rumah jiran','bergaduh dengan jiran','tidak menegur jiran'],0],
  ['Ejaan Jawi yang betul bagi perkataan <b>guru</b> ialah',[AR('ݢورو'),AR('ݢرو'),AR('غورو'),AR('ݢوروه')],0]
 ],13),
 {h:'Bahagian B · Al-Quran, Hadis & Jawi',mk:20,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Tajwid <span class="tag">10 markah</span>',items:[
   ...matchItems('1',[['Tanwin bertemu huruf '+AR('ع'),'Izhar Halqi'],['Nun mati bertemu huruf '+AR('ن'),'Idgham Maal Ghunnah'],['Tanwin bertemu huruf '+AR('ر'),'Idgham Bila Ghunnah'],['Nun mati bertemu huruf '+AR('ب'),'Iqlab'],['Nun mati bertemu huruf '+AR('ت'),'Ikhfa\' Haqiqi']],TAJ),
   O('1(f)','Senaraikan enam huruf Izhar Halqi.',3,AR('ء ه ع ح غ خ')+' (hamzah, ha, ain, ha, ghain, kha). 1m bagi setiap dua huruf yang betul.'),
   O('1(g)','Terangkan maksud Izhar Halqi.',2,'Nun mati atau tanwin dibaca dengan jelas <i>(1m)</i> tanpa dengung apabila bertemu huruf halqi (huruf kerongkong) <i>(1m)</i>.')]},
  {stim:'<b>2</b> Hadis dan Jawi <span class="tag">10 markah</span><div class="passage"><p>Rasulullah SAW bersabda yang bermaksud: <i>“Senyumanmu kepada saudaramu adalah sedekah.”</i> (Riwayat at-Tirmizi)</p></div>',items:[
   O('2(a)','Apakah yang dianggap sebagai sedekah dalam hadis di atas?',1,'Senyuman kepada saudara.'),
   O('2(b)','Nyatakan dua kebaikan amalan senyum.',2,'Mengeratkan silaturahim; menggembirakan orang lain; mendapat pahala; mewujudkan suasana harmoni.'),
   O('2(c)','Huraikan dua cara mengamalkan hadis ini di sekolah.',3,'Senyum dan memberi salam kepada guru <i>(1m)</i>; menyambut rakan baharu dengan mesra <i>(1m)</i>; bersikap ramah semasa bertugas <i>(1m)</i>.'),
   MM('2(d)(i)','Pilih ejaan Jawi yang betul bagi <b>bapa</b>.',[AR('باڤ'),AR('باڤا'),AR('بڤ'),AR('باڤه')],0),
   MM('2(d)(ii)','Pilih ejaan Jawi yang betul bagi <b>sekolah</b>.',[AR('سکوله'),AR('سکولة'),AR('سکولاه'),AR('سيکوله')],0),
   MM('2(d)(iii)','Pilih ejaan Jawi yang betul bagi <b>buku</b>.',[AR('بوکو'),AR('بوکو٢'),AR('بکو'),AR('بوکوه')],0),
   MM('2(d)(iv)','Pilih ejaan Jawi yang betul bagi <b>ibu</b>.',[AR('ايبو'),AR('ايبوه'),AR('ابو'),AR('عيبو')],0)]}
 ]},
 {h:'Bahagian C · Akidah',mk:20,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Sifat-sifat Allah <span class="tag">20 markah</span>',items:[
   ...matchItems('1(a)',[['Wujud','Allah itu ada'],['Qidam','Allah itu sedia (tiada permulaan)'],['Baqa\'','Allah itu kekal'],['Wahdaniyyah','Allah itu esa'],['Qiyamuhu binafsihi','Allah berdiri dengan sendiri']],['Allah itu ada','Allah itu sedia (tiada permulaan)','Allah itu kekal','Allah itu esa','Allah berdiri dengan sendiri']),
   O('1(b)','Berikan dua bukti kewujudan Allah melalui alam ciptaan-Nya.',4,'Peredaran matahari dan bulan yang teratur <i>(2m)</i>; kejadian manusia yang sempurna <i>(2m)</i>. Terima: turun hujan menghidupkan tumbuhan.'),
   O('1(c)','Terangkan maksud sifat Mukhalafatuhu lil-hawadith.',2,'Allah berbeza dengan makhluk-Nya <i>(1m)</i>; tiada sesuatu pun yang menyerupai-Nya <i>(1m)</i>.'),
   O('1(d)','Huraikan tiga cara seorang pelajar dapat menghayati keimanan kepada sifat-sifat Allah.',6,'Bersyukur atas nikmat <i>(1m)</i> dengan menggunakan masa untuk belajar <i>(1m)</i>; sentiasa berdoa <i>(1m)</i> kerana yakin Allah Maha Mendengar <i>(1m)</i>; tidak berputus asa <i>(1m)</i> kerana Allah Maha Berkuasa <i>(1m)</i>.'),
   O('1(e)','Nyatakan tiga contoh perbuatan syirik yang perlu dijauhi.',3,'Menyembah berhala; mempercayai tangkal boleh memberi perlindungan; meminta pertolongan daripada kubur; mempercayai bomoh boleh menentukan nasib.')]}
 ]},
 {h:'Bahagian D · Fikah',mk:20,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Solat dan Tayammum <span class="tag">20 markah</span>',items:[
   ...matchItems('1(a)',[['Subuh','2 rakaat'],['Maghrib','3 rakaat'],['Isyak','4 rakaat']],['2 rakaat','3 rakaat','4 rakaat']),
   O('1(b)','Nyatakan tiga syarat sah solat.',3,'Suci daripada hadas besar dan kecil; suci badan, pakaian dan tempat daripada najis; menutup aurat; menghadap kiblat; masuk waktu.'),
   O('1(c)','Nyatakan dua keadaan yang mengharuskan tayammum.',2,'Tiada air; sakit yang tidak boleh terkena air; air hanya cukup untuk minum.'),
   O('1(d)','Huraikan cara melakukan tayammum.',6,'Niat <i>(1m)</i>; tepuk tapak tangan pada debu tanah yang suci <i>(1m)</i>; sapu ke seluruh muka <i>(1m)</i>; tepuk debu kali kedua <i>(1m)</i>; sapu tangan kanan hingga siku, kemudian tangan kiri <i>(1m)</i>; tertib <i>(1m)</i>.'),
   O('1(e)','Terangkan tiga hikmah solat fardu dalam kehidupan pelajar.',6,'Mendisiplinkan diri dengan menjaga waktu <i>(2m)</i>; mencegah daripada perbuatan keji dan mungkar <i>(2m)</i>; memberi ketenangan jiwa untuk belajar <i>(2m)</i>.')]}
 ]},
 {h:'Bahagian E · Sirah, Tamadun & Akhlak',mk:20,ins:'Jawab semua soalan.',g:[
  {stim:'<b>1</b> Penurunan wahyu dan dakwah awal <span class="tag">20 markah</span>',items:[
   O('1(a)','Nyatakan tempat dan nama malaikat yang terlibat dalam penurunan wahyu pertama.',2,'Gua Hira\' <i>(1m)</i>; Malaikat Jibril <i>(1m)</i>.'),
   O('1(b)','Nyatakan tiga orang yang awal memeluk Islam.',3,'Saidatina Khadijah; Saidina Abu Bakar as-Siddiq; Saidina Ali bin Abi Talib; Zaid bin Harithah.'),
   O('1(c)','Mengapakah dakwah pada peringkat awal dijalankan secara rahsia?',3,'Bilangan umat Islam masih sedikit <i>(1m)</i>; mengelakkan tentangan dan penyeksaan Quraisy <i>(1m)</i>; membina keimanan yang kukuh terlebih dahulu <i>(1m)</i>.'),
   O('1(d)','Senaraikan tiga cara menghormati guru.',3,'Memberi salam; mendengar ketika guru mengajar; menyiapkan kerja yang diberikan; bercakap dengan sopan.'),
   O('1(e)','Huraikan tiga kesan sifat amanah kepada diri dan masyarakat.',6,'Dipercayai orang lain <i>(1m)</i> dan diberi tanggungjawab <i>(1m)</i>; masyarakat aman <i>(1m)</i> kerana tiada penipuan <i>(1m)</i>; mendapat keredaan Allah <i>(1m)</i> dan pahala <i>(1m)</i>.'),
   O('1(f)','Nyatakan satu pengajaran daripada peristiwa wahyu pertama.',3,'Islam menekankan kepentingan membaca dan menuntut ilmu (wahyu pertama bermula dengan perintah “Bacalah”). Huraian 3m.')]}
 ]}
]);

/* ================= ASAS SAINS KOMPUTER ================= */
const PK=['leraian','pengecaman corak','peniskalaan (abstraksi)','algoritma'];
const FLOW=['terminal (mula/tamat)','proses','input/output','keputusan'];
const STRUK=['urutan','pilihan','ulangan'];
const FIG_FLOW=svgFig(300,180,`<ellipse cx="50" cy="40" rx="36" ry="20" fill="#FFD43B" stroke="#17171C" stroke-width="3"/>${TX(50,45,'P',{fs:16})}<rect x="110" y="20" width="76" height="40" fill="#7EC4FF" stroke="#17171C" stroke-width="3"/>${TX(148,45,'Q',{fs:16})}<path d="M220 20h70l-16 40h-70z" fill="#7BDC6B" stroke="#17171C" stroke-width="3"/>${TX(247,45,'R',{fs:16})}<path d="M148 95l40 35-40 35-40-35z" fill="#B98CFF" stroke="#17171C" stroke-width="3"/>${TX(148,135,'S',{fs:16})}`,'Simbol carta alir P, Q, R, S');
PAPERS.ask1=paper('ask1','ASK','ASK Sampel 1','grape','Kertas ASK (1 jam 30 minit)',90,70,[
 mcqSec('Bahagian A',10,'Jawab semua soalan. Pilih satu jawapan yang paling tepat.',[
  ['Teknik pemikiran komputasional yang memecahkan masalah besar kepada bahagian kecil ialah',['leraian','pengecaman corak','peniskalaan','algoritma'],0],
  ['Sistem nombor perduaan menggunakan digit',['0 dan 1','0 hingga 9','1 dan 2','0 hingga 7'],0,'','bin'],
  ['1 bait bersamaan dengan',['8 bit','4 bit','16 bit','1024 bit'],0],
  ['Unit ukuran data terkecil ialah',['bit','bait','kilobait','megabait'],0],
  ['Algoritma ialah',['satu set langkah yang tersusun untuk menyelesaikan masalah','sejenis perkakasan komputer','bahasa pengaturcaraan','sistem pengoperasian'],0],
  ['Simbol carta alir berbentuk rombus (berlian) mewakili',['keputusan','proses','input/output','terminal'],0],
  ['Struktur kawalan yang mengulang satu set arahan beberapa kali ialah',['ulangan','urutan','pilihan','input'],0],
  ['Dalam Scratch, blok berwarna kuning seperti "when green flag clicked" ialah blok',['Events','Motion','Looks','Sound'],0],
  ['Tag HTML untuk tajuk paling besar ialah',['&lt;h1&gt;','&lt;h6&gt;','&lt;p&gt;','&lt;br&gt;'],0,'','html'],
  ['Tag HTML untuk memaparkan imej ialah',['&lt;img&gt;','&lt;a&gt;','&lt;b&gt;','&lt;title&gt;'],0,'','html']
 ],2),
 {h:'Bahagian B',mk:40,ins:'Jawab semua soalan. Setiap soalan membawa 4 markah.',g:[
  {stim:'<b>1</b> Tukarkan nombor perduaan kepada nombor perpuluhan. <span class="tag">4 markah</span>',items:[N('1(a)','1011₂ = ',['11'],1,'8 + 0 + 2 + 1 = 11','bin'),N('1(b)','11001₂ = ',['25'],1,'16 + 8 + 1 = 25','bin'),N('1(c)','1111₂ = ',['15'],1,'','bin'),N('1(d)','100000₂ = ',['32'],1,'','bin')]},
  {stim:'<b>2</b> Tukarkan nombor perpuluhan kepada nombor perduaan. <span class="tag">4 markah</span>',items:[N('2(a)','6 = ___₂',['110'],1,'','bin'),N('2(b)','13 = ___₂',['1101'],1,'8 + 4 + 1','bin'),N('2(c)','20 = ___₂',['10100'],1,'16 + 4','bin'),N('2(d)','45 = ___₂',['101101'],1,'32 + 8 + 4 + 1','bin')]},
  {stim:'<b>3</b> Ukuran data. Lengkapkan. <span class="tag">4 markah</span>',items:[N('3(a)','2 bait = ___ bit',['16']),N('3(b)','1 KB = ___ bait',['1024']),N('3(c)','3 KB = ___ bait',['3072'],1,'3 × 1024'),N('3(d)','2048 KB = ___ MB',['2'],1,'2048 ÷ 1024')]},
  {stim:'<b>4</b> Padankan situasi dengan teknik pemikiran komputasional. <span class="tag">4 markah</span>',items:matchItems('4',[['Membahagikan tugasan gotong-royong kelas kepada beberapa kumpulan kecil','leraian'],['Menyedari semua resipi kek mempunyai langkah memukul telur dan gula','pengecaman corak'],['Membuat peta laluan bas yang hanya menunjukkan nama hentian, tanpa bangunan lain','peniskalaan (abstraksi)'],['Menulis langkah-langkah memasak mi segera dari mula hingga tamat','algoritma']],PK)},
  {stim:`<b>5</b> Namakan simbol carta alir P, Q, R dan S. <span class="tag">4 markah</span>${FIG_FLOW}`,items:matchItems('5',[['Simbol P','terminal (mula/tamat)'],['Simbol Q','proses'],['Simbol R','input/output'],['Simbol S','keputusan']],FLOW)},
  {stim:'<b>6</b> Kenal pasti struktur kawalan yang sesuai. <span class="tag">4 markah</span>',items:matchItems('6',[['Mengira markah: jika markah ≥ 40, papar “Lulus”, jika tidak papar “Gagal”','pilihan'],['Mencetak nombor 1 hingga 100','ulangan'],['Baca panjang, baca lebar, kira luas, papar luas','urutan'],['Selagi baki belum habis, tolak RM5 setiap hari','ulangan']],STRUK)},
  {stim:'<b>7</b> Padankan tag HTML dengan fungsinya. <span class="tag">4 markah</span>',items:matchItems('7',[['&lt;p&gt;','perenggan'],['&lt;a href=""&gt;','pautan (hyperlink)'],['&lt;br&gt;','baris baharu'],['&lt;title&gt;','tajuk pada tab pelayar']],['perenggan','pautan (hyperlink)','baris baharu','tajuk pada tab pelayar'])},
  {stim:'<b>8</b> Tandakan <b>Betul</b> atau <b>Salah</b>. <span class="tag">4 markah</span>',items:[TF('8(a)','Pseudokod ditulis menggunakan bahasa yang mudah difahami manusia.',true),TF('8(b)','1 nibble bersamaan dengan 8 bit.',false),TF('8(c)','Carta alir mesti bermula dan berakhir dengan simbol terminal.',true),TF('8(d)','Ralat sintaks berlaku apabila arahan ditulis tidak mengikut peraturan bahasa pengaturcaraan.',true)]},
  {stim:'<b>9</b> Lengkapkan pseudokod untuk mengira luas segi empat tepat. <span class="tag">4 markah</span><div class="code">1. ____(a)____<br>2. Baca panjang, lebar<br>3. luas = panjang ____(b)____ lebar<br>4. ____(c)____ luas<br>5. ____(d)____</div>',items:[S('9(a)','(a)',['mula']),S('9(b)','(b)',['x','*','×','darab']),S('9(c)','(c)',['papar','paparkan','cetak']),S('9(d)','(d)',['tamat'])]},
  {stim:'<b>10</b> Teliti pseudokod di bawah. <span class="tag">4 markah</span><div class="code">1. Mula<br>2. jumlah = 0<br>3. Ulang untuk n = 1 hingga 4<br>&nbsp;&nbsp;&nbsp;3.1 jumlah = jumlah + n<br>4. Papar jumlah<br>5. Tamat</div>',items:[N('10(a)','Nilai jumlah selepas n = 1:',['1']),N('10(b)','Nilai jumlah selepas n = 2:',['3']),N('10(c)','Nilai jumlah selepas n = 3:',['6']),N('10(d)','Output yang dipaparkan:',['10'],1,'0 + 1 + 2 + 3 + 4 = 10')]}
 ]},
 {h:'Bahagian C',mk:20,ins:'Jawab semua soalan. Gunakan ruang kiraan untuk melukis carta alir.',g:[
  {stim:'<b>1</b> Algoritma <span class="tag">10 markah</span><p>Seorang guru mahu mengira purata tiga markah ujian seorang murid. Jika purata 40 atau lebih, program memaparkan “LULUS”. Jika tidak, program memaparkan “GAGAL”.</p>',items:[
   O('1(a)','Nyatakan input, proses dan output bagi masalah ini.',3,'Input: markah1, markah2, markah3 <i>(1m)</i>. Proses: purata = (markah1 + markah2 + markah3) ÷ 3, semak purata ≥ 40 <i>(1m)</i>. Output: purata dan “LULUS”/“GAGAL” <i>(1m)</i>.'),
   O('1(b)','Tulis pseudokod bagi masalah ini.',4,'<div class="code">1. Mula<br>2. Baca m1, m2, m3<br>3. purata = (m1 + m2 + m3) / 3<br>4. Jika purata >= 40<br>&nbsp;&nbsp;4.1 Papar "LULUS"<br>5. Jika tidak<br>&nbsp;&nbsp;5.1 Papar "GAGAL"<br>6. Tamat</div>1m mula/tamat, 1m input, 1m proses, 1m struktur pilihan.'),
   O('1(c)','Lukis carta alir bagi masalah ini (guna ruang kiraan) dan nyatakan struktur kawalan yang digunakan.',3,'Terminal Mula → Input m1, m2, m3 → Proses purata → Keputusan purata ≥ 40? → Ya: Output "LULUS" / Tidak: Output "GAGAL" → Terminal Tamat. Struktur kawalan: <b>pilihan</b>.')]},
  {stim:'<b>2</b> Kod Arahan HTML <span class="tag">10 markah</span><p>'+CONFIG.shortName+' ingin membina laman web ringkas tentang hobinya.</p>',items:[
   O('2(a)','Tulis kod HTML lengkap yang mengandungi tajuk tab “Hobi Saya”, tajuk utama “Saya Suka Berbasikal”, satu perenggan dan satu imej basikal.jpg.',7,'<div class="code">&lt;html&gt;<br>&lt;head&gt;<br>&nbsp;&lt;title&gt;Hobi Saya&lt;/title&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&nbsp;&lt;h1&gt;Saya Suka Berbasikal&lt;/h1&gt;<br>&nbsp;&lt;p&gt;Saya berbasikal setiap petang.&lt;/p&gt;<br>&nbsp;&lt;img src="basikal.jpg"&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;</div>1m setiap: html, head, title, body, h1, p, img.'),
   O('2(b)','Tulis kod untuk pautan ke laman www.jpj.gov.my dengan teks “Keselamatan Jalan Raya”.',2,'<div class="code">&lt;a href="https://www.jpj.gov.my"&gt;Keselamatan Jalan Raya&lt;/a&gt;</div>'),
   O('2(c)','Nyatakan perbezaan antara tag &lt;head&gt; dan &lt;body&gt;.',1,'&lt;head&gt; mengandungi maklumat laman (seperti title) yang tidak dipaparkan dalam halaman; &lt;body&gt; mengandungi kandungan yang dipaparkan.')]}
 ]}
]);
PAPERS.ask2=paper('ask2','ASK','ASK Sampel 2','grape','Kertas ASK (1 jam 30 minit)',90,70,[
 mcqSec('Bahagian A',10,'Jawab semua soalan. Pilih satu jawapan yang paling tepat.',[
  ['Teknik pemikiran komputasional yang membuang maklumat yang tidak penting ialah',['peniskalaan (abstraksi)','leraian','pengecaman corak','penilaian'],0],
  ['Nilai perpuluhan bagi 111₂ ialah',['7','3','111','6'],0,'','bin'],
  ['1 nibble bersamaan dengan',['4 bit','8 bit','2 bit','16 bit'],0],
  ['1 MB bersamaan dengan',['1024 KB','1000 bait','1024 bit','8 KB'],0],
  ['Pseudokod ialah',['langkah algoritma dalam bahasa mudah seperti bahasa manusia','gambar rajah dengan simbol','kod mesin','sejenis perisian'],0],
  ['Simbol carta alir berbentuk segi empat selari mewakili',['input/output','proses','keputusan','terminal'],0],
  ['Struktur kawalan yang membuat keputusan berdasarkan syarat ialah',['pilihan','urutan','ulangan','output'],0],
  ['Dalam Scratch, watak yang boleh diprogramkan dipanggil',['sprite','stage','backdrop','costume'],0],
  ['Tag HTML untuk menebalkan teks ialah',['&lt;b&gt;','&lt;i&gt;','&lt;u&gt;','&lt;p&gt;'],0,'','html'],
  ['Atribut yang menentukan alamat pautan dalam tag &lt;a&gt; ialah',['href','src','alt','title'],0,'','html']
 ],6),
 {h:'Bahagian B',mk:40,ins:'Jawab semua soalan. Setiap soalan membawa 4 markah.',g:[
  {stim:'<b>1</b> Tukarkan nombor perduaan kepada nombor perpuluhan. <span class="tag">4 markah</span>',items:[N('1(a)','10010₂ = ',['18'],1,'16 + 2','bin'),N('1(b)','111₂ = ',['7'],1,'','bin'),N('1(c)','101010₂ = ',['42'],1,'32 + 8 + 2','bin'),N('1(d)','1000000₂ = ',['64'],1,'','bin')]},
  {stim:'<b>2</b> Tukarkan nombor perpuluhan kepada nombor perduaan. <span class="tag">4 markah</span>',items:[N('2(a)','9 = ___₂',['1001'],1,'','bin'),N('2(b)','17 = ___₂',['10001'],1,'','bin'),N('2(c)','30 = ___₂',['11110'],1,'16 + 8 + 4 + 2','bin'),N('2(d)','50 = ___₂',['110010'],1,'32 + 16 + 2','bin')]},
  {stim:'<b>3</b> Ukuran data. Lengkapkan. <span class="tag">4 markah</span>',items:[N('3(a)','32 bit = ___ bait',['4']),N('3(b)','5 bait = ___ bit',['40']),N('3(c)','1 MB = ___ KB',['1024']),N('3(d)','4096 bait = ___ KB',['4'],1,'4096 ÷ 1024')]},
  {stim:'<b>4</b> Padankan situasi dengan teknik pemikiran komputasional. <span class="tag">4 markah</span>',items:matchItems('4',[['Menulis langkah-langkah mencuci kasut sekolah secara tertib','algoritma'],['Membahagikan projek sains kepada tugasan mencari maklumat, eksperimen dan laporan','leraian'],['Mendapati setiap hari Jumaat kantin lebih sesak','pengecaman corak'],['Melukis pelan rumah yang hanya menunjukkan bilik, bukan perabot','peniskalaan (abstraksi)']],PK)},
  {stim:`<b>5</b> Padankan simbol carta alir dengan fungsinya. <span class="tag">4 markah</span>${FIG_FLOW}`,items:matchItems('5',[['Simbol yang digunakan untuk “Baca nombor”','input/output'],['Simbol yang digunakan untuk “jumlah = a + b”','proses'],['Simbol yang digunakan untuk “Adakah nombor > 10?”','keputusan'],['Simbol yang digunakan untuk “Mula”','terminal (mula/tamat)']],FLOW)},
  {stim:'<b>6</b> Kenal pasti struktur kawalan. <span class="tag">4 markah</span>',items:matchItems('6',[['Jika hujan, bawa payung','pilihan'],['Lompat bintang sebanyak 20 kali','ulangan'],['Ambil berus gigi, letak ubat gigi, gosok gigi, berkumur','urutan'],['Jika lampu isyarat merah, berhenti; jika hijau, jalan','pilihan']],STRUK)},
  {stim:'<b>7</b> Padankan tag HTML dengan fungsinya. <span class="tag">4 markah</span>',items:matchItems('7',[['&lt;img src=""&gt;','memaparkan imej'],['&lt;i&gt;','teks condong'],['&lt;h2&gt;','tajuk kecil'],['&lt;body&gt;','kandungan yang dipaparkan']],['memaparkan imej','teks condong','tajuk kecil','kandungan yang dipaparkan'])},
  {stim:'<b>8</b> Tandakan <b>Betul</b> atau <b>Salah</b>. <span class="tag">4 markah</span>',items:[TF('8(a)','Leraian ialah memecahkan masalah kepada bahagian yang lebih kecil.',true),TF('8(b)','1 KB bersamaan dengan 1000 bit.',false),TF('8(c)','Struktur kawalan urutan melaksanakan arahan satu demi satu mengikut tertib.',true),TF('8(d)','Tag &lt;title&gt; dipaparkan di dalam kandungan halaman web.',false)]},
  {stim:'<b>9</b> Lengkapkan pseudokod untuk menentukan nombor genap atau ganjil. <span class="tag">4 markah</span><div class="code">1. Mula<br>2. ____(a)____ nombor<br>3. ____(b)____ nombor mod 2 = 0<br>&nbsp;&nbsp;3.1 Papar "Genap"<br>4. ____(c)____<br>&nbsp;&nbsp;4.1 Papar "____(d)____"<br>5. Tamat</div>',items:[S('9(a)','(a)',['baca','input','masukkan']),S('9(b)','(b)',['jika']),S('9(c)','(c)',['jika tidak','jikatidak','selain itu']),S('9(d)','(d)',['ganjil'])]},
  {stim:'<b>10</b> Teliti pseudokod di bawah. <span class="tag">4 markah</span><div class="code">1. Mula<br>2. x = 2<br>3. Ulang 3 kali<br>&nbsp;&nbsp;&nbsp;3.1 x = x × 2<br>4. Papar x<br>5. Tamat</div>',items:[N('10(a)','Nilai x selepas ulangan pertama:',['4']),N('10(b)','Nilai x selepas ulangan kedua:',['8']),N('10(c)','Nilai x selepas ulangan ketiga:',['16']),S('10(d)','Namakan struktur kawalan pada langkah 3.',['ulangan'])]}
 ]},
 {h:'Bahagian C',mk:20,ins:'Jawab semua soalan. Gunakan ruang kiraan untuk melukis carta alir.',g:[
  {stim:'<b>1</b> Algoritma <span class="tag">10 markah</span><p>Kedai buku memberi diskaun 10% jika jumlah pembelian melebihi RM50. Program perlu membaca jumlah pembelian dan memaparkan harga yang perlu dibayar.</p>',items:[
   O('1(a)','Nyatakan input, proses dan output.',3,'Input: jumlah pembelian <i>(1m)</i>. Proses: jika jumlah > 50, bayaran = jumlah × 0.9; jika tidak bayaran = jumlah <i>(1m)</i>. Output: bayaran <i>(1m)</i>.'),
   O('1(b)','Tulis pseudokod.',4,'<div class="code">1. Mula<br>2. Baca jumlah<br>3. Jika jumlah > 50<br>&nbsp;&nbsp;3.1 bayaran = jumlah × 0.9<br>4. Jika tidak<br>&nbsp;&nbsp;4.1 bayaran = jumlah<br>5. Papar bayaran<br>6. Tamat</div>'),
   O('1(c)','Jika jumlah pembelian ialah RM80, berapakah bayaran? Tunjukkan kiraan.',3,'80 > 50, maka diskaun 10% <i>(1m)</i>; 80 × 0.9 <i>(1m)</i> = <b>RM72</b> <i>(1m)</i>.')]},
  {stim:'<b>2</b> Kod Arahan HTML <span class="tag">10 markah</span><p>Kelas '+CONFIG.shortName+' mahu membina laman web jadual bertugas.</p>',items:[
   O('2(a)','Tulis kod HTML yang mengandungi tajuk utama “Jadual Bertugas Kelas Kami”, satu senarai bernombor tiga nama murid, dan teks tebal “Kelas Bersih, Murid Ceria”.',7,'<div class="code">&lt;html&gt;<br>&lt;head&gt;&lt;title&gt;Jadual Bertugas&lt;/title&gt;&lt;/head&gt;<br>&lt;body&gt;<br>&nbsp;&lt;h1&gt;Jadual Bertugas Kelas Kami&lt;/h1&gt;<br>&nbsp;&lt;ol&gt;<br>&nbsp;&nbsp;&lt;li&gt;'+CONFIG.shortName+'&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Aiman&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Danish&lt;/li&gt;<br>&nbsp;&lt;/ol&gt;<br>&nbsp;&lt;b&gt;Kelas Bersih, Murid Ceria&lt;/b&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;</div>1m: html, body, h1, ol, li (×1), b, struktur tag ditutup.'),
   O('2(b)','Apakah perbezaan antara &lt;ol&gt; dan &lt;ul&gt;?',2,'&lt;ol&gt; senarai bernombor <i>(1m)</i>; &lt;ul&gt; senarai bertitik (tidak bernombor) <i>(1m)</i>.'),
   O('2(c)','Nyatakan satu ralat jika tag &lt;h1&gt; tidak ditutup.',1,'Semua teks selepasnya turut dipaparkan sebagai tajuk besar.')]}
 ]}
]);

/* ================= LEARN: notes, cards, quizzes ================= */
LEARN.PJK={name:'PJK',icon:'🏃',color:'sky',papers:['pjk1','pjk2'],
 notes:[
  ['Kecergasan',['<b>Berasaskan kesihatan:</b> daya tahan kardiovaskular, kekuatan otot, daya tahan otot, kelenturan, komposisi badan.','<b>Berasaskan perlakuan motor:</b> kelajuan, ketangkasan, imbangan, koordinasi, masa tindak balas, kuasa.','<b>SEGAK:</b> naik turun bangku (kardiovaskular), tekan tubi (otot tangan & bahu), ringkuk tubi separa (otot abdomen), jangkauan melunjur (kelenturan).','<b>BMI</b> = berat (kg) ÷ tinggi² (m²). Prinsip <b>FITT</b>: Frekuensi, Intensiti, Masa, Jenis.']],
  ['Memanaskan & Menyejukkan Badan',['Memanaskan: naikkan suhu badan & aliran darah, kurangkan risiko kecederaan.','Menyejukkan: regangan statik perlahan, kembalikan kadar nadi ke normal.','Kadar nadi diambil di pergelangan tangan atau leher.']],
  ['Permainan',['<b>Bola sepak:</b> 11 pemain, 2 × 45 minit, tandukan, penjaga gol pegang bola di kawasan penalti sendiri.','<b>Bola jaring:</b> 7 pemain; hanya GS & GA boleh menjaring.','<b>Bola tampar:</b> 6 pemain, maksimum 3 sentuhan; hantaran bawah, hantaran atas, rejaman.','<b>Badminton:</b> lob, dropshot, smesy; set dimenangi pada 21 mata.']],
  ['Olahraga & Gimnastik',['Lari pecut: <b>mula duduk</b>. Lari berganti-ganti: baton diserah dalam <b>zon pertukaran</b>.','Lompat jauh: lari landas → lonjakan → layangan → mendarat.','Lontar peluru: <b>tolak</b> dari bahu, jatuh dalam sektor. Lompat tinggi: Fosbury Flop.','Gimnastik: bentuk badan tuck (bulat), pike, kangkang.']],
  ['Kesihatan Diri & Pemakanan',['Akil baligh: perubahan fizikal (tumbesaran pesat, suara garau bagi lelaki) & emosi (mudah berubah).','Mandi sekurang-kurangnya 2 kali sehari; jangan picit jerawat.','<b>Pinggan Sihat Malaysia:</b> ½ sayur & buah, ¼ protein, ¼ karbohidrat.','Protein membina tisu; malnutrisi = kekurangan atau berlebihan zat.']],
  ['Penyalahgunaan Bahan & Penyakit',['Nikotin dalam rokok & vape menyebabkan ketagihan. Perokok pasif menghidu asap orang lain.','Tolak ajakan: kata “tidak” dengan tegas dan beredar.','Berjangkit: denggi (nyamuk Aedes), batuk kering (udara). Tidak berjangkit: diabetes, darah tinggi.','Urus stres: bersenam, tidur cukup, bercerita dengan orang dipercayai.']],
  ['Pertolongan Cemas',['<b>DRSABC:</b> Bahaya → Respons → Seru (minta bantuan) → Saluran udara → Pernafasan → Peredaran (CPR).','CPR: <b>30 tekanan dada : 2 hembusan</b>.','Terseliuh: <b>RICE</b> = Rehat, Ais, Balutan (mampatan), Tinggikan.','Mangsa lemas: capai atau baling bantuan, jangan terjun jika tidak tahu berenang. Kecemasan: <b>999</b>.']]
 ],
 cards:[['Ujian naik turun bangku','Daya tahan kardiovaskular'],['Ujian jangkauan melunjur','Kelenturan'],['Formula BMI','Berat (kg) ÷ tinggi² (m²)'],['Pemain bola jaring yang boleh menjaring','GS dan GA'],['Bilangan pemain bola tampar','6'],['Fasa lompat jauh','Lari landas, lonjakan, layangan, mendarat'],['Teknik permulaan lari pecut','Mula duduk'],['DRSABC','Bahaya, Respons, Seru, Saluran udara, Pernafasan, Peredaran'],['Nisbah CPR','30 tekanan : 2 hembusan'],['RICE','Rehat, Ais, Balutan, Tinggikan'],['Bahan ketagihan dalam rokok','Nikotin'],['Pinggan Sihat Malaysia','½ sayur & buah, ¼ protein, ¼ karbohidrat']],
 quiz:[['Ujian SEGAK untuk kelenturan',['jangkauan melunjur','tekan tubi','naik turun bangku'],0],['Pemain bola jaring yang boleh menjaring',['GS dan GA','GK dan GD','C dan WA'],0],['Peluru dalam lontar peluru mesti',['ditolak dari bahu','dibaling','digolek'],0],['Nisbah CPR',['30 : 2','15 : 2','10 : 1'],0],['Huruf I dalam RICE',['ais','insulin','imbangan'],0],['Penyakit bawaan nyamuk Aedes',['denggi','diabetes','asma'],0],['Komponen berasaskan perlakuan motor',['ketangkasan','kelenturan','komposisi badan'],0],['Nombor kecemasan Malaysia',['999','911','112'],0]]};
LEARN.PI={name:'Pendidikan Islam',icon:'🕌',color:'teal',papers:['pi1','pi2'],
 notes:[
  ['Tajwid: Nun Mati & Tanwin',['<b>Izhar Halqi</b> (6 huruf): '+AR('ء ه ع ح غ خ')+' → dibaca jelas.','<b>Idgham Maal Ghunnah</b>: '+AR('ي ن م و')+' → dimasukkan dengan dengung.','<b>Idgham Bila Ghunnah</b>: '+AR('ل ر')+' → dimasukkan tanpa dengung.','<b>Iqlab</b>: '+AR('ب')+' → ditukar kepada bunyi mim. <b>Ikhfa\' Haqiqi</b>: 15 huruf lain → disamarkan dengan dengung.']],
  ['Tajwid: Mim Mati, Mad & Qalqalah',['Mim mati + '+AR('ب')+' = Ikhfa\' Syafawi; + '+AR('م')+' = Idgham Mithlain; huruf lain = Izhar Syafawi.','Mad asli (tabi\'i): 2 harakat.','Qalqalah: '+AR('ق ط ب ج د')+' (قُطْبُ جَدٍّ).']],
  ['Akidah',['Rukun Iman: Allah, malaikat, kitab, rasul, hari akhirat, qada\' & qadar.','Sifat Allah: Wujud (ada), Qidam (sedia), Baqa\' (kekal), Mukhalafatuhu lil-hawadith (berbeza dengan makhluk), Qiyamuhu binafsihi (berdiri sendiri), Wahdaniyyah (esa).','Malaikat: Jibril (wahyu), Mikail (hujan & rezeki), Israfil (sangkakala), Izrail (nyawa), Raqib & Atid (catat amalan), Munkar & Nakir (soal kubur), Ridwan (syurga), Malik (neraka).','Kitab: Taurat–Musa, Zabur–Daud, Injil–Isa, al-Quran–Muhammad SAW.']],
  ['Fikah: Bersuci',['Air mutlak (suci menyucikan), musta\'mal (suci tidak menyucikan), mutanajjis (bernajis).','Najis: <b>mughallazah</b> (anjing, babi → sertu 7 kali, satu dengan air tanah), <b>mukhaffafah</b> (kencing bayi lelaki < 2 tahun yang hanya minum susu ibu → renjis air), <b>mutawassitah</b> (lain-lain → basuh hingga hilang warna, bau, rasa).','Rukun wuduk (6): niat, basuh muka, tangan hingga siku, sapu sebahagian kepala, kaki hingga buku lali, tertib.','Tayammum guna debu tanah yang suci: sapu muka & tangan hingga siku.']],
  ['Fikah: Solat',['Subuh 2, Zohor 4, Asar 4, Maghrib 3, Isyak 4 → <b>17 rakaat</b> sehari.','Syarat sah: suci hadas & najis, tutup aurat, menghadap kiblat, masuk waktu.']],
  ['Sirah & Akhlak',['Nabi SAW lahir di Mekah pada Tahun Gajah. Ibu Aminah, bapa Abdullah, datuk Abdul Muttalib, bapa saudara Abu Talib, ibu susuan Halimatus Saadiah.','Wahyu pertama: Gua Hira\', surah al-\'Alaq 1–5, melalui Jibril. Dakwah rahsia ±3 tahun.','Masjid pertama: Masjid Quba\'.','Mahmudah: amanah, jujur, sabar, pemaaf. Mazmumah: hasad, mengumpat, sombong.']]
 ],
 cards:[['Huruf Iqlab',AR('ب')],['Huruf Idgham Bila Ghunnah',AR('ل ر')],['Huruf qalqalah',AR('ق ط ب ج د')],['Mad asli','2 harakat'],['Malaikat Mikail','Menurunkan hujan & rezeki'],['Kitab Zabur','Nabi Daud a.s.'],['Sifat Qidam','Allah itu sedia (tiada permulaan)'],['Najis mughallazah','Anjing & babi → sertu'],['Rukun wuduk','6'],['Jumlah rakaat solat fardu','17'],['Ibu susuan Nabi SAW','Halimatus Saadiah'],['Masjid pertama','Masjid Quba\'']],
 quiz:[['Nun mati bertemu '+AR('ب'),['Iqlab','Izhar Halqi','Ikhfa\' Haqiqi'],0],['Bilangan huruf Izhar Halqi',['6','4','15'],0],['Malaikat yang mencabut nyawa',['Izrail','Israfil','Mikail'],0],['Kitab Injil diturunkan kepada',['Nabi Isa a.s.','Nabi Musa a.s.','Nabi Daud a.s.'],0],['Cara menyucikan najis mukhaffafah',['renjis air','sertu 7 kali','dibakar'],0],['Bilangan rakaat solat Asar',['4','3','2'],0],['Wahyu pertama diturunkan di',['Gua Hira\'','Gua Thur','Madinah'],0],['Contoh sifat mazmumah',['mengumpat','amanah','sabar'],0]]};
LEARN.ASK={name:'Asas Sains Komputer',icon:'💻',color:'grape',papers:['ask1','ask2'],
 notes:[
  ['Pemikiran Komputasional',['<b>Leraian:</b> pecahkan masalah besar kepada bahagian kecil.','<b>Pengecaman corak:</b> cari persamaan atau corak berulang.','<b>Peniskalaan (abstraksi):</b> buang maklumat tidak penting, fokus pada yang penting.','<b>Algoritma:</b> langkah tersusun untuk menyelesaikan masalah.']],
  ['Sistem Nombor Perduaan',['Perduaan guna digit 0 dan 1. Nilai tempat: … 64, 32, 16, 8, 4, 2, 1.','Perduaan → perpuluhan: tambah nilai tempat yang ada 1. 1011₂ = 8 + 2 + 1 = 11.','Perpuluhan → perduaan: bahagi dengan 2 berulang kali, baca baki dari bawah ke atas.']],
  ['Ukuran Data',['1 nibble = 4 bit · 1 bait = 8 bit','1 KB = 1024 bait · 1 MB = 1024 KB · 1 GB = 1024 MB','Besar → kecil: darab 1024. Kecil → besar: bahagi 1024.']],
  ['Algoritma: Pseudokod & Carta Alir',['Pseudokod: langkah dalam bahasa mudah (Mula, Baca, Papar, Jika, Ulang, Tamat).','Carta alir: <b>terminal</b> (bujur: mula/tamat), <b>proses</b> (segi empat tepat), <b>input/output</b> (segi empat selari), <b>keputusan</b> (rombus), anak panah (aliran).','Struktur kawalan: <b>urutan</b> (satu demi satu), <b>pilihan</b> (jika…jika tidak), <b>ulangan</b> (ulang/selagi).']],
  ['Kod Arahan: Scratch & HTML',['Scratch: sprite (watak), stage (pentas), blok Events (mula), Motion (gerak), Looks (rupa), Control (ulang/jika).','HTML: &lt;html&gt;, &lt;head&gt;, &lt;title&gt; (tajuk tab), &lt;body&gt; (kandungan), &lt;h1&gt;–&lt;h6&gt;, &lt;p&gt;, &lt;br&gt;, &lt;b&gt;, &lt;i&gt;, &lt;img src&gt;, &lt;a href&gt;, &lt;ol&gt;/&lt;ul&gt;/&lt;li&gt;.','Kebanyakan tag perlu ditutup: &lt;p&gt;…&lt;/p&gt;.']]
 ],
 cards:[['Leraian','Pecahkan masalah kepada bahagian kecil'],['Peniskalaan','Buang maklumat yang tidak penting'],['1 bait','8 bit'],['1 nibble','4 bit'],['1 KB','1024 bait'],['1011₂','11'],['13 dalam perduaan','1101'],['Simbol rombus','Keputusan'],['Simbol bujur','Terminal (mula/tamat)'],['Struktur “jika…jika tidak”','Pilihan'],['Tag untuk imej','&lt;img src=""&gt;'],['Tag untuk pautan','&lt;a href=""&gt;']],
 quiz:[['11₂ dalam perpuluhan',['3','11','2'],0],['10 dalam perduaan',['1010','1100','1001'],0],['1 bait =',['8 bit','4 bit','1024 bit'],0],['Simbol carta alir untuk proses',['segi empat tepat','rombus','bujur'],0],['Struktur yang mengulang arahan',['ulangan','urutan','pilihan'],0],['Mencari persamaan dalam masalah ialah',['pengecaman corak','leraian','algoritma'],0],['Tag HTML untuk perenggan',['&lt;p&gt;','&lt;br&gt;','&lt;h1&gt;'],0],['2 KB = ___ bait',['2048','2000','1024'],0]]};
