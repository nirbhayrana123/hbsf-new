// gsap.registerPlugin(ScrollTrigger);

// ============================================
// FAST SMOOTH SECTION NAVIGATION (Arrow Keys)
// ============================================
// const sections = document.querySelectorAll(".section-height");
// let currentIndex = 0;
// let isNavigating = false;
// let currentScrollTween = null;

// function goToSection(index) {
//   if (index < 0 || index >= sections.length) return;

//   // Kill any existing scroll animation immediately
//   if (currentScrollTween) {
//     currentScrollTween.kill();
//   }

//   isNavigating = true;
//   currentIndex = index;

//   const targetSection = sections[index];
//   const targetPosition = targetSection.offsetTop;

//   // Calculate distance to travel for dynamic duration
//   const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
//   const distance = Math.abs(targetPosition - currentPosition);
//   const viewportHeight = window.innerHeight;

//   // Faster duration calculation - much quicker!
//   let duration = 0.3; // Base duration in seconds

//   // Adjust duration based on distance (but keep it fast)
//   if (distance > viewportHeight * 2) {
//     duration = 0.1; // Longer jumps but still fast
//   } else if (distance > viewportHeight) {
//     duration = 0.2;
//   }

//   // Use a faster ease for more immediate response
//   currentScrollTween = gsap.to(window, {
//     duration: duration,
//     scrollTo: {
//       y: targetPosition,
//       autoKill: false,
//     },
//     ease: "power1.inOut",
//     onComplete: () => {
//       isNavigating = false;
//       currentScrollTween = null;
//     },
//     onInterrupt: () => {
//       isNavigating = false;
//       currentScrollTween = null;
//     }
//   });
// }

// // Keyboard navigation - much more responsive
// window.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowDown" || e.key === "PageDown") {
//     e.preventDefault();
//     goToSection(Math.min(currentIndex + 1, sections.length - 1));
//   }

//   if (e.key === "ArrowUp" || e.key === "PageUp") {
//     e.preventDefault();
//     goToSection(Math.max(currentIndex - 1, 0));
//   }

//   // Home and End keys for first/last section
//   if (e.key === "Home") {
//     e.preventDefault();
//     goToSection(0);
//   }

//   if (e.key === "End") {
//     e.preventDefault();
//     goToSection(sections.length - 1);
//   }
// });

// Simplified scroll tracking - less aggressive
// let scrollTimeout;
// window.addEventListener("scroll", () => {
//   if (isNavigating) return;

//   clearTimeout(scrollTimeout);

//   scrollTimeout = setTimeout(() => {
//     const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Find which section is currently in view
//     sections.forEach((sec, idx) => {
//       const rect = sec.getBoundingClientRect();
//       // Check if section is mostly in view
//       if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//         currentIndex = idx;
//       }
//     });
//   }, 150);
// }, { passive: true });

// ============================================
// SMOOTH SCROLL BEHAVIOR FOR ALL LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      // Kill any ongoing navigation
      if (currentScrollTween) {
        currentScrollTween.kill();
      }

      gsap.to(window, {
        duration: 0.6, // Faster duration for link clicks too
        scrollTo: {
          y: target,
          autoKill: false,
        },
        ease: "power2.inOut",
      });
    }
  });
});

// ============================================
// REFRESH SCROLLTRIGGER ON WINDOW RESIZE
// ============================================
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

// ============================================
// SECTION 4 ANIMATION (About Us)
// ============================================
// const sec4Timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sec-4",
//     start: "top 70%",
//     end: "top 10%",
//     scrub: 1,
//     // markers: true, // Uncomment for debugging
//   },
// });

// sec4Timeline
//   .from(".sec-4 .common-heading", {
//     y: 30,
//     opacity: 0,
//     scale: 0.9,
//     duration: 1,
//     ease: "power2.out",
//   })
//   .from(
//     ".sec-4 .common-bottom-line",
//     {
//       y: 20,
//       opacity: 0,
//       duration: 0.6,
//     },
//     "-=0.4"
//   )
//   .from(
//     ".sec-4 .about-content h6",
//     {
//       y: 30,
//       opacity: 0,
//       duration: 0.8,
//       stagger: 0.4, // Stagger the two h6 elements
//     },
//     "-=0.3"
//   )
//   .from(
//     ".sec-4 .common-read-more-btn",
//     {
//       y: 20,
//       opacity: 0,
//       duration: 0.8,
//     },
//     "-=0.3"
//   );

// ============================================
// SECTION 7 ANIMATION (Note from the founders - Slider)
// ============================================
// const sec7Timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sec-7",
//     start: "top 70%",
//     end: "top 10%",
//     scrub: 1,
//     // markers: true, // Uncomment for debugging
//   },
// });

// sec7Timeline
//   .from(".sec-7 .common-heading", {
//     y: 30,
//     opacity: 0,
//     scale: 0.9,
//     duration: 1,
//     ease: "power2.out",
//   })
//   .from(
//     ".sec-7 .common-bottom-line",
//     {
//       y: 20,
//       opacity: 0,
//       duration: 0.6,
//     },
//     "-=0.4"
//   )
//   .from(
//     ".sec-7-c", // Animate each card
//     {
//       y: 40,
//       opacity: 0,
//       duration: 0.8,
//       stagger: 0.2, // Stagger the cards
//       ease: "back.out(1.7)",
//     },
//     "-=0.3"
//   );

// ============================================
// SMOOTH WHEEL SCROLLING
// ============================================
// let wheelTimeout;
// let isWheelScrolling = false;

// window.addEventListener('wheel', (e) => {
//   // Prevent default scroll behavior
//   e.preventDefault();

//   // If already navigating or wheel scrolling, ignore
//   if (isNavigating || isWheelScrolling) return;

//   clearTimeout(wheelTimeout);
//   isWheelScrolling = true;

//   // Determine scroll direction
//   if (e.deltaY > 0) {
//     // Scrolling down - go to next section
//     goToSection(Math.min(currentIndex + 1, sections.length - 1));
//   } else {
//     // Scrolling up - go to previous section
//     goToSection(Math.max(currentIndex - 1, 0));
//   }

//   // Reset wheel scrolling flag after a delay
//   wheelTimeout = setTimeout(() => {
//     isWheelScrolling = false;
//   }, 1000); // Prevent rapid wheel events
// }, { passive: false });



$(document).ready(function () {
  $('.dropdown-toggle').on('click', function () {
    $(this).toggleClass('show');
    $('.dropdown-menu').toggleClass('show');
  });
  $('.dropdown-item.nav-link').on('click', function () {
    $('.dropdown-toggle').toggleClass('show');
    $('.dropdown-menu').toggleClass('show');
  });
});



// $(document).ready(function() {
//     $("#news-slider").owlCarousel({
//         items : 3.5, 
//         itemsDesktop:[1199,1],
//         itemsDesktopSmall:[980,1],
//         itemsMobile : [600,1],
//         scrollPerPage: true,
//         navigation:true,
//         navigationText:["",""],
//         pagination:true,
//         autoplayTimeout: 6000, // Slide kitne time baad change ho – isse slow/fast hota hai
//         autoplaySpeed: 5000,   // Animation ko slow karta hai
//         smartSpeed: 3000,  
//     });
// });
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 4,                         // NO decimal items (fix required!)
        scrollPerPage: true,          // 4 items slide on navigation click
        navigation:true,
        navigationText:["",""],
        pagination:true,
        // autoPlay: 6000,               // Correct autoplay for v1
        slideSpeed: 1200,             // Smooth speed (lower = slower, higher = faster)
        paginationSpeed: 1200,
        rewindSpeed: 800,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[980,3],
        itemsMobile : [600,1],
        loop:true,
    });
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}); 