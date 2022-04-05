// getElementById()
// getElementsByTagName()
// getElementsByClassName()
// querySelector()
// querySelectorAll()

// Document Object Model

// const h1Element = document.getElementById('heading')

// console.log(h1Element);

// const heading = document.getElementsByClassName('heading');

// console.log(heading)

// const heading = document.getElementsByTagName('h1');
// console.log(heading);

// const heading = document.querySelector('#heading');
// console.log(heading);

// const heading = document.querySelectorAll('.heading');
// console.log(heading);

// ----------------------------------------------------------------

// innerText, textContent
// const h1Element = document.querySelector('.heading')

// console.log(h1Element.innerText);

//----------------------------------------------------------------

// Todo list

const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const rootElement = document.getElementById('root');

const jobs = [];

function renderUi() {
    const htmls = jobs.map(function(job, index) {
        return `<li>
                    ${job}
                    <button onclick="handleDelete(${index})">Delete</button>
                </li>`
    })
    rootElement.innerHTML = htmls.join('');
}

function handleDelete(index) {
    jobs.splice(index, 1);

    renderUi();

    // const newJobs = jobs.filter(function(job, i) {
    //     return i !== index;
    // })

    // const htmls = newJobs.map(function(job, index) {
    //     return `<li>
    //                 ${job}
    //                 <button onclick="handleDelete(${index})">Delete</button>
    //             </li>`
    // })
    // rootElement.innerHTML = htmls.join('');
}

function app() {
    buttonElement.onclick = function() {
        const inputValue = inputElement.value;
        jobs.push(inputValue);

        renderUi();

        inputElement.value = '';
        inputElement.focus();
    }
}
app()