document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

const ipText = document.getElementById('ip-text');
const copyIpButton = document.getElementById('copy-ip');
copyIpButton.addEventListener('click', function() {
    const ip = ipText.textContent;
    const input = document.createElement('input');
    input.value = ip;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('服务器地址已复制到粘贴板！');
});

tailwind.config = { theme: { extend: { colors: { primary: '#007AFF', secondary: '#5856D6' }, borderRadius: { 'none': '0px', 'sm': '2px', DEFAULT: '4px', 'md': '8px', 'lg': '12px', 'xl': '16px', '2xl': '20px', '3xl': '24px', 'full': '9999px', 'button': '4px' } } } }