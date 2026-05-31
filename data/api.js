// ============================================================
// data/api.js — ไฟล์กลาง ทุกหน้าดึงข้อมูลผ่านที่นี่เท่านั้น
// แก้ไข URL ที่นี่ที่เดียว ทุกหน้าอัปเดตอัตโนมัติ
// ============================================================

const SHEETS = {
  // Identity
  users:            '', // ใส่ Google Sheet CSV URL
  // Commercial
  sales_kpi:        '',
  sku_alerts:       '',
  promotions:       '',
  new_product:      '',
  clearance:        '',
  // Operations
  store_kpi:        '',
  store_incidents:  '',
  staff_roster:     '',
  cs_tickets:       '',
  lpic_audit:       '',
  // Expansion
  site_pipeline:    '',
  lease_negotiation:'',
  construction:     '',
  // Supply Chain
  stock_level:      '',
  supplier_perf:    '',
  // Backbone
  headcount_budget: '',
  nsa_checklist:    '',
};

// ── helpers ──────────────────────────────────────────────
async function fetchSheet(url) {
  if (!url) return { error: 'Sheet URL ยังไม่ได้ตั้งค่า — แจ้ง Data Mapper' };
  try {
    const res = await fetch(url);
    const csv = await res.text();
    return parseCSV(csv);
  } catch (e) {
    return { error: 'ดึงข้อมูลไม่ได้: ' + e.message };
  }
}

function parseCSV(csv) {
  const rows = csv.trim().split('\n').map(r => r.split(',').map(c => c.trim().replace(/^"|"$/g, '')));
  const headers = rows[0];
  return rows.slice(1).map(row => Object.fromEntries(headers.map((h, i) => [h, row[i] || ''])));
}

// ── Public API ────────────────────────────────────────────
// ทุกหน้าเรียกผ่าน function เหล่านี้เท่านั้น

async function getUserList()        { return fetchSheet(SHEETS.users); }
async function getSalesKPI()        { return fetchSheet(SHEETS.sales_kpi); }
async function getSKUAlerts()       { return fetchSheet(SHEETS.sku_alerts); }
async function getPromotions()      { return fetchSheet(SHEETS.promotions); }
async function getNewProduct()      { return fetchSheet(SHEETS.new_product); }
async function getClearance()       { return fetchSheet(SHEETS.clearance); }
async function getStoreKPI()        { return fetchSheet(SHEETS.store_kpi); }
async function getStoreIncidents()  { return fetchSheet(SHEETS.store_incidents); }
async function getStaffRoster()     { return fetchSheet(SHEETS.staff_roster); }
async function getCSTickets()       { return fetchSheet(SHEETS.cs_tickets); }
async function getLPICAudit()       { return fetchSheet(SHEETS.lpic_audit); }
async function getSitePipeline()    { return fetchSheet(SHEETS.site_pipeline); }
async function getLeaseNegotiation(){ return fetchSheet(SHEETS.lease_negotiation); }
async function getConstruction()    { return fetchSheet(SHEETS.construction); }
async function getStockLevel()      { return fetchSheet(SHEETS.stock_level); }
async function getSupplierPerf()    { return fetchSheet(SHEETS.supplier_perf); }
async function getHeadcount()       { return fetchSheet(SHEETS.headcount_budget); }
async function getNSAChecklist()    { return fetchSheet(SHEETS.nsa_checklist); }
