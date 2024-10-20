if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('Service Worker registered with scope:', reg.scope))
    .catch(err => console.log('Service Worker registration failed:', err));
}

// Fetch data from Google Apps Script API 
function fetchData() {
  const apiUrl = 'https://script.google.com/macros/s/AKfycby9ht0_OvXy6LIYju4T1UNoSO3uZ3g0JFpofiokiI6aWB8SzZdbZdqXn9Nm8p7x_np2-Q/exec';  // Replace with your actual URL 
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Data fetched successfully:", data);
      const dataDiv = document.getElementById('data');
      dataDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      const dataDiv = document.getElementById('data');
      dataDiv.innerHTML = '<p style="color:red;">Error fetching data. Check console for details.</p>';
    });
}

// Handle form submission
document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const city = document.getElementById('city').value;

  const apiUrl = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';  // Replace with your actual URL

  const formData = {
    name: name,
    age: age,
    city: city
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Data submitted successfully:", data);
      alert('Data submitted successfully!');
    })
    .catch(error => {
      console.error("Error submitting data:", error);
      alert('Error submitting data. Check console for details.');
    });
});
