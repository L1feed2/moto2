function slideOutInit() {
  var e = new Slideout({panel: document.getElementById("body"), menu: document.getElementById("menu"), padding: 256, tolerance: 70});
  e.on("open", function () {
    setTimeout(function () {
      loaded(), loaded2()
    }, 300)
  }), e.on("close", function () {
    setTimeout(function () {
      myScroll.destroy(), myScroll2.destroy()
    }, 300)
  }), $(document).on("touchstart", ".slick-slide, #googleMap", function () {
    e.destroy()
  }), $(".toggle-button").toggle(function () {
    e.toggle()
  }, function () {
    e.toggle()
  }), $(document).on("touchend", ".slick-slide, #googleMap", function () {
    e = new Slideout({panel: document.getElementById("body"), menu: document.getElementById("menu"), padding: 256, tolerance: 70})
  })
}

jQuery(document).ready(function (e) {
  function n() {
    if ("undefined" == typeof not_fixed_cart) {
      var n = e(".shop-controls"), o = n.offset().top;
      !function () {
        e(".fly-in-mini-cart").is(":visible") || (e(window).scrollTop() > o ? (n.addClass("fixed-pos"), n.css({position: "fixed"})) : (n.removeClass("fixed-pos"), n.css({top: "auto", position: "inherit"})))
      }()
    }
    var t = !e(".cd-dropdown").hasClass("dropdown-is-active");
    e(".cd-dropdown").toggleClass("dropdown-is-active", t), e(".cd-dropdown-trigger").toggleClass("dropdown-is-active", t), t || e(".cd-dropdown").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
      e(".has-children ul").addClass("is-hidden"), e(".move-out").removeClass("move-out"), e(".is-active").removeClass("is-active")
    })
  }

  "undefined" != typeof menu_on_hover_cursor && menu_on_hover_cursor && MatchMedia("only screen and (min-width: 1024px)") ? e(".cd-dropdown-wrapper").hover(function () {
    n()
  }, function () {
    n()
  }) : (e(".cd-dropdown-trigger").on("click", function (e) {
    e.preventDefault(), n()
  }), e(".cd-dropdown .cd-close").on("click", function (e) {
    e.preventDefault(), n()
  })), e(".has-children .more-cat").on("click", function (n) {
    n.preventDefault(), e(this).parent().next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("move-out")
  });
  var o = e(".cd-dropdown-wrapper").hasClass("open-to-left") ? "left" : "right";
  e(".cd-dropdown-content").menuAim({
    activate: function (n) {
      e(n).children().addClass("is-active").removeClass("fade-out"), 0 == e(".cd-dropdown-content .fade-in").length && e(n).children("ul").addClass("fade-in")
    }, deactivate: function (n) {
      e(n).children().removeClass("is-active"), (0 == e("li.has-children:hover").length || e("li.has-children:hover").is(e(n))) && (e(".cd-dropdown-content").find(".fade-in").removeClass("fade-in"), e(n).children("ul").addClass("fade-out"))
    }, exitMenu: function () {
      return e(".cd-dropdown-content").find(".is-active").removeClass("is-active"), !0
    }, submenuDirection: o
  }), e(".go-back").on("click", function () {
    var n = e(this);
    e(this).parent("ul").parent(".has-children").parent("ul");
    n.parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("move-out")
  }), Modernizr.input.placeholder || (e("[placeholder]").focus(function () {
    var n = e(this);
    n.val() == n.attr("placeholder") && n.val("")
  }).blur(function () {
    var n = e(this);
    "" != n.val() && n.val() != n.attr("placeholder") || n.val(n.attr("placeholder"))
  }).blur(), e("[placeholder]").parents("form").submit(function () {
    e(this).find("[placeholder]").each(function () {
      var n = e(this);
      n.val() == n.attr("placeholder") && n.val("")
    })
  }))
}), $(document).ready(function () {
  $(".search-wrapper input, button").focus(function () {
    $(this).data("placeholder", $(this).attr("placeholder")), $(this).attr("placeholder", ""), $(".icon-search").css("opacity", "0.5")
  }), $(".search-wrapper input, button").blur(function () {
    $(this).attr("placeholder", $(this).data("placeholder")), $(".icon-search").css("opacity", "1")
  }), $("#app-change").find(".selected a").prependTo(".app-change"), $("#app-change button").focus(function () {
    $(".dropdown-menu").addClass("animated fadeInUp")
  }), $("#currency-change").find(".selected a").prependTo(".currency-change"), $("#currency-change button").focus(function () {
    $(".dropdown-menu").addClass("animated fadeInUp")
  }), $(document).on("click", "#currency-change li", function (e) {
    e.preventDefault(), e.stopPropagation();
    var n = location.href;
    return -1 == n.indexOf("?") ? n += "?" : n += "&", location.href = n + "currency=" + $(this).attr("data-currency-code"), !0
  }), $('[data-toggle="popover"]').popover({trigger: "hover", html: !0, container: "body"})
});
var MatchMedia = function (e) {
  var n = window.matchMedia;
  return !(!("function" == typeof n) || !e) && n(e).matches
};
$(document).ready(function () {
  $("#mobile-nav-toggle").click(function () {
    return $(".nav-negative").length ? $(".nav-negative").slideToggle(200) : ($("body").prepend($("header .apps").clone().removeClass("apps").addClass("nav-negative")), $("body").prepend($("header .auth").clone().addClass("nav-negative")), $("body").prepend($("header .search").clone().addClass("nav-negative")), $("body").prepend($("header .offline").clone().addClass("nav-negative")), $(".nav-negative").hide().slideToggle(200)), $("html, body").animate({scrollTop: 0}, 200), !1
  }), $("#mailer-subscribe-form input.charset").val(document.charset || document.characterSet), $("#mailer-subscribe-form").submit(function () {
    var e = $(this), n = e.find('input[name="email"]'), o = e.find('input[type="submit"]');
    if (!n.val()) return n.addClass("error"), !1;
    n.removeClass("error"), o.hide(), n.after('<i class="icon16 loading"></i>'), $("#mailer-subscribe-iframe").load(function () {
      $("#mailer-subscribe-form").hide(), $("#mailer-subscribe-iframe").hide(), $("#mailer-subscribe-thankyou").show()
    })
  })
}), $(document).on("click", ".set-image-item", function () {
  var e = $.cookie("epika_color_settings");
  return $.cookie("epika_color_settings", e, {expires: 30, path: "/"}), e = $(this).data("value"), $.cookie("epika_color_settings", e, {expires: 30, path: "/"}), !1
});