$(function(){
  const title = $('.accordion__title')
  const desc = $('.accordion__desc')
  $(desc).hide()
  $(title).click(function(){
    $(desc).slideUp()
    $(this).next().stop().slideToggle()
    $(this).siblings().removeClass('active')
    $(this).toggleClass('active')
  })
})