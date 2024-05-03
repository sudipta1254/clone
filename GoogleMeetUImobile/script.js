$('.fa-solid').on('mouseenter', function () {
    let cls = $(this).attr('class')
    if (!(cls.includes('-video') || cls.includes('-menu'))
        $(this).removeClass('fa-solid').addClass('fa-regular')
})
.on('mouseleave', function () {
    $(this).removeClass('fa-regular').addClass('fa-solid')
})
