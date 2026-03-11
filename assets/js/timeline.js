const items = document.querySelectorAll(".timeline-item");
const today = new Date();

// Shift today by 1 day
today.setDate(today.getDate() - 1);

items.forEach(item => {
  const dateText = item.querySelector("p").textContent;
  const dot = item.querySelector("span");
  const date = new Date(dateText);

  if (date < today) {
    dot.classList.replace('bg-gray-300','bg-green-500');
    item.classList.add('opacity-50');

  } else if (date.toDateString() === today.toDateString()) {
    dot.classList.replace('bg-gray-300','bg-blue-500');

    dot.classList.add('glow');
  }
});

