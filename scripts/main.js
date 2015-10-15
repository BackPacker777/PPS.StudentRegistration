/* AUTHOR: hbates@northmen.org
*  VERSION: 10.15.2015.1.0
*  CREATED: 10.15.2015
*  TO DO:
*/

"use strict";

var $day, $month, $year, $weekDay;
var $cityStateData = [];
var $cityState = [];

function readZipCodes() {
     var $zipCodes = [];
     $.ajax({
          url: 'data/ZipCodeDatabase.csv',
          contentType: "text/csv",
          async: false,
          success: function(text) {
               $zipCodes = text.split("\n");
          }
     });
     return $zipCodes;
}

function createCityStateData() {
     var $zipCodeData = readZipCodes();
     for (var $i = 0; $i < $zipCodeData.length; $i++) {
          $cityStateData[$i] = $zipCodeData[$i].split(",");
     }
}

function populateCityState($zipCode) {
     var $zipCodeLower = $zipCode.toLowerCase();
     for (var $i = 0; $i < $cityStateData.length; $i++) {
          if ($zipCodeLower === $cityStateData[$i][0]) {
               $cityState[0] = $cityStateData[$i][1];
               $cityState[1] = $cityStateData[$i][2];
          }
     }
}

function loadCityStates($zip) {
     var $actualZip = ($zip + "Zip");
     var $city = ($zip + "City");
     var $state = ($zip + "State");
     document.getElementById($actualZip).onchange = function() {
          populateCityState(document.getElementById($actualZip).value);
          document.getElementById($city).value = $cityState[0];
          document.getElementById($state).value = $cityState[1];
     }
}

function setDate() {
     var $date = new Date();
     $month = $date.getMonth() + 1;
     $day = $date.getDate();
     $year = $date.getFullYear();
     $weekDay = $date.getDay();
     var $fullDate = ($month + "/" + $day + "/" + $year);
     return $fullDate;
}

window.onload = function() {
     createCityStateData();
     //loadCityStates("patient");
     document.getElementById("date").innerText = setDate();
     $(document).load().scrollTop(0); //ensure page starts at top
};