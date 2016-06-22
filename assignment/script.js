(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++){

  var firstName = names[i].charAt(0).toLowerCase();

  if (firstName == 'j') {
  byeSay.speak (names[i]);
      } else {
        helloSay.speak (names[i]);
      }
    }
  }
)();
