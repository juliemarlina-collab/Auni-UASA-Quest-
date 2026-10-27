/* ================= MATH SIMULATIONS ================= */
const SIMS={
 int:{t:'Garis Nombor Integer',e:'➖➕'},eq:{t:'Neraca Persamaan Linear',e:'⚖️'},pyth:{t:'Teorem Pythagoras',e:'📐'},
 poly:{t:'Sudut Poligon',e:'⬡'},area:{t:'Perimeter & Luas',e:'▭'},ang:{t:'Sudut pada Garis & Titik',e:'∠'},
 ratio:{t:'Model Bar Nisbah',e:'📊'},fg:{t:'Pemburu FSTB & GSTK',e:'🔍'},stats:{t:'Min, Median & Mod',e:'📈'},
 bin:{t:'Penukar Nombor Perduaan',e:'0️⃣',sub:'ASK'},html:{t:'Makmal HTML',e:'🌐',sub:'ASK'},
 dens:{t:'Terapung atau Tenggelam?',e:'🛟',sub:'SN'},mix:{t:'Penambahan Cahaya',e:'🌈',sub:'SN'},refl:{t:'Pantulan Cahaya',e:'🪞',sub:'SN'}
};
const C={ink:'#17171C',sun:'#FFD43B',tom:'#FF6B4A',sky:'#7EC4FF',leaf:'#7BDC6B',grape:'#B98CFF',cream:'#F6EFD9',paper:'#FFFCF2',blue:'#2F8FE0',teal:'#2BC3C9'};
const rng=(id,lab,min,max,val,step)=>`<label class="sl"><span>${lab} <b id="${id}v">${val}</b></span><input type="range" id="${id}" min="${min}" max="${max}" value="${val}" step="${step||1}"></label>`;
const sv=(w,h,b)=>`<svg viewBox="0 0 ${w} ${h}" class="simsvg">${b}</svg>`;
const tx=(x,y,s,fs,a,fill,w)=>`<text x="${x}" y="${y}" font-size="${fs||14}" text-anchor="${a||'middle'}" fill="${fill||C.ink}" font-weight="${w||700}">${s}</text>`;
const fmtN=n=>(Math.round(n*100)/100).toString().replace('-','−');

function openSim(id){
 const s=SIMS[id];if(!s)return;
 let m=document.getElementById('simModal');if(m)m.remove();
 m=document.createElement('div');m.id='simModal';m.className='simmodal';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');
 m.innerHTML=`<div class="simbox card"><div class="simhead"><h3>${s.e} ${s.t}</h3><button class="btn ghost sm" id="simX" aria-label="Tutup">✕ Tutup</button></div><div id="simBody"></div></div>`;
 document.body.appendChild(m);document.body.style.overflow='hidden';
 const close=()=>{m.remove();document.body.style.overflow=''};
 $('#simX').onclick=close;m.onclick=e=>{if(e.target===m)close()};
 document.addEventListener('keydown',function k(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',k)}});
 SIMF[id]($('#simBody'));
 ST.simN=(ST.simN||0)+1;if(typeof logDay==='function')logDay('sim',id);save();if(ST.simN>=5)award('sim');
}
function bind(root,ids,draw){ids.forEach(i=>{const el=root.querySelector('#'+i);if(el)el.oninput=el.onchange=()=>{const v=root.querySelector('#'+i+'v');if(v)v.textContent=el.value;draw()}});draw()}
const gv=(root,i)=>+root.querySelector('#'+i).value;

const SIMF={
 /* ---- integer number line ---- */
 int(R){R.innerHTML=`<p class="simp">Mula di <b>a</b>. Tambah nombor positif → gerak ke <b>kanan</b>. Tambah nombor negatif → gerak ke <b>kiri</b>. Tolak nombor negatif = tambah!</p>
  <div class="simctl">${rng('ia','a =',-10,10,-5)}<label class="sl"><span>Operasi</span><select id="iop"><option value="+">+ (tambah)</option><option value="-">− (tolak)</option></select></label>${rng('ib','b =',-10,10,7)}</div><div id="iout"></div>`;
  bind(R,['ia','iop','ib'],()=>{const a=gv(R,'ia'),b=gv(R,'ib'),op=R.querySelector('#iop').value;const mv=op==='+'?b:-b,r=a+mv;
   const X=v=>30+(v+20)*13;let s='';for(let v=-20;v<=20;v++){s+=`<line x1="${X(v)}" y1="110" x2="${X(v)}" y2="${v%5?118:124}" stroke="${C.ink}" stroke-width="${v%5?1:2}"/>`;if(v%5===0)s+=tx(X(v),142,fmtN(v),12)}
   s+=`<line x1="20" y1="110" x2="560" y2="110" stroke="${C.ink}" stroke-width="3"/>`;
   const mid=(X(a)+X(r))/2,hgt=Math.min(80,18+Math.abs(mv)*4);
   s+=`<path d="M${X(a)} 106 Q ${mid} ${106-hgt*1.6} ${X(r)} 106" fill="none" stroke="${mv>=0?C.leaf:C.tom}" stroke-width="5" stroke-dasharray="600" stroke-dashoffset="600"><animate attributeName="stroke-dashoffset" from="600" to="0" dur=".7s" fill="freeze"/></path>`;
   s+=`<circle cx="${X(a)}" cy="110" r="8" fill="${C.sky}" stroke="${C.ink}" stroke-width="2"/>${tx(X(a),96,'a',13)}<circle cx="${X(r)}" cy="110" r="9" fill="${C.sun}" stroke="${C.ink}" stroke-width="2"/>`;
   s+=tx(mid,Math.max(20,106-hgt*0.8-6),(mv>=0?'→ kanan ':'← kiri ')+Math.abs(mv),13,'middle',C.ink);
   R.querySelector('#iout').innerHTML=sv(580,160,s)+`<div class="simres">${fmtN(a)} ${op} (${fmtN(b)}) ${op==='-'?`= ${fmtN(a)} + (${fmtN(-b)}) `:''}= <b>${fmtN(r)}</b></div>`})},

 /* ---- balance equation ---- */
 eq(R){R.innerHTML=`<p class="simp">Persamaan ialah neraca yang <b>seimbang</b>. Apa sahaja yang dibuat pada sebelah kiri mesti dibuat pada sebelah kanan.</p>
  <div class="simctl">${rng('ea','Pekali x (a)',1,6,4)}${rng('eb','Pemalar (b)',-10,10,-7)}${rng('ex','Nilai x rahsia',1,9,5)}</div>
  <div class="row2" style="margin:8px 0"><button class="btn sm" id="es1">Langkah 1: buang b</button><button class="btn sm" id="es2">Langkah 2: bahagi dengan a</button><button class="btn ghost sm" id="es0">Semula</button></div><div id="eout"></div>`;
  let step=0;const draw=()=>{const a=gv(R,'ea'),b=gv(R,'eb'),x=gv(R,'ex'),c=a*x+b;
   const bs=b===0?'':(b>0?` + ${b}`:` − ${-b}`);
   const L=[`${a}x${bs}`,`${a}x`,'x'][step],Rr=[`${c}`,`${c}${b>0?' − '+b:b<0?' + '+(-b):''} = ${a*x}`,`${a*x} ÷ ${a} = ${x}`][step];
   const boxes=step===2?1:a;let lb='';for(let i=0;i<boxes;i++)lb+=`<rect x="${70+(i%3)*44}" y="${84-Math.floor(i/3)*40}" width="38" height="34" rx="6" fill="${C.grape}" stroke="${C.ink}" stroke-width="2"/>${tx(89+(i%3)*44,107-Math.floor(i/3)*40,'x',15)}`;
   if(step===0&&b!==0)lb+=`<rect x="205" y="84" width="58" height="34" rx="17" fill="${b>0?C.leaf:C.tom}" stroke="${C.ink}" stroke-width="2"/>${tx(234,107,(b>0?'+':'−')+Math.abs(b),14)}`;
   const rv=step===0?c:step===1?a*x:x;
   let s=`<polygon points="290,200 270,235 310,235" fill="${C.ink}"/><line x1="40" y1="130" x2="540" y2="130" stroke="${C.ink}" stroke-width="6"/><line x1="290" y1="130" x2="290" y2="200" stroke="${C.ink}" stroke-width="5"/>`+
    `<path d="M50 130 h230 l-20 14 h-190 z" fill="${C.sky}" stroke="${C.ink}" stroke-width="2"/><path d="M300 130 h230 l-20 14 h-190 z" fill="${C.sky}" stroke="${C.ink}" stroke-width="2"/>`+lb+
    `<rect x="365" y="78" width="110" height="44" rx="10" fill="${C.sun}" stroke="${C.ink}" stroke-width="2"/>${tx(420,107,fmtN(rv),20)}${tx(290,30,'⚖️ SEIMBANG',14,'middle',C.ink)}`;
   R.querySelector('#eout').innerHTML=sv(580,240,s)+`<div class="simres">${L} = ${Rr.split(' = ').pop()}${step===2?' ✅':''}</div><div class="simstep">${['Mula: '+a+'x'+bs+' = '+c,'Langkah 1: '+(b>0?'tolak '+b:b<0?'tambah '+(-b):'tiada pemalar')+' pada kedua-dua belah → '+a+'x = '+(a*x),'Langkah 2: bahagi kedua-dua belah dengan '+a+' → x = '+x][step]}</div>`};
  bind(R,['ea','eb','ex'],()=>{step=0;draw()});
  R.querySelector('#es1').onclick=()=>{step=Math.max(step,1);draw()};R.querySelector('#es2').onclick=()=>{step=2;draw()};R.querySelector('#es0').onclick=()=>{step=0;draw()}},

 /* ---- Pythagoras ---- */
 pyth(R){R.innerHTML=`<p class="simp">Luas segi empat pada hipotenus = jumlah luas dua segi empat pada sisi tegak. <b>c² = a² + b²</b></p><div class="simctl">${rng('pa','a (cm)',1,12,5)}${rng('pb','b (cm)',1,12,12)}</div><div id="pout"></div>`;
  bind(R,['pa','pb'],()=>{const a=gv(R,'pa'),b=gv(R,'pb'),c=Math.hypot(a,b);const k=Math.min(16,150/Math.max(a,b,1));
   const O=[200,250],A=[O[0],O[1]-a*k],B=[O[0]+b*k,O[1]];
   const sq=(p,q,flip,col)=>{const dx=q[0]-p[0],dy=q[1]-p[1];const nx=flip*dy,ny=-flip*dx;return `<polygon points="${p} ${q} ${q[0]+nx},${q[1]+ny} ${p[0]+nx},${p[1]+ny}" fill="${col}" fill-opacity=".65" stroke="${C.ink}" stroke-width="2"/>`};
   let s=sq(O,A,1,C.sky)+sq(B,O,1,C.leaf)+sq(A,B,1,C.sun)+`<polygon points="${O} ${A} ${B}" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/><rect x="${O[0]}" y="${O[1]-12}" width="12" height="12" fill="none" stroke="${C.ink}"/>`;
   s+=tx(O[0]-a*k/2,O[1]-a*k/2,'a²='+a*a,13)+tx(O[0]+b*k/2,O[1]+b*k/2+4,'b²='+b*b,13)+tx((A[0]+B[0])/2+a*k/2+8,(A[1]+B[1])/2-b*k/2+4,'c²='+(a*a+b*b),13);
   const triple=Number.isInteger(Math.round(c*1e6)/1e6);
   R.querySelector('#pout').innerHTML=sv(520,520,`<g transform="translate(40,60)">${s}</g>`)+`<div class="simres">c² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${a*a+b*b} → c = √${a*a+b*b} = <b>${fmtN(c)} cm</b>${triple?' <span class="pillok">Tripel Pythagoras!</span>':''}</div>`})},

 /* ---- polygon angles ---- */
 poly(R){R.innerHTML=`<p class="simp">Dari satu bucu, poligon n sisi boleh dibahagi kepada <b>(n − 2) segi tiga</b>. Setiap segi tiga = 180°.</p><div class="simctl">${rng('pn','Bilangan sisi n',3,12,6)}</div><div id="poout"></div>`;
  const names={3:'Segi tiga',4:'Sisi empat',5:'Pentagon',6:'Heksagon',7:'Heptagon',8:'Oktagon',9:'Nonagon',10:'Dekagon',11:'Hendekagon',12:'Dodekagon'};
  bind(R,['pn'],()=>{const n=gv(R,'pn'),cx=200,cy=190,r=150;const P=[...Array(n)].map((_,i)=>{const t=-Math.PI/2+i*2*Math.PI/n;return [cx+r*Math.cos(t),cy+r*Math.sin(t)]});
   const cols=[C.sun,C.sky,C.leaf,C.grape,C.tom,C.teal];let s='';
   for(let i=1;i<n-1;i++)s+=`<polygon points="${P[0]} ${P[i]} ${P[i+1]}" fill="${cols[(i-1)%6]}" fill-opacity=".75" stroke="${C.ink}" stroke-width="1.5"><animate attributeName="fill-opacity" from="0" to=".75" dur=".4s" begin="${(i-1)*0.12}s" fill="freeze"/></polygon>`;
   s+=`<polygon points="${P.join(' ')}" fill="none" stroke="${C.ink}" stroke-width="4"/>`;P.forEach(p=>s+=`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${C.ink}"/>`);
   const sum=(n-2)*180;R.querySelector('#poout').innerHTML=sv(400,370,s)+`<div class="simres"><b>${names[n]}</b>: ${n-2} segi tiga × 180° = <b>${sum}°</b><br>Poligon sekata: setiap sudut pedalaman = ${sum}° ÷ ${n} = <b>${fmtN(sum/n)}°</b> · sudut peluaran = 360° ÷ ${n} = <b>${fmtN(360/n)}°</b></div>`})},

 /* ---- area ---- */
 area(R){R.innerHTML=`<p class="simp">Kira petak untuk faham formula luas. Setiap petak = 1 cm².</p><div class="simctl"><label class="sl"><span>Bentuk</span><select id="ash"><option value="rect">Segi empat tepat</option><option value="tri">Segi tiga</option><option value="para">Segi empat selari</option><option value="trap">Trapezium</option></select></label>${rng('aw','Tapak / panjang',2,14,8)}${rng('ah','Tinggi / lebar',2,10,6)}${rng('at','Sisi atas (trapezium)',1,12,4)}</div><div id="aout"></div>`;
  bind(R,['ash','aw','ah','at'],()=>{const sh=R.querySelector('#ash').value,w=gv(R,'aw'),h=gv(R,'ah'),t=Math.min(gv(R,'at'),w);const u=26,ox=20,oy=20+(10-h)*u;
   let g='';for(let i=0;i<=16;i++)g+=`<line x1="${ox+i*u}" y1="20" x2="${ox+i*u}" y2="${20+10*u}" stroke="${C.ink}" stroke-opacity=".12"/>`;for(let j=0;j<=10;j++)g+=`<line x1="${ox}" y1="${20+j*u}" x2="${ox+16*u}" y2="${20+j*u}" stroke="${C.ink}" stroke-opacity=".12"/>`;
   const B=20+10*u;let pts,area,f,per='';const off=Math.min(3,16-w);
   if(sh==='rect'){pts=`${ox},${B} ${ox+w*u},${B} ${ox+w*u},${B-h*u} ${ox},${B-h*u}`;area=w*h;f=`L = panjang × lebar = ${w} × ${h}`;per=` · Perimeter = 2(${w} + ${h}) = <b>${2*(w+h)} cm</b>`}
   if(sh==='tri'){pts=`${ox},${B} ${ox+w*u},${B} ${ox+Math.round(w/2)*u},${B-h*u}`;area=w*h/2;f=`L = ½ × tapak × tinggi = ½ × ${w} × ${h}`}
   if(sh==='para'){pts=`${ox},${B} ${ox+w*u},${B} ${ox+(w+off)*u},${B-h*u} ${ox+off*u},${B-h*u}`;area=w*h;f=`L = tapak × tinggi = ${w} × ${h}`}
   if(sh==='trap'){const sx=Math.floor((w-t)/2);pts=`${ox},${B} ${ox+w*u},${B} ${ox+(sx+t)*u},${B-h*u} ${ox+sx*u},${B-h*u}`;area=(w+t)*h/2;f=`L = ½ × (a + b) × t = ½ × (${t} + ${w}) × ${h}`}
   const s=g+`<polygon points="${pts}" fill="${C.leaf}" fill-opacity=".6" stroke="${C.ink}" stroke-width="3"/>`+(sh!=='rect'?`<line x1="${ox+(sh==='para'?off:sh==='trap'?Math.floor((w-t)/2):Math.round(w/2))*u}" y1="${B}" x2="${ox+(sh==='para'?off:sh==='trap'?Math.floor((w-t)/2):Math.round(w/2))*u}" y2="${B-h*u}" stroke="${C.tom}" stroke-width="2.5" stroke-dasharray="6 5"/>`:'');
   R.querySelector('#aout').innerHTML=sv(460,290,s)+`<div class="simres">${f} = <b>${fmtN(area)} cm²</b>${per}</div>`})},

 /* ---- angles ---- */
 ang(R){R.innerHTML=`<p class="simp">Seret slider dan lihat hasil tambah sudut sentiasa tetap.</p><div class="simctl"><label class="sl"><span>Jenis</span><select id="am"><option value="180">Sudut pada garis lurus (180°)</option><option value="90">Sudut pelengkap (90°)</option><option value="360">Sudut pada satu titik (360°)</option></select></label>${rng('aa','Sudut pertama',5,170,55)}</div><div id="anout"></div>`;
  bind(R,['am','aa'],()=>{const T=+R.querySelector('#am').value;let a=Math.min(gv(R,'aa'),T-5);const b=T-a;const cx=230,cy=180,r=140;
   const pt=d=>[cx+r*Math.cos(-d*Math.PI/180),cy+r*Math.sin(-d*Math.PI/180)];const arc=(d0,d1,col,rr)=>{const s0=[cx+rr*Math.cos(-d0*Math.PI/180),cy+rr*Math.sin(-d0*Math.PI/180)],s1=[cx+rr*Math.cos(-d1*Math.PI/180),cy+rr*Math.sin(-d1*Math.PI/180)];return `<path d="M${cx} ${cy} L${s0} A${rr} ${rr} 0 ${d1-d0>180?1:0} 0 ${s1} Z" fill="${col}" fill-opacity=".6" stroke="${C.ink}" stroke-width="1.5"/>`};
   let s='';
   if(T===180){s+=arc(0,a,C.sun,70)+arc(a,180,C.sky,55)+`<line x1="${cx-r}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="${C.ink}" stroke-width="4"/><line x1="${cx}" y1="${cy}" x2="${pt(a)[0]}" y2="${pt(a)[1]}" stroke="${C.ink}" stroke-width="4"/>`}
   if(T===90){s+=arc(0,a,C.sun,70)+arc(a,90,C.sky,55)+`<line x1="${cx}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="${C.ink}" stroke-width="4"/><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy-r}" stroke="${C.ink}" stroke-width="4"/><line x1="${cx}" y1="${cy}" x2="${pt(a)[0]}" y2="${pt(a)[1]}" stroke="${C.ink}" stroke-width="4"/><rect x="${cx}" y="${cy-14}" width="14" height="14" fill="none" stroke="${C.ink}"/>`}
   if(T===360){const c2=Math.round((360-a)/2);s+=arc(0,a,C.sun,70)+arc(a,a+c2,C.sky,55)+arc(a+c2,360,C.leaf,62);[0,a,a+c2].forEach(d=>s+=`<line x1="${cx}" y1="${cy}" x2="${pt(d)[0]}" y2="${pt(d)[1]}" stroke="${C.ink}" stroke-width="4"/>`)}
   s+=`<circle cx="${cx}" cy="${cy}" r="5" fill="${C.ink}"/>`;
   const txt=T===360?`${a}° + ${Math.round((360-a)/2)}° + ${360-a-Math.round((360-a)/2)}° = <b>360°</b>`:`${a}° + ${b}° = <b>${T}°</b>`;
   R.querySelector('#anout').innerHTML=sv(460,T===180||T===90?200:340,s)+`<div class="simres">${txt}</div>`})},

 /* ---- ratio bar model ---- */
 ratio(R){R.innerHTML=`<p class="simp">Model bar: bahagikan jumlah kepada unit yang sama besar, kemudian darab.</p><div class="simctl">${rng('rp','Nisbah p',1,8,2)}${rng('rq','Nisbah q',1,8,3)}${rng('rt','Jumlah',10,200,60,5)}</div><div id="rout"></div>`;
  bind(R,['rp','rq','rt'],()=>{const p=gv(R,'rp'),q=gv(R,'rq'),T=gv(R,'rt'),n=p+q,u=T/n;const W=480/n;let s='';
   for(let i=0;i<n;i++){s+=`<rect x="${40+i*W}" y="${i<p?40:120}" width="${W-4}" height="50" rx="6" fill="${i<p?C.sky:C.tom}" stroke="${C.ink}" stroke-width="2"/>${tx(40+i*W+W/2-2,(i<p?40:120)+31,fmtN(u),13)}`}
   s+=tx(30,70,'p',16,'end')+tx(30,150,'q',16,'end');
   R.querySelector('#rout').innerHTML=sv(540,190,s)+`<div class="simres">${p} + ${q} = ${n} unit · 1 unit = ${T} ÷ ${n} = <b>${fmtN(u)}</b><br>p = ${p} × ${fmtN(u)} = <b>${fmtN(p*u)}</b> · q = ${q} × ${fmtN(u)} = <b>${fmtN(q*u)}</b></div>`})},

 /* ---- factors & multiples ---- */
 fg(R){R.innerHTML=`<p class="simp">FSTB = faktor <b>sepunya terbesar</b>. GSTK = gandaan <b>sepunya terkecil</b>.</p><div class="simctl">${rng('fa','Nombor A',2,100,24)}${rng('fb','Nombor B',2,100,36)}</div><div id="fout"></div>`;
  bind(R,['fa','fb'],()=>{const a=gv(R,'fa'),b=gv(R,'fb');const F=n=>[...Array(n)].map((_,i)=>i+1).filter(i=>n%i===0);const fa=F(a),fb=F(b);const com=fa.filter(x=>fb.includes(x));const h=Math.max(...com);
   let l=a;while(l%b)l+=a;const ma=[...Array(Math.min(12,l/a))].map((_,i)=>a*(i+1)),mb=[...Array(Math.min(12,l/b))].map((_,i)=>b*(i+1));
   const chips=(arr,hl,big)=>arr.map(x=>`<span class="fchip ${x===big?'big':hl.includes(x)?'hl':''}">${x}</span>`).join('');
   R.querySelector('#fout').innerHTML=`<div class="fgrid"><div><b>Faktor ${a}</b><div class="fchips">${chips(fa,com,h)}</div></div><div><b>Faktor ${b}</b><div class="fchips">${chips(fb,com,h)}</div></div><div><b>Gandaan ${a}</b><div class="fchips">${chips(ma,[],l)}${l/a>12?' …':''}</div></div><div><b>Gandaan ${b}</b><div class="fchips">${chips(mb,[],l)}${l/b>12?' …':''}</div></div></div><div class="simres">Faktor sepunya: ${com.join(', ')} → FSTB = <b>${h}</b> · GSTK = <b>${l}</b></div>`})},

 /* ---- statistics ---- */
 stats(R){R.innerHTML=`<p class="simp">Taip nombor dipisah koma. Graf akan susun data untuk mencari median.</p><div class="simctl"><label class="sl" style="flex:1 1 100%"><span>Data</span><input id="sd" type="text" value="3, 7, 8, 5, 8, 9, 2" inputmode="decimal"></label></div><div id="sout"></div>`;
  const draw=()=>{const d=R.querySelector('#sd').value.split(/[,\s]+/).filter(x=>x.trim()!=='').map(Number).filter(x=>!isNaN(x));if(!d.length)return;const s=[...d].sort((x,y)=>x-y),n=s.length,mean=s.reduce((x,y)=>x+y,0)/n;
   const med=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2;const cnt={};s.forEach(x=>cnt[x]=(cnt[x]||0)+1);const mx=Math.max(...Object.values(cnt));const modes=Object.keys(cnt).filter(k=>cnt[k]===mx).map(Number);
   const top=Math.max(...s,1),W=Math.min(56,460/n),H=200;let g='';
   s.forEach((v,i)=>{const isMed=n%2?i===(n-1)/2:(i===n/2-1||i===n/2);g+=`<rect x="${40+i*W}" y="${30+H-v/top*H}" width="${W-6}" height="${v/top*H}" fill="${isMed?C.sun:modes.includes(v)&&mx>1?C.grape:C.sky}" stroke="${C.ink}" stroke-width="2"/>${tx(40+i*W+W/2-3,30+H-v/top*H-6,fmtN(v),12)}`});
   g+=`<line x1="34" y1="${30+H-mean/top*H}" x2="${46+n*W}" y2="${30+H-mean/top*H}" stroke="${C.tom}" stroke-width="3" stroke-dasharray="8 5"/>${tx(50+n*W,34+H-mean/top*H,'min',12,'start',C.tom)}`;
   R.querySelector('#sout').innerHTML=sv(560,250,g)+`<div class="simres">Disusun: ${s.map(fmtN).join(', ')}<br>Min = ${fmtN(s.reduce((x,y)=>x+y,0))} ÷ ${n} = <b>${fmtN(mean)}</b> · Median (kuning) = <b>${fmtN(med)}</b> · Mod (ungu) = <b>${mx>1?modes.map(fmtN).join(', '):'tiada'}</b> · Julat = <b>${fmtN(s[n-1]-s[0])}</b></div>`};
  R.querySelector('#sd').oninput=draw;draw()}
};

SIMF.dens=function(R){R.innerHTML=`<p class="simp"><b>Ketumpatan = jisim ÷ isi padu.</b> Air = 1 g/cm³. Objek kurang tumpat terapung; lebih tumpat tenggelam.</p><div class="simctl">${rng('dm','Jisim (g)',5,120,30)}${rng('dv','Isi padu (cm³)',5,60,40)}</div><div id="dout"></div>`;
 bind(R,['dm','dv'],()=>{const m=gv(R,'dm'),v=gv(R,'dv'),d=m/v;const fl=d<1;const side=Math.cbrt(v)*14;const sub=Math.min(1,d);const top=fl?140-side*sub:250-side;
  const s=`<rect x="60" y="140" width="360" height="130" fill="#7EC4FF" fill-opacity=".55"/><line x1="60" y1="140" x2="420" y2="140" stroke="${C.blue}" stroke-width="3"/><rect x="40" y="60" width="400" height="212" fill="none" stroke="${C.ink}" stroke-width="3"/><rect x="${240-side/2}" y="${top}" width="${side}" height="${side}" rx="6" fill="${fl?C.sun:C.tom}" stroke="${C.ink}" stroke-width="3"><animate attributeName="y" from="70" to="${top}" dur=".8s" fill="freeze"/></rect>${tx(240,40,fl?'TERAPUNG 🛟':'TENGGELAM ⚓',18)}`;
  R.querySelector('#dout').innerHTML=sv(480,290,s)+`<div class="simres">Ketumpatan = ${m} ÷ ${v} = <b>${fmtN(d)} g/cm³</b> → ${d<1?'kurang daripada':d===1?'sama dengan':'lebih daripada'} 1 g/cm³ → <b>${d<1?'terapung':d===1?'terampai':'tenggelam'}</b></div>`})};
SIMF.mix=function(R){R.innerHTML=`<p class="simp">Hidupkan lampu merah, hijau dan biru. Lihat warna yang terhasil di tempat cahaya bertindih.</p><div class="row2" style="margin-bottom:8px"><button class="btn sm" data-c="r" style="background:#ff5a5a">Merah</button><button class="btn sm" data-c="g" style="background:#5ee05e">Hijau</button><button class="btn sm" data-c="b" style="background:#6b8cff">Biru</button></div><div id="mout"></div>`;
 const on={r:true,g:true,b:false};const names={'100':'merah','010':'hijau','001':'biru','110':'kuning','101':'magenta','011':'sian','111':'putih','000':'(gelap)'};
 const draw=()=>{const k=(on.r?1:0)+''+(on.g?1:0)+''+(on.b?1:0);R.querySelectorAll('[data-c]').forEach(b=>b.style.opacity=on[b.dataset.c]?1:.35);
  const circ=(c,x,y)=>`<div style="position:absolute;left:${x/4.4}%;top:${y/3}%;width:${170/4.4}%;height:${170/3}%;border-radius:50%;background:${c};mix-blend-mode:screen;transform:translate(-50%,-50%)"></div>`;
  const stage=`<div class="mixstage" style="position:relative;width:100%;aspect-ratio:440/300;background:#000;border:2px solid #17171C;border-radius:12px;overflow:hidden;isolation:isolate">${on.r?circ('#ff0000',170,120):''}${on.g?circ('#00ff00',270,120):''}${on.b?circ('#0000ff',220,200):''}</div>`;
R.querySelector('#mout').innerHTML=stage+`<div class="simres" style="margin-top:8px">${['r','g','b'].filter(c=>on[c]).map(c=>({r:'Merah',g:'Hijau',b:'Biru'})[c]).join(' + ')||'Tiada cahaya'} = <b>${names[k]}</b><br><small>Merah + Hijau = kuning · Merah + Biru = magenta · Hijau + Biru = sian · Ketiga-tiga = putih</small></div>`};
 R.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{on[b.dataset.c]=!on[b.dataset.c];draw()});draw()};
SIMF.refl=function(R){R.innerHTML=`<p class="simp">Hukum pantulan: <b>sudut tuju = sudut pantulan</b>. Kedua-duanya diukur dari garis normal.</p><div class="simctl">${rng('ri','Sudut tuju (°)',5,80,35)}</div><div id="rfout"></div>`;
 bind(R,['ri'],()=>{const i=gv(R,'ri')*Math.PI/180,L=150,cx=240,cy=230;const ix=cx-L*Math.sin(i),iy=cy-L*Math.cos(i),rx=cx+L*Math.sin(i);
  const s=`<rect x="60" y="230" width="360" height="12" fill="${C.sky}" stroke="${C.ink}" stroke-width="2"/><line x1="${cx}" y1="230" x2="${cx}" y2="50" stroke="${C.ink}" stroke-dasharray="6 5" stroke-width="2"/>${tx(cx,42,'normal',12)}<line x1="${ix}" y1="${iy}" x2="${cx}" y2="${cy}" stroke="#E2412B" stroke-width="4"/><line x1="${cx}" y1="${cy}" x2="${rx}" y2="${iy}" stroke="${C.blue}" stroke-width="4" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" from="300" to="0" dur=".6s" fill="freeze"/></line>${tx(cx-40,cy-70,'i',16)}${tx(cx+40,cy-70,'r',16)}`;
  R.querySelector('#rfout').innerHTML=sv(480,260,s)+`<div class="simres">Sudut tuju i = ${gv(R,'ri')}° → sudut pantulan r = <b>${gv(R,'ri')}°</b></div>`})};

SIMF.bin=function(R){const bits=[0,0,0,0,1,0,1,1];R.innerHTML=`<p class="simp">Ketik suis untuk tukar 0 ↔ 1. Nilai perpuluhan = jumlah nilai tempat yang bernilai 1.</p><div class="bits" id="bits"></div><div id="bout"></div><div class="simctl" style="margin-top:10px"><label class="sl"><span>Atau taip nombor perpuluhan (0–255)</span><input id="bdec" type="text" inputmode="numeric" value="11"></label></div>`;
 const pv=[128,64,32,16,8,4,2,1];const draw=()=>{const v=bits.reduce((s,b,i)=>s+b*pv[i],0);
  R.querySelector('#bits').innerHTML=bits.map((b,i)=>`<button class="bit ${b?'on':''}" data-i="${i}" aria-label="Bit ${pv[i]}"><small>${pv[i]}</small><b>${b}</b></button>`).join('');
  R.querySelectorAll('.bit').forEach(x=>x.onclick=()=>{bits[+x.dataset.i]^=1;R.querySelector('#bdec').value=bits.reduce((s,b,i)=>s+b*pv[i],0);draw()});
  const used=pv.filter((p,i)=>bits[i]);R.querySelector('#bout').innerHTML=`<div class="simres">${bits.join('').replace(/^0+(?=.)/,'')}₂ = ${used.length?used.join(' + '):'0'} = <b>${v}</b>₁₀</div>`};
 R.querySelector('#bdec').oninput=e=>{let n=Math.max(0,Math.min(255,parseInt(e.target.value)||0));pv.forEach((p,i)=>{bits[i]=n>=p?1:0;if(n>=p)n-=p});draw()};draw()};
SIMF.html=function(R){R.innerHTML=`<p class="simp">Taip kod HTML di kiri, lihat hasilnya di bawah. (Imej dan skrip tidak dipaparkan di sini.)</p><textarea id="hcode" class="scrt" style="min-height:150px">&lt;h1&gt;Saya Suka Berbasikal&lt;/h1&gt;
&lt;p&gt;Saya berbasikal setiap &lt;b&gt;petang&lt;/b&gt;.&lt;/p&gt;
&lt;ol&gt;
  &lt;li&gt;Topi keledar&lt;/li&gt;
  &lt;li&gt;Botol air&lt;/li&gt;
&lt;/ol&gt;</textarea><div class="eyebrow" style="margin-top:8px">Hasil paparan</div><div id="hout" class="hprev"></div>`;
 const ok=['h1','h2','h3','h4','h5','h6','p','br','b','i','u','ol','ul','li','a','strong','em','hr','table','tr','td','th'];
 const draw=()=>{const tpl=document.createElement('template');tpl.innerHTML=R.querySelector('#hcode').value;
  const clean=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===1){const t=c.tagName.toLowerCase();if(!ok.includes(t)){c.replaceWith(document.createTextNode('['+t+']'));return}[...c.attributes].forEach(a=>{if(!(t==='a'&&a.name==='href'))c.removeAttribute(a.name)});if(t==='a'){c.setAttribute('target','_blank');c.setAttribute('rel','noopener');if(!/^https?:/i.test(c.getAttribute('href')||''))c.removeAttribute('href')}clean(c)}})};
  clean(tpl.content);const o=R.querySelector('#hout');o.innerHTML='';o.appendChild(tpl.content)};
 R.querySelector('#hcode').oninput=draw;draw()};

/* ================= SCRATCHPAD (ruang kiraan) ================= */
const SCR={};
function scratchHTML(key,open,A){return `<div class="scrwrap"><button class="btn ghost sm scrtog" data-scrtog="${key}" aria-expanded="${open}">✏️ Ruang kiraan</button><div class="scr" data-scr="${key}" ${open?'':'hidden'}><div class="scrtools"><button class="pen on" data-pc="#17171C" aria-label="Pen hitam"></button><button class="pen" data-pc="#2F8FE0" aria-label="Pen biru" style="background:#2F8FE0"></button><button class="pen" data-pc="#E2412B" aria-label="Pen merah" style="background:#E2412B"></button><button class="pen er" data-pc="erase" aria-label="Pemadam">🧽</button><button class="btn ghost sm" data-clr>Padam semua</button></div><canvas class="scrc" aria-label="Kawasan lukis untuk kiraan"></canvas><textarea class="scrt" data-wkey="${key}" placeholder="Atau taip langkah kiraan di sini…">${esc((A&&A[key+'_w'])||'')}</textarea></div></div>`}
function initScratch(box){
 const key=box.dataset.scr,cv=box.querySelector('canvas');if(cv.dataset.ok)return;cv.dataset.ok=1;
 const dpr=window.devicePixelRatio||1,w=cv.clientWidth||300,h=240;cv.width=w*dpr;cv.height=h*dpr;cv.style.height=h+'px';
 const cx=cv.getContext('2d');cx.scale(dpr,dpr);cx.lineCap='round';cx.lineJoin='round';
 const grid=()=>{cx.save();cx.strokeStyle='rgba(23,23,28,.08)';cx.lineWidth=1;for(let x=0;x<w;x+=24){cx.beginPath();cx.moveTo(x,0);cx.lineTo(x,h);cx.stroke()}for(let y=0;y<h;y+=24){cx.beginPath();cx.moveTo(0,y);cx.lineTo(w,y);cx.stroke()}cx.restore()};
 if(SCR[key]){const im=new Image();im.onload=()=>cx.drawImage(im,0,0,w,h);im.src=SCR[key]}else grid();
 let col='#17171C',drawing=false,last=null;
 box.querySelectorAll('[data-pc]').forEach(b=>b.onclick=()=>{col=b.dataset.pc;box.querySelectorAll('[data-pc]').forEach(x=>x.classList.toggle('on',x===b))});
 box.querySelector('[data-clr]').onclick=()=>{cx.clearRect(0,0,w,h);grid();delete SCR[key]};
 const pos=e=>{const r=cv.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top]};
 cv.onpointerdown=e=>{drawing=true;last=pos(e);cv.setPointerCapture(e.pointerId)};
 cv.onpointermove=e=>{if(!drawing)return;const p=pos(e);cx.globalCompositeOperation=col==='erase'?'destination-out':'source-over';cx.strokeStyle=col;cx.lineWidth=col==='erase'?22:(e.pressure&&e.pointerType==='pen'?1.5+e.pressure*3:2.6);cx.beginPath();cx.moveTo(...last);cx.lineTo(...p);cx.stroke();last=p};
 cv.onpointerup=cv.onpointercancel=()=>{if(drawing){drawing=false;cx.globalCompositeOperation='source-over';try{SCR[key]=cv.toDataURL()}catch(e){}}};
}
