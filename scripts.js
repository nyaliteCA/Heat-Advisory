 /*global $ */
 
var goal = 226;
var gear = 0;
var flask = false;
var juju = false;
var cloak = false
var helm = false
var pants = false
var shoulder = false
var shoulder2 = false

$(document).ready(function(){
	$("#frInputField").val(0);
  $("#frInputField").change(function(){
  if ($("#frInputField").val() <= 315 && $("#frInputField").val() >= 0){
	  gear = parseInt($("#frInputField").val());
  } else {
	  console.log("invalid number");
  }
  computeFr();
  });
});

 //Buttons
 $("#frFlaskBtn").on("click", function() {
	 if (flask == false) {
		$("#frFlaskBtn").removeClass("btn-secondary").addClass("btn-success");
		$("#flaskBtnIcon").attr("src", "img/check2.svg");
		flask = true;
	 } else {
		 $("#frFlaskBtn").removeClass("btn-success").addClass("btn-secondary");
		 $("#flaskBtnIcon").attr("src", "img/x-lg.svg");
		 flask = false;
	 }
	  computeFr();
 });
  $("#frJujuBtn").on("click", function() {
	 if (juju == false) {
		$("#frJujuBtn").removeClass("btn-secondary").addClass("btn-success");
		$("#jujuBtnIcon").attr("src", "img/check2.svg");
		juju = true;
	 } else {
		 $("#frJujuBtn").removeClass("btn-success").addClass("btn-secondary");
		 $("#jujuBtnIcon").attr("src", "img/x-lg.svg");
		 juju = false;
	 }
	  computeFr();
 });
  $("#frHelmBtn").on("click", function() {
	 if (helm == false) {
		$("#frHelmBtn").removeClass("btn-secondary").addClass("btn-success");
		$("#HelmBtnIcon").attr("src", "img/check2.svg");
		helm = true;
	 } else {
		 $("#frHelmBtn").removeClass("btn-success").addClass("btn-secondary");
		 $("#HelmBtnIcon").attr("src", "img/x-lg.svg");
		 helm = false;
	 }
	  computeFr();
 });
  $("#frCloakBtn").on("click", function() {
	 if (cloak == false) {
		$("#frCloakBtn").removeClass("btn-secondary").addClass("btn-success");
		$("#cloakBtnIcon").attr("src", "img/check2.svg");
		cloak = true;
	 } else {
		 $("#frCloakBtn").removeClass("btn-success").addClass("btn-secondary");
		 $("#cloakBtnIcon").attr("src", "img/x-lg.svg");
		 cloak = false;
	 }
	  computeFr();
 });
  $("#frPantsBtn").on("click", function() {
	 if (pants == false) {
		$("#frPantsBtn").removeClass("btn-secondary").addClass("btn-success");
		$("#pantsBtnIcon").attr("src", "img/check2.svg");
		pants = true;
	 } else {
		 $("#frPantsBtn").removeClass("btn-success").addClass("btn-secondary");
		 $("#pantsBtnIcon").attr("src", "img/x-lg.svg");
		 pants = false;
	 }
	  computeFr();
 });
  $("#frShoulderBtn").on("click", function() {
	 if (shoulder == false) {
		$("#frShoulderBtn").removeClass("btn-secondary").addClass("btn-success");
		$("#shoulderBtnIcon").attr("src", "img/check2.svg");
		$("#frShoulder2Btn").removeClass("btn-success").addClass("btn-secondary");
		$("#shoulder2BtnIcon").attr("src", "img/x-lg.svg");
		shoulder = true;
		shoulder2 = false;
	 } else{
		 $("#frShoulderBtn").removeClass("btn-success").addClass("btn-secondary");
		$("#shoulderBtnIcon").attr("src", "img/x-lg.svg");
		shoulder = false;
	 }
		 computeFr();
 });
 
   $("#frShoulder2Btn").on("click", function() {
	 if (shoulder2 == false) {
		$("#frShoulder2Btn").removeClass("btn-secondary").addClass("btn-success");
		$("#shoulder2BtnIcon").attr("src", "img/check2.svg");
		$("#frShoulderBtn").removeClass("btn-success").addClass("btn-secondary");
		$("#shoulderBtnIcon").attr("src", "img/x-lg.svg");
		shoulder2 = true;
		shoulder = false;
	 } else{
		 $("#frShoulder2Btn").removeClass("btn-success").addClass("btn-secondary");
		$("#shoulderBtn2Icon").attr("src", "img/x-lg.svg");
		shoulder2 = false;
	 }
	  computeFr();
 });
 
 
 
 /*
 <div class="card mx-auto text-white bg-primary mb-3">
   <div class="card-header"><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample">Open</button>Step 1</div>
   <div class="collapse card-body" id="collapseExample">
     <h5 class="card-title">Accept Quest</h5>
     <p class="card-text">some reqs</p>
   </div>
 </div>
 */
 //Functions
function computeFr(){
	var fr = gear;
	if (flask){
		fr += 25;
	}
	if (juju) {
		fr += 15;
	}
	if (helm)
	{
		fr += 20;
	}
	if (pants)
	{
		fr += 20;
	}
	if (cloak)
	{
		fr += 20;
	}
	if (shoulder)
	{
		fr += 15;
	}
	if (shoulder2)
	{
		fr += 5;
	}
	$("#frTotal").text(fr);
	//check mark
	var markFr = fr +20;
	var impMarkFr = fr + 27;
	var totemFr = fr +60;
	
	if (markFr >= 226 ) {
		$("#resultMark").text("Safe (+" + (markFr-goal) + ")");
	} else if (markFr >= 196) {
		$("#resultMark").text("Burnt (" + (markFr-goal) + ")");
	} else {
		$("#resultMark").text("Cooked (" + (markFr-goal) + ")");
	}
	//check imp mark
	if (impMarkFr >= 226 ) {
		$("#resultImpMark").text("Safe (+" + (impMarkFr-goal) + ")");
	} else if (impMarkFr >= 196) {
		$("#resultImpMark").text("Burnt (" + (impMarkFr-goal) + ")");
	} else {
		$("#resultImpMark").text("Cooked (" + (impMarkFr-goal) + ")");
	}
	//check totem
	if (totemFr >= 226 ) {
		$("#resultTotem").text("Safe (+" + (totemFr-goal) + ")");
	} else if (totemFr >= 196) {
		$("#resultTotem").text("Burnt (" + (totemFr-goal) + ")");
	} else {
		$("#resultTotem").text("Cooked (" + (totemFr-goal) + ")");
	}
};