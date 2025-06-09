ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([110.739431, -7.298386, 110.765355, -7.285538]);
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
var format_BidangTanah_Genengsari_1 = new ol.format.GeoJSON();
var features_BidangTanah_Genengsari_1 = format_BidangTanah_Genengsari_1.readFeatures(json_BidangTanah_Genengsari_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_BidangTanah_Genengsari_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BidangTanah_Genengsari_1.addFeatures(features_BidangTanah_Genengsari_1);
var lyr_BidangTanah_Genengsari_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BidangTanah_Genengsari_1, 
                style: style_BidangTanah_Genengsari_1,
                interactive: true,
    title: 'BidangTanah_Genengsari<br />\
    <img src="styles/legend/BidangTanah_Genengsari_1_0.png" /> Hak Milik<br />\
    <img src="styles/legend/BidangTanah_Genengsari_1_1.png" /> Hak Pakai<br />\
    <img src="styles/legend/BidangTanah_Genengsari_1_2.png" /> Hak Wakaf<br />\
    <img src="styles/legend/BidangTanah_Genengsari_1_3.png" /> Kosong<br />'
        });

lyr_Googlemaps_0.setVisible(true);lyr_BidangTanah_Genengsari_1.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_BidangTanah_Genengsari_1];
lyr_BidangTanah_Genengsari_1.set('fieldAliases', {'THN_PAJAK': 'THN_PAJAK', 'NAMA_WP': 'NAMA_WP', 'ALMAT_SUBP': 'ALMAT_SUBP', 'ALMAT_OBJP': 'ALMAT_OBJP', 'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'PL_CITRA': 'PL_CITRA', 'SARPRAS': 'SARPRAS', 'RT': 'RT', 'RW': 'RW', 'DUSUN': 'DUSUN', 'KABUPATEN': 'KABUPATEN', 'STATUS': 'STATUS', 'SERTIPIKAT': 'SERTIPIKAT', 'NOMOR': 'NOMOR', 'IRIGASI': 'IRIGASI', 'ZNT': 'ZNT', 'BLOK': 'BLOK', 'Shape_Leng': 'Shape_Leng', 'NIB': 'NIB', 'LUAS_SERTI': 'LUAS_SERTI', 'LUAS_PETA': 'LUAS_PETA', 'PMLK_T': 'PMLK_T', 'TIPE_HAK': 'TIPE_HAK', 'Shape_Area': 'Shape_Area', 'Shape_Le_2': 'Shape_Le_2', });
lyr_BidangTanah_Genengsari_1.set('fieldImages', {'THN_PAJAK': 'TextEdit', 'NAMA_WP': 'TextEdit', 'ALMAT_SUBP': 'TextEdit', 'ALMAT_OBJP': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'PL_CITRA': 'TextEdit', 'SARPRAS': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'DUSUN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'STATUS': 'TextEdit', 'SERTIPIKAT': 'TextEdit', 'NOMOR': 'TextEdit', 'IRIGASI': 'TextEdit', 'ZNT': 'TextEdit', 'BLOK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'NIB': 'TextEdit', 'LUAS_SERTI': 'TextEdit', 'LUAS_PETA': 'TextEdit', 'PMLK_T': 'TextEdit', 'TIPE_HAK': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_Le_2': 'TextEdit', });
lyr_BidangTanah_Genengsari_1.set('fieldLabels', {'THN_PAJAK': 'header label', 'NAMA_WP': 'header label', 'ALMAT_SUBP': 'header label', 'ALMAT_OBJP': 'header label', 'KELURAHAN': 'header label', 'KECAMATAN': 'header label', 'PL_CITRA': 'header label', 'SARPRAS': 'header label', 'RT': 'header label', 'RW': 'header label', 'DUSUN': 'header label', 'KABUPATEN': 'header label', 'STATUS': 'header label', 'SERTIPIKAT': 'header label', 'NOMOR': 'header label', 'IRIGASI': 'header label', 'ZNT': 'header label', 'BLOK': 'header label', 'Shape_Leng': 'header label', 'NIB': 'header label', 'LUAS_SERTI': 'header label', 'LUAS_PETA': 'header label', 'PMLK_T': 'header label', 'TIPE_HAK': 'header label', 'Shape_Area': 'header label', 'Shape_Le_2': 'header label', });
lyr_BidangTanah_Genengsari_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});