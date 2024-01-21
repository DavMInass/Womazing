window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if ( document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = 'white'
    } 
    else{
      document.getElementById("navbar").style.backgroundColor = '#11ffee00'
    }
}

function bigImg() {
  document.getElementById('nxt')
  nxt.style.display = "block";

}

function normalImg() {
  document.getElementById('nxt')
  nxt.style.display = "none";

}

function onnxtbtn() {
  document.getElementById('prv')
  prv.style.display = "block";

}

function outnxtbtn() {
  document.getElementById('prv')
  prv.style.display = "none";

}


