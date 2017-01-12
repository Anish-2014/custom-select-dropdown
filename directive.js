app.directive("dropdown", function() {
	return {
		restrict: "E",
		templateUrl: "template.html",
		scope: {
			placeholder: "@",
			items: "=",
			selected: "=",
			property: "=",
			objects: "="
		},
		link: function(scope) {
			scope.listVisible = false;
			scope.isPlaceholder = true;

			scope.optionSelectedStyle = {
				"background-color": "white"
			}

            scope.tooltipTextStyle = {
                "visibility": "hidden"
            }

			
			scope.showSelected = function(item) {

				scope.isPlaceholder = false;

				var driver = "";
				var vehicle = "";

				if(item[scope.objects[0]]!=undefined){
					driver= item[scope.objects[0]][scope.property[0]];
				}
				
				if(item[scope.objects[1]]!=undefined){
					vehicle = item[scope.objects[1]][scope.property[1]];
				}
				scope.display = driver + "/" + vehicle;
				scope.selected = scope.display;
				scope.listVisible = false;
			
				scope.optionSelectedStyle = {
					"background-color": "#9da8b5"
				}


			};

            scope.showTooltip =function(item) {
                scope.tooltipItem = item;
                scope.tooltipTextStyle = {
                    "visibility": "visible"
                }
            }

            scope.hideTooltip =function(item) {
                scope.tooltipTextStyle = {
                    "visibility": "hidden"
                }
            }

			scope.show = function() {
				scope.listVisible = !scope.listVisible;
			};

			scope.search = function(item){
				if(scope.searchText == undefined) {
					return true;
				}
				else {
					if(item[scope.objects[0]]!=undefined && item[scope.objects[1]]!=undefined){
						if (item.driver.name.toLowerCase().indexOf(scope.searchText.toLowerCase()) != -1 ||
							item.vehicle.number.toLowerCase().indexOf(scope.searchText.toLowerCase()) != -1) {

							return true;
						}
					}
					if(item[scope.objects[0]]==undefined && item[scope.objects[1]]!=undefined){
						if (item.vehicle.number.toLowerCase().indexOf(scope.searchText.toLowerCase()) != -1) {

							return true;
						}
					}
					if(item[scope.objects[0]]!=undefined && item[scope.objects[1]]==undefined){
						if (item.driver.name.toLowerCase().indexOf(scope.searchText.toLowerCase()) != -1) {

							return true;
						}
					}
				}

				return false;
			}	
		}
	}
});
