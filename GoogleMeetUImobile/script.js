$('.fa-solid').on('mouseenter', function () {
    if (!$(this).attr('class').includes('-video'))
        $(this).removeClass('fa-solid').addClass('fa-regular')
})
.on('mouseleave', function () {
    $(this).removeClass('fa-regular').addClass('fa-solid')
})
