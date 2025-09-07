// Simple animation for page elements
document.addEventListener('DOMContentLoaded', function() {
    const authCards = document.querySelectorAll('.auth-card');
    const features = document.querySelectorAll('.feature');
    const productCards = document.querySelectorAll('.product-card');
    
    // Animate auth cards
    authCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Animate features
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.opacity = 1;
            feature.style.transform = 'translateY(0)';
        }, 300 * index);
    });
    
    // Animate product cards
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Set initial state for animations
    authCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    features.forEach(feature => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    productCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});