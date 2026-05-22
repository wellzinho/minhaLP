(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* === NAV === */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navOverlay = document.getElementById('navOverlay');
  var waFab = document.getElementById('whatsappFab');

  function onScrollUI() {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 60);
    if (waFab) waFab.classList.toggle('visible', window.scrollY > 400);
  }

  if (navToggle && navOverlay) {
    navToggle.addEventListener('click', function () {
      var open = navOverlay.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
      navOverlay.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navOverlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navOverlay.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* === PROCESS LINE === */
  var processWrap = document.getElementById('processWrap');
  if (processWrap && 'IntersectionObserver' in window) {
    var procObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          procObs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    procObs.observe(processWrap);
  }

  /* === FAQ === */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (i) {
        i.classList.remove('is-open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* === TESTIMONIALS CAROUSEL === */
  var track = document.getElementById('testimonialsTrack');
  var dotsWrap = document.getElementById('testDots');
  var prevBtn = document.getElementById('testPrev');
  var nextBtn = document.getElementById('testNext');
  if (track && dotsWrap) {
    var cards = track.querySelectorAll('.testimonial-card');
    var index = 0;
    var max = cards.length;

    function getPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function updateCarousel() {
      var per = getPerView();
      var maxIndex = Math.max(0, max - per);
      if (index > maxIndex) index = maxIndex;
      var gap = 20;
      var cardW = cards[0].offsetWidth + gap;
      track.style.transform = 'translateX(-' + index * cardW + 'px)';
      dotsWrap.querySelectorAll('button').forEach(function (d, i) {
        d.classList.toggle('is-active', i === index);
      });
    }

    for (var i = 0; i < max; i++) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Ir para depoimento ' + (i + 1));
      (function (idx) {
        dot.addEventListener('click', function () { index = idx; updateCarousel(); });
      })(i);
      dotsWrap.appendChild(dot);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () {
      index = Math.max(0, index - 1);
      updateCarousel();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      index = Math.min(Math.max(0, max - getPerView()), index + 1);
      updateCarousel();
    });
    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  }

  /* === LENIS + GSAP === */
  function initMotion() {
    var lenis = null;

    if (typeof Lenis !== 'undefined' && !reducedMotion) {
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        touchMultiplier: 1.2
      });
      document.documentElement.classList.add('lenis', 'lenis-smooth');

      lenis.on('scroll', onScrollUI);

      if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(function (time) {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    } else {
      window.addEventListener('scroll', onScrollUI, { passive: true });
      onScrollUI();
    }

    if (typeof gsap === 'undefined' || reducedMotion) {
      document.querySelectorAll('.reveal, .hero-line').forEach(function (el) {
        el.style.opacity = '1';
      });
      return;
    }

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, delay: 0.3 })
      .from('.hero-line', { opacity: 0, y: 60, stagger: 0.1, duration: 0.8 }, '-=0.3')
      .from('.hero-para', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
      .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
      .from('.logo-bar', { opacity: 0, duration: 0.8 }, '-=0.2');

    gsap.utils.toArray('.pain-item').forEach(function (item, i) {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.08,
        scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
        immediateRender: false
      });
    });

    gsap.utils.toArray('.pillar').forEach(function (el, i) {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.12,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false
      });
    });

    gsap.utils.toArray('.nicho-card').forEach(function (el, i) {
      gsap.from(el, {
        opacity: 0,
        scale: 0.97,
        duration: 0.7,
        delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        immediateRender: false
      });
    });

    var aboutPhoto = document.querySelector('.about-photo');
    var aboutText = document.querySelector('.about-text');
    if (aboutPhoto) {
      gsap.from(aboutPhoto, { x: -40, opacity: 0, duration: 1, scrollTrigger: { trigger: aboutPhoto, start: 'top 80%' } });
    }
    if (aboutText && aboutText !== aboutPhoto) {
      gsap.from(aboutText, { x: 40, opacity: 0, duration: 1, scrollTrigger: { trigger: aboutText, start: 'top 80%' } });
    }

    gsap.utils.toArray('.cta-line').forEach(function (line, i) {
      gsap.from(line, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: { trigger: '#contato', start: 'top 75%' }
      });
    });

    gsap.utils.toArray('.reveal').forEach(function (el) {
      if (el.closest('#hero') || el.classList.contains('hero-line') || el.classList.contains('cta-line') || el.classList.contains('pain-item') || el.classList.contains('nicho-card') || el.classList.contains('pillar')) return;
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        immediateRender: false
      });
    });

    ScrollTrigger.refresh();
  }

  /* Bloqueia arraste horizontal acidental no mobile (overflow dos marquees/carrossel) */
  var touchStartX = 0;
  var touchStartY = 0;
  document.addEventListener(
    'touchstart',
    function (e) {
      if (e.touches.length !== 1) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    },
    { passive: true }
  );
  document.addEventListener(
    'touchmove',
    function (e) {
      if (e.touches.length !== 1) return;
      var dx = Math.abs(e.touches[0].clientX - touchStartX);
      var dy = Math.abs(e.touches[0].clientY - touchStartY);
      if (dx > dy && dx > 8) e.preventDefault();
    },
    { passive: false }
  );

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMotion);
  } else {
    initMotion();
  }
})();
