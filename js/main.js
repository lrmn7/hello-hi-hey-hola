jQuery(document).ready(function($) {
  // Remove url text on mouseover for icons links
  $('a').each(function() {
    $(this).attr('onclick', 'window.location.href="' + $(this).attr('href') + '"');
    $(this).removeAttr('href');
  });
});

jQuery(document).ready(function($) {
  /**
   * Set footer always on the bottom of the page
   */
  function footerAlwayInBottom(footerSelector) {
    var docHeight = $(window).height();
	if (footerSelector.position() != undefined && $('footer').is(":visible")) {
		var footerTop = footerSelector.position().top + footerSelector.height();
		if (footerTop < docHeight) {
		  footerSelector.css("margin-top", (docHeight - footerTop) + "px");
		} else {
		  footerSelector.css('margin-top', '0px');
		}
	}
  }
  // Apply when page is loading
  footerAlwayInBottom($("#footer"));

  // Apply when page is fully loaded
  $(window).on("load", function() {
    footerAlwayInBottom($("#footer"));
    $(window).trigger('resize');
  });

  // Apply when page is resizing
  $(window).resize(function() {
    footerAlwayInBottom($("#footer"));
  });

  // Apply every 25 ms
  window.setInterval(function() {
    footerAlwayInBottom($("#footer"));
  }, 25);

  $('body').on('click', '.play', function(e) {
	  if ($('iframe').length < 1) {
		  var iframe = document.createElement('iframe')
		  iframe.src = './0x40?song=Vexare%20-%20The%20Clockmaker&autoSong=loop&autoSongDelay=3';
		  iframe.classList.add('fullScreen');
		  $('body').prepend(iframe)
		  $('.play').html($('.play').html().replace('fa-play', 'fa-stop').replace('Play', 'Stop'))
		  $('#footer').addClass('hidden');
		  var hideButton = $('.play').clone();
		  hideButton.html(hideButton.html().replace('fa-stop', 'fa-eye-slash').replace('Stop', 'Hide'))
		  hideButton.removeClass('play')
      hideButton.removeClass('hover')
      hideButton.removeClass('rasberry-dropshadow')
		  hideButton.addClass('hideInterface')
      $('.player').css('opacity', '0.8')
		  $('.player').append(hideButton);
	  } else {
      $('iframe').remove();
      $('.hideInterface').remove();
      $('.play').html($('.play').html().replace('fa-stop', 'fa-play').replace('Stop', 'Play'))
      $('#footer').removeClass('hidden');
      $('.player').css('opacity', '1')
      if (!$('.mainblock').is(":visible")) {
        $('.mainblock').show();
      }
	  }
  });

  $('body').on('click', '.hideInterface', function(e) {
    if ($('.mainblock').is(":visible")) {
      $('.hideInterface').html($('.hideInterface').html().replace('Hide', 'Show').replace('fa-eye-slash', 'fa-eye'));
	    $('.mainblock').hide();
    } else {
      $('.hideInterface').html($('.hideInterface').html().replace('Show', 'Hide').replace('fa-eye', 'fa-eye-slash'));
      $('.mainblock').show();
    }
  });
  $('.docsbots').on('click', function(e) {
    Swal.fire({
      width: 600,
      html: "<div class='botimgs'><figure class='btn hover animation'><a href='https://hai-lucy.github.io'><img class='botlucy' src='./images/newlucy.png'/><figcaption class='figcaplucy'>lucy</figcaption></a></figure><figure class='btn hover animation'><a href='https://clarishabot.github.io'><img class='botclarisha' src='./images/clarisha.png'/><figcaption class='figcapclarisha'>clarisha</figcaption></a></figure><figure class='btn hover animation'><a href='https://naisha-bot.github.io'><img class='botnaisha' src='./images/naisha.png'/><figcaption class='figcapnaisha'>naisha</figcaption></a></figure><figure class='btn hover animation'><a href='https://lucyradio.vercel.app'><img class='botlucyradio' src='./images/lucyradio.png'/><figcaption class='figcaplucyradio'>lucyradio</figcaption></a></figure><figure class='btn hover animation'><a href='https://bot.lrmn.site'><img class='botlrmn' src='./images/lrmn.png'/><figcaption class='figcaplrmn'>lrmn</figcaption></a></figure><figure class='btn hover animation'><a href='https://soothe-bot.github.io/'><img class='botsoothe' src='./images/soothe.png'/><figcaption class='figcapsoothe'>soothe</figcaption></a></figure></div>",
      imageWidth: 500,
      imageAlt: 'My bots image',
      background: '#202225',
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
    })
  });
  $('.docs').on('click', function(e) {
    Swal.fire({
      title: 'Nice!',
      width: 700,
      text: 'I may refuse your friend request btw!',
      imageUrl: './images/discord.png',
      imageAlt: 'My discord image',
      background: '#202225',
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
      '<i class="fa fa-thumbs-down"></i> Fuck you!',
      cancelButtonAriaLabel: 'Thumbs down',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
    }).then((result) => {
      if (result.dismiss == "cancel") {

        swal.fire({
          title: "YOU GOT RICK ROLLED",
          background: '#202225',
          width: '500px',
          confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> I got destroyed!',
          cancelButtonText:
          '<i class="fa fa-thumbs-down"></i> Ahaha, predictable kid.',
          showCloseButton: true,
          showCancelButton: true,
          html:
          '<iframe width="80%" height:"auto" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
        }).then((result) => {
          if (result.dismiss == "cancel") {
            Swal.fire({
              title: "CAN'T YOU ADMIT?",
              html: "<a href='https://lrmn-vp.site'><img src=https://i.imgur.com/ZngZTjQ.png /></a>",
              imageAlt: "BERSERK",
              confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> I am sorry!',
              confirmButtonAriaLabel: 'Thumbs up, great!',
            }).then((result) => {
              if (!result.dismiss) {
                Swal.fire({
                  title: "You're not sorry! You're a user! Gotcha",
                  width: '500px',
                  html:
                  '<iframe width="80%" height:"auto" src="https://www.youtube.com/embed/K5JLIdAPfdc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
                })
              }
            })
          }
        })
      }
    })
  });
});
