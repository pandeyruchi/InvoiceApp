/**
 * Created by ruchyp on 4/23/2015.
 */

angular.module('invoice').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('invoice', {
            url: 'invoice',
            templateUrl: 'app/invoice/invoice.html',
            controller: 'invoiceCtrl'
        })
        .state('invoiceList', {
            url: 'invoiceList',
            templateUrl: 'app/invoice/invoiceList.html',
            controller: 'invoiceCtrl'
        })
        .state('invoiceList.customerDetails', {
            url: '/customerDetails:id',
            templateUrl: 'app/invoice/invoiceList.customerDetails.html',
            controller: 'invoiceCtrl'
        })
})
