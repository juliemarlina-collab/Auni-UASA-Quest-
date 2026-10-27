/* ================= UASA QUEST · app utama =================
   Semua maklumat murid, sekolah dan jadual ada dalam js/config.js
   ============================================================ */
const PRT=CONFIG.parentTitle, STU=CONFIG.shortName, FULL=CONFIG.studentName, KEY=CONFIG.storageKey;
function avatarSVG(w,h){const ini=FULL.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="#7EC4FF"/><circle cx="${w*.82}" cy="${h*.2}" r="${h*.35}" fill="#FFD43B" stroke="#17171C" stroke-width="6"/><circle cx="${w*.12}" cy="${h*.9}" r="${h*.28}" fill="#B98CFF" stroke="#17171C" stroke-width="6"/><text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" font-family="Arial Black,Impact,sans-serif" font-size="${h*.42}" fill="#FFFCF2" stroke="#17171C" stroke-width="8" paint-order="stroke">${ini}</text><text x="64%" y="86%" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="${h*.075}" fill="#17171C">${STU} · UASA ${CONFIG.year}</text></svg>`;
 return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg)}
const PHOTO=CONFIG.photo||avatarSVG(560,676);
const PHOTO_WIDE=CONFIG.photoWide||CONFIG.photo||avatarSVG(640,444);
document.title=STU+' UASA Quest '+CONFIG.year;
/* ===== storage ===== */
const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const ST=Object.assign({xp:0,best:{},fin:{},badges:[],days:[],thanked:false,tip:0},LS.get(KEY+'state',{}));
const ANS=LS.get(KEY+'ans',{});   // ANS['bm1-0'][key]=value
const SUB=LS.get(KEY+'sub',{});   // SUB['bm1-0']={auto:{},manual:{},done:bool}
const save=()=>{LS.set(KEY+'state',ST);LS.set(KEY+'ans',ANS);LS.set(KEY+'sub',SUB)};

/* ===== streak ===== */
(function(){const d=new Date();const t=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();if(!ST.days.includes(t)){ST.days.push(t);ST.days=ST.days.slice(-60);save()}})();
function streak(){const set=new Set(ST.days);let n=0;const d=new Date();for(;;){const t=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();if(set.has(t)){n++;d.setDate(d.getDate()-1)}else break}return Math.max(n,1)}

/* ===== levels & badges ===== */
const PER=300;
const RANKS=['Rookie','Explorer','Pejuang','Pahlawan','Jaguh','Bintang','Legenda'];
const lvl=()=>Math.floor(ST.xp/PER)+1;
const rank=()=>RANKS[Math.min(lvl()-1,RANKS.length-1)];
const BADGES=[
 {id:'first',em:'🚀',n:'Langkah Pertama',d:'Siapkan mana-mana kertas'},
 {id:'bm',em:'🇲🇾',n:'Hero Bahasa',d:'Siapkan Kertas 1 BM Sampel 1 & 2'},
 {id:'en',em:'🗽',n:'English Ace',d:'Finish Paper 1 of both English samples'},
 {id:'writer',em:'✍️',n:'Penulis Muda',d:'Hantar penulisan cukup patah perkataan'},
 {id:'star',em:'⭐',n:'Bintang A',d:'Dapat 80% atau lebih dalam satu kertas'},
 {id:'streak3',em:'🔥',n:'3 Hari Berturut',d:'Belajar 3 hari berturut-turut'},
 {id:'lvl3',em:'🏆',n:'Naik Level 3',d:'Kumpul 600 XP'},
 {id:'sej',em:'🏛️',n:'Pakar Sejarah',d:'Siapkan ketiga-tiga set Sejarah'},
 {id:'geo',em:'🧭',n:'Jurupeta Muda',d:'Siapkan kedua-dua kertas Geografi'},
 {id:'cards',em:'🃏',n:'Kad Master',d:'Terbalikkan 40 kad imbas'},
 {id:'focus',em:'⏱️',n:'Fokus Juara',d:'Siapkan 3 sesi pemasa fokus'},
 {id:'chal',em:'⚡',n:'Raja Cabaran',d:'Sahut cabaran semua 6 subjek'},
 {id:'mt',em:'➗',n:'Wira Matematik',d:'Siapkan kedua-dua kertas Matematik'},
 {id:'sn',em:'🔬',n:'Saintis Muda',d:'Siapkan kedua-dua kertas Sains'},
 {id:'sim',em:'🎮',n:'Saintis Simulasi',d:'Buka 5 simulasi Matematik'},
 {id:'raikan',em:'🎉',n:'Hari Keputusan',d:'Keputusan UASA sebenar sudah tiba'},
 {id:'mama',em:'💜',n:'Anak '+PRT,d:'Ucap terima kasih kepada '+PRT},
 {id:'all',em:'👑',n:'Juara UASA',d:'Sahkan markah semua kertas dalam hub'}
];
const SUBJ={BM:'Bahasa Melayu',EN:'English',SEJ:'Sejarah',GEO:'Geografi',MT:'Matematik',SN:'Sains',PJK:'PJK',PI:'Pendidikan Islam',ASK:'Asas Sains Komputer'};
const TOTALK=()=>Object.values(PAPERS).reduce((s,p)=>s+p.kertas.length,0);
function award(id){if(!ST.badges.includes(id)){ST.badges.push(id);const b=BADGES.find(x=>x.id===id);toast(`${b.em} Lencana baharu: ${b.n}!`);boom();save()}}
function checkBadges(){
 const f=ST.fin,K=k=>!!f[k];
 if(Object.keys(f).length)award('first');
 if(K('bm1-0')&&K('bm2-0'))award('bm');
 if(K('en1-0')&&K('en2-0'))award('en');
 if(Object.values(ST.best).some(v=>v.pct>=80))award('star');
 if(K('sej1-0')&&K('sej2-0')&&K('sej3-0'))award('sej');
 if(K('geo1-0')&&K('geo2-0'))award('geo');
 if(K('mt1-0')&&K('mt2-0'))award('mt');
 if(K('sn1-0')&&K('sn2-0'))award('sn');
 if(streak()>=3)award('streak3');
 if(lvl()>=3)award('lvl3');
 if(ST.thanked)award('mama');
 if(Object.keys(PAPERS).every(p=>PAPERS[p].kertas.every((_,i)=>K(p+'-'+i))))award('all');
}
function addXP(n,msg){if(n<=0)return;const before=lvl();ST.xp+=n;save();hdr();toast(`+${n} XP ${msg||''}`);if(lvl()>before)setTimeout(()=>{toast(`🎉 Naik ke Level ${lvl()} · ${rank()}!`);boom()},1200)}

/* ===== header ===== */
function hdr(){const into=ST.xp%PER;document.getElementById('hdrLvl').textContent='LV '+lvl();document.getElementById('hdrBar').style.width=(into/PER*100)+'%';document.getElementById('hdrXp').textContent=ST.xp+' XP';document.getElementById('hdrStreak').textContent='🔥 '+streak()+' hari'}

/* ===== helpers ===== */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s||'').toLowerCase().replace(/[“”"'’‘.!,?;:()]/g,'').replace(/\s+/g,' ').trim();
const words=s=>String(s||'').trim().split(/\s+/).filter(Boolean).length;
let toastT;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2600)}
const T={ms:{submit:'Hantar & Semak',retry:'Cuba Lagi',confirm:'Sahkan Markah',answered:'dijawab',start:'Mula',pause:'Henti',model:'Skema / Contoh Jawapan',markIt:'Beri markah (pelajar / '+PRT+')',correct:'Betul!',wrong:'Belum tepat. Jawapan:',score:'Markah kamu',pending:'Masih ada jawapan subjektif untuk disemak. Baca skema, beri markah, kemudian tekan Sahkan Markah.',done:'Markah disahkan',choose:'Pilih tajuk:',words:'patah perkataan',time:'Masa tamat! Siapkan jawapan dan hantar.',back:'← Kembali'},
 en:{submit:'Submit & Check',retry:'Try Again',confirm:'Confirm Marks',answered:'answered',start:'Start',pause:'Pause',model:'Answer key / Sample answer',markIt:'Give marks (student / '+PRT+')',correct:'Correct!',wrong:'Not quite. Answer:',score:'Your score',pending:'Some written answers still need marking. Read the answer key, give marks, then press Confirm Marks.',done:'Marks confirmed',choose:'Choose a topic:',words:'words',time:'Time is up! Finish your answers and submit.',back:'← Back'}};

window.addEventListener('hashchange',route);

/* ===== HOME ===== */
const TIPS=[
 'Dalam ringkasan, isi penting biasanya ada pada ayat pertama setiap perenggan. Abaikan perenggan yang tiada kaitan dengan tajuk!',
 '<b>Para, semua, banyak, pelbagai</b> sudah bermaksud ramai. Jangan gandakan kata nama selepasnya: <i>para murid</i>, bukan <i>para murid-murid</i>.',
 '<b>Dari</b> untuk tempat dan masa. <b>Daripada</b> untuk orang, asal kejadian dan perbandingan.',
 'English Part 2: look for time words first. <b>Last Saturday</b> means every verb should be in the past tense.',
 'Paper 2 Part 1: answer <b>every</b> question in the email. Missing one question means losing Content marks.',
 'Form 1 essay = <b>70 – 90 words</b>. Count your words before you hand in!',
 'Baca soalan dahulu, kemudian baru baca petikan. Kamu akan tahu maklumat apa yang perlu dicari.',
 'Kertas 1 BM: 90 minit untuk 60 markah, kira-kira <b>1.5 minit untuk setiap markah</b>. Jangan terlalu lama pada satu soalan.',
 'Soalan KBAT minta <b>pendapat kamu</b>. Beri idea yang munasabah dan huraikan sedikit, bukan salin petikan.',
 'Part 3 notes: copy the <b>exact words</b> from the text, no more than three words. Part 5: read the sentences before and after each gap.',
 'Sejarah: soalan 4 atau 8 markah biasanya perlukan <b>isi + huraian</b>. Satu isi = 1m, huraian/contoh = 1m lagi.',
 'Sejarah Bahagian C: pilih soalan yang kamu paling yakin dalam 2 minit pertama, kemudian fokus sahaja pada soalan itu.',
 'Geografi: arah mata angin ada 8 arah utama. Ingat pusingan jam: <b>U → TL → T → TG → S → BD → B → BL</b>.',
 'Peta lakar: untuk cari arah X <b>dari</b> Y, letak kompas di Y, kemudian lihat ke mana X berada.',
 'Kepadatan penduduk = jumlah penduduk ÷ keluasan. Jangan terbalikkan!'
];
/* ================= TIMETABLE (daripada js/config.js) ================= */
const HARI=['Ahad','Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu'];
const KEYMAP=[[/melayu|\bbm\b/i,'BM'],[/inggeris|english|\bbi\b/i,'BI'],[/sejarah|\bsej\b/i,'SEJ'],[/geografi|\bgeo\b/i,'GEO'],[/matematik|\bmm\b|\bmt\b/i,'MT'],[/sains komputer|\bask\b/i,'ASK'],[/sains|\bsn\b/i,'SN'],[/jasmani|pjpk|\bpjk\b/i,'PJK'],[/islam|pi\/pm|\bpi\b/i,'PI']];
function subjKey(s){for(const [re,k] of KEYMAP)if(re.test(s))return (typeof LEARN!=='undefined'&&LEARN[k])?k:'';return ''}
const hm=t=>String(t).replace(':','').padStart(4,'0');
const EXAMS=(CONFIG.exams||[]).slice().sort((x,y)=>x.date.localeCompare(y.date)).map(x=>{const [Y,Mo,D]=x.date.split('-');const dt=new Date(x.date+'T12:00:00'+CONFIG.tz);
 return {id:x.date,date:x.date,day:HARI[dt.getUTCDay()],d:`${D}.${Mo}`,rows:(x.papers||[]).map(p=>[hm(p[0]),hm(p[1]),p[2],p[3]||subjKey(p[2])]),ulangan:x.ulangan||''}});
const myExams=()=>EXAMS;
const examDays=()=>EXAMS.filter(e=>e.rows.length);
const tStr=t=>{let h=+t.slice(0,2),m=t.slice(2);const h12=h>12?h-12:h;return `${h12}.${m}`};
const at=(e,t)=>new Date(`${e.date}T${t.slice(0,2)}:${t.slice(2)}:00${CONFIG.tz}`).getTime();
const nextExam=()=>examDays().find(e=>at(e,e.rows[e.rows.length-1][1])>Date.now());
const nextRow=e=>e.rows.find(r=>at(e,r[1])>Date.now())||e.rows[e.rows.length-1];
function cdText(e){const r=nextRow(e),now=Date.now(),s=at(e,r[0]),en=at(e,r[1]);if(now>=s&&now<en)return r[2]+' sedang berlangsung 💪';if(now>=en)return 'Selesai ✓';const ms=s-now,d=Math.floor(ms/864e5),h=Math.floor(ms%864e5/36e5),m=Math.floor(ms%36e5/6e4);return d?`${d} hari ${h} jam ${m} minit`:h?`${h} jam ${m} minit`:`${m} minit lagi`}
function pcdText(s,en){const now=Date.now();if(now>=en)return '✓ Selesai';if(now>=s)return '🟢 Sedang berlangsung';const ms=s-now,d=Math.floor(ms/864e5),h=Math.floor(ms%864e5/36e5),m=Math.floor(ms%36e5/6e4);return `⏳ ${d?d+' hari ':''}${h} jam ${m} minit`}
function pcd(e,r){const s=at(e,r[0]),en=at(e,r[1]),t=pcdText(s,en);return `<span class="pcd ${t[0]==='✓'?'done':t.startsWith('🟢')?'live':''}" data-s="${s}" data-e="${en}">${t}</span>`}
function tickCD(nx){document.querySelectorAll('.pcd').forEach(el=>{const t=pcdText(+el.dataset.s,+el.dataset.e);el.textContent=t;el.classList.toggle('done',t[0]==='✓');el.classList.toggle('live',t.startsWith('🟢'))});const c=$('#cdText');if(c&&nx)c.textContent=cdText(nx)}
const ULK={BM:'BM',BI:'BI',SEJ:'SEJ',SN:'SN',GEO:'GEO',MM:'MT',MT:'MT','PI/PM':'PI',PI:'PI',PJPK:'PJK',PJK:'PJK',ASK:'ASK'};
function ulgChips(s){return s.split(',').map(x=>x.trim()).filter(Boolean).map(c=>{const k=ULK[c.toUpperCase()];return k&&LEARN[k]?`<a class="chipu" href="#s-${k}">${c}</a>`:`<span class="chipu">${c}</span>`}).join('')}
function gcal(e){const r0=e.rows[0],r1=e.rows[e.rows.length-1];const ds=e.date.replace(/-/g,'');
 return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent('UASA '+STU+': '+e.rows.map(r=>r[2]).join(', '))+`&dates=${ds}T${r0[0]}00/${ds}T${r1[1]}00&ctz=Asia/Kuala_Lumpur&details=`+encodeURIComponent(e.rows.map(r=>`${tStr(r[0])}–${tStr(r[1])} ${r[2]}`).join('\n')+'\n'+CONFIG.school)}
const SUBJ_OF={BM:'BM',BI:'BI',SEJ:'SEJ',GEO:'GEO',MT:'MT',SN:'SN'};
const PSUB={BM:'BM',EN:'BI',SEJ:'SEJ',GEO:'GEO',MT:'MT',SN:'SN',PJK:'PJK',PI:'PI',ASK:'ASK'}; // paper.subj -> LEARN key

/* ================= SHELL / NAV ================= */
let cdTimer=null;
function nav(active){
 const items=[['utama','🏠','Utama'],['jadual','📅','Jadual'],['subjek','📚','Subjek'],['fokus','⏱️','Fokus'],['laporan','📊','Laporan'],['lencana','🏅','Lencana'],['raikan','🎉','Raikan']];
 return `<nav class="tabbar" aria-label="Menu utama"><div class="navhead" aria-hidden="true">MENU</div>${items.map(([h,i,l])=>`<a href="#${h}" class="${active===h?'on':''}" ${active===h?'aria-current="page"':''}><span aria-hidden="true">${i}</span>${l}</a>`).join('')}</nav>`;
}
function page(active,inner){document.body.classList.toggle('hasnav',!!active);$('#app').innerHTML=`<div class="pg">${inner}</div>${active?nav(active):''}`;clearInterval(cdTimer)}
function head(t,sub,emoji){return `<div class="wrap phead"><h1 class="ptl">${t}${emoji?` <span aria-hidden="true">${emoji}</span>`:''}</h1>${sub?`<p>${sub}</p>`:''}</div>`}

/* ================= INTRO ================= */
function vIntro(){
 document.body.classList.remove('hasnav');
 $('#app').innerHTML=`<div class="intro">
  <div class="wrap intro-in">
   <div class="keys">${CONFIG.keycaps.slice(0,6).toUpperCase().split('').map(c=>`<div class="key" aria-hidden="true">${c}</div>`).join('')}<div class="key enter" aria-hidden="true">⏎</div></div>
   <h1 class="title-big">UASA <em>QUEST</em><br>2026</h1>
   <div class="intro-photo"><img src="${PHOTO_WIDE}" alt="${STU} dan ${PRT}"><span class="bname">Team ${STU} 💜</span></div>
   <div class="quest-steps">
    <div class="qs c-sun"><b>1</b><span>Semak jadual & countdown</span></div>
    <div class="qs c-sky"><b>2</b><span>Baca nota & kad imbas</span></div>
    <div class="qs c-leaf"><b>3</b><span>Sahut cabaran, jawab kertas</span></div>
    <div class="qs c-grape"><b>4</b><span>Kumpul XP & lencana</span></div>
   </div>
   <a class="btn big" href="#utama" id="goBtn">MULA PENGEMBARAAN ▶</a>
   <a class="intro-help" href="#panduan" id="helpIntro">❓ Cara guna app ini</a>
  </div></div>`;
 $('#goBtn').onclick=()=>{ST.intro=true;save()};$('#helpIntro').onclick=()=>{ST.intro=true;save()};
}

/* ================= UTAMA ================= */
const CHECK=['Ulang kaji nota & kad imbas','Sahut cabaran subjek','Buat satu kertas latihan','Sediakan alat tulis (pen, pensel, pemadam, pembaris)','Tidur awal & sarapan pagi esok'];
function vUtama(){
 const into=ST.xp%PER,nx=nextExam();ST.chk=ST.chk||{};
 const subs=nx?[...new Set(nx.rows.map(r=>r[3]).filter(Boolean))]:[];
 const ck=nx?(ST.chk[nx.id]||[]):[];
 page('utama',`
 <div class="wrap">
  <div class="ugrid"><div class="ucol1">
  <div class="card hero2">
   <div class="banner"><img src="${PHOTO_WIDE}" alt="${STU} dan ${PRT} bergambar bersama"><span class="bname">Team ${STU} 💜</span></div>
   <div class="hello"><div><div class="eyebrow">Selamat datang, ${CONFIG.heroWord}!</div><h2>${FULL}</h2><div class="rank">Level ${lvl()} · ${rank()} · 🔥 ${streak()} hari</div></div><div class="xpbig"><b>${ST.xp}</b><span>XP</span></div></div>
   <div class="meter"><i id="homeMeter"></i></div><div class="tiny">${PER-into} XP lagi ke Level ${lvl()+1}</div>
  </div>

  </div><div class="ucol2">
  <div class="sechead ush"><span class="label">PERINGATAN</span></div>
  ${nx?`<div class="card remind">
   <div class="rtop"><div><div class="eyebrow">Ujian seterusnya · ${nx.day} ${nx.d}</div><div class="cdbig" id="cdText">${cdText(nx)}</div></div><a class="btn ghost" href="#jadual">Jadual ▶</a></div>
   <ul class="rlist">${nx.rows.map(r=>`<li><span class="tm">${tStr(r[0])}–${tStr(r[1])}</span><span>${r[2]} ${pcd(nx,r)}</span></li>`).join('')}</ul>
   ${subs.length?`<div class="eyebrow" style="margin-top:14px">Ulang kaji sekarang</div><div class="chips">${subs.map(s=>`<a class="chipl c-${LEARN[s].color}" href="#s-${s}">${LEARN[s].icon} ${LEARN[s].name}</a>`).join('')}</div>`:''}
   <div class="eyebrow" style="margin-top:14px">Senarai semak sebelum ujian</div>
   <div class="checks">${CHECK.map((c,i)=>`<label class="chk"><input type="checkbox" id="ck${i}" data-ck="${i}" ${ck.includes(i)?'checked':''}><span>${c}</span></label>`).join('')}</div>
  </div>`:`<div class="card remind"><h3>UASA selesai! Tahniah 🎉</h3></div>`}
  </div></div>

  <div class="sechead" style="margin-top:26px"><span class="label">MENU PANTAS</span></div>
  <div class="tiles">
   <a class="tile c-sun" href="#jadual"><span>📅</span><b>Jadual</b><small>Countdown & kalendar</small></a>
   <a class="tile c-sky" href="#subjek"><span>📚</span><b>Subjek</b><small>Nota · kad · cabaran · ujian</small></a>
   <a class="tile c-leaf" href="#fokus"><span>⏱️</span><b>Fokus</b><small>Pemasa belajar +15 XP</small></a>
   <a class="tile c-teal" href="#panduan"><span>❓</span><b>Panduan</b><small>Cara guna app</small></a>
   <a class="tile c-sky" href="#laporan"><span>📊</span><b>Laporan</b><small>Kemajuan untuk ${PRT}</small></a>
   <a class="tile c-grape" href="#lencana"><span>🏅</span><b>Lencana</b><small>${ST.badges.length}/${BADGES.length} dibuka</small></a>
   <a class="tile c-tomato" href="#raikan"><span>🎉</span><b>Raikan</b><small>Selepas UASA: markah sebenar</small></a>
  </div>

  ${installHTML()}
  <div class="dyk" style="margin-top:26px"><div class="dyk-in">
   <div class="dyk-title">TAHUKAH<br>KAMU<span class="q">?</span></div>
   <div class="bubble"><p id="tipText" class="tipfade">${TIPS[ST.tip%TIPS.length]}</p><div class="tipnav"><small id="tipNo">Tip ${ST.tip%TIPS.length+1}/${TIPS.length}</small><button class="btn ghost" id="tipBtn">Tip seterusnya →</button></div></div>
  </div></div>
 </div>`);
 requestAnimationFrame(()=>{const m=$('#homeMeter');if(m)m.style.width=(into/PER*100)+'%'});
 $('#tipBtn').onclick=()=>{ST.tip=(ST.tip+1)%TIPS.length;save();const p=$('#tipText');p.classList.remove('tipfade');void p.offsetWidth;p.classList.add('tipfade');p.innerHTML=TIPS[ST.tip];$('#tipNo').textContent=`Tip ${ST.tip+1}/${TIPS.length}`};
 document.querySelectorAll('[data-ck]').forEach(c=>c.onchange=()=>{const a=new Set(ST.chk[nx.id]||[]);c.checked?a.add(+c.dataset.ck):a.delete(+c.dataset.ck);ST.chk[nx.id]=[...a];save();if(a.size===CHECK.length){addXP(10,'· senarai semak lengkap!');}});
 cdTimer=setInterval(()=>tickCD(nx),15000);
}

/* ================= JADUAL ================= */
function vJadual(){
 const nx=nextExam();const nr=nx?nextRow(nx):null;
 page('jadual',`${head('Jadual UASA',CONFIG.school+' · '+CONFIG.form,'📅')}
 <div class="wrap">
  ${EXAMS.length?`<div class="card cd"><div><div class="eyebrow">Ujian seterusnya${nr?' · '+nr[2]:''}</div><div class="cdbig" id="cdText">${nx?cdText(nx):'Semua ujian selesai 🎉'}</div><div class="cdsub">${nx?`${nx.day} ${nx.d} · ${tStr(nr[0])}–${tStr(nr[1])}`:''}</div></div></div>
  <div class="sched">${EXAMS.map(e=>{const end=e.rows.length?at(e,e.rows[e.rows.length-1][1]):at(e,'1400');const past=end<Date.now();return `<div class="day ${past?'past':''} ${nx&&nx.id===e.id?'next':''}"><div class="dh"><b>${e.day}</b><span>${e.d}</span></div><ul>${e.rows.map(r=>`<li class="prow"><span class="tm">${tStr(r[0])}–${tStr(r[1])}</span><span><b>${r[2]}</b>${r[3]?` <a href="#s-${r[3]}" class="go">ulang kaji ▶</a>`:''}<br>${pcd(e,r)}</span></li>`).join('')}${e.ulangan?`<li class="ulg"><span class="tm">Ulangan</span><span>${ulgChips(e.ulangan)}</span></li>`:''}</ul>${e.rows.length?`<a class="calbtn" href="${gcal(e)}" target="_blank" rel="noopener">➕ Tambah ke Google Calendar</a>`:''}</div>`}).join('')}</div>`
  :`<div class="card remind"><h3>Jadual belum dimasukkan</h3><p>Isi tarikh ujian dalam <b>js/config.js</b>.</p></div>`}
  ${CONFIG.timetableNote?`<p class="fineprint">${CONFIG.timetableNote}</p>`:''}
 </div>`);
 cdTimer=setInterval(()=>tickCD(nx),15000);
}

/* ================= SUBJEK ================= */
function subjExam(k){const e=EXAMS.find(e=>e.rows.some(r=>r[3]===k));return e?`${e.day} ${e.d}`:'tiada tarikh'}
function vSubjek(){
 page('subjek',`${head('Subjek','Pilih subjek: nota ringkas, kad imbas, cabaran & kertas ujian.','📚')}
 <div class="wrap"><div class="sgrid">${Object.entries(LEARN).map(([k,s])=>{const n=s.papers.reduce((a,p)=>a+(ST.fin[p+'-0']?1:0),0);const done=(ST.chalDone||[]).includes(k);return `<a class="card stile" href="#s-${k}"><div class="stop c-${s.color}"><span class="sico" aria-hidden="true">${s.icon}</span><span class="sdate">📅 ${subjExam(k)}</span></div><div class="sbot"><h3>${s.name}</h3><div class="smeta"><span>📖 ${s.notes.length} nota</span><span>🃏 ${s.cards.length} kad</span>${s.papers.length?`<span>📝 ${n}/${s.papers.length} kertas</span>`:''}${done?'<span>⚡ cabaran ✓</span>':''}</div></div></a>`}).join('')}</div></div>`);
}
function vSubj(k,tab){
 const s=LEARN[k];if(!s)return vSubjek();
 tab=tab||ST['tab_'+k]||'nota';ST['tab_'+k]=tab;save();
 const tabs=[['nota','📖 Nota'],['kad','🃏 Kad Imbas'],['cabaran','⚡ Cabaran']].concat(s.papers.length?[['ujian','📝 Ujian']]:[]).concat(Object.values(SIMS).some(s=>(s.sub||'MT')===k)?[['sim','🎮 Simulasi']]:[]);
 page('subjek',`<div class="wrap phead"><a class="btn ghost sm" href="#subjek">← Subjek</a><h1 class="ptl">${s.icon} ${s.name}</h1><p>UASA: ${subjExam(k)}</p>
  <div class="tabs" role="tablist">${tabs.map(([t,l])=>`<button class="tab" role="tab" aria-selected="${t===tab}" data-t="${t}">${l}</button>`).join('')}</div></div>
  <div class="wrap" id="tabBody"></div>`);
 document.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>vSubj(k,b.dataset.t));
 const B=$('#tabBody');
 if(tab==='nota'){B.innerHTML=`<div class="notes">${s.notes.map(([h,p],i)=>`<details class="card note" ${i===0?'open':''}><summary><span class="nn">${i+1}</span>${h}</summary><ul>${p.map(x=>`<li>${x}</li>`).join('')}</ul></details>`).join('')}</div>`;markNote(k,0);B.querySelectorAll('details.note').forEach((d,i)=>d.addEventListener('toggle',()=>{if(d.open)markNote(k,i)}))}
 if(tab==='kad')cardsView(k,B);
 if(tab==='cabaran')chalView(k,B);
 if(tab==='sim'){B.innerHTML=`<p class="simp" style="max-width:60ch">Main dengan slider untuk faham konsep. Simulasi yang sama juga muncul dalam skema jawapan selepas kertas dihantar.</p><div class="simgrid">${Object.entries(SIMS).filter(([id,s])=>(s.sub||'MT')===k).map(([id,s])=>`<button class="card simtile" data-sim="${id}"><span>${s.e}</span><b>${s.t}</b></button>`).join('')}</div>`;B.querySelectorAll('[data-sim]').forEach(b=>b.onclick=()=>openSim(b.dataset.sim))}
 if(tab==='ujian'){B.innerHTML=`<div class="quests">${s.papers.map(pid=>{const p=PAPERS[pid];const done=p.kertas.map((x,i)=>!!ST.fin[pid+'-'+i]);const den=p.kertas.reduce((a,x,i)=>a+(ST.best[pid+'-'+i]?x.mk:0),0);const b=den?Math.round(p.kertas.reduce((a,x,i)=>a+(ST.best[pid+'-'+i]?ST.best[pid+'-'+i].marks:0),0)/den*100):null;
  return `<article class="card quest"><div class="top c-${p.color}"><span class="tag2">${pid==='sej3'?'BAHARU':SUBJ[p.subj]}</span><h3>${p.short}</h3></div><div class="bot"><div class="kchips">${p.kertas.map((x,i)=>`<span class="kchip ${done[i]?'done':''}">${done[i]?'✓ ':''}${x.k.split(' (')[0]} · ${x.mk}m · ${x.time} min</span>`).join('')}</div><div class="qmeta"><span class="best">${b===null?'Belum dicuba':'Terbaik: '+b+'%'}</span><a class="btn" href="#${pid}">${done.every(Boolean)?'Ulang':'Mula'} ▶</a></div></div></article>`}).join('')}</div>`}
}

/* flashcards */
function cardsView(k,B){
 const s=LEARN[k];let i=0,flip=false;
 const draw=()=>{const c=s.cards[i];B.innerHTML=`<div class="fc-wrap"><div class="fc-count">Kad ${i+1} / ${s.cards.length}</div>
  <button class="flash ${flip?'flip':''} c-${s.color}" id="fc" aria-label="Terbalikkan kad"><div class="fc-in"><div class="fc-f"><small>SOALAN</small><b>${c[0]}</b><em>Ketik untuk lihat jawapan</em></div><div class="fc-b"><small>JAWAPAN</small><b>${c[1]}</b></div></div></button>
  <div class="fc-nav"><button class="btn ghost" id="prv">← Sebelum</button><button class="btn" id="nxt">Seterusnya →</button></div></div>`;
  $('#fc').onclick=()=>{flip=!flip;$('#fc').classList.toggle('flip',flip);if(flip){ST.flips=(ST.flips||0)+1;ST.flipsBy=ST.flipsBy||{};ST.flipsBy[k]=(ST.flipsBy[k]||0)+1;logDay('kad',k);save();if(ST.flips>=40)award('cards')}};
  $('#prv').onclick=()=>{i=(i-1+s.cards.length)%s.cards.length;flip=false;draw()};
  $('#nxt').onclick=()=>{i=(i+1)%s.cards.length;flip=false;if(i===0)toast('🃏 Satu pusingan kad selesai!');draw()};};
 draw();
}
/* challenge */
function chalView(k,B){
 const s=LEARN[k];const today=new Date().toDateString();ST.chal=ST.chal||{};
 const pool=s.quiz.map(q=>q).sort(()=>Math.random()-.5).slice(0,5).map(([q,o,a])=>{const opts=o.map((t,j)=>({t,ok:j===a})).sort(()=>Math.random()-.5);return {q,opts}});
 let i=0,score=0;
 const start=()=>{B.innerHTML=`<div class="card chal-start"><div class="cbig">⚡</div><h3>Cabaran Pantas ${s.name}</h3><p>5 soalan rawak. Jawab cepat, dapat XP! ${ST.chal[k]===today?'<br><b>XP hari ini sudah dituntut.</b> Masih boleh berlatih.':'<br>+3 XP setiap jawapan betul.'}</p><button class="btn big" id="cgo">Mula Cabaran ▶</button></div>`;$('#cgo').onclick=q};
 const q=()=>{const it=pool[i];B.innerHTML=`<div class="card chal"><div class="cbar"><i style="width:${i/5*100}%"></i></div><div class="eyebrow">Soalan ${i+1} / 5 · Skor ${score}</div><h3 class="cq">${it.q}</h3><div class="opts" style="margin-left:0">${it.opts.map((o,j)=>`<button class="opt" data-j="${j}"><span class="L">${'ABC'[j]}</span><span>${o.t}</span></button>`).join('')}</div></div>`;
  B.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{const o=it.opts[+b.dataset.j];if(o.ok)score++;B.querySelectorAll('[data-j]').forEach((x,j)=>{x.disabled=true;if(it.opts[j].ok)x.classList.add('right');else if(x===b)x.classList.add('wrong')});
   setTimeout(()=>{i++;i<5?q():end()},o.ok?650:1300)})};
 const end=()=>{logAct('cabaran',k,score);const first=ST.chal[k]!==today;ST.chal[k]=today;ST.chalDone=[...new Set([...(ST.chalDone||[]),k])];save();if(first)addXP(score*3,'· cabaran '+s.name);if(score===5)boom();if(ST.chalDone.length>=Object.keys(LEARN).length)award('chal');
  B.innerHTML=`<div class="card chal-start"><div class="cbig">${score>=4?'🏆':score>=2?'👍':'💪'}</div><h3>Skor: ${score} / 5</h3><p>${score===5?'Sempurna! Hebat!':score>=3?'Bagus! Cuba lagi untuk 5/5.':'Baca nota dan kad imbas, kemudian cuba lagi.'}</p><div class="row2"><button class="btn" id="again">Cuba lagi ↺</button><button class="btn ghost" id="toNota">Baca nota</button></div></div>`;
  $('#again').onclick=()=>chalView(k,B);$('#toNota').onclick=()=>vSubj(k,'nota')};
 start();
}

/* ================= FOKUS ================= */
const F={dur:25*60,left:25*60,run:false,h:null};
function fmt(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
function fTick(){F.left--;if(F.left<=0){clearInterval(F.h);F.run=false;F.left=0;ST.focusN=(ST.focusN||0)+1;ST.focusMin=(ST.focusMin||0)+Math.round(F.dur/60);logAct('fokus','',Math.round(F.dur/60));save();addXP(15,'· sesi fokus selesai!');boom();if(ST.focusN>=3)award('focus');F.left=F.dur}const t=$('#fT');if(t){t.textContent=fmt(F.left);$('#fRing').style.setProperty('--p',(1-F.left/F.dur)*100);$('#fGo').textContent=F.run?'Jeda':'Mula'}}
function vFokus(){
 page('fokus',`${head('Pemasa Fokus','Belajar tanpa gangguan. Letak telefon jauh, fokus satu subjek.','⏱️')}
 <div class="wrap"><div class="card focus">
  <div class="fring" id="fRing" style="--p:${(1-F.left/F.dur)*100}"><div><b id="fT">${fmt(F.left)}</b><small>${F.dur/60} minit</small></div></div>
  <div class="presets">${[[25,'Pomodoro'],[15,'Sederhana'],[5,'Rehat']].map(([m,l])=>`<button class="tab" data-m="${m}" aria-selected="${F.dur===m*60}">${m} min · ${l}</button>`).join('')}</div>
  <div class="row2"><button class="btn big" id="fGo">${F.run?'Jeda':'Mula'}</button><button class="btn ghost" id="fRe">Set semula</button></div>
  <p class="tiny">Sesi selesai: <b>${ST.focusN||0}</b> · Setiap sesi lengkap = +15 XP. 3 sesi = lencana Fokus Juara.</p>
 </div>
 <div class="card ftips"><h3>Cara belajar ikut Pomodoro</h3><ol><li>Pilih satu subjek & satu topik.</li><li>Fokus 25 minit: baca nota, buat kad imbas.</li><li>Rehat 5 minit: minum air, regang badan.</li><li>Ulang 3–4 kali, kemudian buat cabaran subjek.</li></ol></div></div>`);
 $('#fGo').onclick=()=>{if(F.run){clearInterval(F.h);F.run=false}else{F.run=true;F.h=setInterval(fTick,1000);try{navigator.wakeLock&&navigator.wakeLock.request('screen').catch(()=>{})}catch(e){}}$('#fGo').textContent=F.run?'Jeda':'Mula'};
 $('#fRe').onclick=()=>{clearInterval(F.h);F.run=false;F.left=F.dur;vFokus()};
 document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{clearInterval(F.h);F.run=false;F.dur=F.left=+b.dataset.m*60;vFokus()});
}

/* ================= LENCANA (profil) ================= */
function vLencana(){
 const dn=Object.keys(ST.fin).length;const bs=Object.values(ST.best);const avg=bs.length?Math.round(bs.reduce((s,v)=>s+v.pct,0)/bs.length):0;
 page('lencana',`${head('Lencana & Pencapaian','Kumpul semua lencana. '+PRT+' sentiasa bangga!','🏅')}
 <div class="wrap">
  <div class="mini big3"><div><b>${ST.xp}</b><span>XP · Level ${lvl()}</span></div><div><b>${dn}/${TOTALK()}</b><span>Kertas siap</span></div><div><b>${avg}%</b><span>Purata terbaik</span></div></div>
  <div class="badges" style="margin-top:20px">${BADGES.map(b=>{const on=ST.badges.includes(b.id);return `<div class="badge ${on?'on':'lock'}"><span class="em" aria-hidden="true">${b.em}</span><b>${b.n}</b><span>${b.d}</span></div>`}).join('')}</div>
  <div class="love" style="margin-top:30px"><div class="love-in">
   <figure class="photo" style="margin:0"><div class="frame"><img src="${PHOTO}" alt="${PRT} dan ${STU}"><div class="cap">${PRT} ❤ ${STU}</div></div><div class="hearts">Team ${STU} 💜</div><div class="star" aria-hidden="true"></div></figure>
   <div><div class="wegot" aria-label="We got this"><span>WE GOT</span><span>THIS!</span></div>
    <div class="mnote"><p>${STU}, ${PRT} bangga dengan setiap usaha kamu, sama ada markah tinggi atau rendah. Yang penting kamu cuba, belajar daripada kesilapan, dan terus mara.</p><p>Setiap soalan yang kamu jawab di sini ialah satu langkah lebih dekat ke matlamat. ${PRT} sentiasa ada di belakang kamu.</p><p class="sig">— Love, ${PRT} 💜</p></div>
    <div style="margin-top:18px">${ST.thanked?'<span class="btn ghost" style="cursor:default">💜 Terima kasih sudah dihantar</span>':'<button class="btn" id="thankBtn" style="background:var(--grape)">Terima kasih, '+PRT+'! 💜 (+25 XP)</button>'}</div></div>
  </div></div>
  <details class="card note" style="margin-top:24px"><summary><span class="nn">i</span>Format UASA Tingkatan 1</summary><ul>
   <li><b>BM:</b> K1 (1j 30m, 60m): A objektif 15 · B 30 · C ringkasan 15. K2 (1j, 40m): karangan pendek 10 · karangan 30.</li>
   <li><b>English:</b> Paper 1 Reading (1j 30m, 40m): Part 1 short texts · Part 2 error correction · Part 3 information transfer · Part 4 True/False & short answer (non-linear) · Part 5 matching gapped text. Paper 2 Writing (1j, 40m): email ~80 words + essay 70–90 words.</li>
   <li><b>Sejarah:</b> 2 jam, 80m: A 20 objektif · B 4 × 10 · C pilih 1 daripada 2 (20).</li>
   <li><b>Geografi:</b> 2 jam, 80m: A 20 objektif · B 3 soalan struktur termasuk kemahiran geografi (40) · C jawab 2 daripada 4 (20).</li>
   <li><b>Matematik:</b> 2 jam, 100m: A 20 soalan (20) · B 5 soalan (20) · C 6 soalan subjektif (60).</li>
   <li><b>Sains:</b> 2 jam, 100m: A 20 soalan (20) · B 5 soalan (20) · C 6 soalan subjektif (60).</li>
   <li><b>Pendidikan Islam:</b> 2 jam, 100m: A 20 objektif · B al-Quran, Hadis & Jawi (20) · C Akidah (20) · D Fikah (20) · E Sirah, Tamadun & Akhlak (20).</li>
   <li><b>ASK:</b> 1j 30m, 70m: A 10 objektif (10) · B 10 soalan (40) · C 2 subjektif (20).</li>
   <li><b>PJK:</b> 1 jam (format ditetapkan sekolah). Sampel hub: A 30 objektif · B 10 Betul/Salah · C susun & padan (10) = 50m.</li>
  </ul></details>
  <button class="btn ghost" id="replayIntro" style="margin-top:18px">▶ Main semula intro</button>
 </div>`);
 const tb=$('#thankBtn');if(tb)tb.onclick=()=>{ST.thanked=true;save();addXP(25,'💜');checkBadges();vLencana()};
 $('#replayIntro').onclick=()=>{location.hash='mula'};
}

/* ================= ROUTER ================= */
function route(){
 const h=(location.hash||'').slice(1);
 if(!h){if(!ST.intro)return vIntro();return vUtama()}
 if(h==='mula')return vIntro();
 if(PAPERS[h]){document.body.classList.remove('hasnav');renderPaper(h,LS.get(KEY+'k_'+h,0));return scrollTo(0,0)}
 if(h.startsWith('s-')){vSubj(h.slice(2));return scrollTo(0,0)}
 ({utama:vUtama,jadual:vJadual,subjek:vSubjek,fokus:vFokus,raikan:vRaikan,laporan:vLaporan,lencana:vLencana,panduan:vPanduan}[h]||vUtama)();scrollTo(0,0);
}

/* ===== PAPER ===== */
let timer=null;
function itemsOf(K){const out=[];K.sec.forEach((s,si)=>s.g.forEach((g,gi)=>g.items.forEach((it,ii)=>out.push({it,key:si+'-'+gi+'-'+ii}))));return out}
function answered(it,v){if(v==null)return false;if(it.t==='m')return true;if(it.t==='x')return Array.isArray(v)&&v.some(x=>x&&x.trim());if(it.t==='w')return v.text&&words(v.text)>0;return String(v).trim()!==''}

function renderPaper(pid,ki){
 const P=PAPERS[pid];window.CURP=P;ki=Math.min(ki,P.kertas.length-1);LS.set(KEY+'k_'+pid,ki);
 const K=P.kertas[ki],id=pid+'-'+ki,L=T[P.lang];
 ANS[id]=ANS[id]||{};const A=ANS[id];const S=SUB[id];
 if(timer){clearInterval(timer.h);timer=null}
 const all=itemsOf(K);
 $('#app').innerHTML=`
 <div class="wrap ptop">
  <div class="crumbs"><a class="btn ghost" href="#s-${PSUB[P.subj]}">${L.back}</a><span class="pill">${SUBJ[P.subj]} · Tingkatan 1</span></div>
  <div class="ptitle"><h1>${P.short}</h1></div>
  <div class="tabs" role="tablist">${P.kertas.map((k,i)=>`<button class="tab" role="tab" aria-selected="${i===ki}" data-k="${i}">${ST.fin[pid+'-'+i]?'✓ ':''}${k.k}</button>`).join('')}</div>
  <div class="tools"><div class="timer" id="tmr"><span aria-hidden="true">⏱</span><b id="tmrT">${K.time}:00</b><button id="tmrB">${L.start}</button></div><span class="pill">${K.mk} markah · ${K.time} minit</span></div>
  <div id="resBox"></div>
  ${K.sec.map((s,si)=>`<section class="sect"><div class="sect-h"><span class="label">${s.h}</span><span class="mk">${s.mk}m</span></div><p class="ins">${s.ins}</p>
   ${s.g.map((g,gi)=>`<div class="card grpc">${g.stim?`<div class="stim">${g.stim}</div>`:''}${g.items.map((it,ii)=>itemHTML(it,si+'-'+gi+'-'+ii,A,S,L)).join('')}</div>`).join('')}
  </section>`).join('')}
 </div>
 <div class="dock"><div class="wrap"><div class="prog"><span id="progT"></span><div class="meter"><i id="progB"></i></div></div><button class="btn" id="subBtn">${S?L.retry:L.submit}</button></div></div>`;

 document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>renderPaper(pid,+b.dataset.k));
 const upd=()=>{let n=0,tot=0;K.sec.forEach((s,si)=>{const gs=s.g.map((g,gi)=>{let a=0;g.items.forEach((it,ii)=>{if(answered(it,A[si+'-'+gi+'-'+ii]))a++});return {a,t:g.items.length}});if(s.pick){gs.slice().sort((x,y)=>y.a-x.a).slice(0,s.pick).forEach(c=>{n+=c.a;tot+=c.t})}else gs.forEach(g=>{n+=g.a;tot+=g.t})});$('#progT').textContent=`${n}/${tot} ${L.answered}`;$('#progB').style.width=(n/tot*100)+'%'};upd();

 /* inputs */
 const app=$('#app');
 app.querySelectorAll('[data-opt]').forEach(b=>b.onclick=()=>{if(S)return;const [key,o]=b.dataset.opt.split('|');A[key]=+o;save();b.parentElement.querySelectorAll('.opt').forEach(x=>x.classList.toggle('sel',x===b));upd()});
 app.querySelectorAll('input[data-key]').forEach(inp=>inp.oninput=()=>{const key=inp.dataset.key;if(inp.dataset.idx!=null){A[key]=A[key]||[];A[key][+inp.dataset.idx]=inp.value}else A[key]=inp.value;save();upd()});
 app.querySelectorAll('textarea[data-key]').forEach(ta=>ta.oninput=()=>{const key=ta.dataset.key;A[key]=Object.assign(A[key]||{},{text:ta.value});save();wc(ta);upd()});
 app.querySelectorAll('[data-ch]').forEach(b=>b.onclick=()=>{if(S)return;const [key,c]=b.dataset.ch.split('|');A[key]=Object.assign(A[key]||{},{choice:+c});save();b.parentElement.querySelectorAll('.opt').forEach(x=>x.classList.toggle('sel',x===b))});
 app.querySelectorAll('textarea[data-key]').forEach(wc);
 app.querySelectorAll('textarea[data-okey]').forEach(ta=>ta.oninput=()=>{A[ta.dataset.okey]=ta.value;save();upd()});
 app.querySelectorAll('textarea[data-wkey]').forEach(ta=>ta.oninput=()=>{A[ta.dataset.wkey+'_w']=ta.value;save()});
 app.querySelectorAll('[data-scrtog]').forEach(b=>b.onclick=()=>{const box=app.querySelector(`[data-scr="${b.dataset.scrtog}"]`);box.hidden=!box.hidden;b.setAttribute('aria-expanded',!box.hidden);if(!box.hidden)initScratch(box)});
 app.querySelectorAll('.scr:not([hidden])').forEach(initScratch);
 app.querySelectorAll('[data-sim]').forEach(b=>b.onclick=()=>openSim(b.dataset.sim));
 app.querySelectorAll('[data-seg]').forEach(b=>b.onclick=()=>{const [key,row,v]=b.dataset.seg.split('|');const s=SUB[id];if(!s||s.done)return;
   const it=all.find(x=>x.key===key).it;if(it.t==='w'){s.manual[key]=s.manual[key]||it.rub.map(()=>0);s.manual[key][+row]=+v}else s.manual[key]=+v;save();
   b.parentElement.querySelectorAll('.seg').forEach(x=>x.classList.toggle('on',x===b));showResult(pid,ki)});

 /* timer */
 const tb=$('#tmrB');let left=K.time*60;
 tb.onclick=()=>{if(timer){clearInterval(timer.h);timer=null;tb.textContent=L.start;return}
  tb.textContent=L.pause;timer={h:setInterval(()=>{left--;const m=Math.floor(left/60),s=left%60;$('#tmrT').textContent=`${m}:${String(s).padStart(2,'0')}`;$('#tmr').classList.toggle('low',left<=300);if(left<=0){clearInterval(timer.h);timer=null;tb.textContent=L.start;toast('⏰ '+L.time)}},1000)}};

 $('#subBtn').onclick=()=>{
  if(SUB[id]){delete SUB[id];ANS[id]={};save();renderPaper(pid,ki);return}
  const auto={};all.forEach(({it,key})=>{if(['m','s','x'].includes(it.t))auto[key]=gradeAuto(it,A[key])});
  const manual={};all.forEach(({it,key})=>{if(it.t==='k'&&kOk(it,A[key]))manual[key]=it.m});
  SUB[id]={auto,manual,done:false};
  const hasManual=all.some(x=>['o','w','k'].includes(x.it.t));
  all.forEach(({it,key})=>{if(it.t==='w'&&A[key]&&A[key].text&&words(A[key].text)>=it.min)award('writer')});
  save();renderPaper(pid,ki);
  if(!hasManual)finalize(pid,ki);
  setTimeout(()=>{const r=$('#resBox');if(r)r.scrollIntoView({behavior:'smooth',block:'start'})},50);
 };
 if(S)showResult(pid,ki);
}

function normNum(s){let x=String(s==null?'':s).toLowerCase().replace(/[−–]/g,'-').replace(/[×*]/g,'x').replace(/\s+/g,'').replace(/[{}]/g,'').replace(/^rm/,'').replace(/^[a-z]=(?=[-\d])/,'').replace(/(cm²|cm2|m²|m2|km\/j|km|cm|liter|saat|minit|tahun|orang|darjah|°c|°|kg|beg|sisi|pagi|m)$/,'');if(x.includes(','))x=x.split(',').filter(Boolean).map(t=>t.replace(/(\.\d*?)0+$/,'$1').replace(/\.$/,'')).sort().join(',');return x.replace(/(\.\d*?)0+$/,'$1').replace(/\.$/,'')}
function kOk(it,v){return v!=null&&String(v).trim()!==''&&it.a.some(a=>normNum(a)===normNum(v))}
function gradeAuto(it,v){
 if(it.t==='m')return v===it.a?1:0;
 if(it.t==='s'){const f=it.num?normNum:norm;return v!=null&&String(v).trim()!==''&&it.a.some(a=>f(a)===f(v))?it.m:0}
 if(it.t==='x'){const used=new Set();let n=0;(v||[]).forEach(x=>{const nx=norm(x);if(!nx)return;const gi=it.a.findIndex((g,i)=>!used.has(i)&&g.some(a=>norm(a)===nx));if(gi>=0){used.add(gi);n++}});return n}
 return 0;
}

function itemHTML(it,key,A,S,L){
 const v=A[key];const sub=!!S;const LET='ABCDEFGHI';const MT=window.CURP&&(CURP.subj==='MT'||(CURP.subj==='SN'&&(it.t==='k'||it.num))||(CURP.subj==='ASK'&&(it.t==='o'||it.num)));const simB=it.sim&&sub?` <button class="simbtn" data-sim="${it.sim}">🎮 Lihat simulasi</button>`:'';
 const mk=it.m>1||it.t!=='m'?` <span class="m">[${it.m} markah]</span>`:'';
 let h=`<div class="item"><div class="qline"><span class="qn">${it.n}</span><div class="qt">${it.q}${it.t==='m'?'':mk}</div></div>`;
 if(it.t==='m'){
  const short=it.o.every(o=>o.length<18);
  h+=`<div class="opts ${short?'short':''}">${it.o.map((o,i)=>{let c='';if(sub){if(i===it.a)c='right';else if(i===v)c='wrong'}else if(i===v)c='sel';return `<button class="opt ${c}" data-opt="${key}|${i}" ${sub?'disabled':''}><span class="L">${LET[i]}</span><span>${o}</span></button>`}).join('')}</div>`;
  if(sub){const ok=v===it.a;h+=`<div class="fb ${ok?'good':'bad'}"><span class="h">${ok?'✅ '+L.correct:'❌ '+L.wrong+' '+LET[it.a]}</span>${it.ex?' '+it.ex:''}${simB}</div>`}
 }else if(it.t==='s'){
  const ok=sub&&S.auto[key]>0;
  h+=`<div class="inp"><input id="i-${key}" data-key="${key}" value="${esc(v||'')}" ${sub?'disabled':''} class="${sub?(ok?'right':'wrong'):''}" autocomplete="off" aria-label="Jawapan ${it.n}"></div>`;
  if(sub)h+=`<div class="fb ${ok?'good':'bad'}"><span class="h">${ok?'✅ '+L.correct:'❌ '+L.wrong}</span> <b>${esc(it.a[0])}</b>${it.ex?' · '+it.ex:''}${simB}</div>`;
 }else if(it.t==='x'){
  h+=`<div class="inp">${it.a.map((_,i)=>`<input id="i-${key}-${i}" data-key="${key}" data-idx="${i}" value="${esc((v||[])[i]||'')}" ${sub?'disabled':''} placeholder="${i+1}" autocomplete="off" aria-label="Jawapan ${it.n} bahagian ${i+1}">`).join('')}</div>`;
  if(sub){const got=S.auto[key];h+=`<div class="fb ${got===it.m?'good':'bad'}"><span class="h">${got}/${it.m} markah.</span> ${it.ex}</div>`}
 }else if(it.t==='o'){
  h+=it.m>=3?`<div class="inp"><textarea class="otxt" id="i-${key}" data-okey="${key}" ${sub?'disabled':''} aria-label="Jawapan ${it.n}" placeholder="Tulis isi + huraian…">${esc(v||'')}</textarea></div>`:`<div class="inp"><input id="i-${key}" data-key="${key}" value="${esc(v||'')}" ${sub?'disabled':''} style="width:100%" autocomplete="off" aria-label="Jawapan ${it.n}"></div>`;
  if(sub)h+=`<div class="fb"><span class="h">📘 ${L.model}:</span> ${it.model}${markRow(key,null,'',it.m,S)}</div>`;
 }else if(it.t==='k'){
  const ok=sub&&kOk(it,v);
  h+=`<div class="inp kans"><label for="i-${key}">Jawapan akhir:</label><input id="i-${key}" data-key="${key}" value="${esc(v||'')}" ${sub?'disabled':''} class="${sub?(ok?'right':'wrong'):''}" autocomplete="off" inputmode="text"></div>`;
  if(sub)h+=`<div class="fb ${ok?'good':'bad'}"><span class="h">${ok?'✅ Jawapan akhir betul! Markah penuh diberi (boleh ubah).':'❌ Jawapan akhir belum tepat. Semak langkah di bawah, beri markah kaedah.'}</span><div class="steps">${it.model}</div>${simB}${markRow(key,null,'Markah',it.m,S)}</div>`;
 }else if(it.t==='w'){
  const ch=v&&v.choice!=null?v.choice:null;
  if(it.choices)h+=`<div class="choices"><b>${L.choose}</b>${it.choices.map((c,i)=>`<button class="opt ${ch===i?'sel':''}" data-ch="${key}|${i}" ${sub?'disabled':''}><span class="L">${i+1}</span><span>${c}</span></button>`).join('')}</div>`;
  h+=`<div class="wbox"><textarea id="t-${key}" data-key="${key}" data-min="${it.min}" data-max="${it.max}" data-u="${L.words}" ${sub?'disabled':''} aria-label="Jawapan penulisan ${it.n}">${esc(v&&v.text||'')}</textarea><div class="wmeta"><span class="wc" data-wc="${key}">0 ${L.words}</span><span style="font-size:15px;font-weight:600">Sasaran: ${it.min} – ${it.max} ${L.words}</span></div></div>`;
  if(sub)h+=`<div class="fb" style="margin-left:0"><span class="h">📘 ${L.model}</span><div style="margin-top:6px">${it.model}</div><div style="margin-top:10px;font-weight:800">${L.markIt}</div>${it.rub.map((r,ri)=>markRow(key,ri,r[0],r[1],S)).join('')}</div>`;
 }
 if(MT)h+=scratchHTML(key,it.t==='k',A);
 return h+'</div>';
}
function markRow(key,row,label,max,S){
 const cur=row==null?S.manual[key]:(S.manual[key]||[])[row];
 const segs=[];for(let i=0;i<=max;i++)segs.push(`<button class="seg ${cur===i?'on':''}" data-seg="${key}|${row==null?0:row}|${i}" ${S.done?'disabled':''} aria-label="${i} markah">${i}</button>`);
 return `<div class="mark"><span class="lab">${label||'Markah'}</span><div class="segs">${segs.join('')}</div></div>`;
}
function wc(ta){const n=words(ta.value),min=+ta.dataset.min,max=+ta.dataset.max;const el=document.querySelector(`[data-wc="${ta.dataset.key}"]`);if(!el)return;el.textContent=`${n} ${ta.dataset.u}`;el.className='wc '+(n===0?'':n<min?'under':n>max?'over':'ok')}

function tally(pid,ki){
 const K=PAPERS[pid].kertas[ki],id=pid+'-'+ki,S=SUB[id];let auto=0,man=0,pending=0;
 K.sec.forEach((s,si)=>{const gs=s.g.map((g,gi)=>{let a=0,m=0,p=0,ans=0;g.items.forEach((it,ii)=>{const key=si+'-'+gi+'-'+ii;if(['m','s','x'].includes(it.t))a+=S.auto[key]||0;else{const v=S.manual[key];if(v==null)p++;else m+=Array.isArray(v)?v.reduce((x,y)=>x+y,0):v}if(answered(it,(ANS[id]||{})[key]))ans++});return {a,m,p,ans}});
  if(s.pick){gs.slice().sort((x,y)=>(y.a+y.m)-(x.a+x.m)||y.ans-x.ans).slice(0,s.pick).forEach(u=>{auto+=u.a;man+=u.m;pending+=u.p})}
  else gs.forEach(g=>{auto+=g.a;man+=g.m;pending+=g.p})});
 return {auto,man,pending,total:auto+man,mk:K.mk};
}
function showResult(pid,ki){
 const P=PAPERS[pid],L=T[P.lang],id=pid+'-'+ki,S=SUB[id],r=tally(pid,ki);const pct=Math.round(r.total/r.mk*100);
 const msg=pct>=80?'Hebat! Prestasi bintang ⭐':pct>=60?'Bagus! Sikit lagi ke A 💪':pct>=40?'Boleh! Baca skema dan cuba lagi 📘':'Jangan putus asa. Setiap cubaan buat kamu lebih kuat 💜';
 $('#resBox').innerHTML=`<div class="card result"><div class="ring" style="--p:${pct}"><div>${pct}%</div></div><div><h3>${L.score}: ${r.total}/${r.mk}</h3><p><b>${msg}</b></p><p style="font-size:16px">Auto: ${r.auto} · Subjektif: ${r.man}${r.pending?` · ${r.pending} belum diberi markah`:''}</p>${S.done?`<p>✅ ${L.done}</p>`:`<p style="font-size:16px">${r.pending?L.pending:''}</p><div class="row"><button class="btn dark" id="finBtn">${L.confirm}</button></div>`}</div></div>`;
 const fb=$('#finBtn');if(fb)fb.onclick=()=>finalize(pid,ki);
}
function finalize(pid,ki){
 const id=pid+'-'+ki,S=SUB[id];if(!S||S.done)return;const r=tally(pid,ki);S.done=true;
 const prev=ST.best[id];const first=!ST.fin[id];ST.fin[id]=true;
 const pct=Math.round(r.total/r.mk*100);logAct('kertas',pid,pct);
 if(!prev||r.total>prev.marks)ST.best[id]={marks:r.total,pct};
 const gain=(first?40:0)+Math.max(0,r.total-(prev?prev.marks:0))*3;
 save();addXP(gain,first?'· misi selesai!':'· rekod baharu!');boom();checkBadges();
 renderPaper(pid,ki);setTimeout(()=>{const b=$('#resBox');if(b)b.scrollIntoView({behavior:'smooth',block:'start'})},50);
}

/* ===== confetti ===== */
const cv=document.getElementById('fx'),cx=cv.getContext('2d');let parts=[],raf=null;
function sizeCv(){cv.width=innerWidth*devicePixelRatio;cv.height=innerHeight*devicePixelRatio}sizeCv();addEventListener('resize',sizeCv);
function boom(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const cols=['#FF6B4A','#FFD43B','#7EC4FF','#7BDC6B','#B98CFF','#17171C'];
 for(let i=0;i<140;i++)parts.push({x:cv.width/2,y:cv.height*.35,vx:(Math.random()-.5)*24*devicePixelRatio,vy:(Math.random()*-18-4)*devicePixelRatio,s:(6+Math.random()*8)*devicePixelRatio,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:cols[i%cols.length],l:120});
 if(!raf)tick()}
function tick(){cx.clearRect(0,0,cv.width,cv.height);parts=parts.filter(p=>p.l-->0&&p.y<cv.height+40);
 parts.forEach(p=>{p.vy+=.6*devicePixelRatio;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.fillRect(-p.s/2,-p.s/3,p.s,p.s*.66);cx.restore()});
 raf=parts.length?requestAnimationFrame(tick):(cx.clearRect(0,0,cv.width,cv.height),null)}

/* ===== boot ===== */
/* ================= LAPORAN KEMAJUAN (untuk ibu/bapa) ================= */
function logAct(t,k,x){ST.log=ST.log||[];ST.log.push({ts:Date.now(),t,k:k||'',x:x==null?'':x});if(ST.log.length>300)ST.log=ST.log.slice(-300);save()}
function logDay(t,k){const d=new Date().toDateString();ST.logDay=ST.logDay||{};const key=t+'|'+k+'|'+d;if(ST.logDay[key])return;ST.logDay[key]=1;logAct(t,k,'')}
function markNote(k,i){ST.notesRead=ST.notesRead||{};const a=new Set(ST.notesRead[k]||[]);if(a.has(i))return;a.add(i);ST.notesRead[k]=[...a];logAct('nota',k,i+1)}
function subjOfPaper(pid){const p=PAPERS[pid];return p?PSUB[p.subj]:''}
function relTime(ts){const s=(Date.now()-ts)/1000;if(s<60)return 'baru tadi';if(s<3600)return Math.floor(s/60)+' minit lalu';if(s<86400)return Math.floor(s/3600)+' jam lalu';const d=Math.floor(s/86400);return d===1?'semalam':d+' hari lalu'}
function fmtWhen(ts){const d=new Date(ts);return d.toLocaleDateString('ms-MY',{day:'numeric',month:'short'})+' · '+d.toLocaleTimeString('ms-MY',{hour:'2-digit',minute:'2-digit'})}
function subjStats(k){
 const s=LEARN[k];const nr=((ST.notesRead||{})[k]||[]).length,nt=s.notes.length;
 const fl=((ST.flipsBy||{})[k]||0);
 const ch=(ST.log||[]).filter(l=>l.t==='cabaran'&&l.k===k);const chBest=ch.length?Math.max(...ch.map(l=>+l.x||0)):((ST.chalDone||[]).includes(k)?null:-1);
 const ps=s.papers.map(p=>({pid:p,done:!!ST.fin[p+'-0'],best:ST.best[p+'-0']}));
 const pd=ps.filter(p=>p.done).length;const bests=ps.filter(p=>p.best).map(p=>p.best.pct);const avg=bests.length?Math.round(bests.reduce((a,b)=>a+b,0)/bests.length):null;
 const last=(ST.log||[]).filter(l=>l.k===k||subjOfPaper(l.k)===k).map(l=>l.ts).sort((a,b)=>b-a)[0]||null;
 // skor usaha 0-100: nota 25, kad 15, cabaran 20, kertas 40
 const eff=Math.round(25*Math.min(1,nr/nt)+15*Math.min(1,fl/s.cards.length)+20*(ch.length||chBest===null?1:0)+40*(ps.length?pd/ps.length:0));
 return {nr,nt,fl,nc:s.cards.length,ch:ch.length,chBest,pd,pt:ps.length,avg,last,eff};
}
function statusOf(st){if(st.eff===0)return ['Belum mula','tomato'];if(st.avg!=null&&st.avg<50)return ['Perlu ulang','sun'];if(st.eff>=75&&(st.avg==null||st.avg>=65))return ['Hebat','leaf'];return ['Sedang ulang kaji','sky']}
const ACT_LABEL={kertas:['📝','Siap kertas'],cabaran:['⚡','Cabaran'],nota:['📖','Baca nota'],kad:['🃏','Kad imbas'],fokus:['⏱️','Sesi fokus'],sim:['🎮','Simulasi']};
function actText(l){
 const a=ACT_LABEL[l.t]||['•',l.t];
 if(l.t==='kertas'){const p=PAPERS[l.k];return `${a[0]} ${a[1]} <b>${p?p.short:l.k}</b> · ${l.x}%`}
 if(l.t==='cabaran')return `${a[0]} ${a[1]} <b>${LEARN[l.k]?LEARN[l.k].name:l.k}</b> · ${l.x}/5`;
 if(l.t==='nota')return `${a[0]} ${a[1]} <b>${LEARN[l.k]?LEARN[l.k].name:l.k}</b> · bab ${l.x}`;
 if(l.t==='kad')return `${a[0]} ${a[1]} <b>${LEARN[l.k]?LEARN[l.k].name:l.k}</b>`;
 if(l.t==='fokus')return `${a[0]} ${a[1]} · ${l.x} minit`;
 if(l.t==='sim')return `${a[0]} ${a[1]} <b>${(SIMS[l.k]||{}).t||l.k}</b>`;
 return a[0]+' '+a[1];
}
function vLaporan(){
 const keys=Object.keys(LEARN);
 const ord=keys.map(k=>{const e=EXAMS.find(e=>e.rows.some(r=>r[3]===k));const r=e?e.rows.find(r=>r[3]===k):null;const ts=e?at(e,r[0]):Infinity,te=e?at(e,r[1]):Infinity;return {k,ts,te,e,past:te<Date.now()}}).sort((a,b)=>(a.past-b.past)||(a.ts-b.ts));
 const stats=Object.fromEntries(keys.map(k=>[k,subjStats(k)]));
 const totP=Object.values(PAPERS).reduce((s,p)=>s+p.kertas.length,0),doneP=Object.keys(ST.fin).length;
 const bs=Object.values(ST.best);const avg=bs.length?Math.round(bs.reduce((s,v)=>s+v.pct,0)/bs.length):0;
 const chN=(ST.log||[]).filter(l=>l.t==='cabaran').length;const flN=ST.flips||0;const fm=ST.focusMin||((ST.focusN||0)*25);
 const days=new Set(ST.days||[]);const strip=[...Array(14)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-13+i);const key=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();return `<div class="dd ${days.has(key)?'on':''}" title="${d.toLocaleDateString('ms-MY')}"><span>${['A','I','S','R','K','J','S'][d.getDay()]}</span></div>`}).join('');
 const now=Date.now();
 const upcoming=ord.filter(o=>o.ts>now&&o.ts!==Infinity);
 const up2=upcoming.map(o=>({...o,st:stats[o.k]}));const weak=up2.find(o=>o.st.eff<80)||up2.slice().sort((a,b)=>a.st.eff-b.st.eff)[0];
 const log=(ST.log||[]).slice().reverse().slice(0,20);
 page('laporan',`${head('Laporan Kemajuan','Semakan '+PRT+': apa yang '+STU+' sudah buat dalam app ini.','📊')}
 <div class="wrap">
  <div class="mini lap6">
   <div><b>${(ST.days||[]).length}</b><span>Hari belajar</span></div>
   <div><b>${doneP}/${totP}</b><span>Kertas siap</span></div>
   <div><b>${bs.length?avg+'%':'–'}</b><span>Purata kertas</span></div>
   <div><b>${chN}</b><span>Cabaran</span></div>
   <div><b>${flN}</b><span>Kad diimbas</span></div>
   <div><b>${fm}</b><span>Minit fokus</span></div>
  </div>
  <div class="card lapstrip"><div class="eyebrow">14 hari terakhir · 🔥 ${streak()} hari berturut-turut</div><div class="dstrip">${strip}</div></div>
  ${weak?`<div class="card lapnext"><span class="lnico">🎯</span><div><b>Fokus seterusnya: ${LEARN[weak.k].name}</b><span>UASA ${weak.e.day} ${weak.e.d} · usaha setakat ini ${weak.st.eff}%. ${weak.st.nr<weak.st.nt?`Baca nota (${weak.st.nr}/${weak.st.nt} bab)`:weak.st.pd<weak.st.pt?'Cuba kertas latihan':'Ulang cabaran'} dahulu.</span></div><a class="btn" href="#s-${weak.k}">Buka ▶</a></div>`:''}
  <div class="sechead" style="margin-top:22px"><span class="label">IKUT SUBJEK</span><p>Disusun ikut tarikh UASA. Bar = usaha keseluruhan (nota, kad imbas, cabaran, kertas).</p></div>
  <div class="lapgrid">${ord.map(({k,e,past})=>{const s=LEARN[k],st=stats[k],[lab,col]=past?['Ujian selesai','cream']:statusOf(st);const er=e?e.rows.find(r=>r[3]===k):null;
   return `<a class="card lapc ${past?'lpast':''}" href="#s-${k}"><div class="laph"><span class="lico">${s.icon}</span><div class="lnm"><b>${s.name}</b><small>${e?`UASA ${e.day} ${e.d}`:'Tiada dalam jadual'}${e&&er?' · '+pcdText(at(e,er[0]),at(e,er[1])):''}</small></div><span class="lpill c-${col}">${lab}</span></div>
    <div class="lbar"><i style="width:${st.eff}%"></i></div><div class="lpct">${st.eff}% usaha</div>
    <ul class="lrows">
     <li><span>📖 Nota</span><b>${st.nr}/${st.nt} bab</b></li>
     <li><span>🃏 Kad imbas</span><b>${st.fl} kali</b></li>
     <li><span>⚡ Cabaran</span><b>${st.ch?`${st.ch}× · terbaik ${st.chBest}/5`:st.chBest===null?'sudah dicuba':'belum'}</b></li>
     ${st.pt?`<li><span>📝 Kertas</span><b>${st.pd}/${st.pt}${st.avg!=null?` · ${st.avg}%`:''}</b></li>`:''}
     <li><span>🕒 Terakhir</span><b>${st.last?relTime(st.last):'–'}</b></li>
    </ul></a>`}).join('')}</div>
  <div class="sechead" style="margin-top:24px"><span class="label">AKTIVITI TERKINI</span></div>
  ${log.length?`<ol class="card lapfeed">${log.map(l=>`<li><span class="lft">${fmtWhen(l.ts)}</span><span>${actText(l)}</span></li>`).join('')}</ol>`
   :`<div class="card remind"><p>Belum ada aktiviti direkodkan. Aktiviti baharu (baca nota, kad imbas, cabaran, kertas, sesi fokus) akan muncul di sini secara automatik.</p></div>`}
  <p class="fineprint">Laporan ini dibaca daripada peranti ini sahaja. Buka app pada telefon/tablet yang ${STU} gunakan untuk melihat kemajuan terkini.</p>
 </div>`);
}

/* ================= PANDUAN: cara app ini berfungsi ================= */
function vPanduan(){
 const subjN=Object.keys(LEARN).length, paperN=Object.values(PAPERS).reduce((s,p)=>s+p.kertas.length,0);
 const PAGES=[
  ['utama','🏠','Utama','sun','Halaman pertama setiap kali app dibuka.',[
   `Kad ${STU}: XP, level dan 🔥 hari berturut-turut belajar.`,
   '<b>Peringatan</b>: ujian seterusnya dengan countdown, dan butang terus ke subjek ujian itu.',
   '<b>Senarai semak sebelum ujian</b>: tandakan semua untuk +10 XP.',
   '<b>Menu pantas</b> ke setiap halaman, dan tip “Tahukah Kamu?”.']],
  ['jadual','📅','Jadual','sky','Semua tarikh UASA mengikut jadual sekolah.',[
   'Setiap kertas ada countdown sendiri: <span class="pcd">⏳ 1 hari 3 jam</span> <span class="pcd live">🟢 Sedang berlangsung</span> <span class="pcd done">✓ Selesai</span>',
   'Sesi <b>Ulangan</b> ditunjuk di bawah hari berkenaan.',
   '<b>ulang kaji ▶</b> membuka subjek itu terus.',
   '<b>➕ Tambah ke Google Calendar</b> untuk peringatan di telefon.']],
  ['subjek','📚','Subjek','leaf',`${subjN} subjek. Setiap subjek ada tab berikut:`,[
   '<b>📖 Nota</b>: nota ringkas ikut bab. Ketik tajuk bab untuk buka.',
   '<b>🃏 Kad Imbas</b>: ketik kad untuk lihat jawapan, kemudian <b>Seterusnya</b>.',
   '<b>⚡ Cabaran</b>: 5 soalan rawak. XP diberi sekali sehari bagi setiap subjek.',
   `<b>📝 Ujian</b>: ${paperN} kertas latihan penuh ikut format UASA (2 bagi setiap subjek, 3 bagi Sejarah).`,
   '<b>🎮 Simulasi</b> (Matematik, Sains, ASK): main dengan slider untuk faham konsep.']],
  ['fokus','⏱️','Fokus','grape','Pemasa belajar tanpa gangguan.',[
   'Pilih 25, 15 atau 5 minit, kemudian tekan <b>Mula</b>.',
   'Setiap sesi lengkap = +15 XP. 3 sesi = lencana Fokus Juara.']],
  ['laporan','📊','Laporan','sky',`Untuk ${PRT}: semak apa yang ${STU} sudah buat.`,[
   'Hari belajar, kertas siap, purata markah, cabaran, kad imbas, minit fokus.',
   '<b>🎯 Fokus seterusnya</b>: cadangan subjek yang perlu diulang kaji dahulu.',
   'Kemajuan setiap subjek dan senarai aktiviti terkini (tarikh & masa).']],
  ['lencana','🏅','Lencana','sun','Koleksi lencana dan pencapaian.',[
   `${BADGES.length} lencana untuk dibuka, contohnya Langkah Pertama, Raja Cabaran, Juara UASA.`,
   `Pesanan daripada ${PRT} dan butang “Terima kasih, ${PRT}!” (+25 XP).`]],
  ['raikan','🎉','Raikan','tomato',`Halaman terakhir, selepas UASA tamat: keputusan sebenar daripada guru.`,[
   `${PRT} buka <b>✏️ Mod ${PRT}</b> dan masukkan markah setiap subjek.`,
   `${STU} dapat sijil penghargaan, carta markah dan +100 XP.`]]
 ];
 page('panduan',`${head('Panduan App','Cara '+STU+' UASA Quest berfungsi, halaman demi halaman.','❓')}
 <div class="wrap">
  <div class="card pgflow">
   <div class="eyebrow">Cara belajar dengan app ini</div>
   <ol class="flow">
    <li class="c-sun"><b>1</b><span>Semak <b>Jadual</b>: ujian mana paling dekat?</span></li>
    <li class="c-sky"><b>2</b><span>Buka <b>Subjek</b> itu: baca <b>Nota</b>, imbas <b>Kad</b>.</span></li>
    <li class="c-leaf"><b>3</b><span>Sahut <b>Cabaran</b> 5 soalan untuk uji ingatan.</span></li>
    <li class="c-grape"><b>4</b><span>Jawab <b>Kertas Ujian</b> penuh, semak skema.</span></li>
    <li class="c-tomato"><b>5</b><span>Ulang subjek yang markah rendah. Kumpul XP & lencana!</span></li>
   </ol>
  </div>

  <div class="sechead" style="margin-top:24px"><span class="label">HALAMAN DALAM APP</span><p>Ketik mana-mana kad untuk baca, atau <b>Buka</b> untuk pergi ke halaman itu.</p></div>
  <div class="pglist">${PAGES.map(([h,ic,nm,col,lead,pts],i)=>`<details class="card pgi" ${i===0?'open':''}><summary><span class="pgic c-${col}">${ic}</span><span class="pgnm"><b>${nm}</b><small>${lead}</small></span></summary><ul>${pts.map(p=>`<li>${p}</li>`).join('')}</ul><a class="btn sm" href="#${h}">Buka ${nm} ▶</a></details>`).join('')}</div>

  <div class="sechead" style="margin-top:24px"><span class="label">CARA JAWAB KERTAS</span></div>
  <ol class="card steps2">
   <li><b>Pilih kertas</b> dalam Subjek → 📝 Ujian, tekan <b>Mula ▶</b>.</li>
   <li>Tekan <b>Mula</b> pada pemasa jika mahu suasana peperiksaan sebenar.</li>
   <li>Jawab soalan. Untuk Matematik, Sains dan ASK guna <b>✏️ Ruang kiraan</b>: lukis dengan jari/stylus atau taip langkah kerja.</li>
   <li>Tekan <b>Hantar & Semak</b>. Soalan objektif ditanda automatik dengan penerangan.</li>
   <li>Soalan subjektif & karangan: baca <b>skema / contoh jawapan</b>, kemudian beri markah (sendiri atau bersama ${PRT}).</li>
   <li>Tekan <b>Sahkan Markah</b> untuk simpan markah dan dapat XP. <b>Cuba Lagi</b> untuk ulang.</li>
  </ol>

  <div class="sechead" style="margin-top:24px"><span class="label">XP & LEVEL</span><p>Setiap ${PER} XP = naik satu level: ${RANKS.join(' → ')}.</p></div>
  <div class="card xptab"><table class="dtab">
   <tr><th>Aktiviti</th><th>XP</th></tr>
   <tr><td>Siap kertas buat kali pertama</td><td>+40</td></tr>
   <tr><td>Setiap markah tambahan berbanding rekod lama</td><td>+3</td></tr>
   <tr><td>Cabaran: setiap jawapan betul (sekali sehari setiap subjek)</td><td>+3</td></tr>
   <tr><td>Sesi Fokus lengkap</td><td>+15</td></tr>
   <tr><td>Lengkapkan senarai semak sebelum ujian</td><td>+10</td></tr>
   <tr><td>“Terima kasih, ${PRT}!”</td><td>+25</td></tr>
   <tr><td>Keputusan UASA sebenar dimasukkan</td><td>+100</td></tr>
  </table></div>

  <div class="sechead" style="margin-top:24px"><span class="label">UNTUK ${PRT.toUpperCase()}</span></div>
  <div class="card parentbox"><ul>
   <li>📲 <b>Pasang di skrin utama</b>: Android (Chrome) → menu ⋮ → <i>Add to Home screen</i>. iPhone/iPad (Safari) → Kongsi ⬆️ → <i>Add to Home Screen</i>. Selepas dibuka sekali, app boleh digunakan <b>tanpa internet</b>.</li>
   <li>💾 <b>Kemajuan disimpan dalam peranti</b> yang ${STU} guna. Guna peranti dan pelayar yang sama setiap kali. Jangan padam “data laman” pelayar.</li>
   <li>📊 Semak <b>Laporan</b> pada peranti ${STU} untuk lihat apa yang sudah dibuat.</li>
   <li>🎉 Masukkan markah sebenar daripada guru di halaman <b>Raikan</b>.</li>
   <li>📄 Kertas latihan ialah <b>sampel</b> ikut format UASA Tingkatan 1 (KPM). Semak dengan guru subjek jika ada perbezaan.</li>
  </ul></div>

  <div class="sechead" style="margin-top:24px"><span class="label">SOALAN LAZIM</span></div>
  <div class="pglist faq">
   <details class="card pgi"><summary><span class="pgnm"><b>XP atau markah hilang?</b></span></summary><p>Biasanya kerana app dibuka pada peranti atau pelayar lain, atau mod inkognito. Kemajuan hanya ada pada peranti asal.</p></details>
   <details class="card pgi"><summary><span class="pgnm"><b>Boleh buat semula kertas yang sama?</b></span></summary><p>Boleh. Tekan <b>Cuba Lagi</b>. Markah terbaik disimpan, dan XP tambahan diberi jika markah lebih tinggi.</p></details>
   <details class="card pgi"><summary><span class="pgnm"><b>Kenapa cabaran tidak beri XP lagi?</b></span></summary><p>XP cabaran diberi sekali sehari bagi setiap subjek. Masih boleh berlatih tanpa had.</p></details>
   <details class="card pgi"><summary><span class="pgnm"><b>Bagaimana mahu tukar jadual atau nama?</b></span></summary><p>${PRT} atau penjaga app ubah fail <b>js/config.js</b> di GitHub.</p></details>
  </div>
  <div style="margin:22px 0 6px"><a class="btn" href="#utama">🏠 Kembali ke Utama</a> <a class="btn ghost" href="#mula">▶ Main semula intro</a></div>
 </div>`);
}

/* ===== pasang app (PWA) & mod luar talian ===== */
let deferredInstall=null;
const isStandalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
const isIOS=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const onHome=()=>['','#utama'].includes(location.hash);
window.addEventListener('beforeinstallprompt',ev=>{ev.preventDefault();deferredInstall=ev;if(onHome())vUtama()});
window.addEventListener('appinstalled',()=>{ST.installed=true;save();toast('📲 App dipasang!');if(onHome())vUtama()});
function installHTML(){
 if(isStandalone()||ST.installed||ST.hideInstall)return '';
 const how=deferredInstall?'Ketik <b>Pasang</b>. App terus ada di skrin utama dan boleh dibuka tanpa internet.'
  :isIOS()?'Dalam Safari: ketik butang <b>Kongsi</b> ⬆️, kemudian <b>Add to Home Screen</b>.'
  :'Dalam Chrome: ketik menu <b>⋮</b>, kemudian <b>Add to Home screen</b> / <b>Install app</b>.';
 return `<div class="card install"><img src="assets/icons/icon-192.png" alt=""><div class="it"><b>📲 Pasang ${STU} UASA Quest</b><span>${how}</span></div><div class="row2">${deferredInstall?'<button class="btn" data-install>Pasang</button>':''}<button class="btn ghost sm" data-install-x>Nanti</button></div></div>`}
document.addEventListener('click',async ev=>{
 if(ev.target.closest('[data-install]')&&deferredInstall){deferredInstall.prompt();const r=await deferredInstall.userChoice.catch(()=>null);deferredInstall=null;if(r&&r.outcome==='accepted'){ST.installed=true;save()}vUtama()}
 if(ev.target.closest('[data-install-x]')){ST.hideInstall=true;save();vUtama()}
});
if('serviceWorker' in navigator&&location.protocol==='https:')window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
{const k=document.querySelector('.logo .k');if(k)k.textContent=STU[0].toUpperCase()}
hdr();checkBadges();route();initResults();
