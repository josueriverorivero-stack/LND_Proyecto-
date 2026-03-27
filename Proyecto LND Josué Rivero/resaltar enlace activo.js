document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.style.textDecoration = "underline";
    }
});