function ValidateInput(form)
{
    return true;
}

function AddUrl()
{
    var id = parseInt($("#nextid").val(), 10);
    
    var html = "<div id='urldiv" + id + "' class='urldiv'>";
    html += "Label: <input id='label" + id +"' type='text' name='label[" + id + "]' style='width:10em'> ";
    html += "URL: <input id='url" + id +"' type='text' name='url[" + id + "]' style='width:370px' onkeypress='if (event.keyCode == 32) {return false;}'> ";
    html += "<a href='#' onClick='return RemoveUrl(\"#urldiv" + id + "\");'>Remove</a>";
    html += "</div>";
    $("#urls").append(html);
    
    $("#nextid").val(id + 1);
    
    return false;
}

function RemoveUrl(id) 
{
    $(id).remove();
    return false;
}
