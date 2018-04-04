chrome.storage.sync.get({option: "default"}, function(data){
  chrome.storage.sync.set({state: 'on'});
});

function getDomain(callback){
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;
		var domain = url.hostname
		console.log("Got domain as " + domain);
		callback(domain)
	}
}
