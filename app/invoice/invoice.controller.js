/**
 * Created by ruchyp on 4/21/2015.
 */

angular.module('invoice')
    .controller('invoiceCtrl', ['$scope', 'customerService', 'invoiceService','$stateParams',
        function ($scope, customerService, invoiceService,$stateParams) {

        $scope.newInvoice = [];
        $scope.invoices=invoiceService.invoices;
        $scope.isCreating = false;

        $scope.newInvoice.id = getUniqueId();

       $scope.customers = customerService.customers;

        $scope.items = [
            {"id": 0, "name": 'Iphone 6', cost: 52000},
            {"id": 1, "name": 'Iphone 6 plus', cost: 60000},
            {"id": 2, name: 'Samsung Galaxy Core', cost: 15000}
        ]

        $scope.calculateCost = function () {
            var total = $scope.newInvoice.quantity * $scope.newInvoice.selectedItem.cost;
            $scope.newInvoice.totalCost = total;
        }

            $scope.customerDetails ={};

            $scope.customerDetails.id = $stateParams.id;

            for (var cust = 0, len = $scope.customers.length; cust < len; cust += 1) {
                if ($scope.customers[cust].id === $scope.customerDetails.id) {
                    $scope.customerDetails=$scope.customers[cust];
                }
            }

            function startCreating() {
            $scope.isCreating = true;
            resetCreateForm();
        }

        function cancelCreating() {
            $scope.isCreating = false;
            --invoiceService.counter;
        }

        function getUniqueId() {
            return 'INV' + (invoiceService.invoices.length+1);
        }

        function resetCreateForm() {
            $scope.newInvoice = {
                id: getUniqueId(),
                selectedCustomer: '',
                selectedItem: '',
                quantity: '',
                totalCost: ''
            }
        }



        $scope.createInvoice = function (invoice) {
            $scope.newInvoice = invoice;
            invoiceService.createInvoice(invoice);
            resetCreateForm();
        }


        $scope.resetCreateForm = resetCreateForm;
        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
    }])
