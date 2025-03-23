/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
  'use strict';

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      rtsJs.metismenu();
      rtsJs.afterBefore();
      rtsJs.swiperActive();
      rtsJs.wowActive();
      rtsJs.stickyHeader();
      rtsJs.backToTopInit();
      rtsJs.sideMenu();
      rtsJs.niceSelect();
      rtsJs.vedioActivation();
      rtsJs.menuCurrentLink();
      rtsJs.preloader();
      rtsJs.datePicker();
    },


    metismenu: function () {
      $('#mobile-menu-active').metisMenu();
    },

    afterBefore: function () {
      $(document).ready(function () {

        if ($(".comparison-slider")[0]) {
          let compSlider = $(".comparison-slider");

          compSlider.each(function () {
            let compSliderWidth = $(this).width() + "px";
            $(this).find(".resize img").css({ width: compSliderWidth });
            drags($(this).find(".divider"), $(this).find(".resize"), $(this));
          });

          $(window).on("resize", function () {
            let compSliderWidth = compSlider.width() + "px";
            compSlider.find(".resize img").css({ width: compSliderWidth });
          });
        }
      });
      function drags(dragElement, resizeElement, container) {

        let touched = false;
        window.addEventListener('touchstart', function () {
          touched = true;
        });
        window.addEventListener('touchend', function () {
          touched = false;
        });

        dragElement.on("mousedown touchstart", function (e) {

          dragElement.addClass("draggable");
          resizeElement.addClass("resizable");
          //create vars
          let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
          let dragWidth = dragElement.outerWidth();
          let posX = dragElement.offset().left + dragWidth - startX;
          let containerOffset = container.offset().left;
          let containerWidth = container.outerWidth();
          let minLeft = containerOffset + 10;
          let maxLeft = containerOffset + containerWidth - dragWidth - 10;

          dragElement.parents().on("mousemove touchmove", function (e) {

            if (touched === false) {
              e.preventDefault();
            }

            let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
            let leftValue = moveX + posX - dragWidth;

            if (leftValue < minLeft) {
              leftValue = minLeft;
            } else if (leftValue > maxLeft) {
              leftValue = maxLeft;
            }

            let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";

            $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
              $(this).removeClass("draggable");
              resizeElement.removeClass("resizable");
            });

            $(".resizable").css("width", widthValue);

          }).on("mouseup touchend touchcancel", function () {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");

          });

        }).on("mouseup touchend touchcancel", function (e) {
          dragElement.removeClass("draggable");
          resizeElement.removeClass("resizable");

        });

      }


    },

    swiperActive: function () {
      $(document).ready(function () {
        var swiper = new Swiper(".swiper-container-h1", {
          spaceBetween: 30,
          slidesPerView: 3,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 3000,
          //   disableOnInteraction: false,
          // },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".team-swiper-container-h1", {
          spaceBetween: 30,
          slidesPerView: 4,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 3000,
          //   disableOnInteraction: false,
          // },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".swiper-container-h1-team", {
          spaceBetween: 30,
          slidesPerView: 4,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".swiper-container-h1-team-8", {
          spaceBetween: 150,
          slidesPerView: 4,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });

      $(document).ready(function () {

        var swiper = new Swiper(".swiper-container-h3", {
          spaceBetween: 30,
          slidesPerView: 4,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".swiper-container-h1.v3", {
          spaceBetween: 30,
          slidesPerView: 4,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
        $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
          // Update Swiper when the tab with swiper is shown
          swiper.update();
        });
      });


      $(document).ready(function () {
        var swiper = new Swiper(".swiper-container-h2", {
          spaceBetween: 30,
          slidesPerView: 4,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-banner-2", {
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          speed: 2000,
          effect: "fade",
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-banner-eight", {
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          speed: 1000,
          effect: "fade",
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-brand", {
          spaceBetween: 65,
          slidesPerView: 5,
          loop: true,
          speed: 2000,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-service-dental", {
          spaceBetween: 30,
          slidesPerView: 4,
          loop: true,
          speed: 2000,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 2,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-banner-seven", {
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          speed: 2000,
          effect: 'fade',
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-portfolio", {
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          speed: 1000,
          effect: 'fade',
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-testimonials-2", {
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          speed: 500,
          // autoplay: {
          //   delay: 2000,
          // },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
        });
      });
    },

    wowActive: function () {
      new WOW().init();
    },

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $('.header--sticky').addClass('sticky')
        } else {
          $('.header--sticky').removeClass('sticky')
        }
      })
    },

    backToTopInit: function () {
      $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
          } else {
            jQuery('.progress-wrap').removeClass('active-progress');
          }
        });
        jQuery('.progress-wrap').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        })


      });
    },

    sideMenu: function () {

      // collups menu side right
      $(document).on('click', '#menu-btn', function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '.onepage .mainmenu li a', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },


    niceSelect: function () {

      (function ($) {

        $.fn.niceSelect = function (method) {

          // Methods
          if (typeof method == 'string') {
            if (method == 'update') {
              this.each(function () {
                var $select = $(this);
                var $dropdown = $(this).next('.nice-select');
                var open = $dropdown.hasClass('open');

                if ($dropdown.length) {
                  $dropdown.remove();
                  create_nice_select($select);

                  if (open) {
                    $select.next().trigger('click');
                  }
                }
              });
            } else if (method == 'destroy') {
              this.each(function () {
                var $select = $(this);
                var $dropdown = $(this).next('.nice-select');

                if ($dropdown.length) {
                  $dropdown.remove();
                  $select.css('display', '');
                }
              });
              if ($('.nice-select').length == 0) {
                $(document).off('.nice_select');
              }
            } else {
              console.log('Method "' + method + '" does not exist.')
            }
            return this;
          }

          // Hide native select
          this.hide();

          // Create custom markup
          this.each(function () {
            var $select = $(this);

            if (!$select.next().hasClass('nice-select')) {
              create_nice_select($select);
            }
          });

          function create_nice_select($select) {
            $select.after($('<div></div>')
              .addClass('nice-select')
              .addClass($select.attr('class') || '')
              .addClass($select.attr('disabled') ? 'disabled' : '')
              .attr('tabindex', $select.attr('disabled') ? null : '0')
              .html('<span class="current"></span><ul class="list"></ul>')
            );

            var $dropdown = $select.next();
            var $options = $select.find('option');
            var $selected = $select.find('option:selected');

            $dropdown.find('.current').html($selected.data('display') || $selected.text());

            $options.each(function (i) {
              var $option = $(this);
              var display = $option.data('display');

              $dropdown.find('ul').append($('<li></li>')
                .attr('data-value', $option.val())
                .attr('data-display', (display || null))
                .addClass('option' +
                  ($option.is(':selected') ? ' selected' : '') +
                  ($option.is(':disabled') ? ' disabled' : ''))
                .html($option.text())
              );
            });
          }

          /* Event listeners */

          // Unbind existing events in case that the plugin has been initialized before
          $(document).off('.nice_select');

          // Open/close
          $(document).on('click.nice_select', '.nice-select', function (event) {
            var $dropdown = $(this);

            $('.nice-select').not($dropdown).removeClass('open');
            $dropdown.toggleClass('open');

            if ($dropdown.hasClass('open')) {
              $dropdown.find('.option');
              $dropdown.find('.focus').removeClass('focus');
              $dropdown.find('.selected').addClass('focus');
            } else {
              $dropdown.focus();
            }
          });

          // Close when clicking outside
          $(document).on('click.nice_select', function (event) {
            if ($(event.target).closest('.nice-select').length === 0) {
              $('.nice-select').removeClass('open').find('.option');
            }
          });

          // Option click
          $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
            var $option = $(this);
            var $dropdown = $option.closest('.nice-select');

            $dropdown.find('.selected').removeClass('selected');
            $option.addClass('selected');

            var text = $option.data('display') || $option.text();
            $dropdown.find('.current').text(text);

            $dropdown.prev('select').val($option.data('value')).trigger('change');
          });

          // Keyboard events
          $(document).on('keydown.nice_select', '.nice-select', function (event) {
            var $dropdown = $(this);
            var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

            // Space or Enter
            if (event.keyCode == 32 || event.keyCode == 13) {
              if ($dropdown.hasClass('open')) {
                $focused_option.trigger('click');
              } else {
                $dropdown.trigger('click');
              }
              return false;
              // Down
            } else if (event.keyCode == 40) {
              if (!$dropdown.hasClass('open')) {
                $dropdown.trigger('click');
              } else {
                var $next = $focused_option.nextAll('.option:not(.disabled)').first();
                if ($next.length > 0) {
                  $dropdown.find('.focus').removeClass('focus');
                  $next.addClass('focus');
                }
              }
              return false;
              // Up
            } else if (event.keyCode == 38) {
              if (!$dropdown.hasClass('open')) {
                $dropdown.trigger('click');
              } else {
                var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
                if ($prev.length > 0) {
                  $dropdown.find('.focus').removeClass('focus');
                  $prev.addClass('focus');
                }
              }
              return false;
              // Esc
            } else if (event.keyCode == 27) {
              if ($dropdown.hasClass('open')) {
                $dropdown.trigger('click');
              }
              // Tab
            } else if (event.keyCode == 9) {
              if ($dropdown.hasClass('open')) {
                return false;
              }
            }
          });

          // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
          var style = document.createElement('a').style;
          style.cssText = 'pointer-events:auto';
          if (style.pointerEvents !== 'auto') {
            $('html').addClass('no-csspointerevents');
          }

          return this;

        };

      }(jQuery));

      /* Initialize */

      $(document).ready(function () {
        $('select').niceSelect();
      });

    },

    vedioActivation: function () {
      $(document).ready(function () {
        $('.popup-youtube, .popup-video').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      });
    },

    menuCurrentLink: function () {
      var currentPage = location.pathname.split("/"),
        current = currentPage[currentPage.length - 1];
      $('.parent-nav li > a').each(function () {
        var $this = $(this);
        if ($this.attr('href') === current) {
          $this.addClass('active');
          $this.parents('.has-dropdown').addClass('menu-item-open')
        }
      });
    },


    preloader: function () {
      window.addEventListener('load', function () {
        document.querySelector('body').classList.add("loaded")
      });
    },

    datePicker: function () {
      $(function () {
        $("#datepicker").datepicker({
          dateFormat: "dd-mm-yy"
          , duration: "fast"
        });
      });
    },


  }

  rtsJs.m();
})(jQuery, window)


/**
 * Script para controlar a timeline interativa da página "Como Funciona"
 * Este script gerencia a navegação entre etapas, animações e interatividade
 * com navegação por scroll integrada
 */
document.addEventListener('DOMContentLoaded', function () {
  // Elementos da timeline
  const timelineWrapper = document.querySelector('.timeline-wrapper');
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const stepDots = document.querySelectorAll('.step-dot');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const progressIndicator = document.querySelector('.progress-indicator');

  // Estado atual
  let currentStep = 1;
  const totalSteps = timelineSteps.length;

  // Inicializar a timeline com a primeira etapa ativa
  updateTimeline(currentStep);

  // Configurar os listeners de eventos para navegação
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', function () {
      goToStep(currentStep - 1);
    });
    nextButton.addEventListener('click', function () {
      goToStep(currentStep + 1);
    });
  }

  // Configurar os listeners de eventos para os indicadores de etapa (dots)
  stepDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const stepNumber = parseInt(dot.getAttribute('data-step'));
      goToStep(stepNumber);
    });
  });

  // Adicionar interatividade aos números de etapa
  timelineSteps.forEach(step => {
    const stepNumber = step.querySelector('.step-number');
    if (stepNumber) {
      stepNumber.addEventListener('click', () => {
        const stepNum = parseInt(step.getAttribute('data-step'));
        goToStep(stepNum);
      });
    }
  });

  /**
   * Função para ir para uma etapa específica
   * @param {number} stepNumber - O número da etapa para a qual navegar
   */
  function goToStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= totalSteps) {
      currentStep = stepNumber;
      updateTimeline(currentStep);

      // Rolar para o step correspondente se a mudança for feita por clique
      const activeStep = document.querySelector(`.timeline-step[data-step="${currentStep}"]`);
      if (activeStep) {
        activeStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  /**
   * Atualiza a interface da timeline com base na etapa atual
   * @param {number} stepNumber - O número da etapa atual
   */
  function updateTimeline(stepNumber) {
    // Atualizar as classes ativas
    timelineSteps.forEach(step => {
      const stepNum = parseInt(step.getAttribute('data-step'));
      if (stepNum === stepNumber) {
        step.classList.add('active');
        // Adicionar uma pequena animação
        step.classList.add('animate-in');
        setTimeout(() => {
          step.classList.remove('animate-in');
        }, 600);
      } else {
        step.classList.remove('active');
      }
    });

    // Atualizar os dots indicadores
    // Modificado para mostrar progresso: todos os dots até o step atual ficam ativos
    stepDots.forEach(dot => {
      const dotNum = parseInt(dot.getAttribute('data-step'));
      if (dotNum <= stepNumber) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Atualizar a barra de progresso
    const progressPercentage = ((stepNumber - 1) / (totalSteps - 1)) * 100;
    progressIndicator.style.width = `${progressPercentage}%`;

    // Atualizar o estado dos botões de navegação
    if (prevButton && nextButton) {
      prevButton.disabled = stepNumber === 1;
      nextButton.disabled = stepNumber === totalSteps;
    }
  }

  // Adicionar detecção de scroll para navegação automática
  function setupScrollNavigation() {
    // Criar um Intersection Observer para cada step
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6  // O step deve estar 60% visível para ser considerado ativo
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepNumber = parseInt(entry.target.getAttribute('data-step'));
          if (stepNumber !== currentStep) {
            currentStep = stepNumber;
            updateTimeline(currentStep);
          }
        }
      });
    }, options);

    // Observar cada step
    timelineSteps.forEach(step => {
      observer.observe(step);
    });
  }

  // Iniciar a navegação por scroll
  setupScrollNavigation();

  // Adicionar funcionalidade para swipe em dispositivos móveis
  let touchStartX = 0;
  let touchEndX = 0;

  timelineWrapper.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  timelineWrapper.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe para a esquerda (próxima etapa)
      goToStep(currentStep + 1);
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe para a direita (etapa anterior)
      goToStep(currentStep - 1);
    }
  }

  // Adicionar uma navegação com o teclado (acessibilidade)
  document.addEventListener('keydown', function (event) {
    // Se a timeline está no campo de visão
    const rect = timelineWrapper.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    if (isVisible) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        goToStep(currentStep + 1);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        goToStep(currentStep - 1);
      }
    }
  });

  // Adicionar efeito de entrada ao entrar na viewport
  function handleInitialIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Se a timeline está visível, animar a primeira etapa automaticamente
        setTimeout(() => {
          const firstStep = document.querySelector('.timeline-step[data-step="1"]');
          if (firstStep) {
            firstStep.classList.add('active');
          }
        }, 300);
        // Desconectar o observer após a primeira visualização
        observer.disconnect();
      }
    });
  }

  // Configurar o Intersection Observer para animar a entrada inicial
  if (timelineWrapper) {
    const initialObserver = new IntersectionObserver(handleInitialIntersection, {
      threshold: 0.3
    });
    initialObserver.observe(timelineWrapper);
  }
});

/**
 * IntegraKids - Script completo para carrossel da página da clínica e galeria de fotos
 * Este arquivo contém todas as funcionalidades para:
 * 1. Carrossel estilo bento com navegação melhorada
 * 2. Galeria de fotos com lightbox
 */

document.addEventListener('DOMContentLoaded', function () {
  //=====================================================
  // SEÇÃO 1: CONFIGURAÇÃO DO CARROSSEL ESTILO BENTO
  //=====================================================

  // Inicialização do carrossel bento com Swiper
  const bentoSpacesCarousel = new Swiper('.bento-spaces-carousel', {
    effect: 'fade',                   // Efeito de transição suave entre slides
    fadeEffect: {
      crossFade: true                 // Habilita cross-fade para transições mais suaves
    },
    speed: 800,                       // Velocidade da transição em ms
    autoplay: {
      delay: 5000,                    // Tempo entre transições automáticas (5 segundos)
      disableOnInteraction: false,    // Continua autoplay mesmo após interação do usuário
    },
    loop: true,                       // Habilita loop infinito no carrossel
    navigation: {
      nextEl: '.bento-button-next',   // Seletor para botão próximo
      prevEl: '.bento-button-prev',   // Seletor para botão anterior
    },
    on: {
      init: function () {
        // Atualiza a miniatura ativa ao inicializar
        updateActiveThumbnail(this.realIndex);
        // Ajusta posição dos controles de navegação
        improveNavigationPosition();
      },
      slideChange: function () {
        // Atualiza a miniatura ativa quando o slide muda
        updateActiveThumbnail(this.realIndex);
        // Anima o conteúdo do slide ativo
        animateContent(this.activeIndex);
      }
    }
  });

  // Função para atualizar a miniatura ativa
  function updateActiveThumbnail(index) {
    const thumbnails = document.querySelectorAll('.bento-thumb');
    if (thumbnails.length === 0) return; // Evita erros se não houver miniaturas

    thumbnails.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  // Função para animar o conteúdo do slide ativo
  function animateContent(index) {
    const activeSlide = document.querySelector('.bento-spaces-carousel .swiper-slide-active');

    if (activeSlide) {
      const contentBox = activeSlide.querySelector('.bento-content-box');
      const imageBox = activeSlide.querySelector('.bento-image-box');

      if (contentBox && imageBox) {
        // Reset classes para novas animações
        contentBox.classList.remove('animated');
        imageBox.classList.remove('animated');

        // Trigger reflow para garantir que a animação seja reaplicada
        void contentBox.offsetWidth;
        void imageBox.offsetWidth;

        // Adicionar classes para animar
        contentBox.classList.add('animated');
        imageBox.classList.add('animated');
      }
    }
  }

  // Função para melhorar o posicionamento dos controles de navegação
  function improveNavigationPosition() {
    const carouselContainer = document.querySelector('.bento-carousel-container');
    const prevButton = document.querySelector('.bento-button-prev');
    const nextButton = document.querySelector('.bento-button-next');

    if (carouselContainer && prevButton && nextButton) {
      // Ajustar posicionamento baseado na largura da tela
      if (window.innerWidth > 1200) {
        // Em telas grandes, posiciona os botões mais afastados do conteúdo
        prevButton.style.left = '-30px';
        nextButton.style.right = '-30px';
      } else {
        // Em telas menores, mantém os botões mais próximos do conteúdo
        prevButton.style.left = '15px';
        nextButton.style.right = '15px';
      }
    }
  }

  // Configurar eventos de clique para miniaturas (se houver)
  const setupThumbnailEvents = () => {
    const thumbnails = document.querySelectorAll('.bento-thumb');

    thumbnails.forEach((thumb, index) => {
      // Evento de clique
      thumb.addEventListener('click', function () {
        bentoSpacesCarousel.slideToLoop(index);
      });

      // Adicionar acessibilidade
      thumb.setAttribute('role', 'button');
      const thumbLabel = thumb.querySelector('span');
      thumb.setAttribute('aria-label', thumbLabel ? `Ver ${thumbLabel.textContent}` : `Ver slide ${index + 1}`);
      thumb.setAttribute('tabindex', '0');

      // Navegação por teclado (para acessibilidade)
      thumb.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          bentoSpacesCarousel.slideToLoop(index);
          e.preventDefault();
        }
      });
    });
  };

  // Configura as miniaturas se existirem
  setupThumbnailEvents();

  // Adicionar interatividade aos botões de navegação
  const setupNavigationButtons = () => {
    const prevButton = document.querySelector('.bento-button-prev');
    const nextButton = document.querySelector('.bento-button-next');

    if (prevButton && nextButton) {
      [prevButton, nextButton].forEach(button => {
        // Efeito de hover
        button.addEventListener('mouseenter', function () {
          this.classList.add('hover-effect');
        });

        button.addEventListener('mouseleave', function () {
          this.classList.remove('hover-effect');
        });

        // Efeito de clique
        button.addEventListener('click', function () {
          this.classList.add('click-effect');
          setTimeout(() => {
            this.classList.remove('click-effect');
          }, 300);
        });
      });

      // Melhora acessibilidade dos botões
      prevButton.setAttribute('aria-label', 'Slide anterior');
      nextButton.setAttribute('aria-label', 'Próximo slide');
      prevButton.setAttribute('tabindex', '0');
      nextButton.setAttribute('tabindex', '0');
    }
  };

  // Configura os botões de navegação
  setupNavigationButtons();

  // Detecção de entrada na viewport para animação
  const setupIntersectionObserver = () => {
    const observerOptions = {
      root: null,        // Viewport como área de referência
      rootMargin: '0px', // Sem margens adicionais
      threshold: 0.3     // Dispara quando 30% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target); // Para de observar após animar
        }
      });
    }, observerOptions);

    // Observa a seção do carrossel para animação
    const carouselSection = document.querySelector('.clinica-spaces-carousel');
    if (carouselSection) {
      observer.observe(carouselSection);
    }

    // Observa também a seção da galeria para animação
    const gallerySection = document.querySelector('.clinica-gallery-section');
    if (gallerySection) {
      observer.observe(gallerySection);
    }
  };

  // Configura os observadores de interseção
  setupIntersectionObserver();

  // Monitorar redimensionamento da janela para ajustar posição dos controles
  window.addEventListener('resize', improveNavigationPosition);

  // Iniciar com animação no primeiro slide após pequeno delay
  setTimeout(() => {
    animateContent(0);
  }, 500);
});

/**
 * IntegraKids - Script completo para a galeria de fotos
 * Este script implementa:
 * 1. Funcionalidade de lightbox para visualização das imagens
 * 2. Filtragem por categorias
 * 3. Funcionalidade "Ver mais fotos"
 * 4. Animações e efeitos visuais
 */

document.addEventListener('DOMContentLoaded', function () {
  // Inicializar a galeria com lightbox
  initGalleryLightbox();

  // Configurar os filtros de categoria
  setupCategoryFilters();

  // Configurar o botão "Ver mais fotos"
  setupLoadMoreButton();

  // Adicionar animações quando os elementos entram na viewport
  setupIntersectionObserver();
});

/**
 * Inicializa o lightbox para a galeria de fotos
 * Usa Magnific Popup para criar uma experiência de visualização imersiva
 */
function initGalleryLightbox() {
  // Verificar se jQuery e Magnific Popup estão disponíveis
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.magnificPopup !== 'undefined') {
    // Inicializar Magnific Popup na galeria
    jQuery('.gallery-grid').magnificPopup({
      delegate: '.gallery-item:not(.hidden) a', // Seleciona links dentro dos itens visíveis da galeria
      type: 'image',
      tLoading: 'Carregando imagem #%curr%...',
      mainClass: 'mfp-img-mobile mfp-with-zoom',

      gallery: {
        enabled: true,                 // Habilita modo galeria
        navigateByImgClick: false,     // Não navega ao clicar na imagem (apenas nas setas)
        preload: [1, 3],               // Pré-carrega imagens anteriores e posteriores
        tPrev: 'Anterior',             // Texto para navegação anterior (acessibilidade)
        tNext: 'Próxima',              // Texto para navegação seguinte (acessibilidade)
        tCounter: '%curr% de %total%'  // Formato do contador em português
      },

      image: {
        tError: 'Não foi possível carregar a imagem.',
        titleSrc: function (item) {
          // Busca o texto da legenda dentro do elemento da galeria
          return item.el.closest('.gallery-item').find('.gallery-caption').text();
        },
        verticalFit: true              // Ajusta a imagem verticalmente
      },

      // Configurações de zoom
      zoom: {
        enabled: true,                 // Habilita efeito de zoom
        duration: 300,                 // Duração da animação em ms
        easing: 'ease-in-out',         // Tipo de easing
        opener: function (element) {
          // Define o elemento que será ampliado
          return element.find('img');
        }
      },

      // Callbacks para personalizar comportamento
      callbacks: {
        open: function () {
          // Quando o lightbox abre
          document.body.classList.add('lightbox-open');

          // Garantir que o overlay esteja com a opacidade correta
          setTimeout(function () {
            const overlay = document.querySelector('.mfp-bg');
            if (overlay) {
              overlay.style.opacity = '0.9';
            }

            // Garantir que as setas sejam visíveis
            const arrows = document.querySelectorAll('.mfp-arrow');
            arrows.forEach(arrow => {
              arrow.style.opacity = '1';
            });
          }, 100);
        },

        close: function () {
          // Quando o lightbox fecha
          document.body.classList.remove('lightbox-open');
        },

        change: function () {
          // Quando a imagem muda
          // Aqui podemos adicionar lógica adicional se necessário
        }
      },

      // Configurações para dispositivos móveis
      closeOnContentClick: false,        // Não fecha ao clicar na imagem
      closeBtnInside: true,              // Botão de fechar dentro do conteúdo
      fixedContentPos: true,             // Impede que o conteúdo seja rolado com a página

      // Configurações de acessibilidade
      removalDelay: 300,                 // Atraso para remoção (permite animações)
      showCloseBtn: true,                // Mostra botão de fechar

      // Tratamento para erros de carregamento
      disableOn: function () {
        // Desativa em dispositivos muito pequenos (opcional)
        return window.innerWidth > 320;
      }
    });

    console.log('Galeria inicializada com Magnific Popup');
  } else {
    // Fallback se Magnific Popup não estiver disponível
    console.warn('Magnific Popup não encontrado. Implementando fallback.');
    implementGalleryFallback();
  }
}

/**
 * Implementa um fallback simples para a galeria caso Magnific Popup não esteja disponível
 * Cria um lightbox básico usando apenas JavaScript vanilla
 */
function implementGalleryFallback() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const imgSrc = this.getAttribute('href');
        const caption = item.querySelector('.gallery-caption')?.textContent || '';

        // Criar elementos para o lightbox
        const overlay = document.createElement('div');
        overlay.className = 'simple-lightbox-overlay';
        overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                `;

        // Container para a imagem e controles
        const container = document.createElement('div');
        container.style.cssText = `
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                `;

        // Imagem
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = caption;
        img.style.cssText = `
                    max-width: 100%;
                    max-height: 80vh;
                    display: block;
                    border: none;
                    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.8);
                `;

        // Legenda
        const captionDiv = document.createElement('div');
        captionDiv.textContent = caption;
        captionDiv.style.cssText = `
                    color: white;
                    padding: 10px 0;
                    text-align: center;
                    font-size: 16px;
                    max-width: 100%;
                `;

        // Botão fechar
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
                    position: absolute;
                    top: -40px;
                    right: 0;
                    color: white;
                    background: none;
                    border: none;
                    font-size: 30px;
                    cursor: pointer;
                    padding: 0;
                    margin: 0;
                    line-height: 1;
                `;

        // Adicionar elementos ao DOM
        container.appendChild(img);
        container.appendChild(captionDiv);
        container.appendChild(closeBtn);
        overlay.appendChild(container);
        document.body.appendChild(overlay);

        // Animar entrada
        setTimeout(() => {
          overlay.style.opacity = '1';
        }, 10);

        // Fechar ao clicar no overlay ou no botão fechar
        overlay.addEventListener('click', function (e) {
          if (e.target === overlay) {
            closeGalleryFallback(overlay);
          }
        });

        closeBtn.addEventListener('click', function () {
          closeGalleryFallback(overlay);
        });

        // Fechar ao pressionar ESC
        document.addEventListener('keydown', function escKeyHandler(e) {
          if (e.key === 'Escape') {
            closeGalleryFallback(overlay);
            document.removeEventListener('keydown', escKeyHandler);
          }
        });
      });
    }
  });
}

/**
 * Fecha o lightbox do fallback com animação
 * @param {HTMLElement} overlay - O elemento overlay a ser fechado
 */
function closeGalleryFallback(overlay) {
  overlay.style.opacity = '0';
  setTimeout(() => {
    document.body.removeChild(overlay);
  }, 300);
}

/**
 * Configura os filtros de categoria para a galeria
 */
function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll('.category-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remover classe active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Adicionar classe active ao botão clicado
        this.classList.add('active');

        // Obter a categoria selecionada
        const selectedCategory = this.getAttribute('data-filter');

        // Filtrar os itens da galeria
        galleryItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');

          // Remover classe hidden de itens ocultos pelo "Ver mais"
          item.classList.remove('temp-hidden');

          if (selectedCategory === 'all' || selectedCategory === itemCategory) {
            // Mostrar o item (mas manter ocultos aqueles marcados pelo "Ver mais")
            if (!item.classList.contains('hidden')) {
              item.style.display = '';

              // Adicionar uma pequena animação
              item.classList.remove('animate-in');
              void item.offsetWidth; // Forçar reflow
              item.classList.add('animate-in');
            } else {
              // Adicionar classe temporária para identificar itens que deveriam estar visíveis
              // mas estão ocultos pelo botão "Ver mais"
              item.classList.add('temp-hidden');
            }
          } else {
            // Ocultar o item
            item.style.display = 'none';
          }
        });

        // Atualizar o lightbox após filtrar
        refreshGalleryLightbox();
      });
    });
  }
}

/**
 * Atualiza o lightbox após alterações na galeria (filtros, "ver mais", etc.)
 */
function refreshGalleryLightbox() {
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.magnificPopup !== 'undefined') {
    // Destruir instância anterior se existir
    try {
      jQuery.magnificPopup.close();
    } catch (e) {
      // Ignora erros se não houver lightbox aberto
    }

    // Reinicializar o lightbox
    setTimeout(function () {
      initGalleryLightbox();
    }, 100);
  }
}

/**
 * Configura o botão "Ver mais fotos"
 */
function setupLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.load-more-btn a');
  const galleryItems = document.querySelectorAll('.gallery-item.hidden');

  // Se não houver botão ou itens ocultos, sair da função
  if (!loadMoreBtn || galleryItems.length === 0) return;

  loadMoreBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Obter a categoria ativa atual
    const activeCategory = document.querySelector('.category-filter.active');
    const currentCategory = activeCategory ? activeCategory.getAttribute('data-filter') : 'all';

    // Selecionar itens ocultos para mostrar (até 3 por vez)
    let itemsToShow = [];
    let counter = 0;

    galleryItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');

      // Verificar se o item corresponde à categoria atual
      if ((currentCategory === 'all' || currentCategory === itemCategory) && counter < 3) {
        itemsToShow.push(item);
        counter++;
      }
    });

    // Se houver itens para mostrar
    if (itemsToShow.length > 0) {
      // Mostrar os itens com animação
      itemsToShow.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove('hidden');
          item.style.display = '';

          // Aplicar animação
          item.classList.add('fade-in');

          // Remover classes depois da animação
          setTimeout(() => {
            item.classList.remove('fade-in');
          }, 500);
        }, index * 100); // Escalonar a exibição para efeito visual
      });

      // Atualizar o contador de itens restantes
      const remainingItems = document.querySelectorAll('.gallery-item.hidden').length;

      // Se não houver mais itens ocultos
      if (remainingItems === 0) {
        // Mudar o texto do botão
        this.textContent = 'Todas as fotos carregadas';
        this.classList.add('disabled');

        // Opcional: desaparecer o botão após um tempo
        setTimeout(() => {
          this.parentElement.classList.add('fade-out');
        }, 2000);
      } else {
        // Atualizar o texto com o número de itens restantes
        const btnImg = this.querySelector('img');
        this.innerHTML = `Ver mais fotos (${remainingItems} restantes)`;
        if (btnImg) this.appendChild(btnImg);
      }

      // Atualizar o lightbox após adicionar novos itens
      refreshGalleryLightbox();
    }
  });
}

/**
 * Configura o Observer de Interseção para animações quando elementos entram na viewport
 */
function setupIntersectionObserver() {
  // Configurações do observer
  const observerOptions = {
    root: null,        // Viewport
    rootMargin: '0px', // Sem margens
    threshold: 0.2     // 20% do elemento visível para disparar
  };

  // Criar o observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adicionar classe para animar
        entry.target.classList.add('animate-in');

        // Parar de observar após animar
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar itens da galeria
  document.querySelectorAll('.gallery-item:not(.hidden)').forEach(item => {
    observer.observe(item);
  });

  // Observar seção da galeria para animação geral
  const gallerySection = document.querySelector('.clinica-gallery-section');
  if (gallerySection) {
    observer.observe(gallerySection);
  }

  // Observar título e controles da galeria
  document.querySelectorAll('.title-area-center, .category-filters').forEach(element => {
    observer.observe(element);
  });
}