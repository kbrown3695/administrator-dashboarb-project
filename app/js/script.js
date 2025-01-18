const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');

const setColorMode = () => {
  return  localStorage.getItem('colorMode') ;
}

const setDarkMode = () => {
    (document.querySelector('body'). classList = 'dark');
}

const setLightMode = () => {
    (document.querySelector('body').classList = 'light');
}
 
const colorModeFromprefences = () => {
    return window.matchMedia('(prefers-color-scheme:dark)').matches
            ? 'dark'
            : 'light'
}

const loadAndUpdate = () => {
    const color = colorModeFromprefences() || colorModeFromprefences();
    color == 'dark' ? darkButton.click : lightButton.click();
}

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
    button.addEventListener('click',(event) => {
        darkButton.checked ? setDarkMode() : setLightMode();
    })
})
window.matchMedia('(prefers-color-scheme:dark)')
        .addEventListener('change',(event) => {
            lightButton.click();
        });
        loadAndUpdatecolor();