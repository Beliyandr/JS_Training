// Классы и наследование

///// 

// RootElement <= Box <= instances

class RootElement {                 //Главный класс, который создается как основной для наследования
    constructor(tagName = 'div') {              // конструктор - создает набор инструкций с которыми работают классы наследователи
        this.$el = document.createElement(tagName);
        this.$el.style.marginBottom = '20px';
    }

    append() {
        document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.$el);
    }

    hide() {
        this.$el.style.opacity = '0';
    }

    show() {
        this.$el.style.opacity = '1';
    }
}

class Box extends RootElement {                 //Box - наследует все свойства и методы класса RootElement, 
    constructor(color, size = 150, tagName) {   // -создается дополнительный конструктор для данного класса
        super(tagName);                         // ключевое слово, для использования внутренних параметров главного(родительского) класса и переменных
        this.color = color;
        this.size = size;
    }
    create() {

        this.$el.style.background = this.color;
        this.$el.style.width = this.$el.style.height = `${this.size}px`;

        this.append();

        return this
    }
}

class Circle extends RootElement {
    constructor (color) {
        super();

        this.color = color;
    }

    create() {
        this.$el.style.background = this.color;
        this.$el.style.borderRadius = '50%';
        this.$el.style.width = this.$el.style.height = `120px`;
        this.append();

        return this
    }
}

const redBox = new Box('red', 100, 'div').create();
const blueBox = new Box('blue').create();

const circle = new Circle('green').create();

circle.$el.addEventListener('mouseenter', ()=> {
    circle.hide();
    blueBox.hide();
})
circle.$el.addEventListener('mouseleave', ()=> {
    circle.show();
    blueBox.show();
})