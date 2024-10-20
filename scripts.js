if ('serviceWorker' in navigator) {
  // Register the service worker hosted on the same origin (GitHub Pages)
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('Service Worker registered with scope:', reg.scope))
    .catch(err => console.log('Service Worker registration failed:', err));
}

function fetchData() {
  // Add your data fetching logic here
  console.log("Fetching data...");
}

function saveData() {
  // Add your data saving logic here
  console.log("Saving data...");
}
