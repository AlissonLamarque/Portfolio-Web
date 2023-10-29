$( function(e) { 
    $('#in').click(function() {
        $("html, body").animate({scrollTop: $('#inicio').offset().top }, 800);				
    });
    $('#sm').click(function() {
        $("html, body").animate({scrollTop: $('#sobre-mim').offset().top }, 800);				
    });
                    
    $('#xp').click(function() {
        $("html, body").animate({scrollTop: $('#experiencias').offset().top }, 800);				
    });

    $('#pr').click(function() {
        $("html, body").animate({scrollTop: $('#projetos').offset().top }, 800);				
    });

    $('#ctt').click(function() {
        $("html, body").animate({scrollTop: $('#contatos').offset().top }, 800);				
    });

});		


function redimensionar(){
    var alturajanela = $(window).height()

    $("#inicio").css("height", alturajanela);
    $("#sobre-mim").css("height", alturajanela);
    $("#experiencias").css("height", alturajanela);
    $("#projetos").css("height", alturajanela);
    $("#contatos").css("height", alturajanela);
}

$(window).resize(function(e){
    redimensionar();
})

redimensionar();

$(function(){
    $('.carousel').carousel({
        interval:4000, 
        pause: "null"
    })
})


