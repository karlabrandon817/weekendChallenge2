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


    var outputText = '';
    // var showStudents = function() {
    //     for (var i = 0; i < tauStudentArr.length; i++) {
    //         outputText += '<img src="' + tauStudentArr[i].picUrl + '" />';
    //         outputText += '<p>' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>';
    //         outputText += '<p>' + tauStudentArr[i].info + '</p>';
    //     }
    //     $('#tauStudents').html(outputText);
    // };

    var i = 0;
    $('#nextButton').on('click', function() {
        i = i + 1;
        i = i % tauStudentArr.length; // if we've gone too high, start from `0` again
        //show student name and info on DOM
        outputText = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>' +
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[i].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[i].info + '</p>';
        //'<p>' + 'Displaying #:' + ' ' + tauStudentArr[i].objectPosition + ' ' + 'out of' + ' ' + tauStudentArr.length;
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
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[i].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[i].info + '</p>';
        //'<p>' + 'Displaying #:' + ' ' + tauStudentArr[i].length + ' ' + 'out of' + ' ' + tauStudentArr.length;
        $('#tauStudents').html(outputText);
        console.log(tauStudentArr[i]);
    }); //end prev button on click function




}); //end of doc ready function
