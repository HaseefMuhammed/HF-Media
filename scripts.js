/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("year").textContent = new Date().getFullYear();

// Loading

    // Loding 

    var loader = document.getElementById('preloader');

    window.addEventListener('load', function(){
      loader.style.display = 'none';
    })