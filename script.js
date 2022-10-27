// kliknięce w przycisk

// $('.article button').on('click', function(){
//     $('.modal-wrap').addClass('active');
//     $('.article').addClass('blur');
// })

// $('span.hide').on('click', function(){
//     $('.modal-wrap').removeClass('active');
//     $('.article').removeClass('blur');
// })

// Wersja w Jquery
// $('.article button, span.hide').on('click', function(){
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
// })

// Wersja w JS

document.querySelector('.article button').addEventListener("click", function(){
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blur');
})
document.querySelector('span.hide').addEventListener("click", function(){
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur');
})