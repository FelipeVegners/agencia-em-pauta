$('.card').click(function(){
  $('h5').removeClass('-active');
  $(this).find('.card-title').addClass('-active');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
