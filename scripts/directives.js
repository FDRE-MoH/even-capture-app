/* Directives */
var eventCaptureDirectives = angular.module('eventCaptureDirectives', [])
.directive('modalBody', function (){
    return {
        restrict: 'E',
        templateUrl: 'views/modal-body.html',
        scope: {
            body: '='
        },
        controller: [
            '$scope',
            '$translate',
            function($scope, $translate){
                
            }
        ]
    }
})

.directive('d2TabIndex', function(){
    return{
        restrict: 'A',
        link: function (scope, element, attrs) {
            
            element.bind("onclick", function(event){
                if(this.type==="number"){
                    this.select();
                }
            });
                
            element.bind("keydown keypress", function (event) {                
                
                var key = event.keyCode || event.charCode || event.which;
                
                var currentTabIndex = parseInt( attrs.tabindex );
                
                var field = null;                               
                
                if ( ( key === 9 && event.shiftKey ) || key === 38 || key === 37 ) {//get previous input field
                                                            
                	event.preventDefault(); 
                    event.stopPropagation();
                    
                    field = $( 'input[name="foo"][tabindex="' + ( --currentTabIndex ) + '"]' );
                    
                    while( field ){
                        if ( field.is( ':disabled' ) || field.is( ':hidden' ) ) {
                            field = $( 'input[name="foo"][tabindex="' + ( --currentTabIndex ) + '"]' );
                        }
                        else {
                            break;
                        }
                    }
                    
                    if( field ){                    
                        field.focus();
                        if(field[0]){ 
                            field[0].select();
                        }
                    }
                }                
                else if( ( key === 9 && !event.shiftKey ) || key === 13 || key === 39 || key === 40 ){//get next input field
                        
                	event.preventDefault(); 
                    event.stopPropagation();
                    
                    field = $( 'input[name="foo"][tabindex="' + ( ++currentTabIndex ) + '"]' );
                    
                    while( field ){
                        if ( field.is( ':disabled' ) || field.is( ':hidden' ) ) {
                            field = $( 'input[name="foo"][tabindex="' + ( ++currentTabIndex ) + '"]' );
                        }
                        else {
                            break;
                        }
                    }
                    
                    if( field ){                    
                        field.focus();
                        if(field[0]){
                            field[0].select();
                        }
                    }                   
                }
            });
        }
    };
});

