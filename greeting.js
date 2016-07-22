function greet(language) {

  var lang = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
      };

        if(language in lang) {
          console.log(lang[language]);
          return lang[language];
        }
        else {
          console.log(lang['english']);
          return lang['english'];
        }
}

var lang1 = 'english';
var lang2 = 'dutch';
var lang3 = 'german';
var lang4 = 'Nope';
greet(lang1);
greet(lang2);
greet(lang3);
greet(lang4);
