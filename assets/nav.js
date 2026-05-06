/* ═══════════════════════════════════════════
   VINA COMPANY — WORKDAY HUB
   Shared navigation bar
   Usage: <script src="../assets/nav.js"></script>
          <script>renderNav('home')</script>
   Pages: 'home' | 'playbook' | 'mapping'
   ═══════════════════════════════════════════ */

function renderNav(activePage) {
  // Detect depth from current path
  const path = window.location.pathname;
  const isRoot = !path.includes('/playbook/') && !path.includes('/mapping-tool/');
  const prefix = isRoot ? '' : '../';

  const links = [
    { id: 'home',     label: 'Home',              href: prefix + 'index.html' },
    { id: 'playbook', label: 'Main Concept',       href: prefix + 'playbook/index.html' },
    { id: 'mapping',  label: 'Data Mapping Tool',  href: prefix + 'mapping-tool/index.html' },
  ];

  const linksHTML = links.map(l => `
    <a class="hub-nav-link ${activePage === l.id ? 'active' : ''}" href="${l.href}">${l.label}</a>
  `).join('');

  const navHTML = `
    <nav class="hub-nav" id="hub-nav">
      <a class="hub-nav-brand" href="${prefix}index.html">
        <div class="hub-nav-logo">V</div>
        <span class="hub-nav-name">Vina Company · Workday Hub</span>
      </a>
      <div class="hub-nav-links">${linksHTML}</div>
    </nav>`;

  // Inject at top of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}
