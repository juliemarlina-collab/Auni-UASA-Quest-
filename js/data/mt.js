/* ---------- Matematik helpers ---------- */
const N=(n,q,a,m,ex,sim)=>({n,t:'s',num:true,q,a,m:m||1,ex:ex||'',sim});
const K=(n,q,a,m,steps,sim)=>({n,t:'k',q,a,m,model:steps,sim});
const MM=(n,q,o,a,ex,sim)=>({n,t:'m',q,o,a,m:1,ex:ex||'',sim});
const TF=(n,q,a)=>MM(n,q,['Betul','Salah'],a?0:1);
const svgFig=(w,h,body,lab)=>`<div class="fig"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${lab||'Rajah'}">${body}</svg></div>`;
const TX=(x,y,s,o)=>`<text x="${x}" y="${y}" font-size="${(o&&o.fs)||15}" font-weight="700" fill="#17171C" text-anchor="${(o&&o.a)||'middle'}">${s}</text>`;
const LN=(x1,y1,x2,y2,w)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#17171C" stroke-width="${w||3}" stroke-linecap="round"/>`;
const mtPaper=(id,short,color,A,B,C)=>({id,subj:'MT',lang:'ms',title:'Matematik · '+short,short,color,kertas:[{k:'Kertas Matematik (2 jam)',time:120,mk:100,sec:[
 {h:'Bahagian A',mk:20,ins:'Jawab semua soalan. Pilih satu jawapan yang paling tepat. Guna <b>✏️ Ruang kiraan</b> untuk mengira.',g:[{stim:'',items:A.map((q,i)=>{const [o,na]=SHUF(q[1],q[2],i*3+(id==='mt2'?7:1));return MM(String(i+1),q[0],o,na,q[3],q[4])})}]},
 {h:'Bahagian B',mk:20,ins:'Jawab semua soalan. Setiap soalan membawa 4 markah.',g:B},
 {h:'Bahagian C',mk:60,ins:'Jawab semua soalan. Tunjukkan <b>langkah kerja</b> dalam ruang kiraan. Markah kaedah diberi walaupun jawapan akhir salah.',g:C}
]}]});

/* ---------- figures ---------- */
const FIG_LINE=svgFig(320,140,`${LN(20,110,300,110)}${LN(160,110,97,20)}<circle cx="160" cy="110" r="4" fill="#17171C"/>${TX(160,132,'Q')}${TX(20,132,'P')}${TX(300,132,'R')}${TX(90,16,'S')}${TX(190,80,'125°',{fs:14})}${TX(122,96,'x',{fs:17})}`,'Garis lurus PQR');
const FIG_POINT=svgFig(260,220,`${LN(130,110,130,20)}${LN(130,110,230,110)}${LN(130,110,96,204)}<rect x="130" y="96" width="14" height="14" fill="none" stroke="#17171C" stroke-width="2"/><circle cx="130" cy="110" r="4" fill="#17171C"/>${TX(162,152,'110°',{fs:14})}${TX(84,104,'2y',{fs:17})}`,'Sudut pada satu titik');
const FIG_PAR=svgFig(320,170,`${LN(20,50,300,50)}${LN(20,125,300,125)}${LN(155,160,215,14)}<path d="M282 44l10 6-10 6M282 119l10 6-10 6" fill="none" stroke="#17171C" stroke-width="2"/>${TX(166,74,'68°',{fs:14})}${TX(203,110,'x',{fs:17})}${TX(146,110,'y',{fs:17})}`,'Dua garis selari dipotong rentas lintang');
const FIG_L=svgFig(300,230,`<path d="M30 20 H162 V86 H250 V196 H30 Z" fill="#9DF3C4" stroke="#17171C" stroke-width="3"/>${TX(96,14,'6 cm')}${TX(172,58,'3 cm',{fs:13,a:'start'})}${TX(206,80,'4 cm',{fs:13})}${TX(258,146,'5 cm',{a:'start'})}${TX(140,216,'10 cm')}${TX(24,112,'8 cm',{a:'end'})}`,'Bentuk L');
const FIG_PYTH=svgFig(300,190,`<path d="M40 160 H250 V40 Z" fill="#FFE98A" stroke="#17171C" stroke-width="3"/><rect x="236" y="146" width="14" height="14" fill="none" stroke="#17171C" stroke-width="2"/>${TX(30,175,'A')}${TX(262,175,'B')}${TX(262,36,'C')}${TX(145,180,'12 cm')}${TX(268,105,'5 cm',{a:'start'})}`,'Segi tiga ABC');

/* ================= MATEMATIK SAMPEL 1 ================= */
PAPERS.mt1=mtPaper('mt1','Matematik Sampel 1','grape',[
 ['Antara berikut, yang manakah integer negatif?',['−7','−0.5','3','0'],0],
 ['Hitung −8 + 15 − (−3).',['10','4','−20','26'],0,'−8 + 15 = 7, kemudian 7 − (−3) = 7 + 3 = <b>10</b>.','int'],
 ['Hitung (−4) × 6 ÷ (−3).',['8','−8','2','−2'],0,'(−4) × 6 = −24; −24 ÷ (−3) = <b>8</b> (negatif ÷ negatif = positif).'],
 ['Antara berikut, yang manakah hasil darab faktor perdana bagi 60?',['2 × 2 × 3 × 5','2 × 3 × 10','4 × 15','2 × 2 × 15'],0,'Semua faktor mesti nombor perdana: 60 = 2 × 2 × 3 × 5.','fg'],
 ['Cari FSTB bagi 24 dan 36.',['12','6','72','4'],0,'Faktor sepunya: 1, 2, 3, 4, 6, 12 → terbesar <b>12</b>.','fg'],
 ['Cari GSTK bagi 6 dan 8.',['24','48','2','14'],0,'Gandaan 6: 6, 12, 18, <b>24</b> · Gandaan 8: 8, 16, <b>24</b>.','fg'],
 ['Nilai √169 ialah',['13','14','84.5','16'],0,'13 × 13 = 169.'],
 ['Nilai (−3)³ ialah',['−27','27','−9','9'],0,'(−3) × (−3) × (−3) = 9 × (−3) = −27.'],
 ['Nisbah 18 : 30 dalam sebutan terendah ialah',['3 : 5','5 : 3','6 : 10','9 : 15'],0,'Bahagi kedua-dua sebutan dengan FSTB 6.','ratio'],
 ['Sebuah kereta bergerak sejauh 180 km dalam masa 2 jam. Hitung lajunya.',['90 km/j','360 km/j','60 km/j','182 km/j'],0,'Laju = jarak ÷ masa = 180 ÷ 2.'],
 ['Permudahkan 5p − 2q + 3p + q.',['8p − q','8p − 3q','2p − q','8p + q'],0,'Kumpul sebutan serupa: (5p + 3p) + (−2q + q).'],
 ['Jika x = 3, hitung nilai 2x² − 5.',['13','31','7','1'],0,'2(3²) − 5 = 2(9) − 5 = 13.'],
 ['Selesaikan 4m − 7 = 13.',['m = 5','m = 3/2','m = 20','m = −5'],0,'4m = 20, m = 5.','eq'],
 ['“x ialah sekurang-kurangnya 8” boleh ditulis sebagai',['x ≥ 8','x > 8','x < 8','x ≤ 8'],0,'Sekurang-kurangnya = boleh sama dengan atau lebih → ≥.'],
 ['Sudut pelengkap bagi 37° ialah',['53°','143°','323°','37°'],0,'Pelengkap: hasil tambah 90°. 90° − 37° = 53°.','ang'],
 ['Hasil tambah sudut pedalaman sebuah heksagon ialah',['720°','540°','900°','360°'],0,'(n − 2) × 180° = (6 − 2) × 180° = 720°.','poly'],
 ['Saiz setiap sudut pedalaman sebuah pentagon sekata ialah',['108°','72°','120°','540°'],0,'Jumlah = 540°; 540° ÷ 5 = 108°.','poly'],
 ['Luas sebuah segi tiga dengan tapak 12 cm dan tinggi 7 cm ialah',['42 cm²','84 cm²','19 cm²','38 cm²'],0,'½ × 12 × 7 = 42.','area'],
 ['Diberi A = {faktor bagi 12}. Nilai n(A) ialah',['6','4','5','12'],0,'A = {1, 2, 3, 4, 6, 12} → 6 unsur.'],
 ['Dua sisi tegak sebuah segi tiga bersudut tegak ialah 5 cm dan 12 cm. Panjang hipotenusnya ialah',['13 cm','17 cm','7 cm','169 cm'],0,'√(5² + 12²) = √169 = 13.','pyth']
],[
 {stim:'<b>1</b> Lengkapkan. <span class="tag">4 markah</span>',items:[N('1(a)','9² = ',['81']),N('1(b)','∛64 = ',['4']),N('1(c)','√0.25 = ',['0.5','.5']),N('1(d)','2³ × 5 = ',['40'],1,'2³ = 8, 8 × 5 = 40.')]},
 {stim:'<b>2</b> Tandakan <b>Betul</b> atau <b>Salah</b> bagi setiap pernyataan. <span class="tag">4 markah</span>',items:[TF('2(a)','Sudut penggenap bagi 120° ialah 60°.',true),TF('2(b)','Segi tiga sama kaki mempunyai tiga sisi yang sama panjang.',false),TF('2(c)','Sudut refleks lebih besar daripada 180° dan kurang daripada 360°.',true),TF('2(d)','Hasil tambah sudut pedalaman sebuah sisi empat ialah 180°.',false)]},
 {stim:'<b>3</b> Harga 3 batang pen ialah RM4.50. Ali dan Bala pula berkongsi RM60 mengikut nisbah 2 : 3. <span class="tag">4 markah</span>',items:[N('3(a)','Harga sebatang pen = RM',['1.50','1.5'],1,'4.50 ÷ 3 = 1.50','ratio'),N('3(b)','Harga 8 batang pen = RM',['12','12.00'],1,'1.50 × 8 = 12'),N('3(c)','Bahagian Ali = RM',['24','24.00'],1,'Jumlah bahagian = 5. Ali: 2/5 × 60 = 24','ratio'),N('3(d)','Bahagian Bala = RM',['36','36.00'],1,'3/5 × 60 = 36')]},
 {stim:'<b>4</b> Diberi set semesta ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {nombor genap} dan B = {gandaan 3}. <span class="tag">4 markah</span>',items:[N('4(a)','Senaraikan unsur A ∩ B.',['6','{6}']),N('4(b)','n(A) = ',['5']),N('4(c)','n(B) = ',['3']),N('4(d)','n(A ∪ B) = ',['7'],1,'A = {2, 4, 6, 8, 10}, B = {3, 6, 9}. A ∪ B = {2, 3, 4, 6, 8, 9, 10} → 7 unsur.')]},
 {stim:'<b>5</b> Markah kuiz tujuh orang murid ialah: <b>3, 7, 8, 5, 8, 9, 2</b> <span class="tag">4 markah</span>',items:[N('5(a)','Mod = ',['8'],1,'','stats'),N('5(b)','Median = ',['7'],1,'Susun: 2, 3, 5, <b>7</b>, 8, 8, 9.','stats'),N('5(c)','Min = ',['6'],1,'Jumlah 42 ÷ 7 = 6.','stats'),N('5(d)','Julat = ',['7'],1,'9 − 2 = 7.')]}
],[
 {stim:'<b>1</b> Nombor Nisbah <span class="tag">10 markah</span>',items:[
  K('1(a)','Suhu pagi di sebuah bandar ialah −5°C. Pada tengah hari, suhu naik 12°C, kemudian turun 9°C pada waktu malam. Hitung suhu pada waktu malam.',['-2','-2c'],3,'−5 + 12 − 9<br>= 7 − 9 <i>(1m)</i><br>= <b>−2°C</b> <i>(2m)</i>','int'),
  K('1(b)','Hitung nilai 2.4 − (−1.6) × 3.',['7.2'],3,'Darab dahulu: (−1.6) × 3 = −4.8 <i>(1m)</i><br>2.4 − (−4.8) = 2.4 + 4.8 <i>(1m)</i><br>= <b>7.2</b> <i>(1m)</i>'),
  K('1(c)','Siti mempunyai RM150 dalam akaun. Dia mengeluarkan RM45 setiap minggu selama 4 minggu, kemudian menyimpan semula RM80. Berapakah baki akaunnya sekarang?',['50','50.00'],4,'Jumlah keluar = 45 × 4 = RM180 <i>(1m)</i><br>150 − 180 = −30 <i>(1m)</i><br>−30 + 80 <i>(1m)</i><br>= <b>RM50</b> <i>(1m)</i>','int')]},
 {stim:'<b>2</b> Faktor dan Gandaan <span class="tag">10 markah</span>',items:[
  K('2(a)','Senaraikan semua faktor bagi 18.',['1,2,3,6,9,18'],2,'1 × 18, 2 × 9, 3 × 6 → <b>1, 2, 3, 6, 9, 18</b>','fg'),
  K('2(b)','Cari FSTB bagi 48 dan 72.',['24'],2,'48 = 2 × 2 × 2 × 2 × 3<br>72 = 2 × 2 × 2 × 3 × 3<br>Sepunya: 2 × 2 × 2 × 3 = <b>24</b>','fg'),
  K('2(c)','Lampu A berkelip setiap 6 saat, lampu B setiap 8 saat dan lampu C setiap 12 saat. Ketiga-tiga lampu berkelip serentak pada pukul 8:00:00 malam. Selepas berapa saat lampu-lampu itu berkelip serentak semula?',['24','24saat'],3,'Cari GSTK bagi 6, 8, 12 <i>(1m)</i><br>Gandaan 12: 12, <b>24</b> (24 ÷ 6 = 4, 24 ÷ 8 = 3) <i>(1m)</i><br>Jawapan: <b>24 saat</b> (pukul 8:00:24 malam) <i>(1m)</i>','fg'),
  K('2(d)','Encik Ravi mempunyai 36 biji epal dan 60 biji oren. Dia mahu membungkus semua buah itu dalam beg dengan bilangan epal yang sama dan bilangan oren yang sama dalam setiap beg, tanpa baki. Berapakah bilangan beg yang maksimum?',['12','12beg'],3,'Cari FSTB bagi 36 dan 60 <i>(1m)</i><br>Faktor sepunya: 1, 2, 3, 4, 6, 12 <i>(1m)</i><br><b>12 beg</b> (setiap beg: 3 epal, 5 oren) <i>(1m)</i>','fg')]},
 {stim:'<b>3</b> Ungkapan Algebra, Persamaan dan Ketaksamaan Linear <span class="tag">10 markah</span>',items:[
  K('3(a)','Permudahkan 3(2x − 4) + 5x.',['11x-12'],2,'6x − 12 + 5x <i>(1m)</i><br>= <b>11x − 12</b> <i>(1m)</i>'),
  K('3(b)','Selesaikan 5y + 8 = 2y + 23.',['5','y=5'],3,'5y − 2y = 23 − 8 <i>(1m)</i><br>3y = 15 <i>(1m)</i><br><b>y = 5</b> <i>(1m)</i>','eq'),
  K('3(c)','Umur ayah 4 kali umur '+CONFIG.shortName+'. Jumlah umur mereka ialah 65 tahun. Berapakah umur '+CONFIG.shortName+'?',['13','13tahun'],3,'Katakan umur '+CONFIG.shortName+' = x. Umur ayah = 4x <i>(1m)</i><br>x + 4x = 65 → 5x = 65 <i>(1m)</i><br>x = <b>13 tahun</b> <i>(1m)</i>','eq'),
  K('3(d)','Selesaikan ketaksamaan linear 3x − 4 < 11.',['x<5'],2,'3x < 15 <i>(1m)</i><br><b>x < 5</b> <i>(1m)</i>')]},
 {stim:'<b>4</b> Garis, Sudut dan Poligon <span class="tag">10 markah</span>',items:[
  K('4(a)',`Dalam rajah di bawah, PQR ialah garis lurus. Cari nilai x.${FIG_LINE}`,['55'],2,'Sudut pada garis lurus = 180° <i>(1m)</i><br>x = 180° − 125° = <b>55°</b> <i>(1m)</i>','ang'),
  K('4(b)',`Tiga sudut bertemu pada satu titik: 90°, 110° dan 2y. Cari nilai y.${FIG_POINT}`,['80'],3,'Sudut pada satu titik = 360° <i>(1m)</i><br>2y = 360° − 90° − 110° = 160° <i>(1m)</i><br><b>y = 80°</b> <i>(1m)</i>','ang'),
  K('4(c)','Sebuah segi tiga mempunyai sudut 2a, 3a dan 4a. Cari nilai a.',['20'],2,'2a + 3a + 4a = 180° → 9a = 180° <i>(1m)</i><br><b>a = 20°</b> <i>(1m)</i>','poly'),
  K('4(d)','Hitung saiz setiap sudut pedalaman sebuah oktagon sekata.',['135'],3,'Jumlah = (8 − 2) × 180° = 1080° <i>(1m)</i><br>1080° ÷ 8 <i>(1m)</i><br>= <b>135°</b> <i>(1m)</i>','poly')]},
 {stim:'<b>5</b> Perimeter dan Luas <span class="tag">10 markah</span>',items:[
  K('5(a)','Sebuah segi empat tepat mempunyai panjang 15 cm dan perimeter 46 cm. Cari lebarnya.',['8'],3,'2(15 + l) = 46 <i>(1m)</i><br>15 + l = 23 <i>(1m)</i><br><b>l = 8 cm</b> <i>(1m)</i>','area'),
  K('5(b)','Hitung luas sebuah trapezium yang mempunyai sisi selari 8 cm dan 14 cm serta tinggi 6 cm.',['66'],3,'½ × (8 + 14) × 6 <i>(1m)</i><br>= ½ × 22 × 6 <i>(1m)</i><br>= <b>66 cm²</b> <i>(1m)</i>','area'),
  K('5(c)','Sebuah taman berbentuk segi empat tepat berukuran 20 m × 12 m. Di tengahnya terdapat kolam berbentuk segi empat sama bersisi 4 m. Bahagian selebihnya ditanam rumput dengan kos RM5 setiap m². Hitung kos menanam rumput.',['1120','1120.00'],4,'Luas taman = 20 × 12 = 240 m² <i>(1m)</i><br>Luas kolam = 4 × 4 = 16 m² <i>(1m)</i><br>Luas rumput = 240 − 16 = 224 m² <i>(1m)</i><br>Kos = 224 × 5 = <b>RM1120</b> <i>(1m)</i>','area')]},
 {stim:'<b>6</b> Teorem Pythagoras <span class="tag">10 markah</span>',items:[
  K('6(a)','Tentukan sama ada segi tiga dengan sisi 7 cm, 24 cm dan 25 cm ialah segi tiga bersudut tegak. Tunjukkan kiraan anda. (Tulis <i>ya</i> atau <i>tidak</i>)',['ya'],3,'7² + 24² = 49 + 576 <i>(1m)</i><br>= 625 = 25² <i>(1m)</i><br><b>Ya</b>, bersudut tegak <i>(1m)</i>','pyth'),
  K('6(b)','Sebatang tangga sepanjang 10 m disandarkan pada dinding. Kaki tangga berada 6 m dari dinding. Berapakah tinggi hujung tangga dari lantai?',['8'],3,'t² = 10² − 6² <i>(1m)</i><br>= 100 − 36 = 64 <i>(1m)</i><br><b>t = 8 m</b> <i>(1m)</i>','pyth'),
  K('6(c)',`Dalam rajah, ABC ialah segi tiga bersudut tegak di B. Hitung perimeter segi tiga ABC.${FIG_PYTH}`,['30'],4,'AC² = 12² + 5² = 144 + 25 = 169 <i>(1m)</i><br>AC = 13 cm <i>(1m)</i><br>Perimeter = 12 + 5 + 13 <i>(1m)</i><br>= <b>30 cm</b> <i>(1m)</i>','pyth')]}
]);

/* ================= MATEMATIK SAMPEL 2 ================= */
PAPERS.mt2=mtPaper('mt2','Matematik Sampel 2','grape',[
 ['Susun nombor −2, 3, −5, 0 dalam tertib menaik.',['−5, −2, 0, 3','−2, −5, 0, 3','0, −2, 3, −5','3, 0, −2, −5'],0,'Nombor paling negatif ialah yang paling kecil.','int'],
 ['Hitung −12 − (−5) + 3.',['−4','−14','20','−10'],0,'−12 + 5 = −7; −7 + 3 = −4.','int'],
 ['Hitung (−½) × (−¾).',['3/8','−3/8','3/4','1/4'],0,'Negatif × negatif = positif. ½ × ¾ = 3/8.'],
 ['Antara berikut, yang manakah nombor perdana?',['29','21','27','33'],0,'21 = 3×7, 27 = 3×9, 33 = 3×11. 29 hanya ada faktor 1 dan 29.','fg'],
 ['Cari FSTB bagi 18, 27 dan 45.',['9','3','270','6'],0,'','fg'],
 ['Cari GSTK bagi 4, 6 dan 10.',['60','120','2','240'],0,'','fg'],
 ['Nilai 6² − √49 ialah',['29','5','43','19'],0,'36 − 7 = 29.'],
 ['Nilai ∛(−125) ialah',['−5','5','−25','25'],0,'(−5) × (−5) × (−5) = −125.'],
 ['Harga 4 kg beras ialah RM14. Berapakah harga 10 kg beras?',['RM35','RM40','RM56','RM140'],0,'Harga 1 kg = RM3.50; × 10 = RM35.','ratio'],
 ['Nisbah murid lelaki kepada perempuan ialah 3 : 4. Jika terdapat 28 murid perempuan, berapakah bilangan murid lelaki?',['21','12','37','16'],0,'1 bahagian = 28 ÷ 4 = 7. Lelaki = 3 × 7 = 21.','ratio'],
 ['Berapakah bilangan sebutan dalam ungkapan 3a − 2b + 7?',['3','2','1','12'],0,'Sebutan: 3a, −2b, 7.'],
 ['Permudahkan (4a − 3) − (2a − 5).',['2a + 2','2a − 8','6a − 8','2a − 2'],0,'4a − 3 − 2a + 5 = 2a + 2. Tanda dalam kurungan berubah!'],
 ['Selesaikan x/3 + 2 = 7.',['x = 15','x = 3','x = 27','x = 5/3'],0,'x/3 = 5, x = 15.','eq'],
 ['“Nombor yang lebih besar daripada −2 tetapi kurang daripada atau sama dengan 4” ditulis sebagai',['−2 < x ≤ 4','−2 ≤ x < 4','−2 < x < 4','−2 ≤ x ≤ 4'],0],
 ['Antara berikut, yang manakah sudut cakah?',['135°','45°','90°','200°'],0,'Sudut cakah: antara 90° dan 180°.','ang'],
 ['Hasil tambah sudut pedalaman sebuah poligon ialah 1080°. Berapakah bilangan sisinya?',['8','6','7','9'],0,'(n − 2) × 180 = 1080 → n − 2 = 6 → n = 8.','poly'],
 ['Saiz setiap sudut peluaran sebuah poligon sekata 10 sisi ialah',['36°','144°','18°','72°'],0,'Jumlah sudut peluaran = 360°. 360° ÷ 10 = 36°.','poly'],
 ['Sebuah segi empat sama mempunyai luas 49 cm². Perimeternya ialah',['28 cm','14 cm','49 cm','196 cm'],0,'Sisi = √49 = 7; perimeter = 4 × 7 = 28.','area'],
 ['Diberi ξ = {1, 2, 3, 4, 5, 6, 7, 8} dan P = {2, 3, 5, 7}. Senaraikan P′.',['{1, 4, 6, 8}','{2, 3, 5, 7}','{1, 4, 6}','{4, 6, 8}'],0,'P′ = unsur ξ yang bukan dalam P.'],
 ['Sebuah segi tiga bersudut tegak mempunyai hipotenus 17 cm dan satu sisi 8 cm. Panjang sisi yang satu lagi ialah',['15 cm','9 cm','25 cm','18.8 cm'],0,'√(17² − 8²) = √(289 − 64) = √225 = 15.','pyth']
],[
 {stim:'<b>1</b> Hitung. <span class="tag">4 markah</span>',items:[N('1(a)','−3 × (−5) = ',['15'],1,'','int'),N('1(b)','−36 ÷ 4 = ',['-9'],1,'','int'),N('1(c)','0.6 + (−1.2) = ',['-0.6','-.6'],1,'','int'),N('1(d)','½ − ¾ = ',['-1/4','-0.25','-.25'],1,'2/4 − 3/4 = −1/4')]},
 {stim:'<b>2</b> Tandakan <b>Betul</b> atau <b>Salah</b>. <span class="tag">4 markah</span>',items:[TF('2(a)','2x + 3x = 5x²',false),TF('2(b)','Jika x = −2, maka x² = 4.',true),TF('2(c)','Jika 3 > x, maka x < 3.',true),TF('2(d)','Jika −2x > 6, maka x > −3.',false)]},
 {stim:'<b>3</b> Sebuah pili mengalirkan air pada kadar 12 liter seminit. Sebuah kereta pula menggunakan 8 liter petrol untuk perjalanan sejauh 96 km. <span class="tag">4 markah</span>',items:[N('3(a)','Isi padu air dalam 5 minit = ___ liter',['60']),N('3(b)','Masa untuk mengisi tangki 300 liter = ___ minit',['25'],1,'300 ÷ 12 = 25'),N('3(c)','Kadar penggunaan petrol kereta = ___ km/liter',['12'],1,'96 ÷ 8 = 12','ratio'),N('3(d)','Jarak yang boleh dilalui dengan 15 liter petrol = ___ km',['180'],1,'12 × 15 = 180','ratio')]},
 {stim:'<b>4</b> Lengkapkan. <span class="tag">4 markah</span>',items:[N('4(a)','15² = ',['225']),N('4(b)','√400 = ',['20']),N('4(c)','(⅔)³ = ',['8/27'],1,'2³/3³ = 8/27'),N('4(d)','∛0.008 = ',['0.2','.2'],1,'0.2 × 0.2 × 0.2 = 0.008')]},
 {stim:'<b>5</b> Bilangan buku yang dibaca oleh lapan orang murid dalam sebulan ialah: <b>2, 4, 4, 5, 6, 3, 4, 8</b> <span class="tag">4 markah</span>',items:[N('5(a)','Mod = ',['4'],1,'','stats'),N('5(b)','Median = ',['4'],1,'Susun: 2, 3, 4, <b>4, 4</b>, 5, 6, 8 → (4 + 4) ÷ 2 = 4','stats'),N('5(c)','Min = ',['4.5'],1,'36 ÷ 8 = 4.5','stats'),N('5(d)','Julat = ',['6'],1,'8 − 2 = 6')]}
],[
 {stim:'<b>1</b> Nombor Nisbah <span class="tag">10 markah</span>',items:[
  K('1(a)','Seorang penyelam berada 18 m di bawah paras laut. Dia naik 7 m, kemudian turun 4 m. Nyatakan kedudukan akhirnya sebagai integer.',['-15','-15m'],3,'−18 + 7 − 4 <i>(1m)</i><br>= −11 − 4 <i>(1m)</i><br>= <b>−15 m</b> (15 m di bawah paras laut) <i>(1m)</i>','int'),
  K('1(b)','Hitung (−0.5 + 2½) × (−4).',['-8'],3,'−0.5 + 2.5 = 2 <i>(1m)</i><br>2 × (−4) <i>(1m)</i><br>= <b>−8</b> <i>(1m)</i>','int'),
  K('1(c)','Mak Cik Ros membeli 3 kg gula dengan harga RM2.85 sekilogram dan 2 bungkus tepung dengan harga RM3.40 sebungkus. Dia membayar RM20. Berapakah baki wangnya?',['4.65'],4,'Gula = 3 × 2.85 = RM8.55 <i>(1m)</i><br>Tepung = 2 × 3.40 = RM6.80 <i>(1m)</i><br>Jumlah = RM15.35 <i>(1m)</i><br>Baki = 20 − 15.35 = <b>RM4.65</b> <i>(1m)</i>')]},
 {stim:'<b>2</b> Faktor dan Gandaan <span class="tag">10 markah</span>',items:[
  K('2(a)','Ungkapkan 84 sebagai hasil darab faktor perdana.',['2x2x3x7','2²x3x7','2^2x3x7'],2,'84 ÷ 2 = 42 → ÷ 2 = 21 → ÷ 3 = 7 → ÷ 7 = 1 <i>(1m)</i><br>84 = <b>2 × 2 × 3 × 7</b> <i>(1m)</i>','fg'),
  K('2(b)','Senaraikan tiga gandaan sepunya yang pertama bagi 4 dan 6.',['12,24,36'],3,'Gandaan 4: 4, 8, 12, 16, 20, 24, 28, 32, 36 <i>(1m)</i><br>Gandaan 6: 6, 12, 18, 24, 30, 36 <i>(1m)</i><br><b>12, 24, 36</b> <i>(1m)</i>','fg'),
  K('2(c)','Bas A bertolak setiap 15 minit dan bas B setiap 20 minit. Kedua-dua bas bertolak serentak pada pukul 7:00 pagi. Pukul berapakah kedua-dua bas akan bertolak serentak semula? (Tulis dalam bentuk 7:00)',['8:00','8.00','8:00pagi','8.00pagi'],2,'GSTK bagi 15 dan 20 = 60 minit <i>(1m)</i><br>7:00 + 60 minit = <b>8:00 pagi</b> <i>(1m)</i>','fg'),
  K('2(d)','Sebuah dewan mempunyai 120 kerusi biru dan 168 kerusi merah. Kerusi disusun dalam baris dengan bilangan kerusi yang sama dalam setiap baris, dan setiap baris hanya satu warna. Berapakah bilangan kerusi maksimum dalam setiap baris?',['24'],3,'Cari FSTB bagi 120 dan 168 <i>(1m)</i><br>120 = 2³ × 3 × 5 · 168 = 2³ × 3 × 7 <i>(1m)</i><br>FSTB = 2³ × 3 = <b>24</b> <i>(1m)</i>','fg')]},
 {stim:'<b>3</b> Algebra dan Persamaan Linear <span class="tag">10 markah</span>',items:[
  K('3(a)','Kembangkan dan permudahkan 4(x + 3) − 2(x − 1).',['2x+14'],3,'4x + 12 − 2x + 2 <i>(2m)</i><br>= <b>2x + 14</b> <i>(1m)</i>'),
  K('3(b)','Selesaikan 2(3k − 1) = 4k + 10.',['6','k=6'],3,'6k − 2 = 4k + 10 <i>(1m)</i><br>2k = 12 <i>(1m)</i><br><b>k = 6</b> <i>(1m)</i>','eq'),
  K('3(c)','Harga sebuah buku ialah RMx dan harga sebatang pen ialah RM(x − 6). '+CONFIG.shortName+' membeli 2 buah buku dan 3 batang pen dengan jumlah RM32. Cari nilai x.',['10','x=10'],4,'2x + 3(x − 6) = 32 <i>(1m)</i><br>2x + 3x − 18 = 32 <i>(1m)</i><br>5x = 50 <i>(1m)</i><br><b>x = 10</b> <i>(1m)</i>','eq')]},
 {stim:'<b>4</b> Garis, Sudut dan Poligon <span class="tag">10 markah</span>',items:[
  K('4(a)(i)',`Dalam rajah, dua garis mendatar adalah selari. Cari nilai x.${FIG_PAR}`,['68'],2,'x dan 68° ialah <b>sudut selang-seli</b> → sama besar <i>(1m)</i><br><b>x = 68°</b> <i>(1m)</i>','ang'),
  K('4(a)(ii)','Berdasarkan rajah yang sama, cari nilai y.',['112'],2,'x dan y berada pada garis lurus → x + y = 180° <i>(1m)</i><br>y = 180° − 68° = <b>112°</b> <i>(1m)</i>','ang'),
  K('4(b)','Setiap sudut peluaran sebuah poligon sekata ialah 40°. Berapakah bilangan sisi poligon itu?',['9'],3,'Jumlah sudut peluaran = 360° <i>(1m)</i><br>n = 360° ÷ 40° <i>(1m)</i><br>= <b>9 sisi</b> <i>(1m)</i>','poly'),
  K('4(c)','Dalam sisi empat PQRS, ∠P = 95°, ∠Q = 80°, ∠R = 2m dan ∠S = m + 50°. Cari nilai m.',['45'],3,'95 + 80 + 2m + m + 50 = 360 <i>(1m)</i><br>3m + 225 = 360 → 3m = 135 <i>(1m)</i><br><b>m = 45°</b> <i>(1m)</i>','poly')]},
 {stim:'<b>5</b> Perimeter dan Luas <span class="tag">10 markah</span>',items:[
  K('5(a)','Hitung luas sebuah segi empat selari dengan tapak 9 cm dan tinggi 6 cm.',['54'],2,'Luas = tapak × tinggi = 9 × 6 <i>(1m)</i><br>= <b>54 cm²</b> <i>(1m)</i>','area'),
  K('5(b)','Sebuah segi tiga mempunyai luas 36 cm² dan tapak 8 cm. Cari tingginya.',['9'],3,'½ × 8 × t = 36 <i>(1m)</i><br>4t = 36 <i>(1m)</i><br><b>t = 9 cm</b> <i>(1m)</i>','area'),
  K('5(c)',`Rajah menunjukkan bentuk L. Hitung luas bentuk itu.${FIG_L}`,['68'],2,'Segi empat besar 10 × 8 = 80 cm², tolak bahagian terpotong 4 × 3 = 12 cm² <i>(1m)</i><br>80 − 12 = <b>68 cm²</b> <i>(1m)</i>','area'),
  K('5(d)','Berdasarkan rajah bentuk L yang sama, hitung perimeternya.',['36'],3,'Tambah semua sisi: 6 + 3 + 4 + 5 + 10 + 8 <i>(2m)</i><br>= <b>36 cm</b> <i>(1m)</i><br><i>Petua: perimeter bentuk L ini sama dengan segi empat 10 × 8 → 2(10 + 8) = 36.</i>','area')]},
 {stim:'<b>6</b> Teorem Pythagoras <span class="tag">10 markah</span>',items:[
  K('6(a)','Hitung panjang hipotenus sebuah segi tiga bersudut tegak dengan sisi tegak 9 cm dan 12 cm.',['15'],2,'√(9² + 12²) = √(81 + 144) = √225 <i>(1m)</i><br>= <b>15 cm</b> <i>(1m)</i>','pyth'),
  K('6(b)','Sebuah kapal belayar 16 km ke utara, kemudian 12 km ke timur. Berapakah jarak terus kapal itu dari titik permulaan?',['20'],3,'d² = 16² + 12² <i>(1m)</i><br>= 256 + 144 = 400 <i>(1m)</i><br><b>d = 20 km</b> <i>(1m)</i>','pyth'),
  K('6(c)','Skrin sebuah telefon berbentuk segi empat tepat dengan pepenjuru 13 cm dan lebar 5 cm. Hitung luas skrin itu.',['60'],5,'Panjang² = 13² − 5² <i>(1m)</i><br>= 169 − 25 = 144 <i>(1m)</i><br>Panjang = 12 cm <i>(1m)</i><br>Luas = 12 × 5 <i>(1m)</i><br>= <b>60 cm²</b> <i>(1m)</i>','pyth')]}
]);
