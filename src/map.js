

const displayMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicmlja3lyaWNhcmRpbmhvIiwiYSI6ImNrZTRuMGJteTAycWEyenBvbDRpZW12ZDcifQ.P0eovMFE3-zpXFL8TXAnhg';
                            var map = new mapboxgl.Map({
                            container: 'map',
                            style: 'mapbox://styles/rickyricardinho/ckgf9w7h12h7n19pds7npab31'
                            });
}

export default displayMap