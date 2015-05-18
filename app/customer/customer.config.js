/**
 * Created by ruchyp on 4/22/2015.
 */

angular.module('customer').config(function($stateProvider,$urlRouterProvider){


    $stateProvider
        .state('customer',{
        url:'customer',
        templateUrl:'app/customer/customer.html',
        controller:'customerCtrl'
    })
   .state('customerList',{
        url:'customerList',
        templateUrl:'app/customer/customerList.html',
        controller:'customerCtrl'
    })
        .state('customerList.invoiceDetails',{
            url:'/invoiceDetails:id',
            templateUrl:'app/customer/customerList.invoiceDetails.html',
            controller:'customerCtrl'
        })
        .state('customerInfo',{
            url:'/customerInfo:name',
            templateUrl:'app/customer/customerInfo.html',
            controller:'customerCtrl'
        })
        .state('customerInfo.invoiceDetails',{
            url:'/customerInfo:id',
            templateUrl:'app/customer/customerList.invoiceDetails.html',
            controller:'customerCtrl'
        })
})
