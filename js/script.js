    // Initialize price slider
    const priceSlider = document.getElementById('price-slider');
    noUiSlider.create(priceSlider, {
        start: [100, 1000],
        connect: true,
        range: {
            'min': 100,
            'max': 1000
        }
    });

    // Add click handlers for color options
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // Add click handlers for size options
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', () => {
            option.classList.toggle('selected');
        });
    });