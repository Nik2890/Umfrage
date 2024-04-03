//1fc721ad-30e0-4313-88eb-69a42534331c 

let Pantry; // Globale Variable zur Speicherung der Daten


async function getData() {
    try {
        await fetchData();
    } catch (error) {
        console.error(error);
    }
}


async function fetchData() {

    try {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const response = await fetch("https://getpantry.cloud/apiv1/pantry/1fc721ad-30e0-4313-88eb-69a42534331c/basket/Umfrage1", requestOptions);

        const data = await response.json();
        Pantry = data; // Zuweisen der Daten zur globalen Variable
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}



