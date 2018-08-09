$(".item").on('click', function() {
  var _t = this;
  setTimeout(function(){
    $(_t).next('.content').addClass('open');
  },100);
  $('.item').each(function(i, v) {
    if (!$(_t).is(v)) {
      $(v).addClass('closed');
      $(v).next('.content').removeClass('open');
    }
    else {
      $(v).removeClass('closed');
    }
  });
});

$('.close').on('click', function(){
  $('.item').each(function(i, v) {
    setTimeout(function(){
      $(v).removeClass('closed');
    },100);
    $(v).next('.content').removeClass('open');
  });
})