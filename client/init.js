
  // counter starts at 0
Session.setDefault('counter', 0);
  
$(document).ready(function(){
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
});

Template.hello.helpers({

});

Template.hello.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    }
});