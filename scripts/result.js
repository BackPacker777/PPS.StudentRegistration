/* AUTHOR: hbates@northmen.org
 *  VERSION: 10.04.2015.1.0
 *  CREATED: 10.2015
 *  TO DO: Fix Line 66;
 */

"use strict";

function displayData() {
//DATE & TIME-----------------------------------------------------------------------------------------------------------
	document.getElementById('day').innerText = sessionStorage.getItem('day');
	document.getElementById('date').innerText = sessionStorage.getItem('date');
	document.getElementById('incidentTime').innerText = sessionStorage.getItem('incidentTime');

//INJURED PERSON--------------------------------------------------------------------------------------------------------
	document.getElementById('lastName').innerText = sessionStorage.getItem('lastName');
	document.getElementById('firstName').innerText = sessionStorage.getItem('firstName');
	document.getElementById('gender').innerText = sessionStorage.getItem('gender');
	document.getElementById('dob').innerText = sessionStorage.getItem('dob');
	document.getElementById('age').innerText = sessionStorage.getItem('age');
	document.getElementById('height').innerText = sessionStorage.getItem('height');
	document.getElementById('weight').innerText = sessionStorage.getItem('weight');
	document.getElementById('patientStreet').innerText = sessionStorage.getItem('patientStreet');
	document.getElementById('patientCity').innerText = sessionStorage.getItem('patientCity');
	document.getElementById('patientState').innerText = sessionStorage.getItem('patientState');
	document.getElementById('patientZip').innerText = sessionStorage.getItem('patientZip');
	document.getElementById('email').innerText = sessionStorage.getItem('email');
	document.getElementById('occupation').innerText = sessionStorage.getItem('occupation');
	document.getElementById('homePhoneNum').innerText = sessionStorage.getItem('homePhoneNum');
	document.getElementById('cellPhoneNum').innerText = sessionStorage.getItem('cellPhoneNum');

//PATIENT HISTORY-------------------------------------------------------------------------------------------------------
	document.getElementById('priorInjury').innerText = sessionStorage.getItem('priorInjury');
	document.getElementById('yearInjured').innerText = sessionStorage.getItem('yearInjured');
	document.getElementById('hi').innerText = sessionStorage.getItem('hi');
	document.getElementById('correctiveLenses').innerText = sessionStorage.getItem('correctiveLenses');
	if (sessionStorage.getItem('glasses')) {
		var worn =     '<label class="radius secondary label">Lenses Worn?:</label>' +
					'<span id="worn"></span>';
		document.getElementById('glasses').innerHTML = worn;
		document.getElementById('worn').innerText = sessionStorage.getItem('glasses');
	}
	document.getElementById('meds').innerText = sessionStorage.getItem('meds');
	document.getElementById('ticketType').innerText = sessionStorage.getItem('ticketType');
	document.getElementById('group').innerText = sessionStorage.getItem('group');
	document.getElementById('allergies').innerText = sessionStorage.getItem('allergies');

//LOCATION--------------------------------------------------------------------------------------------------------------
	document.getElementById('location').innerText = sessionStorage.getItem('location');
	if (sessionStorage.getItem('whichLift')) {
		var lift =     '<label class="radius secondary label">Lift:</label>' +
						'<span id="whichLift"></span>';
		document.getElementById('hillLift').innerHTML = lift;
		document.getElementById('whichLift').innerText = sessionStorage.getItem('whichLift');
	} else if (sessionStorage.getItem('whichHill')) {
		var hill =     '<label class="radius secondary label">Hill:</label>' +
					'<span id="whichHill"></span>';
		var diff = 	'<label class="radius secondary label">Difficulty:</label>' +
					'<span id="difficulty"></span>';
		document.getElementById('hillLift').innerHTML = hill;
		document.getElementById('whichHill').innerText = sessionStorage.getItem('whichHill');
		document.getElementById('difficultyDiv').innerHTML = diff;
		document.getElementById('difficulty').innerText = sessionStorage.getItem('difficulty');
	}
	document.getElementById('specificLocation').innerText = sessionStorage.getItem('specificLocation');

//SKIING HISTORY--------------------------------------------------------------------------------------------------------
	document.getElementById('ability').innerText = sessionStorage.getItem('ability');
	document.getElementById('inLesson').innerText = sessionStorage.getItem('inLesson');
	if (sessionStorage.getItem('inLesson') == "Yes") {
		var inst =     '<label class="radius secondary label">Instructor:</label>' +
					'<span id="instructor"></span>';
		document.getElementById('instYep').innerHTML = inst;
		document.getElementById('instructor').innerText = sessionStorage.getItem('instructor');
	}
	document.getElementById('timesWhere').innerText = sessionStorage.getItem('timesWhere');
	if (sessionStorage.getItem('numTimesToday') !== null) {
		var numToday =     '<label class="radius secondary label">Times Today:</label>' +
						'<span id="numTimesToday"></span>';
		document.getElementById('timesToday').innerHTML = numToday;
		document.getElementById('numTimesToday').innerText = sessionStorage.getItem('numTimesToday');
	}
	if (sessionStorage.getItem('numTimesPrior') !== null) {
		document.getElementById('timesPrior').innerHTML = '<label class="radius secondary label">Times Prior:</label>' +
												'<span id="numTimesPrior"></span>';
		document.getElementById('numTimesPrior').innerText = sessionStorage.getItem('numTimesPrior');
	}
	document.getElementById('removedBy').innerText = sessionStorage.getItem('removedBy');

//EQUIPMENT-------------------------------------------------------------------------------------------------------------
	document.getElementById('type').innerText = sessionStorage.getItem('equipType');
	document.getElementById('owner').innerText = sessionStorage.getItem('owner');
	if (sessionStorage.getItem('owner') === "Area Rental" || sessionStorage.getItem('owner') === "Demo" || sessionStorage.getItem('owner') === "Other Rental") {
		document.getElementById('rentalEquipInfo').innerHTML = '<label class="radius secondary label">Ski Number:</label>' + " " +
												'<span id="skiNum"></span>' + "  " +
												'<label class="radius secondary label">Boot Number:</label>' + " " +
												'<span id="bootNum"></span>';

		document.getElementById('rentalInfo').innerHTML = '<label class="radius secondary label">Shop:</label>' + " " +
													'<span id="shopInfo"></span>';
		if (sessionStorage.getItem('skiNum')) {
			document.getElementById('skiNum').innerText = sessionStorage.getItem('skiNum');
		}
		if (sessionStorage.getItem('bootNum')) {
			document.getElementById('bootNum').innerText = sessionStorage.getItem('bootNum');
		}
		if (sessionStorage.getItem('shopName')) {
			document.getElementById('shopInfo').innerText = sessionStorage.getItem('shopName') + ": " +
				sessionStorage.getItem('shopStreet') + ", " +
				sessionStorage.getItem('shopCity') + ", " +
				sessionStorage.getItem('shopState') + " " +
				sessionStorage.getItem('shopZip');
		}
	}
	document.getElementById('bindingMake').innerText = sessionStorage.getItem('bindingMake');
	document.getElementById('bindingModel').innerText = sessionStorage.getItem('bindingModel');
	document.getElementById('helmetWorn').innerText = sessionStorage.getItem('helmet');
	if (sessionStorage.getItem('helmet') === "Yes") {
		document.getElementById('helmetInfo').innerHTML = '<label class="radius secondary label">Rental Helmet?:</label>' +
												'<span id="helmetRental"></span>';
		document.getElementById('helmetRental').innerText = sessionStorage.getItem('helmetRental');
		if (sessionStorage.getItem('helmetRental') === 'Yes') {
			document.getElementById('helmetRentNum').innerHTML = '<label class="radius secondary label">Helmet Number:</label>' +
													'<span id="helmetNum"></span>';
			document.getElementById('helmetNum').innerText = sessionStorage.getItem('helmetNum');
		}
	}

//INCIDENT DESCRIPTION--------------------------------------------------------------------------------------------------
	document.getElementById('incidentDescription').innerText = sessionStorage.getItem('incidentDescription');

//PROBABLE INJURY-------------------------------------------------------------------------------------------------------
	document.getElementById('injuryType').innerText = sessionStorage.getItem('injuryType');

//INJURY ZONE-----------------------------------------------------------------------------------------------------------
	document.getElementById('injuryZone').innerText = sessionStorage.getItem('injuryZone');

//FIRST AID RENDERED----------------------------------------------------------------------------------------------------
	document.getElementById('hillFirstAid').innerText = sessionStorage.getItem('hillFirstAid');
	document.getElementById('patrolRoomAid').innerText = sessionStorage.getItem('patrolRoomAid');

//PATROLLERS------------------------------------------------------------------------------------------------------------
	if (sessionStorage.getItem('scenePatrollers')) {
		document.getElementById('scenePatrollers').innerText = sessionStorage.getItem('scenePatrollers');
	}
	if (sessionStorage.getItem('transportingPatrollers')) {
		document.getElementById('transportingPatrollers').innerText = sessionStorage.getItem('transportingPatrollers');
	}
	if (sessionStorage.getItem('aidPatrollers')) {
		document.getElementById('aidPatrollers').innerText = sessionStorage.getItem('aidPatrollers');
	}

//TRANSPORTATION & DESTINATION------------------------------------------------------------------------------------------
	document.getElementById('arrival').innerText = sessionStorage.getItem('arrive');
	if (sessionStorage.getItem('arriveOther')) {
		document.getElementById('arriveOther').innerText = sessionStorage.getItem('arriveOther');
	}
	document.getElementById('leave').innerText = sessionStorage.getItem('leave');
	if (sessionStorage.getItem('leaveOther')) {
		document.getElementById('leaveOther').innerText = sessionStorage.getItem('leaveOther');
	}
	document.getElementById('destination').innerText = sessionStorage.getItem('dest');
	if (sessionStorage.getItem('medFacility')) {
		document.getElementById('medFacility').innerText = sessionStorage.getItem('medFacility');
	}

//SITE CONDITIONS-------------------------------------------------------------------------------------------------------
	document.getElementById('surfaceConditions').innerText = sessionStorage.getItem('sceneSurface');
	document.getElementById('visibility').innerText = sessionStorage.getItem('sceneVisibility');
	document.getElementById('temp').innerText = sessionStorage.getItem('temp');
	document.getElementById('wind').innerText = sessionStorage.getItem('wind');

//WITNESSES-------------------------------------------------------------------------------------------------------------
	for (var i = 0; i <= sessionStorage.getItem('numWitness'); i++) {
		var witnessLabel = "Witness " + (i + 1);
		var div = document.createElement("div");
		div.className = 'small-4 columns';
		div.id = ("witness" + i);
		var witnessName = "witnessName" + i;
		var witnessStreet = "witnessStreet" + i;
		var witnessCityStateZip = "witnessCityStateZip" + i;
		var witnessPhone = "witnessPhone" + i;
		var witnessCell = "witnessCell" + i;
		div.innerHTML =     '<label class="radius secondary label">' + witnessLabel + ':</label><br>' +
						'<span id=' + witnessName + '></span><br>' +
						'<span id=' + witnessStreet + '></span><br>' +
						'<span id=' + witnessCityStateZip + '></span><br>' +
						'<span id=' + witnessPhone + '></span><br>' +
						'<span id=' + witnessCell + '></span>';
		document.getElementById('witnesses').appendChild(div);
		document.getElementById(witnessName).innerText = sessionStorage.getItem("w" + i + "Name");
		document.getElementById(witnessStreet).innerText = sessionStorage.getItem("w" + i + "Street");
		document.getElementById(witnessCityStateZip).innerText = sessionStorage.getItem("w" + i + "CityStateZip");
		document.getElementById(witnessPhone).innerText = sessionStorage.getItem("w" + i + "HomePhoneNum");
		document.getElementById(witnessCell).innerText = sessionStorage.getItem("w" + i + "CellPhoneNum");
	}

//REPORT COMPLETER------------------------------------------------------------------------------------------------------
	document.getElementById('reportCompleter').innerText = sessionStorage.getItem('reportCompleter');
	document.getElementById('dateComplete').innerText = sessionStorage.getItem('dateComplete');
}

window.onload = function() {
	displayData();
};
