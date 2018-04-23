
window.onload = function(){

	test_db_functionality = false;

	if(test_db_functionality){
		readSites(function(){
			getEulaSectionForTag("http://testSite.com", "testTag", function(sectionText){
				console.log("Database test, test section is: " + sectionText);
			});
		});
	} else {
		readSites();
	}
}

function getEulaSectionForTag(siteDomain, tag, callback){
	console.log("Sanity check.");
	siteDomain = siteDomain.toLowerCase();
	tag = tag.toLowerCase();
	getEulaByDomain(siteDomain, function(eula){
		if(eula == null) {
			callback(null,null,null,null,null);
		} else {
			sectionFound = null;
			eula.sections.forEach(function(section){
				if(section.tags.includes(tag)){
					sectionFound = section;
				}
			});
			if(sectionFound == null){
				callback(null,null,null,null,null);
			} else {
				callback(sectionFound.text,sectionFound.subtitle,sectionFound.action,sectionFound.type,sectionFound.neverremind);
			}
		}
	});
}

// function setEulaSectionForTag(siteDomain, tag){
// 	console.log("set eula section for tag");
// 	siteDomain = siteDomain.toLowerCase();
// 	tag = tag.toLowerCase();

// 	// getEulaByDomain(siteDomain,false, function(boolean) {
// 	// 	if (boolean==null) {
// 	// 		console.log("the modified json:+ could not be save.");
// 	// 	} else {
// 	// 		console.log("the modified json: was saved.");
// 	// 	}
// 	// });

// }

sites = null;
function readSites(callback){
	var path = 'data/sites.json'
	getJson(path, function(sitesJson){
		sites = sitesJson.sites;
		if(callback){
			callback();
		}
	});
}

function getJson(path, callback){
	var xhr = new XMLHttpRequest;
	console.log('UNSENT', xhr.status);
	//var fullPath = chrome.runtime.getURL(path);
	xhr.open("GET", chrome.runtime.getURL(path));
	console.log('OPENED', xhr.status);
	xhr.onprogress = function () {
	  console.log('LOADING', xhr.status);
	};
	xhr.onreadystatechange = function() {
		console.log('DONE', xhr.status);
		if (this.readyState == 4) {
			if(xhr.responseText != null && xhr.responseText != ""){
				var parsed_json = JSON.parse(xhr.responseText);
				console.log("parsed_json "+parsed_json);
				callback(parsed_json);
			} else {
				callback(null);
			}
		}
};
xhr.send();

}

// function setJson(path, callback){
// 	//var xhr = new XMLHttpRequest;
// 	console.log('What the fuck UNSENT', xhr.status);
// 	//var fullPath = chrome.runtime.getURL(path);
// 	xhr.open("GET", chrome.runtime.getURL(path));
// 	console.log('setJson OPENED', xhr.status);
// 	//xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
//     //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 	//console.log("xhr requestheader set");
// 	xhr.onprogress = function () {
// 	  console.log('set Json LOADING', xhr.status);
// 	};

// 	xhr.onload = function() {
// 		console.log('set Json DONE', xhr.status);
// 		if (this.readyState == 4) {
// 			if(xhr.responseText != null && xhr.responseText != ""){
// 				console.log(responseText);
// 				var parsed_json = JSON.parse(xhr.responseText);
// 				//modify the parsed_json and send it back
// 				console.log(parsed_json);
// 				parsed_json.neverremind = "true";
// 				console.log(parsed_json);
// 				callback(true);
// 			} else {
// 				console.log("xhr response is null or empty");
// 				callback(null);
// 			}
// 		} else {
// 			console.log("readystate != 4");
// 		}
// };
// console.log("skipped");
// xhr.send(parsed_json);

// }

function getEulaByDomain(domain,callback){
	foundSite = null;
	sites.forEach(function(site){
		if(site.domains.includes(domain)){
			foundSite = site;
		}
	});
	if(foundSite == null){
		console.log(domain + " not found");
		callback(null);
	} else {
		eulaName = foundSite.name;

		readSavedEULA(eulaName, callback);

		// } else {
		// 	saveEULA(eulaName, callback);
		// }

	}
}

function readSavedEULA(eulaName, callback){
	var path = 'data/eulas/' + eulaName + '.json'
	getJson(path, callback);
}

// function saveEULA(eulaName, callback){
// 	var path = 'data/eulas/' + eulaName + '.json'
// 	setJson(path, callback);
// }
