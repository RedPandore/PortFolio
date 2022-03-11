var container = document.querySelector('.content-top');
let root = document.documentElement;
var newElem = document.createElement('div');
newElem.innerHTML =
    '<div class="dark-mode-toggle"><input class="checkbox" type="checkbox"><label class="switch"><i class="fas fa-sun"></i><i class="fas fa-moon"></i><div class="ball"></div></label></div>';
container.insertBefore(newElem, container.lastChild);
var checkbox = document.querySelector(
    '.dark-mode-toggle input[type="checkbox"]'
);

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        // Dark mode on
        localStorage.setItem('darkMode', 'true');
        isDarkMode(true);
    } else if (!checkbox.checked)  {
        // Dark mode off
        localStorage.setItem('darkMode', 'false');
        isDarkMode(false);
    }
});

var darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        checkbox.checked = true;
       isDarkMode(true);
    } else if(darkMode === 'false') {
       checkbox.checked = false;
      isDarkMode(false);
    }


function isDarkMode(props) {
    if (props) {
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', '#2c2c2c');
        root.style.setProperty('--color-primary', '#dc4c4c');
        root.style.setProperty('--blue-gray-50', '#2c2c2c');
        root.style.setProperty('--blue-gray-200', '#2c2c2c');
        root.style.setProperty('--text-color', '#dc4c4c');
        root.style.setProperty('--text-color-dark', '#dc4c4c');
        root.style.setProperty('--table-thead-color', '#dc4c4c');
        root.style.setProperty('--sidebar-logo-color', '#dc4c4c');
        root.style.setProperty('--form-label-color', '#dc4c4c');
        root.style.setProperty('--highlight-bg', 'white');
    } else {
        root.style.setProperty('--black', '#000');
        root.style.setProperty('--white', '#fff');
        root.style.setProperty('--color-primary', 'hsl(230, 61%, 58%)');
        root.style.setProperty('--blue-gray-50', '#f8fafc');
        root.style.setProperty('--blue-gray-200', '#e2e8f0');
        root.style.setProperty('--text-color', '#1e293b');
        root.style.setProperty('--text-color-dark', 'hsl(229, 24%, 21%)');
        root.style.setProperty('--table-thead-color', '#1e293b');
        root.style.setProperty('--sidebar-logo-color', '#1e293b');
        root.style.setProperty('--form-label-color', '#1e293b');
        root.style.setProperty('--highlight-bg', 'rgba(255, 237, 40, .4)');
    }
}
