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
		if(eula == null){
			callback(null);
		} else {
			sectionFound = null;
			eula.sections.forEach(function(section){
				if(section.tags.includes(tag)){
					sectionFound = section;
				}
			});
			if(sectionFound == null){
				callback(null);
			} else {
				callback(sectionFound.text);
			}
		}
	});
}

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
	var fullPath = chrome.runtime.getURL(path);
	xhr.open("GET", chrome.runtime.getURL(path));
	xhr.onreadystatechange = function() {
	if (this.readyState == 4) {
		if(xhr.responseText != null && xhr.responseText != ""){
			var parsed_json = JSON.parse(xhr.responseText);
			callback(parsed_json);
		} else {
			callback(null);
		}
	}
};
xhr.send();

}

function getEulaByDomain(domain, callback){
	foundSite = null;
	sites.forEach(function(site){
		if(site.domains.includes(domain)){
			foundSite = site;
		}
	});
	if(foundSite == null){
		callback(null);
	} else {
		eulaName = foundSite.name;
		readSavedEULA(eulaName, callback);
	}
}

function readSavedEULA(eulaName, callback){
	var path = 'data/eulas/' + eulaName + '.json'
	getJson(path, callback);
}
