fetch('https://gq09yk27w3.execute-api.us-east-1.amazonaws.com/test/codewar')
    .then( response => response.json() )
    .then( data => {
        document.querySelector('.honor').textContent=data.honor;
        document.querySelector('.rank').textContent=data.ranks.overall.name;
    });