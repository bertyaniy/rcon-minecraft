document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();

    let FormLogin = document.forms['loginForm'];

    let host = FormLogin.elements['host'].value;
    let port = FormLogin.elements['port'].value;
    let password = FormLogin.elements['password'].value;

    let data = JSON.stringify({
        'host': host,
        'port': port,
        'password': password
    });

    let request = new XMLHttpRequest();
    
    request.open('POST', '/request', true);
    request.setRequestHeader(
        'Content-Type',
        'application/json'
    );

    request.send(data);

    request.onload = () => {
        if (request.status != 200) {
            console.log("No ok");
            errorBorder();
        } else {
            console.log("Ok");
            redirect();
        }
    }
 
    function errorBorder() {
        const borders = document.querySelectorAll(".form input");

        for (const border of borders) {
            border.style.border = '2px solid red';
        };
    }

    function redirect() {
        window.location.href = '/dashboard';
    }
});




