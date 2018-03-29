document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uninstall_link').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://extensions' });
    });
});