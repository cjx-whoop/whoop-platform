# คู่มือ Build สำหรับ Whoop Builder

## เริ่มต้น (ทำครั้งเดียว)

1. กด Accept invite จาก GitHub ในอีเมล
2. ไปที่ github.com/[org]/whoop-platform
3. กดปุ่ม **Code** → Download ZIP → แตกไฟล์
4. เปิด folder ด้วย VS Code (download ฟรีที่ code.visualstudio.com)

## วิธี Build หน้าของตัวเอง

1. เปิดไฟล์ที่ได้รับ assign เช่น `pages/overview/me.html`
2. หา comment `<!-- ✏️ BUILD ด้านล่างนี้ -->`
3. เพิ่ม HTML ลงไปใต้ comment นั้น
4. เปิด browser แล้วลาก html file เข้าไป — ดูผลได้ทันที

## วิธีดึงข้อมูลจาก Google Sheet

```javascript
// ตัวอย่าง: ดึง SKU alerts มาแสดง
const alerts = await getSKUAlerts();
console.log(alerts); // ดู structure ของข้อมูล
```

## กฎสำคัญ

- ดึงข้อมูลผ่าน `data/api.js` เท่านั้น
- ไม่แตะไฟล์ของ Builder คนอื่น
- ทดสอบใน browser ก่อนส่ง Reviewer ทุกครั้ง
- ถ้าติดปัญหา — คุยกับ Claude แล้ว paste code ที่ได้ลงไป

## วิธีส่งงาน (อัปโหลดขึ้น GitHub)

1. ไปที่ github.com/[org]/whoop-platform
2. กดไปที่ไฟล์ที่แก้ไข
3. กดปุ่มดินสอ (Edit) → วาง code ใหม่
4. กด **Commit changes** → ใส่ข้อความว่าแก้อะไร
5. Netlify จะ deploy ให้อัตโนมัติภายใน 1-2 นาที
