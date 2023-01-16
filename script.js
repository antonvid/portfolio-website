function hide(id) {
    var enlarged = document.getElementsByClassName('enlarge');
    if(enlarged.length>0){
        return;
    }
    document.getElementById(id).classList.toggle('enlarge');
    console.log('toggle');
}