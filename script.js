
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#projects').scrollIntoView({
            behavior: 'smooth'
        });
    });

  
    console.log("Portfolio loaded successfully by Jimi Olayiwola");
    
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : (hour < 18 ? "Good afternoon" : "Good evening");
    console.log(`${greeting}! Welcome to my portfolio.`);
});