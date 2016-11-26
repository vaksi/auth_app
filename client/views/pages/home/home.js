Template.home.rendered = function(){
    console.log(currentUser)
};
Template.home.helpers({
    currentUser: function() {
        return Session.get('currentUser');
    },

});
