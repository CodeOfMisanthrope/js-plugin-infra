export default class TodoList {
  /** @type {HTMLElement} */
  #root;
  /** @type {HTMLElement} */
  #listClass
  /** @type {EventEmitter} */
  #ee;
  /** @type {Todo} */
  #todo;

  /**
   * Создает экземпляр TodoList
   * @param {TodoListOptions} opts - Объект опций
   */
  constructor(opts) {
    this.#root = opts.root;
    this.#ee = opts.ee;
    this.#todo = opts.todo;
    this.#listClass = opts.listClass;

    this.#ee.on('addTask', this.addTask.bind(this));
    console.log(this.#ee);
    this.#initTasks();
  }

  #initTasks() {
    if (this.#todo.size !== 0) {
      this.#renderTasks();
    }
  }

  #getTaskItemTemplate(data) {
    const $item = document.createElement("li");
    $item.className = "task__item";
    const $taskTitle = document.createElement("h4");
    $taskTitle.className = "task__title";
    $taskTitle.innerText = data.title;
    const $taskDescTitle = document.createElement("span");
    $taskTitle.className = "task__desc-title";
    $taskDescTitle.innerText = "Описание задачи:";
    const $taskDesc = document.createElement("p");
    $taskDesc.className = "task__desc";
    $taskDesc.innerText = data.desc;
    $item.appendChild($taskTitle);
    $item.appendChild($taskDescTitle);
    $item.appendChild($taskDesc);
    this.#listClass.appendChild($item);
  }

  #renderTasks() {
    const tasks = this.#todo.getAllTasks();
    console.log(tasks);
    for (const task of tasks) {
      this.#getTaskItemTemplate(task);
    }
  }

  addTask(task) {
    console.log(task, task.title, task.desc);
    this.#getTaskItemTemplate(task);
    // console.log('List add task');
  }

  removeTask(num) {

  }
}
