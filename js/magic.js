// Magic button script 
(function () {
    const btn = document.getElementById('magic-btn');
    if (!btn) return;

    function spawnParticle(char) {
        const el = document.createElement('div');
        el.className = 'magic-particle fall';
        // choose size
        const sizeClass = Math.random() < 0.33 ? 'small' : (Math.random() < 0.5 ? 'medium' : 'large');
        el.classList.add(sizeClass);
        el.textContent = char;
        // random horizontal position (in viewport width units)
        const left = Math.random() * 100; // vw
        el.style.left = left + 'vw';
        // random duration and delay
        const dur = (3 + Math.random() * 3).toFixed(2) + 's';
        const delay = (Math.random() * 0.6).toFixed(2) + 's';
        el.style.animationDuration = dur;
        el.style.animationDelay = delay;
        // improved, more visible color palette
        const colors = ['#8a6a09ff', '#ffc107', '#c5d81cff', '#ccc912ff', '#ffee04ff', '#ffb74d'];
        el.style.color = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(el);
        // remove after animation ends
        el.addEventListener('animationend', () => el.remove());
    }

    function burst() {
        const chars = ['★', '✦', '✹', '✸', '✷'];
        const count = 40; // slightly fewer but more visible
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const ch = chars[Math.floor(Math.random() * chars.length)];
                spawnParticle(ch);
            }, i * 45);
        }
    }

    btn.addEventListener('click', function () {
        // rotate button briefly
        btn.classList.remove('magic-spin');
        // force reflow to restart animation
        void btn.offsetWidth;
        btn.classList.add('magic-spin');
        // burst of particles
        burst();
    });

    // touch support: same as click
    btn.addEventListener('touchstart', function (e) {
        e.preventDefault();
        btn.click();
    }, { passive: false });
})();

