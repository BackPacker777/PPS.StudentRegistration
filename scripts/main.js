/* AUTHOR: hbates@northmen.org
*  VERSION: 10.15.2015.1.0
*  CREATED: 10.15.2015
*  TO DO:
*/

"use strict";

var $day, $month, $year, $weekDay;
var cityStateData = [];
var cityState = [];

function readZipCodes() {
     var zipCodes = [];
     $.ajax({
          url: 'data/ZipCodeDatabase.csv',
          contentType: "text/csv",
          async: false,
          success: function(text) {
               zipCodes = text.split("\n");
          }
     });
     return zipCodes;
}

function createCityStateData() {
     var zipCodeData = readZipCodes();
     for (var i = 0; i < zipCodeData.length; i++) {
          cityStateData[i] = zipCodeData[i].split(",");
     }
}

function populateCityState(zipCode) {
     var $zipCodeLower = zipCode.toLowerCase();
     for (var i = 0; i < cityStateData.length; i++) {
          if ($zipCodeLower === cityStateData[i][0]) {
               cityState[0] = cityStateData[i][1];
               cityState[1] = cityStateData[i][2];
          }
     }
}

function loadCityStates(whom) {
     var actualZip = ('#' + whom + "Zip");
     $(actualZip).change(function() {
          populateCityState($(actualZip).val());
          sessionStorage.setItem(whom + 'City',cityState[0]);
          sessionStorage.setItem(whom + 'State',cityState[1]);
     });
}

function setDate() {
     var $date = new Date();
     $month = $date.getMonth() + 1;
     $day = $date.getDate();
     $year = $date.getFullYear();
     $weekDay = $date.getDay();
     return $month + "/" + $day + "/" + $year;
}

function setAddresses() {
     $('#livesWith').on('change', (function() {
          if ($('select[id=livesWith]').val() == 0 || $('select[id=livesWith]').val() == 1) {
               $('#dadAddress').fadeOut();
               $('#momAddress').fadeOut();
               $('#guardianInfo').fadeOut();
               $('#guardianAddress').fadeOut();
          } else  if ($('select[id=livesWith]').val() == 2 || $('select[id=livesWith]').val() == 4) {
               $('#dadAddress').fadeIn();
               $('#momAddress').fadeOut();
               $('#guardianInfo').fadeOut();
               $('#guardianAddress').fadeOut();
          } else if ($('select[id=livesWith]').val() == 3 || $('select[id=livesWith]').val() == 5) {
               $('#momAddress').fadeIn();
               $('#dadAddress').fadeOut();
               $('#guardianInfo').fadeOut();
               $('#guardianAddress').fadeOut();
          } else if ($('select[id=livesWith]').val() == 6) {
               $('#momAddress').fadeOut();
               $('#dadAddress').fadeOut();
               $('#guardianInfo').fadeIn();
               $('#guardianAddress').fadeIn();
          }
     }));

     /*$('#isNotMomAddress').click(function() {
          $('#momAddress').toggle(this.checked);
     });
     $('#isNotDadAddress').click(function() {
          $('#dadAddress').toggle(this.checked);
     });*/
}

window.onload = function() {
     createCityStateData();
     loadCityStates("student");
     $('#date').text(setDate());
     setAddresses();
     $(document).load().scrollTop(0); //ensure page starts at top
};