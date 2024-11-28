function loadNavbar() {
  fetch('../components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));
}

function loadFooter() {
  fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}

// Smooth scroll function for links on the same page (index.html)
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}

function handleHashScroll() {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => smoothScrollTo(hash), 200);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  loadFooter();
  handleHashScroll();

  if (window.location.pathname.includes("movie-page.html")) {
    const dropdownLinks = document.querySelectorAll('.dropdown-content .scroll-link');
  
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href'); // Get the href target (e.g., "#mcu-grid-container")
        window.location.href = `../html/index.html${targetId}`; // Navigate to index.html with the hash
      });
    });
  } else {
    const scrollLinks = document.querySelectorAll('.scroll-link');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href'); // Get the href target (e.g., "#mcu-grid-container")
        smoothScrollTo(targetId); // Smooth scroll to the target section
      });
    });
  }
});

// Functions to load each grid in index.html
function loadMCUGrid() {
  fetch('/components/mcu-grid.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('mcu-grid-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading MCU Grid:', error));
}

function loadLOTRGrid() {
  fetch('/components/lotr-grid.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('lotr-grid-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading LOTR Grid:', error));
}

function loadHPGrid() {
  fetch('/components/hp-grid.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('hp-grid-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading HP Grid:', error));
}


// Function to load the seating component into movie-page.html
function loadSeatingComponent() {
  fetch('../components/seating.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('seating-component').innerHTML = data;
      initializeSeatSelection(); // Call a function to initialize seat selection functionality
    })
    .catch(error => console.error('Error loading seating component:', error));
}

// Function to handle seat selection logic
function initializeSeatSelection() {
  const seats = document.querySelectorAll('.row .seat:not(.occupied)');
  const count = document.getElementById('count');
  const total = document.getElementById('total');
  const ticketPrice = 10; // Price per seat

  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
  }

  seats.forEach(seat => {
    seat.addEventListener('click', () => {
      seat.classList.toggle('selected');
      updateSelectedCount();
    });
  });

  updateSelectedCount(); // Initial count update
}

function buyTickets(){
  window.location.href = "../html/tickets.html";
}

// Load the seating component when the page is ready
document.addEventListener('DOMContentLoaded', loadSeatingComponent);

// Load grids when DOM content is fully loaded on index.html
document.addEventListener('DOMContentLoaded', loadMCUGrid);
document.addEventListener('DOMContentLoaded', loadLOTRGrid);
document.addEventListener('DOMContentLoaded', loadHPGrid);


