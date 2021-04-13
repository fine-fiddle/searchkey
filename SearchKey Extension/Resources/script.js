document.addEventListener("DOMContentLoaded", function(event) {
    safari.extension.dispatchMessage("Hello World!");
});

function focus_search_field(key_pressed) {
    var forbidden_tags = ['input', 'textarea'];
   
    var activeElement = document.activeElement;
    if (activeElement && forbidden_tags.indexOf(activeElement.tagName.toLowerCase()) !== -1) {
        return false;
    }

    if (activeElement.tagName.toLowerCase())
    if (key_pressed.which == 191) {
        if (window.location.hostname == "iptorrents.com") {
            document.getElementsByName("q")[0].focus();
        };
        if (window.location.hostname == "stackoverflow.com") {
            document.getElementsByName("q")[0].focus();
        };
    };
};

document.addEventListener('keyup', focus_search_field, false);
