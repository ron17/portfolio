document.getElementsByTagName('body')[0].onscroll = (e) =>{ 
    let scroll = document.getElementsByTagName('html')[0].scrollTop
    let menu = document.getElementById('menu');
    console.log(scroll);

    if(scroll > 720)
        menu.style.background = '#2a2c37';
    else   
        menu.style.background = '';
} ;

