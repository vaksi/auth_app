if (Meteor.isClient) {
    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var email = event.target.email.value;
            var password = event.target.password.value;
        }
    });
}
