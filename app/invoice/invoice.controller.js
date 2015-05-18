/**
 * Created by ruchyp on 4/21/2015.
 */

angular.module('invoice')
    .controller('invoiceCtrl', ['$scope', 'customerService', 'invoiceService', '$stateParams',
        function ($scope, customerService, invoiceService, $stateParams) {


            $scope.invoices = invoiceService.invoices;
            $scope.isCreating = false;

            initInvoice();


            function initInvoice() {
                $scope.newInvoice = {};
                $scope.newInvoice.id = getUniqueId();
            }

            $scope.customers = customerService.customers;

            $scope.items = [
                {"id": 0, "name": 'Iphone 6', cost: 52000},
                {"id": 1, "name": 'Iphone 6 plus', cost: 60000},
                {"id": 2, name: 'Samsung Galaxy Core', cost: 15000}
            ]

            /* if($scope.newInvoice.selectedItem !== undefined){
             var total = $scope.newInvoice.quantity * $scope.newInvoice.selectedItem.cost;
             $scope.newInvoice.totalCost = total;*/

            /* $scope.calculateCost = function () {
             var total = $scope.newInvoice.quantity * $scope.newInvoice.selectedItem.cost;
             $scope.newInvoice.totalCost = total;
             }*/


            $scope.customerDetails = {};

            $scope.customerDetails.id = $stateParams.id;

            for (var cust = 0, len = $scope.customers.length; cust < len; cust += 1) {
                if ($scope.customers[cust].id === $scope.customerDetails.id) {
                    $scope.customerDetails = $scope.customers[cust];
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
                return 'INV' + (invoiceService.invoices.length + 1);
            }

            function resetCreateForm() {
                $scope.newItem = {
                    id: getUniqueId(),
                    selectedCustomer: '',
                    selectedItem: '',
                    quantity: '',
                    totalCost: ''
                }
            }

            var sum = 0;
            $scope.currentInvoices = [];


            $scope.newItem = {};
            $scope.selectedItems = [];
            $scope.addItem = function (item) {
                item.totalCost = item.cost*item.quantity;
                $scope.selectedItems.push(item);
                $scope.newItem = {};
            }

            function resetForm(currentInvoice) {
                $scope.selectedItems = [];
                $scope.newItem = {};
                initInvoice();
            }

            $scope.createInvoice = function (invoice) {
                invoice.items = $scope.selectedItems;
                invoiceService.createInvoice(invoice);
                resetForm();
            }
            function calculateGrandTotal(currentInvoices) {
                var sum = 0;
                for (var item = 0, len = currentInvoices.length; item < len; item++) {
                    sum = sum + currentInvoices[item].totalCost;
                }
                $scope.newInvoice.grandTotal = sum;
            }

            $scope.calculateGrandTotal = calculateGrandTotal;
            $scope.resetForm = resetForm;
            $scope.resetCreateForm = resetCreateForm;
            $scope.startCreating = startCreating;
            $scope.cancelCreating = cancelCreating;
        }])
