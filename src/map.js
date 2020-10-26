const displayMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicmlja3lyaWNhcmRpbmhvIiwiYSI6ImNrZTRuMGJteTAycWEyenBvbDRpZW12ZDcifQ.P0eovMFE3-zpXFL8TXAnhg';
                            var map = new mapboxgl.Map({
                            container: 'map',
                            style: 'mapbox://styles/rickyricardinho/ckgf9w7h12h7n19pds7npab31',
                            center: [-1.968300, 53.463150],
                            zoom: 15
                            });

                            new mapboxgl.Marker().setLngLat([-1.968300, 53.463150]).addTo(map)
                            

                            var markerHeight = 50, markerRadius = 10, linearOffset = 25;
                            var popupOffsets = {
                            'top': [0, 0],
                            'top-left': [0,0],
                            'top-right': [0,0],
                            'bottom': [0, -markerHeight],
                            'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                            'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                            'left': [markerRadius, (markerHeight - markerRadius) * -1],
                            'right': [-markerRadius, (markerHeight - markerRadius) * -1]
                            };
                            new mapboxgl.Popup({offset: popupOffsets, className: 'map__popup'})
                            .setLngLat([-1.968300, 53.463150])
                            .setHTML('<h4>H BRISS & SON</h4>')
                            .setMaxWidth("none")
                            .addTo(map);
                            }

export default displayMap