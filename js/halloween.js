// Halloween theme toggle 

const halloweenStylesheet = document.getElementById('halloween-stylesheet');
const THEME_KEY = 'halloween-theme-enabled';

function initializeThemeHall() {

    const isHalloween = localStorage.getItem(THEME_KEY) === 'true';
    if (halloweenStylesheet) {
        halloweenStylesheet.disabled = !isHalloween;
        if (isHalloween) {
            // add class to both documentElement and body so styles that depend on either work
            document.documentElement.classList.add('theme-active');
            if (document.body) document.body.classList.add('theme-active');
        }
    }

}

function toggleTheme() {
    if (!halloweenStylesheet) return;
    const currentState = halloweenStylesheet.disabled;
    halloweenStylesheet.disabled = !currentState;
    const isHalloweenNow = !currentState;
    // toggle class on root and body for consistency
    document.documentElement.classList.toggle('theme-active', isHalloweenNow);
    if (document.body) document.body.classList.toggle('theme-active', isHalloweenNow);
    console.log('toggleTheme: halloweenStylesheet exists?', !!halloweenStylesheet, 'now enabled?', isHalloweenNow);
    localStorage.setItem(THEME_KEY, String(isHalloweenNow));
}

document.addEventListener('DOMContentLoaded', initializeThemeHall);
