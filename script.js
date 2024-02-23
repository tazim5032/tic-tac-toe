const allBtn = document.getElementsByClassName('g');

let cnt = 0;
let f=0;
let firstPlayer = [];
let secondPlayer = [];
for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {

        cnt++;

        if (cnt % 2 == 1) {
            btn.style.background = 'cyan';
            btn.textContent = 'X';

            const id = btn.getAttribute('id');
            firstPlayer.push(id);

            if (cnt >= 5) {
                let chk = chkWinner1();
                if (chk) {
                    document.getElementById('winner').innerText = 1;
                    const show = document.getElementById('congo');
                    show.classList.remove('hidden');
                    f++;
                }
            }
        }
        else {
            btn.style.background = 'yellow';
            btn.textContent = 'O';

            const id = btn.getAttribute('id');
            secondPlayer.push(id);

            if (cnt >= 6) {
                let chk = chkWinner2();
                if (chk) {
                    document.getElementById('winner').innerText = 2;
                    const show = document.getElementById('congo');
                    show.classList.remove('hidden');
                    f++;
                }
            }
        }

        btn.setAttribute('disabled', true);

        if(cnt == 9 && f==0){
            const show = document.getElementById('draw');
            show.classList.remove('hidden');
        }
    });
}

function chkWinner1() {
    if (firstPlayer.includes('1') && firstPlayer.includes('2') && firstPlayer.includes('3')) {
        return true;
    }
    if (firstPlayer.includes('4') && firstPlayer.includes('5') && firstPlayer.includes('6')) {
        return true;
    }
    if (firstPlayer.includes('7') && firstPlayer.includes('8') && firstPlayer.includes('9')) {
        return true;
    }
    if (firstPlayer.includes('1') && firstPlayer.includes('4') && firstPlayer.includes('7')) {
        return true;
    }
    if (firstPlayer.includes('2') && firstPlayer.includes('5') && firstPlayer.includes('8')) {
        return true;
    }
    if (firstPlayer.includes('3') && firstPlayer.includes('6') && firstPlayer.includes('9')) {
        return true;
    }
    if (firstPlayer.includes('1') && firstPlayer.includes('5') && firstPlayer.includes('9')) {
        return true;
    }
    if (firstPlayer.includes('3') && firstPlayer.includes('5') && firstPlayer.includes('7')) {
        return true;
    }
}

function chkWinner2() {
    if (secondPlayer.includes('1') && secondPlayer.includes('2') && secondPlayer.includes('3')) {
        return true;
    }
    if (secondPlayer.includes('4') && secondPlayer.includes('5') && secondPlayer.includes('6')) {
        return true;
    }
    if (secondPlayer.includes('7') && secondPlayer.includes('8') && secondPlayer.includes('9')) {
        return true;
    }
    if (secondPlayer.includes('1') && secondPlayer.includes('4') && secondPlayer.includes('7')) {
        return true;
    }
    if (secondPlayer.includes('2') && secondPlayer.includes('5') && secondPlayer.includes('8')) {
        return true;
    }
    if (secondPlayer.includes('3') && secondPlayer.includes('6') && secondPlayer.includes('9')) {
        return true;
    }
    if (secondPlayer.includes('1') && secondPlayer.includes('5') && secondPlayer.includes('9')) {
        return true;
    }
    if (secondPlayer.includes('3') && secondPlayer.includes('5') && secondPlayer.includes('7')) {
        return true;
    }
}
function restart(){
    document.getElementById('congo').addEventListener('click', function(e){
        location.reload();
    });
}