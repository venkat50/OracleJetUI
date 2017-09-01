/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojmodel', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource'],
        function (oj, ko, $) {

            function CustomerViewModel() {
                var self = this;
                //self.url = "https://jerseyservicedemo-gse00002014.apaas.em2.oraclecloud.com/myapp/customers/all";
                //self.url = "http://localhost:8080/myapp/customers/all";
                self.url = "https://private-5b9c1e-customers33.apiary-proxy.com/myapp/customers/all"




                //var Customer = oj.Model.extend({url: self.url});
                var Customer = oj.Model.extend();
                var Customers = oj.Collection.extend({url: self.url,
                    model: new Customer()});

                var customers = new Customers();

                
                customers.fetch({
                    success: function (collection) {
                        console.log("Customers.models: success ");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log("Error " + textStatus, errorThrown);
                    }

                });
                self.datasource = new oj.CollectionTableDataSource(customers);

            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new CustomerViewModel();
        });
