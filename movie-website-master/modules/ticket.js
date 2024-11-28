const ticketInfo = {
    movieTitle: "",
    showtime: "",
    seats: [],
};

document.getElementById("ticket-movie-title").textContent = ticketInfo.movieTitle;
document.getElementById("ticket-showtime").textContent = ticketInfo.movietime;
document.getElementById("ticket-movie-seats").textContent = ticketInfo.movieSeats.join("");

function generateQRCode() {
    const qrCodeContainer = document.getElementById("qrcode");
    const qrCodeData = `${ticketInfo.movieTitle} | Showtime: ${ticketInfo.showtime} | Seats: ${ticketInfo.seats.join(", ")}`;

    qrCodeContainer.innerHTML = "";

    new qrCodeContainer(qrCodeContainer, {
        text: qrCodeData,
        width: 128,
        height: 128,
    });
}

document.addEventListener("DOMContentLoaded", generateQRCode);