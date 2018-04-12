//This file contains all the backed code for the advanced settings page.

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uninstall_link').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://extensions' });
    });

    document.getElementById('donate_link').addEventListener('click', function() {
        var x = document.getElementById('paypal');
        var domain = document.getElementById('domains');
        if (x.style.display === "none") {
            domain.style.display = "none";
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    });

    document.getElementById('domain_link').addEventListener('click', function() {
        var x = document.getElementById('domains');
        var paypal = document.getElementById('paypal');
        if (x.style.display === "none") {
            paypal.style.display = "none";
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });
});