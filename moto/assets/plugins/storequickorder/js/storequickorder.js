/*
 *
 * Storequickorder plugin for Webasyst framework.
 *
 * @name Storequickorder
 * @author EasyIT LLC
 * @link http://easy-it.ru/
 * @copyright Copyright (c) 2015, EasyIT LLC
 * @version    1.6.4, 2016-03-17
 *
 */
(function($) {
    sCenterDialog = function(dialog) {
        dialog = $(dialog);
        var wdw = dialog.find('.dialog-window');
        var dw = wdw.outerWidth(true);
        var dh = wdw.outerHeight(true);
        var ww = $(window).width();
        var wh = $(window).height();
        var w = ((ww/2)-(dw/2));
        var h = ((wh/2)-(dh/2));


        //*if (($.storequickorder.options.window_style_position_absolute !== undefined) && $.storequickorder.options.window_style_position_absolute) {*/

            if (($.storequickorder.options.window_vert_align !== undefined) && $.storequickorder.options.window_vert_align) {

                wdw.css({
                    'marginLeft': Math.round(w)+'px',
                    'marginTop': $(window).scrollTop() + $.storequickorder.options.window_margin_top +'px',
                    'position': 'absolute'
                });
            } else {
                wdw.css({
                    'marginLeft': Math.round(w)+'px',
                    'marginTop': $.storequickorder.options.window_margin_top +'px',
                    //'position': 'absolute'
                });
            }
        /*} else {
            wdw.css({
                'marginLeft': Math.round(w)+'px',
                'marginTop': Math.round(h)+'px'
            });
        }*/


    }

sdialogCreate = function(p) {
	p = $.extend({
		url: null,
		post: null,
		el: null
	}, p);

	var dialog = $('#storequickorder');
	if (dialog.size() <= 0) {
		if (p.url) {
			var f_callback = function (response) {
				dialog = $(response);
                if (typeof storequickorder_event_dialog_show == 'function') {
                    storequickorder_event_dialog_show(response, dialog, p);
                } else {
                    dialog.appendTo('body');
                    dialog.show();
                }

				p.el.removeAttr('disabled');

				sCenterDialog(dialog);
				$('#storequickorder').on('click', '.close-button', function() {

                    if ($('input[name=storequickorder_result_success]').length) {
                        if (typeof storequickorder_event_dialog_result_success == 'function') {
                            storequickorder_event_dialog_result_success(response, dialog, p);
                        }
                        $('#storequickorder').remove();
                        location.reload();
                    } else {
                        $('#storequickorder').remove();
                    }

				});
				$('#storequickorder').on('click', '.submit-button', function() {
					var button = this;
                    if (typeof storequickorder_event_dialog_submit == 'function') {
                        storequickorder_event_dialog_submit(response, dialog, button);
                    }

                    if ($('#storequickorder form:first').length) {
						var form = $('#storequickorder form:first');
                        var place = $(form).find('input[name="place"]').val();
                        //var act = place === undefined ? 'order' : ( place == 'frontend_cart' ? 'cart_order' : 'order');
                        var act = (place == 'frontend_cart' ? 'cart_order' : 'order');

                        $.ajax({
                            url: p.el.attr('data-app-url') + 'storequickorder/' + act + '/',
                            data: $(form).serialize(),
                            type: 'POST',
                            dataType: 'html', //"JSON",
                            beforeSend: function() {
                                if (typeof storequickorder_event_dialog_submit_beforesend == 'function') {
                                    storequickorder_event_dialog_submit_beforesend(response, dialog, button);
                                }
                                $(button).attr('disabled', 'disabled');
                            },
                            success: function(r){
                                if (typeof storequickorder_event_dialog_submit_success == 'function') {
                                    storequickorder_event_dialog_submit_success($.storequickorder.options, r);
                                }
                                $('#storequickorder .dialog-content-indent').replaceWith($(r).find('.dialog-content-indent'));
                                if ($(r).find('.checkout-result').length) {

                                    // Yandex-Metrics
                                    if (($.storequickorder.options.yaCounter_enabled !== undefined) && ($.storequickorder.options.yaCounter_enabled == true) && ($.storequickorder.options.yaCounter_id !== undefined) && !isNaN(parseInt($.storequickorder.options.yaCounter_id)) && (typeof eval('yaCounter' + $.storequickorder.options.yaCounter_id) == 'object')) {
                                        eval('yaCounter' + $.storequickorder.options.yaCounter_id).reachGoal($.storequickorder.options.yaCounter_target_name);
                                        //console.log('yaCounter reachGoal !!!');
                                    }

                                    // Google-Analytics
                                    if (($.storequickorder.options.ga_enabled !== undefined) && ($.storequickorder.options.ga_enabled == true) && ($.storequickorder.options.ga_id !== undefined) && (typeof ga == 'function')) {
                                        ga('send', 'event', $.storequickorder.options.ga_target_name, $.storequickorder.options.ga_target_name);
                                        //console.log('ga send !!!');
                                    }

                                    if (typeof storequickorder_event_order_created == 'function') {
                                        storequickorder_event_order_created($.storequickorder.options, r);
                                    }
                                    $(button).hide();
                                } else {
                                    $(button).removeAttr('disabled', 'disabled');
                                }

                            }
                        });


					}
				});
				var onEsc = function(e) {
					if (!dialog.is(':visible')) {
						return;
					}

					if (e && e.keyCode == 27) { // escape
						if (p.oncancel && typeof p.oncancel == 'function') {
							p.oncancel.call(dialog[0]);
						}
						$('#storequickorder').remove();
						return;
					}

					$(document).one('keyup', onEsc);
				};
				onEsc();
				if (p.onload) {
					p.onload.call(dialog[0]);
				}
			};
			if (p.post) {
				$.post(p.url, p.post, f_callback);
			} else {
				$.get(p.url, f_callback);
			}
		}
	} else {
		dialog.show();
	}

	$(document).one('hashchange', $('#storequickorder').remove);
	return dialog;
}


    $(function() {
        $.storequickorder = {
            init : 0,
            is_mobile : true,//false,
            options: {},
            check_stock_delay: 100,
            setOptions: function(opts) {
                var self = this;
                self.options = opts;
                if (typeof opts.check_stock_delay != 'undefined') {
                    self.check_stock_delay = opts.check_stock_delay;
                }
                if (/iPhone/i.test(window.navigator.userAgent)) {
                    self.is_mobile = true;
                }
                if (/Android/i.test(window.navigator.userAgent)) {
                    if (/Mobile/i.test(window.navigator.userAgent)) {
                        self.is_mobile = true;
                    }
                }
                self.options.window_margin_top = 200;
                if ((typeof opts.window_margin_top != 'undefined') && (opts.window_margin_top)) {
                    self.options.window_margin_top = 200;
                }
            },
        findParentFormBuyoneclick : function(button_one_click) {
            var parent_form;
            var parent_li;
            var parent_div_cart;
            if ((parent_form = button_one_click.closest('form')) && parent_form.length) {
                return parent_form;
            } else if ((parent_li = button_one_click.closest('li')) && parent_li.length) {
                if ((parent_form = parent_li.find('form').first()) && parent_form.length) {
                    return parent_form;
                }

                return $();
            } else if ((parent_div_cart = button_one_click.closest('div.cart')) && parent_div_cart.length) {

                if ((parent_form = parent_div_cart.find('form').first()) && parent_form.length) {
                    return parent_form;
                }

                return $();
            } else if ((parent_form = $('form#cart-form').first()) && parent_form.length) {
                return parent_form;
            } else if ((parent_form = $('form.cart-form')) && (parent_form.length == 1)) {
                return parent_form;
            }
            return $(); /* заглушка от JS-ных ошибок, вместо false */
            //element.closest('form')
        },
        initProduct: function(params) {
            var self = this;
            if (self.init != 1) {
                $('#dsvoverview').removeAttr('tabindex'); // for dsv2 delete после выхода ss6.1
                self.init = 1;
            }
            if (typeof params.button_id == 'undefined') {
                return false;
            }
            params.place = 'product';
            self.initButtonBuyoneclick(params);
        },
        initFrontendCart: function(params) {
            var self = this;
            if (typeof params.button_id == 'undefined') {
                return false;
            }
            params.place = 'frontend_cart';
            self.initButtonBuyoneclick(params);
        },

        initButtonBuyoneclick: function(params) {
            var self = this;
            if (self.init != 1) {
                $('#dsvoverview').removeAttr('tabindex'); // for dsv2
                self.init = 1;
            }
            if (typeof params.button_id == 'undefined') {
                return false;
            }

            var but_id = params.button_id;

            var but = $('.' + but_id);
            var parent_form = self.findParentFormBuyoneclick(but);
            parent_form.data('storequickorder-button', but);
            but.data('parent_form', parent_form);

            if (typeof params.place != 'undefined') {
                but.data('place', params.place);
            } else {
                but.data('place', 'product');
            }
            if (typeof storequickorder_event_init_buyoneclick == 'function') {
                storequickorder_event_init_buyoneclick(params, but);
            }


            var ajax_url = 'order';
            if (but.data('place') == 'frontend_cart') {
                ajax_url = 'cart_order';
            } else {
                if (!parent_form.find('[name="product_id"]').length) {
                    but.hide();
                //self.setVisibilityButton(false,but, parent_form);
                }
            }



            $('body').on('click', '.' + but_id, function() {
                var element = $(this);
                if (typeof storequickorder_event_button_click == 'function') {
                    storequickorder_event_button_click(element, parent_form, but_id);
                }
                element.attr('disabled', 'disabled');

                sdialogCreate({
                    url: element.attr('data-app-url') + 'storequickorder/' + ajax_url + '/',
                    //post: $('form#cart-form').serialize() + '&product_data=1',
                    post: parent_form.serialize() + '&product_data=1',
                    el: element
                });
            });

            self.searchMethodStorageStocks(but, parent_form);
            parent_form.find("#product-skus input:radio").on('click', function () {
                if ($(this).data('disabled')) {
                    self.setVisibilityButton(false, but, parent_form);
                } else {
                    self.setVisibilityButton(true, but, parent_form);
                }
            });
            parent_form.find(
                '.skus input:radio,' +
                '.services input[type=checkbox],' +
                '.inline-select a,' +
                'a[data-feature-id]' +
                '').on('click', function () {
                    setTimeout(function() {
                        self.checkStock( but, parent_form);
                    }, self.check_stock_delay);
                });

            parent_form.find(
                'select.sku-feature,' +
                'select[name^="service_variant"]' +
                '').on('change', function() {
                    setTimeout(function() {
                        self.checkStock( but, parent_form);
                    }, self.check_stock_delay);
                });

            self.checkStock(but, parent_form);
            setTimeout(function() {
                self.checkStock( but, parent_form);
            }, self.check_stock_delay); /* fix */
        },

        checkStock : function (but, parent_form) {
			var av = true;
			var skip = true;
            var self = this;
			if (but.data('methodStorageStock') == 'div_stocks') {
				var fl = false;
                parent_form.find('div.stocks strong[class^="stock-"]:visible, div.stocks span[class^="stock-"]:visible').each(function(indx, el){
					if ($(this).hasClass('stock-none')) { /*  || $(this).hasClass('stock-critical') */
						av = false;
					} else {
						fl = true;
					}
				});
				if (!fl) {
					av = false;
				} else {
					av = true;
				}
				skip = false;
			} else if ((but.data('methodStorageStock') == 'div_stocks_custom') || (but.data('methodStorageStock') == 'default')) {
				skip = false;
				//setTimeout(function() {
					av = self.isEnabledAdd2cart_button(but, parent_form);
				//}, 500);
			} else {
				//unknown method storage stock
			}
			//if (!skip) {
                self.setVisibilityButton(av, but, parent_form);
			//}
            if (typeof storequickorder_event_check_stock == 'function') {
                storequickorder_event_check_stock(av, but, parent_form);
            }
			return av;

		},
		searchMethodStorageStocks : function (but, parent_form) {
            var self = this;
            if (typeof storequickorder_event_search_method == 'function') {
                return storequickorder_event_search_method(but, parent_form, self);
            }

            if ((typeof but.data('methodStorageStock') != 'undefined') && (but.data('methodStorageStock') != '')) {
                return but.data('methodStorageStock');
            } else {
                if (parent_form.find('div.stocks strong').length) {
                    but.data('methodStorageStock', 'div_stocks');
                    if (!parent_form.find('div.stocks strong:visible').length) {
                        but.data('methodStorageStock', 'div_stocks_custom');
                    }
                } else if (parent_form.find('div.stocks span').length) {
                    but.data('methodStorageStock', 'div_stocks');
                    if (!parent_form.find('div.stocks span:visible').length) {
                        but.data('methodStorageStock', 'div_stocks_custom'); // var 2
                    }
                } else {
                    but.data('methodStorageStock', 'default');
                }
                return but.data('methodStorageStock');
            }
		},
		setVisibilityButton : function (vis, but, parent_form) {
            var self = this;
            if (typeof storequickorder_event_set_visibility_button == 'function') {
                return storequickorder_event_set_visibility_button(vis, but, parent_form, self);
            }
            var but_place = but.data('place');
            if (but_place != 'frontend_cart') {
                if (vis) {
                    // rename
                    if (self.options.button_name !== undefined) {
                        but.val(self.options.button_name);
                    }
                } else {
                    // rename
                    if (self.options.button_name_not_available !== undefined) {
                        but.val(self.options.button_name_not_available);
                    }
                }
            }


            if (((self.options.always_show_active_button !== undefined) && self.options.always_show_active_button) || vis) {
                but.removeAttr('disabled');

                if (typeof storequickorder_event_set_visibility_button_true == 'function') {
                    storequickorder_event_set_visibility_button_true(vis, but, parent_form);
                }



            } else {
                but.attr('disabled', 'disabled');

                if (typeof storequickorder_event_set_visibility_button_false == 'function') {
                    storequickorder_event_set_visibility_button_false(vis, but, parent_form);
                }
            }

		},
		isEnabledAdd2cart_button : function ( but, parent_form ) {
            if (typeof storequickorder_event_is_enabled_add2cart == 'function') {
                return storequickorder_event_is_enabled_add2cart(but, parent_form);
            }
            if (!parent_form.find('.add2cart [type="submit"]').is("[disabled]") || (parent_form.find('.add2cart [type="submit"]:enabled').length>0)) {
                return true;
            } else {
                return false;
            }
		}
		,startCheckStock : function (but, parent_form) {
            var self = this;
            self.checkStock(but, parent_form);
		}
    };
});

})(jQuery);