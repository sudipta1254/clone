$('.fa-solid').on('mouseenter', function () {
    let cls = $(this).attr('class')
    if (!(cls.includes('-video') || cls.includes('-bars'))
        $(this).removeClass('fa-regular').addClass('fa-solid')
})
.on('mouseleave', function () {
    $(this).removeClass('fa-solid').addClass('fa-regular')
})

$('#data').css('height', innerHeight-180)
