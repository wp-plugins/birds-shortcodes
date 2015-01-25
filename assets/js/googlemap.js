jQuery(function($){
    $(document).ready(function(){
        $('.googlemap').each( function() {

              var styles = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#71d6ff"},{"saturation":100},{"lightness":-5},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#deecec"},{"saturation":-73},{"lightness":72},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"hue":"#bababa"},{"saturation":-100},{"lightness":25},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#e3e3e3"},{"saturation":-100},{"lightness":0},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"hue":"#6d564c"},{"saturation":100},{"lightness":34},{"visibility":"on"}]}];

            var styledMap = new google.maps.StyledMapType(styles,
                {name: "Styled Map"});


            var $map_id = $(this).attr('id'),
            $title = $(this).find('.title').val(),
            $location = $(this).find('.location').val(),
            $zoom = parseInt( $(this).find('.zoom').val() ),
            geocoder, map;

            var mapOptions = {
                zoom: $zoom,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            geocoder = new google.maps.Geocoder();

            geocoder.geocode( { 'address': $location}, function(results, status) {

                if (status == google.maps.GeocoderStatus.OK) {

                    var mapOptions = {
                        zoom: $zoom,
                        scrollwheel: false,
                        mapTypeControlOptions: {
                          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                        }
                    };

                    map = new google.maps.Map($('#'+ $map_id + ' .map_canvas')[0], mapOptions);

                    map.setCenter(results[0].geometry.location);

                        function urlofdoc ( jsfile ) {
                            var scriptElements = document.getElementsByTagName('script');
                            var i, element, myfile;
                                for( i = 0; element = scriptElements[i]; i++ ) {
                                    myfile = element.src;
                                    if( myfile.indexOf( jsfile ) >= 0 ) {
                                        var myurl = myfile.substring( 0, myfile.indexOf( jsfile ) );
                                    }
                                }
                            return myurl;
                        }

                    var myurl = urlofdoc ( 'googlemap.js' );
                    var marker = new google.maps.Marker({
                      map: map,
                      icon: myurl + '/marker.png',
                      position: results[0].geometry.location,
                      title : $location
                    });

                    map.mapTypes.set('map_style', styledMap);
                      map.setMapTypeId('map_style');


                    var contentString = '<div class="map-infowindow">'+
                        ( ($title) ? '<h3>' + $title + '</h3>' : '' ) +
                        $location + '<br/>' +
                        '<a href="https://maps.google.com/?q='+ $location +'" target="_blank">View on Google Map</a>' +
                        '</div>';

                    var infowindow = new google.maps.InfoWindow({
                      content: contentString
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map,marker);
                    });

                } else {
                    $('#'+ $map_id).html("Geocode was not successful for the following reason: " + status);
                }
            });

        });
    });
});
