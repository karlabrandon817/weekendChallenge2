var tauStudentArr = [];

$(document).ready(function() {

    var getStudentInfo = function() {
        //make ajax call
        $.ajax({
            url: 'http://devjana.net/support/tau_students.json',
            dataType: 'JSON',
            success: function(data) {
                console.log('success, received:', data);
                console.log('data.tau:', data.tau);
                //loop through student data and push to tauStudentArr
                for (var i = 0; i < data.tau.length; i++) {
                    tauStudentArr.push(data.tau[i]);
                } //end for loop
            }
        });
    }; //end getStudentInfo function
    getStudentInfo();


    // var initialOutput = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[0].first_name + ' ' + tauStudentArr[0].last_name + '</p>' +
    //     //'<p>' + '<strong>' + "About" + ' ' + tauStudentArr[0].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[0].info + '</p>' +
    //     //'<p>' + 'Displaying Student:' + ' ' + (tauStudentArr.indexOf(tauStudentArr[0]) + 1) + ' ' + 'out of' + ' ' + tauStudentArr.length;
    //     $('#tauStudents').html(initialOutput);


    var outputText = '';

    var i = 0;

    $('#initialDisplay').on('click', function() {
        outputText = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[0].first_name + ' ' + tauStudentArr[0].last_name + '</p>' +
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[0].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[0].info + '</p>' +
            '<p>' + 'Displaying Student:' + ' ' + (tauStudentArr.indexOf(tauStudentArr[0]) + 1) + ' ' + 'out of' + ' ' + tauStudentArr.length;
        $('#tauStudents').html(outputText);
    });

    $('#nextButton').on('click', function() {
        i = i + 1;
        i = i % tauStudentArr.length; // if we've gone too high, start from `0` again
        //show student name and info on DOM
        outputText = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>' +
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[i].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[i].info + '</p>' +
            '<p>' + 'Displaying Student:' + ' ' + (tauStudentArr.indexOf(tauStudentArr[i]) + 1) + ' ' + 'out of' + ' ' + tauStudentArr.length;
        $('#tauStudents').html(outputText);
        console.log(tauStudentArr[i]);
    }); //end next button on click function


    $('#prevButton').on('click', function() {
        if (i === 0) { // i would become 0
            i = tauStudentArr.length;
        }
        i = i - 1; // decrease by one
        //show student name and info on DOM
        outputText = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>' +
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[i].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[i].info + '</p>' +
            '<p>' + 'Displaying Student:' + ' ' + (tauStudentArr.indexOf(tauStudentArr[i]) + 1) + ' ' + 'out of' + ' ' + tauStudentArr.length;
        $('#tauStudents').html(outputText);
        console.log(tauStudentArr[i]);
    }); //end prev button on click function




}); //end of doc ready function
