document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if the fields are filled
    if (name && email) {
        // Optionally, you can store or process the data here

        // Redirect to your Telegram channel
        window.location.href = 'https://t.me/+Jbuaq9YFuSc2MDM0'; // Replace with your actual Telegram channel link

        // Optionally, provide a download link to the material
        const downloadLink = document.createElement('a');
        downloadLink.href = 'path/to/your/material.pdf'; // Replace with the actual path to your downloadable material
        downloadLink.download = 'YourMaterial.pdf'; // Provide a default name for the downloaded file
        document.body.appendChild(downloadLink);
        downloadLink.click(); // Programmatically click the link to trigger the download
        document.body.removeChild(downloadLink); // Remove the link after triggering download
    } else {
        // Display an error message if fields are empty
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Please fill in both fields.';
        formMessage.style.color = 'red'; // Optional: Change color to red for visibility
    }
});