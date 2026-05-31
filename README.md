# Whoop Platform — CJX Internal Operating System

## Structure
- `pages/` — แต่ละหน้าของ app แยกตาม function
- `components/` — shared components ที่ทุกหน้าใช้ร่วมกัน
- `data/` — api.js ไฟล์กลาง ทุกหน้าดึงข้อมูลผ่านที่นี่
- `assets/` — รูปภาพ, icons, fonts

## Rules (อ่านก่อน build)
1. ทุกหน้าต้อง import data ผ่าน `data/api.js` เท่านั้น — ห้าม fetch Sheet URL ตรงๆ
2. ไฟล์ของแต่ละคนอยู่ใน folder ตัวเอง — ไม่แตะ folder คนอื่น
3. แก้ `data/api.js` ต้องแจ้ง Tech Admin ก่อนทุกครั้ง
4. ทดสอบใน browser ก่อน push ทุกครั้ง

## Page Assignment
| Builder | หน้าที่รับผิดชอบ |
|---|---|
| Builder 1 (Commercial) | Me, Business Control Tower, Team & People, Commercial — SKU Daily Pulse |
| Builder 2 (Commercial) | Commercial — Sales Performance, Promotions, New Product, Underperforming |
| Builder 3 (Commercial) | Commercial — Sales Mix, Clearance, SRD, Supply Chain |
| Builder 4 (Data) | Store Operations, Store Control Tower, Oper HR, CS |
| Builder 5 (Data) | LPIC, Site Expansion, Site Negotiation, Construction |

## Tech Stack
- Frontend: HTML + CSS + JS (Phase 1)
- Hosting: Netlify
- Data: Google Sheet → api.js
- Auth: Supabase (Phase 1 — Tech Admin setup)
