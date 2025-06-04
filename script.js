const calendarEl = document.getElementById('calendar');
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
const exportBtn = document.getElementById('exportBtn');
const errorEl = document.getElementById('error');
let events = [];

function renderCalendar() {
  calendarEl.innerHTML = '';
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days.forEach(d => {
    const dayEl = document.createElement('div');
    dayEl.textContent = d;
    dayEl.className = 'text-center font-bold';
    calendarEl.appendChild(dayEl);
  });

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    calendarEl.appendChild(empty);
  }

  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement('div');
    day.className = 'bg-white p-2 border rounded text-center';
    day.textContent = i;
    calendarEl.appendChild(day);
  }
}

function updateEventList() {
  eventList.innerHTML = '<h2 class="text-xl font-semibold mb-2">Scheduled Events</h2>';
  events.forEach((ev) => {
    const evEl = document.createElement('div');
    evEl.className = 'bg-white p-3 my-2 shadow rounded';
    evEl.innerHTML = `<strong>${ev.title}</strong> - ${ev.date} ${ev.time}`;
    eventList.appendChild(evEl);
  });
}

function scheduleReminder(event) {
  const eventTime = new Date(`${event.date}T${event.time}`);
  const now = new Date();
  const delay = eventTime - now;
  if (delay > 0) {
    setTimeout(() => {
      alert(`Reminder: ${event.title} at ${event.time}`);
    }, delay);
  }
}

eventForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('eventTitle').value.trim();
  const date = document.getElementById('eventDate').value;
  const time = document.getElementById('eventTime').value;

  if (!title || !date || !time) {
    errorEl.textContent = 'All fields are required.';
    errorEl.classList.remove('hidden');
    return;
  }

  const now = new Date();
  const eventDateTime = new Date(`${date}T${time}`);
  if (eventDateTime < now) {
    errorEl.textContent = 'Cannot set a reminder in the past.';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  const newEvent = { title, date, time };
  events.push(newEvent);
  updateEventList();
  scheduleReminder(newEvent);
  eventForm.reset();
});

exportBtn.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(events, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'schedule.json';
  a.click();
  URL.revokeObjectURL(url);
});

renderCalendar();
