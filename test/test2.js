// Ma'lumotlarni saqlash funksiyasi
function saveFormData() {
    const full__name = document.getElementById("full__name").value;
    const course__value = document.getElementById("course__value").value;

    // LocalStorage-ga saqlash
    localStorage.setItem("full-name", full__name);
    localStorage.setItem("course", course__value);

    // Ikkinchi sahifaga o'tish
    window.location.href = "test2.html";
}

// Ma'lumotlarni ko'rsatish funksiyasi
function displayCertificateData() {
    const name = localStorage.getItem("full-name");
    const course = localStorage.getItem("course");

    if (name && course) {
        document.getElementById("user__name").innerText = `Ismingiz: ${name}`;
        document.getElementById("course").innerText = `Kurs nomi: ${course}`;
    }
}

// Sahifa yuklanganda qaysi sahifada ekanligini aniqlash
document.addEventListener('DOMContentLoaded', (event) => {
    if (document.getElementById('mainForm')) {
        
    } else if (document.getElementById('user__name')) {
        displayCertificateData();
    }
});
