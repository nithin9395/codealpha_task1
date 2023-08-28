let currentPage = 1;

function startSurvey() {
    currentPage = 2;
    showPage();
}

function startSurvey2() {
    currentPage = 3;
    showPage();
}

function nextPage() {
    if (currentPage < 4) {
        currentPage++;
        showPage();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage();
    }
}

function showPage() {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => page.style.display = 'none');
    pages[currentPage - 1].style.display = 'block';
    updateConfirmation();
}

function updateConfirmation() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const major = document.getElementById('major').value;
    const interests = document.getElementById('interests').value;
    const University = document.getElementById('University').value;
    const passoutyear = document.getElementById('passoutyear').value;
    const Specialization = document.getElementById('Specialization').value;
    const Aboutyou = document.getElementById('Aboutyou').value;

    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmAge').textContent = age;
    document.getElementById('confirmMajor').textContent = major;
    document.getElementById('confirmInterests').textContent = interests;
    document.getElementById('confirmUniversity').textContent = University;
    document.getElementById('confirmpassoutyear').textContent = passoutyear;
    document.getElementById('confirmSpecialization').textContent = Specialization;
    document.getElementById('confirmAboutyou').textContent = Aboutyou;

    document.getElementById('hiddenName').value = name;
    document.getElementById('hiddenAge').value = age;
    document.getElementById('hiddenMajor').value = major;
    document.getElementById('hiddenInterests').value = interests;
    document.getElementById('hiddenUniversity').value = University;
    document.getElementById('hiddenpassoutyear').value = passoutyear;
    document.getElementById('hiddenSpecialization').value = Specialization;
    document.getElementById('hiddenAboutyou').value = Aboutyou;
}

showPage();
