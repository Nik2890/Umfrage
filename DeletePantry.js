//############################################################################################
//############################################################################################
//############################################################################################

//Aufruf mit verzögerung 
//  setTimeout(function() {DeletePantry();}, 5000);
  
  


function DeletePantry() {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "ja": 0,
      "nein": 0
  
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://getpantry.cloud/apiv1/pantry/1fc721ad-30e0-4313-88eb-69a42534331c/basket/Umfrage1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  }
  