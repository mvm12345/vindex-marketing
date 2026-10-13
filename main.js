document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.window');

    panels.forEach(panel => {
        // Paneles deshabilitados (por ahora, Testimoniales): se muestran pero no se abren
        if (panel.classList.contains('window-disabled')) return;

        panel.addEventListener('click', (e) => {
            // If we click the close button, it will be handled by stopPropagation or separate listener
            if (e.target.classList.contains('close-btn')) {
                panel.classList.remove('active');
                return;
            }

            // Collapse others and expand this one
            if (!panel.classList.contains('active')) {
                panels.forEach(p => p.classList.remove('active'));
                panel.classList.add('active');
            }
        });

        // Close button logic
        const closeBtn = panel.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                panel.classList.remove('active');
            });
        }
    });

    // Optional: Add hover state for desktop for smoother peek
    /*
    panels.forEach(panel => {
        panel.addEventListener('mouseenter', () => {
            if (!document.querySelector('.window.active')) {
                panel.style.flex = '1.2';
            }
        });
        panel.addEventListener('mouseleave', () => {
            if (!panel.classList.contains('active')) {
                panel.style.flex = '1';
            }
        });
    });
    */
});
