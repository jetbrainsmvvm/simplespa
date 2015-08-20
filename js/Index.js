/// <reference path="knockout-3.3.0.debug.js" />
/// <reference path="knockout-3.3.0.js" />
/// <reference path="jquery-2.1.4.intellisense.js" />
/// <reference path="jquery-2.1.4.js" />

$(document).ready(function () {
    $("#toggleDemo").hide();

    $("#click").click(function () {
        $("#toggleDemo").show('toggle');
    });

    $(".ExcludeorPreview").change(function () {
        selection = $(this).val();
        if (selection == 'Exclude') {
            $("#myModal").modal('show').css('top', '250px');
        }
    });

    //var DropdownviewModel = {
    //    availableYears: ko.observableArray(['2015', '2014', '2013', '2012']),
    //    chosenYears: ko.observableArray(['2015']),
    //    availableShowCount: ko.observableArray(['Show 15', 'Show 25', 'Show 50']),
    //    chosenShowCount: ko.observableArray(['Show 50']),
    //    availableStates: ko.observableArray(['','State 1', 'State 2', 'State 3', 'State 4']),
    //    chosenStates: ko.observableArray([])
    //};
    //ko.applyBindings(DropdownviewModel);

    var viewModel = function () {
        var self = this;
        self.person = ko.observableArray([
            { memberName: "Daniel Weber", primaryID: 'XYZ09988', ssn: 'XXX-XX-1852', dob: '12/10/1982', addressLine1: '58 Maples Aye', addressLine2: '', city: 'Manhattan', state: 'NY', zipcode: '10001'},
            { memberName: "James Philips", primaryID: 'DTS66555', ssn: 'XXX-XX-4561', dob: '06/30/1955', addressLine1: '87 North Ave', addressLine2: '', city: 'Brooklyn', state: 'NY', zipcode: '11256'},
            { memberName: "Jhon Doe", primaryID: 'ABC01203', ssn: 'XXX-XX-1234', dob: '01/01/1965', addressLine1: '123 Brooks Ave', addressLine2: '', city: 'Brooklyn', state: 'NY', zipcode: '11256' },
            { memberName: "Peter Hawkins", primaryID: 'LOC01203', ssn: 'XXX-XX-1234', dob: '01/01/1946', addressLine1: '123 Elm Street', addressLine2: '', city: 'Brooklyn', state: 'NY', zipcode: '1234' },
            { memberName: "Stacy Adams", primaryID: 'TPM05544', ssn: 'XXX-XX-7451', dob: '04/05/1966', addressLine1: '78 ElmhurstAve', addressLine2: '', city: 'Long Beach', state: 'NJ', zipcode: '08008' },
            { memberName: "Thomas Anderson", primaryID: 'XER01853', ssn: 'XXX-XX-1234', dob: '', addressLine1: '25 Menlo Ave', addressLine2: '', city: 'Edison', state: 'NJ', zipcode: '08820' },
            { memberName: "James Taylor", primaryID: 'ABC01203', ssn: 'XXX-XX-1354', dob: '03/01/1965', addressLine1: '12 Spike street', addressLine2: '', city: 'Brooklyn', state: 'NY', zipcode: '1234' },
            { memberName: "Adam Thomas", primaryID: 'LOC05544', ssn: 'XXX-XX-7451', dob: '04/06/1966', addressLine1: '78 Main Ave', addressLine2: '', city: 'Long Beach', state: 'NJ', zipcode: '08008' },
            { memberName: "John Muller", primaryID: 'XER01803', ssn: 'XXX-XX-1234', dob: '05/04/1974', addressLine1: '25 Wood Ave', addressLine2: '', city: 'Edison', state: 'NJ', zipcode: '08820' },
            { memberName: "James Madison", primaryID: 'XER01853', ssn: 'XXX-XX-1234', dob: '02/03/1965', addressLine1: '25 Menlo Ave', addressLine2: '', city: 'Edison', state: 'NJ', zipcode: '08008' },
            { memberName: "Daniel Weber", primaryID: 'XYZ09988', ssn: 'XXX-XX-1852', dob: '12/10/1982', addressLine1: '58 Maples Aye', addressLine2: '', city: 'Manhattan', state: 'NY', zipcode: '10001' },
            { memberName: "James Philips", primaryID: 'DTS66555', ssn: 'XXX-XX-4561', dob: '06/30/1955', addressLine1: '87 North Ave', addressLine2: '', city: 'Brooklyn', state: 'NY', zipcode: '11256' },
            { memberName: "Jhon Doe", primaryID: 'ABC01203', ssn: 'XXX-XX-1234', dob: '01/01/1965', addressLine1: '123 Brooks Ave', addressLine2: '', city: 'Brooklyn', state: 'NY', zipcode: '11256' },
            { memberName: "Peter Hawkins", primaryID: 'LOC01203', ssn: 'XXX-XX-1234', dob: '01/01/1946', addressLine1: '123 Elm Street', addressLine2: '', city: 'Brooklyn', state: 'NY', zipcode: '1234' },
            { memberName: "Stacy Adams", primaryID: 'TPM05544', ssn: 'XXX-XX-7451', dob: '04/05/1966', addressLine1: '78 ElmhurstAve', addressLine2: '', city: 'Long Beach', state: 'NJ', zipcode: '08008' },
            { memberName: "Thomas Anderson", primaryID: 'XER01853', ssn: 'XXX-XX-1234', dob: '', addressLine1: '25 Menlo Ave', addressLine2: '', city: 'Edison', state: 'NJ', zipcode: '08820' },
            { memberName: "James Taylor", primaryID: 'ABC01203', ssn: 'XXX-XX-1354', dob: '03/01/1965', addressLine1: '12 Spike street', addressLine2: '', city: 'Brooklyn', state: 'NY', zipcode: '1234' },
            { memberName: "Adam Thomas", primaryID: 'LOC05544', ssn: 'XXX-XX-7451', dob: '04/06/1966', addressLine1: '78 Main Ave', addressLine2: '', city: 'Long Beach', state: 'NJ', zipcode: '08008' },
            { memberName: "John Muller", primaryID: 'XER01803', ssn: 'XXX-XX-1234', dob: '05/04/1974', addressLine1: '25 Wood Ave', addressLine2: '', city: 'Edison', state: 'NJ', zipcode: '08820' },
            { memberName: "James Madison", primaryID: 'XER01853', ssn: 'XXX-XX-1234', dob: '02/03/1965', addressLine1: '25 Menlo Ave', addressLine2: '', city: 'Edison', state: 'NJ', zipcode: '08008' }
        ]);
		function modal(memberName,primaryID,ssn,dob,addressLine1,addressLine2,city,state,zipcode){
			ExcludedmemberName:ko.observable(memberName),
			ExcludedExcludedprimaryID:ko.observable(primaryID),
			Excludedssn:ko.observable(ssn),
			Excludeddob:ko.observable(dob),
			ExcludedaddressLine1:ko.observable(addressLine1),
			ExcludedaddressLine2:ko.observable(addressLine2),
			Excludedcity:ko.observable(city),
			Excludedstate:ko.observable(state),
			Excludedzipcode:ko.observable(zipcode)
		}
        modalPerson = ko.observableArray(new modal(memberName,primaryID,ssn,dob,addressLine1,addressLine2,city,state,zipcode);)
        var personCount = self.person().length;
        console.log(personCount)
        self.availableActions = [{ Name: "Preview 1095-B", Value: "Preview" }, { Name: "Exclude from Batch", Value: "Exclude" }];
		//actionsValues = ko.observable();
        availableYears = ko.observableArray(['2015', '2014', '2013', '2012']);
        availableShowCount = ko.observableArray([{ Name: "Show 15", Value: 15 }, { Name: "Show 25", Value: 25 }, { Name: "Show 50", Value: 50 }]);
        availableStates = ko.observableArray([{ Name: "", Value: "" }, { Name: "NY", Value: "NY" }, { Name: "NJ", Value: "NJ" }, { Name: "NU", Value: "NU" }]);
        showExclude = function (person) {
			console.log(person);
			var selection=$('#dropdown').val();
            console.log(selection);
            if (selection == "Preview") {
                alert(person.memberName);
                console.log(selection);
            } else if (selection == "Exclude") {
                modalPerson.push(new person);
                $("#myModal").modal('show').css('top', '250px');
                console.log(selection);
            }

        }
        showCount = function (event, person) {
            count = $('#count').val();
            alert(count);
            if (count == 15) {
                this.person.splice(count, personCount);
            }
            else if (count == 25) {
                this.person.splice(count, personCount);
            }
            else if (count == 50) {
                 this.person.splice(count, personCount);
            }
            else{
                alert("Select any one");
            }
        }
    }
    ko.applyBindings(new viewModel());
});