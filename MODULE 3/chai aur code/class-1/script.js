// DOM Elements
const signupPage = document.getElementById('signup-page');
const todoPage = document.getElementById('todo-page');
const signupForm = document.getElementById('signup-form');
const navUser = document.getElementById('nav-user');
const logoutBtn = document.getElementById('logout-btn');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const searchInput = document.getElementById('search-input');
const taskList = document.getElementById('task-list');
const completedCount = document.getElementById('completed-count');
const incompleteCount = document.getElementById('incomplete-count');

// Pagination
var PAGE_SIZE = 8;
var visibleCount = PAGE_SIZE;
var observer = null;

// Get logged in user
function getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Get tasks for current user
function getTasks() {
    const user = getUser();
    if (!user) return [];
    return JSON.parse(localStorage.getItem('tasks_' + user.email)) || [];
}

// Save tasks for current user
function saveTasks(tasks) {
    const user = getUser();
    if (user) {
        localStorage.setItem('tasks_' + user.email, JSON.stringify(tasks));
    }
}

// Show correct page
function showPage() {
    const user = getUser();
    if (user) {
        signupPage.classList.add('hidden');
        todoPage.classList.remove('hidden');
        navUser.innerHTML = '<strong>' + user.name + '</strong><br>' + user.email;
        renderTasks();
    } else {
        signupPage.classList.remove('hidden');
        todoPage.classList.add('hidden');
    }
}

// Render tasks
function renderTasks() {
    const tasks = getTasks();
    const search = searchInput.value.toLowerCase();
    taskList.innerHTML = '';

    // Disconnect old observer
    if (observer) {
        observer.disconnect();
        observer = null;
    }

    var completed = 0;
    var incomplete = 0;

    // Count all tasks first
    tasks.forEach(function(task) {
        if (task.completed) {
            completed++;
        } else {
            incomplete++;
        }
    });

    // Filter tasks by search
    var filtered = tasks.filter(function(task) {
        if (search) {
            return task.text.toLowerCase().includes(search);
        }
        return true;
    });

    // Only render up to visibleCount
    var toShow = filtered.slice(0, visibleCount);

    toShow.forEach(function(task) {
        var index = tasks.indexOf(task);

        var li = document.createElement('li');
        if (task.completed) {
            li.className = 'completed';
        }

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks(tasks);
            renderTasks();
        });

        var span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;

        var editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function() {
            var newText = prompt('Edit task:', task.text);
            if (newText !== null && newText.trim() !== '') {
                tasks[index].text = newText.trim();
                saveTasks(tasks);
                renderTasks();
            }
        });

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            tasks.splice(index, 1);
            saveTasks(tasks);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    completedCount.textContent = 'Completed: ' + completed;
    incompleteCount.textContent = 'Incomplete: ' + incomplete;

    // Setup infinite scroll if more tasks remain
    if (visibleCount < filtered.length) {
        setupInfiniteScroll();
    }
}

// Infinite scroll with Intersection Observer
function setupInfiniteScroll() {
    var items = taskList.querySelectorAll('li');
    var lastItem = items[items.length - 1];

    if (!lastItem) return;

    observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            setTimeout(function() {
                visibleCount += PAGE_SIZE;
                renderTasks();
            }, 3000);
        }
    }, { rootMargin: '100px' });

    observer.observe(lastItem);
}

// Signup
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;

    // Check if user already exists
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = existingUsers.some(function(u) {
        return u.email === email;
    });

    if (userExists) {
        alert('User with this email already exists. Please login.');
        return;
    }

    // Save user
    var user = { name: name, email: email, password: password };
    existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Log in
    localStorage.setItem('currentUser', JSON.stringify(user));
    signupForm.reset();
    showPage();
});

// Logout
logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    showPage();
});

// Add task
function addTask() {
    var text = taskInput.value.trim();
    if (!text) return;

    var tasks = getTasks();
    tasks.push({ text: text, completed: false });
    saveTasks(tasks);
    taskInput.value = '';
    visibleCount = PAGE_SIZE;
    renderTasks();
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Search
searchInput.addEventListener('input', function() {
    visibleCount = PAGE_SIZE;
    renderTasks();
});

// Init
showPage();
