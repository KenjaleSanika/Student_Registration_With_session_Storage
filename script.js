// Function to save data to session storage
function saveToSession() {
    const studentName = document.getElementById('name').value;
    const studentGender = document.getElementById('gender').value;
    const studentDOB = document.getElementById('dob').value;
    const studentAddress = document.getElementById('address').value;
    const studentPhone = document.getElementById('phone').value;
    const studentEmail = document.getElementById('email').value;

    const studentData = {
        name: studentName,
        gender: studentGender,
        dob: studentDOB,
        address: studentAddress,
        phone: studentPhone,
        email: studentEmail
    };

    sessionStorage.setItem('studentData', JSON.stringify(studentData));
    alert('Data saved to session storage');
}

// Function to retrieve data from session storage
function retrieveFromSession() {
    const studentData = JSON.parse(sessionStorage.getItem('studentData'));
    const output = document.getElementById('output');

    if (studentData) {
        output.textContent = `Name: ${studentData.name}, Gender: ${studentData.gender}, DOB: ${studentData.dob}, Address: ${studentData.address}, Phone: ${studentData.phone}, Email: ${studentData.email}`;
    } else {
        output.textContent = 'No data in session storage';
    }
}

// Function to clear session storage
function clearSession() {
    sessionStorage.clear();
    alert('Session storage cleared');
    document.getElementById('output').textContent = '';
}
