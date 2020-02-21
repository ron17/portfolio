document.getElementsByTagName('body')[0].onscroll = (e) =>{ 
    let scroll = document.getElementsByTagName('html')[0].scrollTop
    let menu = document.getElementById('menu');
    console.log(scroll);

    if(scroll > 850)
        menu.style.background = '#282a36';
    else   
        menu.style.background = '';
} ;

