function btnSelectType(myTag, type) {
    let tag = $(".btn_type_select");
    let tagUser = $(".userRecord");
    tag.removeAttr("class");
    tag.attr("class", "btn_type_select")
    let newMyTag = $(myTag);
    newMyTag.attr("class", "btn_type_select btn_type_selected")
    switch (type) {
        case 1:
            tagUser.css("display", "block");
            break;
        case 2:
            tagUser.each((key, val) => {
                if ($(val).attr("data-user") === "quan") {
                    $(val).css("display", "block")
                } else {
                    $(val).css("display", "none")
                }
            })
            break;
        case 3:
            tagUser.each((key, val) => {
                if ($(val).attr("data-user") == undefined) {
                    $(val).css("display", "block")
                } else {
                    $(val).css("display", "none")
                }
            })
            break;
    }
}

function btnPopUpUser(type,name) {
    let tag = $("#"+(name));
    switch (type) {
        case 1:
            tag.css("display", "block");
            break;
        case 0:
            tag.css("display", "none");
            break;
    }
}