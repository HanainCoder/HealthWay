const availability = {
    'Dr Suleman Bashir':{
        '2024-06-20': ['09:00', '10:00', '11:00'],
        '2024-06-21': ['10:00', '11:00', '14:00']
    },
    'Dr Suleman Azeemi':{
        '2024-06-20': ['10:00', '13:00', '15:00'],
        '2024-06-22': ['09:00', '10:00', '11:00']
    },
    'Dr Sherazi':{
    '2024-06-23': ['12:00', '13:00', '14:00'],
    '2024-06-24': ['09:00', '10:00', '11:00']
    },
    'Dr Adil Abbas':{
     '2024-06-22': ['12:00', '14:00', '16:00'],
    '2024-06-26': ['10:00', '11:00', '14:00']
    },
    'Dr Adeela Zafar':{
        '2024-06-17': ['10:00', '12:00', '14:00'],
    '2024-06-18': ['08:00', '10:00', '12:00']
    },
    'Dr Javed Bashir':{
     '2024-06-20': ['12:00', '13:00', '14:00'],
    '2024-06-22': ['10:00', '12:00', '13:00']
    },
};
function loadAvaialbleDates(){
    const doctor = document.getElementById('doctor').value;
    const dateSelect = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    dateSelect.innerHTML = '<option value="">Select a date</option>';
    timeSelect.innerHTML = '<option value="">Select a time</option>';
    timeSelect.disabled = true;

    if (doctor && availability[doctor]) {
        const dates = Object.keys(availability[doctor]);
        dates.forEach(date => {
            const option = document.createElement('option');
            option.value = date;
            option.textContent = date;
            dateSelect.appendChild(option);
        });
        dateSelect.disabled = false;
    } else {
        dateSelect.disabled = true;
    }
}
function loadAvailableTimes(){
    const doctor = document.getElementById('doctor').value;
            const date = document.getElementById('date').value;
            const timeSelect = document.getElementById('time');

            // Clear previous options
            timeSelect.innerHTML = '<option value="">Select a time</option>';

            if (doctor && date && availability[doctor] && availability[doctor][date]) {
                const times = availability[doctor][date];
                times.forEach(time => {
                    const option = document.createElement('option');
                    option.value = time;
                    option.textContent = time;
                    timeSelect.appendChild(option);
                });
                timeSelect.disabled = false;
            } else {
                timeSelect.disabled = true;
            }
}
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
});