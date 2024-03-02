// Sample data for listings (you can replace it with your own data)
const listings = [
    { title: 'Beautiful House', price: '$250,000', description: '3 bedrooms, 2 bathrooms' },
    { title: 'Luxury Apartment', price: '$400,000', description: '2 bedrooms, 2.5 bathrooms' },
    { title: 'Cozy Cottage', price: '$150,000', description: '1 bedroom, 1 bathroom' }
];

// Function to render listings
function renderListings() {
    const listingsContainer = document.getElementById('listings');

    // Clear existing listings
    listingsContainer.innerHTML = '';

    // Loop through listings and create HTML elements
    listings.forEach(listing => {
        const listingDiv = document.createElement('div');
        listingDiv.classList.add('listing');

        const title = document.createElement('h2');
        title.textContent = listing.title;

        const price = document.createElement('p');
        price.textContent = 'Price: ' + listing.price;

        const description = document.createElement('p');
        description.textContent = 'Description: ' + listing.description;

        listingDiv.appendChild(title);
        listingDiv.appendChild(price);
        listingDiv.appendChild(description);

        listingsContainer.appendChild(listingDiv);
    });
}

// Call the renderListings function when the page loads
document.addEventListener('DOMContentLoaded', renderListings);
