const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// Live clock uses the visitor's local timezone. Change the locale/timeZone here if needed.
function updateClock() {
  const now = new Date();
  $('#clock').textContent = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }).format(now);
  const date = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(now);
  $('#longDate').textContent = date;
  $('#todayDate').textContent = date;
}
updateClock();
setInterval(updateClock, 1000);

// Sidebar navigation: demo sections show a small notice until real pages are connected.
$$('.nav-item').forEach((item) => item.addEventListener('click', () => {
  $$('.nav-item').forEach((nav) => nav.classList.remove('active'));
  item.classList.add('active');
  const page = item.dataset.page;
  $('#pageTitle').textContent = page;
  if (page !== 'Dashboard') showToast(`${page} section is ready to be connected.`);
  if (window.innerWidth <= 760) $('#sidebar').classList.remove('open');
}));
$('#menuToggle').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
$('#notificationButton').addEventListener('click', () => showToast('You are all caught up!'));
$('#userMenu').addEventListener('click', () => showToast('Signed in as Faraz Ahmed (demo account).'));

// Leave request demo modal.
const modal = $('#leaveModal');
$$('.add-leave').forEach((button) => button.addEventListener('click', () => {
  $('#leaveType').value = button.dataset.leave;
  $('#modalTitle').textContent = `Apply for ${button.dataset.leave.toLowerCase()}`;
  modal.hidden = false;
  $('#fromDate').focus();
}));
function closeModal() { modal.hidden = true; $('#leaveForm').reset(); }
$('#closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
$('#leaveForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const from = $('#fromDate').value;
  const to = $('#toDate').value;
  if (to < from) { showToast('End date must be on or after start date.'); return; }
  showToast('Demo request submitted on this device.');
  closeModal();
});

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
