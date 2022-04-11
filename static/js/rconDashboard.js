document.onload = () => {
    document.getElementById('sumbit').addEventListener('click', (event) => {
        event.preventDefault();

        let commandForm = document.forms['commandForm'];

        let command = commandForm.elements['command'].value;

        let data = JSON.stringify({
           'command': command 
        });

        let request = new XMLHttpRequest();

        request.open('PORT', '/dashboard', true);
        request.setRequestHeader('Content-Type', 'application-json');

        request.send(data);
    });
};