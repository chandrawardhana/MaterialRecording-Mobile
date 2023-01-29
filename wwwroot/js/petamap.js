

    window.leafletJsFunctions = {
            initialize: function (dotnetHelper) {
                var mymap = L.map('mapid').setView([-7.5510528, 110.22226833], 13);
                L.tileLayer('{website}/styles/v1/{id}/tiles/{z}/{x}/{y}?{token}', {
                    website:'https://api.mapbox.com',
                    maxZoom: 18,
                    id: 'mapbox/streets-v12',
                    token:'access_token=pk.eyJ1IjoiY2hhbmRyYXdhcmRoYW5hIiwiYSI6ImNsY2E3dzYwaDBybTI0MWxoaDI2OGpwengifQ.3eW6FKZL0uyQ8l6FjM8N0Q',
                    tileSize: 512,
                    zoomOffset: -1
                }).addTo(mymap);
    
                L.marker([-7.5510528,  110.22226833]).addTo(mymap)
                    .bindPopup("<b>Kandang X - 22/4</b><br /> Masih Produksi.").closePopup();
    
                var popup = L.popup();
    
                function onMapClick(e) {
                    // Invoke the instance method GetLatLng, passing it the
                    // Latitude and Logitude value
                    return dotnetHelper.invokeMethodAsync('GetLatLng',
                                                e.latlng.toString());
                 }
    
                mymap.on('click', onMapClick);
           }
         };
         
