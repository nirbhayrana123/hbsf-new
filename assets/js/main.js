// document.addEventListener("DOMContentLoaded", function () {
//   $(".carousel .carousel-item").each(function () {
//     let next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next.children(":first-child").clone().appendTo($(this));

//     // Clone 3 more items (total 4 visible on desktop)
//     for (let i = 0; i < 3; i++) {
//       next = next.next();
//       if (!next.length) {
//         next = $(this).siblings(":first");
//       }
//       next.children(":first-child").clone().appendTo($(this));
//     }
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = $("#myCarousel2 .carousel-item");

//   carousel.each(function () {
//     let next = $(this).next();
//     if (!next.length) next = $(this).siblings(":first");

//     // Clone the first child of next item
//     next.children(":first-child").clone().appendTo($(this));

//     // Clone next 3 siblings (total 4 cards visible)
//     for (let i = 0; i < 3; i++) {
//       next = next.next();
//       if (!next.length) next = $(this).siblings(":first");
//       next.children(":first-child").clone().appendTo($(this));
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  // const scrollContainer = document.querySelector(
  //   ".about-us-section-3 .scrolling-div"
  // );
  // const sections = scrollContainer.querySelectorAll(".main-sec");

  // scrollContainer.addEventListener("scroll", () => {
  //   let closestSection = null;
  //   let closestDistance = Infinity;

  //   sections.forEach((section) => {
  //     const rect = section.getBoundingClientRect();
  //     const containerRect = scrollContainer.getBoundingClientRect();
  //     const distance = Math.abs(rect.top - containerRect.top);
  //     if (distance < closestDistance) {
  //       closestDistance = distance;
  //       closestSection = section;
  //     }
  //   });

  //   // Remove active from all dots
  //   sections.forEach((sec) => {
  //     sec.querySelector(".dot").classList.remove("active");
  //   });

  //   // Add active to the closest one
  //   if (closestSection) {
  //     closestSection.querySelector(".dot").classList.add("active");
  //   }
  // });

  // Trigger on load
  // scrollContainer.dispatchEvent(new Event("scroll"));
});


(function () {
  let fired = false; // make sure it runs only once

  function runEffects() {
    if (fired) return;
    fired = true;
    const circles = document.querySelectorAll(".hide_11");

    circles.forEach(circle => {
      // first show
      circle.style.display = "block";

      // start tiny (almost invisible)
      // circle.style.transformOrigin = "center";
      circle.style.transform = "scale(0.1)";
      circle.style.transition = "transform 0.8s ease-out";

      // grow effect after a tiny delay (important for animation)
      requestAnimationFrame(() => {
        circle.style.transform = "scale(1)";
      });
    });

    document.querySelectorAll(".color_change").forEach(el => {
      el.setAttribute("fill", "#3F7253");
    });
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      setTimeout(() => {
        runEffects();
      }, 1000);
    }
  });
})();


// Safe navbar / dropdown bindings: guard lookups so missing IDs don't throw
// const button = document.getElementById("navbarButton");
// const image = document.getElementById("logoImage");
// const toggleicon = document.getElementById("toggleIcon");
// const secondImage = document.getElementById("defaultLogo");

// if (button && image && secondImage) {
//   button.addEventListener("click", () => {

//     image.classList.toggle("not-display");   // Logo hide/show
//     toggleicon.classList.toggle("lineremove"); // Icon animation

//     // Direct toggle without delay
//     secondImage.classList.toggle("display");
//     secondImage.classList.toggle("remove");

//   });
// }

const button2 = document.getElementById("dropdownMenuLink");
if (button2) {
  button2.addEventListener("show.bs.dropdown", () => {
    button2.classList.add("margin-class");
  });
  button2.addEventListener("hide.bs.dropdown", () => {
    button2.classList.remove("margin-class");
  });
}

const button3 = document.getElementById("dropdownMenuLink2");
if (button3) {
  button3.addEventListener("show.bs.dropdown", () => {
    button3.classList.add("margin-class");
  });
  button3.addEventListener("hide.bs.dropdown", () => {
    button3.classList.remove("margin-class");
  });
}

// const navbarButton = document.getElementById("navbarButton");
// const toggleIcon = document.getElementById("toggleIcon");
// const navbarMenu = document.getElementById("navbarNavAltMarkup");
// const openIcon = "./assets/img/nav-btn-img.png";
// const closeIcon = "./assets/img/nav-close-img.png";
// if (navbarMenu && toggleIcon) {
//   // Keep track of previous body overflow so we can restore it later
//   let _prevBodyOverflow = null;

// when menu begins to expand: change icon and lock page scroll
// navbarMenu.addEventListener("show.bs.collapse", () => {
//   toggleIcon.src = closeIcon;
//   try {
//     _prevBodyOverflow = document.body.style.overflow;
//     document.body.style.overflow = 'hidden';
//   } catch (e) {
//     // ignore failures to set style in constrained environments
//   }
// });

// when menu has fully hidden: restore icon and unlock page scroll
// navbarMenu.addEventListener("hidden.bs.collapse", () => {
//   toggleIcon.src = openIcon;
//   try {
//     document.body.style.overflow = _prevBodyOverflow || '';
//     _prevBodyOverflow = null;
//   } catch (e) {
//     // ignore
//   }
// });

// Also handle the case where the collapse is programmatically hidden (hide start)
// navbarMenu.addEventListener("hide.bs.collapse", () => {
//   // keep icon change immediate so user sees the state
//   toggleIcon.src = openIcon;
// });
// }

// Hover-to-open dropdowns on desktop (non-touch)
function setupHoverDropdowns() {
  if (typeof bootstrap === 'undefined') return; // bootstrap must be available

  const dropdowns = document.querySelectorAll('.nav-item.dropdown');

  function enable() {
    dropdowns.forEach((d) => {
      const toggle = d.querySelector('[data-bs-toggle="dropdown"]');
      if (!toggle) return;
      // avoid double-binding
      if (d.__hoverBound) return;
      const showFn = () => bootstrap.Dropdown.getOrCreateInstance(toggle).show();
      const hideFn = () => bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
      d.addEventListener('mouseenter', showFn);
      d.addEventListener('mouseleave', hideFn);
      d.__hoverHandlers = { showFn, hideFn };
      d.__hoverBound = true;
    });
  }

  function disable() {
    dropdowns.forEach((d) => {
      if (!d.__hoverBound) return;
      const handlers = d.__hoverHandlers || {};
      if (handlers.showFn) d.removeEventListener('mouseenter', handlers.showFn);
      if (handlers.hideFn) d.removeEventListener('mouseleave', handlers.hideFn);
      d.__hoverHandlers = null;
      d.__hoverBound = false;
    });
  }

  // Only enable hover on wider screens (desktop)
  function check() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      enable();
    } else {
      disable();
    }
  }

  // debounce resize
  let resizeTO;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO);
    resizeTO = setTimeout(check, 150);
  });

  // initial check
  check();
}

// Initialize hover behavior after DOM and Bootstrap are ready
document.addEventListener('DOMContentLoaded', () => {
  // small timeout to ensure bootstrap bundle is parsed
  setTimeout(() => setupHoverDropdowns(), 50);
});

$(document).ready(function () {
  const $sections = $('.main-sec');
  let activeIndex = 0;
  let ticking = false;

  function updateActiveSection() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    $sections.each(function (index) {
      const offsetTop = $(this).offset().top;
      const height = $(this).outerHeight();

      // Check if section is in the middle of the viewport
      if (scrollTop + windowHeight / 2 >= offsetTop && scrollTop + windowHeight / 2 < offsetTop + height) {
        if (activeIndex !== index) {
          activeIndex = index;
          $('.dot').removeClass('active');
          $(this).find('.dot').addClass('active');

          // Optional: Add animation or text/image changes here
          $(this).addClass('visible').siblings().removeClass('visible');
        }
      }
    });
  }

  $(window).on('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Run once on page load
  updateActiveSection();


});

$(document).ready(function () {
  var mainSwiper = new Swiper(".swipersmain", {
    direction: "vertical",
    slidesPerView: 1.7,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: false,
    centeredSlides: true,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1.7,
      },
    },

    on: {
      slideChangeTransitionStart: function () {
        this.slides.forEach(slide => slide.style.opacity = "0.3");
      },
      slideChangeTransitionEnd: function () {
        this.slides[this.activeIndex].style.opacity = "1";
      }
    }
  });

  // initial opacity
  document.querySelectorAll(".swipersmain .swiper-slide").forEach(el => el.style.opacity = "0.3");
  document.querySelector(".swipersmain .swiper-slide-active").style.opacity = "1";



  const dots = document.querySelectorAll(".dot");
  const years = document.querySelectorAll(".year-label");
  const dotsContainer = document.getElementById("dotsContainer");
  const line = document.getElementById("timelineLine");

  var timelineSwiper = new Swiper(".myswiper", {
    direction: "vertical",
    slidesPerView: 1.3,
    centeredSlides: false,
    speed: 1000,
    mousewheel: true,
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true,
      sensitivity: 1,
    },
    allowTouchMove: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      snapOnRelease: true,
    },
    freeMode: false,
    breakpoints: {

      0: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1.3,
      },

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        dots.forEach((d) => d.classList.remove("active"));
        years.forEach((y) => y.classList.remove("active"));

        dots[this.activeIndex].classList.add("active");
        years[this.activeIndex].classList.add("active");

        const moveY = this.activeIndex * 10;
        dotsContainer.style.transform = `translate(-50%, calc(-50% - ${moveY}px))`;

        const baseHeight = 235;
        line.style.height = `${baseHeight + this.activeIndex * 20}px`;
      },
    },



  });
  // timelineSwiper must already be created (mousewheel: false, scrollbar draggable)
  (function initLockedReveal(swiper) {

    if (!swiper) return;

    const container = document.querySelector(".myswiper");
    if (!container) return;

    /* -------------------------------------------------------------
        HELPERS
    ------------------------------------------------------------- */

    function getRevealItems(i) {
      const slide = swiper.slides[i];
      return slide ? Array.from(slide.querySelectorAll(".reveal")) : [];
    }

    function revealNext(i) {
      const items = getRevealItems(i);
      for (const el of items) {
        if (!el.classList.contains("visible")) {
          el.classList.add("visible");
          return true;
        }
      }
      return false;
    }

    function hideLast(i) {
      const items = getRevealItems(i);
      for (let x = items.length - 1; x >= 0; x--) {
        if (items[x].classList.contains("visible")) {
          items[x].classList.remove("visible");
          return true;
        }
      }
      return false;
    }

    function resetReveals(i) {
      getRevealItems(i).forEach(el => el.classList.remove("visible"));
    }

    function insideViewport() {
      const r = container.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    }

    /* -------------------------------------------------------------
        STATE
    ------------------------------------------------------------- */

    var lockActive = false;
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    let eventGuard = false; // prevents multi-trigger (Issue 1)

    function lockSection() {
      // window.scrollTo(0, lastScroll);
    }

    /* -------------------------------------------------------------
        ACTIVATE / DEACTIVATE LOCK
    ------------------------------------------------------------- */
    let lastScrollPos = window.pageYOffset;
    let scrollDirection = "down";

    window.addEventListener("scroll", () => {
      let current = window.pageYOffset;
      scrollDirection = current > lastScrollPos ? "down" : "up";
      lastScrollPos = current;
    });
    let upwardRemaining = 5;   // <-- NEW (reset on downward scroll)

    function updateLock(e) {
      const rect = container.getBoundingClientRect();
      const lastIndex = swiper.slides.length - 1;
      const lastItems = getRevealItems(lastIndex);
      const lastVisible = lastItems.filter(el => el.classList.contains("visible")).length;


      if (e.type === "scroll" && insideViewport() && scrollDirection === "up") {
        lockActive = true

        return;
      }
      // 1️⃣ UNLOCK when last slide fully revealed

      if (e.type !== "scroll" && window.scrollY !== 0) {
        lockActive = false;
        return;
      } else if (
        swiper.activeIndex === lastIndex &&
        lastVisible === lastItems.length &&
        rect.bottom <= (window.innerHeight - 50000)
      ) {
        lockActive = false;
        return;
      }
      // 2️⃣ UNLOCK when user scrolls up too many times
      if (scrollDirection === "up") {
        upwardRemaining--;
        if (upwardRemaining <= 0) {
          lockActive = true;
          upwardRemaining = 5; // reset
          return;
        }
      }

      // Reset counter when scrolling down again
      if (scrollDirection === "down") {
        upwardRemaining = 5;
      }

      // 3️⃣ NORMAL locking rules
      if (insideViewport() &&
        !(swiper.activeIndex === lastIndex && lastVisible === lastItems.length)
      ) {
        if (!lockActive) lastScroll = window.pageYOffset;
        lockActive = true;
        return;
      }

      lockActive = false;
    }


    // window.addEventListener("scroll", updateLock, { passive: true });
    // window.addEventListener("keydown", updateLock, { passive: true });

    /* -------------------------------------------------------------
        CORE BEHAVIOR HANDLER
        (Wheel + Scrollbar + Keyboard all use this logic)
    ------------------------------------------------------------- */

    function process(direction) {
      if (!lockActive || eventGuard) return;

      eventGuard = true;
      setTimeout(() => eventGuard = false, 150); // fixes Issue 1

      lockSection();

      const i = swiper.activeIndex;
      const items = getRevealItems(i);
      const visibleCount = items.filter(el => el.classList.contains("visible")).length;

      const total = items.length;
      const lastSlide = swiper.slides.length - 1;

      /* --------------------
          SCROLLING DOWN
      -------------------- */
      if (direction === "down") {

        // 1. Reveal next item
        if (visibleCount < total) {
          revealNext(i);
          return;
        }

        // 2. Go to next slide
        if (i < lastSlide) {
          resetReveals(i + 1);
          swiper.slideNext(600);
          return;
        }

        // 3. On last slide with all items → unlock
        lockActive = false;
        return;
      }

      /* --------------------
          SCROLLING UP
      -------------------- */
      if (direction === "up") {

        // 1. Hide last item
        if (visibleCount > 0) {
          hideLast(i);
          return;
        }

        // 2. Move to previous slide
        if (i > 0) {
          resetReveals(i - 1);
          swiper.slidePrev(600);
          return;
        }

        // 3. Top slide & all items hidden → allow scroll above
        lockActive = false;
        return;
      }
    }

    /* -------------------------------------------------------------
        WHEEL
    ------------------------------------------------------------- */

    window.addEventListener("wheel", (e) => {
      if (!lockActive) return;

      lockSection();
      e.preventDefault();

      if (e.deltaY > 0) process("down");
      else process("up");

    }, { passive: false });

    /* -------------------------------------------------------------
        KEYBOARD
    ------------------------------------------------------------- */

    window.addEventListener("keydown", (e) => {

      if (!lockActive) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        process("down");
      }

      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        process("up");
      }
    });

    /* -------------------------------------------------------------
        SCROLLBAR DRAG
        (same behavior as wheel)
    ------------------------------------------------------------- */

    window.addEventListener("scroll", () => {
      if (!lockActive) return;

      const current = window.pageYOffset;
      if (current > lastScroll) process("down");
      else if (current < lastScroll) process("up");

      lastScroll = current;

      lockSection();
    });

    /* -------------------------------------------------------------
        SWIPER EVENTS
    ------------------------------------------------------------- */

    swiper.on("slideChangeTransitionStart", function () {
      resetReveals(this.activeIndex);
      if (lockActive) lockSection();
    });

    swiper.on("slideChangeTransitionEnd", function () {
      if (lockActive) lockSection();
    });

  })(timelineSwiper);





  // Sync page scrollbar position to the timeline swiper slides.
  // When the user drags the browser scrollbar (or otherwise scrolls the page),
  // map page scroll progress to the Swiper slide index and call slideTo().
  // Debounced via requestAnimationFrame for performance.
  // (function syncScrollToSwiper() {
  //   let scrollRaf = null;
  //   window.addEventListener('scroll', () => {
  //     if (scrollRaf) return;
  //     var maxScroll = 1;
  //     scrollRaf = requestAnimationFrame(() => {
  //       debugger;
  //       const doc = document.documentElement;
  //       const scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  //       //  maxScroll = doc.scrollHeight - window.innerHeight;

  //       setTimeout(() => { 
  //         maxScroll = 1;
  //       }, 2000);

  //       if (maxScroll > 0 && typeof timelineSwiper !== 'undefined') {
  //         const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
  //         const targetIndex = Math.round(progress * (timelineSwiper.slides.length - 1));
  //         if (targetIndex !== timelineSwiper.activeIndex) {
  //           timelineSwiper.slideTo(targetIndex, 400);
  //           maxScroll = 0;
  //         }
  //       }
  //       scrollRaf = null;
  //     });
  //   });
  // })();
});



document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-menu .menus");
  const panes = document.querySelectorAll(".tab-content .tab-pane");
  const container = document.querySelector(".tab-content");

  const getInner = (pane) => (pane ? pane.querySelector(".tab-pane-inner") : null);
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      debugger;
      const current = document.querySelector(".tab-pane.active.show");
      const target = panes[index];
      const currentInner = getInner(current);
      const targetInner = getInner(target);

      if (!target || target === current) return;
      if (!current) {
        target.classList.add('active', 'show');
        if (targetInner) {
          targetInner.classList.add('slide-active');
        } else {
          target.classList.add('slide-active');
        }
        const baselineHeight = targetInner ? targetInner.offsetHeight : target.offsetHeight;
        container.style.minHeight = baselineHeight + "px";
        return;
      }

      // compute direction (true => moving to the right / next)
      const currentIndex = Array.prototype.indexOf.call(panes, current);
      const goingRight = index > currentIndex;
      // prepare a deterministic label update payload so cleanup can read it even if closures change
      const labelNewText = (index === 0) ? 'CURRENT PARTNERSHIP' : 'PAST PARTNERSHIP';

      // Lock height to avoid layout jumping
      const currentHeight = currentInner ? currentInner.offsetHeight : (current ? current.offsetHeight : 0);
      container.style.minHeight = currentHeight + "px";

      // cleanup any animation classes
      panes.forEach(p => {
        p.classList.remove('slide-in-from-right', 'slide-in-from-left', 'slide-out-to-left', 'slide-out-to-right', 'slide-active');
        const inner = getInner(p);
        if (inner) {
          inner.classList.remove('slide-in-from-right', 'slide-in-from-left', 'slide-out-to-left', 'slide-out-to-right', 'slide-active');
        }
      });

      // Prepare next pane
      target.classList.add("active");
      // debugger;
      // Place target offscreen depending on direction, then trigger the animated swap
      if (targetInner) {
        targetInner.classList.remove('slide-in-from-right', 'slide-in-from-left', 'slide-out-to-left', 'slide-out-to-right', 'slide-active');
        if (goingRight) {
          targetInner.classList.add('slide-in-from-right');
        } else {
          targetInner.classList.add('slide-in-from-left');
        }
      } else {
        target.classList.remove('slide-in-from-right', 'slide-in-from-left', 'slide-out-to-left', 'slide-out-to-right', 'slide-active');
        if (goingRight) {
          target.classList.add('slide-in-from-right');
        } else {
          target.classList.add('slide-in-from-left');
        }
      }

      // animate tab buttons: slide them in/out smoothly with the content
      try {
        const leftTab = document.querySelector('.left-tab');
        const rightTab = document.querySelector('.right-tab');

        if (goingRight) {
          // Moving to PAST (right tab becomes active)
          // Left tab slides out to the LEFT, right tab slides in from the RIGHT
          if (leftTab) {
            leftTab.classList.remove('tab-slide-in-left', 'tab-slide-in-right');
            leftTab.classList.add('tab-slide-out-left');
          }
          if (rightTab) {
            rightTab.classList.remove('tab-slide-out-left', 'tab-slide-out-right');
            rightTab.classList.add('tab-slide-in-right');
          }
        } else {
          // Moving to CURRENT (left tab becomes active)
          // Right tab slides out to the RIGHT, left tab slides in from the LEFT
          if (leftTab) {
            leftTab.classList.remove('tab-slide-out-left', 'tab-slide-out-right');
            leftTab.classList.add('tab-slide-in-left');
            // subtle pop / move-to-center effect for left->center
            leftTab.classList.add('tab-pop-to-center');
            // stash a readable text to show when pop reaches center
            try {
              const menusEl = leftTab.querySelector('.menus');
              const popText = menusEl ? (menusEl.textContent || menusEl.innerText || '').trim() : '';
              leftTab.dataset.popText = popText;
              if (menusEl) {
                const onEnd = function (ev) {
                  // wait for transform transition to finish
                  if (ev.propertyName && ev.propertyName.indexOf('transform') === -1) return;
                  menusEl.removeEventListener('transitionend', onEnd);
                  // briefly hold the tab at center, update center heading text and highlight
                  const labelWrapper = document.querySelector('.center-label .tab-label');
                  const heading = labelWrapper ? labelWrapper.querySelector('.common-heading') : null;
                  const newText = leftTab.dataset.popText || '';
                  if (heading && newText) {
                    // apply a quick highlight/scale while text is centered (faster)
                    heading.style.transition = 'transform 120ms ease, opacity 10ms ease';
                    // heading.style.transform = 'scale(1.03)';
                    heading.style.opacity = '1';
                    heading.textContent = newText;
                  }
                  // hold for a short pause so user sees it centered, then remove pop class to settle
                  // setTimeout(() => {
                  // leftTab.classList.remove('tab-pop-to-center');
                  // tidy up heading styles
                  if (heading) {
                    heading.style.transform = '';
                    heading.style.transition = '';
                  }
                  try { delete leftTab.dataset.popText; } catch (e) { }
                  // }, 80);
                };
                menusEl.addEventListener('transitionend', onEnd);
              }
            } catch (e) {
              // ignore any failures
            }
          }
          if (rightTab) {
            rightTab.classList.remove('tab-slide-in-left', 'tab-slide-in-right');
            rightTab.classList.add('tab-slide-out-right');
          }
        }
      } catch (e) {
        // ignore
      }

      // Animate center header label: slide it out in the SAME direction as the LEFT tab
      try {
        // operate on the wrapper (.tab-label) consistently
        const label = document.querySelector('.center-label .tab-label');
        if (label) {
          // stash direction and new text so cleanup uses the exact same intent
          label.dataset.animateDir = goingRight ? 'right' : 'left';
          label.dataset.animateText = labelNewText;

          // Remove any previous inline styles/classes
          label.classList.remove('center-slide-in-left', 'center-slide-in-right', 'center-slide-out-left', 'center-slide-out-right');

          // Apply slide-out animation via inline styles (faster and more visible)
          label.style.transition = 'transform 3000ms cubic-bezier(.18,.82,.28,1.08), opacity 3000ms ease';
          if (goingRight) {
            // Moving right to PAST -> both tabs/label visually move left
            label.style.transform = 'translateX(-200px) scale(0.95)';
          } else {
            // Moving left to CURRENT -> move right
            label.style.transform = 'translateX(200px) scale(0.95)';
          }
          label.style.opacity = '0.5';
        }
      } catch (e) {
        // ignore
      }

      // make sure the DOM updates before starting transition
      requestAnimationFrame(() => {
        // outgoing slide moves opposite to incoming
        if (currentInner) {
          if (goingRight) currentInner.classList.add('slide-out-to-left');
          else currentInner.classList.add('slide-out-to-right');
        } else if (current) {
          if (goingRight) current.classList.add('slide-out-to-left');
          else current.classList.add('slide-out-to-right');
        }

        // incoming becomes active and animates into place
        target.classList.add('show');
        if (targetInner) {
          targetInner.classList.add('slide-active');
          targetInner.classList.remove('slide-in-from-right', 'slide-in-from-left');
        } else {
          target.classList.add('slide-active');
          target.classList.remove('slide-in-from-right', 'slide-in-from-left');
        }

        const targetHeight = targetInner ? targetInner.offsetHeight : target.offsetHeight;
        container.style.minHeight = targetHeight + "px";
      });

      // cleanup after transition completes
      const cleanup = (ev) => {
        if (ev && targetInner && ev.target !== targetInner) return;
        if (ev && !targetInner && ev.target !== target) return;
        // remove classes from previous pane
        if (current) {
          current.classList.remove('active', 'show', 'slide-out-to-left', 'slide-out-to-right');
        }
        const currentInnerCleanup = getInner(current);
        if (currentInnerCleanup) {
          currentInnerCleanup.classList.remove('slide-out-to-left', 'slide-out-to-right', 'slide-active');
        }
        const targetInnerCleanup = getInner(target);
        if (targetInnerCleanup) {
          targetInnerCleanup.classList.remove('slide-in-from-right', 'slide-in-from-left');
          targetInnerCleanup.classList.add('slide-active');
        } else {
          target.classList.remove('slide-in-from-right', 'slide-in-from-left');
          target.classList.add('slide-active');
        }

        // cleanup tab slide classes
        try {
          const leftTab = document.querySelector('.left-tab');
          const rightTab = document.querySelector('.right-tab');
          if (leftTab) leftTab.classList.remove('tab-slide-out-left', 'tab-slide-in-left', 'tab-slide-out-right', 'tab-slide-in-right');
          if (rightTab) rightTab.classList.remove('tab-slide-out-left', 'tab-slide-in-left', 'tab-slide-out-right', 'tab-slide-in-right');
          // ensure pop class also cleaned up
          if (leftTab) leftTab.classList.remove('tab-pop-to-center');
          if (rightTab) rightTab.classList.remove('tab-pop-to-center');
        } catch (e) {
          // ignore
        }

        // Update tab-block active state and center label to match the newly active pane
        try {
          const tabBlocks = Array.from(document.querySelectorAll('.tab-block'));
          // remove active-tab from all
          tabBlocks.forEach(item => item.classList.remove('active-tab'));
          // prefer using index mapping, fallback to data-tab match
          let corresponding = tabBlocks[index];
          if (!corresponding) {
            const tabKey = target.getAttribute('data-tab') || target.id || null;
            corresponding = tabBlocks.find(b => b.getAttribute('data-tab') === tabKey) || tabBlocks[0];
          }
          if (corresponding) corresponding.classList.add('active-tab');

          const labels = { current: 'CURRENT PARTNERSHIP', past: 'PAST PARTNERSHIP' };
          const tabKey = corresponding ? corresponding.getAttribute('data-tab') : null;

          // Animate center label back in from the same direction it slid out
          try {
            const label = document.querySelector('.center-label .tab-label');
            const heading = label ? label.querySelector('.common-heading') : null;
            if (label && heading) {
              // prefer using the stashed direction/text set at click time
              const dir = label.dataset.animateDir || (goingRight ? 'left' : 'right');
              const newText = label.dataset.animateText || (tabKey && labels[tabKey] ? labels[tabKey] : null);

              // Position wrapper offscreen on the same side it exited and slightly small
              label.style.transition = 'none'; // disable transitions temporarily
              if (dir === 'left') label.style.transform = 'translateX(-200px) scale(0.95)';
              else label.style.transform = 'translateX(200px) scale(0.95)';
              label.style.opacity = '0.5';

              // Update the heading text while offscreen
              if (newText) heading.textContent = newText;

              // Force a reflow so the offscreen position is applied
              void label.offsetWidth;

              // Slide in while scaling slightly larger then settle
              label.style.transition = 'transform 3000ms cubic-bezier(.18,.82,.28,1.08), opacity 3000ms ease';
              label.style.transform = 'translateX(0) scale(1.03)';
              label.style.opacity = '1';

              // settle scale back to 1 part way through the animation
              // setTimeout(() => { label.style.transform = 'translateX(0) scale(1)'; }, 250);
              label.style.transform = 'translateX(0) scale(1)';
              // cleanup after animation completes
              // setTimeout(() => {
              label.style.transition = '';
              label.style.transform = '';
              label.style.opacity = '';
              delete label.dataset.animateDir;
              delete label.dataset.animateText;
              label.classList.remove('center-slide-out-left', 'center-slide-out-right', 'center-slide-in-left', 'center-slide-in-right');
              // }, 550);
            }
          } catch (e) {
            // ignore
          }
          // Show/hide filterBox after content transition so content appears first
          try {
            const filterBox = document.getElementById('filterBox');
            if (filterBox) {
              const removeExistingListener = () => {
                if (filterBox._filterTransitionHandler) {
                  filterBox.removeEventListener('transitionend', filterBox._filterTransitionHandler);
                  filterBox._filterTransitionHandler = null;
                }
              };

              const showFilter = () => {
                removeExistingListener();
                filterBox.classList.remove('filter-hidden', 'visible');
                filterBox.style.display = 'flex';
                requestAnimationFrame(() => filterBox.classList.add('filter-visible'));
              };

              const hideFilter = () => {
                removeExistingListener();

                const finalizeHide = () => {
                  filterBox.style.display = 'none';
                  removeExistingListener();
                };

                const onTransitionEnd = (event) => {
                  if (event.target !== filterBox) return;
                  if (event.propertyName && event.propertyName !== 'opacity') return;
                  finalizeHide();
                };

                filterBox._filterTransitionHandler = onTransitionEnd;

                filterBox.classList.remove('filter-visible', 'visible');
                filterBox.classList.add('filter-hidden');

                const styles = window.getComputedStyle(filterBox);
                const duration = parseFloat(styles.transitionDuration) || 0;
                const delay = parseFloat(styles.transitionDelay) || 0;

                if (duration + delay === 0) {
                  finalizeHide();
                } else {
                  filterBox.addEventListener('transitionend', onTransitionEnd);
                }
              };

              if (tabKey === 'current') {
                showFilter();
              } else {
                hideFilter();
              }
            }
          } catch (e) {
            // ignore
          }
          // remove header animation class after content animation completes
          try {
            const tabMenuEl = document.querySelector('.tab-menu');
            if (tabMenuEl) tabMenuEl.classList.remove('slide-left', 'slide-right');
          } catch (e) {
            // ignore
          }
        } catch (e) {
          // ignore
        }

        // remove listener
        if (targetInner) targetInner.removeEventListener('transitionend', cleanup);
        else target.removeEventListener('transitionend', cleanup);
      };

      // attach to target transition end
      if (targetInner) targetInner.addEventListener('transitionend', cleanup);
      else target.addEventListener('transitionend', cleanup);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabBlocks = document.querySelectorAll(".tab-block");
  // NOTE: active-tab state is now managed by the tab-pane transition cleanup
  // to keep the visual focus on content first. No immediate click handler here.
});

document.addEventListener("DOMContentLoaded", function () {
  const tabBlocks = document.querySelectorAll(".tab-block");
  const centerLabel = document.querySelector(".center-label .tab-label .common-heading");
  const centerLine = document.querySelector(".center-label .tab-label .common-bottom-line");

  const labels = {
    current: "CURRENT PARTNERSHIP",
    past: "PAST PARTNERSHIP"
  };

  // Set initial state
  document.querySelector("[data-tab='current']").classList.add("active-tab");

  // Ensure the initially visible pane is fully visible and container height is set
  (function initTabVisibility() {
    const container = document.querySelector('.tab-content');
    const initial = document.querySelector('.tab-pane.show');
    if (!container || !initial) return;

    const initialInner = initial.querySelector('.tab-pane-inner');

    // Remove any animation helper classes that might hide it
    if (initialInner) {
      initialInner.classList.remove('slide-in-from-right', 'slide-in-from-left', 'slide-out-to-left', 'slide-out-to-right');
      initialInner.classList.add('slide-active');
    }
    initial.classList.add('active');

    // Set container min height based on content so layout doesn't jump
    try {
      const initialHeight = initialInner ? initialInner.offsetHeight : initial.offsetHeight;
      container.style.minHeight = initialHeight + 'px';
    } catch (e) {
      // ignore if measurement fails
    }
  })();

  // active-tab and center label are updated after the content transition completes
  // to ensure content animation takes precedence; no immediate click handlers here.
});

document.addEventListener("DOMContentLoaded", () => {
  const filterBox = document.getElementById("filterBox");
  if (filterBox) {
    filterBox.classList.remove('visible');

    if (filterBox.style.display === 'none') {
      filterBox.classList.remove('filter-visible');
      filterBox.classList.add('filter-hidden');
    } else {
      filterBox.style.display = 'flex';
      filterBox.classList.remove('filter-hidden');
      requestAnimationFrame(() => filterBox.classList.add('filter-visible'));
    }
 
  }
});

$(document).ready(function () {
  $('.navbar-toggler,a.navbar-close').on('click', function () {
    $('.navbar').toggleClass('showactive');
  });
});
setTimeout(() => {
  $(window).mousemove(function (e) {
    console.log(e)
    $(".ring").css(
      "transform",
      `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
    );
  });

  const sections = document.querySelectorAll("section"); // or ".main", ".panel", etc.

  // Add slide class to all sections initially
  sections.forEach(sec => sec.classList.add("panel"));

  $(document).on('scroll', function () {

    $('.panel').each(function () {

      let top = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let height = $(this).height();

      // When panel is visible enough
      if (scroll > top - height / 2 && scroll < top + height) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }

    });
  });

}, 10)

$(document).ready(function () {

  let $dropdown = $(".filter-list").detach();  // remove from DOM but keep in memory
  $("body").append($dropdown);                // add to body for overlay

  $(".input-tag").on("click", function () {
    debugger
    let inputOffset = $(this).offset();
    let inputWidth = $(this).outerWidth();

    // Position dropdown under input
    $dropdown.css({
      top: inputOffset.top + $(this).outerHeight(),
      left: inputOffset.left,
      width: inputWidth
    });

    $dropdown.slideToggle(150);
  });

  // select item
  $dropdown.on("click", "li", function () {
    $(".input-tag").val($(this).text());
    $dropdown.slideUp(150);
  });

  // click outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".filter-box, .filter-list").length) {
      $dropdown.slideUp(150);
    }
  });

  const duration = 2000; // animation duration in ms (2 seconds for smooth transition)

  // Select all parent cards to enable hover on entire card
  const parentCards = document.querySelectorAll('.parent-card');

  parentCards.forEach(card => {
    const svg = card.querySelector('.mySVG');
    if (!svg) return;

    const rect = svg.querySelector('.sector1');
    const gradient = svg.querySelector('linearGradient[id*="paint"]');

    if (!rect || !gradient) return;

    const stops = gradient.querySelectorAll('stop');
    if (stops.length < 2) return;

    // Store original opacity values
    const originalOpacity0 = stops[0].getAttribute('stop-opacity') || '0';
    const originalOpacity1 = stops[1].getAttribute('stop-opacity') || '1';

    let progress = 0; // Start at 0 (original state)
    let animationFrame;

    function animateGradient(target) {
      cancelAnimationFrame(animationFrame);
      const startTime = performance.now();
      const initial = progress;

      function step(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const easedProgress = t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;

        progress = initial + (target - initial) * easedProgress;

        // Animate both stops together
        const newOpacity0 = parseFloat(originalOpacity0) + (1 - parseFloat(originalOpacity0)) * progress;
        const newOpacity1 = parseFloat(originalOpacity1) + (1 - parseFloat(originalOpacity1)) * progress;

        stops[0].setAttribute('stop-opacity', newOpacity0);
        stops[1].setAttribute('stop-opacity', newOpacity1);

        if (elapsed < duration) {
          animationFrame = requestAnimationFrame(step);
        } else {
          progress = target;
        }
      }

      animationFrame = requestAnimationFrame(step);
    }

    // Attach listeners to the parent card instead of SVG
    card.addEventListener('mouseenter', () => animateGradient(1)); // fill rises
    card.addEventListener('mouseleave', () => animateGradient(0)); // fill falls
  });


});


// ============================================
// SEC-2: Small WebGL paint/fluid effect (adapted)
// Replaces the 2D canvas paint with a small WebGL fluid simulation
// ============================================
// Initialize water/paint effect on all canvases with class `waterEffect`.
(function () {
  'use strict';
  // debugger
  const canvases = document.querySelectorAll('canvas.waterEffect');
  if (!canvases || canvases.length === 0) return;

  canvases.forEach(canvas => initWaterEffect(canvas));

  function initWaterEffect(canvas) {
    if (!canvas) return;

    const container = canvas.closest('.sec-2') || canvas.parentElement || document.body;

    // ensure canvas fills section horizontally, and match section height
    function fitCanvas() {
      // keep left/top/width as before (absolute inside the container)
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';

      // compute container height and apply only height changes
      const rect = container.getBoundingClientRect();
      const heightPx = Math.max(0, Math.round(rect.height));
      canvas.style.height = heightPx + 'px';

      // start hidden until user interaction (so first show has no splat/effect)
      if (!canvas.style.opacity) canvas.style.opacity = '0';

      // set backing buffer height while keeping current clientWidth
      const DPR = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * DPR));
      canvas.height = Math.max(1, Math.round(heightPx * DPR));
    }

    fitCanvas();

    // update height while scrolling so the canvas height follows the section
    window.addEventListener('scroll', fitCanvas, { passive: true });

    // Config (from your snippet)
    let config = {
      TEXTURE_DOWNSAMPLE: 1,
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.99,
      PRESSURE_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 25,
      CURL: 30,
      // base splat radius (will be modulated by pointer speed)
      SPLAT_RADIUS: 0.003
    };

    let pointers = [];
    let splatStack = [];
    // don't run the heavy loop until user interacts
    let isRunning = false;

    function pointerPrototype() {
      this.id = -1;
      this.x = 0;
      this.y = 0;
      this.dx = 0;
      this.dy = 0;
      this.down = false;
      this.moved = false;
      this.color = [30, 0, 300];
    }

    pointers.push(new pointerPrototype());

    // Fallback 2D painter (used if WebGL init fails)
    function fallback2DPaint() {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const DPR = Math.max(1, window.devicePixelRatio || 1);

      function resize2D() {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = Math.round(w * DPR);
        canvas.height = Math.round(h * DPR);
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      }

      const blobs = [
        { x: 0.22, y: 0.38, r: 0.18, color: '#913832' },
        { x: 0.50, y: 0.28, r: 0.14, color: '#c1655a' },
        { x: 0.73, y: 0.55, r: 0.20, color: '#e9cfc7' }
      ];

      function draw2D(progress) {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        // remove heavy blur to keep initial image crisp
        ctx.filter = 'none';
        blobs.forEach((b, i) => {
          const jitterX = Math.sin((progress + i * 0.35) * Math.PI * 2) * (w * 0.02);
          const jitterY = Math.cos((progress + i * 0.55) * Math.PI * 2) * (h * 0.015);
          const cx = b.x * w + jitterX;
          const cy = b.y * h + jitterY;
          const radius = Math.max(8, b.r * w * (0.25 + progress * 1.1));
          ctx.beginPath();
          ctx.fillStyle = b.color;
          ctx.globalAlpha = 0.9;
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }

      function onScrollOrResize() {
        const rect = container.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const total = vh + rect.height;
        const visible = Math.max(0, Math.min(1, (vh - rect.top) / total));
        // draw2D(visible);
      }

      window.addEventListener('scroll', onScrollOrResize, { passive: true });
      window.addEventListener('resize', () => { resize2D(); onScrollOrResize(); }, { passive: true });
      resize2D();
      onScrollOrResize();
    }

    try {
      const { gl, ext } = getWebGLContext(canvas);

      function getWebGLContext(canvas) {
        const params = { alpha: true, depth: false, stencil: false, antialias: false };
        let gl = canvas.getContext('webgl2', params);
        const isWebGL2 = !!gl;
        if (!isWebGL2)
          gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

        let halfFloat;
        let supportLinearFiltering;
        if (isWebGL2) {
          gl.getExtension('EXT_color_buffer_float');
          supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
        } else {
          halfFloat = gl.getExtension('OES_texture_half_float');
          supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
        }

      //  gl.clearColor(240.0 / 255.0, 230.0 / 255.0, 218.0 / 255.0, 0.0);

        const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat && halfFloat.HALF_FLOAT_OES;
        let formatRGBA;
        let formatRG;
        let formatR;

        if (isWebGL2) {
          formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
          formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
          formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
        }
        else {
          formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
          formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
          formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        }

        return {
          gl,
          ext: {
            formatRGBA,
            formatRG,
            formatR,
            halfFloatTexType,
            supportLinearFiltering
          }
        };
      }

      function getSupportedFormat(gl, internalFormat, format, type) {
        if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
          switch (internalFormat) {
            case gl.R16F:
              return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
            case gl.RG16F:
              return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
            default:
              return null;
          }
        }

        return {
          internalFormat,
          format
        }
      }

      function supportRenderTextureFormat(gl, internalFormat, format, type) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 2, 2, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status != gl.FRAMEBUFFER_COMPLETE)
          return false;
        return true;
      }

      // --- shader / GL helper parts (compileShader, GLProgram, etc.) ---
      function GLProgram(vertexShader, fragmentShader) {
        this.uniforms = {};
        this.program = gl.createProgram();

        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
          throw gl.getProgramInfoLog(this.program);

        const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
          const uniformName = gl.getActiveUniform(this.program, i).name;
          this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName);
        }
      }
      GLProgram.prototype.bind = function () { gl.useProgram(this.program); };

      function compileShader(type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
          throw gl.getShaderInfoLog(shader);

        return shader;
      }

      // Vertex shader
      const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `);

      // Fragment shaders (clear/display/splat/advection/etc.)
      const clearShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
  `);

      const displayShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    // Palette uniforms (set from JS after program creation)
    uniform vec4 uPrimaryColor;
    uniform vec4 uSecondaryColor;
    uniform vec4 uAccentColor;

    void main () {
        vec4 col = texture2D(uTexture, vUv);
        float a = clamp(length(col.rgb) * 0.5, 0.0, 0.2);
        vec3 outCol = uPrimaryColor.rgb;
        gl_FragColor = vec4(outCol, a);
    }
  `);

      const splatShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
  `);

      const advectionManualFilteringShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (in sampler2D sam, in vec2 p) {
        vec4 st;
        st.xy = floor(p - 0.5) + 0.5;
        st.zw = st.xy + 1.0;
        vec4 uv = st * texelSize.xyxy;
        vec4 a = texture2D(sam, uv.xy);
        vec4 b = texture2D(sam, uv.zy);
        vec4 c = texture2D(sam, uv.xw);
        vec4 d = texture2D(sam, uv.zw);
        vec2 f = p - st.xy;
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main () {
        vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;
        gl_FragColor = dissipation * bilerp(uSource, coord);
        gl_FragColor.a = 1.0;
    }
  `);

      const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform float dt;
    uniform float dissipation;

    void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
        gl_FragColor.a = 1.0;
    }
  `);

      const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;

    vec2 sampleVelocity (in vec2 uv) {
        vec2 multiplier = vec2(1.0, 1.0);
        if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }
        if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }
        if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }
        if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }
        return multiplier * texture2D(uVelocity, uv).xy;
    }

    void main () {
        float L = sampleVelocity(vL).x;
        float R = sampleVelocity(vR).x;
        float T = sampleVelocity(vT).y;
        float B = sampleVelocity(vB).y;
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
  `);

      const curlShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);
    }
  `);

      const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = vec2(abs(T) - abs(B), 0.0);
        force *= 1.0 / length(force + 0.00001) * curl * C;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
  `);

      const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    vec2 boundary (in vec2 uv) {
        uv = min(max(uv, 0.0), 1.0);
        return uv;
    }

    void main () {
        float L = texture2D(uPressure, boundary(vL)).x;
        float R = texture2D(uPressure, boundary(vR)).x;
        float T = texture2D(uPressure, boundary(vT)).x;
        float B = texture2D(uPressure, boundary(vB)).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
  `);

      const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
    precision highp float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    vec2 boundary (in vec2 uv) {
        uv = min(max(uv, 0.0), 1.0);
        return uv;
    }

    void main () {
        float L = texture2D(uPressure, boundary(vL)).x;
        float R = texture2D(uPressure, boundary(vR)).x;
        float T = texture2D(uPressure, boundary(vT)).x;
        float B = texture2D(uPressure, boundary(vB)).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
  `);

      // --- framebuffers / simulation setup ---
      let textureWidth;
      let textureHeight;
      let density;
      let velocity;
      let divergence;
      let curl;
      let pressure;
      initFramebuffers();

      const clearProgram = new GLProgram(baseVertexShader, clearShader);
      const displayProgram = new GLProgram(baseVertexShader, displayShader);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      const splatProgram = new GLProgram(baseVertexShader, splatShader);
      const advectionProgram = new GLProgram(baseVertexShader, ext.supportLinearFiltering ? advectionShader : advectionManualFilteringShader);
      const divergenceProgram = new GLProgram(baseVertexShader, divergenceShader);
      const curlProgram = new GLProgram(baseVertexShader, curlShader);
      const vorticityProgram = new GLProgram(baseVertexShader, vorticityShader);
      const pressureProgram = new GLProgram(baseVertexShader, pressureShader);
      const gradienSubtractProgram = new GLProgram(baseVertexShader, gradientSubtractShader);

      const palette = {
        primary:  [0.502, 0.455, 0.416, 1.0],
        secondary:[0.792, 0.698, 0.639, 1.0],
        accent:   [0.855, 0.792, 0.737, 1.0]
      };

      try {
        displayProgram.bind();
        if (displayProgram.uniforms.uPrimaryColor) gl.uniform4fv(displayProgram.uniforms.uPrimaryColor, palette.primary);
        if (displayProgram.uniforms.uSecondaryColor) gl.uniform4fv(displayProgram.uniforms.uSecondaryColor, palette.secondary);
        if (displayProgram.uniforms.uAccentColor) gl.uniform4fv(displayProgram.uniforms.uAccentColor, palette.accent);
      } catch (e) {
        console.warn('Could not set palette uniforms on displayProgram:', e);
      }

      function initFramebuffers() {
        textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE;
        textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE;

        const texType = ext.halfFloatTexType;
        const rgba = ext.formatRGBA;
        const rg = ext.formatRG;
        const r = ext.formatR;

        density = createDoubleFBO(2, textureWidth, textureHeight, rgba.internalFormat, rgba.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
        velocity = createDoubleFBO(0, textureWidth, textureHeight, rg.internalFormat, rg.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
        divergence = createFBO(4, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
        curl = createFBO(5, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
        pressure = createDoubleFBO(6, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
      }

      function createFBO(texId, w, h, internalFormat, format, type, param) {
        gl.activeTexture(gl.TEXTURE0 + texId);
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.viewport(0, 0, w, h);
        gl.clear(gl.COLOR_BUFFER_BIT);

        return [texture, fbo, texId];
      }

      function createDoubleFBO(texId, w, h, internalFormat, format, type, param) {
        let fbo1 = createFBO(texId, w, h, internalFormat, format, type, param);
        let fbo2 = createFBO(texId + 1, w, h, internalFormat, format, type, param);

        return {
          get read() { return fbo1; },
          get write() { return fbo2; },
          swap() { let temp = fbo1; fbo1 = fbo2; fbo2 = temp; }
        }
      }

      const blit = (() => {
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);

        return (destination) => {
          gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
          gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        }
      })();

      let lastTime = Date.now();
      // Do not start the render loop automatically. Wait for first user interaction
      // which will call startLoop() and run update().

      function update() {
        resizeCanvas();

        const dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
        lastTime = Date.now();

        gl.viewport(0, 0, textureWidth, textureHeight);

        if (splatStack.length > 0) multipleSplats(splatStack.pop());

        advectionProgram.bind();
        gl.uniform2f(advectionProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read[2]);
        gl.uniform1i(advectionProgram.uniforms.uSource, velocity.read[2]);
        gl.uniform1f(advectionProgram.uniforms.dt, dt);
        gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
        blit(velocity.write[1]);
        velocity.swap();

        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read[2]);
        gl.uniform1i(advectionProgram.uniforms.uSource, density.read[2]);
        gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
        blit(density.write[1]);
        density.swap();

        for (let i = 0; i < pointers.length; i++) {
          const pointer = pointers[i];
          if (pointer.moved) { splat(pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color); pointer.moved = false; }
        }

        curlProgram.bind();
        gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read[2]);
        blit(curl[1]);

        vorticityProgram.bind();
        gl.uniform2f(vorticityProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read[2]);
        gl.uniform1i(vorticityProgram.uniforms.uCurl, curl[2]);
        gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
        gl.uniform1f(vorticityProgram.uniforms.dt, dt);
        blit(velocity.write[1]);
        velocity.swap();

        divergenceProgram.bind();
        gl.uniform2f(divergenceProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read[2]);
        blit(divergence[1]);

        clearProgram.bind();
        let pressureTexId = pressure.read[2];
        gl.activeTexture(gl.TEXTURE0 + pressureTexId);
        gl.bindTexture(gl.TEXTURE_2D, pressure.read[0]);
        gl.uniform1i(clearProgram.uniforms.uTexture, pressureTexId);
        gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION);
        blit(pressure.write[1]);
        pressure.swap();

        pressureProgram.bind();
        gl.uniform2f(pressureProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence[2]);
        pressureTexId = pressure.read[2];
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressureTexId);
        gl.activeTexture(gl.TEXTURE0 + pressureTexId);
        for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) { gl.bindTexture(gl.TEXTURE_2D, pressure.read[0]); blit(pressure.write[1]); pressure.swap(); }

        gradienSubtractProgram.bind();
        gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
        gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read[2]);
        gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read[2]);
        blit(velocity.write[1]);
        velocity.swap();

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        displayProgram.bind();
        gl.uniform1i(displayProgram.uniforms.uTexture, density.read[2]);
        blit(null);

        requestAnimationFrame(update);
      }

      function splat(x, y, dx, dy, color) {
        splatProgram.bind();
        gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read[2]);
        gl.uniform1f(splatProgram.uniforms.aspectRatio, (canvas.width / canvas.height)-10);
        gl.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
        gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
        (function(){ const speed = Math.sqrt(dx * dx + dy * dy); const norm = Math.min(speed / 1000, 1.0); const scale = 1.0 - 0.7 * norm; const radius = Math.max(0.001, 0); gl.uniform1f(splatProgram.uniforms.radius, radius); })();
        blit(velocity.write[1]); velocity.swap();

        gl.uniform1i(splatProgram.uniforms.uTarget, density.read[2]);
        try { const sec = palette.secondary; gl.uniform3f(splatProgram.uniforms.color, sec[0] * 8.0, sec[1] * 8.0, sec[2] * 8.0); } catch (e) { gl.uniform3f(splatProgram.uniforms.color, color[0] * 0.3, color[1] * 0.3, color[2] * 0.3); }
        blit(density.write[1]); density.swap();
      }

      function multipleSplats(amount) { for (let i = 0; i < amount; i++) { const color = [Math.random() * 10, Math.random() * 10, Math.random() * 10]; const x = canvas.width * Math.random(); const y = canvas.height * Math.random(); const dx = 1000 * (Math.random() - 0.5); const dy = 1000 * (Math.random() - 0.5); splat(x, y, dx, dy, color); } }

      function resizeCanvas() { if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; initFramebuffers(); } }

      // Start the GL / painter loop on first meaningful user interaction.
      function startLoop() {
        if (isRunning) return;
        isRunning = true;

        // Clear any pending splats and reset pointer motion so nothing "bursts" on first frame
        splatStack = [];
        for (let i = 0; i < pointers.length; i++) {
          pointers[i].moved = false;
          pointers[i].dx = 0;
          pointers[i].dy = 0;
          // position pointers roughly at center to avoid large initial deltas
          pointers[i].x = canvas.width * 0.5;
          pointers[i].y = canvas.height * 0.5;
        }

        // ensure we have a fresh timestamp and perform the first update
        lastTime = Date.now();
        update();

        // fade-in the canvas so any shader warm-up isn't visually jarring
        canvas.style.transition = canvas.style.transition || 'opacity 300ms ease';
        requestAnimationFrame(() => { canvas.style.opacity = '1'; });
      }

      // ensure startLoop is invoked on the first interaction
      const ensureStarted = () => startLoop();
      window.addEventListener('mousemove', ensureStarted, { once: true, passive: true });
      window.addEventListener('mousedown', ensureStarted, { once: true });
      window.addEventListener('touchstart', ensureStarted, { once: true, passive: true });

      // Listen on the window so the canvas can sit on top (pointer-events: none)
      const moveHandler = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left; const y = e.clientY - rect.top;
        pointers[0].moved = true; pointers[0].dx = (x - pointers[0].x) * 10.0; pointers[0].dy = (y - pointers[0].y) * 10.0; pointers[0].x = x; pointers[0].y = y;
      };
      window.addEventListener('mousemove', moveHandler, { passive: true });

      const touchMoveHandler = (e) => {
        const touches = e.touches; const rect = canvas.getBoundingClientRect(); for (let i = 0; i < touches.length; i++) { let pointer = pointers[i] || (pointers[i] = new pointerPrototype()); const x = touches[i].clientX - rect.left; const y = touches[i].clientY - rect.top; pointer.moved = true; pointer.dx = (x - pointer.x) * 10.0; pointer.dy = (y - pointer.y) * 10.0; pointer.x = x; pointer.y = y; }
      };
      window.addEventListener('touchmove', touchMoveHandler, { passive: false });

      window.addEventListener('mousedown', () => { pointers[0].down = true; pointers[0].color = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2]; });

      window.addEventListener('touchstart', (e) => { const touches = e.touches; const rect = canvas.getBoundingClientRect(); for (let i = 0; i < touches.length; i++) { if (i >= pointers.length) pointers.push(new pointerPrototype()); const x = touches[i].clientX - rect.left; const y = touches[i].clientY - rect.top; pointers[i].id = touches[i].identifier; pointers[i].down = true; pointers[i].x = x; pointers[i].y = y; pointers[i].color = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2]; } }, { passive: false });

      window.addEventListener('mouseup', () => { pointers[0].down = false; });

      window.addEventListener('touchend', (e) => { const touches = e.changedTouches; for (let i = 0; i < touches.length; i++) for (let j = 0; j < pointers.length; j++) if (touches[i].identifier == pointers[j].id) pointers[j].down = false; });

    } catch (err) {
      console.warn('WebGL paint failed, falling back to 2D painter:', err);
      try { fallback2DPaint(); } catch (fallbackErr) { console.error('2D fallback also failed:', fallbackErr); }
    }
  }
})();