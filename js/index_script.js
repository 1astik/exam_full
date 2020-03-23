$(function(burger) {
    // В класс "page" обернуто все содержимое страницы.
    // Можно повесить событие и на body, но тогда это меню не будет работать на I-pad
    $('.all').click(function( event ){
        // проверяем находится ли элемент на который кликнули в нашем меню,
        // то есть в контейнере "menu-container"
        let eventInMenu = burger( event.target ).parents('.container');
        // если родителя нет, значит клик был вне меню и меню сворачиваем
        if( !eventInMenu.length ){
            burger('.navbar-collapse').slideUp('800');
        }
    });
    $('.container').click(function(){
        burger('.navbar-collapse').slideToggle('800');
    });
});





$('.products .big-filter nav a').click(function() {
    $(".products .big-filter nav a").removeClass('active');
    $(".products .dropdown-menu a").removeClass('active');
    if ($(this).attr('class') == ('menu-print')) {
        $(".print").css({"display": "flex"});
        $(".web").css({"display": "none"});
        $(".user").css({"display": "none"});
        $(".mock").css({"display": "none"});
        $(".menu-print").addClass('active');
    }
    if ($(this).attr('class') == ('menu-web')) {
        $(".print").css({"display": "none"});
        $(".web").css({"display": "flex"});
        $(".user").css({"display": "none"});
        $(".mock").css({"display": "none"});
        $(".menu-web").addClass('active');
    }
    if ($(this).attr('class') == ('menu-user')) {
        $(".print").css({"display": "none"});
        $(".web").css({"display": "none"});
        $(".user").css({"display": "flex"});
        $(".mock").css({"display": "none"});
        $(".menu-user").addClass('active');
    }
    if ($(this).attr('class') == ('menu-mock')) {
        $(".print").css({"display": "none"});
        $(".web").css({"display": "none"});
        $(".user").css({"display": "none"});
        $(".mock").css({"display": "flex"});
        $(".menu-mock").addClass('active');
    }
    if ($(this).attr('class') == ('menu-all')) {
        $(".print").css({"display": "flex"});
        $(".web").css({"display": "flex"});
        $(".user").css({"display": "flex"});
        $(".mock").css({"display": "flex"});
        $(".menu-all").addClass('active');
    }
    $(this).addClass('active');
});

$('.products .dropdown-menu a').click(function() {
    $(".products .dropdown-menu a").removeClass('active');
    $(".products .big-filter nav a").removeClass('active');
    if ($(this).attr('class') == ('dropdown-item menu-print')) {
        $(".print").css({"display": "flex"});
        $(".web").css({"display": "none"});
        $(".user").css({"display": "none"});
        $(".mock").css({"display": "none"});
        $(".menu-print").addClass('active');
}
    if ($(this).attr('class') == ('dropdown-item menu-web')) {
        $(".print").css({"display": "none"});
        $(".web").css({"display": "flex"});
        $(".user").css({"display": "none"});
        $(".mock").css({"display": "none"});
        $(".menu-web").addClass('active');
    }
    if ($(this).attr('class') == ('dropdown-item menu-user')) {
        $(".print").css({"display": "none"});
        $(".web").css({"display": "none"});
        $(".user").css({"display": "flex"});
        $(".mock").css({"display": "none"});
        $(".menu-user").addClass('active');
    }
    if ($(this).attr('class') == ('dropdown-item menu-mock')) {
        $(".print").css({"display": "none"});
        $(".web").css({"display": "none"});
        $(".user").css({"display": "none"});
        $(".mock").css({"display": "flex"});
        $(".menu-mock").addClass('active');
    }
    if ($(this).attr('class') == ('dropdown-item menu-all')) {
        $(".print").css({"display": "flex"});
        $(".web").css({"display": "flex"});
        $(".user").css({"display": "flex"});
        $(".mock").css({"display": "flex"});
        $(".menu-all").addClass('active');
    }
    $(this).addClass('active');
});