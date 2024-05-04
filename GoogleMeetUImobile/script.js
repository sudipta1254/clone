$('.fa').on('mouseenter', function () {
    let cls = $(this).attr('class')
    if (!(cls.includes('-video') || cls.includes('-bars')))
        $(this).removeClass('fa-regular').addClass('fa-solid')
})
.on('mouseleave', function () {
    let cls = $(this).attr('class')
    if (!(cls.includes('-video') || cls.includes('-bars')))
        $(this).removeClass('fa-solid').addClass('fa-regular')
}) 

/* $('.mdi').on('mouseenter', function () {
    let cls = $(this).text()
    if (cls === 'chat_bubble_outline')
        $(this).text('chat_bubble')
    if (!cls.includes('videocam'))
        $(this).removeClass('material-icons-outlined').addClass('material-icons')
})
.on('mouseleave', function () {
    let cls = $(this).text()
    if (cls === 'chat_bubble')
        $(this).text('chat_bubble_outline')
    if (!cls.includes('videocam'))
        $(this).removeClass('material-icons').addClass('material-icons-outlined')
}) */

$('main').css('height', innerHeight-55)
