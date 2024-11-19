const toggleButton = document.getElementById('theme-toggle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

// Funksjon for å oppdatere ikonene
const updateIcons = () => {
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains('dark')) {
    sun.classList.add('hidden'); // Vis sol-ikonet
    moon.classList.remove('hidden');  // Skjul måne-ikonet
  } else {
    sun.classList.remove('hidden');   // Skjul sol-ikonet
    moon.classList.add('hidden'); // Vis måne-ikonet
  }
};

// Event Listener for å bytte tema
toggleButton.addEventListener('click', () => {
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    htmlElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
  updateIcons(); // Oppdater ikonene etter tema-bytte
});

// Ved oppstart: Sett riktig tema og oppdater ikonene
const savedTheme = localStorage.theme;
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
updateIcons(); // Oppdater ikonene basert på initialt tema
