function showGallery(category) {
    const galleryContent = document.getElementById('gallery-content');
    galleryContent.innerHTML = '';
    
    const images = {
        street: ['street1.jpg'],  // Add all your street images here
        landscape: ['landscape1.jpg']  // Add all your landscape images here
    };

    images[category].forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${category}/${image}`;
        galleryContent.appendChild(imgElement);
    });
}
