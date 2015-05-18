/**
 * Created by ruchyp on 4/21/2015.
 */

angular.module('invoice').factory('invoiceService', function () {
    return ({
        counter: 0,
        invoices: [{
            id: "INV1",
            selectedCustomer: {
                name: "John",
                id: "Cust1",
                address: {
                    street: "bavdhan", city: "Pune",
                    postal: "411021"
                },
                phone: "9657191672"
            },
            items: [{name: 'Iphone 6', quantity:3 , cost: 52000, tottalCost:156000}]
        },{
            id: "INV2",
            selectedCustomer: {
                name: "Mary",
                id: "Cust2",
                address: {
                    street: "bavdhan", city: "Pune",
                    postal: "411021"
                },
                phone: "9930960145"
            },
            items: [{name: 'Iphone 6', quantity:2 , cost: 52000, tottalCost:104000}]
        }],
        createInvoice: function (invoice) {
            this.invoices.push(invoice);
        }
    })
})