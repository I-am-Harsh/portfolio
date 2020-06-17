setCookie = () => {
    var d = new Date();
    var exdays = 1;
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var cname = 'contact'
    var cvalue = true
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


showThanks = () => {
    event.preventDefault();
    document.getElementById('contactScreen').style.display = 'none';
    document.getElementById('contactText').style.display = 'none';
    document.getElementById('contacted').style.display = 'block';
}

checkCookie = () => {
    var x = document.cookie
    if(x){
        showThanks();
    }
}