var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_samarinda_1 = new ol.format.GeoJSON();
var features_samarinda_1 = format_samarinda_1.readFeatures(json_samarinda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_samarinda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_samarinda_1.addFeatures(features_samarinda_1);
var lyr_samarinda_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_samarinda_1, 
                style: style_samarinda_1,
                popuplayertitle: 'samarinda',
                interactive: true,
    title: 'samarinda<br />\
    <img src="styles/legend/samarinda_1_0.png" /> 0<br />\
    <img src="styles/legend/samarinda_1_1.png" /> 1<br />\
    <img src="styles/legend/samarinda_1_2.png" /> 2<br />\
    <img src="styles/legend/samarinda_1_3.png" /> 3<br />' });
var format_Titik_kecelakaan_2 = new ol.format.GeoJSON();
var features_Titik_kecelakaan_2 = format_Titik_kecelakaan_2.readFeatures(json_Titik_kecelakaan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_kecelakaan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_kecelakaan_2.addFeatures(features_Titik_kecelakaan_2);
var lyr_Titik_kecelakaan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_kecelakaan_2, 
                style: style_Titik_kecelakaan_2,
                popuplayertitle: 'Titik_kecelakaan',
                interactive: true,
                title: '<img src="styles/legend/Titik_kecelakaan_2.png" /> Titik_kecelakaan'
            });

lyr_OSM_0.setVisible(true);lyr_samarinda_1.setVisible(true);lyr_Titik_kecelakaan_2.setVisible(true);
var layersList = [lyr_OSM_0,lyr_samarinda_1,lyr_Titik_kecelakaan_2];
lyr_samarinda_1.set('fieldAliases', {'id': 'id', '@id': '@id', 'boundary': 'boundary', 'name': 'name', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'Jumlah': 'Jumlah', });
lyr_Titik_kecelakaan_2.set('fieldAliases', {'Area': 'Area', 'Koordinat': 'Koordinat', 'Sumber': 'Sumber', 'Y (Latitude)': 'Y (Latitude)', 'X (Longitude)': 'X (Longitude)', });
lyr_samarinda_1.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_Titik_kecelakaan_2.set('fieldImages', {'Area': 'TextEdit', 'Koordinat': 'TextEdit', 'Sumber': 'TextEdit', 'Y (Latitude)': 'TextEdit', 'X (Longitude)': 'TextEdit', });
lyr_samarinda_1.set('fieldLabels', {'id': 'hidden field', '@id': 'hidden field', 'boundary': 'hidden field', 'name': 'inline label - visible with data', 'type': 'hidden field', 'wikidata': 'hidden field', 'wikipedia': 'hidden field', 'Jumlah': 'hidden field', });
lyr_Titik_kecelakaan_2.set('fieldLabels', {'Area': 'inline label - visible with data', 'Koordinat': 'hidden field', 'Sumber': 'hidden field', 'Y (Latitude)': 'hidden field', 'X (Longitude)': 'hidden field', });
lyr_Titik_kecelakaan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});