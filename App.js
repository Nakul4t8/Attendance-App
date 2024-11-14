// Arrays to hold data
let subjects = [];
let students = [];
let timetable = [];
let attendanceRecords = [];

// Function to add a subject
function addSubject() {
    const subjectName = document.getElementById('subject-name').value;
    if (subjectName) {
        subjects.push(subjectName);
        updateSubjectSelect();
        document.getElementById('subject-name').value = '';
    }
}

// Function to add a student
function addStudent() {
    const studentName = document.getElementById('student-name').value;
    if (studentName) {
        students.push(studentName);
        updateStudentSelect();
        document.getElementById('student-name').value = '';
    }
}

// Function to add to the timetable
function addTimetable() {
    const subject = document.getElementById('subject-select').value;
    const time = document.getElementById('time').value;
    if (subject && time) {
        timetable.push({ subject, time });
        updateTimetable();
    }
}

// Function to mark attendance
function markAttendance(status) {
    const student = document.getElementById('student-select').value;
    const subject = document.getElementById('subject-select-attendance').value;
    const date = new Date().toLocaleDateString();
    if (student && subject) {
        attendanceRecords.push({ student, subject, date, status });
        updateAttendance();
    }
}

// Update Subject Select Dropdowns
function updateSubjectSelect() {
    const subjectSelect = document.getElementById('subject-select');
    const subjectSelectAttendance = document.getElementById('subject-select-attendance');
    subjectSelect.innerHTML = '';
    subjectSelectAttendance.innerHTML = '';
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
        
        const option2 = document.createElement('option');
        option2.value = subject;
        option2.textContent = subject;
        subjectSelectAttendance.appendChild(option2);
    });
}

// Update Student Select Dropdown
function updateStudentSelect() {
    const studentSelect = document.getElementById('student-select');
    studentSelect.innerHTML = '';
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student;
        option.textContent = student;
        studentSelect.appendChild(option);
    });
}

// Display Timetable
function updateTimetable() {
    const timetableList = document.getElementById('timetable-list');
    timetableList.innerHTML = '';
    timetable.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.subject} at ${item.time}`;
        timetableList.appendChild(listItem);
    });
}

// Display Attendance Records
function updateAttendance() {
    const attendanceList = document.getElementById('attendance-list');
    attendanceList.innerHTML = '';
    attendanceRecords.forEach(record => {
        const listItem = document.createElement('li');
        listItem.textContent = `${record.student} was marked ${record.status} for ${record.subject} on ${record.date}`;
        attendanceList.appendChild(listItem);
    });
}
