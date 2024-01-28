const dragon = document.getElementById('dragon');

let isJumping = false;

document.addEventListener('keydown', jump);

function jump(event) {
    if (event.code === 'Space' && !isJumping) {
        isJumping = true;
        jumpUp();
    }
}

function jumpUp() {
    let jumpHeight = 100;
    let interval = setInterval(() => {
        if (jumpHeight === 0) {
            clearInterval(interval);
            jumpDown();
        } else {
            jumpHeight -= 5;
            dragon.style.bottom = `${jumpHeight}px`;
        }
    }, 10);
}

function jumpDown() {
    let fallHeight = 0;
    let interval = setInterval(() => {
        if (fallHeight === 100) {
            clearInterval(interval);
            isJumping = false;
        } else {
            fallHeight += 5;
            dragon.style.bottom = `${fallHeight}px`;
        }
    }, 10);
}
