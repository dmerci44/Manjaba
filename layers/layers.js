var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_diangopoly_1 = new ol.format.GeoJSON();
var features_diangopoly_1 = format_diangopoly_1.readFeatures(json_diangopoly_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_diangopoly_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diangopoly_1.addFeatures(features_diangopoly_1);
var lyr_diangopoly_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_diangopoly_1, 
                style: style_diangopoly_1,
                popuplayertitle: 'diango poly',
                interactive: true,
                title: '<img src="styles/legend/diangopoly_1.png" /> diango poly'
            });
var format_Manjaba_2 = new ol.format.GeoJSON();
var features_Manjaba_2 = format_Manjaba_2.readFeatures(json_Manjaba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manjaba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manjaba_2.addFeatures(features_Manjaba_2);
var lyr_Manjaba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manjaba_2, 
                style: style_Manjaba_2,
                popuplayertitle: 'Manjaba',
                interactive: true,
                title: '<img src="styles/legend/Manjaba_2.png" /> Manjaba'
            });
var format_RUISDIA_3 = new ol.format.GeoJSON();
var features_RUISDIA_3 = format_RUISDIA_3.readFeatures(json_RUISDIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUISDIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUISDIA_3.addFeatures(features_RUISDIA_3);
var lyr_RUISDIA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUISDIA_3, 
                style: style_RUISDIA_3,
                popuplayertitle: 'RUIS DIA',
                interactive: true,
                title: '<img src="styles/legend/RUISDIA_3.png" /> RUIS DIA'
            });
var format_polymanjabaphaseB_4 = new ol.format.GeoJSON();
var features_polymanjabaphaseB_4 = format_polymanjabaphaseB_4.readFeatures(json_polymanjabaphaseB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polymanjabaphaseB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polymanjabaphaseB_4.addFeatures(features_polymanjabaphaseB_4);
var lyr_polymanjabaphaseB_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polymanjabaphaseB_4, 
                style: style_polymanjabaphaseB_4,
                popuplayertitle: 'poly manjaba phase B',
                interactive: true,
                title: '<img src="styles/legend/polymanjabaphaseB_4.png" /> poly manjaba phase B'
            });
var format_NumeroManjaba_5 = new ol.format.GeoJSON();
var features_NumeroManjaba_5 = format_NumeroManjaba_5.readFeatures(json_NumeroManjaba_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumeroManjaba_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumeroManjaba_5.addFeatures(features_NumeroManjaba_5);
var lyr_NumeroManjaba_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumeroManjaba_5, 
                style: style_NumeroManjaba_5,
                popuplayertitle: 'Numero Manjaba',
                interactive: true,
                title: '<img src="styles/legend/NumeroManjaba_5.png" /> Numero Manjaba'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_diangopoly_1.setVisible(true);lyr_Manjaba_2.setVisible(true);lyr_RUISDIA_3.setVisible(true);lyr_polymanjabaphaseB_4.setVisible(true);lyr_NumeroManjaba_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_diangopoly_1,lyr_Manjaba_2,lyr_RUISDIA_3,lyr_polymanjabaphaseB_4,lyr_NumeroManjaba_5];
lyr_diangopoly_1.set('fieldAliases', {'di': 'di', });
lyr_Manjaba_2.set('fieldAliases', {'conf': 'conf', });
lyr_RUISDIA_3.set('fieldAliases', {'F': 'F', });
lyr_polymanjabaphaseB_4.set('fieldAliases', {'ma': 'ma', });
lyr_NumeroManjaba_5.set('fieldAliases', {'nu': 'nu', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_diangopoly_1.set('fieldImages', {'di': '', });
lyr_Manjaba_2.set('fieldImages', {'conf': '', });
lyr_RUISDIA_3.set('fieldImages', {'F': '', });
lyr_polymanjabaphaseB_4.set('fieldImages', {'ma': '', });
lyr_NumeroManjaba_5.set('fieldImages', {'nu': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_diangopoly_1.set('fieldLabels', {'di': 'inline label - always visible', });
lyr_Manjaba_2.set('fieldLabels', {'conf': 'no label', });
lyr_RUISDIA_3.set('fieldLabels', {'F': 'inline label - always visible', });
lyr_polymanjabaphaseB_4.set('fieldLabels', {'ma': 'no label', });
lyr_NumeroManjaba_5.set('fieldLabels', {'nu': 'no label', });
lyr_NumeroManjaba_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});