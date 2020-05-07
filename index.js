var map;
	function initMap() {
		map = new google.maps.Map(
		document.getElementById('map'),
		{center: new google.maps.LatLng(39, -96), zoom: 4.6});

		var iconBase =
		'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

		var icons = {
			traceHilbun: {
				icon: {
					url:'pictures/traceHilbun.png',
					scaledSize: new google.maps.Size(50, 50)
				}
			},
			siobahnStanley: {
				icon: {
					url:'pictures/siobahnStanley.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			joMoore: {
				icon: {
					url:'pictures/joMoore.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			nickKaushal: {
				icon: {
					url:'pictures/nickKaushal.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			steelyForrester: {
				icon: {
					url:'pictures/steelyF.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			camilleHollier: {
				icon: {
					url:'pictures/camilleHollier.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			eliTomlin: {
				icon: {
					url:'pictures/eliTomlin.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			oliverBennett: {
				icon: {
					url:'pictures/oliverBennett.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			natalieGleason: {
				icon: {
					url:'pictures/natalieGleason.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			linleyKennedy: {
				icon: {
					url:'pictures/linleyKennedy.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			alinaChaisson: {
				icon: {
					url:'pictures/alinaChaisson.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			sabrinaScott: {
				icon: {
					url:'pictures/sabrinaScott.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			beatriceHoang: {
				icon: {
					url:'pictures/beatriceHoang.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			kylieWalker: {
				icon: {
					url:'pictures/kylieWalker.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			nyihajiWoods: {
				icon: {
					url:'pictures/nyihajiWoods.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			sydneySorbet: {
				icon: {
					url:'pictures/sydneySorbet.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			julianneLe: {
				icon: {
					url:'pictures/julianneLe.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			samKonur: {
				icon: {
					url:'pictures/samKonur.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			coytBailey: {
				icon: {
					url:'pictures/coytBailey.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			rowenJohnson: {
				icon: {
					url:'pictures/rowenJohnson.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			deandreGoodley: {
				icon: {
					url:'pictures/deandreGoodley.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			andyRobinson: {
				icon: {
					url:'pictures/andyRobinson.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			josieParker: {
				icon: {
					url:'pictures/josieParker.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			laurenMathews: {
				icon: {
					url:'pictures/laurenMathews.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			lizzieLaponsie: {
				icon: {
					url:'pictures/lizzieLaponsie.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			jakobRemington: {
				icon: {
					url:'pictures/jakobRemington.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			calebColeman: {
				icon: {
					url:'pictures/calebColeman.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			victoriaMeaux: {
				icon: {
					url:'pictures/victoriaMeaux.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			emeryHaynes: {
				icon: {
					url:'pictures/emeryHaynes.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			kaylaHarrell: {
				icon: {
					url:'pictures/kaylaHarrell.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			braydenKimbrough: {
				icon: {
					url:'pictures/braydenKimbrough.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			johnGuillory: {
				icon: {
					url:'pictures/johnGuillory.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			eliseQuebedeaux: {
				icon: {
					url:'pictures/eliseQuebedeaux.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			baileySaucier: {
				icon: {
					url:'pictures/baileySaucier.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			nashNichols: {
				icon: {
					url:'pictures/nashNichols.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			madisonSaucier: {
				icon: {
					url:'pictures/madisonSaucier.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			stephenFaulk: {
				icon: {
					url:'pictures/stephenFaulk.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			derekDupre: {
				icon: {
					url:'pictures/derekDupre.png',
					scaledSize: new google.maps.Size(50,50)
				}
			},
			allisonAllsop: {
				icon: {
					url:'pictures/allisonAllsop.png',
					scaledSize: new google.maps.Size(50,50)
				}
			}
		};

		var features = [
		{ //traceHilbun
			position: new google.maps.LatLng(43.703274, -72.288656),
			type: 'traceHilbun'
		}, { //siobahnStanley
			position: new google.maps.LatLng(32.484507, -93.734),
			type: 'siobahnStanley'
		}, { //joMoore
			position: new google.maps.LatLng(32.322761, -90.178333),
			type: 'joMoore'
		}, { //nickKaushal
			position: new google.maps.LatLng(29.940691, -90.119201),
			type: 'nickKaushal'
		}, { //steelyForrester
			position: new google.maps.LatLng(40.809103, -73.963983),
			type: 'steelyForrester'
		}, { //camilleHollier
			position: new google.maps.LatLng(30.212084, -92.020354),
			type: 'camilleHollier'
		}, { //eliTomlin
			position: new google.maps.LatLng(32.529138, -92.649991),
			type: 'eliTomlin'
		}, { //oliverBennett
			position: new google.maps.LatLng(29.935164, -90.121097),
			type: 'oliverBennett'
		}, { //natalieGleason
			position: new google.maps.LatLng(31.330472, -89.333507),
			type: 'natalieGleason'
		}, { //linleyKennedy
			position: new google.maps.LatLng(30.413827, -91.180032),
			type: 'linleyKennedy'
		}, { //alinaChaisson
			position: new google.maps.LatLng(31.179122, -92.414272),
			type: 'alinaChaisson'
		}, { //sabrinaScott
			position: new google.maps.LatLng(32.483295, -93.731823),
			type: 'sabrinaScott'
		}, { //beatriceHoang
			position: new google.maps.LatLng(41.827114, -71.402539),
			type: 'beatriceHoang'
		}, { //kylieWalker
			position: new google.maps.LatLng(32.485820, -93.731844),
			type: 'kylieWalker'
		}, { //nyihajiWoods
			position: new google.maps.LatLng(38.923227, -77.019545),
			type: 'nyihajiWoods'
		}, { //sydneySorbet
			position: new google.maps.LatLng(30.416542, -91.178254),
			type: 'sydneySorbet'
		}, { //julianneLe
			position: new google.maps.LatLng(33.876477, -84.335721),
			type: 'julianneLe'
		}, { //samKonur
			position: new google.maps.LatLng(30.411065, -91.181563),
			type: 'samKonur'
		}, { //coytBailey
			position: new google.maps.LatLng(40.735533, -73.994746),
			type: 'coytBailey'
		}, { //rowenJohnson
			position: new google.maps.LatLng(30.412990, -91.181815),
			type: 'rowenJohnson'
		}, { //deandreGoodley
			position: new google.maps.LatLng(33.875568, -84.336193),
			type: 'deandreGoodley'
		}, { //andyRobinson
			position: new google.maps.LatLng(29.791281, -90.803363),
			type: 'andyRobinson'
		}, { //josieParker
			position: new google.maps.LatLng(29.188667, -81.047938),
			type: 'josieParker'
		}, { //laurenMathews
			position: new google.maps.LatLng(35.119011, -89.937487),
			type: 'laurenMathews'
		}, { //lizzieLaponsie
			position: new google.maps.LatLng(33.875871, -84.333576),
			type: 'lizzieLaponsie'
		}, { //jakobRemington
			position: new google.maps.LatLng(31.750863, -93.097644),
			type: 'jakobRemington'
		}, { //calebColeman
			position: new google.maps.LatLng(31.329876, -89.332080),
			type: 'calebColeman'
		}, { //victoriaMeaux
			position: new google.maps.LatLng(30.211792, -92.021106),
			type: 'victoriaMeaux'
		}, { //emeryHaynes
			position: new google.maps.LatLng(29.941314, -90.120403),
			type: 'emeryHaynes'
		}, { //kaylaHarrell
			position: new google.maps.LatLng(33.875283, -84.334777),
			type: 'kaylaHarrell'
		}, { //braydenKimbrough
			position: new google.maps.LatLng(34.290848, -85.189227),
			type: 'braydenKimbrough'
		}, { //johnGuillory
			position: new google.maps.LatLng(37.776988, -122.450794),
			type: 'johnGuillory'
		}, { //eliseQuebedeaux
			position: new google.maps.LatLng(32.485612, -93.731405),
			type: 'eliseQuebedeaux'
		}, { //baileySaucier
			position: new google.maps.LatLng(30.211326, -92.019465),
			type: 'baileySaucier'
		}, { //nashNichols
			position: new google.maps.LatLng(30.619236, -96.336574),
			type: 'nashNichols'
		}, { //madisonSaucier
			position: new google.maps.LatLng(30.412555, -91.179852),
			type: 'madisonSaucier'
		}, { //stephenFaulk
			position: new google.maps.LatLng(30.412825, -91.178882),
			type: 'stephenFaulk'
		}, { //derekDupre
			position: new google.maps.LatLng(31.750288, -93.096506),
			type: 'derekDupre'
		}, { //allisonAllsop
			position: new google.maps.LatLng(32.483983, -93.732789),
			type: 'allisonAllsop'
		}
		];

		var zoomCount = 0;
		var oldZoom = 4.6
		// Create markers.
		for (var i = 0; i < features.length; i++) {
			
			var marker = new google.maps.Marker({
				position: features[i].position,
				icon: icons[features[i].type].icon,
				map: map
			});
			
			

			marker.addListener('click', function() {
				
				if(zoomCount%2 == 0){
					oldZoom = map.getZoom();
					map.setZoom(16);
					map.setCenter(this.getPosition());
				} else {
					map.setZoom(oldZoom);
				}
				zoomCount+=1;
			});
		};

		

	}