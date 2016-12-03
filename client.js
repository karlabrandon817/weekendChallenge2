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
    var showStudents = function() {
        for (var i = 0; i < tauStudentArr.length; i++) {
            outputText += '<img src="' + tauStudentArr[i].picUrl + '" />';
            outputText += '<p>' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>';
            outputText += '<p>' + tauStudentArr[i].info + '</p>';
        }
        $('#tauStudents').html(outputText);
    };


}); //end of doc ready function
