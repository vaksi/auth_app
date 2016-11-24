// Date
Template.registerHelper('formatDate', function(date) {
    return moment(date).format('DD/MM/YYYY');
});

// Account
Template.registerHelper('concatName', function(name){
    var n = "";
    if(name.first) n += name.first;
    if(name.middle) n += " " + name.middle;
    if(name.last) n += " " + name.last;

    return n;
});

// Address
Template.registerHelper('concatAddress', function(address){
    var n = "";
    if(address.address) n += address.address;
    if(address.district) n += ", " + address.district;
    if(address.village) n += ", " + address.village;
    if(address.city_regency) n += ", " + address.city_regency;
    if(address.province) n += ", " + address.province;
    if(address.zipcode) n += ", " + address.zipcode;
    
    return n;
});

// Order Items
Template.registerHelper('totalPrice', function(quantity, price){
    return quantity*price;
});