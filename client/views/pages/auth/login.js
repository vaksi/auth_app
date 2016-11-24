if (Meteor.isClient) {
    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var email = event.target.email.value;
            var password = event.target.password.value;
            var payload = {
                data : {
                    'email': email,
                    'password': password,
                }
            };
            HTTP.call("POST", "http://localhost:3100/v1/login", payload,
                function (error, result) {
                    if (error) {
                        console.log(error);

                    }else{
                        console.log('success');
                        //Session.set("twizzled", true);
                    }
            });
        }
    });
}
