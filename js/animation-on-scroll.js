AOS.init({
    offset: 200,
    duration: 1200,
    disable: function() {
        var maxWidth = 640;
        return window.innerWidth < maxWidth; }
});