jQuery(document).ready(function($) {
    $(".in-accordion__title").click(function(e) {
      const $this = $(this);
      const isActive = $this.hasClass('active');
      const accordionContent = $this.siblings('.in-accordion__content');
      const accordionWrap = $this.parents('.in-accordion-wrap');
      
      if (isActive) {
        $this.removeClass('active')
             .attr('aria-expanded', 'false');
        accordionContent.hide('slow').attr('hidden', true);
      } else {
        accordionWrap.find('.in-faq-accordion .in-accordion__title')
                     .removeClass('active')
                     .attr('aria-expanded', 'false');
        accordionWrap.find('.in-faq-accordion .in-accordion__content')
                     .hide('slow')
                     .attr('hidden', true);
        
        $this.addClass('active')
             .attr('aria-expanded', 'true');
        accordionContent.show('slow').removeAttr('hidden');
      }
    });
  });
  