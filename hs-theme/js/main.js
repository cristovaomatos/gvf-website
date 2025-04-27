$(document).ready(function(){
    // ----------- Set Header Height to Main Content ------------ //
    function setHeight(){
     if(!($('body').is('.hubspot-disable-focus-styles,.in-header__dropdown--open'))) {
         var height = $('.in-header-wrap').outerHeight();
         $('#main-content').css('margin-top', height);
      }
    }
   
   if($(window).width()<992) {
      setTimeout(function() {
        setHeight();
      },150)
    }
  
    $(window).on('resize',function(){
      if($(window).width()<992) {
        setTimeout(function() {
          setHeight();
        },150)
      } else {
        setTimeout(function() {
           $('#main-content').css('margin-top', '0');
        },160)
      }
    });
    
    // ---------- Append Language Switcher -------- //
    
    function appendLanguageSwitcherMobile() {
       $('.in-header .in-lang-switcher').appendTo('.in-header .in-menu__wrap');
       setTimeout((function() {
         $('.in-header .in-menu__wrap').addClass("active");
       }), 100)
     }
    
    function appendLanguageSwitcherDesktop() {
      let search = $('.in-header--search');
      if (search.length==1) {
        $('.in-header .in-lang-switcher').insertAfter('.in-header .in-header--search');
      } else {
        $('.in-header .in-lang-switcher').prependTo('.in-header .in-header__controls');
      }
       
    }
    
    $(window).on('load',function() {
      if ($(window).width() < 992) {
        appendLanguageSwitcherMobile();
      }
    })
    
    var timeOutFunctionId;
    var countMobile = 0 , countDesktop = 0;
  
    $(window).on('resize', function () {
      if ($(window).width() < 992) {
       countDesktop = 0;
       if(countMobile==0) {
        clearTimeout(timeOutFunctionId);
        timeOutFunctionId = setTimeout(appendLanguageSwitcherMobile, 100);
       }
       countMobile+=1;
      } else {
        countMobile = 0;
          if(countDesktop==0) {
              clearTimeout(timeOutFunctionId);
              timeOutFunctionId = setTimeout(appendLanguageSwitcherDesktop, 100);
          }
        countDesktop+=1;
      }
    });
    
    // ------------- Header Controls ---------//
    
     $('.in-btn-search--icon').click(function() {
        $(this).parent().toggleClass('open');
      });
      
     $('.in-header .in-lang-switcher').click(function() { 
      $(this).toggleClass('in-lang--open');
     });
    
    // ------------ Header Toggler ------------ //
    
     $('.in-header .menu.menu--mobile').parents('.in-menu__container').addClass('in-menu-open');
    
     $('.in-header .in-menu-toggler').click(function() {
        $(this).addClass('in-toggle-open');
        $(this).parents('.row-fluid').toggleClass('show-menu');
      });
     
      $('.in-header .in-menu-toggler--close').click(function() {
        $(this).parents('.row-fluid').toggleClass('show-menu');
        $(this).siblings('.in-menu-toggler').removeClass('in-toggle-open');
      });           
     
     $('.in-header .in-menu-toggler-wrap').on('click',function(){
       $('body').toggleClass('in-header__dropdown--open');
     })
  })
   
    
  