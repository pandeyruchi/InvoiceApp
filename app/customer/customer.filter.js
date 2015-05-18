/**
 * Created by ruchyp on 4/28/2015.
 */
angular.module('customer').filter('customerFilter', function () {
    var filter = function (customers, name) {
        var filteredCustomers = [];
        for (var cust = 0, len = customers.length; cust < len; cust += 1) {
            if (customers[cust].name === name) {
                filteredCustomers.push(customers[cust]);
            }
        }
        return filteredCustomers;
    }
    return filter;
})

    .filter('invoiceFilter', function () {
        var filter = function (invoices, id) {

            var invoiceDetails = {};

            invoiceDetails.id = id;

            for (var invoice = 0, len = invoices.length; invoice < len; invoice += 1) {
                if (invoices[invoice].id === invoiceDetails.id) {
                    invoiceDetails = invoices[invoice];
                }
            }
            return invoiceDetails;
        }
        return filter;
    })