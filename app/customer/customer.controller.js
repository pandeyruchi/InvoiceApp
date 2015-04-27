/**
 * Created by ruchyp on 4/21/2015.
 */
angular.module('customer').controller('customerCtrl', ['$scope', 'customerService', 'invoiceService','$stateParams',
    function ($scope, customerService, invoiceService,$stateParams) {
        $scope.newCustomer = {};

        $scope.createCustomer = function (customer) {
            $scope.newCustomer = customer;
            customerService.createCustomer(customer);
            resetCreateForm();
            alert('customer created');
        }

        $scope.customers = customerService.customers;

       /*Create dictionary */
        var invoices = invoiceService.invoices;
        $scope.invoiceMap = {};
        for (var i = 0; i < invoices.length; i++) {
            var cus = invoices[i].selectedCustomer.id;
            if ($scope.invoiceMap[cus] === undefined) {
                var temp = [];
                temp.push(invoices[i]);
                $scope.invoiceMap[cus]=temp;
            }
            else {
                $scope.invoiceMap[cus].push(invoices[i]);
            }
        }

        $scope.invoiceDetails = {};

        $scope.invoiceDetails.id = $stateParams.id;

        for (var invoice = 0, len = invoices.length; invoice < len; invoice += 1) {
            if (invoices[invoice].id === $scope.invoiceDetails.id) {
                $scope.invoiceDetails=invoices[invoice];
            }
        }

        $scope.customerInfo ={};

        $scope.customerInfo.name = $stateParams.name;

        for (var cust = 0, len = $scope.customers.length; cust < len; cust += 1) {
            if ($scope.customers[cust].name === $scope.customerInfo.name) {
                $scope.customerInfo=$scope.customers[cust];
            }
        }

        $scope.resetCreateForm = resetCreateForm;
        $scope.getUniqueId = getUniqueId;
        $scope.cancelCreating = cancelCreating;
        $scope.isCreating = false;
        $scope.startCreating = startCreating;

        function getUniqueId() {
            return 'CUST' + (customerService.customers.length+1);
        }

        function startCreating() {
            $scope.isCreating = true;
            $scope.newCustomer.id = getUniqueId();
            resetCreateForm();
        }

        function cancelCreating() {
            $scope.isCreating = false;
        }


        function resetCreateForm() {
            $scope.newCustomer = {
                id: getUniqueId(),
                name: '',
                phone: '',
                address: {street: '', city: '', postal: ''}
            }
        }

    }]);
