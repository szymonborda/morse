document.addEventListener('DOMContentLoaded', function () {
    alert('Click spacebar for "·", hold it for "−", wait a second for new character');
    let isButtonPreseed = false;
    let allowed = true;
    let preview = document.getElementsByClassName('preview')[0];
    let translateDiv = document.getElementsByClassName('translate')[0];
    let morseCode = ['·−', '−···', '−·−·', '−··', '·', '··−·', '−−·', '····', '··', '·−−−', '−·−', '·−··', '−−', '−·', '−−−', '·−−·', '−−·−', '·−·', '···', '−', '··−', '···−', '·−−', '−··−', '−·−−', '−−··', '·−−−−', '··−−', '···−−', '···−', '·····', '−····', '−−···', '−−−··', '−−−−·', '−−−−−'];

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 32) {

            if (event.repeat != undefined) {
                allowed = !event.repeat;
            }

            if (!allowed) return;
            allowed = false;

            isButtonPreseed = true;
            setTimeout(function () {
                if (isButtonPreseed) {
                    console.log('trzymanko');
                    preview.innerHTML += '−';
                } else {
                    console.log('klikanko');
                    preview.innerHTML += '·';
                }
            }, 300);

            clearTimeout(breakTimeout);
        }
    });

    document.addEventListener('keyup', function () {
        if (event.keyCode == 32) {
            isButtonPreseed = false;
            breakTimeout = setTimeout(function () {
                console.log('spacyjka');
                translate();
                preview.innerHTML += ' | ';
            }, 1000);
        }
    });

    function translate() {
        let currentChar = '?';
        morseCode.forEach(function (char, index) {
            if (char == preview.innerHTML.substr(preview.innerHTML.lastIndexOf('|') + 2)) {
                console.log(alphabet[index]);
                currentChar = alphabet[index];
            }
        });
        translateDiv.innerHTML += currentChar;

    }
});
