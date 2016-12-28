var tauStudentArr = [];
var outputText = '';
var i = 0;

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
                  //  displayStudents(tauStudentArr);
                } //end for loop
                  displayStudents();
            }//end ajax success function
        });
    }; //end getStudentInfo function
    getStudentInfo();


    //display first student in DOM
    var displayStudents = function() {
        // console.log('in displayStudents');
      var $container = $('#tauStudents');
      $container.fadeOut(function(){
        outputText = '<p>' + '<strong>' + "Name:" + '</strong>' + ' ' + tauStudentArr[i].first_name + ' ' + tauStudentArr[i].last_name + '</p>' +
            '<img class="picture" src="' + tauStudentArr[i].picUrl + '">' +
            '<p>' + '<strong>' + "About" + ' ' + tauStudentArr[i].first_name + ":" + '' + '</strong>' + ' ' + tauStudentArr[i].info + '</p>' +
            '<p class="dispStud">' + 'Displaying Student:' + ' ' + (tauStudentArr.indexOf(tauStudentArr[i]) + 1) + ' ' + 'out of' + ' ' + tauStudentArr.length;
        $('#tauStudents').html(outputText);
      });
      $container.fadeIn(1000);
    }; //end displayStudents function

    //next button function
    $('#nextButton').on('click', function() {
        i = i + 1;
        i = i % tauStudentArr.length;
        $("#tauStudents").fadeOut(1000);
        displayStudents();
    }); //end next button on click function

    //previous button function
    $('#prevButton').on('click', function() {
        if (i === 0) {
            i = tauStudentArr.length;
        }
        i = i - 1;
        displayStudents();
    }); //end prev button on click function

}); //end of doc ready function
