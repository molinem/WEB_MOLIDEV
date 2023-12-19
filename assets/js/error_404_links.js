document.addEventListener('DOMContentLoaded', function() {

    var contactLink = document.getElementById('contactLink');
    var contactLink2 = document.getElementById('contactLink2');

    var homeNavbar = document.getElementById('homeLink');

    var aboutNavbar = document.getElementById('aboutLink');
    var aboutNavbar2 = document.getElementById('aboutLink2');

    var timeLineNavbar = document.getElementById('timelineLink');
    var timeLineNavbar2 = document.getElementById('timelineLink2');

    var servicesNavbar = document.getElementById('servicesLink');
    var servicesNavbar2 = document.getElementById('servicesLink2');

    var worksNavbar = document.getElementById('worksLink');
    var worksNavbar2 = document.getElementById('worksLink2');

    contactLink.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'contact');
        window.location.href = 'index.html';
    });

    contactLink2.addEventListener('click', function(event) {
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

    aboutNavbar2.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'about');
        window.location.href = 'index.html';
    });

    timeLineNavbar.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'timeline');
        window.location.href = 'index.html';
    });

    timeLineNavbar2.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'timeline');
        window.location.href = 'index.html';
    });

    servicesNavbar.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'services');
        window.location.href = 'index.html';
    });

    servicesNavbar2.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'services');
        window.location.href = 'index.html';
    });

    worksNavbar.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'works');
        window.location.href = 'index.html';
    });

    worksNavbar2.addEventListener('click', function(event) {
        sessionStorage.setItem('redirectTo', 'works');
        window.location.href = 'index.html';
    });
});
