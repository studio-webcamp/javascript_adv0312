(function main() {

    function ToDo(id, task) {
        this.id = id;
        this.task = task;
        this.done = false;
    }

    ToDo.prototype.complete = function (done) {
        this.done = done;
    };

    function ToDoList() {
        this.todolist = [];
    }

    ToDoList.prototype.addToDo = function (todo) {
        this.todolist.push(todo);
    };
    ToDoList.prototype.removeToDo = function (todo) {
        this.todolist = this.todolist.filter(function (item) {
            return todo != item;
        });
    };

    var todoList = new ToDoList();
    todoList.addToDo(new ToDo(Date.now(), 'to do to-do list'));
    todoList.addToDo(new ToDo(Date.now(), 'test to do list'));


    function Component(container) {
        this.container = container;
    }

    Component.prototype.completeTodo = function (item) {
        return function (event) {
            item.complete(event.currentTarget.checked);
        }
    };
    Component.prototype.removeTodo = function (item) {
        var self = this;
        return function (event) {
            todoList.removeToDo(item);
            self.render();
        }
    };

    Component.prototype.renderTodoList = function () {

        var todoItems = document.createDocumentFragment();
        todoList.todolist.forEach(function (item) {
            var li = document.createElement('li');
            li.id = 'li-' + item.id;
            li.innerHTML = `<label for="check-${item.id}">
                <input type="checkbox" ${item.done ? 'checked' : ''} id="check-${item.id}">${item.task}
            </label>
            <button>remove todo</button>`;
            li.querySelector('input').addEventListener('change', this.completeTodo(item));
            li.querySelector('button').addEventListener('click', this.removeTodo(item));
            todoItems.appendChild(li);
        }, this);
        var ul = document.createElement('ul');
        ul.appendChild(todoItems);
        return ul;
    };

    Component.prototype.renderTodoInput = function () {
        var self = this;
        var input = document.createElement('input');
        input.id = "add-todo-input";
        var btn = document.createElement('button');
        btn.innerHTML = 'Add todo';
        btn.addEventListener('click', function () {
            var newTodo = new ToDo(Date.now(), input.value);
            todoList.addToDo(newTodo);
            self.render();
        });
        var div = document.createElement('div');
        div.appendChild(input);
        div.appendChild(btn);
        return div;
    };

    Component.prototype.render = function () {
        this.container.innerHTML = '';
        this.container.appendChild(this.renderTodoList());
        this.container.appendChild(this.renderTodoInput())
    };

    var component = new Component(document.getElementById('main'));
    component.render();

    //for debug only
    window.todoList = todoList;
})();