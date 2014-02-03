(function() {
	var parseDoc = function(json) {
		var len = json.feed.entry.length;
		var data = [];
		for (var i = 0; i < len; i++) {
			var entry = {};
			for (var property in json.feed.entry[i]) {
				if (property.substring(0, 4) == "gsx$") {
					var newProperty = property.substring(4, property.length).replace(/\W/g, "");
					entry[newProperty] = json.feed.entry[i][property].$t;
				}
			}

			data.push(entry);
		}

		return data;
	};

	angular.module("Startup", [])
	.controller("Events", function($scope, $http) {
		$scope.events = [];
		$http.jsonp("http://spreadsheets.google.com/feeds/list/0AuXX7CMlQgZJdG05WDJrSUN2TVZlc1RaQnZtQTItMGc/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK").success(function(json) {
			$scope.events = parseDoc(json);
		});
	});
})();
