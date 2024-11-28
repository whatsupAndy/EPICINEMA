const params = new URLSearchParams(window.location.search);

const ticketInfo = {
    movieTitle: params.get("title") || "Not selected",
    showtime: params.get("showtime") || "Not selected",
    seats: params.get("seats") ? params.get("seats").split(",") : [],
};

if (!params.get("title") || !params.get("showtime") || !params.get("seats")) {
    alert("Invalid ticket details. Please go back and select your tickets.");
    window.location.href = "index.html";
}

const ticketPrice = 10;
const totalPrice = ticketInfo.seats.length * ticketPrice;

document.getElementById("ticket-movie-title").textContent = ticketInfo.movieTitle;
document.getElementById("ticket-showtime").textContent = ticketInfo.showtime;
document.getElementById("ticket-movie-seats").textContent = ticketInfo.seats.length > 0 ? ticketInfo.seats.join(", ") : "No seats selected";
document.getElementById("ticket-price").textContent = `$${totalPrice}`;

function generateQRCode() {
    const qrCodeContainer = document.getElementById("qrcode");
    const qrCodeData = `Movie: ${ticketInfo.movieTitle} | Showtime: ${ticketInfo.showtime} | Seats: ${ticketInfo.seats.length > 0 ? ticketInfo.seats.join(", ") : "No seats selected"} | Total Price: $${totalPrice}`;

    if (qrCodeContainer) {
        qrCodeContainer.innerHTML = ""; // Clear existing QR code
        new QRCode(qrCodeContainer, {
            text: qrCodeData,
            width: 128,
            height: 128,
        });
    } else {
        console.error("QR Code container not found.");
    }
}

document.addEventListener("DOMContentLoaded", generateQRCode);
