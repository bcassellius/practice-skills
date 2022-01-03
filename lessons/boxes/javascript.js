document.getElementById('button1').onclick = function() {grow()};
function grow() {
    document.getElementById('button1').innerHTML = `It's Bigger!`;

    document.getElementById('box').style = 'height:200px; width:200px; background-color:orange; margin:25px'
};

document.getElementById('button2').onclick = function() {blue()};
function blue() {
    document.getElementById('box').style.backgroundColor = 'blue';

}

document.getElementById('button3').onclick = function() {fade()};
function fade() {
    document.getElementById('box').style.opacity = '50%';
    document.getElementById('box').style.transition = '2s';

} 