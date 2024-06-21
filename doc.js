document.getElementById('addDoctor').addEventListener('submit', function(event) {
    event.preventDefault();

    const doctorData = {
        name: document.getElementById('doctorName').value,
        specialty: document.getElementById('speciality').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        weekdays: Array.from(document.querySelectorAll('input[name="weekDays"]:checked')).map(el => el.value),
        timeSlots: document.getElementById('timeSlots').value
};

if (data.success) {
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Reset the form
    document.getElementById('addDoctor').reset();

    // Hide the success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
} else {
    alert('Error adding doctor.');
}
})
.catch(error => {
console.error('Error:', error);

});
