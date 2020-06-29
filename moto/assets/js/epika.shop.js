function filtersToggleBtn(e) {
  var t = {shownClass: "is-shown"}, a = e.closest(".filters"), i = t.shownClass, o = e.data("show-text"), n = e.data("hide-text");
  a.hasClass(i) ? (a.removeClass(i), e.text(o), $("form.filters-form-wrapper").hide(300)) : (a.addClass(i), e.text(n), $("form.filters-form-wrapper").show(300))
}

function qunityButtons() {
  $(".qtyplus").click(function (e) {
    e.preventDefault(), fieldName = $(this).attr("field");
    var t = parseInt($("input[name=" + fieldName + "]").val());
    isNaN(t) ? $("input[name=" + fieldName + "]").val(0) : $("input[name=" + fieldName + "]").val(t + 1)
  }), $(".qtyminus").click(function (e) {
    e.preventDefault(), fieldName = $(this).attr("field");
    var t = parseInt($("input[name=" + fieldName + "]").val());
    !isNaN(t) && t > 0 ? $("input[name=" + fieldName + "]").val(t - 1) : $("input[name=" + fieldName + "]").val(0)
  }), $(".qtyplusCart").click(function (e) {
    e.preventDefault();
    var t = $(this).parent().find(".qty"), a = parseInt(t.val());
    isNaN(a) ? t.val(0) : t.val(a + 1)
  }), $(".qtyminusCart").click(function (e) {
    e.preventDefault();
    var t = $(this).parent().find(".qty"), a = parseInt(t.val());
    !isNaN(a) && a > 0 ? t.val(a - 1) : t.val(0)
  })
}

function reviewIsEmpty() {
  $(".reviews-branch").each(function () {
    var e = $(this);
    0 == $(this).children().length && e.addClass("empty")
  })
}

function mobMenuClick() {
  $(".g-menu.category-tree > .collapsible > a").click(function (e) {
    var t = $(this);
    t.siblings(".inside-menu").hasClass("opened") || e.preventDefault(), t.siblings(".inside-menu").toggleClass("opened").animate({height: "toggle"}, 500), t.parent().siblings("li").each(function () {
      $(this).find(".inside-menu.opened").removeClass("opened").animate({height: "toggle"}, 500), $(this).find(".drop .drop.opened").removeClass("opened").animate({height: "toggle"}, 500)
    }), setTimeout(function () {
      myScroll.refresh(), $("div#scroller").css("transition-duration", "500ms")
    }, 500)
  }), $(".g-menu.category-tree > .collapsible > .inside-menu > .drop > .collapsible > a").click(function (e) {
    $(this).siblings(".drop").hasClass("opened") || e.preventDefault(), $(this).siblings(".drop").toggleClass("opened").animate({height: "toggle"}, 500), $(this).parent().siblings("li").each(function () {
      $(this).find(".drop.opened").removeClass("opened").animate({height: "toggle"}, 500)
    }), setTimeout(function () {
      myScroll.refresh(), $("div#scroller").css("transition-duration", "500ms")
    }, 500)
  })
}

function reviewCountLoad() {
  $(".product-list .prd").each(function () {
    var e = $(this).find(".prd-wrapper > a").attr("href");
    $(this).find(".prd-review-count").load(e + " .review-total-ajax")
  })
}

function contactMapShow() {
  $(".contacts .popup-close").click(function () {
    $(this).fadeOut(400), $(".contacts > .row").fadeOut(400), setTimeout(function () {
      $(".contacts").addClass("cont-hide")
    }, 400), setTimeout(function () {
      $(".cont-show-icon").fadeIn(400)
    }, 1400)
  }), $(".cont-show-icon").click(function () {
    $(".cont-show-icon").fadeOut(400), setTimeout(function () {
      $(".contacts").removeClass("cont-hide")
    }, 400), setTimeout(function () {
      $(".contacts .popup-close").fadeIn(400), $(".contacts > .row").fadeIn(400)
    }, 1400)
  })
}

function topcatScrollBtns() {
  var e = $(".page-nav > div").height(), t = $(".page-nav ul.g-menu.category-tree").height();
  t > e && (topCatScrollDetect(), $(".page-nav > div").append('<a href="#" class="topcategory-scroll-arr prev-arr disabled"><i class="icon-arrow1"></i></a>'), $(".page-nav > div").append('<a href="#" class="topcategory-scroll-arr next-arr"><i class="icon-arrow1"></i></a>'), $(".topcategory-scroll-arr.prev-arr").click(function (e) {
    e.preventDefault();
    var t = $(this), a = t.parent(), i = a.find(".g-menu.category-tree > li").height(), o = a.scrollTop();
    o - i <= 0 ? (t.addClass("disabled"), a.animate({scrollTop: 0}, 200)) : (a.animate({scrollTop: o - i}, 200), $(".topcategory-scroll-arr.next-arr").removeClass("disabled"))
  }), $(".topcategory-scroll-arr.next-arr").click(function (e) {
    var t = $(".page-nav > div").height(), a = $(".page-nav ul.g-menu.category-tree").height() - t - 2;
    e.preventDefault();
    var i = $(this), o = i.parent(), n = o.find(".g-menu.category-tree > li").height(), r = o.scrollTop();
    r + n >= a ? (i.addClass("disabled"), o.animate({scrollTop: r + n}, 200)) : (o.animate({scrollTop: r + n}, 200), $(".topcategory-scroll-arr.prev-arr").removeClass("disabled"))
  }))
}

function topCatScrollDetect() {
  $(".page-nav > div").scroll(function () {
    var e = $(".page-nav > div").height(), t = $(".page-nav ul.g-menu.category-tree").height() - e - 2;
    0 == $(".page-nav > div").scrollTop() ? $(".topcategory-scroll-arr.prev-arr").addClass("disabled") : $(".page-nav > div").scrollTop() >= t ? $(".topcategory-scroll-arr.next-arr").addClass("disabled") : $(".topcategory-scroll-arr").removeClass("disabled")
  })
}

function reviewFormScroll() {
  if (MatchMedia("only screen and (min-width: 992px)")) {
    var e = $(".product-sidebar").height() + 70;
    $(".reviews-page").css("min-height", e), $(window).scroll(function () {
      $("footer")[0].getBoundingClientRect().top < $(window).height() ? $(".product-sidebar").css({position: "absolute", bottom: "0"}) : $(".product-sidebar").css({position: "fixed", bottom: ""})
    })
  }
}

function sortingPop() {
  $(".menu-popup .show li a").attr("href", ""), $(".menu-popup .show li").toggle(function (e) {
    $(".menu-popup .show span").addClass("up"), e.preventDefault(), $(this).closest(".menu-popup").find(".popup-window").show(300)
  }, function (e) {
    e.preventDefault(), $(this).closest(".menu-popup").find(".popup-window").hide(300), $(".menu-popup .show span").removeClass("up")
  })
}

function ftHighlight(e) {
  e && ((e = $(e)).addClass("added"), setTimeout(function () {
    e.removeClass("added")
  }, 1e3))
}

function loadImage(e, t) {
  var a = new Image, i = e.getAttribute("data-original");
  a.onload = function () {
    e.parent ? e.parent.replaceChild(a, e) : e.src = i, t && t()
  }, a.src = i, $(e).addClass("lazy-loaded")
}

function elementInViewport(e) {
  var t = e.getBoundingClientRect();
  return t.top >= 0 && t.left >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight)
}

function loadLazyImages() {
  for (var e = 0; e < lazyImages.length; e++) elementInViewport(lazyImages[e]) && loadImage(lazyImages[e], function () {
    lazyImages.splice(e, e)
  })
}

function getLazyImages() {
  if ("undefined" == typeof disable_products_img_lazyload || !disable_products_img_lazyload) {
    for (var e = $("img.lazy").not(".lazy-loaded"), t = 0; t < e.length; t++) lazyImages.push(e[t]);
    loadLazyImages()
  }
}

var modalDialogCurPos;
$(document).ready(function () {
  function e() {
    $(".fly-in-mini-cart").is(":visible") || ($(window).scrollTop() > v && !$(".cd-dropdown-trigger").hasClass("dropdown-is-active") ? (h.addClass("fixed-pos"), h.css({position: "fixed"})) : (h.removeClass("fixed-pos"), h.css({top: "auto", position: "inherit"})))
  }

  function t() {
    var e = $(".login-block");
    e.hide();
    var t = e.parent();
    t.find(".forgotpass-form").length <= 0 && $('<div class="forgotpass-form"></div>').insertAfter(e), t.find(".forgotpass-form").html('<div class="loader"> </div>')
  }

  function a(e) {
    $(".login-block").parent().find(".forgotpass-form").html($(e).find(".forgotpass").html()).hide().fadeIn()
  }

  function i() {
    clearTimeout(b), b = setTimeout(function () {
      $(".comparison-preview").is(":hover") || $(".comparison-preview").stop().slideUp(300)
    }, 5e3)
  }

  function o(e, t, a) {
    var o = $.cookie("shop_compare");
    $.cookie("shop_compare", o, {expires: 30, path: "/"});
    var n = $(".comparison-preview ul.products");
    if ($(e).hasClass("active")) {
      $(".comparison-preview").stop().slideDown(300), o = o ? o.split(",") : [];
      var r = $.inArray(t + "", o);
      -1 != r && o.splice(r, 1), o.length > 0 ? ($.cookie("shop_compare", o.join(","), {expires: 30, path: "/"}), $("#compare-leash a").show().find("strong").html(o.length), i()) : ($("#compare-leash a").find("strong").html("0"), $.cookie("shop_compare", null, {path: "/"}), $(".comparison-preview").stop().slideUp(300)), n.find('li[data-product-id="' + t + '"]').fadeOut(300, function () {
        $(this).remove()
      })
    } else {
      if (o && o.split(",").length >= 4) return void alert("Добавлено максимальное количество");
      o ? o += "," + t : o = "" + t, o.split(",").length > 0 ? ($("#compare-leash").is(":visible") || $("#compare-leash").css("height", 0).show().animate({height: 39}, function () {
        var e = 0;
        setInterval(function () {
          e < 4 && $("#compare-leash a").toggleClass("just-added"), e++
        }, 500)
      }), $("#compare-leash a").show().find("strong").html(o.split(",").length)) : $("#compare-leash a").find("strong").html("0"), $.cookie("shop_compare", o, {expires: 30, path: "/"});
      var s = "", l = "", d = "", c = "";
      "list" == a ? (s = $(e).closest(".prd-wrapper"), c = $(s).find(".product-thumb-96-img").clone(), $(c).show(), l = $(s).find(".title").parent().attr("href"), d = $(s).find(".title span").html(), c = $(s).find(".product-thumb-96-img").clone()) : "product_page" != a && "product_page_modal" != a || (s = "product_page_modal" == a ? $(e).closest("#swipebox-right-bar") : $(e).closest(".product-info"), l = "#", d = $(s).find(".title").html(), c = $(s).find(".take-me-away .product-thumb-96-img").clone()), $(c).show();
      var p = $(s).find(".price").clone();
      $(p).find(".compare-at-price").length > 0 && $(p).find(".compare-at-price").remove();
      var u = '<li class="comare-item" data-product-id="' + t + '"><div class="image"><a class="image-link" href="' + l + '">' + c.prop("outerHTML") + '<i class="remove icon-cancel-circle"></i></a></div><div class="meta"><div><a class="name-link" href="' + l + '"><span class="name" itemprop="name">' + d + '</span></a><span class="price nowrap">' + $(p).html() + "</span></div></div></li>";
      $(".comparison-preview").stop().slideDown(300), setTimeout(function () {
        $(u).prependTo(n).hide().stop().fadeIn()
      }, 500), i()
    }
    $(e).toggleClass("active")
  }

  function n(e, t) {
    var a = $(e);
    if (modalDialogCurPos = a.closest(".prd").index(), void 0 != I && I && null != I) {
      var i = I.find(".prd").size();
      i <= 1 && ($(".remodal-wrapper .remodal-prev-product").addClass("unactive"), $(".remodal-wrapper .remodal-next-product").addClass("unactive")), i > 1 && s(i, modalDialogCurPos)
    }
    var o = $("[data-remodal-id=remodal_quick_view] .remodal_in");
    if (t) {
      $("[data-remodal-id=remodal_quick_view]").addClass("cart").addClass("qwiew-modal").removeClass("scart-modal"), x.hide();
      var n = $('<div class="loader"> </div>');
      return $("body").append(n), z.open(), $.get(t + "&quickview=1", function (e) {
        o.html($(e).find(".product-info")), setTimeout(function () {
          $(n).remove(), x.fadeIn(), $(n).remove()
        }, 1500), setTimeout(function () {
          r(o)
        }, 2e3)
      }), !1
    }
  }

  function r(e) {
    var t = $(e).find("#product-gallery");
    $(t).sly(!1);
    var a = t.parent();
    t.css("height", "50px");
    var i = 0;
    if (MatchMedia("only screen and (max-width: 1023px)")) {
      var o = t.find(".image").eq(0);
      t.css("height", o.outerHeight() + "px"), t.css("width", $(e).find("#product-core-image").outerWidth() + "px"), i = 1
    } else t.css("height", $(e).find(".image-container").outerHeight() + "px"), t.css("width", "auto");
    t.sly({horizontal: i, itemNav: "basic", smart: 1, activateOn: "click", mouseDragging: 1, touchDragging: 1, releaseSwing: 1, startAt: 0, scrollBar: a.find(".scrollbarvert"), scrollBy: 1, pagesBar: a.find(".pages"), activatePageOn: "click", speed: 600, elasticBounds: 1, easing: "easeOutExpo", dragHandle: 1, dynamicHandle: 1, clickBar: 1, activeClass: "active-sly", forward: a.find(".forward"), backward: a.find(".backward"), prev: a.find(".prev"), next: a.find(".next"), prevPage: a.find(".prevPage"), nextPage: a.find(".nextPage")})
  }

  function s(e, t) {
    $(".remodal-wrapper .remodal-prev-product").removeClass("unactive"), $(".remodal-wrapper .remodal-next-product").removeClass("unactive"), 0 == t && $(".remodal-wrapper .remodal-prev-product").addClass("unactive"), t == e - 1 && $(".remodal-wrapper .remodal-next-product").addClass("unactive")
  }

  function l(e, t, a) {
    setTimeout(function () {
      $(a).remove(), e.html(t).stop().fadeTo("fast", 1, function () {
        setTimeout(function () {
          getLazyImages(), d(), MatchMedia("only screen and (max-width: 1024px)") && $(".prd.related.zeus .add-to-inv, li.prd .add-to-inv").addClass("add-to-fixed").show()
        }, 300)
      })
    }, 300);
    var i = $(t).find(".items-count-val").html();
    $("#cart a").find(".items-count-val").html(i), $(".cart_count").html(i)
  }

  function d() {
    D = !0, M = !0, L = !1, c(!0)
  }

  function c(e) {
    if ($(window).width() < 1224 && M && (D = !0, M = !1, L = !1), $(window).width() >= 1224 && D && (D = !1, M = !0, L = !1), !L && (L = !0, D && ($("aside.cart-sidebar").removeClass("vertical").addClass("horizont"), O = 1), M && ($("aside.cart-sidebar").addClass("vertical").removeClass("horizont"), O = 0), window.location.pathname.toLowerCase().indexOf("/cart") < 0 && ($("aside.cart-sidebar").removeClass("vertical").addClass("horizont"), O = 1), (window.location.pathname.toLowerCase().indexOf("/cart") >= 0 || e) && (t = $(".cart-sidebar .scroller")).length > 0)) {
      $(t).sly(!1);
      i = t.parent();
      t.sly({horizontal: O, itemNav: "basic", smart: 1, activateOn: "click", mouseDragging: 1, touchDragging: 1, releaseSwing: 1, startAt: 0, scrollBar: i.find(".scrollbar"), scrollBy: 1, pagesBar: i.find(".pages"), activatePageOn: "click", speed: 300, elasticBounds: 1, easing: "easeOutExpo", dragHandle: 1, dynamicHandle: 1, clickBar: 1, activeClass: "active-sly", prevPage: i.find(".caro-left"), nextPage: i.find(".caro-right")})
    }
    if (window.location.pathname.toLowerCase().indexOf("/cart") >= 0 && 1 == O) {
      var t = $(".cart-sidebar .scroller"), a = $(".cart-sidebar .scroller ul");
      if (t.length > 0) {
        var i = t.parent();
        t.width() > a.width() ? (i.find(".scrollbar").hide(), i.find(".caro-left").hide(), i.find(".caro-right").hide()) : (i.find(".scrollbar").show(), i.find(".caro-left").show(), i.find(".caro-right").show())
      }
    }
  }

  function p(e, t) {
    MatchMedia("only screen and (max-width: 991px)") && filtersToggleBtn($("#filters-toggle-link")), $(window).lazyLoad && $(window).lazyLoad("sleep"), $("#product-list").html('<img src="' + e.data("loading") + '">');
    var a = "?" + t;
    $(".prd-sorting .dropdown-menu li").each(function () {
      var e = $(this).find("a").attr("href"), i = u("sort", e), o = u("order", e);
      $(this).find("a").attr("href", a + (t.length > 0 ? "&" : "") + "sort=" + i + "&order=" + o)
    }), $('input[name="sort"]').length > 0 && (t.length > 0 && (a += "&"), a += "sort=" + $('input[name="sort"]').val()), $('input[name="order"]').length > 0 && (t.length > 0 && (a += "&"), a += "order=" + $('input[name="order"]').val()), $.get(a, function (e) {
      var i = $("<div></div>").html(e);
      $("#product-list").html(i.find("#product-list").html()), $(".options-list").html(i.find(".options-list").html()), "" === t && ($(".filters-form-wrapper").html(i.find(".filters-form-wrapper").html()), m()), history.pushState && void 0 !== history.state && window.history.pushState({}, "", a), getLazyImages(), $(window).lazyLoad && $(window).lazyLoad("reload")
    })
  }

  function u(e, t) {
    if (!t) return "";
    e = e.replace(/[\[\]]/g, "\\$&");
    var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
    return a ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null
  }

  function f(e, t) {
    var a;
    if (t && void 0 != t) {
      var i = $(t).closest(".filter-active").find(".hidden-active-filter");
      if (i.length <= 0) return;
      var o = (a = i).attr("name"), n = a.val();
      if ("price_min" == o || "price_max" == o || i.hasClass("type-text")) {
        if ((s = e.find('input[name="' + o + '"]')).length > 0) {
          s.val("");
          var r = s.closest(".slider").find(".filter-slider");
          if (r.length > 0) {
            c = 0;
            s.hasClass("max") && (c = 1), $(r).slider("values", c, s.attr("placeholder"))
          }
        }
      } else if (i.hasClass("type-radio")) e.find('input[name="' + o + '"]').length > 0 && e.find('input[name="' + o + '"]').prop("checked", !1), (s = e.find('input[name="' + o + '"][value=""]')).length > 0 && s.prop("checked", !0); else {
        var s = e.find('input[name="' + o + '"][value="' + n + '"]');
        s.length > 0 && (s.closest(".item").find("label").removeClass("checked"), s.prop("checked", !1))
      }
    }
    for (var l = e.serializeArray(), d = [], c = 0; c < l.length; c++) "" !== l[c].value && "sort" != l[c].name && "order" != l[c].name && (a && a.attr("name") == l[c].name && a.val() == l[c].value || d.push(l[c].name + "=" + l[c].value));
    p(e, d.join("&"))
  }

  function m() {
    $(".filters.ajax form input").change(function () {
      f($(this).closest("form"))
    }), $(".filters.ajax form").submit(function () {
      return f($(this)), !1
    }), $(document).on("click", ".options-list .remove-filter-active", function () {
      return f($(".filters-form-wrapper"), this), !1
    }), $(document).on("click", ".options-list .clear-all, .clear-filtre", function () {
      return p($(".filters-form-wrapper"), ""), !1
    }), $(".filters .slider").each(function () {
      if (!$(this).find(".filter-slider").length) {
        $(this).append('<div class="filter-slider"></div>');
        var e = $(this).find(".min"), t = $(this).find(".max"), a = parseFloat(e.attr("placeholder")), i = parseFloat(t.attr("placeholder")), o = 1, n = $(this).find(".filter-slider");
        if (n.data("step")) o = parseFloat(n.data("step")); else {
          var r = i - a;
          if (Math.round(a) != a || Math.round(i) != i) {
            o = r / 10;
            for (var s = 0; o < 1;) o *= 10, s += 1;
            o = Math.pow(10, -s), (s = Math.round(1e5 * Math.abs(Math.round(a) - a)) / 1e5) && s < o && (o = s), (s = Math.round(1e5 * Math.abs(Math.round(i) - i)) / 1e5) && s < o && (o = s)
          }
        }
        n.slider({
          range: !0, min: parseFloat(e.attr("placeholder")), max: parseFloat(t.attr("placeholder")), step: o, values: [parseFloat(e.val().length ? e.val() : e.attr("placeholder")), parseFloat(t.val().length ? t.val() : t.attr("placeholder"))], slide: function (a, i) {
            var o = i.values[0] == $(this).slider("option", "min") ? "" : i.values[0];
            e.val(o), o = i.values[1] == $(this).slider("option", "max") ? "" : i.values[1], t.val(o)
          }, stop: function (t, a) {
            e.change()
          }
        }), e.add(t).change(function () {
          var a = "" === e.val() ? n.slider("option", "min") : parseFloat(e.val()), i = "" === t.val() ? n.slider("option", "max") : parseFloat(t.val());
          i >= a && n.slider("option", "values", [a, i])
        })
      }
    })
  }

  if ("undefined" == typeof disable_products_img_lazyload && (getLazyImages(), setTimeout(function () {
      getLazyImages()
    }, 1e3), $(window).bind("scroll", getLazyImages)), $('[data-toggle="tooltip"]').tooltip(), $(document).on("click", ".fav_clear", function (e) {
      e.preventDefault(), e.stopPropagation(), $("#ft_favorites a").find(".count").html("0"), $.cookie("epika_shop_favorites", null, {path: "/"});
      var t = $(".product-list .prd.catalog-item");
      if (t <= 10) {
        var a = 200 * $(t).length;
        $(t).each(function () {
          var e = $(this);
          setTimeout(function () {
            e.fadeOut(300, function () {
              $(this).remove()
            })
          }, a), a -= 200
        })
      } else t.fadeOut(300, function () {
        $(this).remove()
      });
      return !1
    }), $(document).on("click", ".filter-param h5", function () {
      var e = $(this).find("i"), t = $(this).closest(".filter-param").find(".group");
      $(t).length <= 0 && (t = $(this).closest(".filter-param").find(".slider")), $(t).length <= 0 || (e.hasClass("icon-minus-squared-alt") ? t.stop().slideUp(300, function () {
        e.removeClass("icon-minus-squared-alt"), e.addClass("icon-plus-squared")
      }) : t.stop().slideDown(300, function () {
        e.removeClass("icon-plus-squared"), e.addClass("icon-minus-squared-alt")
      }))
    }), $(document).mouseup(function (e) {
      $(".cd-dropdown-trigger").is(e.target) || 0 !== $(".cd-dropdown-trigger").has(e.target).length || $(".cd-dropdown .cd-close").is(e.target) || 0 !== $(".cd-dropdown .cd-close").has(e.target).length || $(".cd-dropdown").is(e.target) || 0 !== $(".cd-dropdown").has(e.target).length || $(".cd-dropdown-wrapper").is(e.target) || 0 !== $(".cd-dropdown-wrapper").has(e.target).length || ($(".cd-dropdown").removeClass("dropdown-is-active"), $(".cd-dropdown-trigger").removeClass("dropdown-is-active")), $(".comparison-preview").is(e.target) || 0 !== $(".comparison-preview").has(e.target).length || $(".comparison-preview").stop().slideUp(300)
    }), $("ul.pages .item").hover(function () {
      $(this).find(".sub-links").stop().addClass("animated").addClass("fadeIn").removeClass("fadeOut").show()
    }, function () {
      var e = $(this).find(".sub-links");
      $(e).removeClass("fadeIn").addClass("fadeOut"), setTimeout(function () {
        $(e).hide()
      }, 200)
    }), $(document).on("click", ".show-filter-button", function (e) {
      e.preventDefault(), e.stopPropagation(), $(".filter-container").length <= 0 && ($("body").prepend($('<div class="filter-container"></div>')), $(".filter-container").hide(), $(".filter-container").html($(".filters").parent().show()));
      var t = $(".filter-container");
      return t.hasClass("opened") ? t.stop().fadeOut(500, function () {
        t.removeClass("opened")
      }) : (t.addClass("opened"), t.stop().fadeIn(500)), !1
    }), $(document).on("click", ".close-filter-button", function (e) {
      e.preventDefault(), e.stopPropagation();
      var t = $(".filter-container");
      if (!(t.length <= 0)) return t.stop().fadeOut(500, function () {
        t.removeClass("opened")
      }), !1
    }), "undefined" == typeof not_fixed_cart) {
    var h = $(".shop-controls"), v = h.offset().top;
    e(), $(window).bind("scroll", e)
  }
  if ($(document).on("click", '.wa-field input[type="checkbox"]', function () {
      $(this).toggleClass("active")
    }), $(document).on("click", '.wa-field input[type="radio"]', function () {
      $(this).closest(".wa-value").find("label").removeClass("active"), $(this).parent().addClass("active")
    }), $(".countdown").each(function () {
      var e = $(this).find(".js-promo-countdown").attr("data-end");
      $(this).countdown(e, function (e) {
        $(this).html(e.strftime('<span class="dt"><span class="time">%-n</span><span class="lab">дней</span></span><span class="sp">:</span><span class="dt"><span class="time">%H</span><span class="lab">часов</span></span><span class="sp">:</span><span class="dt"><span class="time">%M</span><span class="lab">мин</span></span><span class="sp">:</span><span class="dt"><span class="time">%S</span><span class="lab">сек</span></span>'))
      })
    }), $(document).on("mouseenter", ".prd.related.zeus, li.prd", function () {
      $(this).find(".quick-view").stop().addClass("animated").addClass("fadeInUp"), MatchMedia("only screen and (min-width: 1024px)") && $(this).find(".add-to-inv").stop().fadeIn().addClass("animated").addClass("fadeInUp")
    }), $(document).on("mouseleave", ".prd.related.zeus, li.prd", function () {
      $(this).find(".quick-view").stop().fadeOut().removeClass("animated").removeClass("fadeInUp"), MatchMedia("only screen and (min-width: 1024px)") && $(this).find(".add-to-inv").stop().fadeOut().removeClass("animated").removeClass("fadeInUp")
    }), $(".login-block .wa-submit").on("click", "a", function (e) {
      if ("/forgotpassword/" == $(this).attr("href")) return e.preventDefault(), e.stopPropagation(), t(), $.get(_wa_url + "forgotpassword/", {html: 1}, function (e) {
        a(e)
      }), !1
    }), $(document).on("click", '.forgotpass-form input[type="submit"]', function (e) {
      e.preventDefault(), e.stopPropagation();
      var i = $(this).closest("form");
      return t(), $.post(_wa_url + "forgotpassword/", i.serialize(), function (e) {
        a(e)
      }), !1
    }), $(document).on("click", ".forgotpass-form a", function (e) {
      if ("/login/" == $(this).attr("href")) return e.preventDefault(), e.stopPropagation(), $(".forgotpass-form").fadeOut("normal", function () {
        $(this).html(""), $(".login-block").fadeIn("fast")
      }), !1
    }), $(".catalog-view").on("click", "a", function (e) {
      return e.preventDefault(), e.stopPropagation(), $(this).addClass("active"), $(this).hasClass("viev-grid") ? $.cookie("epika_product_list_view", "grid", {expires: 30, path: "/"}) : $.cookie("epika_product_list_view", "list", {expires: 30, path: "/"}), location.reload(), !1
    }), MatchMedia("only screen and (min-width: 992px)")) {
    var g, w;
    $(".active-navi .page-nav").hover(function () {
      var e = $(this);
      g = setTimeout(function () {
        $(".g-menu.category-tree").fadeIn(300), e.addClass("hovered")
      }, 400), w = setTimeout(function () {
        $(".g-menu.category-tree").outerHeight() > $("nav.page-nav > div").height() && $("nav.page-nav > div").css("width", "108%")
      }, 700)
    }, function () {
      var e = $(this);
      clearTimeout(g), clearTimeout(w), $(".g-menu.category-tree").stop(!0, !0).fadeOut(300), e.removeClass("hovered")
    }), $(".g-menu li.collapsible").hover(function () {
      $(this).find(".inside-menu").show()
    }, function () {
      $(this).find(".inside-menu").stop(!0, !0).hide()
    }), $(".g-menu .inside-menu li.collapsible").hover(function () {
      var e = $(this).find(".drop");
      $(".g-menu .inside-menu li.collapsible .drop").each(function () {
        var t = $(this);
        e != t && t.stop(!0, !0).hide()
      }), e.show()
    }, function () {
      $(this).find(".drop")
    }), $(".g-menu .inside-menu li.collapsible .drop").mouseleave(function () {
      $(this).stop(!0, !0).hide()
    }), $(".g-menu .inside-menu").mouseleave(function () {
      $(this).find(".drop .drop").stop(!0, !0).hide()
    }), $(".g-menu.category-tree > .collapsible.with-bg").hover(function () {
      $(".g-menu.category-tree").addClass("active-colapse")
    }, function () {
      $(".g-menu.category-tree").removeClass("active-colapse")
    })
  }
  if (MatchMedia("only screen and (max-width: 991px)") && ($(".active-navi .page-nav .fat-btn").click(function () {
      $(".g-menu.category-tree").toggle(300), $(this).toggleClass("hovered")
    }), mobMenuClick()), MatchMedia("only screen and (max-width: 480px)") && $("#menu.slideout-menu > #scroller").append($("<div>").load("/ nav.page-nav", function () {
      mobMenuClick()
    })), sortingPop(), $(document).on("click", ".filters .filter-param label input", function () {
      $(this).is(":radio") ? ($(this).closest(".group").find("label").removeClass("checked"), $(this).parent().addClass("checked")) : $(this).parent().toggleClass("checked")
    }), $(".homepage-bxslider").bxSlider({auto: $(".homepage-bxslider li").length > 1, pause: 7e3, autoHover: !0, pager: $(".homepage-bxslider li").length > 1}), $(".homepage-bxslider").css("height", "auto"), $(".related-bxslider").bxSlider({minSlides: 1, maxSlides: 4, slideWidth: 146, slideMargin: 10, infiniteLoop: !0, pager: !1}), $(".onsale-bxslider").bxSlider({minSlides: 1, maxSlides: 6, slideWidth: 146, slideMargin: 10, infiniteLoop: !0, pager: !1}), "ontouchstart" in window && MatchMedia("only screen and (max-width: 760px)") && ($(".nav-sidebar-body").css("opacity", 1), $(".nav-sidebar-body").hide(), $("a.nav-sidebar-header").click(function () {
      return $(".nav-sidebar-body").slideToggle(200), !1
    })), $(".dialog").on("click", "a.dialog-close", function () {
      return $(this).closest(".dialog").hide().find(".cart").empty(), $(this).closest(".dialog-window").hide(), !1
    }), $(document).keyup(function (e) {
      27 == e.keyCode && $(".dialog:visible").hide().find(".cart").empty()
    }), $(document).on("mouseover mouseout", ".badge-wrapper", function (e) {
      if ("onhover" == _cat_prd_image && MatchMedia("only screen and (min-width: 1024px)")) if ("mouseover" == e.type) {
        if ($(this).find(".product-second-img").length) {
          var t = $(this).find(".product-first-img"), a = $(this).find(".product-second-img");
          $(t).hide(), $(a).show()
        }
      } else if ($(this).find(".product-second-img").length) {
        var t = $(this).find(".product-first-img"), a = $(this).find(".product-second-img");
        $(a).hide(), $(t).show()
      }
    }), "onclick" == _cat_prd_image && $(document).on("click", ".rotate-image", function () {
      var e = $(this).closest(".image");
      if ($(e).find(".product-second-img").length) {
        var t = $(e).find(".product-first-img"), a = $(e).find(".product-second-img");
        $(this).hasClass("second-img") ? ($(this).removeClass("second-img"), $(t).show(), $(a).hide()) : ($(this).addClass("second-img"), $(t).hide(), $(a).show())
      }
    }), $(document).on("click", "#ft_favorites a", function (e) {
      return !(parseInt($("#ft_favorites a").find(".count").html()) <= 0)
    }), $(document).on("click", "a.add-to-wish", function () {
      var e = $.cookie("epika_shop_favorites");
      if ($.cookie("epika_shop_favorites", e, {expires: 30, path: "/"}), $(this).hasClass("active")) {
        $(this).removeClass("active"), e = e ? e.split(",") : [];
        var t = $.inArray($(this).data("product") + "", e);
        -1 != t && e.splice(t, 1), e.length > 0 ? ($.cookie("epika_shop_favorites", e.join(","), {expires: 30, path: "/"}), $("#ft_favorites a").find(".count").html(e.length)) : ($("#ft_favorites a").find(".count").html(e.length), $.cookie("epika_shop_favorites", null, {path: "/"}))
      } else {
        $(this).addClass("active"), e ? e += "," + $(this).data("product") : e = "" + $(this).data("product"), e.split(",").length > 0 ? $("#ft_favorites a").find(".count").html(e.split(",").length) : $("#ft_favorites a").find(".count").html("0"), $.cookie("epika_shop_favorites", e, {expires: 30, path: "/"});
        var a = $(this).find(".icon-heart-1"), i = a.clone();
        $(i).addClass("animated").addClass("fadeOutUp"), $(i).addClass("fav-clone-remove"), $(i).css("position", "absolute"), $(i).css("top", "0px"), $(i).css("left", "0px"), $(i).insertAfter(a), setTimeout(function () {
          $(".fav-clone-remove").remove()
        }, 1e3)
      }
      return ftHighlight("#ft_favorites"), !1
    }), $(".product-info").length) {
    var y = $.cookie("shop_viewed"), C = $(".product").data("id").toString();
    if (y) {
      var k = y.split(",");
      if (-1 == k.indexOf(C)) {
        if ("undefined" != typeof shop_viewed_products_limit) {
          var _ = parseInt(shop_viewed_products_limit);
          if (_ <= 0) return;
          k.length >= _ && k.splice(_ - 1, k.length - (_ - 1))
        }
        k.splice(0, 0, C), y = k.toString(), $.cookie("shop_viewed", y, {expires: 30, path: "/"})
      }
    } else $.cookie("shop_viewed", C, {expires: 30, path: "/"})
  }
  $(".container-fluid").on("click", ".comare-item .remove", function () {
    var e = $(this).closest(".comare-item");
    $(e).addClass("animated zoomOut"), setTimeout(function () {
      $(e).animate({width: 1, height: 1}, 300, "easeInOutCubic")
    }, 600), setTimeout(function () {
      $(e).remove(), $(".container-fluid").find(".comare-item") <= 0 && $(".comparison-preview").slideUp()
    }, 900)
  }), $(document).on("click", ".container .product-list a.compare", function (e) {
    return e.preventDefault(), o(this, $(this).data("product"), "list"), !1
  }), $(document).on("click", ".product a.compare", function (e) {
    e.preventDefault();
    var t = $(this).closest(".product-info"), a = "product_page";
    if (t.length <= 0 && $(this).closest("#swipebox-right-bar").length > 0 && (t = $(this).closest("#swipebox-right-bar"), a = "product_page_modal"), !(t.length <= 0)) return o(this, $(t).find('input[name="product_id"]').val(), a), !1
  }), $(".comparison-preview").hide(), $(document).on("mouseleave", ".comparison-preview", function (e) {
    i()
  }), $(document).on("click", "#compare-leash", function (e) {
    if (e.preventDefault(), e.stopPropagation(), !(parseInt($("#compare-leash a").find("strong").html()) <= 0)) return $(".comparison-preview").stop().slideDown(300), i(), !1
  });
  var b;
  $(".comparison-preview ul.products").on("click", ".remove", function (e) {
    e.preventDefault();
    var t = $(this).closest(".comare-item"), a = $(t).attr("data-product-id"), i = $.cookie("shop_compare");
    i = i ? i.split(",") : [];
    var o = $.inArray(a + "", i);
    -1 != o && i.splice(o, 1), i.length > 0 ? ($.cookie("shop_compare", i.join(","), {expires: 30, path: "/"}), $("#compare-leash a").show().find("strong").html(i.length)) : ($("#compare-leash a").find("strong").html("0"), $.cookie("shop_compare", null, {path: "/"})), $('.prd-wrapper[data-product-id="' + a + '"]').find("a.compare").removeClass("active"), $(".product a.compare").removeClass("active"), $(t).fadeOut(300, function () {
      $(this).remove()
    })
  }), $(".clear-compare").on("click", function (e) {
    e.preventDefault(), $.cookie("shop_compare", null, {path: "/"}), $("#compare-leash a").find("strong").html("0");
    var t = 200 * $(".comparison-preview ul.products .comare-item").length, a = 300 * $(".comparison-preview ul.products .comare-item").length;
    $(".comparison-preview ul.products .comare-item").each(function () {
      var e = $(this);
      setTimeout(function () {
        e.fadeOut(300, function () {
          $(this).remove()
        })
      }, t), t -= 200
    }), $(".prd-wrapper").find("a.compare").removeClass("active"), $(".product a.compare").removeClass("active"), setTimeout(function () {
      $(".comparison-preview").stop().slideUp(300)
    }, a)
  });
  var x = $("[data-remodal-id=remodal_quick_view]"), z = x.remodal({hashTracking: !1});
  $(document).on("opened", x, function () {
    $(document).on("added_to_basket", ".remodal", function () {
      z.close()
    })
  }), $(document).on("opening", ".remodal", function () {
    $("main").addClass("blur")
  }), $(document).on("closing", ".remodal", function (e) {
    $("main").removeClass("blur")
  });
  var I;
  $(document).on("click", ".product-list .quick_view", function () {
    $(".remodal-wrapper .remodal-prev-product").show(), $(".remodal-wrapper .remodal-next-product").show(), I = $(this).closest(".product-list"), n(this, $(this).data("url"))
  }), $(document).on("click", ".remodal-wrapper .remodal-prev-product", function () {
    var e = I.find(".prd").size();
    if (0 != modalDialogCurPos) {
      var t = I.find(".prd").get(modalDialogCurPos - 1);
      if (void 0 != t) {
        var a = $('<div class="loader"> </div>');
        $("body").append(a), modalDialogCurPos -= 1, e > 1 && s(e, modalDialogCurPos);
        var i = $(".remodal-wrapper");
        $(i).addClass("fadeOutLeftBig");
        var o = $(t).find(".quick_view").data("url"), n = $("[data-remodal-id=remodal_quick_view] .remodal_in");
        $(i).hide("slide", {direction: "right", easing: "easeInBack"}, function () {
          setTimeout(function () {
            $.get(o + "&quickview=1", function (e) {
              $(a).remove(), n.html($(e).find(".product-info")), setTimeout(function () {
                $(i).show("slide", {direction: "left", easing: "easeOutBack"}, 900), $(i).removeClass("fadeOutLeftBig")
              }, 500), setTimeout(function () {
                r(n)
              }, 800)
            })
          }, 500)
        }, 900)
      }
    }
  }), $(document).on("click", ".remodal-wrapper .remodal-next-product", function () {
    var e = I.find(".prd").size();
    if (!(modalDialogCurPos >= e - 1)) {
      var t = I.find(".prd").get(modalDialogCurPos + 1);
      if (void 0 != t) {
        var a = $('<div class="loader"> </div>');
        $("body").append(a), modalDialogCurPos += 1, e > 1 && s(e, modalDialogCurPos);
        var i = $(".remodal-wrapper");
        $(i).addClass("fadeOutRightBig");
        var o = $(t).find(".quick_view").data("url"), n = $("[data-remodal-id=remodal_quick_view] .remodal_in");
        $(i).hide("slide", {direction: "left", easing: "easeInBack"}, function () {
          setTimeout(function () {
            $.get(o + "&quickview=1", function (e) {
              $(a).remove(), n.html($(e).find(".product-info")), setTimeout(function () {
                $(i).show("slide", {direction: "right", easing: "easeOutBack"}, 900), $(i).removeClass("fadeOutRightBig")
              }, 500), setTimeout(function () {
                r(n)
              }, 800)
            })
          }, 500)
        }, 900)
      }
    }
  }), $(document).on("click", ".remodal-wrapper .more-images .thumb", function (e) {
    e.preventDefault();
    var t = $(this).find(".swipebox").attr("href");
    $(".remodal-wrapper #product-image").attr("src", t)
  }), $(document).on("click", ".remodal-wrapper #product-image", function (e) {
    e.preventDefault()
  });
  var T = !1;
  $("#cart").hover(function () {
    if (MatchMedia("only screen and (min-width: 1024px)")) {
      if (window.location.pathname.toLowerCase().indexOf("/cart") >= 0) return;
      if ($(".shop-controls").hasClass("fixed-pos")) return;
      $(".fly-in-mini-cart").find(".fly-in-cart").length <= 0 && $(".fly-in-mini-cart").html($(".fly-in-cart")), !T || $(".fly-in-cart").html().length <= 0 ? ($(".fly-in-cart").html('<div class="loader"> </div>'), $(".fly-in-mini-cart").addClass("animated").addClass("fadeInUp"), $(".fly-in-mini-cart").stop().fadeIn(), $.get(_wa_url + "cart/", {type: "minicart"}, function (e) {
        T = !0, $(".fly-in-cart").html(e);
        var t = $(e).find(".items-count-val").html();
        $("#cart a").find(".items-count-val").html(t), $(".cart_count").html(t)
      })) : ($(".fly-in-mini-cart").find(".fly-in-cart").length <= 0 && $(".fly-in-mini-cart").html($(".fly-in-cart")), $(".fly-in-mini-cart").addClass("animated").addClass("fadeInUp"), $(".fly-in-mini-cart").stop().fadeIn())
    }
  }, function () {
    if (MatchMedia("only screen and (min-width: 1024px)")) {
      if (window.location.pathname.toLowerCase().indexOf("/cart") >= 0) return;
      $(".fly-in-mini-cart").removeClass("animated").removeClass("fadeInUp"), $(".fly-in-mini-cart").stop().fadeOut()
    }
  }), $(document).on("click", "#cart .icon-shopicon, #cart .cart-total, #cart .desc, #cart .cart_count, .added2cart a, .checkout-open-cart", function (e) {
    if (e.preventDefault(), e.stopPropagation(), !(window.location.pathname.toLowerCase().indexOf("/cart") >= 0)) {
      $(".fly-in-mini-cart").removeClass("animated").removeClass("fadeInUp"), $(".fly-in-mini-cart").stop().fadeOut(), $(".fly-in-cart").html("");
      var t = $('<div class="loader"> </div>');
      $("body").append(t), $("[data-remodal-id=remodal_quick_view]").addClass("scart-modal").removeClass("qwiew-modal");
      var a = $("[data-remodal-id=remodal_quick_view] .remodal_in");
      $(a).find(".cart-content").length <= 0 ? $.get(_wa_url + "cart/", {type: "fullsizecart"}, function (e) {
        l(a, e, t)
      }) : $(t).remove(), z.open(), x.fadeIn()
    }
  }), $(document).on("closed", x, function () {
    $(".fly-in-mini-cart").find(".fly-in-cart").length <= 0 && $(".fly-in-mini-cart").html($(".fly-in-cart")), $(".epika-auth-block").find(".epika-auth-form").length <= 0 && $(".epika-auth-block").html($(".epika-auth-form")), $(".ep-cart-mini").html('<div class="loader"> </div>'), $(".ep-cart-mini").length > 0 && $.get(_wa_url + "cart/", {type: "checkoutcart"}, function (e) {
      $(".ep-cart-mini").html(e)
    });
    var e = $("[data-remodal-id=remodal_quick_view] .remodal_in");
    $(e).html(""), $("[data-remodal-id=remodal_quick_view]").removeClass("cart").removeClass("scart-modal").removeClass("qwiew-modal"), $(".remodal-wrapper .remodal-prev-product").hide(), $(".remodal-wrapper .remodal-next-product").hide()
  }), $(document).on("click", ".add-to-inv", function (e) {
    e.preventDefault(), e.stopPropagation();
    var t = $(this).closest("form.addtocart"), a = !1, i = $(this).closest(".remodal_in");
    return i.length > 0 ? a = i : window.location.pathname.toLowerCase().indexOf("/cart") >= 0 && (a = $("#page-content")), $.post(t.attr("action") + "?html=1", t.serialize(), function (e) {
      if ("ok" == e.status) {
        var t = $('<div class="loader"> </div>');
        if ($("body").append(t), !a) return location.href = _wa_url + "cart/", window.status = _wa_url + "cart/", !1;
        a.stop().fadeTo("fast", .3), $.get(_wa_url + "cart/", {type: "fullsizecart"}, function (e) {
          l(a, e, t)
        })
      }
    }), !1
  }), $(document).on("click", ".cart-coupon-btn", function (e) {
    e.preventDefault(), e.stopPropagation();
    var t = $(this).closest(".remodal_in"), a = !1;
    if (t.length > 0 ? a = t : window.location.pathname.toLowerCase().indexOf("/cart") >= 0 && (a = $("#page-content")), a) {
      var i = $('<div class="loader"> </div>');
      $("body").append(i), a.stop().fadeTo("fast", .3);
      var o = $('.fullsize-cart input[name="coupon_code"]').val();
      return $.post(_wa_url + "cart/", {html: 1, coupon_code: o, type: "fullsizecart"}, function (e) {
        l(a, e, i)
      }), !1
    }
  }), $(document).on("click", "#cancel-affiliate, .use-affiliate-btn", function (e) {
    e.preventDefault(), e.stopPropagation();
    var t = 1;
    "cancel-affiliate" == $(this).attr("id") && (t = 0);
    var a = $(this).closest(".remodal_in"), i = !1;
    if (a.length > 0 ? i = a : window.location.pathname.toLowerCase().indexOf("/cart") >= 0 && (i = $("#page-content")), i) {
      var o = $('<div class="loader"> </div>');
      return $("body").append(o), i.stop().fadeTo("fast", .3), $.post(_wa_url + "cart/", {html: 1, use_affiliate: t, type: "fullsizecart"}, function (e) {
        l(i, e, o)
      }), !1
    }
  }), $(".container").on("submit", ".product-list form.addtocart", function () {
    var e = $(this);
    if (e.find(".icon-s-cart").hasClass("active")) return location.href = "/cart", window.status = "/cart", !1;
    if (e.data("url")) {
      var t = e.data("url");
      return t = t.replace("?cart=1", "?quick_view=1"), n(e, t), !1
    }
    e.find(".adding2cart").addClass("icon16 loading"), e.find(".adding2cart").addClass("icon-gear-slim").fadeIn(300), e.find(".icon-s-cart").css("opacity", "0");
    var a = e.find(".scart-ctr-basket"), i = e.find(".scart-ctr-spin"), o = e.find(".scart-ctr-suc");
    return o.hide(), a.hide(), i.show(), $.post(e.attr("action") + "?html=1", e.serialize(), function (t) {
      if (setTimeout(function () {
          e.find(".adding2cart").fadeOut(300)
        }, 450), setTimeout(function () {
          e.find(".icon-s-cart").css("opacity", "1")
        }, 750), "ok" == t.status) {
        $.get(_wa_url + "cart/", {type: "minicart"}, function (e) {
          $(".fly-in-cart").html(e);
          var t = $(e).find(".items-count-val").html();
          $("#cart a").find(".items-count-val").html(t), $(".cart_count").html(t), void 0 !== $.flexdiscountFrontend && $.flexdiscountFrontend.cartChange()
        }), setTimeout(function () {
          i.hide(), o.fadeIn()
        }, 1e3);
        var n = $(".cart-total"), r = $(".cart_count");
        if (n.closest("#cart").removeClass("empty"), $(window).scrollTop() >= 55 && $("#cart").addClass("fixed"), MatchMedia("only screen and (max-width: 760px)")) e.find('input[type="submit"]').hide(), e.find("span.added2cart").show(), n.html(t.data.total), r.html(t.data.count), r.addClass("update"), setTimeout(function () {
          r.removeClass("update")
        }, 6e3), $("#cart-content").append($('<div class="cart-just-added"></div>').html(e.find("span.added2cart").text())), $("#cart").hasClass("fixed") && $(".cart-to-checkout").hide(); else {
          var s = e.closest(".prd");
          $('<div class="flying-product"></div>').append(s.html()).css({"z-index": 100500, background: "#fff", top: s.offset().top, left: s.offset().left, width: s.width() + "px", height: s.height() + "px", position: "absolute", overflow: "hidden"}).appendTo("body").css({}).animate({top: $("#cart.cart").offset().top, left: $("#cart.cart").offset().left, width: "10px", height: "10px", opacity: .7}, 700, function () {
            $(this).remove(), n.html(t.data.total), r.html(t.data.count), r.addClass("update"), setTimeout(function () {
              r.removeClass("update")
            }, 6e3), $("#cart-content").append($('<div class="cart-just-added"></div>').html(e.find("span.added2cart").text())), $("#cart").hasClass("fixed") && $(".cart-to-checkout").show()
          })
        }
      } else "fail" == t.status && (a.fadeIn(), i.hide(), o.hide(), alert(t.errors))
    }, "json"), !1
  });
  var D = !0, M = !0, L = !1, O = 0;
  if (c(), $(window).bind("resize", c), m(), $(".slidemenu").on("afterLoadDone.waSlideMenu", function () {
      m(), $("img").retina(), $(window).lazyLoad && $(window).lazyLoad("reload")
    }).on("onLatestClick.waSlideMenu", function () {
      "ontouchstart" in window && MatchMedia("only screen and (max-width: 760px)") && $(".nav-sidebar-body").slideUp(200)
    }), $.fn.lazyLoad) {
    var q = $(".lazyloading-paging");
    if (!q.length) return;
    var P = parseInt(q.data("times"), 10), B = q.data("linkText") || "Load more", S = q.data("loading-str") || "Loading...", N = q.find("li.selected");
    N.children("a").text();
    var U = $(window);
    U.lazyLoad("stop"), N.next().length && U.lazyLoad({
      container: "#product-list .product-list", load: function () {
        U.lazyLoad("sleep");
        var e = $(".lazyloading-paging"), t = e.find("li.selected").next().find("a").attr("href");
        if (t) {
          var a = $("#product-list .product-list");
          $.get(t + "&lazyLoad=1", function (t) {
            var i = $("<div></div>").html(t);
            $.Retina && i.find("#product-list .product-list img").retina(), a.append(i.find("#product-list .product-list").children());
            var o = i.find(".lazyloading-paging");
            o.length > 0 && e.replaceWith(o), P -= 1;
            var n = (e = o).find("li.selected"), r = n.next(), s = parseInt($("#category_loaded_page").val());
            if (s <= 0 && (s = 1), $(n).addClass("loaded"), $($(".lazyloading-paging").find("li.selected").prevAll().get().reverse()).each(function (e) {
                e >= s && $(this).addClass("loaded")
              }), r.length) if (!isNaN(P) && P <= 0) {
              U.lazyLoad("sleep"), $(".lazyloading-load-more").length ? $(".lazyloading-load-more.button").html('<i class="icon-cw"></i> ' + B + ' <span class="load-more-count"></span>') : $('<a href="#" class="lazyloading-load-more button"><i class="icon-cw"></i> ' + B + ' <span class="load-more-count"></span></a>').insertBefore(e).click(function () {
                return P = 1, U.lazyLoad("wake"), U.lazyLoad("force"), $(".lazyloading-load-more.button").html(S), !1
              });
              var l = $("#product-list .product-list").find(".prd.catalog-item").length, d = $("#category_products_count").val(), c = $("#category_products_per_page").val(), p = d - l;
              p > 0 ? (c > p && (c = p), $(".load-more-count").html("<strong>" + c + "</strong> из <strong>" + p + "</strong>")) : $(".load-more-count").html("")
            } else U.lazyLoad("wake"); else U.lazyLoad("stop"), $(".lazyloading-load-more").hide();
            i.remove(), getLazyImages()
          })
        } else U.lazyLoad("stop")
      }
    })
  }
}), $(window).load(function () {
  reviewCountLoad()
}), function (e) {
  var t = {shownClass: "is-shown"}, a = function () {
    e("#filters-toggle-link").on("click", function () {
      i(e(this))
    })
  }, i = function (a) {
    var i = a.closest(".filters"), o = t.shownClass, n = a.data("show-text"), r = a.data("hide-text");
    i.hasClass(o) ? (i.removeClass(o), a.text(n), e("form.filters-form-wrapper").hide(300)) : (i.addClass(o), a.text(r), e("form.filters-form-wrapper").show(300))
  };
  e(document).ready(function () {
    a()
  })
}(jQuery);
var lazyImages = new Array;