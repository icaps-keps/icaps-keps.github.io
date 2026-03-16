const items = document.querySelectorAll(".timeline-item");
const today = new Date();

// Shift today by 1 day
today.setDate(today.getDate() - 1);

items.forEach(item => {
  const dateISO = item.querySelector("p").dataset.date; // <-- ISO date from data attribute
  const dot = item.querySelector("span");
  const date = new Date(dateISO);

  if (date < today) {
    item.classList.add('opacity-50');

  } else if (date.toDateString() === today.toDateString()) {
    dot.classList.replace('bg-gray-400','bg-cyan-700');
    dot.classList.add('glow');
  }
});