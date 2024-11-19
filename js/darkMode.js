const toggleButton = document.getElementById('theme-toggle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

const updateIcons = () => {
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains('dark')) {
    sun.classList.add('hidden');
    moon.classList.remove('hidden');
  } else {
    sun.classList.remove('hidden');
    moon.classList.add('hidden');
  }
};


toggleButton.addEventListener('click', () => {
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    htmlElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
  updateIcons();
});


const savedTheme = localStorage.theme;
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
updateIcons(); 
