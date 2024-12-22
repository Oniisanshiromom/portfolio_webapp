const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});

// Get all portfolio cards
const portfolioCards = document.querySelectorAll('.port-card');

// Modal elements
const modal = document.getElementById('portfolio-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Images for the slideshow (customize for each card)
const imageSets = [
    ['./project community design/ขึ้น.png','./project community design/ชั้น2.2.png','./project community design/ทางเข้า1.png','./project community design/สวนลับ2.3.png','./project community design/หน้าตึก2.png','./project community design/หน้าร้าน.png','./project community design/หน้าร้านเปิดประตู2.png'], // Card 1 images
    ['./project dental clinic/ขึ้น.png', './project dental clinic/consult.png', './project dental clinic/hall way.png', './project dental clinic/treatment3.png', './project dental clinic/treatment4.png', './project dental clinic/ไฟระรืเ.png'], // Card 2 images
    ['./project health care/ขึ้น.png', './project health care/exam room.png', './project health care/เข้า.png', './project health care/จิตรเวช.png', './project health care/นอก.png', './project health care/บำบัด.png', './project health care/บำบัดกลุ่ม.png', './project health care/พักเจาะเลือด.png', './project health care/รับยา.png', './project health care/iso.png'], // Card 3 images
    ['./project kiosk design/ขึ้น.png', './project kiosk design/2.png', './project kiosk design/1.3.png', './project kiosk design/1.36.png'],
    ['./project museum/ขึ้น.png', './project museum/A2.png', './project museum/B3.png', './project museum/C.png', './project museum/C4.png', './project museum/LOBBY2.png', './project museum/shop.png'],
    ['./project retail design/house1.png', './project retail design/house2.png', './project retail design/house3.png', './project retail design/house4.png'],
    // Add more sets as needed
];

let currentCardIndex = 0;
let currentImageIndex = 0;

// Open modal and show the first image
function openModal(cardIndex) {
    currentCardIndex = cardIndex;
    currentImageIndex = 0;
    modalImage.src = imageSets[cardIndex][currentImageIndex];
    modal.classList.remove('hidden');
}

// Close modal
function closeModal() {
    modal.classList.add('hidden');
}

// Show previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageSets[currentCardIndex].length) % imageSets[currentCardIndex].length;
    modalImage.src = imageSets[currentCardIndex][currentImageIndex];
}

// Show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSets[currentCardIndex].length;
    modalImage.src = imageSets[currentCardIndex][currentImageIndex];
}

// Add click events to portfolio cards
portfolioCards.forEach((card, index) => {
    card.addEventListener('click', () => openModal(index));
});

// Add click events to modal controls
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Close modal on outside click
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
