var checkboxesMarcados = [];
function handleCheckboxChange(checkbox) {
    var checkboxId = parseInt(checkbox.id);
    if (checkbox.checked == true) {
        checkboxesMarcados.push((checkboxId));
    } else {
        var index = checkboxesMarcados.indexOf(checkboxId);
        if (index != -1) {
            checkboxesMarcados.splice(index, 1);
        }
    }
    console.log("Checkboxes Marcados: " + checkboxesMarcados);
}