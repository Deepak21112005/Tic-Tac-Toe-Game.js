const Circle = document.createElement('div');
Circle.id = 'circle';
const Cross = document.createElement('div');
Cross.id = 'cross';

const Forward = document.createElement('div');
Forward.id = 'forward';
const Backward = document.createElement('div');
Backward.id = 'backward';
Cross.append(Forward);
Cross.prepend(Backward);

const innerBoxes = document.querySelectorAll(".innerBox")
//console.log(innerBoxes);
let count = 0;
    innerBoxes.foreach((Box) => {
        Box.addEventListener("click",() => {
            if (Box.firstElementChild){
                alert("--You can't Overwrite--");
                return;
            }
            if (count % 2 === 0){
                Box.appendChild(Cross.cloneNode(true));
                console.log("Cross Placed");
            }
            else {
                Box.appendChild(Circle.cloneNode(true));
                console.log("Circle Placed");  
            }
            count++;
        });
    });