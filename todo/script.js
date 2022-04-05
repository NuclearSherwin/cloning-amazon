// // ToDo list
// const inputElement = document.querySelector('input');
// const buttonElement = document.querySelector('button');
// const rootElement = document.querySelector('#root');

// const jobs = [];


// function Application() {
//     buttonElement.onclick = function() {
//         const inputValue = inputElement.value;
//         if (inputValue != '') {
//             jobs.push(inputValue);
//         }
//         renderUi();

//         inputElement.value = '';
//         inputElement.focus();
//     }
// }
// Application();

// function renderUi() {
//     const htmls = jobs.map(function(job, index) {
//         return `<li>
//                     ${job}
//                     <button onclick="handleDelete(${index})">Delete</button>
//                 </li>`
//     })
//     rootElement.innerHTML = htmls.join('');
// }
// //Delete function
// function handleDelete(index) {
//     jobs.splice(index, 1);
//     renderUi();
// }

// // Todo list
// const inputElement = document.querySelector('input');
// const buttonElement = document.querySelector('button');
// const rootElement = document.getElementById('root');

// const jobs = [];

// function renderUi() {
//     const htmls = jobs.map(function(job, index) {
//         return `<li>
//             ${job}    
//         <button onclick="handleDelete(${index})">Delete</button>
//         </li>`

//     })

//     rootElement.innerHTML = htmls.join('');
// }

// function Application() {
//     buttonElement.onclick = function() {
//         const inputValue = inputElement.value;

//         if (inputValue != '') {
//             jobs.push(inputValue);
//         }

//         renderUi();

//         inputElement.value = '';
//         inputElement.focus();
//     }
// }

// Application();

// function handleDelete(index) {
//     jobs.splice(index, 1);
//     renderUi();
// }


// const inputElement = document.querySelector('input');
// const buttonElement = document.querySelector('button');
// const rootElement = document.querySelector('#root');

// const books = [];

// function Application() {
//     buttonElement.onclick = function() {
//         const inputValue = inputElement.value;

//         if (inputValue != '') {
//             books.push(inputValue);
//         }

//         renderUi();

//         inputElement.value = '';
//         inputElement.focus();
//     }
// }
// Application();

// function renderUi() {
//     const renderHTML = books.map(function(book, index) {
//         return `<li>
//             ${book}
//             <button onclick="executeDelete(${index})">Delete</button>
//         </li>`
//     })
//     rootElement.innerHTML = renderHTML.join('');
// }

// function executeDelete(index) {
//     books.splice(index, 1);

//     renderUi();
// }

//Todo list
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const rootElement = document.getElementById('root');

let students = [];

function Application() {
    buttonElement.onclick = function() {
        const inputValue = inputElement.value;
        if (inputValue != '') {
            students = [...students, inputValue];
        }
        renderContent();
        inputElement.value = '';
        inputElement.focus();
    }
}
Application();

function renderContent() {
    const renderHTML = students.map(function(student, index) {
        return `<li>
            ${student}
            <button onclick="executeDelete(${index})">Delete</button>
        </li>`
    })
    rootElement.innerHTML = renderHTML.join('');
}

function executeDelete(index) {
    students.splice(index, 1);
    renderContent();
}