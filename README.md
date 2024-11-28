EpiCinema (Epic Cinema) web application


EpiCinema is a modern web application built for a cinema platform. It allows users to browse fantasy movies, view trailers, choose seats, and access tickets with QR codes for a seamless cinema experience. This project is designed to enhance the online movie ticketing experience with an engaging and interactive UI. 



TABLE OF CONTENTS

- Features
- Teck Stack
- Project Structure
- Installation and setup
- Usage
- Future improvements


FEATURES

Movie selection and details

- Movie Lists: Organized by categories (e.g., MCU, LOTR, HP) with easy navigation.
- Movie Trailers: Embedded YouTube trailers on individual pages.
- Detailed Movie Info: Description, producer, actors, and director details.

SEAT SELECTION

- Interactive Seating: Users can select their seats in an intuitive interface.
- Real-time Count and Price Calculation: Displays the number of seats selected and the total price.

TICKET PURCHASE AND QR CODE

- QR Code Generation: Upon purchasing, users are taken to a ticket page with QR code display for easy access at the cinema.

RESPONSIVE DESIGN

- Dynamic Layouts: Designed to be fully responsive and accessible on various screen sizes and devices.

TECK STACK

- HTML5/CSS3: For structure and styling.
- JavaScript (ES6+): Core functionality and interactivity.
- Fetch API: For loading navbar, footer, grids, and seating components dynamically.
- QR Code Generation: (e.g., a JavaScript library for generating QR codes)

PROJECT STRUCTURE

        /epicinema
        ├── /assets
        ├── /css
        │   └── style.css             # Main CSS file for styling the website
        ├── /components
        │   ├── navbar.html           # Navbar component
        │   ├── footer.html           # Footer component
        │   ├── mcu-grid.html         # MCU movies grid
        │   ├── lotr-grid.html        # LOTR movies grid
        │   ├── hp-grid.html          # Harry Potter movies grid
        │   └── seating.html          # Seat selection component
        ├── /html
        │   ├── index.html            # Main page
        │   ├── movie-page.html       # Selected movie page with trailer and seat selection
        │   ├── tickets.html          # Tickets
        └── /modules
            ├── app.js                # Core functionality (loading components, seat selection, navigation)
            ├── movies.js             # Movie data and trailer links
            ├── ticket.js             # Tickets

INSTALLATION AND SETUP

1. CLONE THE REPOSITORY: 
- git clone https://github.com/your-username/epicinema.git

2. OPEN IN BROWSER: 
- Navigate to the index.html file and open it in your preferred web browser.

NOTE: No additional setup is required, as the project runs locally with HTML, CSS, and JavaScript.


USAGE

1. NAVIGATING THE MOVIES
From the homepage, users can browse different movie categories, click on a movie to view details, watch trailers, and proceed to seat selection.

2. SEAT SELECTION
After selecting a movie, users are directed to the seat selection page.
Available seats can be selected, and the interface displays the selected seat count and total cost.
Click Continue to Payment to finalize seat selection.

3. VIEWING AND USING TICKETS
After purchasing, users are navigated to the tickets.html page where a QR code is displayed.
This QR code serves as the ticket for entry.

CODE SNIPPET FOR LOADING COMPONENTS
To dynamically load components like the navbar, footer, or grids, app.js uses the Fetch API. Here’s a sample:

        function loadNavbar() {
        fetch('/components/navbar.html')
            .then(response => response.text())
            .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
        }


FUTURE IMPROVEMENTS
- Database Integration: Store movies, seat selections, and user tickets in a database.
- User Authentication: Allow users to create accounts, save ticket purchases, and view order history.
- Payment Gateway Integration: Add real payment options for purchasing tickets.
- QR Code Scanning: Implement QR code scanning functionality on the cinema's side for ticket verification.
