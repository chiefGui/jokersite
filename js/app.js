$(document).ready(function() {
  $('#want-a-discount--button').on('click', function () {
    $('#want-a-discount--form').addClass('is-visible')
    $('.bloco-destaque').toggleClass('is-visible')
  })
})
