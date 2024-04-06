// clearLocalStorage.js

const fs = require('fs');

// Create a dummy HTML file to run JavaScript code in the browser
fs.writeFileSync('temp.html', `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Clear Local Storage</title>
<script>
    // Clear local storage
    localStorage.clear();
    // Redirect to a blank page
    window.location.href = 'about:blank';
</script>
</head>
<body>
</body>
</html>
`);

console.log('Local storage cleared.');
