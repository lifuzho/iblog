/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/
// Google Maps: http://code.google.com/apis/maps/index.html
KindEditor.plugin("map",function(e){var t=this,n="map",r=t.lang(n+".");t.clickToolbar(n,function(){function p(){f=h[0].contentWindow,l=e.iframeDoc(h)}var i=['<div style="padding:10px 20px;">','<div class="ke-dialog-row">',r.address+' <input id="kindeditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ','<span class="ke-button-common ke-button-outer">','<input type="button" name="searchBtn" class="ke-button-common ke-button" value="'+r.search+'" />',"</span>","</div>",'<div class="ke-map" style="width:558px;height:360px;"></div>',"</div>"].join(""),s=t.createDialog({name:n,width:600,title:t.lang(n),body:i,yesBtn:{name:t.lang("yes"),click:function(e){var n=f.geocoder,r=f.map,i=r.getCenter().lat()+","+r.getCenter().lng(),s=r.getZoom(),o=r.getMapTypeId(),u="http://maps.googleapis.com/maps/api/staticmap";u+="?center="+encodeURIComponent(i),u+="&zoom="+encodeURIComponent(s),u+="&size=558x360",u+="&maptype="+encodeURIComponent(o),u+="&markers="+encodeURIComponent(i),u+="&language="+t.langType,u+="&sensor=false",t.exec("insertimage",u).hideDialog().focus()}},beforeRemove:function(){a.remove(),l&&l.write(""),h.remove()}}),o=s.div,u=e('[name="address"]',o),a=e('[name="searchBtn"]',o),f,l,c=["<!doctype html><html><head>",'<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />',"<style>","	html { height: 100% }","	body { height: 100%; margin: 0; padding: 0; background-color: #FFF }","	#map_canvas { height: 100% }","</style>",'<script src="http://maps.googleapis.com/maps/api/js?sensor=false&language='+t.langType+'"></script>',"<script>","var map, geocoder;","function initialize() {","	var latlng = new google.maps.LatLng(31.230393, 121.473704);","	var options = {","		zoom: 11,","		center: latlng,","		disableDefaultUI: true,","		panControl: true,","		zoomControl: true,","		mapTypeControl: true,","		scaleControl: true,","		streetViewControl: false,","		overviewMapControl: true,","		mapTypeId: google.maps.MapTypeId.ROADMAP","	};",'	map = new google.maps.Map(document.getElementById("map_canvas"), options);',"	geocoder = new google.maps.Geocoder();","	geocoder.geocode({latLng: latlng}, function(results, status) {","		if (status == google.maps.GeocoderStatus.OK) {","			if (results[3]) {",'				parent.document.getElementById("kindeditor_plugin_map_address").value = results[3].formatted_address;',"			}","		}","	});","}","function search(address) {","	if (!map) return;","	geocoder.geocode({address : address}, function(results, status) {","		if (status == google.maps.GeocoderStatus.OK) {","			map.setZoom(11);","			map.setCenter(results[0].geometry.location);","			var marker = new google.maps.Marker({","				map: map,","				position: results[0].geometry.location","			});","		} else {",'			alert("Invalid address: " + address);',"		}","	});","}","</script>","</head>",'<body onload="initialize();">','<div id="map_canvas" style="width:100%; height:100%"></div>',"</body></html>"].join("\n"),h=e('<iframe class="ke-textarea" frameborder="0" src="'+t.pluginsPath+'map/map.html" style="width:558px;height:360px;"></iframe>');h.bind("load",function(){h.unbind("load"),e.IE?p():setTimeout(p,0)}),e(".ke-map",o).replaceWith(h),a.click(function(){f.search(u.val())})})});