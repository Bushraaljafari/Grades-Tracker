'use strick';
let form = document.getElementById('gradeForm');

let table = document.getElementById('gradeTable');
let headerItemArry = ['Studant Name', 'Studant Grade', 'Course'];

let courseArry = [];

function Course(studantName, course) {
    this.studantName = studantName;
    this.course = course;
    //--------
    this.studantGrade = generateRandomGrade();
    courseArry.push(this);

}

Course.prototype.render = function () {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let studantNameTd = document.createElement('td');
    studantNameTd.textContent = this.studantName;
    tr.appendChild(studantNameTd);

    let courseTd = document.createElement('td');
    courseTd.textContent = this.course;
    tr.appendChild(courseTd);

    let studantGradeTd = document.createElement('td');
    studantGradeTd.textContent = this.studantGrade;
    tr.appendChild(studantGradeTd);



}

function submitter(event) {
    event.preventDefault();
    let studantName = event.target.studantName.value;
    let course = event.target.course.value;
    let newCouresItem = new Course(studantName, course);

    localStorage.setItem('grade', JSON.stringify(courseArry));
    newCouresItem.render();
}

function generateRandomGrade() {
    return Math.floor(Math.random() * (100 - 0)) + 0;
}
function renderCourses() {
    /*let tr=document.createElement('tr');
    table.appendChild(tr);*/
    for (let index = 0; index < courseArry.length; index++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let studantNameTd = document.createElement('td');
        studantNameTd.textContent = courseArry[index].studantName;
        tr.appendChild(studantNameTd);

        let courseTd = document.createElement('td');
        courseTd.textContent = courseArry[index].course;
        tr.appendChild(courseTd);

        let studantGradeTd = document.createElement('td');
        studantGradeTd.textContent = courseArry[index].studantGrade;
        tr.appendChild(studantGradeTd);

    }
}

function checkLocalStorege() {
    if (localStorage.getItem('grade')) {
        courseArry = JSON.parse(localStorage.getItem('grade'));
        renderCourses();
    }
}
function headerItem() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    for (let index = 0; index < headerItemArry.length; index++) {
        let th = document.createElement('th');
        th.textContent = headerItemArry[index];
        headerRow.appendChild(th);

    }
}
headerItem();

form.addEventListener('submit', submitter);
checkLocalStorege();