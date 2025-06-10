ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([110.719815, -7.311204, 110.806472, -7.268254]);
var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_HargaTanah_Genengsari_1 = new ol.format.GeoJSON();
var features_HargaTanah_Genengsari_1 = format_HargaTanah_Genengsari_1.readFeatures(json_HargaTanah_Genengsari_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_HargaTanah_Genengsari_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HargaTanah_Genengsari_1.addFeatures(features_HargaTanah_Genengsari_1);
var lyr_HargaTanah_Genengsari_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HargaTanah_Genengsari_1, 
                style: style_HargaTanah_Genengsari_1,
                interactive: true,
    title: 'HargaTanah_Genengsari<br />\
    <img src="styles/legend/HargaTanah_Genengsari_1_0.png" /> <100.000<br />\
    <img src="styles/legend/HargaTanah_Genengsari_1_1.png" /> 100.000-200.000<br />\
    <img src="styles/legend/HargaTanah_Genengsari_1_2.png" /> 200.000-500.000<br />\
    <img src="styles/legend/HargaTanah_Genengsari_1_3.png" /> 500.000-1.000.000<br />\
    <img src="styles/legend/HargaTanah_Genengsari_1_4.png" /> 1.000.000-2.000.000<br />'
        });
var format_Bidang_Tanah_2 = new ol.format.GeoJSON();
var features_Bidang_Tanah_2 = format_Bidang_Tanah_2.readFeatures(json_Bidang_Tanah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Bidang_Tanah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bidang_Tanah_2.addFeatures(features_Bidang_Tanah_2);
var lyr_Bidang_Tanah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bidang_Tanah_2, 
                style: style_Bidang_Tanah_2,
                interactive: true,
    title: 'Bidang_Tanah<br />\
    <img src="styles/legend/Bidang_Tanah_2_0.png" /> Hak Milik<br />\
    <img src="styles/legend/Bidang_Tanah_2_1.png" /> Hak Pakai<br />\
    <img src="styles/legend/Bidang_Tanah_2_2.png" /> Hak Wakaf<br />\
    <img src="styles/legend/Bidang_Tanah_2_3.png" /> Kosong<br />'
        });
var format_Jaringan_Jalan_3 = new ol.format.GeoJSON();
var features_Jaringan_Jalan_3 = format_Jaringan_Jalan_3.readFeatures(json_Jaringan_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Jaringan_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Jalan_3.addFeatures(features_Jaringan_Jalan_3);
var lyr_Jaringan_Jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jaringan_Jalan_3, 
                style: style_Jaringan_Jalan_3,
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Jalan_3.png" /> Jaringan_Jalan'
            });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                interactive: true,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });

lyr_Googlemaps_0.setVisible(true);lyr_HargaTanah_Genengsari_1.setVisible(true);lyr_Bidang_Tanah_2.setVisible(true);lyr_Jaringan_Jalan_3.setVisible(true);lyr_Sungai_4.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_HargaTanah_Genengsari_1,lyr_Bidang_Tanah_2,lyr_Jaringan_Jalan_3,lyr_Sungai_4];
lyr_HargaTanah_Genengsari_1.set('fieldAliases', {'Id': 'Id', 'NL': 'NL', });
lyr_Bidang_Tanah_2.set('fieldAliases', {'NIB': 'NIB', 'NOP': 'NOP', 'TipeHak': 'TipeHak', 'Pemilik': 'Pemilik', });
lyr_Jaringan_Jalan_3.set('fieldAliases', {'JENIS': 'JENIS', 'FUNGSI': 'FUNGSI', 'NAMA': 'NAMA', 'SUMBER': 'SUMBER', 'lbr_jln': 'lbr_jln', 'jari_jari': 'jari_jari', });
lyr_Sungai_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Jenis_sung': 'Jenis_sung', 'Nama_Sunga': 'Nama_Sunga', 'Sumber': 'Sumber', 'Tahun': 'Tahun', 'Wewenang': 'Wewenang', });
lyr_HargaTanah_Genengsari_1.set('fieldImages', {'Id': 'Range', 'NL': 'TextEdit', });
lyr_Bidang_Tanah_2.set('fieldImages', {'NIB': 'TextEdit', 'NOP': 'TextEdit', 'TipeHak': 'TextEdit', 'Pemilik': 'TextEdit', });
lyr_Jaringan_Jalan_3.set('fieldImages', {'JENIS': 'TextEdit', 'FUNGSI': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER': 'TextEdit', 'lbr_jln': 'TextEdit', 'jari_jari': 'TextEdit', });
lyr_Sungai_4.set('fieldImages', {'OBJECTID': 'Range', 'Id': 'Range', 'Jenis_sung': 'TextEdit', 'Nama_Sunga': 'TextEdit', 'Sumber': 'TextEdit', 'Tahun': 'TextEdit', 'Wewenang': 'TextEdit', });
lyr_HargaTanah_Genengsari_1.set('fieldLabels', {'Id': 'no label', 'NL': 'no label', });
lyr_Bidang_Tanah_2.set('fieldLabels', {'NIB': 'header label', 'NOP': 'header label', 'TipeHak': 'header label', 'Pemilik': 'header label', });
lyr_Jaringan_Jalan_3.set('fieldLabels', {'JENIS': 'no label', 'FUNGSI': 'no label', 'NAMA': 'no label', 'SUMBER': 'no label', 'lbr_jln': 'no label', 'jari_jari': 'no label', });
lyr_Sungai_4.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Jenis_sung': 'no label', 'Nama_Sunga': 'no label', 'Sumber': 'no label', 'Tahun': 'no label', 'Wewenang': 'no label', });
lyr_Sungai_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});