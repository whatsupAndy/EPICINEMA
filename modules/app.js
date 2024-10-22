function loadNavbar() {
  fetch('/components/navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
}

function navigate(){
  window.location.href = "index.html";
}

function loadFooter() {
  fetch('/components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));
}

/* function for targetting movies */
function smoothScrollTo(target){
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  loadFooter();

  const scrollLinks = document.querySelectorAll('.scroll-link');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href');
      smoothScrollTo(targetId);
    });
  });
});

/* function for loading each grid */

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
  .catch(error => console.error('Error loading MCU Grid:', error));
}

function loadHPGrid() {
  fetch('/components/hp-grid.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('hp-grid-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading MCU Grid:', error));
}

document.addEventListener('DOMContentLoaded', loadMCUGrid);
document.addEventListener('DOMContentLoaded', loadLOTRGrid);
document.addEventListener('DOMContentLoaded', loadHPGrid);


