
// a) Get all the countries from Asia continent /region using Filter function

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();

// request.onload = function () {
//     var result = JSON.parse(request.response);
//     console.log(result);

//     let asia = result.filter((ele) => ele.region === 'Asia').map((ele) => ele.name )
//     console.log(asia);
// }

//  OUTPUT:
//  ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)", 'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Korea (Republic of)', 'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']

// b) Get all the countries with a population of less than 2 lakhs using Filter function

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();

// request.onload = function () {
//     var result = JSON.parse(request.response);
//     console.log(result);

//     let population1 = result.filter((ele) => ele.population < 200000).map((ele)=>ele.name)
//     console.log(population1);
// }

// OUTPUT:
// (62) ['Åland Islands', 'American Samoa', 'Andorra', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Aruba', 'Bermuda', 'Bonaire, Sint Eustatius and Saba', 'Bouvet Island', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cayman Islands', 'Christmas Island', 'Cocos (Keeling) Islands', 'Cook Islands', 'Curaçao', 'Dominica', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'French Southern Territories', 'Gibraltar', 'Greenland', 'Grenada', 'Guam', 'Guernsey', 'Heard Island and McDonald Islands', 'Vatican City', 'Isle of Man', 'Jersey', 'Kiribati', 'Liechtenstein', 'Marshall Islands', 'Micronesia (Federated States of)', 'Monaco', 'Montserrat', 'Nauru', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Palau', 'Pitcairn', 'Saint Barthélemy', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Seychelles', 'Sint Maarten (Dutch part)', 'South Georgia and the South Sandwich Islands', 'Svalbard and Jan Mayen', 'Tokelau', 'Tonga', 'Turks and Caicos Islands', 'Tuvalu', 'Wallis and Futuna']

// c)Print the following details name, capital, flag, using forEach function

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();

// request.onload = function () {
//     var result = JSON.parse(request.response);
//     console.log(result);

//    result.forEach(element => {console.log("Name:"+element.name,"Capital:"+element.capital,"flag:"+element.flag)
    
//    });
// // }

// // OUTPUT eg:

// Name:Afghanistan Capital:Kabul flag:https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg

// d)Print the total population of countries using reduce function

// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();

// request.onload = function () {
//     var result = JSON.parse(request.response);
//     console.log(result);


//     let population2 = result.reduce( (acc,ele)=>acc+ele.population ,0)
//     console.log("Total Population is :"+population2)
//}
//OUTPUT Total Population is :7759438109


// e) Print the country that uses US dollars as currency.


// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/all");
// request.send();

// request.onload = function () {
//     var result = JSON.parse(request.response);
//     console.log(result);

//      for ( let i=0 ;i<result.length;i++) {
//       if  (result[i].currencies[0].code==='USD') {
//     console.log("Name:"+ result[i].name+" "+result[i].currencies[0].code)  
//     }
//      }
//     }

// // OUTPUT: Name:American Samoa USD
