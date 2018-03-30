chrome.storage.sync.get({option: "default"}, function(data){
  chrome.storage.sync.set({state: 'on'});
});

