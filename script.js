function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    const boxes = document.querySelectorAll('.innerBox');
    
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const cellA = boxes[a].firstElementChild;
        const cellB = boxes[b].firstElementChild;
        const cellC = boxes[c].firstElementChild;

        if (cellA && cellB && cellC) {
            if (cellA.id === cellB.id && cellB.id === cellC.id) {
                alert(`${cellA.id === 'circle' ? 'O' : 'X'} Wins!`);
                resetGame();
                return;
            }
        }
    }

    // Check for draw
    if ([...boxes].every(box => box.firstElementChild)) {
        alert('Draw!');
        resetGame();
    }
}

function resetGame() {
    const boxes = document.querySelectorAll('.innerBox');
    boxes.forEach(box => {
        if (box.firstElementChild) {
            box.removeChild(box.firstElementChild);
        }
    });
    count = 0;
}

const Circle = document.createElement('div');
Circle.id = 'circle';
Circle.style.width = '125px';
Circle.style.height = '125px';
Circle.style.borderRadius = '50%';
Circle.style.border = '16px solid black';

const Cross = document.createElement('div');
Cross.id = 'cross';
Cross.style.height = '200px';
Cross.style.width = '200px';
Cross.style.position = 'relative';
Cross.style.transform = 'rotate(45deg)';

const Forward = document.createElement('div');
Forward.id = 'forward';
Forward.style.position = 'relative';
Forward.style.top = '10%';
Forward.style.left = '45%';
Forward.style.width = '18px';
Forward.style.height = '150px';
Forward.style.background = 'black';
Forward.style.borderRadius = '4px';

const Backward = document.createElement('div');
Backward.id = 'backward';
Backward.style.content = "";
Backward.style.top = '52%';
Backward.style.left = '12%';
Backward.style.position = 'relative';
Backward.style.height = '18px';
Backward.style.width = '150px';
Backward.style.background = 'black';
Backward.style.borderRadius = '4px';

Cross.append(Forward);
Cross.prepend(Backward);

document.addEventListener('DOMContentLoaded', () => {
    const innerBoxes = document.querySelectorAll('.innerBox');
    let count = 0;

    innerBoxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.firstElementChild) {
                alert("--You can't Overwrite--");
                return;
            }
            if (count % 2 === 0) {
                const cross = Cross.cloneNode(true);
                box.appendChild(cross);
                console.log('Cross Placed');
            } else {
                const circle = Circle.cloneNode(true);
                box.appendChild(circle);
                console.log('Circle Placed');
            }
            count++;
            checkWinner();
        });
    });
});