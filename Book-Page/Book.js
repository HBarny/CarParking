document.getElementById('nextButton').addEventListener('click', function() {
  var startDate = document.getElementById('startDate').value;
  var endDate = document.getElementById('endDate').value;
  var startTime = document.getElementById('startTime').value;
  var endTime = document.getElementById('endTime').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var idNumber = document.getElementById('idNumber').value;
  var carRegistration = document.getElementById('carRegistration').value;
  var carMake = document.getElementById('carMake').value;
  
  // Validate input
  if (!startDate || !endDate || !startTime || !endTime || !firstName || !lastName || !idNumber || !carRegistration || !carMake) {
      alert("Please fill in all fields.");
      return;
  }
  
  // Validate date and time jdndjdsdnq j
  var startDateTime = new Date(startDate + "T" + startTime);
  var endDateTime = new Date(endDate + "T" + endTime);
  if (startDateTime >= endDateTime) {
      alert("End date/time must be after start date/time.");
      return;
  }

  // Calculate total hours and price
  var totalHours = calculateHours(startDateTime, endDateTime);
  var totalPrice = totalHours * 5; // Assuming 5DH per hour

  // Store booking details in local storage (for demonstration purposes)
  var bookingDetails = {
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
      firstName: firstName,
      lastName: lastName,
      idNumber: idNumber,
      carRegistration: carRegistration,
      carMake: carMake,
      totalHours: totalHours,
      totalPrice: totalPrice
  };
  localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

  // Navigate to the receipt page
  window.location.href = '../Recept-Web/Recept.html';
});

function calculateHours(startDateTime, endDateTime) {
  var timeDiff = endDateTime - startDateTime;
  var hours = Math.ceil(timeDiff / (1000 * 60 * 60)); // Convert milliseconds to hours and round up
  return hours;
}
