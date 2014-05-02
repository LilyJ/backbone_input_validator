$(function(){
  var InputView = Backbone.View.extend({
    el: $('form#main'),
    events: {
      'keyup input': 'validate'
    },
    render: function () {
      this.$el.append('<input type="text" name="email" placeholder="Type your email here">');
    },
    validate: function () {
      var input = this.$('input').val();
      var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailReg.test(input)) {
        // do something
      }
    }
  });

  var inputView = new InputView()
  inputView.render();
});