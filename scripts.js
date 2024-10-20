if ('serviceWorker' in navigator) {
  // Register the service worker hosted on the same origin (GitHub Pages)
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('Service Worker registered with scope:', reg.scope))
    .catch(err => console.log('Service Worker registration failed:', err));
}

function fetchData() {
  // Replace with your Google Apps Script Web App URL
  const apiUrl = 'https://script.google.com/macros/s/AKfycby9ht0_OvXy6LIYju4T1UNoSO3uZ3g0JFpofiokiI6aWB8SzZdbZdqXn9Nm8p7x_np2-Q/exec';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Display the fetched data in the 'data' div
      const dataDiv = document.getElementById('data');
      dataDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function saveData() {
  console.log("Saving data is not implemented yet.");
}
