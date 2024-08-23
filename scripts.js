var goal = 226;
var gear = 0;
var flask = false;
var juju = false;
var cloak = false;
var helm = false;
var pants = false;
var shoulder = false;
var shoulder2 = false;

$(document).ready(function(){
    $("#frInputField").val(gear);
    $("#frInputField").change(function(){
        if ($(this).val() <= 315 && $(this).val() >= 0){
            gear = parseInt($(this).val());
        } else {
            console.log("invalid number");
            $(this).val(gear);
        }
        computeFr();
    });

    $(".item").click(function() {
        var id = $(this).attr('id');
        switch(id) {
            case 'frFlask':
                flask = !flask;
                break;
            case 'frJuju':
                juju = !juju;
                break;
            case 'frHelm':
                helm = !helm;
                break;
            case 'frCloak':
                cloak = !cloak;
                break;
            case 'frPants':
                pants = !pants;
                break;
            case 'frShoulder':
                shoulder = !shoulder;
                if (shoulder) {
                    shoulder2 = false;
                    updateButtonStatus('frShoulder2');
                }
                break;
            case 'frShoulder2':
                shoulder2 = !shoulder2;
                if (shoulder2) {
                    shoulder = false;
                    updateButtonStatus('frShoulder');
                }
                break;
        }
        updateButtonStatus(id);
        computeFr();
    });

    computeFr();
});

function updateButtonStatus(id) {
    var isActive = false;
    switch(id) {
        case 'frFlask':
            isActive = flask;
            break;
        case 'frJuju':
            isActive = juju;
            break;
        case 'frHelm':
            isActive = helm;
            break;
        case 'frCloak':
            isActive = cloak;
            break;
        case 'frPants':
            isActive = pants;
            break;
        case 'frShoulder':
            isActive = shoulder;
            break;
        case 'frShoulder2':
            isActive = shoulder2;
            break;
    }
    
    if (isActive) {
        $(`#${id}`).addClass('btn-success').removeClass('btn-secondary');
        $(`#${id} .status-icon`).html('&#10004;'); // Unicode check mark
    } else {
        $(`#${id}`).removeClass('btn-success').addClass('btn-secondary');
        $(`#${id} .status-icon`).html(''); // Empty when deselected
    }
}

function computeFr(){
    var fr = gear;
    if (flask) fr += 25;
    if (juju) fr += 15;
    if (helm) fr += 20;
    if (pants) fr += 20;
    if (cloak) fr += 20;
    if (shoulder) fr += 15;
    if (shoulder2) fr += 5;
    
    $("#frTotal").text(fr);
    
    var markFr = fr + 20;
    var impMarkFr = fr + 27;
    var totemFr = fr + 60;
    
    updateBuffResult(markFr, "#resultMark");
    updateBuffResult(impMarkFr, "#resultImpMark");
    updateBuffResult(totemFr, "#resultTotem");
}

function updateBuffResult(fr, elementId) {
    var result, className;
    if (fr >= goal) {
        result = `Safe (+${fr - goal})`;
        className = 'safe';
    } else if (fr >= goal-30) {
        result = `Burnt (${fr - goal})`;
        className = 'burnt';
    } else {
        result = `Cooked (${fr - goal})`;
        className = 'cooked';
    }
    
    $(elementId).removeClass('safe burnt cooked').addClass(className);
	$(elementId).find('.item-effect').removeClass('safe burnt cooked').addClass(className).text(result);
}
