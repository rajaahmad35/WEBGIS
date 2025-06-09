ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([110.734707, -7.308605, 110.788882, -7.281754]);
var wms_layers = [];

var format_Bidang_Tanah_Genengsari_0 = new ol.format.GeoJSON();
var features_Bidang_Tanah_Genengsari_0 = format_Bidang_Tanah_Genengsari_0.readFeatures(json_Bidang_Tanah_Genengsari_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Bidang_Tanah_Genengsari_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bidang_Tanah_Genengsari_0.addFeatures(features_Bidang_Tanah_Genengsari_0);
var lyr_Bidang_Tanah_Genengsari_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bidang_Tanah_Genengsari_0, 
                style: style_Bidang_Tanah_Genengsari_0,
                interactive: true,
    title: 'Bidang_Tanah_Genengsari<br />\
    <img src="styles/legend/Bidang_Tanah_Genengsari_0_0.png" /> Hak Milik<br />\
    <img src="styles/legend/Bidang_Tanah_Genengsari_0_1.png" /> Hak Pakai<br />\
    <img src="styles/legend/Bidang_Tanah_Genengsari_0_2.png" /> Hak Wakaf<br />\
    <img src="styles/legend/Bidang_Tanah_Genengsari_0_3.png" /> Kosong<br />'
        });

lyr_Bidang_Tanah_Genengsari_0.setVisible(true);
var layersList = [lyr_Bidang_Tanah_Genengsari_0];
lyr_Bidang_Tanah_Genengsari_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nop': 'nop', 'NAMA_WP': 'NAMA_WP', 'NIB': 'NIB', 'TIPE_HAK': 'TIPE_HAK', 'NL': 'NL', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Bidang_Tanah_Genengsari_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'nop': 'TextEdit', 'NAMA_WP': 'TextEdit', 'NIB': 'TextEdit', 'TIPE_HAK': 'TextEdit', 'NL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Bidang_Tanah_Genengsari_0.set('fieldLabels', {'OBJECTID': 'no label', 'nop': 'no label', 'NAMA_WP': 'header label', 'NIB': 'header label', 'TIPE_HAK': 'header label', 'NL': 'header label', 'Shape_Leng': 'header label', 'Shape_Area': 'header label', });
lyr_Bidang_Tanah_Genengsari_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});