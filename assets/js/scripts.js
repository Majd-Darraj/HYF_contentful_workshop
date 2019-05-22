(function($) {
  "use strict";

  /* Searh Box
  ==============================================*/
  var searchOpen = $(".mobile-nav-menu .search-toggle-open");
  var searchClose = $(".mobile-nav-menu .search-toggle-close");
  var searchBox = $(".nav-search-box");

  searchOpen.on("click", function() {
    searchBox.addClass("show");
    $(this).addClass("hide");
    searchClose.removeClass("hide");
  });
  searchClose.on("click", function() {
    searchBox.removeClass("show");
    $(this).addClass("hide");
    searchOpen.removeClass("hide");
  });

  /*  Navbar
  ==============================================*/
  $(window).on("scroll", function() {
    navOnScroll();
  });

  function navOnScroll() {
    if ($(window).scrollTop() > 0) {
      $(".header-fixed").addClass("is-sticky fadeInDown animated");
    } else {
      $(".header-fixed").removeClass("is-sticky fadeInDown animated");
    }
  }

  navOnScroll();
  $(".mobile-nav-menu .nav-menu-toggle").on("click", function() {
    $(".nav-menu").toggleClass("show");
  });
  $(".nav-menu .menu-item-has-children a").on("click", function(e) {
    if ($(window).width() <= 991) {
      $(this)
        .siblings(".sub-menu")
        .addClass("show");
    }
  });

  var subToggle = function subToggle() {
    $(".nav-menu .menu-item-has-children a").each(function() {
      $(this)
        .siblings(".sub-menu")
        .prepend(
          '<li class="sub-menu-close"> <i class="fa fa-long-arrow-left"></i> ' +
            $(this)
              .siblings(".sub-menu")
              .parent()
              .children("a")
              .text() +
            "</li>"
        );
    });
  };

  subToggle();
  $(".nav-menu .menu-item-has-children .sub-menu .sub-menu-close").on(
    "click",
    function() {
      $(this)
        .parent(".sub-menu")
        .removeClass("show");
    }
  );

  function subMenu() {
    $(".nav-menu .menu-item-has-children .sub-menu").each(function() {
      if ($(window).width() > 991) {
        if ($(this).offset().left + $(this).width() > $(window).width()) {
          $(this).css({
            left: "auto",
            right: "100%"
          });
        }
      }
    });
  }

  subMenu();
  $(window).resize(subMenu);

  /*  Preloader
  ==============================================*/
  $(window).on("load", function() {
    $(".preloader").fadeOut(2000);
  });

  /*  Back to Top
  ==============================================*/
  var $backToTopBtn = $(".back-to-top");

  if ($backToTopBtn.length) {
    var scrollTrigger = 400,
      // px
      backToTop = function backToTop() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > scrollTrigger) {
          $backToTopBtn.addClass("show");
        } else {
          $backToTopBtn.removeClass("show");
        }
      };

    backToTop();
    $(window).on("scroll", function() {
      backToTop();
    });
    $backToTopBtn.on("click", function(e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0
        },
        700
      );
    });
  }
})(jQuery);
