(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  
  window.helloSpeaker = helloSpeaker;
})(window);
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Goodbye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  
  window.byeSpeaker = byeSpeaker;
})(window);
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();
    
    if (firstLetter === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();
