//

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  //const speak = Object.values(data.languages)[0];
  //const money = Object.values(data.currencies)[0].name;
  const html = `
    <article class="country ${className}">
            
            <div class="country__data">
              <p class="country__row"><span>👫</span></p>
            
             
            </div>
          </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not foung (${res.status})`);

      return res.json;
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message} `));
};

// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381);
});
