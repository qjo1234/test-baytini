AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});

jQuery(document).ready(function ($) {
  "use strict";

  $(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();

  var sitePlusMinus = function () {
    $(".js-btn-minus").on("click", function (e) {
      e.preventDefault();
      if ($(this).closest(".input-group").find(".form-control").val() != 0) {
        $(this)
          .closest(".input-group")
          .find(".form-control")
          .val(
            parseInt(
              $(this).closest(".input-group").find(".form-control").val()
            ) - 1
          );
      } else {
        $(this).closest(".input-group").find(".form-control").val(parseInt(0));
      }
    });
    $(".js-btn-plus").on("click", function (e) {
      e.preventDefault();
      $(this)
        .closest(".input-group")
        .find(".form-control")
        .val(
          parseInt(
            $(this).closest(".input-group").find(".form-control").val()
          ) + 1
        );
    });
  };
  // sitePlusMinus();

  var siteSliderRange = function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  };
  // siteSliderRange();

  var siteCarousel = function () {
    if ($(".nonloop-block-13").length > 0) {
      $(".nonloop-block-13").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 20,
        // autoplay: true,
        smartSpeed: 900,
        nav: true,
        lazyLoad: true,
        // autoplayTimeout: 5000,
        // pauseOnHover: true,
        // autoplayHoverPause: true,
        touchDrag: false,
        mouseDrag: false,
        dots: false,
        rtl: isAr(),
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: {
            margin: 23,
            nav: true,
            items: 2,
          },
          1000: {
            margin: 23,
            stagePadding: 0,
            nav: true,
            items: 3,
          },
          1200: {
            margin: 23,
            stagePadding: 0,
            nav: true,
            items: 3,
          },
        },
      });
    }

    if ($(".nonloop-block-14").length > 0) {
      $(".nonloop-block-14").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 800,
        margin: 20,
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: {
            margin: 20,
            nav: true,
            items: 2,
          },
          1000: {
            margin: 30,
            stagePadding: 0,
            nav: true,
            items: 3,
          },
          1200: {
            margin: 30,
            stagePadding: 0,
            nav: true,
            items: 4,
          },
        },
      });
    }

    if ($(".slide-one-item").length > 0) {
      $(".slide-one-item").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        pauseOnHover: false,
        nav: true,
        navText: [
          '<span class="icon-keyboard_arrow_left">',
          '<span class="icon-keyboard_arrow_right">',
        ],
      });
    }

    if ($(".slide-one-item-alt").length > 0) {
      $(".slide-one-item-alt").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1000,
        autoplay: true,
        pauseOnHover: true,
        onDragged: function (event) {
          console.log("event : ", event.relatedTarget["_drag"]["direction"]);
          if (event.relatedTarget["_drag"]["direction"] == "left") {
            $(".slide-one-item-alt-text").trigger("next.owl.carousel");
          } else {
            $(".slide-one-item-alt-text").trigger("prev.owl.carousel");
          }
        },
      });
    }

    if ($(".slide-one-item-alt-text").length > 0) {
      $(".slide-one-item-alt-text").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1000,
        autoplay: true,
        pauseOnHover: true,
        onDragged: function (event) {
          console.log("event : ", event.relatedTarget["_drag"]["direction"]);
          if (event.relatedTarget["_drag"]["direction"] == "left") {
            $(".slide-one-item-alt").trigger("next.owl.carousel");
          } else {
            $(".slide-one-item-alt").trigger("prev.owl.carousel");
          }
        },
      });
    }

    // $(".nonloop-block-13").mouseover(function (e) {
    //   e.preventDefault();
    //   $(".nonloop-block-13").trigger("stop.owl.autoplay");
    // });

    // $(".my-custom-next").mouseover(function (e) {
    //   e.preventDefault();
    //   $(".nonloop-block-13").trigger("stop.owl.autoplay");
    // });

    // $(".my-custom-prev").mouseover(function (e) {
    //   e.preventDefault();
    //   $(".nonloop-block-13").trigger("stop.owl.autoplay");
    // });

    // $(".nonloop-block-13").mouseleave(function (e) {
    //   e.preventDefault();
    //   $(".nonloop-block-13").trigger("play.owl.autoplay");
    // });

    // $(".my-custom-next").mouseleave(function (e) {
    //   e.preventDefault();
    //   $(".nonloop-block-13").trigger("play.owl.autoplay");
    // });

    // $(".my-custom-prev").mouseleave(function (e) {
    //   e.preventDefault();
    //   $(".nonloop-block-13").trigger("play.owl.autoplay");
    // });

    $(".my-custom-next").click(function (e) {
      e.preventDefault();
      $(".nonloop-block-13").trigger(
        isEn() ? "next.owl.carousel" : "prev.owl.carousel"
      );
    });
    $(".my-custom-prev").click(function (e) {
      e.preventDefault();
      $(".nonloop-block-13").trigger(
        isEn() ? "prev.owl.carousel" : "next.owl.carousel"
      );
    });
  };
  siteCarousel();

  var siteCountDown = function () {
    $("#date-countdown").countdown("2020/10/10", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
            '<span class="countdown-block"><span class="label">%d</span> days </span>' +
            '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
            '<span class="countdown-block"><span class="label">%M</span> min </span>' +
            '<span class="countdown-block"><span class="label">%S</span> sec</span>'
        )
      );
    });
  };
  // siteCountDown();

  var siteDatePicker = function () {
    if ($(".datepicker").length > 0) {
      $(".datepicker").datepicker();
    }
  };
  siteDatePicker();

  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  // navigation
  var OnePageNavigation = function () {
    var navToggler = $(".site-menu-toggle");
    $("body").on(
      "click",
      "header #to-contact-btn, .site-mobile-menu #to-contact-btn",
      function (e) {
        e.preventDefault();

        $("html, body").animate(
          {
            scrollTop: $("#contact-section").offset().top,
          },
          800
        );
      }
    );
  };
  OnePageNavigation();

  var siteScroll = function () {
    $(window).scroll(function () {
      var st = $(this).scrollTop();

      if (st > 100) {
        $(".js-sticky-header").addClass("shrink");
      } else {
        $(".js-sticky-header").removeClass("shrink");
      }
    });
  };
  siteScroll();

  var counter = function () {
    $(".section-counter, .pricing-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
            ","
          );
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  // counter();
});
