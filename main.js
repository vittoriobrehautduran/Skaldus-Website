document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--color-surface)';
      navLinks.style.padding = '1rem';
      navLinks.style.borderBottom = '1px solid var(--color-border)';
    });
  }

  // Club Modal Logic
  const modalTriggers = document.querySelectorAll('[data-action="open-club-modal"]');
  const modalHTML = `
    <div class="modal-overlay" id="clubModal">
      <div class="modal-content">
        <button class="modal-close" aria-label="Stäng">✕</button>
        <h3 class="mb-2">Välj din förening</h3>
        <p class="mb-4">Sök efter din förening för att logga in i er Skaldus-miljö.</p>
        <input type="text" class="club-search" placeholder="Sök förening..." />
        <div class="club-list"></div>
        <p class="text-sm text-center" style="margin-top: 1rem; font-size: 0.85rem; color: var(--color-text-secondary);">
          Hittar du inte din klubb? <a href="/kontakt.html">Kontakta din admin</a>.
        </p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('clubModal');
  const closeBtn = modal.querySelector('.modal-close');
  const searchInput = modal.querySelector('.club-search');
  const listContainer = modal.querySelector('.club-list');

  let clubsData = [];

  // Fetch clubs
  fetch('/clubs.json')
    .then(res => res.json())
    .then(data => {
      clubsData = data;
      renderClubs(clubsData);
    });

  function renderClubs(clubs) {
    listContainer.innerHTML = '';
    if (clubs.length === 0) {
      listContainer.innerHTML = '<div class="club-item text-center">Inga resultat</div>';
      return;
    }
    clubs.forEach(club => {
      const el = document.createElement('div');
      el.className = 'club-item';
      el.textContent = club.name;
      el.addEventListener('click', () => {
        window.location.href = `https://${club.slug}.skaldus.com`;
      });
      listContainer.appendChild(el);
    });
  }

  // Event Listeners
  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      searchInput.focus();
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = clubsData.filter(c => c.name.toLowerCase().includes(val));
    renderClubs(filtered);
  });
});
