document.addEventListener('DOMContentLoaded', function() {

    var contactLink = document.getElementById('contactLink');
    var homeNavbar = document.getElementById('homeLink');
    var aboutNavbar = document.getElementById('aboutLink');
    var timeLineNavbar = document.getElementById('timelineLink');
    var servicesNavbar = document.getElementById('servicesLink');
    var worksNavbar = document.getElementById('worksLink');

    contactLink.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'contact');
        window.location.href = 'index.html';
    });

    homeNavbar.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'home');
        window.location.href = 'index.html';
    });

    aboutNavbar.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'about');
        window.location.href = 'index.html';
    });

    timeLineNavbar.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'timeline');
        window.location.href = 'index.html';
    });

    servicesNavbar.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'services');
        window.location.href = 'index.html';
    });

    worksNavbar.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'works');
        window.location.href = 'index.html';
    });
});
