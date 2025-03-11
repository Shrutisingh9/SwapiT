document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("userLoggedIn");

    if (!isLoggedIn) {
        alert("You must be logged in to swap items.");
        window.location.href = "login.html"; // Redirect to login page
    }

    // Handle form submission
    document.getElementById("swapForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const itemName = document.getElementById("itemName").value;
        const itemDescription = document.getElementById("itemDescription").value;
        const itemImage = document.getElementById("itemImage").files[0];
        const swapPreference = document.getElementById("swapPreference").value;
        const statusMessage = document.getElementById("statusMessage");

        if (itemImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const itemData = {
                    name: itemName,
                    description: itemDescription,
                    image: e.target.result,
                    preference: swapPreference
                };

                // Store the item (In a real app, send this data to a backend server)
                localStorage.setItem("swapItem", JSON.stringify(itemData));
                statusMessage.style.color = "green";
                statusMessage.textContent = "Item submitted successfully!";
            };
            reader.readAsDataURL(itemImage);
        } else {
            statusMessage.textContent = "Please upload an image.";
        }
    });
});
