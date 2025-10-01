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
Backward.style.top = '-32%';
Backward.style.left = '12%';
Backward.style.position = 'relative';
Backward.style.height = '18px';
Backward.style.width = '150px';
Backward.style.background = 'black';
Backward.style.borderRadius = '4px';

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