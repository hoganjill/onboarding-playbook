// Paste this entire script into the browser console on onboarding-playbook.quick.shopify.io
// It will fill in Ana-Maria's playbook and save it

(async function() {

// 1. Fill in config fields
document.getElementById('hireName').value = 'Ana-Maria Mocanu';
document.getElementById('hireRole').value = 'Director, Corporate Data';
document.getElementById('hireStart').value = '2026-04-07';
document.getElementById('hireManager').value = 'Nell Thomas';

// 2. Click Generate Playbook to save
await new Promise(r => setTimeout(r, 500));
document.querySelector('[onclick="generatePlaybook()"]').click();

console.log('✅ Basic config saved. Now populating details...');
await new Promise(r => setTimeout(r, 2000));

// 3. Populate Key Guides
const guideNames = document.querySelectorAll('#guidesGrid .guide-card .name');
const guideData = [
  { name: 'Jonathan Heard', field: 'coachName', note: 'Coaching Program Manager' },
  { name: 'Sarah Eagles', field: 'hrbpName', note: '' },
  null, // IT stays as-is
  { name: 'Nell Thomas', field: 'managerName', note: '' },
  { name: 'Jill Hogan', field: 'epName', note: '' },
];
guideNames.forEach((el, i) => {
  if (guideData[i] && guideData[i].name) {
    el.textContent = guideData[i].name;
    el.contentEditable = 'false';
  }
});

// 4. Look up Corporate Data domain
const domainInput = document.getElementById('domainInput');
if (domainInput) {
  domainInput.value = 'Corporate Data';
  document.getElementById('domainGenBtn').click();
  console.log('⏳ Looking up Corporate Data domain...');
  await new Promise(r => setTimeout(r, 8000)); // Wait for BQ + AI
}

console.log('✅ Done! Review the playbook, make edits, then click Generate Playbook again to save.');
console.log('Share link: ' + window.location.origin + window.location.pathname + '?id=ana-maria-mocanu&view');

})();
