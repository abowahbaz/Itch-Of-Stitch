$(".menu-btn").click(function (){
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
    });

    const year = document.querySelector('#year');

    year.innerHTML=new Date().getFullYear();



