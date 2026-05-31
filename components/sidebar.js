// ── Shared sidebar ────────────────────────────────────────
// เรียก renderSidebar(currentPage) ใน HTML

const NAV = [
  { id:'me',    label:'Me',              path:'../../pages/overview/me.html' },
  { id:'team',  label:'Team',            path:'../../pages/overview/team.html' },
  { id:'tower', label:'Business Control',path:'../../pages/overview/business-control.html' },
  { type:'section', label:'EXPANSION' },
  { id:'site-expansion',   label:'Site Expansion',   path:'../../pages/expansion/site-expansion.html' },
  { id:'site-negotiation', label:'Site Negotiation', path:'../../pages/expansion/site-negotiation.html' },
  { id:'construction',     label:'Construction',     path:'../../pages/expansion/construction.html' },
  { type:'section', label:'OPERATION' },
  { id:'store-ops',        label:'Store Operations', path:'../../pages/operation/store-ops.html' },
  { id:'store-tower',      label:'Store Control Tower',path:'../../pages/operation/store-tower.html' },
  { id:'oper-hr',          label:'Oper HR',          path:'../../pages/operation/oper-hr.html' },
  { id:'cs',               label:'CS',               path:'../../pages/operation/cs.html' },
  { id:'lpic',             label:'LPIC',             path:'../../pages/operation/lpic.html' },
  { type:'section', label:'SALES & SUPPLY' },
  { id:'commercial',       label:'Commercial',       path:'../../pages/sales/commercial.html' },
  { id:'supply-chain',     label:'Supply Chain',     path:'../../pages/sales/supply-chain.html' },
  { type:'section', label:'ACTIVITIES' },
  { id:'nsa',              label:'NSA',              path:'../../pages/activities/nsa.html' },
  { id:'store-partnership',label:'Store Partnership',path:'../../pages/activities/store-partnership.html' },
  { id:'marketing',        label:'Marketing',        path:'../../pages/activities/marketing.html' },
  { type:'section', label:'BACKBONE' },
  { id:'af',               label:'A&F',              path:'../../pages/backbone/af.html' },
  { id:'sp',               label:'S&P',              path:'../../pages/backbone/sp.html' },
  { id:'people',           label:'People',           path:'../../pages/backbone/people.html' },
  { id:'legal',            label:'Legal',            path:'../../pages/backbone/legal.html' },
  { type:'section', label:'TECHNOLOGY' },
  { id:'tech',             label:'Tech',             path:'../../pages/technology/tech.html' },
  { id:'it-support',       label:'IT Support',       path:'../../pages/technology/it-support.html' },
];

function renderSidebar(currentPage) {
  const items = NAV.map(n => {
    if (n.type === 'section') return `<div style="padding:12px 16px 4px;font-size:10px;font-weight:600;color:#94A3B8;letter-spacing:.08em">${n.label}</div>`;
    const active = n.id === currentPage;
    return `<a href="${n.path}" style="display:block;padding:7px 16px;font-size:13px;color:${active?'#0D9488':'#475569'};background:${active?'#CCFBF1':'transparent'};border-left:${active?'2px solid #0D9488':'2px solid transparent'};text-decoration:none;font-weight:${active?'600':'400'}">${n.label}</a>`;
  }).join('');
  document.getElementById('whoop-sidebar').innerHTML = `
    <div style="width:200px;height:100vh;background:white;border-right:0.5px solid #E2E8F0;overflow-y:auto;flex-shrink:0;padding:8px 0">
      ${items}
    </div>`;
}
