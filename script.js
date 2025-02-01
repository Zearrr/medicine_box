
// JavaScript สำหรับการสลับระหว่างโหมดกลางคืนและกลางวัน
const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', function() {
    if (themeSwitch.checked) {
        document.body.classList.remove('day-mode');
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
        document.body.classList.add('day-mode');
    }
});

// ตั้งค่าค่าเริ่มต้นของโหมด (เช่น โหมดกลางวัน)
if (!themeSwitch.checked) {
    document.body.classList.add('day-mode');
}


window.addEventListener("load", function () {
    document.querySelector(".menu").classList.add("show");
});
