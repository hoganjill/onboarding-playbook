/*
 * SETUP ANA-MARIA'S PLAYBOOK
 * 
 * Instructions:
 * 1. Go to: onboarding-playbook.quick.shopify.io
 * 2. Open browser console: Cmd+Option+J
 * 3. Paste this entire script and press Enter
 * 4. Wait ~30 seconds for everything to populate
 * 5. Review and click "Generate Playbook" to save
 */

(async function() {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const log = msg => console.log(`[setup] ${msg}`);

  // ── 1. Fill in config fields ────────────────────────────────
  log('Filling in config...');
  document.getElementById('hireName').value = 'Ana-Maria Mocanu';
  document.getElementById('hireRole').value = 'Director, Corporate Data';
  document.getElementById('hireStart').value = '2026-04-07';
  document.getElementById('hireManager').value = 'Nell Thomas';

  // ── 2. Update Key Guides ────────────────────────────────────
  log('Setting up Key Guides...');
  const guideCards = document.querySelectorAll('#guidesGrid .guide-card');
  const guideData = [
    { name: 'Jonathan Heard', role: 'Onboarding Coach', desc: 'Coaching Program Manager. M5+ and C9+ hires with direct reports are auto-enrolled. Jonathan will confirm your coach assignment.' },
    { name: 'Sarah Eagles', role: 'HR Business Partner', desc: 'Talent support — performance programs, org structure, headcount, internal movement.' },
    null, // IT stays
    { name: 'Nell Thomas', role: 'Manager', desc: 'VP, Data. Your direct manager.' },
    { name: 'Jill Hogan', role: 'Product Ops / EP', desc: 'Senior Product Operations Manager, Data. Your Ops partner for Corporate Data.' },
  ];
  guideCards.forEach((card, i) => {
    if (!guideData[i]) return;
    const nameEl = card.querySelector('.name');
    const descEl = card.querySelector('.desc');
    if (nameEl) nameEl.textContent = guideData[i].name;
    if (descEl) descEl.textContent = guideData[i].desc;
  });

  // ── 3. Look up Corporate Data domain ────────────────────────
  log('Looking up Corporate Data domain...');
  const domainInput = document.getElementById('domainInput');
  if (domainInput) {
    domainInput.value = 'Corporate Data';
    document.getElementById('domainGenBtn').click();
    log('Waiting for domain lookup + AI blurbs...');
    await wait(15000);
    log('Domain lookup complete');
  }

  // ── 4. Add extra channels ───────────────────────────────────
  log('Adding channels...');
  const extraChannels = [
    { name: 'data-insights-directors', note: 'Carly or Nell will add you' },
    { name: 'nell-direct-reports', note: 'Carly or Nell will add you' },
    { name: 'corp-data-talk', note: 'Open to join' },
    { name: 'corporate-data-leadership', note: 'Jill to add you' },
    { name: 'data-biweekly-biz-review', note: 'Jill to add you' },
    { name: 'data-monthly-recap-prep-2026', note: 'Jill to add you' },
  ];
  extraChannels.forEach(ch => {
    const list = document.getElementById('channelList');
    if (list && !list.innerHTML.includes(ch.name)) {
      list.insertAdjacentHTML('beforeend', `<div class="channel"><span class="ch-icon">#</span><div><div class="ch-name" contenteditable="true">${ch.name}</div><div class="ch-note" contenteditable="true">${ch.note}</div></div><span class="ch-tool" contenteditable="true">Slack</span></div>`);
    }
  });

  // ── 5. Add people to Leadership Team ────────────────────────
  log('Adding leadership team...');
  const leadership = [
    { name: 'Nell Thomas', email: 'nell.thomas@shopify.com', title: 'VP, Data', team: 'Data' },
    { name: 'Rajpreet Bajwa', email: 'rajpreet.bajwa@shopify.com', title: 'Director, Engineering, Data Infrastructure', team: 'Data Infrastructure' },
    { name: 'Auggie Fisher', email: 'auggie.fisher@shopify.com', title: 'Director, Analytics Engineering', team: 'Analytics Engineering' },
    { name: 'Spencer Lawrence', email: 'spencer.lawrence@shopify.com', title: 'Director, Revenue Data', team: 'Revenue Data' },
    { name: 'Ivan Zimin', email: 'ivan.zimin@shopify.com', title: 'Director, Product, Data', team: 'Data' },
    { name: 'Varun Madduri', email: 'varun.madduri@shopify.com', title: 'Director, Data Insights', team: 'Data' },
    { name: 'Dave Hedengren', email: 'dave.hedengren@shopify.com', title: 'Director, Data Insights', team: 'Data' },
    { name: 'Ratna Chembrolu', email: 'ratna.chembrolu@shopify.com', title: 'Director, Data Insights', team: 'Data' },
  ];
  leadership.forEach(p => {
    if (typeof createRichCard === 'function') {
      createRichCard('leadershipGrid', p);
    }
  });

  // ── 6. Add Key Partners to XFN ──────────────────────────────
  log('Adding key partners...');
  const partners = [
    { name: 'Steven Wu', email: 'steven.wu@shopify.com', title: 'Manager, Corporate Data Engineering', team: 'DEs embedded across your teams' },
    { name: 'Jill Hogan', email: 'jill.hogan@shopify.com', title: 'Senior Product Operations Manager', team: 'Your Ops partner for Corp Data' },
  ];
  partners.forEach(p => {
    if (typeof createRichCard === 'function') {
      createRichCard('xfnGrid', p);
    }
  });

  // ── 7. Update schedule ──────────────────────────────────────
  log('Note: Update the schedule manually — Ana-Maria\'s Week 1 includes Toronto travel for Startup Connections');

  // ── 8. Add rituals ─────────────────────────────────────────
  log('Adding Nell/Mikhail rituals...');
  const ritualsSection = document.getElementById('ritualsCards');
  if (ritualsSection) {
    const ritualCard = document.createElement('div');
    ritualCard.className = 'card';
    ritualCard.innerHTML = `<h3 contenteditable="true">Nell / Mikhail Team Rituals</h3><ul>
      <li contenteditable="true">Weekly (eventually biweekly) 1:1s with Nell</li>
      <li contenteditable="true">Monthly team syncs with Nell's direct reports</li>
      <li contenteditable="true">2× per year: Director bursts</li>
      <li contenteditable="true">Mikhail Skip Level Breakfasts (virtual) — cadence TBD</li>
      <li contenteditable="true">Monthly Coffee Chat Series w/ Nell — informal showcase of Data Leadership</li>
      <li contenteditable="true">Weekly Data RnD reviews w/ Mikhail</li>
    </ul>`;
    ritualsSection.insertBefore(ritualCard, ritualsSection.firstChild);
  }

  // ── 9. Add extra reading links ──────────────────────────────
  log('Adding reading links...');
  const readingList = document.getElementById('readingList');
  if (readingList) {
    const extraReads = [
      { icon: '📖', title: "Nell's Big Rocks for 2026", desc: 'Data team priorities and strategic direction', url: 'https://vault.shopify.io/posts/342798' },
      { icon: '📊', title: 'Data Townhall Deck', desc: 'Latest townhall presentation', url: 'https://docs.google.com/presentation/d/10tTK4-HXsO7i9dhPK5kIDA_Swkrm8MZ866kdqlK7dq4/edit' },
      { icon: '📊', title: 'Data @ Shopify Workbook', desc: "Director's only — key data and metrics", url: 'https://docs.google.com/spreadsheets/d/1INzQN_8YZEdLfQew6Lc5vUJJex6Whc1UpxhN9x1jkzw/edit?gid=429604276#gid=429604276' },
      { icon: '📖', title: 'Core Group Vault Page', desc: 'Core org team page', url: 'https://vault.shopify.io/teams/2089-Core' },
    ];
    extraReads.reverse().forEach(r => {
      readingList.insertAdjacentHTML('afterbegin', `<a href="${r.url}" target="_blank"><span class="link-icon">${r.icon}</span><div><div contenteditable="true">${r.title}</div><div class="link-desc" contenteditable="true">${r.desc}</div></div></a>`);
    });
  }

  log('✅ Done! Review everything, then click 🚀 Generate Playbook to save.');
  log('Schedule needs manual tweaks for Ana-Maria\'s Toronto travel week.');
  log('');
  log('After generating, share these links:');
  log('  View: onboarding-playbook.quick.shopify.io?id=ana-maria-mocanu&view');
  log('  Edit: onboarding-playbook.quick.shopify.io?id=ana-maria-mocanu');

})();
