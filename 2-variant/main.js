function saveFormData() {
    const full__name = document.getElementById("full__name").value;
    const course__value = document.getElementById("course__value").value;

    // LocalStorage-ga saqlash
    localStorage.setItem("full-name", full__name);
    localStorage.setItem("course", course__value);

    // Ikkinchi sahifaga o'tish
    window.location.href = "sertifikat.html";
}

function displayCertificateData() {
    const name = localStorage.getItem("full-name");
    const course = localStorage.getItem("course");

    if (name && course) {
        document.getElementById("user__name").innerText = `${name}`;
        document.getElementById("course").innerText = `“${course}”`;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (document.getElementById('mainForm')) {
        
    } else if (document.getElementById('user__name')) {
        displayCertificateData();
    }
});

document.getElementById('downloadBtn').addEventListener('click', async function () {
    



    const { jsPDF } = window.jspdf;
    const content = document.getElementById('content');


    const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true
    });
    const imgData = canvas.toDataURL('image/png');

    // PDF yaratish
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }


    pdf.save('42UZ-sertifikat.pdf');
});


