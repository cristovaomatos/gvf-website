jQuery(document).ready(function($) {
    // Website header variables
  
    var menuParentItems = document.querySelectorAll('.in-header .menu--desktop .menu__item--has-submenu');
    var childToggle = document.querySelectorAll('.in-header .menu--mobile .menu__link.menu__link--toggle');
  
    // Desktop menu
    if (menuParentItems) {
      Array.prototype.forEach.call(menuParentItems, function(el){
  
        // Handles hover over
  
        el.addEventListener('mouseover', function(){
          this.classList.add('menu__item--open');
          this.querySelector('a').setAttribute('aria-expanded', 'true');
          this.querySelector('button').setAttribute('aria-expanded', 'true');
        });
        // Handles hover out
        el.addEventListener('mouseout', function(){
          document.querySelector('.menu__item--open > a').setAttribute('aria-expanded', 'false');
          document.querySelector('.menu__item--open > button').setAttribute('aria-expanded', 'false');
          document.querySelector('.menu__item--open').classList.remove('menu__item--open');
        });
      });
    }
  
    // Mobile menu
    // Handles toggle of submenus
    $('.in-header .menu--mobile .menu__link.menu__link--toggle').on('click',function() {
         $(this).siblings('.menu__submenu').slideToggle();
         $(this).parent('.menu__item').toggleClass('menu__item--open');
     });
  })