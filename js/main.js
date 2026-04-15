/* ====================================================
   GUIA DE ATIVIDADES – MAIN JS
   Animações, interatividade e micro-comportamentos
   ==================================================== */

(function () {
  'use strict';

  // ─── INTERSECTION OBSERVER – FADE IN ──────────────────
  const fadeEls = document.querySelectorAll(
    '.section, .comment-card, .pain-item, .consequence-item, .receive-item, .objection-card, .stat-card'
  );

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeEls.forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // ─── CTA PULSE ANIMATION ──────────────────────────────
  function pulseCtaButtons() {
    const ctaBtns = document.querySelectorAll('.cta-button');
    ctaBtns.forEach((btn) => {
      btn.style.animation = 'ctaPulse 1.8s ease-in-out infinite';
    });
  }

  // Injeta keyframe do pulse no documento
  const pulseStyle = document.createElement('style');
  pulseStyle.textContent = `
    @keyframes ctaPulse {
      0%, 100% { box-shadow: 0 6px 32px rgba(16,185,129,0.5), 0 2px 8px rgba(0,0,0,0.3); }
      50%       { box-shadow: 0 8px 48px rgba(16,185,129,0.75), 0 4px 16px rgba(0,0,0,0.4); }
    }
  `;
  document.head.appendChild(pulseStyle);

  // Aguarda os CTAs ficarem visíveis antes de animar
  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        pulseCtaButtons();
        ctaObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const firstCta = document.getElementById('cta-main');
  if (firstCta) ctaObserver.observe(firstCta);

  // ─── SCROLL PROGRESS INDICATOR ───────────────────────
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  Object.assign(progressBar.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '3px',
    width: '0%',
    background: 'linear-gradient(90deg, #7c3aed, #ec4899)',
    zIndex: '9999',
    transition: 'width 0.1s linear',
    pointerEvents: 'none',
  });
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }, { passive: true });

  // ─── CONTADOR DE LEITORES ATIVOS (SOCIAL PROOF) ───────
  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const liveCounter = document.createElement('div');
  liveCounter.id = 'live-counter';

  const baseCount = randomBetween(38, 67);
  liveCounter.textContent = `👀 ${baseCount} pessoas lendo agora`;

  Object.assign(liveCounter.style, {
    position: 'fixed',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(14,6,24,0.92)',
    border: '1px solid rgba(124,58,237,0.4)',
    borderRadius: '50px',
    padding: '8px 18px',
    fontSize: '13px',
    color: '#c4b5fd',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: '600',
    zIndex: '200',
    whiteSpace: 'nowrap',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    transition: 'opacity 0.5s ease',
    pointerEvents: 'none',
  });

  document.body.appendChild(liveCounter);

  // Oculta o contador quando o usuário chega no CTA final
  const ctaFinal = document.getElementById('cta-final');
  if (ctaFinal) {
    const counterHideObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        liveCounter.style.opacity = entry.isIntersecting ? '0' : '1';
      });
    }, { threshold: 0.2 });
    counterHideObserver.observe(ctaFinal);
  }

  // Atualiza o contador periodicamente para parecer ao vivo
  setInterval(() => {
    const current = parseInt(liveCounter.textContent.match(/\d+/)[0]);
    const delta = randomBetween(-2, 3);
    const next = Math.max(25, Math.min(99, current + delta));
    liveCounter.textContent = `👀 ${next} pessoas lendo agora`;
  }, 8000);

  // ─── CLICK TRACKING – CTA ─────────────────────────────
  document.querySelectorAll('.cta-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      // Efeito visual de clique
      btn.style.transform = 'scale(0.96)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);
    });
  });

  // ─── SMOOTH SCROLL para âncoras internas ─────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── LAZY LOAD IFRAMES (desempenho) ──────────────────
  const iframes = document.querySelectorAll('iframe[src]');

  const iframeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          if (!iframe.dataset.loaded) {
            iframe.dataset.loaded = 'true';
          }
          iframeObserver.unobserve(iframe);
        }
      });
    },
    { rootMargin: '200px' }
  );

  iframes.forEach((iframe) => iframeObserver.observe(iframe));

  // ─── URGÊNCIA DINÂMICA – tempo na página ──────────────
  let timeOnPage = 0;
  const urgencyInterval = setInterval(() => {
    timeOnPage++;
    // Após 3 minutos na página, exibe badge de urgência extra
    if (timeOnPage === 180) {
      const urgencyBadge = document.createElement('div');
      urgencyBadge.textContent = '🔥 Oferta ativa agora — não perca!';
      Object.assign(urgencyBadge.style, {
        position: 'fixed',
        top: '44px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
        color: '#fff',
        borderRadius: '50px',
        padding: '8px 20px',
        fontSize: '13px',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: '700',
        zIndex: '150',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 20px rgba(239,68,68,0.5)',
        animation: 'urgencyFadeIn 0.5s ease forwards',
        pointerEvents: 'none',
      });

      const urgencyAnim = document.createElement('style');
      urgencyAnim.textContent = `
        @keyframes urgencyFadeIn {
          from { opacity: 0; top: 36px; }
          to   { opacity: 1; top: 44px; }
        }
      `;
      document.head.appendChild(urgencyAnim);
      document.body.appendChild(urgencyBadge);

      setTimeout(() => {
        urgencyBadge.style.opacity = '0';
        urgencyBadge.style.transition = 'opacity 0.5s ease';
        setTimeout(() => urgencyBadge.remove(), 600);
      }, 6000);

      clearInterval(urgencyInterval);
    }
  }, 1000);

})();
