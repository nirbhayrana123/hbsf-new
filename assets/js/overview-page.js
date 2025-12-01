// GSAP Animation for India Map - Auto-play on page load
gsap.registerPlugin(ScrollTrigger);

// Wait for page to load
window.addEventListener('load', function() {
  const mapContainer = document.querySelector('.overview-page .col-12');
  const mapImage = document.querySelector('.overview-page .map-img');

  if (mapContainer && mapImage) {
    // Remove any existing hover event listeners
    mapImage.onmouseenter = null;
    mapImage.onmouseleave = null;
    mapContainer.onmouseenter = null;
    mapContainer.onmouseleave = null;

    // Create a wrapper div for overlay effect
    const mapWrapper = document.createElement('div');
    mapWrapper.style.position = 'relative';
    mapWrapper.style.display = 'inline-block';
    mapWrapper.style.cursor = 'default'; // Ensure no hover cursor
    
    // Wrap the image
    mapImage.parentNode.insertBefore(mapWrapper, mapImage);
    mapWrapper.appendChild(mapImage);
    
    // Create the overlay image (map with states)
    const overlayImage = document.createElement('img');
    overlayImage.src = './assets/img/overview-page-image-2.png';
    overlayImage.className = 'img-fluid map-img-overlay';
    overlayImage.style.position = 'absolute';
    overlayImage.style.top = '0';
    overlayImage.style.left = '0';
    overlayImage.style.width = '100%';
    overlayImage.style.height = '100%';
    overlayImage.style.opacity = '0';
    overlayImage.style.pointerEvents = 'none';
    overlayImage.style.cursor = 'default';
    
    mapWrapper.appendChild(overlayImage);
    
    // Disable any hover effects on the wrapper
    mapWrapper.onmouseenter = function(e) {
      e.stopPropagation();
      return false;
    };
    
    mapWrapper.onmouseleave = function(e) {
      e.stopPropagation();
      return false;
    };
    
    // Create automatic timeline animation (starts on page load)
    const tl = gsap.timeline({
      delay: 0.5 // Small delay before animation starts
    });
    
    // Fade out original map (without states) in first half
    tl.to(mapImage, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.in'
    }, 0)
    
    // Fade in overlay map (with states) throughout full animation
    .to(overlayImage, {
      opacity: 1,
      duration: 2.5,
      ease: 'power2.inOut'
    }, 0);
    
    // Optional: Add fade-in animation for "Our Presence" text
    const presenceText = document.querySelector('.overview-page .img-text');
    const circleImg = document.querySelector('.overview-page .circle-img');
    
    if (presenceText && circleImg) {
      gsap.from([circleImg, presenceText], {
        opacity: 0,
        x: 50,
        duration: 1.2,
        delay: 2,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }
  }
});

// Additional safety: Remove any hover events that might be attached elsewhere
document.addEventListener('DOMContentLoaded', function() {
  // Remove any hover event listeners that might be in main.js or other files
  const mapElements = document.querySelectorAll('.overview-page img, .overview-page .col-12');
  mapElements.forEach(element => {
    element.onmouseenter = null;
    element.onmouseleave = null;
  });
});