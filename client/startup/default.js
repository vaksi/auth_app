// Run this when the meteor app is started
// Run this when the meteor app is started
Meteor.startup(function () {
    Meteor.isAuthenticated = function() {
        if(typeof Meteor.authenticated() === 'undefined' || Meteor.authenticated() == null){
            return false;
        } else {
            return true;
        }
    };

    Meteor.setAuthenticated = function(authenticated) {
        Session.setAuth('authenticated', authenticated);
    };

    Meteor.authenticated = function() {
        return Session.get('authenticated');
    };

    Meteor.token = function() {
        if(Meteor.authenticated()) return Meteor.authenticated().token;
        else return
    }

    Meteor.user = function() {
        if(Meteor.authenticated()) return Meteor.authenticated().user;
        else return
    };

    Meteor.user = function() {
        var user = Session.get('user');

        if(typeof user == 'undefined') {

            if(typeof Meteor.authenticated() !== 'undefined' && typeof Meteor.authenticated().user !== 'undefined') {
                user = Meteor.authenticated().user;
                Meteor.setCustomer(user);
                return user;
            } else {
                HTTP.call("POST", "http://localhost:3100/v1/login", {},
                    function (error, result) {
                        if(!err) {
                            user = result;
                            Meteor.setUser(user);
                        }
                        return user;
                    }
                );
            }
        } else return user;
    };

    Meteor.setUser = function(user) {
        Session.setAuth('user', user);
    };
    
});

