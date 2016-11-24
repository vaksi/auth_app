Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'routeNotFound'
});

// Default route
Router.route('/', function () {
    Router.go('auth/login');
}, {
    name: 'index'
});

Router.route('/auth/login', function () {
    this.render('login');
}, {
    name: 'login'
});


















































