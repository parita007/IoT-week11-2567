document.addEventListener("DOMContentLoaded", function() {
    // จำนวนหิมะที่ตก
    var numberOfSnowflakes = 50;
    
    // ฟังก์ชั่นสำหรับสร้างหิมะ
    for (var i = 0; i < numberOfSnowflakes; i++) {
        var snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // การสุ่มตั้งค่า
        snowflake.style.left = Math.random() * 100 + "vw"; // ตำแหน่งแนวนอน
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // ระยะเวลาการเคลื่อนที่
        snowflake.style.animationDelay = Math.random() * 5 + "s"; // ความล่าช้าก่อนเริ่มเคลื่อนที่

        // สร้างตัวอักษรหิมะ
        snowflake.innerHTML = "❄"; // สัญลักษณ์หิมะ

        // เพิ่มหิมะลงใน body
        document.body.appendChild(snowflake);
    }
});