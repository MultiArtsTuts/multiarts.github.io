$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
        $('#logo').removeClass('logo-center').addClass('fixed')
    }, 1000);

    $('#main-nav').sidr();

    $('#fullpage').fullpage({
        sectionsColor: ['transparent', '#4BBFC3', '#7BAABE', '#27ae60', 'rgba(0,55,33,.5)'],
        navigationTooltips: ['Home', 'Segundo', 'Terceiro', 'Quarto', 'Quinto'],
        showActiveTooltip: true,
        verticalCentered: true,
        easing: 'easeInOutCubic',
        css3: false,
        scrollingSpeed: 900,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        easingcss3: 'ease',
        navigation: true,
        // 'anchors': ['Home', 'Features', 'Clients', 'Pricing', 'Contact'],
        'navigationPosition': 'right',
    });
    $('.screenshots-content, .clients-content').css('height', $(window).height());

    // CONTACT FORM
    $(document).mouseup(function (e) {
        if ($(".sidr-open ")[0]){
        var container = $("#sidr");

        if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".sidr-open #main-nav").click();
        }}
    });

    $('#submit').click(function(){
        $.post("send.php", $("#contact-form").serialize(),  function(response) {
            $('#success').fadeIn().html(response);
            $('#success').delay(2000).fadeOut();
        });
        return false;
    });
});
jQuery(window).load(function() {
    // jQuery('#preloader').fadeOut('fast');

});