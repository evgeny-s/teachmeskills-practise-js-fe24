// Homework

// Create application in order to show 10 random dogs after user clicked on the button.
// Use this API: https://dog.ceo/api/breeds/image/random via `fetch` function
// Dogs should appear below the button
// Dogs should be refreshed each time user clicked on `Show dogs` button
// Create simple UI with CSS
// Forbidden to use any of JS or CSS framework

let url = 'https://dog.ceo/api/breeds/image/random';
let ul = document.querySelector('ul');

document.querySelector('.btn_js').addEventListener('click', () => {
    for (let i = 0; i <= 9; i++) {
        ul.innerHTML = '';
        fetch(url).then(res => {
            return res.json();
        }).then(res => {
            let li = document.createElement('li');
            li.innerHTML = `<img src='${res.message}'>`;
            ul.appendChild(li);
        })
    }
})

