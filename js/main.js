$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $('.slider').slick({
        prevArrow:"<img class='a-left control-c prev slick-prev' src='images/blue-left-arrow.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='images/blue-right-arrow.png'>"
    });
});

const myQuiz = [
  {
    'q': 'Which group of items are NOT included on the Golden Record?',
    'options': [
      'Images',
      'Songs',
      'Goodbyes',
      'Sounds'
    ],
    'correctIndex': 2,
    'correctResponse': 'Correct!',
    'incorrectResponse': 'Incorrect'
  },
  {
    'q': 'What is the name of the ship that the Golden Record is on?',
    'options': [
      'Pioneer',
      'Voyager',
      'Conquistador',
      "Colonizer"
    ],
    'correctIndex': 1,
    'correctResponse': 'Correct!',
    'incorrectResponse': 'Incorrect'
  },
  {
    'q': 'Who was the chair of the committee?',
    'options': [
      'Carl Sagan',
      'Bill Nye',
      'Neil Degrasse Tyson',
      'Mrs. Frizzle'
    ],
    'correctIndex': 0,
    'correctResponse': 'Correct!',
    'incorrectResponse': 'Incorrect'
  },

]

$('#quiz').quiz({
  questions: myQuiz
});
