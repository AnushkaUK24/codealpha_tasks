function age() {
    // Get user input values
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    // Check for empty input
    if (!d1 || !m1 || !y1) {
        alert("Please enter valid date, month, and year");
        return;
    }

    // Parse the input values as integers
    d1 = parseInt(d1, 10);
    m1 = parseInt(m1, 10);
    y1 = parseInt(y1, 10);

    // Get current date
    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth() + 1; // Months are zero-based
    var y2 = date.getFullYear();

    // Array for the number of days in each month
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Leap year check
    if ((y2 % 4 === 0 && y2 % 100 !== 0) || (y2 % 400 === 0)) {
        month[1] = 29;
    }

    // Adjustments for day and month differences
    if (d1 > d2) {
        d2 += month[m2 - 1];
        m2 -= 1;
    }

    if (m1 > m2) {
        m2 += 12;
        y2 -= 1;
    }

    // Calculate the differences
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    // Display the result
    document.querySelector('.age').innerHTML = 'Your age : ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}
