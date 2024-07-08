const handleColorsByFilters = (activeHighContrast) => {
    const root = document.documentElement;
    const normalStyles = {
        "--main-body-color": "#E6EFFD",
        "--main-title-color": "#FF567E",
        "--lines-color": "#FF567E",
        "--text-color": "#717171",
        "--all-info-container-color": "#E6EFFD",
        
        "--black-to-white-color": "#000000",
        "--white-to-black-color": "#FFFFFF",

    };
    const highContrastStyles = {
        "--main-body-color": "#070F2B",
        "--main-title-color": "#9290C3",
        "--lines-color": "#9290C3",
        "--text-color": "#E5E5E5",
        "--all-info-container-color": "#1B1A55",
        
        "--black-to-white-color": "#FFFFFF",
        "--white-to-black-color": "#000000",
    };

    const styles = activeHighContrast ? highContrastStyles : normalStyles;
    Object.entries(styles).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });
};

export { handleColorsByFilters };