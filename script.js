
/* ============================================================
   ICON SYSTEM — inline SVG line icons (replace all emoji)
=============================================================*/
const ICON_PATHS = {
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  warning: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2c0-1.1 1-2 2.4-2s2.4.7 2.4 1.7-.9 1.5-2.2 1.7c-1.4.2-2.4.8-2.4 1.9s1.1 1.8 2.4 1.8 2.3-.6 2.4-1.6"/><line x1="12" y1="5.5" x2="12" y2="18.5"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10v.01M18 14v.01"/>',
  alertCircle: '<circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  checkShield: '<path d="M12 3 4 6v6c0 5 3.4 8.7 8 9 4.6-.3 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  bolt: '<polygon points="13 2 3 14 11 14 10 22 21 10 13 10 13 2"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
  userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  clipboard: '<path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1Z"/><rect x="5" y="4" width="14" height="18" rx="2"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="15" y2="15"/>',
  receipt: '<path d="M4 2h16v20l-3-2-3 2-3-2-3 2-3-2-1 2Z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  pause: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',
  volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  mute: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',
  repeat: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  info: '<circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
};
function icon(name, cls){
  const paths = ICON_PATHS[name] || '';
  return `<svg class="ico${cls ? ' '+cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
}

/* ============================================================
   DATA LAYER
=============================================================*/
const STORAGE_KEY = 'g12AphroditeDebtTracker';
const VIOLATION_TYPES = {
  "No Shoe Cover": 1,
  "Phone Charging": 5
};

const initialRoster = [
  {name:"Alegre, Jeffrey G.", gender:"Male"},
  {name:"Amaro, Jessboy L.", gender:"Male"},
  {name:"Avenido, Marjun E.", gender:"Male"},
  {name:"Butas, Renmark R.", gender:"Male"},
  {name:"Cadavid, Noah B.", gender:"Male"},
  {name:"Gutierrez, Mark Joshua S.", gender:"Male"},
  {name:"Jorolan, John Ryven B.", gender:"Male"},
  {name:"Kilakiga, Russel", gender:"Male"},
  {name:"Quilinguen, John Paul E.", gender:"Male"},
  {name:"Quinol, Ben Anthony", gender:"Male"},
  {name:"Quinol, Serafin Jr. C.", gender:"Male"},
  {name:"Santo, Richmon S.", gender:"Male"},
  {name:"Sinda, Andrew John", gender:"Male"},
  {name:"Alegre, John Ruel", gender:"Male"},
  {name:"Corativo, Roi", gender:"Male"},
  {name:"Abines, Aleah E.", gender:"Female"},
  {name:"Abines, Ana E.", gender:"Female"},
  {name:"Alberto, Alaiza E.", gender:"Female"},
  {name:"Austero, Marian L.", gender:"Female"},
  {name:"Austral, Lyn G.", gender:"Female"},
  {name:"Beran, Sunny Bea A.", gender:"Female"},
  {name:"Ciano, Mary Noren M.", gender:"Female"},
  {name:"Domin, Michelle D.", gender:"Female"},
  {name:"Enario, Anna C.", gender:"Female"},
  {name:"Estolonio, Christine J.", gender:"Female"},
  {name:"Kinkito, Jashley Laurine E.", gender:"Female"},
  {name:"Kirit, Cathlene Mae L.", gender:"Female"},
  {name:"Lobenia, CJ Saily Yrich V.", gender:"Female"},
  {name:"Magbanua, Joann F.", gender:"Female"},
  {name:"Quilinguen, Christine Mae N.", gender:"Female"},
  {name:"Quio, Ashly D.", gender:"Female"},
  {name:"Rusiana, Cheriell C.", gender:"Female"},
  {name:"Salondaguit, Jessa Mae N.", gender:"Female"},
  {name:"Tayko, Liza F.", gender:"Female"},
  {name:"Sabanal, Angel", gender:"Female"},
  {name:"Rapada, Jeliane", gender:"Female"}
];

let data = loadData();

function loadData(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){
    try{
      const parsed = JSON.parse(raw);
      if(parsed && Array.isArray(parsed.students)) return parsed;
    }catch(e){ console.error('Corrupt data, reinitializing.', e); }
  }
  const fresh = {
    students: initialRoster.map((s,i)=>({id:'s'+(i+1), name:s.name, gender:s.gender})),
    violations: [],
    payments: []
  };
  saveData(fresh);
  return fresh;
}

function saveData(d){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
}

function persist(){
  saveData(data);
}

function uid(prefix){
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
}

/* ============================================================
   COMPUTED HELPERS
=============================================================*/
function money(n){
  const v = Math.round(n*100)/100;
  return '₱' + v.toLocaleString('en-PH', {minimumFractionDigits: (v%1!==0)?2:0, maximumFractionDigits:2});
}

function getStudentStats(studentId){
  const vlist = data.violations.filter(v=>v.studentId===studentId);
  const plist = data.payments.filter(p=>p.studentId===studentId);
  const totalOwed = vlist.reduce((s,v)=>s+v.amount,0);
  const totalPaid = plist.reduce((s,p)=>s+p.amount,0);
  const remaining = Math.max(0, totalOwed - totalPaid);
  const status = remaining === 0 ? 'PAID' : 'UNPAID';
  let latestDate = null;
  vlist.forEach(v=>{ if(!latestDate || v.date > latestDate) latestDate = v.date; });
  return {
    violations: vlist.sort((a,b)=> a.date < b.date ? 1 : -1),
    payments: plist.sort((a,b)=> a.date < b.date ? 1 : -1),
    totalOwed, totalPaid, remaining, status,
    violationCount: vlist.length,
    latestDate
  };
}

/* ============================================================
   RENDER: DASHBOARD
=============================================================*/
function renderDashboard(){
  let totalOwed=0, totalPaid=0, totalRemaining=0, fullyPaid=0, totalViolations=data.violations.length;
  data.students.forEach(s=>{
    const stats = getStudentStats(s.id);
    totalOwed += stats.totalOwed;
    totalPaid += stats.totalPaid;
    totalRemaining += stats.remaining;
    if(stats.status==='PAID') fullyPaid++;
  });

  const dash = document.getElementById('dashboard');
  dash.innerHTML = `
    <div class="dash-card"><div class="icon-row">${icon('users')}</div><div class="num">${data.students.length}</div><div class="lbl">Total Students</div></div>
    <div class="dash-card"><div class="icon-row">${icon('warning')}</div><div class="num">${totalViolations}</div><div class="lbl">Total Violations</div></div>
    <div class="dash-card owed"><div class="icon-row">${icon('coin')}</div><div class="num">${money(totalOwed)}</div><div class="lbl">Total Owed</div></div>
    <div class="dash-card paid"><div class="icon-row">${icon('cash')}</div><div class="num">${money(totalPaid)}</div><div class="lbl">Total Paid</div></div>
    <div class="dash-card owed"><div class="icon-row">${icon('alertCircle')}</div><div class="num">${money(totalRemaining)}</div><div class="lbl">Remaining Debt</div></div>
    <div class="dash-card paid"><div class="icon-row">${icon('checkShield')}</div><div class="num">${fullyPaid}</div><div class="lbl">Fully Paid</div></div>
  `;
}

/* ============================================================
   RENDER: STUDENT LIST
=============================================================*/
let currentFilter = 'all';
let currentSort = 'name';
let searchTerm = '';

function getFilteredSortedStudents(){
  let list = data.students.map(s=>({...s, stats: getStudentStats(s.id)}));

  if(searchTerm.trim()){
    const t = searchTerm.trim().toLowerCase();
    list = list.filter(s=>s.name.toLowerCase().includes(t));
  }

  switch(currentFilter){
    case 'debt':
      list = list.filter(s=>s.stats.remaining > 0);
      break;
    case 'paid':
      list = list.filter(s=>s.stats.remaining === 0);
      break;
    case 'shoe':
      list = list.filter(s=>s.stats.violations.some(v=>v.type==='No Shoe Cover'));
      break;
    case 'phone':
      list = list.filter(s=>s.stats.violations.some(v=>v.type==='Phone Charging'));
      break;
  }

  switch(currentSort){
    case 'name':
      list.sort((a,b)=>a.name.localeCompare(b.name));
      break;
    case 'debtHigh':
      list.sort((a,b)=>b.stats.remaining - a.stats.remaining);
      break;
    case 'debtLow':
      list.sort((a,b)=>a.stats.remaining - b.stats.remaining);
      break;
    case 'violations':
      list.sort((a,b)=>b.stats.violationCount - a.stats.violationCount);
      break;
    case 'latest':
      list.sort((a,b)=>{
        const da = a.stats.latestDate || '';
        const db = b.stats.latestDate || '';
        return db.localeCompare(da);
      });
      break;
  }
  return list;
}

function renderStudentList(){
  const list = getFilteredSortedStudents();
  const container = document.getElementById('studentList');

  if(list.length === 0){
    container.innerHTML = `<div class="empty-state">No students match your search/filter.</div>`;
    return;
  }

  container.innerHTML = list.map(s=>{
    const paidClass = s.stats.status === 'PAID' ? 'paid' : 'unpaid';
    const amtClass = s.stats.remaining === 0 ? 'zero' : 'due';
    return `
      <div class="student-card ${paidClass}" data-id="${s.id}">
        <div class="student-info">
          <div class="student-name">${escapeHtml(s.name)}</div>
          <div class="student-meta">${s.gender} &middot; ${s.stats.violationCount} violation${s.stats.violationCount===1?'':'s'}</div>
        </div>
        <div class="student-debt">
          <div class="amt ${amtClass}">${money(s.stats.remaining)}</div>
          <span class="status-badge ${paidClass}">${s.stats.status}</span>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.student-card').forEach(card=>{
    card.addEventListener('click', ()=> openDetail(card.dataset.id));
  });
}

function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ============================================================
   RENDER ALL
=============================================================*/
function renderAll(){
  renderDashboard();
  renderStudentList();
  populateStudentSelects();
}

/* ============================================================
   STUDENT SELECT DROPDOWNS
=============================================================*/
function populateStudentSelects(){
  const sorted = [...data.students].sort((a,b)=>a.name.localeCompare(b.name));
  const opts = sorted.map(s=>`<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
  document.getElementById('vStudent').innerHTML = opts;
  document.getElementById('pStudent').innerHTML = opts;
}

/* ============================================================
   MODALS
=============================================================*/
function openModal(id){
  document.getElementById(id).classList.add('open');
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
}
document.querySelectorAll('.modal-close').forEach(btn=>{
  btn.addEventListener('click', ()=> closeModal(btn.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach(ov=>{
  ov.addEventListener('click', (e)=>{ if(e.target === ov) ov.classList.remove('open'); });
});

function todayStr(){
  const d = new Date();
  return d.toISOString().slice(0,10);
}
function currentPeriod(){
  return new Date().getHours() < 12 ? 'AM' : 'PM';
}

/* --- Add Violation --- */
document.getElementById('btnAddViolation').addEventListener('click', ()=>{
  populateStudentSelects();
  document.getElementById('vDate').value = todayStr();
  document.getElementById('vPeriod').value = currentPeriod();
  updateViolationAmountDisplay();
  openModal('modalViolation');
});
document.getElementById('vType').addEventListener('change', updateViolationAmountDisplay);
function updateViolationAmountDisplay(){
  const type = document.getElementById('vType').value;
  document.getElementById('vAmountDisplay').value = money(VIOLATION_TYPES[type]);
}
document.getElementById('formViolation').addEventListener('submit', (e)=>{
  e.preventDefault();
  const studentId = document.getElementById('vStudent').value;
  const type = document.getElementById('vType').value;
  const date = document.getElementById('vDate').value;
  const period = document.getElementById('vPeriod').value;
  if(!studentId || !date) return;
  data.violations.push({
    id: uid('v'),
    studentId, date, type, period,
    amount: VIOLATION_TYPES[type]
  });
  persist();
  renderAll();
  closeModal('modalViolation');
  showToast('Violation recorded successfully.');
});

/* --- Add Payment --- */
document.getElementById('btnAddPayment').addEventListener('click', ()=>{
  populateStudentSelects();
  document.getElementById('pDate').value = todayStr();
  document.getElementById('pAmount').value = '';
  updatePaymentRemainingDisplay();
  openModal('modalPayment');
});
document.getElementById('pStudent').addEventListener('change', updatePaymentRemainingDisplay);
function updatePaymentRemainingDisplay(){
  const sid = document.getElementById('pStudent').value;
  if(!sid) return;
  const stats = getStudentStats(sid);
  document.getElementById('pRemainingDisplay').value = money(stats.remaining);
  document.getElementById('pAmount').max = stats.remaining > 0 ? stats.remaining : '';
}
document.getElementById('formPayment').addEventListener('submit', (e)=>{
  e.preventDefault();
  const studentId = document.getElementById('pStudent').value;
  let amount = parseFloat(document.getElementById('pAmount').value);
  const date = document.getElementById('pDate').value;
  if(!studentId || !date || isNaN(amount) || amount <= 0) return;

  const stats = getStudentStats(studentId);
  // Prevent overpayment beyond remaining debt causing negative remaining;
  // cap the recorded payment at the remaining debt if it exceeds it.
  if(amount > stats.remaining){
    amount = stats.remaining;
  }
  if(amount <= 0){
    showToast('This student has no remaining debt.');
    return;
  }

  data.payments.push({
    id: uid('p'),
    studentId, date, amount
  });
  persist();
  renderAll();
  closeModal('modalPayment');
  showToast('Payment recorded successfully.');
});

/* --- Quick Batch Add --- */
let batchSelectedIds = new Set();

document.getElementById('btnBatchAdd').addEventListener('click', ()=>{
  document.getElementById('batchDate').value = todayStr();
  document.getElementById('batchPeriod').value = currentPeriod();
  document.getElementById('batchType').value = 'No Shoe Cover';
  document.getElementById('batchMarkPaid').checked = false;
  document.getElementById('batchSearch').value = '';
  batchSelectedIds = new Set();
  renderBatchList('');
  openModal('modalBatch');
});

function renderBatchList(filterText){
  const sorted = [...data.students].sort((a,b)=>a.name.localeCompare(b.name));
  const t = (filterText||'').trim().toLowerCase();
  const list = t ? sorted.filter(s=>s.name.toLowerCase().includes(t)) : sorted;
  const container = document.getElementById('batchList');

  if(list.length === 0){
    container.innerHTML = `<div class="empty-state" style="padding:20px;">No students match.</div>`;
  } else {
    container.innerHTML = list.map(s=>{
      const checked = batchSelectedIds.has(s.id);
      return `
        <div class="batch-item ${checked?'checked':''}" data-id="${s.id}">
          <input type="checkbox" ${checked?'checked':''} data-id="${s.id}">
          <span class="bname">${escapeHtml(s.name)}</span>
        </div>`;
    }).join('');
  }

  container.querySelectorAll('.batch-item').forEach(item=>{
    item.addEventListener('click', (e)=>{
      const id = item.dataset.id;
      if(batchSelectedIds.has(id)) batchSelectedIds.delete(id);
      else batchSelectedIds.add(id);
      const cb = item.querySelector('input[type="checkbox"]');
      cb.checked = batchSelectedIds.has(id);
      item.classList.toggle('checked', batchSelectedIds.has(id));
      updateBatchCount();
    });
  });
  updateBatchCount();
}

function updateBatchCount(){
  document.getElementById('batchCount').textContent = batchSelectedIds.size + ' student' + (batchSelectedIds.size===1?'':'s') + ' selected';
}

document.getElementById('batchSearch').addEventListener('input', (e)=>{
  renderBatchList(e.target.value);
});

document.getElementById('batchSelectAll').addEventListener('click', ()=>{
  const t = document.getElementById('batchSearch').value.trim().toLowerCase();
  const visible = t ? data.students.filter(s=>s.name.toLowerCase().includes(t)) : data.students;
  visible.forEach(s=>batchSelectedIds.add(s.id));
  renderBatchList(document.getElementById('batchSearch').value);
});
document.getElementById('batchClearAll').addEventListener('click', ()=>{
  const t = document.getElementById('batchSearch').value.trim().toLowerCase();
  const visible = t ? data.students.filter(s=>s.name.toLowerCase().includes(t)) : data.students;
  visible.forEach(s=>batchSelectedIds.delete(s.id));
  renderBatchList(document.getElementById('batchSearch').value);
});

document.getElementById('formBatch').addEventListener('submit', (e)=>{
  e.preventDefault();
  if(batchSelectedIds.size === 0){
    showToast('Select at least one student first.');
    return;
  }
  const date = document.getElementById('batchDate').value;
  const period = document.getElementById('batchPeriod').value;
  const type = document.getElementById('batchType').value;
  const markPaid = document.getElementById('batchMarkPaid').checked;
  const amount = VIOLATION_TYPES[type];
  if(!date) return;

  batchSelectedIds.forEach(sid=>{
    data.violations.push({
      id: uid('v'),
      studentId: sid, date, type, period,
      amount
    });
    if(markPaid){
      data.payments.push({
        id: uid('p'),
        studentId: sid, date, amount
      });
    }
  });

  const count = batchSelectedIds.size;
  persist();
  renderAll();
  closeModal('modalBatch');
  showToast(`Added ${type} for ${count} student${count===1?'':'s'}${markPaid?' (marked paid)':''}.`);
});

/* --- Add Student --- */
document.getElementById('btnAddStudent').addEventListener('click', ()=>{
  document.getElementById('sName').value = '';
  openModal('modalAddStudent');
});
document.getElementById('formAddStudent').addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('sName').value.trim();
  const gender = document.getElementById('sGender').value;
  if(!name) return;
  data.students.push({ id: uid('s'), name, gender });
  persist();
  renderAll();
  closeModal('modalAddStudent');
  showToast('Student added.');
});

/* ============================================================
   STUDENT DETAIL MODAL
=============================================================*/
let currentDetailId = null;

function openDetail(studentId){
  currentDetailId = studentId;
  renderDetail();
  openModal('modalDetail');
}

function renderDetail(){
  const s = data.students.find(x=>x.id===currentDetailId);
  if(!s) return;
  const stats = getStudentStats(s.id);
  const remClass = stats.remaining === 0 ? 'zero' : 'due';

  let violationsHtml = stats.violations.length
    ? stats.violations.map(v=>`
        <div class="history-row">
          <div>
            <div class="htype">${escapeHtml(v.type)}</div>
            <div class="hdate">${formatDate(v.date)}${v.period ? ' ('+v.period+')' : ''}</div>
          </div>
          <div class="hamt violation">+${money(v.amount)}</div>
        </div>`).join('')
    : `<div class="empty-state" style="padding:16px;">No violations recorded.</div>`;

  let paymentsHtml = stats.payments.length
    ? stats.payments.map(p=>`
        <div class="history-row">
          <div>
            <div class="htype">Payment</div>
            <div class="hdate">${formatDate(p.date)}</div>
          </div>
          <div class="hamt payment">-${money(p.amount)}</div>
        </div>`).join('')
    : `<div class="empty-state" style="padding:16px;">No payments recorded.</div>`;

  document.getElementById('detailBody').innerHTML = `
    <div class="detail-header">
      <div class="name">${escapeHtml(s.name)}</div>
      <div class="gender">${s.gender}</div>
    </div>

    <div class="big-remaining ${remClass}">
      <div class="amt">${stats.remaining === 0 ? 'PAID — ₱0 remaining' : money(stats.remaining) + ' remaining'}</div>
      <div class="lbl">${stats.status === 'PAID' ? icon('checkShield')+' Fully Paid' : icon('alertCircle')+' Unpaid Balance'}</div>
    </div>

    <div class="detail-stats">
      <div class="detail-stat"><div class="v">${money(stats.totalOwed)}</div><div class="l">Original Debt</div></div>
      <div class="detail-stat"><div class="v">${money(stats.totalPaid)}</div><div class="l">Total Paid</div></div>
      <div class="detail-stat"><div class="v">${stats.violationCount}</div><div class="l">Violations</div></div>
    </div>

    <div class="actions-row">
      <button class="btn btn-primary btn-sm" id="detailAddViolation">${icon('plus')} Add Violation</button>
      <button class="btn btn-gold btn-sm" id="detailAddPayment" ${stats.remaining===0?'disabled':''}>${icon('cash')} Add Payment</button>
    </div>

    <div class="history-block">
      <h3>${icon('clipboard')} Violation History</h3>
      ${violationsHtml}
    </div>
    <div class="history-block">
      <h3>${icon('receipt')} Payment History</h3>
      ${paymentsHtml}
    </div>
  `;

  document.getElementById('detailAddViolation').addEventListener('click', ()=>{
    closeModal('modalDetail');
    populateStudentSelects();
    document.getElementById('vStudent').value = s.id;
    document.getElementById('vDate').value = todayStr();
    document.getElementById('vPeriod').value = currentPeriod();
    updateViolationAmountDisplay();
    openModal('modalViolation');
  });
  document.getElementById('detailAddPayment').addEventListener('click', ()=>{
    if(stats.remaining===0) return;
    closeModal('modalDetail');
    populateStudentSelects();
    document.getElementById('pStudent').value = s.id;
    document.getElementById('pDate').value = todayStr();
    updatePaymentRemainingDisplay();
    openModal('modalPayment');
  });
}

function formatDate(dstr){
  if(!dstr) return '';
  const d = new Date(dstr + 'T00:00:00');
  if(isNaN(d)) return dstr;
  return d.toLocaleDateString('en-PH', {year:'numeric', month:'short', day:'numeric'});
}

/* ============================================================
   SEARCH / FILTER / SORT EVENTS
=============================================================*/
document.getElementById('searchInput').addEventListener('input', (e)=>{
  searchTerm = e.target.value;
  renderStudentList();
});
document.querySelectorAll('#filterChips .chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('#filterChips .chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    renderStudentList();
  });
});
document.getElementById('sortSelect').addEventListener('change', (e)=>{
  currentSort = e.target.value;
  renderStudentList();
});

/* ============================================================
   DATA TOOLS: EXPORT / IMPORT / CLEAR
=============================================================*/
document.getElementById('btnExport').addEventListener('click', ()=>{
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = new Date().toISOString().slice(0,10);
  a.href = url;
  a.download = `G12-Aphrodite-DebtTracker-Backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Backup exported.');
});

document.getElementById('btnImport').addEventListener('click', ()=>{
  document.getElementById('importFile').click();
});
document.getElementById('importFile').addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (ev)=>{
    try{
      const imported = JSON.parse(ev.target.result);
      if(!imported || !Array.isArray(imported.students) || !Array.isArray(imported.violations) || !Array.isArray(imported.payments)){
        throw new Error('Invalid file format.');
      }
      if(confirm('Import this backup? This will REPLACE all current data on this device.')){
        data = imported;
        persist();
        renderAll();
        showToast('Data restored from backup.');
      }
    }catch(err){
      alert('Could not import file: ' + err.message);
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

document.getElementById('btnClearAll').addEventListener('click', ()=>{
  if(confirm('WARNING: This will permanently delete ALL students, violations, and payments from this device. This cannot be undone.\n\nType-check: are you sure you want to continue?')){
    if(confirm('Final confirmation: Clear ALL data now?')){
      data = {
        students: initialRoster.map((s,i)=>({id:'s'+(i+1), name:s.name, gender:s.gender})),
        violations: [],
        payments: []
      };
      persist();
      renderAll();
      showToast('All data cleared. Roster reset to original 36 students.');
    }
  }
});

/* ============================================================
   TOAST
=============================================================*/
let toastTimer = null;
function showToast(msg, kind){
  const t = document.getElementById('toast');
  const iconName = kind === 'warning' ? 'warning' : kind === 'delete' ? 'trash' : 'info';
  t.innerHTML = icon(iconName) + '<span>' + escapeHtml(msg) + '</span>';
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2600);
}

/* ============================================================
   PDF EXPORT
=============================================================*/
// Note: the peso sign (₱) is not reliably supported by jsPDF's built-in
// fonts, so PDF text uses "Php" instead to guarantee it renders correctly
// in every viewer. The on-screen app keeps using ₱ as normal.
function phpPdf(n){
  const v = Math.round(n*100)/100;
  return 'Php ' + v.toLocaleString('en-PH', {minimumFractionDigits:(v%1!==0)?2:0, maximumFractionDigits:2});
}

document.getElementById('btnExportPDF').addEventListener('click', ()=>{
  const sel = document.getElementById('pdfReportType');
  sel.value = 'full';
  document.getElementById('pdfStudentWrap').style.display = 'none';
  populatePdfStudentSelect();
  openModal('modalExportPDF');
});

document.getElementById('pdfReportType').addEventListener('change', (e)=>{
  document.getElementById('pdfStudentWrap').style.display = (e.target.value==='individual') ? 'block' : 'none';
});

function populatePdfStudentSelect(){
  const sorted = [...data.students].sort((a,b)=>a.name.localeCompare(b.name));
  document.getElementById('pdfStudent').innerHTML =
    sorted.map(s=>`<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
}

document.getElementById('formExportPDF').addEventListener('submit', (e)=>{
  e.preventDefault();
  const type = document.getElementById('pdfReportType').value;
  const studentId = document.getElementById('pdfStudent').value;
  try{
    generatePDF(type, studentId);
    closeModal('modalExportPDF');
    showToast('PDF generated.');
  }catch(err){
    console.error(err);
    alert('Could not generate PDF: ' + err.message);
  }
});

function violationCounts(stats){
  const shoe = stats.violations.filter(v=>v.type==='No Shoe Cover').length;
  const phone = stats.violations.filter(v=>v.type==='Phone Charging').length;
  return {shoe, phone};
}

function pdfHeader(doc, subtitle){
  const pageW = doc.internal.pageSize.getWidth();
  let y = 15;
  doc.setFont('helvetica','bold');
  doc.setFontSize(14);
  doc.text('Caticugan High School', pageW/2, y, {align:'center'}); y+=6;
  doc.setFont('helvetica','normal');
  doc.setFontSize(10);
  doc.text('Caticugan, Siaton, Negros Oriental', pageW/2, y, {align:'center'}); y+=6;
  doc.setFont('helvetica','bold');
  doc.setFontSize(11);
  doc.text('Grade 12 - Aphrodite  |  S.Y. 2026-2027', pageW/2, y, {align:'center'}); y+=7;
  doc.setFontSize(13);
  doc.text('Student Debt / Penalty Record', pageW/2, y, {align:'center'}); y+=6;
  doc.setFont('helvetica','normal');
  doc.setFontSize(10);
  doc.text(subtitle, pageW/2, y, {align:'center'}); y+=5;
  doc.setFontSize(8.5);
  doc.setTextColor(110,110,110);
  const genDate = new Date().toLocaleString('en-PH', {year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'});
  doc.text('Generated: ' + genDate, pageW/2, y, {align:'center'});
  doc.setTextColor(0,0,0);
  y += 6;
  doc.setDrawColor(200,200,200);
  doc.line(12, y, pageW-12, y);
  return y + 6;
}

function pdfStudentBlock(doc, student, stats, startY){
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  let y = startY;
  if(y > pageH - 40){ doc.addPage(); y = 15; }

  const counts = violationCounts(stats);

  doc.setFont('helvetica','bold');
  doc.setFontSize(11);
  doc.text(student.name + '  (' + student.gender + ')', 12, y);
  y += 5;

  doc.autoTable({
    startY: y,
    head: [['No Shoe Cover', 'Phone Charging', 'Total Charges', 'Total Paid', 'Remaining', 'Status']],
    body: [[
      counts.shoe, counts.phone, phpPdf(stats.totalOwed), phpPdf(stats.totalPaid),
      phpPdf(stats.remaining), stats.status
    ]],
    theme: 'grid',
    styles:{fontSize:8.5, halign:'center'},
    headStyles:{fillColor:[30,58,95], textColor:255, fontSize:8},
    margin:{left:12,right:12}
  });
  y = doc.lastAutoTable.finalY + 3;

  // Build combined, date-sorted history
  const rows = [];
  stats.violations.forEach(v=>rows.push({date:v.date, period:v.period, label:v.type, amt:v.amount, sign:1}));
  stats.payments.forEach(p=>rows.push({date:p.date, period:null, label:'Payment', amt:p.amount, sign:-1}));
  rows.sort((a,b)=> a.date < b.date ? -1 : (a.date > b.date ? 1 : 0));

  const body = rows.map(r=>[
    formatDate(r.date) + (r.period ? ' ('+r.period+')' : ''), r.label, (r.sign>0?'':'-') + phpPdf(r.amt)
  ]);
  body.push(['', 'Remaining Debt', phpPdf(stats.remaining)]);

  doc.autoTable({
    startY: y,
    head: [['Date','Record','Amount']],
    body: body,
    theme:'striped',
    styles:{fontSize:8.5},
    headStyles:{fillColor:[242,183,5], textColor:[19,40,64], fontSize:8},
    columnStyles:{2:{halign:'right'}},
    didParseCell: function(d){
      if(d.row.index === body.length-1 && d.section==='body'){
        d.cell.styles.fontStyle = 'bold';
        d.cell.styles.fillColor = stats.remaining>0 ? [253,236,235] : [232,247,238];
      }
    },
    margin:{left:12,right:12}
  });

  return doc.lastAutoTable.finalY + 10;
}

function addPageNumbers(doc){
  const pageCount = doc.internal.getNumberOfPages();
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  for(let i=1;i<=pageCount;i++){
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(130,130,130);
    doc.text('Page ' + i + ' of ' + pageCount, pageW/2, pageH-8, {align:'center'});
    doc.setTextColor(0,0,0);
  }
}

function generatePDF(type, studentId){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:'mm', format:'a4'});

  let studentsList = data.students.map(s=>({...s, stats:getStudentStats(s.id)}));
  let subtitle = 'Full Report';
  let filename = 'Full-Report';

  if(type==='unpaid'){
    studentsList = studentsList.filter(s=>s.stats.remaining>0);
    subtitle = 'Unpaid Debts Only';
    filename = 'Unpaid-Debts';
  } else if(type==='paid'){
    studentsList = studentsList.filter(s=>s.stats.remaining===0 && s.stats.totalOwed>0);
    subtitle = 'Fully Paid Students Only';
    filename = 'Fully-Paid';
  } else if(type==='individual'){
    studentsList = studentsList.filter(s=>s.id===studentId);
    const nm = studentsList[0] ? studentsList[0].name : 'Student';
    subtitle = 'Individual Student Report: ' + nm;
    filename = 'Individual-' + nm.replace(/[^a-z0-9]+/gi,'-');
  } else if(type==='summary'){
    subtitle = 'Summary Report';
    filename = 'Summary-Report';
  }

  studentsList.sort((a,b)=>a.name.localeCompare(b.name));

  let y = pdfHeader(doc, subtitle);

  if(type==='summary'){
    let totalOwed=0, totalPaid=0, totalRemaining=0, fullyPaid=0, totalViol=0;
    const body = studentsList.map(s=>{
      const c = violationCounts(s.stats);
      totalOwed += s.stats.totalOwed;
      totalPaid += s.stats.totalPaid;
      totalRemaining += s.stats.remaining;
      totalViol += s.stats.violationCount;
      if(s.stats.status==='PAID') fullyPaid++;
      return [s.name, c.shoe, c.phone, phpPdf(s.stats.totalOwed), phpPdf(s.stats.totalPaid), phpPdf(s.stats.remaining), s.stats.status];
    });
    doc.autoTable({
      startY:y,
      head:[['Student Name','No Shoe Cover','Phone Charging','Total Charged','Total Paid','Remaining','Status']],
      body: body,
      theme:'grid',
      styles:{fontSize:8},
      headStyles:{fillColor:[30,58,95], textColor:255, fontSize:7.5},
      columnStyles:{0:{fontStyle:'bold'}},
      margin:{left:12,right:12},
      didParseCell:function(d){
        if(d.section==='body' && d.column.index===6){
          d.cell.styles.textColor = d.cell.raw==='PAID' ? [47,143,91] : [209,69,59];
          d.cell.styles.fontStyle = 'bold';
        }
      }
    });
    y = doc.lastAutoTable.finalY + 8;
    const pageW = doc.internal.pageSize.getWidth();
    doc.setFont('helvetica','bold');
    doc.setFontSize(10);
    doc.text('Overall Totals', 12, y); y+=5;
    doc.autoTable({
      startY:y,
      head:[['Total Students','Total Violations','Total Owed','Total Paid','Remaining Debt','Fully Paid']],
      body:[[studentsList.length, totalViol, phpPdf(totalOwed), phpPdf(totalPaid), phpPdf(totalRemaining), fullyPaid]],
      theme:'grid',
      styles:{fontSize:9, halign:'center'},
      headStyles:{fillColor:[242,183,5], textColor:[19,40,64]},
      margin:{left:12,right:12}
    });
  } else {
    if(studentsList.length===0){
      doc.setFontSize(11);
      doc.text('No students match this report type.', 12, y);
    }
    studentsList.forEach(s=>{
      y = pdfStudentBlock(doc, s, s.stats, y);
    });
  }

  addPageNumbers(doc);

  const stamp = new Date().toISOString().slice(0,10);
  doc.save(`G12-Aphrodite-${filename}-${stamp}.pdf`);
}

/* ============================================================
   LOADING SCREEN
=============================================================*/
window.addEventListener('load', ()=>{
  setTimeout(()=>{
    const ls = document.getElementById('loadingScreen');
    if(ls) ls.classList.add('hide');
  }, 900);
});

/* ============================================================
   NAVIGATION (smooth-scroll to sections within the single page)
=============================================================*/
const navSections = {
  navHome:     'dashboard',
  navStudents: 'studentsSection',
  navData:     'dataSection'
};
Object.keys(navSections).forEach(btnId=>{
  const btn = document.getElementById(btnId);
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    const target = document.getElementById(navSections[btnId]);
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});
// keep first nav button visually active by default
const firstNav = document.getElementById('navHome');
if(firstNav) firstNav.classList.add('active');

/* ============================================================
   MUSIC PLAYER
   Drop your own legally-obtained audio file at:
   /assets/music/i-really-want-to-stay-at-your-house.mp3
   (relative to this HTML file). Nothing plays until the user
   taps play — autoplay is intentionally disabled.
=============================================================*/
const MUSIC_KEY = 'g12AphroditeMusicPrefs';
const audioEl = document.getElementById('bgAudio');
const musicPlayer = document.getElementById('musicPlayer');
const musicToggleBtn = document.getElementById('musicToggle');
const musicVolSlider = document.getElementById('musicVol');
const musicRepeatBtn = document.getElementById('musicRepeat');
const musicMuteBtn = document.getElementById('musicMute');
const musicStatus = document.getElementById('musicStatus');
const musicCollapseRow = document.getElementById('musicTitleRow');

function loadMusicPrefs(){
  try{
    const raw = localStorage.getItem(MUSIC_KEY);
    return raw ? JSON.parse(raw) : {volume:0.6, muted:false, repeat:true, collapsed:false};
  }catch(e){ return {volume:0.6, muted:false, repeat:true, collapsed:false}; }
}
function saveMusicPrefs(p){
  localStorage.setItem(MUSIC_KEY, JSON.stringify(p));
}
let musicPrefs = loadMusicPrefs();

if(audioEl){
  audioEl.volume = musicPrefs.volume;
  audioEl.muted = musicPrefs.muted;
  audioEl.loop = musicPrefs.repeat;
  if(musicVolSlider) musicVolSlider.value = musicPrefs.volume;
  if(musicRepeatBtn) musicRepeatBtn.classList.toggle('active', musicPrefs.repeat);
  if(musicMuteBtn) musicMuteBtn.innerHTML = icon(musicPrefs.muted ? 'mute' : 'volume');
  if(musicPlayer && musicPrefs.collapsed) musicPlayer.classList.add('collapsed');

  audioEl.addEventListener('error', ()=>{
    if(musicStatus) musicStatus.textContent = 'Music file not found — add it to /assets/music/';
    if(musicToggleBtn) musicToggleBtn.disabled = true;
  });

  if(musicToggleBtn){
    musicToggleBtn.addEventListener('click', ()=>{
      if(audioEl.paused){
        audioEl.play().then(()=>{
          musicToggleBtn.innerHTML = icon('pause');
          if(musicStatus) musicStatus.textContent = 'Now playing';
        }).catch(()=>{
          if(musicStatus) musicStatus.textContent = 'Could not play — check your audio file.';
        });
      } else {
        audioEl.pause();
        musicToggleBtn.innerHTML = icon('play');
        if(musicStatus) musicStatus.textContent = 'Paused';
      }
    });
  }
  if(musicVolSlider){
    musicVolSlider.addEventListener('input', (e)=>{
      const v = parseFloat(e.target.value);
      audioEl.volume = v;
      musicPrefs.volume = v;
      saveMusicPrefs(musicPrefs);
    });
  }
  if(musicMuteBtn){
    musicMuteBtn.addEventListener('click', ()=>{
      musicPrefs.muted = !musicPrefs.muted;
      audioEl.muted = musicPrefs.muted;
      musicMuteBtn.innerHTML = icon(musicPrefs.muted ? 'mute' : 'volume');
      saveMusicPrefs(musicPrefs);
    });
  }
  if(musicRepeatBtn){
    musicRepeatBtn.addEventListener('click', ()=>{
      musicPrefs.repeat = !musicPrefs.repeat;
      audioEl.loop = musicPrefs.repeat;
      musicRepeatBtn.classList.toggle('active', musicPrefs.repeat);
      saveMusicPrefs(musicPrefs);
    });
  }
  if(musicCollapseRow){
    musicCollapseRow.addEventListener('click', ()=>{
      musicPrefs.collapsed = !musicPrefs.collapsed;
      if(musicPlayer) musicPlayer.classList.toggle('collapsed', musicPrefs.collapsed);
      saveMusicPrefs(musicPrefs);
    });
  }
}

/* ============================================================
   INIT
=============================================================*/
renderAll();

// Enable installable/offline app behavior only when actually hosted
// (http/https). Safe no-op when opened as a local file.
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(()=>{});
  });
}
