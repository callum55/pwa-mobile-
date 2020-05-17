document.addEventListener('DOMContentLoaded', function() {
  
    // my navigation menu using materized libary 
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});
  
    // add a new bike review to PWA 
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'right'});
  });