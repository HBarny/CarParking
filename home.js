document.getElementById('nextButton').addEventListener('click', function() {
    // Get form data
    const formData = {
      startDate: document.getElementById('startDate').value,
      endDate: document.getElementById('endDate').value,
      startTime: document.getElementById('startTime').value,
      endTime: document.getElementById('endTime').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      idNumber: document.getElementById('idNumber').value,
      carRegistration: document.getElementById('carRegistration').value,
      carMake: document.getElementById('carMake').value
    };
  
    // Send form data to the server
    fetch('http://localhost:3000/Book-Page/Book.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        // Redirect or show success message as needed
      } else {
        console.error('Error submitting form');
        // Handle error response
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle network error
    });
  });
  