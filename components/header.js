// ── Shared header ─────────────────────────────────────────
// ใช้ใน HTML: <script src="../../components/header.js"></script>
// แล้วเรียก: renderHeader('Page Title', 'me')

function renderHeader(title, activeNav) {
  const roles = ['MD','Head of BSA','Function Head','RC Director','RM','AM','SM','Asst SM'];
  document.getElementById('whoop-header').innerHTML = `
    <div style="background:white;border-bottom:0.5px solid #E2E8F0;padding:0 24px;height:52px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100">
      <div style="display:flex;align-items:center;gap:16px">
        <span style="font-size:18px;font-weight:700;color:#1C2B4A">Whoop</span>
        <span style="color:#94A3B8;font-size:13px">${title}</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        <span style="display:flex;align-items:center;gap:6px;font-size:12px;color:#0D9488">
          <span style="width:8px;height:8px;background:#16A34A;border-radius:50%;display:inline-block"></span>LIVE
        </span>
        <span style="font-size:12px;color:#94A3B8;font-family:'JetBrains Mono',monospace" id="clock"></span>
        <select id="role-selector" style="font-size:12px;border:0.5px solid #E2E8F0;border-radius:6px;padding:4px 8px">
          ${roles.map(r => `<option>${r}</option>`).join('')}
        </select>
      </div>
    </div>`;
  setInterval(() => {
    const d = new Date();
    document.getElementById('clock').textContent = d.toLocaleTimeString('th-TH');
  }, 1000);
}
