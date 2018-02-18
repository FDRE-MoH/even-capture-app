/* Filters */
var eventCaptureFilters = angular.module('eventCaptureFilters', [])

.filter('diseaseListFilter', function(){
    
    return function( diseaseList, excludeList ){
        
        var _diseaseList = [];

        if( diseaseList && diseaseList.length && diseaseList.length > 0 && excludeList && excludeList.length && excludeList.length > 0){
            angular.forEach(diseaseList, function(d){
                if( excludeList.indexOf(d.displayName) === -1 ){
                    _diseaseList.push(d);
                }
            });
        }
        else {
            _diseaseList = diseaseList;
        }
        
        return _diseaseList;
    };

});