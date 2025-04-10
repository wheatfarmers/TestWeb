const listingSection = document.querySelector('.listings-section');

db.collection("listings").get().then((listings) => {
    listings.forEach(listing => {
        if(listing.id != decodeURI(location.pathname.split("/").pop())){
            createlisting(listing);
        }
    })
})

const createlisting = (listing) => {
    let data = listing.data();
    listingSection.innerHTML += `
    <div class="listing-card">
        <img src="${data.bannerImage}" class="listing-image" alt="">
        <h1 class="listing-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="listing-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${listing.id}" class="btn dark">read</a>
    </div>
    `;
}