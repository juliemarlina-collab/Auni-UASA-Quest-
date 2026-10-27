/* ================= RAIKAN: keputusan UASA sebenar ================= */
const RSUB=CONFIG.resultSubjects;
const RSUB_OLD=[['BM','Bahasa Melayu'],['BI','English'],['SEJ','Sejarah'],['GEO','Geografi'],['MT','Matematik'],['SN','Sains'],['PJK','PJK'],['PI','Pendidikan Islam'],['ASK','Asas Sains Komputer'],['PSV','Pendidikan Seni Visual']];
const RDOC='results/uasa2026';
const RS={db:null,canEdit:false,mode:'local',data:null,loaded:false,unsub:null};
function tier(m){return m>=80?['Cemerlang','sun','🏆']:m>=65?['Kepujian','sky','🌟']:m>=50?['Baik','leaf','👍']:m>=40?['Lulus','cream','✅']:['Perlu usaha','tomato','💪']}
function titleFor(a){return a>=80?'Bintang Cemerlang':a>=65?'Pejuang Hebat':a>=50?'Pahlawan Gigih':'Pejuang Tidak Kenal Putus Asa'}
function localRes(){return LS.get(KEY+'results',null)}
async function initResults(){
 try{
  const c=window.claude;const db=c&&c.use?await c.use('db'):null;
  if(!db){RS.mode='local';RS.data=localRes();RS.canEdit=true;RS.loaded=true;afterResults();return}
  RS.db=db;RS.mode='db';
  const user=await c.use('user');RS.canEdit=user?await user.canEdit():false;
  RS.unsub=db.doc(RDOC).onSnapshot(s=>{RS.data=s.exists?s.data():null;RS.loaded=true;afterResults()},()=>{RS.loaded=true;afterResults()});
 }catch(e){RS.mode='local';RS.data=localRes();RS.canEdit=true;RS.loaded=true;afterResults()}
}
function afterResults(){
 const d=RS.data;const n=d&&d.marks?Object.values(d.marks).filter(v=>v&&v.m!=null&&v.m!=='').length:0;
 if(n>=5&&!ST.celebrated){ST.celebrated=true;save();setTimeout(()=>{addXP(100,'· keputusan UASA tiba! 🎉');award('raikan');boom()},800)}
 if((location.hash||'').slice(1)==='raikan')vRaikan();
}
function practicePct(k){const ps=(LEARN[k]&&LEARN[k].papers)||[];const v=ps.map(p=>ST.best[p+'-0']).filter(Boolean);return v.length?Math.round(v.reduce((s,x)=>s+x.pct,0)/v.length):null}
function vRaikan(){
 const d=RS.data||{};const marks=d.marks||{};
 const filled=RSUB.filter(([k])=>marks[k]&&marks[k].m!==''&&marks[k].m!=null).map(([k,n])=>[k,n,+marks[k].m,marks[k].g||'']);
 const avg=filled.length?Math.round(filled.reduce((s,x)=>s+x[2],0)/filled.length*10)/10:null;
 const top=filled.slice().sort((a,b)=>b[2]-a[2])[0];
 const nCem=filled.filter(x=>x[2]>=80).length;
 const bars=filled.length?(()=>{const W=560,rowH=34,lab=150,H=filled.length*rowH+30;let s='';[0,20,40,60,80,100].forEach(v=>{const x=lab+v/100*(W-lab-50);s+=`<line x1="${x}" y1="10" x2="${x}" y2="${H-14}" stroke="#17171C" stroke-opacity=".12"/><text x="${x}" y="${H-2}" font-size="11" text-anchor="middle" fill="#4D4D57">${v}</text>`});
  filled.forEach(([k,n,m],i)=>{const y=14+i*rowH,w=Math.max(2,m/100*(W-lab-50));const t=tier(m);const col={sun:'#FFD43B',sky:'#7EC4FF',leaf:'#7BDC6B',cream:'#F6EFD9',tomato:'#FF6B4A'}[t[1]];const pp=practicePct(k);
   s+=`<text x="${lab-8}" y="${y+19}" font-size="13" font-weight="700" text-anchor="end" fill="#17171C">${n}</text><rect x="${lab}" y="${y+2}" width="${w}" height="24" rx="6" fill="${col}" stroke="#17171C" stroke-width="2"><animate attributeName="width" from="0" to="${w}" dur=".8s" fill="freeze"/></rect><text x="${lab+w+8}" y="${y+19}" font-size="13" font-weight="800" fill="#17171C">${m}%</text>`;
   if(pp!=null){const px=lab+pp/100*(W-lab-50);s+=`<line x1="${px}" y1="${y-1}" x2="${px}" y2="${y+29}" stroke="#B98CFF" stroke-width="3" stroke-dasharray="3 3"/>`}});
  return `<div class="mapwrap" style="max-width:640px"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Carta markah UASA">${s}</svg></div><p class="tiny">Garisan ungu putus-putus = purata markah terbaik latihan dalam hub.</p>`})():'';
 page('raikan',`
 <div class="wrap">
  <div class="cele">
   <div class="cele-txt"><div class="wegot"><span>JOM</span><span>RAIKAN!</span></div><p class="cele-sub">Keputusan UASA ${CONFIG.year} · ${FULL} · ${CONFIG.form}</p><button class="btn big" id="boomBtn">🎉 Raikan!</button></div>
   <div class="intro-photo" style="max-width:360px"><img src="${PHOTO_WIDE}" alt="${STU} dan ${PRT}"><span class="bname">${PRT} bangga! 💜</span></div>
  </div>
  ${filled.length?`
  <div class="mini big3" style="margin-top:22px"><div><b>${avg}%</b><span>Purata</span></div><div><b>${nCem}</b><span>Subjek ≥ 80%</span></div><div><b>${filled.length}/${RSUB.length}</b><span>Subjek diisi</span></div></div>
  <div class="cert card"><div class="cert-in"><div class="eyebrow">Sijil Penghargaan</div><h2>${titleFor(avg)}</h2><p>dianugerahkan kepada</p><h3>${FULL}</h3><p>atas usaha gigih dalam Ujian Akhir Sesi Akademik ${CONFIG.year}${top?`, dengan pencapaian terbaik dalam <b>${top[1]}</b> (${top[2]}%)`:''}.</p>${d.msg?`<blockquote>“${esc(d.msg)}”</blockquote>`:''}<div class="cert-sig">— ${PRT} 💜</div></div><div class="seal" aria-hidden="true">🏅</div></div>
  <div class="sechead" style="margin-top:26px"><span class="label">MARKAH SEBENAR</span></div>
  ${bars}
  <div class="rgrid">${filled.map(([k,n,m,g])=>{const t=tier(m);return `<div class="rcard c-${t[1]}"><span class="re">${t[2]}</span><b>${n}</b><span class="rm">${m}%${g?` · Gred ${esc(g)}`:''}</span><span class="rt">${t[0]}</span></div>`}).join('')}</div>
  <p class="fineprint">Tahap (Cemerlang / Kepujian / Baik / Lulus) ialah panduan hub berdasarkan peratus. Gred rasmi ikut sekolah.</p>`
  :`<div class="card remind" style="margin-top:22px"><h3 style="font-family:var(--f-display)">Menunggu keputusan… ⏳</h3><p>${RS.canEdit?''+PRT+', masukkan markah UASA yang diberi guru di bawah. '+STU+' akan nampak keputusan dan sijil penghargaan di sini.':''+PRT+' akan masukkan markah UASA sebaik sahaja guru memulangkan kertas. Teruskan berusaha!'}</p></div>`}
  ${RS.canEdit?`<details class="card note" style="margin-top:24px" ${filled.length?'':'open'}><summary><span class="nn">✏️</span>Mod ${PRT}: masukkan markah dari guru</summary>
   <form id="resForm" class="resform">${RSUB.map(([k,n])=>{const v=marks[k]||{};return `<div class="rrow"><label for="m_${k}">${n}</label><input id="m_${k}" type="number" min="0" max="100" inputmode="numeric" placeholder="%" value="${v.m!=null?v.m:''}"><input id="g_${k}" type="text" maxlength="3" placeholder="Gred" value="${esc(v.g||'')}" aria-label="Gred ${n}"></div>`}).join('')}
    <label class="sl" style="margin-top:10px"><span>Pesanan ${PRT} untuk sijil</span><textarea id="r_msg" maxlength="200" rows="3" placeholder="Contoh: Tahniah sayang, ${PRT} bangga dengan usaha kamu!">${esc(d.msg||'')}</textarea></label>
    ${CONFIG.parentPin&&RS.mode!=='db'?`<label class="sl" style="margin-top:10px"><span>PIN ${PRT}</span><input id="r_pin" type="password" inputmode="numeric" autocomplete="off"></label>`:''}
    <div class="row2" style="margin-top:12px"><button class="btn" type="submit" id="resSave">💾 Simpan & Raikan</button><span class="tiny" id="resNote">${RS.mode==='db'?'Disimpan dalam talian — '+STU+' akan nampak di perantinya.':'Disimpan dalam peranti ini sahaja.'}</span></div>
   </form></details>`:''}
 </div>`);
 $('#boomBtn').onclick=()=>{boom();setTimeout(boom,400)};
 const f=$('#resForm');if(f)f.onsubmit=async e=>{e.preventDefault();if(CONFIG.parentPin&&RS.mode!=='db'&&$('#r_pin').value!==CONFIG.parentPin){$('#resNote').textContent='PIN tidak betul.';return}const marks={};
  for(const [k] of RSUB){const raw=$('#m_'+k).value.trim();if(raw===''){continue}let m=Math.round(Math.max(0,Math.min(100,+raw))*10)/10;if(isNaN(m))continue;marks[k]={m,g:$('#g_'+k).value.trim().toUpperCase()}}
  const doc={marks,msg:$('#r_msg').value.trim(),updatedAt:Date.now()};
  const btn=$('#resSave');btn.disabled=true;btn.textContent='Menyimpan…';
  try{if(RS.mode==='db'){await RS.db.doc(RDOC).set(doc)}else{LS.set(KEY+'results',doc);RS.data=doc}
   toast('✅ Keputusan disimpan!');boom();setTimeout(boom,500);if(RS.mode!=='db')afterResults()}
  catch(err){btn.disabled=false;btn.textContent='💾 Simpan & Raikan';$('#resNote').textContent='Tidak dapat disimpan: '+(err&&err.code==='invalid_argument'?'hanya '+PRT+' boleh mengemas kini.':'cuba lagi sebentar.')}};
}
