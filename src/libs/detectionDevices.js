// Deteksi apakah perangkat mobile
export function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Deteksi apakah perangkat tablet
export function isTabletDevice() {
    return /iPad/i.test(navigator.userAgent);
}

// Deteksi apakah perangkat adalah iPad
export function isIPad() {
    return /iPad/i.test(navigator.userAgent);
}

// Deteksi apakah perangkat adalah laptop/desktop
export function isDesktopDevice() {
    return !isMobileDevice() && !isTabletDevice();
}