/**
 * Created by ruchyp on 4/21/2015.
 */
angular.module('customer').controller('customerCtrl', ['$scope', 'customerService', 'invoiceService','$filter','$stateParams',
    function ($scope, customerService, invoiceService,$filter,$stateParams) {
        $scope.newCustomer = {};
        $scope.filter =$stateParams.name;
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

        $scope.invoiceDetails = $filter('invoiceFilter')(invoices,$stateParams.id);

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
