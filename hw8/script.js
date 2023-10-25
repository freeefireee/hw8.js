class CustomElement {
    constructor(tag = 'div', width = '400px', height = '300px', bgColor = 'red', borderRadius = 0, opacity = 1) {
        this.tag = tag;
        this.width = width;
        this.height = height;
        this.bgColor = bgColor;
        this.borderRadius = borderRadius;
        this.opacity = opacity;
        this.element = document.createElement(this.tag);
        this.element.style.width = this.width;
        this.element.style.height = this.height;
        this.element.style.backgroundColor = this.bgColor;
        this.element.style.borderRadius = `${this.borderRadius}px`;
        this.element.style.opacity = this.opacity;
        this.element.style.position = 'absolute';
        this.element.style.left = '50%';
        this.element.style.top = '50%';
        this.element.style.transform = 'translate(-50%, -50%)';

    }

    create() {
        document.body.appendChild(this.element);
    }

    changeColor(newColor) {
        this.bgColor = newColor;
        this.element.style.backgroundColor = this.bgColor;
    }
}

const customElement = new CustomElement();

const createButton = document.createElement('button');
createButton.textContent = 'press the button';
document.body.appendChild(createButton);

createButton.addEventListener('click', function () {
    customElement.create();
    customElement.changeColor(generateRandomColor());
});


function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (color === 'white') {
        color = 'red';

    }
    return color;
};

customElement.changeColor("red")
customElement.create()
