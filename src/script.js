document.addEventListener('DOMContentLoaded', function() {

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
  const grammar = '#JSGF v1.0;';

  const recognition = new SpeechRecognition();
  const speechRecognitionGrammarList = new SpeechGrammarList();

  speechRecognitionGrammarList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionGrammarList;
  recognition.lang = 'ru-RU';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const words = document.querySelector('.words');

  recognition.onresult = function(e) {
    const last = e.results.length - 1;
    const command = e.results[last][0].transcript;
    console.log(command);
    words.textContent = command;
    document.querySelector('#hidden-recognition-btn').click();
  };

  recognition.onspeechend = function() {
    recognition.stop();
  };

  recognition.onerror = function(e) {
    console.error(e.error);
  };

  document.querySelector('#start-recognition-btn').addEventListener('click', function() {
    recognition.start();
  });

});
