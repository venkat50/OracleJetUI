/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojchart'],
        function (oj, ko, $) {

            var barItems = [32, 55, 20];
            var barGroups = ["Java", "JavaScript", "C"];
            var barSeries = [{items: []}];
            function ChartModel() {
                var self = this;
                var url = "https://private-7de07-venkat50.apiary-mock.com/questions";
                /* toggle button variables */
                self.stackValue = ko.observable('off');
                self.orientationValue = ko.observable('vertical');
                
                /* chart data */
                self.barSeriesValue = ko.observableArray(barSeries);
                self.barGroupsValue = ko.observableArray(barGroups);
                

                $.getJSON(url, function (data) {

                    barGroups = data[0].choices.map(function (item) {
                        return item.choice;
                    });
                    self.barGroupsValue(barGroups);
                    barItems = data[0].choices.map(function (item) {
                        return item.votes;
                    });
                    self.barSeriesValue([{items: barItems}]);
                });
            }
            var chartModel = new ChartModel();
            return chartModel;
        });	