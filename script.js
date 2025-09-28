// Dark mode toggle
const darkToggle = document.createElement('button');
darkToggle.textContent = '🌙 Dark Mode';
darkToggle.className = 'btn btn-primary';
darkToggle.style.position = 'fixed';
darkToggle.style.bottom = '24px';
darkToggle.style.right = '24px';
darkToggle.style.zIndex = '1000';
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Newsletter form interaction
const newsletterForm = document.querySelector('#newsletter form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Remove previous notification if any
    const prevNotif = newsletterForm.querySelector('.notif');
    if (prevNotif) prevNotif.remove();

    const notif = document.createElement('div');
    notif.className = 'notif';
    notif.textContent = 'Terima kasih telah berlangganan!';
    notif.style.marginTop = '1rem';
    notif.style.background = '#d4edda';
    notif.style.color = '#155724';
    notif.style.padding = '0.75rem 1rem';
    notif.style.borderRadius = '8px';
    notif.style.fontWeight = 'bold';
    newsletterForm.appendChild(notif);

    newsletterForm.reset();
    setTimeout(() => notif.remove(), 3000);
  });
}