/**
 * Created by ruchyp on 4/21/2015.
 */

angular.module('invoice').factory('invoiceService', function () {
    return ({
        counter: 0,
        invoices: [{
            id: "INV1",
            selectedCustomer: {
                name: "Rahul Shukla",
                id: "Cust1",
                address: {
                    street: "bavdhan", city: "Pune",
                    postal: "411021"
                },
                phone: "9657191672"
            },
            selectedItem: {"id": 0, "name": 'Iphone 6', cost: 52000},
            quantity: 3,
            totalCost: 156000
        },{
            id: "INV2",
            selectedCustomer: {
                name: "Rahul Shukla",
                id: "Cust1",
                address: {
                    street: "bavdhan", city: "Pune",
                    postal: "411021"
                },
                phone: "9657191672"
            },
            selectedItem: {"id": 0, "name": 'Iphone 6', cost: 52000},
            quantity: 2,
            totalCost: 104000
        }],
        createInvoice: function (invoice) {
            this.invoices.push(invoice);
        }
    })
})