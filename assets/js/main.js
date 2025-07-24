! function(e) {
	"use strict";

	function t(t) {
		e(t).length > 0 && e(t).each((function() {
			var t = e(this).find("a");
			e(this).find(t).each((function() {
				e(this).on("click", (function() {
					var t = e(this.getAttribute("href"));
					t.length && (event.preventDefault(), e("html, body").stop().animate({
						scrollTop: t.offset().top - 10
					}, 1e3))
				}))
			}))
		}))
	}
	if (e(window).on("load", (function() {
			e(".preloader").fadeOut(), new WOW({
				boxClass: "wow",
				animateClass: "animated",
				offset: 0,
				mobile: !1,
				live: !0
			}).init()
		})), e(".nice-select").length && e(".nice-select").niceSelect(), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
			e(this).on("click", (function(t) {
				t.preventDefault(), e(".preloader").css("display", "none")
			}))
		})), e.fn.thmobilemenu = function(t) {
			var a = e.extend({
				menuToggleBtn: ".th-menu-toggle",
				bodyToggleClass: "th-body-visible",
				subMenuClass: "th-submenu",
				subMenuParent: "menu-item-has-children",
				thSubMenuParent: "th-item-has-children",
				subMenuParentToggle: "th-active",
				meanExpandClass: "th-mean-expand",
				appendElement: '<span class="th-mean-expand"></span>',
				subMenuToggleClass: "th-open",
				toggleSpeed: 400
			}, t);
			return this.each((function() {
				var t = e(this);

				function s() {
					t.toggleClass(a.bodyToggleClass);
					var s = "." + a.subMenuClass;
					e(s).each((function() {
						e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle))
					}))
				}
				t.find("." + a.subMenuParent).each((function() {
					var t = e(this).find("ul");
					t.addClass(a.subMenuClass), t.css("display", "none"), e(this).addClass(a.subMenuParent), e(this).addClass(a.thSubMenuParent), e(this).children("a").append(a.appendElement)
				}));
				var n = "." + a.thSubMenuParent + " > a";
				e(n).each((function() {
					e(this).on("click", (function(t) {
						var s, n;
						t.preventDefault(), s = e(this).parent(), (n = s.children("ul")).length > 0 && (s.toggleClass(a.subMenuParentToggle), n.slideToggle(a.toggleSpeed), n.toggleClass(a.subMenuToggleClass))
					}))
				})), e(a.menuToggleBtn).each((function() {
					e(this).on("click", (function() {
						s()
					}))
				})), t.on("click", (function(e) {
					e.stopPropagation(), s()
				})), t.find("div").on("click", (function(e) {
					e.stopPropagation()
				}))
			}))
		}, e(".th-menu-wrapper").thmobilemenu(), t(".onepage-nav"), t(".scroll-down"), e(window).on("scroll", (function() {
			e(".onepage-nav").length
		})), e(window).scroll((function() {
			e(this).scrollTop() > 500 ? (e(".sticky-wrapper").addClass("sticky"), e(".category-menu").addClass("close-category")) : (e(".sticky-wrapper").removeClass("sticky"), e(".category-menu").removeClass("close-category"))
		})), e(".menu-expand").each((function() {
			e(this).on("click", (function(t) {
				t.preventDefault(), e(".category-menu").toggleClass("open-category")
			}))
		})), e(".scroll-top").length > 0) {
		var a = document.querySelector(".scroll-top"),
			s = document.querySelector(".scroll-top path"),
			n = s.getTotalLength();
		s.style.transition = s.style.WebkitTransition = "none", s.style.strokeDasharray = n + " " + n, s.style.strokeDashoffset = n, s.getBoundingClientRect(), s.style.transition = s.style.WebkitTransition = "stroke-dashoffset 10ms linear";
		var i = function() {
			var t = e(window).scrollTop(),
				a = e(document).height() - e(window).height(),
				i = n - t * n / a;
			s.style.strokeDashoffset = i
		};
		i(), e(window).scroll(i);
		jQuery(window).on("scroll", (function() {
			jQuery(this).scrollTop() > 50 ? jQuery(a).addClass("show") : jQuery(a).removeClass("show")
		})), jQuery(a).on("click", (function(e) {
			return e.preventDefault(), jQuery("html, body").animate({
				scrollTop: 0
			}, 750), !1
		}))
	}
	e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
		var t = e(this).attr("data-bg-src");
		e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
	})), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function() {
		var t = e(this).attr("data-bg-color");
		e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
	})), e("[data-theme-color]").length > 0 && e("[data-theme-color]").each((function() {
		var t = e(this).attr("data-theme-color");
		e(this).get(0).style.setProperty("--theme-color", t), e(this).removeAttr("data-theme-color")
	})), e("[data-border]").each((function() {
		var t = e(this).data("border");
		e(this).css("--th-border-color", t)
	})), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function() {
		var t = e(this).attr("data-mask-src");
		e(this).css({
			"mask-image": "url(" + t + ")",
			"-webkit-mask-image": "url(" + t + ")"
		}), e(this).addClass("bg-mask"), e(this).removeAttr("data-mask-src")
	})), e(".th-slider").each((function() {
		var t = e(this),
			a = e(this).data("slider-options"),
			s = t.find(".slider-prev"),
			n = t.find(".slider-next"),
			i = t.find(".slider-pagination").get(0),
			o = t.find(".slider-pagination2").get(0),
			r = a.paginationType || "bullets",
			c = a.autoplay,
			l = {
				slidesPerView: 1,
				spaceBetween: a.spaceBetween || 24,
				loop: !1 !== a.loop,
				speed: a.speed || 1e3,
				autoplay: c || {
					delay: 6e3,
					disableOnInteraction: !1
				},
				navigation: {
					nextEl: n.get(0),
					prevEl: s.get(0)
				},
				pagination: {
					el: i,
					type: r,
					clickable: !0,
					renderBullet: function(e, t) {
						var a = e + 1;
						return '<span class="' + t + '" aria-label="Go to Slide ' + (a < 10 ? "0" + a : a) + '"></span>'
					}
				},
				on: {
					init: function() {
						var t = this.el.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length;
						o && e(o).html('<span class="current-slide">01</span> <span class="total-slides">' + (t < 10 ? "0" + t : t) + "</span>")
					},
					slideChange: function() {
						var t = this.realIndex + 1,
							a = this.el.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length;
						o && e(o).html('<span class="current-slide">' + (t < 10 ? "0" + t : t) + '</span> <span class="total-slides">' + (a < 10 ? "0" + a : a) + "</span>")
					}
				}
			},
			d = e.extend({}, l, a);
		new Swiper(t.get(0), d);
		t.find(".swiper-slide").each((function() {
			var t = e(this),
				a = t.find("img");
			if (a.length) {
				var s = a.attr("src"),
					n = t.find(".explore-single-slide1, .propery-single-slide").get(0);
				if (n) {
					var i = new PANOLENS.ImagePanorama(s),
						o = new PANOLENS.Viewer({
							container: n,
							autoRotate: !0,
							autoRotateSpeed: .3,
							controlBar: !1,
							enableZoom: !0
						});
					n.addEventListener("wheel", (function(e) {
						e.preventDefault()
					}), {
						passive: !1
					}), o.add(i), o.addEventListener("enter", (function() {
						swiperInstance.allowTouchMove = !1
					})), o.addEventListener("exit", (function() {
						swiperInstance.allowTouchMove = !0
					}))
				}
			}
		})), e(".slider-area").length > 0 && e(".slider-area").closest(".container").parent().addClass("arrow-wrap")
	})), e("[data-slider-prev], [data-slider-next]").on("click", (function() {
		var t = e(this).data("slider-prev") || e(this).data("slider-next"),
			a = e(t);
		if (a.length) {
			var s = a[0].swiper;
			s && (e(this).data("slider-prev") ? s.slidePrev() : s.slideNext())
		}
	})), e("[data-bs-toggle='tab']").on("shown.bs.tab", (function(t) {
		e(e(t.target).attr("href")).find(".swiper-container").each((function() {
			var e = this.swiper;
			e && e.update()
		}))
	})), e("[data-ani]").each((function() {
		var t = e(this).data("ani");
		e(this).addClass(t)
	})), e("[data-ani-delay]").each((function() {
		var t = e(this).data("ani-delay");
		e(this).css("animation-delay", t)
	})), e.fn.activateSliderThumbs = function(t) {
		var a = e.extend({
			sliderTab: !1,
			tabButton: ".tab-btn"
		}, t);
		return this.each((function() {
			var t = e(this),
				s = t.find(a.tabButton),
				n = e('<span class="indicator"></span>').appendTo(t),
				i = t.data("slider-tab"),
				o = e(i)[0].swiper;
			if (s.on("click", (function(t) {
					t.preventDefault();
					var s = e(this);
					if (s.addClass("active").siblings().removeClass("active"), l(s), a.sliderTab) {
						var n = s.index();
						o.slideTo(n)
					}
				})), a.sliderTab) {
				o.on("slideChange", (function() {
					var e = o.realIndex,
						t = s.eq(e);
					t.addClass("active").siblings().removeClass("active"), l(t)
				}));
				var r = o.activeIndex,
					c = s.eq(r);
				c.addClass("active").siblings().removeClass("active"), l(c)
			}

			function l(e) {
				var t = e.position(),
					a = parseInt(e.css("margin-top")) || 0,
					s = parseInt(e.css("margin-left")) || 0;
				n.css("--height-set", e.outerHeight() + "px"), n.css("--width-set", e.outerWidth() + "px"), n.css("--pos-y", t.top + a + "px"), n.css("--pos-x", t.left + s + "px")
			}
		}))
	}, e(".testi-grid-dots").length && e(".testi-grid-dots").activateSliderThumbs({
		sliderTab: !0,
		tabButton: ".tab-btn"
	});
	var o, r, c, l = ".ajax-contact",
		d = '[name="email"]',
		u = e(".form-messages");

	function p() {
		var t = e(l).serialize();
		(function() {
			var t, a = !0;

			function s(s) {
				s = s.split(",");
				for (var n = 0; n < s.length; n++) t = l + " " + s[n], e(t).val() ? (e(t).removeClass("is-invalid"), a = !0) : (e(t).addClass("is-invalid"), a = !1)
			}
			s('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(d).val() && e(d).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(d).removeClass("is-invalid"), a = !0) : (e(d).addClass("is-invalid"), a = !1);
			return a
		})() && jQuery.ajax({
			url: e(l).attr("action"),
			data: t,
			type: "POST"
		}).done((function(t) {
			u.removeClass("error"), u.addClass("success"), u.text(t), e(l + ' input:not([type="submit"]),' + l + " textarea").val("")
		})).fail((function(e) {
			u.removeClass("success"), u.addClass("error"), "" !== e.responseText ? u.html(e.responseText) : u.html("Oops! An error occured and your message could not be sent.")
		}))
	}

	function h(t, a, s, n) {
		e(a).on("click", (function(a) {
			a.preventDefault(), e(t).addClass(n)
		})), e(t).on("click", (function(a) {
			a.stopPropagation(), e(t).removeClass(n)
		})), e(t + " > div").on("click", (function(a) {
			a.stopPropagation(), e(t).addClass(n)
		})), e(s).on("click", (function(a) {
			a.preventDefault(), a.stopPropagation(), e(t).removeClass(n)
		}))
	}

	function f(e) {
		return parseInt(e, 10)
	}
	e(l).on("submit", (function(e) {
		e.preventDefault(), p()
	})), o = ".popup-search-box", r = ".searchClose", c = "show", e(".searchBoxToggler").on("click", (function(t) {
		t.preventDefault(), e(o).addClass(c)
	})), e(o).on("click", (function(t) {
		t.stopPropagation(), e(o).removeClass(c)
	})), e(o).find("form").on("click", (function(t) {
		t.stopPropagation(), e(o).addClass(c)
	})), e(r).on("click", (function(t) {
		t.preventDefault(), t.stopPropagation(), e(o).removeClass(c)
	})), h(".sidemenu-cart", ".sideMenuToggler", ".sideMenuCls", "show"), h(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
		type: "image",
		mainClass: "mfp-zoom-in",
		removalDelay: 260,
		gallery: {
			enabled: !0
		}
	}), e(document).ready((function() {
		e(".popular-popup-image").magnificPopup({
			type: "image",
			gallery: {
				enabled: !0
			}
		}), e(".popular-popup-gallery").click((function(t) {
			t.preventDefault(), e(".popular-popup-image:first").click()
		}))
	})), e(".popup-video").magnificPopup({
		type: "iframe"
	}), e(".popup-content").magnificPopup({
		type: "inline",
		midClick: !0
	}), e.fn.sectionPosition = function(t, a) {
		e(this).each((function() {
			var s, n, i, o, r, c = e(this);
			s = Math.floor(c.height() / 2), n = c.attr(t), i = c.attr(a), o = f(e(i).css("padding-top")), r = f(e(i).css("padding-bottom")), "top-half" === n ? (e(i).css("padding-bottom", r + s + "px"), c.css("margin-top", "-" + s + "px")) : "bottom-half" === n && (e(i).css("padding-top", o + s + "px"), c.css("margin-bottom", "-" + s + "px"))
		}))
	};

	function v(t, a, s, n) {
		var i = t.text().split(a),
			o = "";
		i.length && (e(i).each((function(e, t) {
			o += '<span class="' + s + (e + 1) + '">' + t + "</span>" + n
		})), t.empty().append(o))
	}
	e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function() {
		e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
	})), e(".filter-active").imagesLoaded((function() {
		if (e(".filter-active").length > 0) {
			var t = e(".filter-active").isotope({
				itemSelector: ".filter-item",
				filter: "*",
				masonry: {}
			});
			e(".filter-menu-active").on("click", "button", (function() {
				var a = e(this).attr("data-filter");
				t.isotope({
					filter: a
				})
			})), e(".filter-menu-active").on("click", "button", (function(t) {
				t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
			}))
		}
	})), e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded((function() {
		var t = ".masonary-active, .woocommerce-Reviews .comment-list";
		e(t).length > 0 && e(t).isotope({
			itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
			filter: "*",
			masonry: {
				columnWidth: 1
			}
		}), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function(a) {
			e(t).isotope({
				filter: "*"
			})
		}))
	})), e.fn.indicator = function() {
		e(this).each((function() {
			var t = e(this),
				a = t.find("a"),
				s = t.find("button");
			t.append('<span class="indicator"></span>');
			var n, i = t.find(".indicator");

			function o() {
				var a = t.find(".active"),
					s = a.css("height"),
					n = a.css("width"),
					o = a.position().top + "px",
					r = a.position().left + "px";
				e(window).on("resize", (function() {
					o = a.position().top + "px", r = a.position().left + "px"
				})), i.get(0).style.setProperty("--height-set", s), i.get(0).style.setProperty("--width-set", n), i.get(0).style.setProperty("--pos-y", o), i.get(0).style.setProperty("--pos-x", r)
			}
			a.length ? n = a : s.length && (n = s), n.on("click", (function(t) {
				t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active"), o()
			})), o(), e(window).on("resize", (function() {
				o()
			}))
		}))
	}, e(".indicator-active").length && e(".indicator-active").indicator();
	var m = {
		init: function() {
			return this.each((function() {
				v(e(this), "", "char", "")
			}))
		},
		words: function() {
			return this.each((function() {
				v(e(this), " ", "word", " ")
			}))
		},
		lines: function() {
			return this.each((function() {
				var t = "eefec303079ad17405c889e092e105b0";
				v(e(this).children("br").replaceWith(t).end(), t, "line", "")
			}))
		}
	};
	e.fn.lettering = function(t) {
		return t && m[t] ? m[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this) : m.init.apply(this, [].slice.call(arguments, 0))
	}, e(".logo-animation").lettering(), e(".counter-number").counterUp({
		delay: 10,
		time: 1e3
	}), e.fn.shapeMockup = function() {
		e(this).each((function() {
			var t = e(this),
				a = t.data("top"),
				s = t.data("right"),
				n = t.data("bottom"),
				i = t.data("left");
			t.css({
				top: a,
				right: s,
				bottom: n,
				left: i
			}).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
		}))
	}, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e(".progress-bar").waypoint((function() {
		e(".progress-bar").css({
			animation: "animate-positive 1.8s",
			opacity: "1"
		})
	}), {
		offset: "100%"
	}), e.fn.countdown = function() {
		e(this).each((function() {
			var t = e(this),
				a = new Date(t.data("offer-date")).getTime();

			function s(e) {
				return t.find(e)
			}
			var n = setInterval((function() {
				var e = (new Date).getTime(),
					i = a - e,
					o = Math.floor(i / 864e5),
					r = Math.floor(i % 864e5 / 36e5),
					c = Math.floor(i % 36e5 / 6e4),
					l = Math.floor(i % 6e4 / 1e3);
				o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), c < 10 && (c = "0" + c), l < 10 && (l = "0" + l), i < 0 ? (clearInterval(n), t.addClass("expired"), t.find(".message").css("display", "block")) : (s(".day").html(o), s(".hour").html(r), s(".minute").html(c), s(".seconds").html(l))
			}), 1e3)
		}))
	}, e(".counter-list").length && e(".counter-list").countdown();
	const g = {};

	function y() {
		const t = e(this),
			a = t.attr("src");
		if (!g[a]) {
			const t = e.Deferred();
			e.get(a, a => {
				t.resolve(e(a).find("svg"))
			}), g[a] = t.promise()
		}
		g[a].then(a => {
			const s = e(a).clone();
			t.attr("id") && s.attr("id", t.attr("id")), t.attr("class") && s.attr("class", t.attr("class")), t.attr("style") && s.attr("style", t.attr("style")), t.attr("width") && (s.attr("width", t.attr("width")), t.attr("height") || s.removeAttr("height")), t.attr("height") && (s.attr("height", t.attr("height")), t.attr("width") || s.removeAttr("width")), s.insertAfter(t), t.trigger("svgInlined", s[0]), t.remove()
		})
	}
	e.fn.inlineSvg = function() {
		return this.each(y), this
	}, e(".svg-img").inlineSvg(), e(".color-switch-btns button").each((function() {
		const t = e(this),
			a = t.data("color");
		t.css("--theme-color", a), t.on("click", (function() {
			const t = e(this).data("color");
			e(":root").css("--theme-color", t)
		}))
	})), e("#thcolorpicker").on("input", (function() {
		const t = e(this).val();
		var a;
		a = t, e(":root").css("--theme-color", a)
	})), e(document).on("click", ".switchIcon", (function() {
		e(".color-scheme").toggleClass("active")
	})), e(".tilt-active").tilt({
		maxTilt: 7,
		perspective: 1e3
	}), e(".service-3-item").on("mouseenter", (function() {
		e(".service-3-item").removeClass("active"), e(this).addClass("active")
	})), e(".accordion-bottom__item").on("click", (function() {
		e(".accordion-bottom__item").removeClass("active"), e(this).addClass("active")
	})), document.addEventListener("DOMContentLoaded", (function() {
		document.querySelectorAll(".circular-progress").forEach(e => {
			const t = e.querySelector(".circle"),
				a = e.querySelector(".percentage"),
				s = parseInt(e.getAttribute("data-target"), 10);
			let n = 0;
			const i = () => {
				if (n <= s) {
					const e = 100 - 100 * n / 100;
					t.style.strokeDashoffset = e, a.textContent = n + "%", n++, requestAnimationFrame(i)
				}
			};
			i()
		})
	})), e("#scroll-about-sec").on("click", (function() {
		e("html, body").animate({
			scrollTop: e("#about-sec").offset().top
		}, 800)
	})), e(".service-list-wrap").on("click", (function() {
		e(this).addClass("active").siblings().removeClass("active")
	})), e(".service-prev").on("click", (function() {
		var t;
		(t = e(".service-list-area .service-list-wrap.active")).prev().length > 0 ? (t.removeClass("active"), t.prev().addClass("active")) : (t.removeClass("active"), e(".service-list-area .service-list-wrap:last").addClass("active"))
	})), e(".service-next").on("click", (function() {
		var t;
		(t = e(".service-list-area .service-list-wrap.active")).next().length > 0 ? (t.removeClass("active"), t.next().addClass("active")) : (t.removeClass("active"), e(".service-list-area .service-list-wrap:first").addClass("active"))
	})), e(".price_slider").slider({
		range: !0,
		min: 125e3,
		max: 825e3,
		values: [125e3, 825e3],
		slide: function(t, a) {
			e(".from").text("$" + a.values[0]), e(".to").text("$" + a.values[1])
		}
	}), e(".from").text("$" + e(".price_slider").slider("values", 0)), e(".to").text("$" + e(".price_slider").slider("values", 1)), e(".single-inventory-item").on("mouseenter", (function() {
		e(".single-inventory-item").removeClass("active"), e(this).addClass("active")
	})), e("#ship-to-different-address-checkbox").on("change", (function() {
		e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
	})), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
		t.preventDefault(), e(".woocommerce-form-login").slideToggle()
	})), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
		t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
	})), e(".shipping-calculator-button").on("click", (function(t) {
		t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
	})), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
		e(this).on("change", (function() {
			e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
		}))
	})), e(".rating-select .stars a").each((function() {
		e(this).on("click", (function(t) {
			t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
		}))
	})), e(".quantity-plus").each((function() {
		e(this).on("click", (function(t) {
			t.preventDefault();
			var a = e(this).siblings(".qty-input"),
				s = parseInt(a.val(), 10);
			isNaN(s) || a.val(s + 1)
		}))
	})), e(".quantity-minus").each((function() {
		e(this).on("click", (function(t) {
			t.preventDefault();
			var a = e(this).siblings(".qty-input"),
				s = parseInt(a.val(), 10);
			!isNaN(s) && s > 1 && a.val(s - 1)
		}))
	})), e(".advance-search-active").click((function(t) {
		t.stopPropagation(), e(this).toggleClass("active");
		let a = e(".advance-search-wrapper"),
			s = e(this).find("i");
		a.hasClass("open") ? (a.removeClass("open").hide(), s.removeClass("fa-times").addClass("fa-sliders-up")) : (a.addClass("open").show(), s.removeClass("fa-sliders-up").addClass("fa-times"))
	})), e(document).click((function(t) {
		e(t.target).closest(".advance-search-wrapper, .advance-search-active, .select-group-wrapper").length || (e(".advance-search-wrapper").removeClass("open").hide(), e(".advance-search-active").removeClass("active"), e(".advance-search-active i").removeClass("fa-times").addClass("fa-sliders-up"))
	})), document.addEventListener("DOMContentLoaded", (function() {
		const e = document.querySelectorAll(".map-icon"),
			t = document.querySelectorAll(".map-popular-list");
		let a = null;
		e.forEach((e, s) => {
			e.addEventListener("mouseenter", (function() {
				t.forEach(e => e.classList.remove("show"));
				document.querySelector(".map-popular-list" + (s + 1)).classList.add("show"), a = s + 1
			}))
		}), t.forEach(e => {
			e.addEventListener("mouseenter", (function() {
				this.classList.add("show")
			})), e.addEventListener("mouseleave", (function() {
				this.classList.remove("show")
			}))
		}), document.addEventListener("click", (function(e) {
			e.target.closest(".map-icon") || e.target.closest(".map-popular-list") || t.forEach(e => e.classList.remove("show"))
		}))
	})), e(document).ready((function() {
	e(".add-explore-city-icon").on("mouseenter", (function() {
		e(this).next(".explore-card").addClass("active")
	})), e(".add-explore-city-icon, .explore-card").on("mouseleave", (function(t) {
		e(t.relatedTarget).closest(".add-explore-city-icon, .explore-card").length || e(".explore-card").removeClass("active")
	}))
}))

}(jQuery);