
async function PutData(Key) {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let Wert2 = Pantry[Key] + 1;
    var raw = JSON.stringify({
        [Key]: Wert2
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://getpantry.cloud/apiv1/pantry/1fc721ad-30e0-4313-88eb-69a42534331c/basket/Umfrage1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

