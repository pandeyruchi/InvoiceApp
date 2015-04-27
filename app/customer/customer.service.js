/**
 * Created by ruchyp on 4/21/2015.
 */
angular.module('customer').factory('customerService', [function () {
    return ({
        customers: [{
            name: "John",
            id: "Cust1",
            address: {
                street: "bavdhan", city: "Pune",
                postal: "411021"
            },
            phone: "9657191672"
        }, {
            name: "Mary",
            id: "Cust2",
            address: {
                street: "bavdhan", city: "Pune",
                postal: "411021"
            },
            phone: "9930960145"
        }],
        customer: {},
        createCustomer: function (customer) {
            this.customers.push(customer);
        }


    });


}]);