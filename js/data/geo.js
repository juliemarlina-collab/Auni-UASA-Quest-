/* ---------- map drawing helpers ---------- */
const GX=x=>30+x*52, GY=y=>30+(6-y)*52;
const pts=a=>a.map(([x,y])=>GX(x)+','+GY(y)).join(' ');
function sym(t,x,y,label,dx,dy){
 const X=GX(x),Y=GY(y);let s='';
 if(t==='school')s=`<rect x="${X-8}" y="${Y-8}" width="16" height="16" fill="#FFD43B" stroke="#17171C" stroke-width="2"/><path d="M${X} ${Y-8}V${Y-20}l9 4-9 4" fill="#FF6B4A" stroke="#17171C" stroke-width="1.5"/>`;
 if(t==='mosque')s=`<path d="M${X-9} ${Y+8}V${Y}a9 9 0 0 1 18 0V${Y+8}Z" fill="#7BDC6B" stroke="#17171C" stroke-width="2"/><path d="M${X} ${Y-9}V${Y-15}" stroke="#17171C" stroke-width="2"/>`;
 if(t==='police')s=`<path d="M${X} ${Y-10}L${X+10} ${Y+8}H${X-10}Z" fill="#7EC4FF" stroke="#17171C" stroke-width="2"/>`;
 if(t==='clinic'||t==='hospital')s=`<rect x="${X-9}" y="${Y-9}" width="18" height="18" fill="#fff" stroke="#17171C" stroke-width="2"/><path d="M${X} ${Y-6}V${Y+6}M${X-6} ${Y}H${X+6}" stroke="#E2412B" stroke-width="3"/>`;
 if(t==='bus')s=`<rect x="${X-10}" y="${Y-7}" width="20" height="14" rx="3" fill="#B98CFF" stroke="#17171C" stroke-width="2"/>`;
 if(t==='market')s=`<circle cx="${X}" cy="${Y}" r="9" fill="#FFD43B" stroke="#17171C" stroke-width="2"/><text x="${X}" y="${Y+4}" text-anchor="middle" font-size="11" font-weight="800" fill="#17171C">P</text>`;
 if(t==='factory')s=`<path d="M${X-10} ${Y+8}V${Y-2}l6-4v4l6-4v4l6-4V${Y-12}h2V${Y+8}Z" fill="#9aa0a6" stroke="#17171C" stroke-width="2"/>`;
 if(t==='port')s=`<path d="M${X} ${Y-10}V${Y+8}M${X-7} ${Y-4}H${X+7}M${X-9} ${Y+2}a9 9 0 0 0 18 0" fill="none" stroke="#17171C" stroke-width="2.5"/>`;
 if(t==='hill')s=`<path d="M${X-12} ${Y+8}L${X} ${Y-10}L${X+12} ${Y+8}Z" fill="#C79A5B" stroke="#17171C" stroke-width="2"/>`;
 if(t==='bridge')s=`<path d="M${X-9} ${Y-6}h18M${X-9} ${Y+6}h18" stroke="#17171C" stroke-width="3"/>`;
 return s+(label?`<text x="${X+(dx||12)}" y="${Y+(dy||4)}" font-size="12" font-weight="700" fill="#17171C">${label}</text>`:'');
}
function mapSVG(title,body){
 let g='';for(let i=0;i<=8;i++)g+=`<path d="M${GX(i)} ${GY(0)}V${GY(6)}" stroke="#17171C" stroke-opacity=".15"/>`;for(let j=0;j<=6;j++)g+=`<path d="M${GX(0)} ${GY(j)}H${GX(8)}" stroke="#17171C" stroke-opacity=".15"/>`;
 return `<div class="mapwrap"><svg viewBox="0 0 476 410" role="img" aria-label="${title}"><rect x="${GX(0)}" y="${GY(6)}" width="416" height="312" fill="#FFFDF0" stroke="#17171C" stroke-width="3"/>${g}${body}
 <g transform="translate(436,52)"><path d="M0 -18L7 6L0 1L-7 6Z" fill="#17171C"/><text x="0" y="-22" text-anchor="middle" font-size="13" font-weight="800" fill="#17171C">U</text></g>
 <g transform="translate(30,372)"><path d="M0 0h52M52 0h52" stroke="#17171C" stroke-width="5"/><path d="M52 0h52" stroke="#fff" stroke-width="3"/><text x="0" y="22" font-size="11" fill="#17171C">0</text><text x="48" y="22" font-size="11" fill="#17171C">1</text><text x="98" y="22" font-size="11" fill="#17171C">2 km</text></g>
 <text x="${GX(4)}" y="20" text-anchor="middle" font-size="14" font-weight="800" fill="#17171C">${title}</text></svg></div>`;
}
function compassBlank(P,Q,R){ // positions: keys among U,TL,T,TG,S,BD,B,BL
 const pos={U:[0,-1],TL:[.71,-.71],T:[1,0],TG:[.71,.71],S:[0,1],BD:[-.71,.71],B:[-1,0],BL:[-.71,-.71]};
 const lab={U:'Utara',T:'Timur',S:'Selatan',B:'Barat',TL:'Timur Laut',TG:'Tenggara',BD:'Barat Daya',BL:'Barat Laut'};
 const blanks={[P]:'P',[Q]:'Q',[R]:'R'};let s='';
 for(const k in pos){const [dx,dy]=pos[k];const x=150+dx*58,y=105+dy*58;s+=`<path d="M150 105L${150+dx*40} ${105+dy*40}" stroke="#17171C" stroke-width="${k.length===1?3:2}"/>`;
  const tx=150+dx*92,ty=105+dy*84;
  s+=blanks[k]?`<rect x="${tx-16}" y="${ty-14}" width="32" height="24" rx="6" fill="#FFD43B" stroke="#17171C" stroke-width="2"/><text x="${tx}" y="${ty+4}" text-anchor="middle" font-size="14" font-weight="800" fill="#17171C">${blanks[k]}</text>`:`<text x="${tx}" y="${ty+4}" text-anchor="middle" font-size="11" font-weight="700" fill="#17171C">${lab[k]}</text>`}
 return `<div class="mapwrap" style="max-width:320px"><svg viewBox="0 0 300 210" role="img" aria-label="Rajah arah mata angin">${s}<circle cx="150" cy="105" r="6" fill="#FF6B4A" stroke="#17171C" stroke-width="2"/></svg></div>`;
}
const DIR=(a)=>a; // accepted direction strings
const D={TL:['timur laut','tl'],TG:['tenggara','tg'],BD:['barat daya','bd'],BL:['barat laut','bl'],U:['utara','u'],S:['selatan','s'],T:['timur','t'],B:['barat','b']};
const KM=n=>[n+' km',n+'km',String(n),n+' kilometer',n+' kilometre'];

const GEO_A_INS='Jawab semua soalan. Pilih satu jawapan yang paling tepat.';
const geoPaper=(id,short,color,A,B,C)=>({id,subj:'GEO',lang:'ms',title:'Geografi · '+short,short,color,kertas:[{k:'Kertas Geografi (2 jam)',time:120,mk:80,sec:[
 {h:'Bahagian A',mk:20,ins:GEO_A_INS,g:[{stim:'',items:A.map((q,i)=>{const [o,na]=SHUF(q[1],q[2],i*5+(id==='geo2'?11:2));return M(String(i+1),q[0],o,na,q[3])})}]},
 {h:'Bahagian B',mk:40,ins:'Jawab semua soalan.',g:B},
 {h:'Bahagian C',mk:20,pick:2,ins:'Jawab <b>dua</b> soalan sahaja. Setiap soalan membawa 10 markah. Markah dikira daripada dua soalan yang kamu jawab.',g:C.map((c,i)=>({stim:`<b>${i+1}</b> ${c[0]}`,items:c[1].map((s,j)=>O(`C${i+1}(${'ab'[j]})`,s[0],s[1],s[2]))}))}
]}]});
const OB=(n,q,m,model)=>O(n,q,m,model);

/* ================= GEOGRAFI SAMPEL 1 ================= */
const MAP1=mapSVG('Peta Lakar Kampung Seri Bayu',
 `<polygon points="${pts([[6,6],[8,6],[8,4],[6.4,4.2]])}" fill="#7BDC6B" fill-opacity=".55" stroke="#17171C" stroke-width="1.5"/>
 ${[[6.6,5.5],[7.4,5.2],[7.2,4.6],[6.9,5.8]].map(([x,y])=>`<circle cx="${GX(x)}" cy="${GY(y)}" r="6" fill="#1FA35A" stroke="#17171C"/>`).join('')}
 <rect x="${GX(0)}" y="${GY(1.5)}" width="${2.5*52}" height="${1.5*52}" fill="#FFE98A" stroke="#17171C" stroke-width="1.5"/>
 ${[[0.5,0.5],[1.2,1],[1.9,0.5]].map(([x,y])=>`<text x="${GX(x)}" y="${GY(y)}" font-size="14" fill="#1FA35A" font-weight="800">ψ</text>`).join('')}
 <path d="M${GX(0.6)} ${GY(6)} C ${GX(1.5)} ${GY(4.5)}, ${GX(3.8)} ${GY(4)}, ${GX(3.5)} ${GY(2.6)} S ${GX(3.8)} ${GY(0.8)}, ${GX(4.6)} ${GY(0)}" fill="none" stroke="#2F8FE0" stroke-width="5"/>
 <path d="M${GX(0)} ${GY(2)}H${GX(8)}" stroke="#E2412B" stroke-width="5"/>
 <path d="M${GX(2)} ${GY(2)}V${GY(5)}M${GX(5)} ${GY(2)}V${GY(5)}" stroke="#E2412B" stroke-width="2.5"/>
 ${sym('bridge',3.55,2)}${sym('school',2,2,'Sekolah',12,22)}${sym('mosque',6,2,'Masjid',12,22)}${sym('police',5,5,'Balai Polis')}${sym('clinic',2,5,'Klinik')}${sym('hill',7.3,1,'Bukit Seri')}`);
const LEG1=`<div class="legend"><span><i style="background:#E2412B"></i>Jalan raya utama</span><span><i style="background:#E2412B;height:3px"></i>Jalan kecil</span><span><i style="background:#2F8FE0"></i>Sungai</span><span><i style="background:#7BDC6B"></i>Hutan</span><span><i style="background:#FFE98A"></i>Sawah padi</span><span>1 petak grid = 1 km</span></div>`;

PAPERS.geo1=geoPaper('geo1','Geografi Sampel 1','teal',[
 ['Planet manakah yang ketiga dari Matahari?',['Bumi','Marikh','Zuhrah','Musytari'],0],
 ['Putaran bumi pada paksinya menyebabkan kejadian',['siang dan malam','empat musim','gerhana bulan','pasang surut sahaja'],0],
 ['Berapakah tempoh masa bumi beredar mengelilingi Matahari?',['365¼ hari','24 jam','30 hari','180 hari'],0],
 ['Gunung yang tertinggi di Malaysia ialah',['Gunung Kinabalu','Gunung Tahan','Gunung Ledang','Gunung Jerai'],0],
 ['Banjaran yang terpanjang di Semenanjung Malaysia ialah',['Banjaran Titiwangsa','Banjaran Crocker','Banjaran Bintang','Banjaran Timur'],0],
 ['Kawasan tanah pamah sesuai untuk',['pertanian sawah padi dan petempatan','perlombongan emas di puncak gunung','pelancongan tanah tinggi','kawasan tadahan air sahaja'],0],
 ['Sungai yang terpanjang di Malaysia ialah',['Sungai Rajang','Sungai Pahang','Sungai Perak','Sungai Kinabatangan'],0],
 ['Tasik Kenyir di Terengganu penting untuk',['menjana kuasa hidroelektrik','perlombongan bijih timah','menanam padi huma','penternakan lembu'],0],
 ['Kawasan tempat sungai bermula dikenali sebagai',['punca sungai','muara sungai','kuala','delta'],0],
 ['Negeri yang mempunyai bilangan penduduk paling ramai di Malaysia ialah',['Selangor','Perlis','Pahang','Sabah'],0],
 ['Mengapakah penduduk tertumpu di pantai barat Semenanjung Malaysia?',['Banyak peluang pekerjaan dan kemudahan asas','Kawasannya bergunung-ganang','Kurang jalan raya','Hutan tebal yang luas'],0],
 ['Petempatan berjajar biasanya terbentuk di sepanjang',['jalan raya, sungai atau pantai','puncak gunung','tengah hutan tebal','kawasan paya'],0],
 ['Petempatan berselerak biasanya terdapat di kawasan',['tanah tinggi yang berbukit-bukau','pusat bandar raya','persimpangan jalan utama','kawasan pelabuhan'],0],
 ['Antara berikut, yang manakah bandar pentadbiran?',['Putrajaya','Port Klang','Langkawi','Kerteh'],0],
 ['Sungai Mekong bermuara di negara',['Vietnam','Thailand','Myanmar','Malaysia'],0],
 ['Negara ASEAN yang mempunyai paling banyak gunung berapi ialah',['Indonesia','Singapura','Brunei','Laos'],0],
 ['Negara ASEAN yang mempunyai penduduk paling ramai ialah',['Indonesia','Malaysia','Kemboja','Brunei'],0],
 ['Dalam kitaran air, proses wap air bertukar menjadi titisan air dikenali sebagai',['kondensasi','sejatan','kerpasan','resapan'],0],
 ['Amalan 3R dalam pengurusan sisa terdiri daripada',['kurangkan, guna semula, kitar semula','kumpul, bakar, buang','simpan, jual, beli','basuh, keringkan, buang'],0],
 ['Tong kitar semula berwarna biru digunakan untuk',['kertas','kaca','plastik','sisa makanan'],0,'Biru = kertas, coklat = kaca, oren = plastik & tin.']
],[
 {stim:`<b>1</b> Kemahiran Geografi <span class="tag">20 markah</span><p>(a) Rajah di bawah menunjukkan arah mata angin. Namakan arah <b>P</b>, <b>Q</b> dan <b>R</b>.</p>${compassBlank('TL','S','BD')}`,items:[
  S('1(a) P','Arah P',D.TL),S('1(a) Q','Arah Q',D.S),S('1(a) R','Arah R',D.BD)]},
 {stim:`Peta lakar di bawah menunjukkan Kampung Seri Bayu. Kaji peta tersebut dan jawab soalan (b) hingga (g).${MAP1}${LEG1}`,items:[
  S('1(b)(i)','Nyatakan arah Balai Polis dari Sekolah.',D.TL),
  S('1(b)(ii)','Nyatakan arah Sekolah dari Klinik.',D.S),
  S('1(c)(i)','Hitung jarak dari Sekolah ke Masjid melalui jalan raya utama.',KM(4),1,'Sekolah di garis grid 2, Masjid di garis grid 6 → 4 petak = <b>4 km</b>.'),
  S('1(c)(ii)','Hitung jarak lurus dari Klinik ke Balai Polis.',KM(3),1,'Klinik di 2, Balai Polis di 5 → <b>3 km</b>.'),
  OB('1(d)','Namakan tiga unsur budaya yang terdapat pada peta.',3,'Sekolah; masjid; balai polis; klinik; jalan raya; jambatan; sawah padi. Terima mana-mana tiga.'),
  OB('1(e)','Namakan dua unsur fizikal yang terdapat pada peta.',2,'Sungai; bukit (Bukit Seri); hutan. Terima mana-mana dua.'),
  OB('1(f)','Berdasarkan peta, jelaskan dua aktiviti ekonomi penduduk Kampung Seri Bayu.',4,'Menanam padi (1) kerana terdapat kawasan sawah padi di barat daya kampung (1); menangkap ikan sungai (1) kerana sungai mengalir melalui kampung (1). Terima: mengusahakan hasil hutan dengan huraian.'),
  OB('1(g)','Huraikan dua sebab kawasan ini sesuai dijadikan petempatan.',4,'Terdapat jalan raya (1) yang memudahkan perhubungan (1); ada sumber air daripada sungai (1) untuk kegunaan harian (1). Terima: kemudahan awam seperti sekolah dan klinik dengan huraian.')]},
 {stim:'<b>2</b> Bentuk Muka Bumi di Malaysia <span class="tag">10 markah</span>',items:[
  OB('2(a)','Nyatakan tiga jenis bentuk muka bumi di Malaysia.',3,'Tanah tinggi; tanah pamah; pinggir laut.'),
  OB('2(b)','Nyatakan tiga contoh kawasan tanah tinggi di Malaysia.',3,'Cameron Highlands; Genting Highlands; Bukit Fraser; Banjaran Titiwangsa; Banjaran Crocker; Gunung Kinabalu. Terima mana-mana tiga.'),
  OB('2(c)','Jelaskan dua kepentingan tanah tinggi kepada penduduk.',4,'Kawasan pelancongan (1) kerana suhunya sejuk dan pemandangan indah (1); kawasan tadahan air (1) yang membekalkan air kepada sungai (1). Terima: pertanian tanah tinggi seperti teh dan sayur dengan huraian.')]},
 {stim:'<b>3</b> Sumber Air <span class="tag">10 markah</span>',items:[
  OB('3(a)','Nyatakan dua sumber air semula jadi.',2,'Sungai; tasik; air bawah tanah; air hujan; laut. Terima mana-mana dua.'),
  OB('3(b)','Jelaskan dua kegunaan air dalam sektor ekonomi.',4,'Pertanian (1) untuk mengairi sawah padi (1); perindustrian (1) untuk menyejukkan mesin kilang (1). Terima: penjanaan hidroelektrik atau pengangkutan dengan huraian.'),
  OB('3(c)','Huraikan dua cara menjimatkan penggunaan air di rumah.',4,'Menutup paip semasa memberus gigi (1) supaya air tidak mengalir sia-sia (1); menggunakan semula air basuhan sayur (1) untuk menyiram pokok (1). Terima: membaiki paip bocor dengan huraian.')]}
],[
 ['Bumi dalam Sistem Suria',[['Nyatakan empat planet dalam Sistem Suria.',4,'Utarid; Zuhrah; Bumi; Marikh; Musytari; Zuhal; Uranus; Neptun. Terima mana-mana empat.'],['Jelaskan tiga kesan putaran bumi.',6,'Kejadian siang dan malam (1) kerana sebahagian bumi menghadap Matahari (1); perbezaan waktu antara tempat (1) mengikut garisan bujur (1); pesongan arah angin dan arus laut (1) akibat daya Coriolis (1).']]],
 ['Petempatan di Malaysia',[['Nyatakan empat faktor yang mempengaruhi lokasi petempatan.',4,'Bentuk muka bumi yang rata; sumber air; tanah subur; jalan perhubungan; peluang pekerjaan; kemudahan asas. Terima mana-mana empat.'],['Huraikan tiga masalah petempatan bandar dan cara mengatasinya.',6,'Kesesakan lalu lintas (1) diatasi dengan menggalakkan pengangkutan awam (1); pencemaran udara (1) diatasi dengan menanam pokok dan mengawal asap kilang (1); setinggan (1) diatasi dengan membina rumah mampu milik (1).']]],
 ['Saliran di Asia Tenggara',[['Nyatakan empat sungai utama di Asia Tenggara.',4,'Sungai Mekong; Sungai Irrawaddy; Sungai Chao Phraya; Sungai Merah; Sungai Salween; Sungai Rajang. Terima mana-mana empat.'],['Jelaskan tiga kepentingan sungai kepada penduduk di Asia Tenggara.',6,'Sumber air pengairan (1) untuk tanaman padi di lembah dan delta (1); jalan pengangkutan (1) bagi membawa penumpang dan barang (1); sumber makanan (1) seperti ikan air tawar (1).']]],
 ['Sisa Domestik',[['Nyatakan empat jenis sisa domestik.',4,'Sisa makanan; plastik; kertas; kaca; tin aluminium; kain. Terima mana-mana empat.'],['Huraikan tiga kesan pembuangan sisa domestik secara tidak terkawal.',6,'Pencemaran air (1) apabila sampah dibuang ke dalam sungai (1); banjir kilat (1) kerana longkang tersumbat oleh sampah (1); penyakit berjangkit (1) kerana sampah menjadi tempat pembiakan nyamuk dan tikus (1).']]]
]);

/* ================= GEOGRAFI SAMPEL 2 ================= */
const MAP2=mapSVG('Peta Lakar Bandar Teluk Indah',
 `<polygon points="${pts([[0,0],[1,0],[1.25,3],[1,6],[0,6]])}" fill="#7EC4FF" fill-opacity=".7" stroke="#17171C" stroke-width="1.5"/><text x="${GX(0.15)}" y="${GY(4)}" font-size="12" font-weight="800" fill="#17171C">LAUT</text>
 <polygon points="${pts([[4,3.4],[7.4,3.4],[7.4,4.6],[4,4.6]])}" fill="#FFB5A0" stroke="#17171C" stroke-width="1.5"/><text x="${GX(4.3)}" y="${GY(3.9)}" font-size="11" font-weight="700" fill="#17171C">Taman Perumahan</text>
 <path d="M${GX(8)} ${GY(5.6)} C ${GX(6)} ${GY(5.1)}, ${GX(4)} ${GY(5.9)}, ${GX(2.5)} ${GY(5.3)} S ${GX(1.5)} ${GY(5)}, ${GX(1.15)} ${GY(5.2)}" fill="none" stroke="#2F8FE0" stroke-width="5"/>
 <path d="M${GX(1.2)} ${GY(3)}H${GX(8)}M${GX(3)} ${GY(0)}V${GY(6)}" stroke="#E2412B" stroke-width="5"/>
 <path d="M${GX(1.1)} ${GY(1)}H${GX(8)}" stroke="#17171C" stroke-width="3"/><path d="M${GX(1.1)} ${GY(1)}H${GX(8)}" stroke="#fff" stroke-width="1.5" stroke-dasharray="8 8"/>
 ${sym('bridge',3,5.45)}${sym('bus',3,3,'Stesen Bas',14,22)}${sym('hospital',3,6,'Hospital',14,16)}${sym('market',7,3,'Pasar',-8,24)}${sym('factory',6,0.25,'Kilang',14,-6)}${sym('port',1.4,1.4,'Pelabuhan',14,-6)}`);
const LEG2=`<div class="legend"><span><i style="background:#E2412B"></i>Jalan raya</span><span><i style="background:repeating-linear-gradient(90deg,#17171C 0 6px,#fff 6px 12px)"></i>Landasan kereta api</span><span><i style="background:#2F8FE0"></i>Sungai</span><span><i style="background:#FFB5A0"></i>Kawasan perumahan</span><span><i style="background:#7EC4FF"></i>Laut</span><span>1 petak grid = 1 km</span></div>`;

PAPERS.geo2=geoPaper('geo2','Geografi Sampel 2','teal',[
 ['Paksi bumi condong pada sudut',['23½°','45°','90°','66½°'],0],
 ['Peredaran bumi mengelilingi Matahari menyebabkan kejadian',['musim','siang dan malam','gempa bumi','angin darat'],0],
 ['Garisan khayalan yang membahagikan bumi kepada Hemisfera Utara dan Hemisfera Selatan ialah',['Khatulistiwa','Garisan Meridian Pangkal','Garisan Tarikh Antarabangsa','Garisan Sartan'],0],
 ['Tanah tinggi di Pahang yang terkenal dengan ladang teh ialah',['Cameron Highlands','Bukit Fraser','Bukit Larut','Gunung Ledang'],0],
 ['Bentuk muka bumi pinggir laut yang menganjur ke laut dikenali sebagai',['tanjung','teluk','lagun','paya bakau'],0],
 ['Kawasan tadahan air ialah kawasan yang',['menerima dan menyalurkan air hujan ke sungai','menjadi tempat sungai bertemu laut','dipenuhi bangunan tinggi','tidak menerima hujan'],0],
 ['Tempat sungai bertemu dengan laut dikenali sebagai',['muara','punca','hulu','air terjun'],0],
 ['Antara berikut, yang manakah tasik buatan manusia?',['Tasik Kenyir','Tasik Chini','Tasik Bera','Tasik Dayang Bunting'],0],
 ['Kawasan yang jarang penduduk di Malaysia biasanya ialah',['kawasan tanah tinggi dan hutan pedalaman','kawasan bandar','lembah sungai yang subur','kawasan pantai barat'],0],
 ['Kepadatan penduduk dikira dengan cara',['jumlah penduduk ÷ keluasan kawasan','keluasan kawasan ÷ jumlah penduduk','jumlah penduduk × keluasan kawasan','jumlah lelaki − jumlah perempuan'],0],
 ['Petempatan berkelompok biasanya terbentuk di',['persimpangan jalan dan kawasan tanah rata','puncak bukit yang curam','kawasan paya','sepanjang landasan kereta api sahaja'],0],
 ['Antara berikut, yang manakah bandar pelabuhan?',['Port Klang','Putrajaya','Cameron Highlands','Kerteh'],0],
 ['Antara berikut, yang manakah bandar pelancongan?',['Langkawi','Putrajaya','Kerteh','Port Klang'],0],
 ['Perpindahan penduduk dari kawasan luar bandar ke bandar dikenali sebagai',['migrasi desa–bandar','migrasi bandar–desa','pertambahan semula jadi','urbanisasi semula'],0],
 ['Gunung Mayon ialah gunung berapi aktif di',['Filipina','Indonesia','Thailand','Vietnam'],0],
 ['Sungai yang terpanjang di Asia Tenggara ialah',['Sungai Mekong','Sungai Rajang','Sungai Chao Phraya','Sungai Pahang'],0],
 ['Kampung Ayer yang terkenal dengan rumah atas air terletak di',['Brunei','Singapura','Laos','Myanmar'],0],
 ['Antara berikut, yang manakah punca pencemaran air sungai?',['Pembuangan sisa kilang','Penanaman pokok di tebing','Pembinaan kolam takungan','Hujan yang turun'],0],
 ['Tapak pelupusan sanitari ialah kaedah pengurusan sisa dengan cara',['menimbus sisa secara terkawal dan berlapis','membuang sisa ke dalam laut','membakar sisa di tepi jalan','menjual semua sisa'],0],
 ['Contoh amalan guna semula ialah',['menjadikan botol plastik sebagai pasu bunga','membakar kertas lama','membeli beg plastik baharu','membuang tin ke dalam sungai'],0]
],[
 {stim:`<b>1</b> Kemahiran Geografi <span class="tag">20 markah</span><p>(a) Rajah di bawah menunjukkan arah mata angin. Namakan arah <b>P</b>, <b>Q</b> dan <b>R</b>.</p>${compassBlank('BL','T','TG')}`,items:[
  S('1(a) P','Arah P',D.BL),S('1(a) Q','Arah Q',D.T),S('1(a) R','Arah R',D.TG)]},
 {stim:`Peta lakar di bawah menunjukkan Bandar Teluk Indah. Kaji peta tersebut dan jawab soalan (b) hingga (g).${MAP2}${LEG2}`,items:[
  S('1(b)(i)','Nyatakan arah Kilang dari Stesen Bas.',D.TG),
  S('1(b)(ii)','Nyatakan arah Stesen Bas dari Hospital.',D.S),
  S('1(c)(i)','Hitung jarak dari Stesen Bas ke Pasar melalui jalan raya.',KM(4),1,'Stesen Bas di garis grid 3, Pasar di 7 → <b>4 km</b>.'),
  S('1(c)(ii)','Hitung jarak dari Stesen Bas ke Hospital melalui jalan raya.',KM(3),1,'Stesen Bas di 3, Hospital di 6 → <b>3 km</b>.'),
  OB('1(d)','Namakan tiga kemudahan awam yang terdapat di bandar ini.',3,'Hospital; stesen bas; pasar; jalan raya; landasan kereta api; jambatan. Terima mana-mana tiga.'),
  OB('1(e)','Namakan dua jenis pengangkutan yang boleh digunakan di bandar ini.',2,'Jalan raya; kereta api; pengangkutan air/laut (pelabuhan). Terima mana-mana dua.'),
  OB('1(f)','Berdasarkan peta, jelaskan dua aktiviti ekonomi di Bandar Teluk Indah.',4,'Perindustrian (1) kerana terdapat kilang di bahagian selatan (1); perdagangan (1) melalui pelabuhan dan pasar (1). Terima perikanan dengan huraian.'),
  OB('1(g)','Cadangkan dua langkah untuk mengurangkan kesesakan lalu lintas di bandar ini.',4,'Menggalakkan penggunaan bas dan kereta api (1) kerana terdapat stesen bas dan landasan kereta api (1); membina jalan pintas atau lebuh raya baharu (1) supaya kenderaan tidak tertumpu di pusat bandar (1).')]},
 {stim:'<b>2</b> Saliran di Malaysia <span class="tag">10 markah</span>',items:[
  OB('2(a)','Nyatakan tiga bahagian sungai.',3,'Hulu sungai; bahagian tengah sungai; hilir sungai.'),
  OB('2(b)','Nyatakan tiga contoh tasik semula jadi di Malaysia.',3,'Tasik Chini; Tasik Bera; Tasik Dayang Bunting; Tasik Loagan Bunut. Terima mana-mana tiga.'),
  OB('2(c)','Jelaskan dua kepentingan sungai kepada penduduk di Malaysia.',4,'Sumber air (1) untuk kegunaan domestik dan pertanian (1); kawasan rekreasi (1) seperti berkayak dan memancing (1). Terima pengangkutan di Sarawak dengan huraian.')]},
 {stim:`<b>3</b> Penduduk di Malaysia <span class="tag">10 markah</span><div style="overflow-x:auto"><table class="dtab"><tr><th>Negeri</th><th>Penduduk</th><th>Keluasan (km²)</th><th>Kepadatan (orang/km²)</th></tr><tr><td>P</td><td>1 200 000</td><td>2 000</td><td>600</td></tr><tr><td>Q</td><td>900 000</td><td>9 000</td><td>100</td></tr><tr><td>R</td><td>600 000</td><td>3 000</td><td>?</td></tr></table></div><p class="note">Jadual menunjukkan data penduduk tiga buah negeri (data rekaan untuk latihan).</p>`,items:[
  S('3(a)','Negeri manakah paling padat penduduknya (antara P dan Q)?',['p','negeri p']),
  S('3(b)','Hitung kepadatan penduduk Negeri R. (Tulis nombor sahaja dalam orang/km²)',['200','200 orang/km2','200 orang/km²','200 orang per km2','200 orang sekm2'],2,'600 000 ÷ 3 000 = <b>200 orang/km²</b>.'),
  OB('3(c)','Jelaskan dua faktor yang menyebabkan sesuatu kawasan padat penduduk.',4,'Banyak peluang pekerjaan (1) di kilang dan pejabat (1); kemudahan asas yang lengkap (1) seperti hospital dan sekolah (1). Terima tanah pamah yang subur dengan huraian.'),
  OB('3(d)','Nyatakan tiga faktor yang menyebabkan sesuatu kawasan jarang penduduk.',3,'Kawasan bergunung-ganang; hutan tebal; kurang jalan perhubungan; kurang peluang pekerjaan. Terima mana-mana tiga.')]}
],[
 ['Peredaran Bumi',[['Nyatakan empat musim di kawasan beriklim sederhana.',4,'Musim bunga; musim panas; musim luruh; musim sejuk.'],['Jelaskan tiga kesan peredaran bumi.',6,'Kejadian musim (1) di kawasan beriklim sederhana (1); perbezaan panjang siang dan malam (1) mengikut musim (1); perubahan kedudukan Matahari tengah hari (1) sepanjang tahun (1).']]],
 ['Bentuk Muka Bumi di Asia Tenggara',[['Nyatakan empat bentuk muka bumi utama di Asia Tenggara.',4,'Banjaran gunung; tanah tinggi/dataran tinggi; tanah pamah dan lembah sungai; delta; gunung berapi; kepulauan. Terima mana-mana empat.'],['Jelaskan tiga kepentingan gunung berapi kepada penduduk.',6,'Tanah gunung berapi subur (1) sesuai untuk pertanian (1); tarikan pelancong (1) yang menjana pendapatan penduduk (1); sumber tenaga geoterma (1) untuk menjana elektrik (1).']]],
 ['Penduduk dan Petempatan di Asia Tenggara',[['Namakan empat negara ASEAN berserta ibu negaranya.',4,'Contoh: Thailand – Bangkok; Indonesia – Jakarta; Vietnam – Hanoi; Filipina – Manila; Brunei – Bandar Seri Begawan; Singapura – Singapura; Kemboja – Phnom Penh; Laos – Vientiane; Myanmar – Naypyidaw. 1m setiap pasangan betul.'],['Jelaskan tiga faktor penduduk tertumpu di lembah dan delta sungai di Asia Tenggara.',6,'Tanah lanar yang subur (1) sesuai untuk penanaman padi (1); bekalan air yang mencukupi (1) untuk pengairan dan kegunaan harian (1); kawasan rata (1) yang memudahkan pembinaan petempatan dan jalan (1).']]],
 ['Pencemaran Sumber Air',[['Nyatakan empat punca pencemaran sumber air.',4,'Sisa kilang; sisa domestik; racun serangga dan baja kimia; tumpahan minyak; sisa ternakan; kumbahan. Terima mana-mana empat.'],['Huraikan tiga langkah untuk memelihara kebersihan sumber air.',6,'Menguatkuasakan undang-undang (1) dengan mendenda kilang yang mencemar (1); mengadakan kempen kesedaran (1) supaya orang ramai tidak membuang sampah ke sungai (1); merawat sisa sebelum dilepaskan (1) di loji rawatan (1).']]]
]);
