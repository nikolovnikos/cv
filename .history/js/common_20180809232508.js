

$('.close').on('click', function(){
  $('.item').each(function(i, v) {
    setTimeout(function(){
      $(v).removeClass('closed');
    },100);
    $(v).next('.content').removeClass('open');
  });
});

var src1 = document.querySelector('#scroll-1');
var src2 = document.querySelector('#scroll-2');
var src3 = document.querySelector('#scroll-3');
var options = {
  maxScrollbarLength: 100,
};

var ps1 = new PerfectScrollbar(src1, options);
var ps2 = new PerfectScrollbar(src2, options);
var ps3 = new PerfectScrollbar(src3, options);