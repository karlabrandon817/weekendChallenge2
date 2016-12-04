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
                    displayStudents(tauStudentArr);
                } //end for loop
            }
        });
    }; //end getStudentInfo function
    getStudentInfo();

    var i = 0;

    var outputText = '';
    //display first student in DOM
    var displayStudents = function(student, index) {
        // console.log('in displayStudents');
        outputText = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>' +
            '<img class="picture" src="' + tauStudentArr[i].picUrl + '">' +
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[i].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[i].info + '</p>' +
            '<p id="dispStud">' + 'Displaying Student:' + ' ' + (tauStudentArr.indexOf(tauStudentArr[i]) + 1) + ' ' + 'out of' + ' ' + tauStudentArr.length;
        $('#tauStudents').html(outputText);
    }; //end displayStudents function

    //next button function
    $('#nextButton').on('click', function() {
        i = i + 1;
        i = i % tauStudentArr.length; // if we've gone too high, start from `0` again
        //show student name and info on DOM
        outputText = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>' +
            '<img class="picture" src="' + tauStudentArr[i].picUrl + '">' +
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[i].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[i].info + '</p>' +
            '<p>' + 'Displaying Student:' + ' ' + (tauStudentArr.indexOf(tauStudentArr[i]) + 1) + ' ' + 'out of' + ' ' + tauStudentArr.length;
        $('#tauStudents').html(outputText);
        console.log(tauStudentArr[i]);
    }); //end next button on click function

    //previous button function
    $('#prevButton').on('click', function() {
        if (i === 0) { // i would become 0
            i = tauStudentArr.length;
        }
        i = i - 1; // decrease by one
        //show student name and info on DOM
        outputText = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>' +
            '<img class="picture" src="' + tauStudentArr[i].picUrl + '">' +
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[i].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[i].info + '</p>' +
            '<p>' + 'Displaying Student:' + ' ' + (tauStudentArr.indexOf(tauStudentArr[i]) + 1) + ' ' + 'out of' + ' ' + tauStudentArr.length;
        $('#tauStudents').html(outputText);
        console.log(tauStudentArr[i]);
    }); //end prev button on click function



    var addPeeps = function() {
        // loop through peeps arraay and add to document
        var outputText = $('#tauStudents').html();
        for (var i = 0; i < tauStudentArr.length; i++) {
            console.log('add peeps running');
            //outputText += '<button class="testButtonClass btn btn-danger" name="' + peeps[i] + '">' + peeps[i] + '</button>';
            outputText += '<button class="testButtonClass btn btn-success" name="' + tauStudentArr[i] + '">' + tauStudentArr[i] + '</button>';
        }
        $('#tauStudents').html(outputText);
    }; // end addPeeps

    // run addPeeps on doc ready
    addPeeps();









}); //end of doc ready function
