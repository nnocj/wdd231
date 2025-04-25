// I see this more like jusk picking on the input from the user and sending it back to the user claiming that it has been save. 
// Well, its similar to what the backend does. Just that this time it actually sends information accross. 

const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);
console.log(myInfo.get('last'));


document.querySelector("#results").innerHTML = `<p>The Appointment is for ${myInfo.get('first')} ${myInfo.get('last')}.</p>
                                                <p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')}</p>
                                                <p>Your Phone: ${myInfo.get('phone')}</p>
                                                <p>Your email is ${myInfo.get('email')}</p>`;


