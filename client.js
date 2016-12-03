var tauStudentArr = [];

$(document).ready(function() {
    console.log('George and Frank');

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



}); //end of doc ready function
