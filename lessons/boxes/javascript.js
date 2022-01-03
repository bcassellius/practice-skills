document.getElementById('button1').onclick = function() {grow()};
function grow() {
    document.getElementById('button1').innerHTML = `It's Bigger!`;
    document.getElementById('box').style = 'height:200px; width:200px; background-color:orange; margin:25px'
}
;
