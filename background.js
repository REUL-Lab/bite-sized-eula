chrome.storage.sync.get({records: 'default'}, function(data){

    // data.records.push({
    //     state:'on',
    //     remindSignUp: 'on',
    //     remindPostComment: 'on'
    // });
    // chrome.storage.sync.set(data);
  chrome.storage.sync.set({state:'on'});
  //chrome.storage.sync.set({remindSignUp: 'on'});
  // chrome.storage.sync.set({remindPostComment: 'on'});
});

