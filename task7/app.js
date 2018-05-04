class List{
    constructor(path, options){
        this.path = path;
        this.options = options;
        this.currentElement = [];
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.renderForm();
        /*
        Проверка нажатия клавиши ctrl
         */
        document.addEventListener('keydown', (e) => {
            if(e.keyCode == 17){
                this.options.ctrl = true;
            }
        } );
        document.addEventListener('keyup', (e) => {
            if(e.keyCode == 17){
                this.options.ctrl = false;
            }
        } );
    }
    renderForm(){
        // Рендеринг формы
        const form = document.createElement('form');
        form.setAttribute('id', 'form');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'input');
        form.appendChild(input);
        const buttonAdd = document.createElement('button');
        buttonAdd.innerText = '+';
        buttonAdd.addEventListener('click', this.addItem)
        const buttonRemove = document.createElement('button');
        buttonRemove.innerText = '-'
        buttonRemove.addEventListener('click', this.removeItem);
        form.appendChild(buttonAdd);
        form.appendChild(buttonRemove);
        this.path.appendChild(form)
    }
    render(){
        /*
        Вызывается после изменения this.options или this.currentElement
        Полностью пересоздаёт элементы списка
         */
        let { parentElement, itemElement, arrOfItems } = this.options;
        document.getElementById('parent') ? document.body.removeChild(document.getElementById('parent')) : null;
        parentElement = document.createElement(parentElement);
        parentElement.setAttribute('id', 'parent');
        arrOfItems.forEach((item, i) => {
            let elem = document.createElement(itemElement);
            elem.innerText = item;
            elem.addEventListener('click', this.selectItem(i));
            parentElement.appendChild(elem);
        });

        // Если элемент выбран - подстветит его
        if(this.currentElement.length){
            this.currentElement.forEach((item) => {
                parentElement.children[item].style.backgroundColor = 'yellow';
            })
        }

        this.path.appendChild(parentElement);
        console.log( parentElement, itemElement, arrOfItems );
    }
    addItem(e){
        e.preventDefault();
        const input = document.getElementById('form').elements.input;
        if(!input.value){
            return false;
        }
        this.options.arrOfItems.push(input.value);
        input.value = '';
        this.render();

        if(typeof this.options.onCreate === 'function'){
            this.options.onCreate()
        }
    }
    removeItem(e){
        if(confirm('Вы действительно хотите удалить ' + this.currentElement.length + ' записи?')) {
            e.preventDefault();
            /*
            this.currentElement.forEach((item) => {
                console.log(item);
                this.options.arrOfItems = this.options.arrOfItems.filter((_item, i) => i !== item);
            });
            */
            this.options.arrOfItems = this.options.arrOfItems.filter((_item, i) => {
                return this.currentElement.indexOf(i) === -1
            });
            this.currentElement = [];
            this.render();
            if(typeof this.options.onDelete === 'function'){
                this.options.onDelete()
            }
        }
    }
    selectItem(index){
        return (e) => {
            if(this.options.ctrl){
                if(this.currentElement.indexOf(index) === -1) {
                    this.currentElement.push(index);
                }
            }
            else {
                this.currentElement = [index];
            }
            this.render();
        }
    }

}
const list = new List(document.body, {
    ctrl: false,
    parentElement: 'ul',
    itemElement: 'li',
    arrOfItems: ['1', '2', '3'],
    onCreate: null,
    onDelete: null,
});


list.render();
