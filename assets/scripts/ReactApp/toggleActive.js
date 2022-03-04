import React from 'react';

export default function toggleActive(linkId) {

    var sections = document.querySelectorAll('section')
    var navbarLinks = document.querySelectorAll('.navbar-links li')
    var current = ''

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
     var bounding = section.getBoundingClientRect();
     
        if( bounding.top >= 0 &&
         bounding.left >= 0 &&
         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
         bounding.right <= (window.innerWidth || document.documentElement.clientWidth) ) {
            current = section.id
         }
     
     // if (main.scrollTop >= sectionTop - 60) {
      //  current = section.id
      //}
    })
    navbarLinks.forEach((link) => {
      link.classList.remove('activeLink')
      if(link.classList.contains(current)) {
        link.classList.add('activeLink')
      }
    })
    
};
