iD.data.presets = {"presets":{"address":{"fields":["address"],"geometry":["point"],"tags":{"addr:housenumber":"*"},"addTags":{},"removeTags":{},"matchScore":0.2,"name":"Address"},"highway/autre_wegoto":{"icon":"highway-unclassified","fields":["address","incline_wegoto","kerb","width","elevation","smoothness_wegoto","shoulder_right","shoulder_left","line_right","line_left","surface_wegoto"],"geometry":["line"],"tags":{"footway":"other"},"removeTags":{"footway":"other"},"terms":[],"name":"Other Road"},"highway/chausse_wegoto":{"icon":"highway-path","fields":["address","incline_wegoto","kerb","width","elevation","smoothness_wegoto","shoulder_right","shoulder_left","line_right","line_left","surface_wegoto"],"geometry":["line"],"tags":{"highway":"road"},"removeTags":{"highway":"road"},"terms":[],"name":"Road"},"highway/chemin_wegoto":{"icon":"waterway-stream","fields":["address","incline_wegoto","kerb","width","elevation","smoothness_wegoto","shoulder_right","shoulder_left","line_right","line_left","surface_wegoto"],"geometry":["line"],"tags":{"highway":"path"},"removeTags":{"highway":"path"},"terms":[],"name":"Path"},"highway/crossing":{"fields":["crossing","sloped_curb","tactile_paving"],"geometry":["vertex"],"tags":{"highway":"crossing"},"terms":[],"name":"Street Crossing"},"highway/cyclable_wegoto":{"icon":"highway-cycleway","fields":["address","incline_wegoto","kerb","width","elevation","smoothness_wegoto","shoulder_right","shoulder_left","line_right","line_left","surface_wegoto"],"geometry":["line"],"tags":{"highway":"cycleway"},"removeTags":{"highway":"cycleway"},"terms":["bike"],"name":"Cycle Path"},"highway/ilot_sortie":{"icon":"circle","fields":["island_width_wegoto","island_tactile_paving_wegoto","island_high_wegoto","island_incline_wegoto","island_kerb_wegoto"],"geometry":["vertex"],"tags":{"island:node":"yes"},"removeTags":{"island:node":"yes"},"terms":[],"name":"island"},"highway/ilot_wegoto":{"icon":"waterway-canal","fields":["incline_wegoto","kerb","width","elevation","surface_wegoto","smoothness_wegoto"],"geometry":["line"],"tags":{"footway":"island"},"removeTags":{"footway":"island"},"terms":[],"name":"Island"},"highway/pietonne_wegoto":{"icon":"highway-footway","fields":["address","incline_wegoto","kerb","width","elevation","smoothness_wegoto","shoulder_right","shoulder_left","line_right","line_left","surface_wegoto"],"geometry":["line","area"],"tags":{"highway":"pedestrian"},"removeTags":{"highway":"pedestrian"},"terms":[],"name":"Pedestrian Street"},"highway/traversee_sortie":{"icon":"circle","fields":["obstacle_wegoto","marquage_wegoto","surface_wegoto","poteau_gauche_wegoto","poteau_droit_wegoto","poteau_gauche_h_wegoto","poteau_droit_h_wegoto","largeur_traverse","chanfrein_wegoto","forme_trottoir_wegoto","tactile_paving","traffic_signals_wegoto","traffic_signals_wegoto2","incline_wegoto","kerb","hauteur_trottoir_wegoto"],"geometry":["vertex"],"tags":{"crossing:node":"yes"},"removeTags":{"crossing:node":"yes"},"name":"Crossing"},"highway/traversee_wegoto":{"icon":"waterway-ditch","fields":["incline_wegoto","kerb","width","elevation","surface_wegoto","smoothness_wegoto"],"geometry":["line"],"tags":{"footway":"crossing"},"removeTags":{"footway":"crossing"},"name":"Street Crossing"},"highway/trottoir_wegoto":{"icon":"highway-footway","fields":["address","incline_wegoto","kerb","width","elevation","smoothness_wegoto","shoulder_right","shoulder_left","line_right","line_left","surface_wegoto"],"geometry":["line"],"tags":{"highway":"footway","footway":"sidewalk"},"removeTags":{"highway":"footway","footway":"sidewalk"},"terms":[],"name":"SideWalk"},"line":{"name":"Line","tags":{},"geometry":["line"],"matchScore":0.1},"poa/atm_wegoto":{"icon":"atm","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["atm","distributeur"],"tags":{"obstacle:type":"atm"},"name":"ATM"},"poa/bench_wegoto":{"icon":"bench","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["bench","banc assis"],"tags":{"obstacle:type":"bench"},"name":"Bench"},"poa/benchstand_wegoto":{"icon":"banc2","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["bench stand","banc debout"],"tags":{"obstacle:type":"bench_stand"},"name":"Bench stand"},"poa/bicycle_wegoto":{"icon":"bicycle","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["bycicle","Velos"],"tags":{"obstacle:type":"bicycle"},"name":"Bycicle"},"poa/billboard_wegoto":{"icon":"billboard","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["Billboard","Panneau publicitaire"],"tags":{"obstacle:type":"billboard"},"name":"Billboard"},"poa/byciclepark_wegoto":{"icon":"bike-parking","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["Bycicle park"," parking vélos"],"tags":{"obstacle:type":"bicycle_park"},"name":"Bicycle park"},"poa/carpool_wegoto":{"icon":"autopartage","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["Carpool","parking autopartage"],"tags":{"obstacle:type":"carpool_parking"},"name":"Carpool"},"poa/conservatory_wegoto":{"icon":"veranda","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["Conservatory"],"tags":{"obstacle:type":"conservatory"},"name":"Conservatory"},"poa/constrastedsign_wegoto":{"icon":"poteau","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"constrasted_sign"},"name":"Constrasted sign"},"poa/coverstop_wegoto":{"icon":"bus-stop","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"cover_stop"},"name":"Cover stop"},"poa/crack_wegoto":{"icon":"fente","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"crack"},"name":"Crack"},"poa/electricCharge_wegoto":{"icon":"fuel","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"electric_charge"},"name":"Electrical charge"},"poa/electricalpanel_wegoto":{"icon":"electrical","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"electrical_panel"},"name":"Electrical panel"},"poa/fall_wegoto":{"icon":"trou","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"fall"},"name":"Fall"},"poa/frontstep_wegoto":{"icon":"front-step","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"front_step"},"name":"Front step"},"poa/gardenerbox_wegoto":{"icon":"garden","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"gardener_box"},"name":"Gardener box"},"poa/handicapparking_wegoto":{"icon":"disability","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"handicap_parking"},"name":"Handicap parking"},"poa/letterbox_wegoto":{"icon":"post","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"letterbox"},"name":"Letterbox"},"poa/littlesign_wegoto":{"icon":"poteau","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["little_sign","distributeur"],"tags":{"obstacle:type":"little_sign"},"name":"little sign"},"poa/masterpiece_wegoto":{"icon":"art-gallery","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"masterpiece"},"name":"Master piece"},"poa/metalgate_wegoto":{"icon":"metalgate","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"metal_gate"},"name":"Metal gate"},"poa/morriscolumn_wegoto":{"icon":"morris","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["atm","distributeur"],"tags":{"obstacle:type":"morris_column"},"name":"Morris column"},"poa/notcoverstop_wegoto":{"icon":"bus-not-stop","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["atm","distributeur"],"tags":{"obstacle:type":"not_cover_stop"},"name":"Not cover Stop"},"poa/overhanging_wegoto":{"icon":"saillie","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"overhanging"},"name":"over Hanging"},"poa/parkingmeter_wegoto":{"icon":"parking-meter","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"parking_meter"},"name":"Parking meter"},"poa/post_wegoto":{"icon":"beer","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"post"},"name":"Post"},"poa/rail_wegoto":{"icon":"rail","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"rail"},"name":"Rail"},"poa/roadsign_wegoto":{"icon":"panneau2","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"road_sign"},"name":"Road sign"},"poa/separatewaste_wegoto":{"icon":"bin","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"separate_waste"},"name":"Separate waste"},"poa/streetlamp_wegoto":{"icon":"lamp","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"street_lamp"},"name":"Street lamp"},"poa/toilet_wegoto":{"icon":"toilets","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"toilet"},"name":"Toilet"},"poa/trash_wegoto":{"icon":"waste-basket","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"trash"},"name":"Trash"},"poa/tree_wegoto":{"icon":"park2","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"tree"},"name":"Tree"},"poi/atm_wegoto":{"icon":"atm","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["atm","distributeur"],"tags":{"obstacle:type":"atm"},"name":"ATM"},"poi/bicycle_wegoto":{"icon":"bicycle","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["bycicle","Velos"],"tags":{"obstacle:type":"bicycle"},"name":"Bicycle"},"poi/byciclepark_wegoto":{"icon":"bike-parking","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["Bycicle park"," parking vélos"],"tags":{"obstacle:type":"bicycle_park"},"name":"Bicycle park"},"poi/carpool_wegoto":{"icon":"autopartage","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["Carpool","parking autopartage"],"tags":{"obstacle:type":"carpool_parking"},"name":"Carpool"},"poi/coverstop_wegoto":{"icon":"bus-stop","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"cover_stop"},"name":"Cover stop"},"poi/gardenerbox_wegoto":{"icon":"garden","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"gardener_box"},"name":"Gardener box"},"poi/handicapparking_wegoto":{"icon":"disability","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"handicap_parking"},"name":"Handicap parking"},"poi/letterbox_wegoto":{"icon":"post","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"letterbox"},"name":"Letterbox"},"poi/masterpiece_wegoto":{"icon":"art-gallery","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"masterpiece"},"name":"Master piece"},"poi/notcoverstop_wegoto":{"icon":"bus-not-stop","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":["atm","distributeur"],"tags":{"obstacle:type":"not_cover_stop"},"name":"Not cover Stop"},"poi/parkingmeter_wegoto":{"icon":"parking-meter","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"parking_meter"},"name":"Parking meter"},"poi/separatewaste_wegoto":{"icon":"bin","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"separate_waste"},"name":"Separate waste"},"poi/toilet_wegoto":{"icon":"toilets","geometry":["point"],"fields":["position_wegoto","location_wegoto"],"terms":[],"tags":{"obstacle:type":"toilet"},"name":"Toilet"},"point":{"name":"Point","tags":{},"geometry":["point"],"matchScore":0.1},"relation":{"name":"Relation","icon":"relation","tags":{},"geometry":["relation"],"fields":["relation"]},"rupture/marche_rampe":{"icon":"ramp","geometry":["point"],"fields":["incline_rupture","kerb_rupture"],"tags":{"breakpoint:presence":"onestep","breakpoint:ramp":"yes","breakpoint:elevator":"no"},"name":"Marche avec rampe de seuil"},"rupture/marche_sans_rampe":{"icon":"ramp","geometry":["point"],"fields":["high_rupture"],"terms":[],"tags":{"breakpoint:presence":"onestep","breakpoint:ramp":"no","breakpoint:elevator":"no"},"name":"Marche sans rampe de seuil"},"rupture/marches":{"icon":"ramp","geometry":["point"],"fields":[],"terms":[],"tags":{"breakpoint:presence":"twosteps","breakpoint:ramp":"no","breakpoint:elevator":"no"},"name":"Marches sans plan incliné sans ascenseur"},"rupture/marches_ascenseur":{"icon":"ramp","geometry":["point"],"fields":[],"terms":[],"tags":{"breakpoint:presence":"twosteps","breakpoint:ramp":"no","breakpoint:elevator":"yes"},"name":"Marches avec ascenseur sans plan incliné"},"rupture/marches_plan":{"icon":"ramp","geometry":["point"],"fields":["incline_rupture","kerb_rupture"],"terms":[],"tags":{"breakpoint:presence":"twosteps","breakpoint:ramp":"yes","breakpoint:elevator":"no"},"name":"Marches avec plan incliné sans ascenseur"},"rupture/marches_plan_acensceur":{"icon":"ramp","geometry":["point"],"fields":["incline_rupture","kerb_rupture"],"terms":[],"tags":{"breakpoint:presence":"twosteps","breakpoint:ramp":"yes","breakpoint:elevator":"yes"},"name":"Marches avec plan incliné et ascenseur"},"vertex":{"name":"Other","tags":{},"geometry":["vertex"],"matchScore":0.1}},"defaults":{"area":["area"],"line":["category-road","line"],"point":["category-poi","category-poa","category-rupture"],"vertex":["highway/traversee_sortie","highway/ilot_sortie","vertex"],"relation":["relation"]},"categories":{"category-poa":{"geometry":"point","name":"Point of alert","icon":"poa","members":["poa/post_wegoto","poa/streetlamp_wegoto","poa/roadsign_wegoto","poa/trash_wegoto","poa/billboard_wegoto","poa/morriscolumn_wegoto","poa/byciclepark_wegoto","poa/coverstop_wegoto","poa/notcoverstop_wegoto","poa/bench_wegoto","poa/gardenerbox_wegoto","poa/masterpiece_wegoto","poa/electricalpanel_wegoto","poa/parkingmeter_wegoto","poa/metalgate_wegoto","poa/overhanging_wegoto","poa/tree_wegoto","poa/rail_wegoto","poa/benchstand_wegoto","poa/letterbox_wegoto","poa/toilet_wegoto","poa/handicapparking_wegoto","poa/atm_wegoto","poa/separatewaste_wegoto","poa/constrastedsign_wegoto","poa/bicycle_wegoto","poa/conservatory_wegoto","poa/carpool_wegoto","poa/electricCharge_wegoto","poa/fall_wegoto","poa/crack_wegoto","poa/frontstep_wegoto","poa/littlesign_wegoto"]},"category-poi":{"geometry":"point","name":"Point of interest","icon":"poi","members":["poi/atm_wegoto","poi/bicycle_wegoto","poi/carpool_wegoto","poi/coverstop_wegoto","poi/gardenerbox_wegoto","poi/handicapparking_wegoto","poi/letterbox_wegoto","poi/masterpiece_wegoto","poi/notcoverstop_wegoto","poi/parkingmeter_wegoto","poi/separatewaste_wegoto","poi/toilet_wegoto"]},"category-road":{"geometry":"line","name":"Road Features","icon":"category-roads","members":["highway/trottoir_wegoto","highway/chemin_wegoto","highway/chausse_wegoto","highway/pietonne_wegoto","highway/cyclable_wegoto","highway/traversee_wegoto","highway/ilot_wegoto","highway/autre_wegoto"]},"category-rupture":{"geometry":"point","name":"Rupture de niveau","icon":"ramp","members":["rupture/marche_rampe","rupture/marche_sans_rampe","rupture/marches","rupture/marches_ascenseur","rupture/marches_plan","rupture/marches_plan_acensceur"]}},"fields":{"address":{"type":"address","keys":["addr:city","addr:postcode"],"icon":"address","universal":true,"label":"Address","strings":{"placeholders":{"city":"City","postcode":"Postcode"}}},"bicycle_parking":{"key":"bicycle_parking","type":"combo","label":"Type"},"chanfrein_wegoto":{"key":"crossing:bevel","type":"check","label":"Bevel"},"city_wegoto":{"key":"addr:city","type":"localized","label":"City"},"country":{"key":"country","type":"combo","label":"Country"},"cp_wegoto":{"key":"addr:postcode","type":"localized","label":"Post Code"},"crossing":{"key":"crossing","type":"combo","label":"Type"},"elevation":{"key":"ele","type":"number","icon":"elevation","universal":true,"label":"Elevation"},"forme_trottoir_wegoto":{"key":"crossing:shape","type":"combo","label":"Crossing shape","placeholder":"Droit, arrondi, ...","strings":{"options":{"straight":"Straight","curved:left":"Left Curved","curved:right":"Right Curved","other":"Other"}}},"hauteur_trottoir_wegoto":{"key":"height_curb","type":"number","label":"Height curb"},"high_rupture":{"key":"breakpoint:high","type":"number","label":"High","placeholder":"En cm"},"highway":{"key":"highway","type":"typeCombo","label":"Type"},"incline":{"key":"incline","type":"combo","label":"Incline"},"incline_rupture":{"key":"breakpoint:incline","type":"combo","label":"Incline"},"incline_steps":{"key":"incline","type":"combo","label":"Incline","strings":{"options":{"up":"Up","down":"Down"}}},"incline_wegoto":{"key":"incline","type":"number","label":"Incline","placeholder":" En % "},"island_high_wegoto":{"key":"island:high","type":"number","label":"high of Island"},"island_incline_wegoto":{"key":"island:incline","type":"number","label":"Incline of Island","placeholder":"En % "},"island_kerb_wegoto":{"key":"island:kerb","type":"number","label":"Kerb of Island"},"island_tactile_paving_wegoto":{"key":"island_tactile_paving:e/s","type":"combo","label":"Tactile Paving of Island","placeholder":"BEV","strings":{"options":{"no":"Non présent","yes:m":"Etat 1","limited:1:m":" Etat 1","limited:2:m":"Etat 1","yes:l":"Etat 1","limited:1:l":"Etat 1","limited:2:l":"Etat 1","yes:r":"Etat 1","limited:1:r":"Etat 1","limited:2:r":"Etat 1"}}},"island_width_wegoto":{"key":"island_width","type":"combo","label":"Type of island (cm)","placeholder":"Largueur < 150, Largeur entre 150-180, ...","strings":{"options":{"lower_150":" type lower 150","lower_180":"type 150-180","lower_230":"type 180-230","lower_270":"type 230-270","chicane":"chicane "}}},"kerb":{"key":"kerb","type":"number","label":"Kerb","placeholder":"En % "},"kerb_rupture":{"key":"breakpoint:kerb","type":"number","label":"Kerb","placeholder":"En % "},"kerb_steps":{"key":"kerb","type":"combo","label":"Kerb","strings":{"options":{"up":"Up","down":"Down"}}},"largeur_traverse":{"key":"width","type":"number","label":"Width ","placeholder":"En cm"},"line_left":{"key":"line:left","type":"combo","label":"Line left","strings":{"options":{"bollard":"Bollard","post":"Post","ref":"Ref","sound_ref":"Sound ref","sidewalk":"Sidewalk","railing":"Railing","diagonal_cross":"Diagonal cross","tree":"Tree","hedge":"Hedge","gardener_box":"Gardener box","no":"Nothing"}}},"line_right":{"key":"line:right","type":"combo","label":"Line right","strings":{"options":{"bollard":"Bollard","post":"Post","ref":"Ref","sound_ref":"Sound ref","sidewalk":"Sidewalk","railing":"Railing","diagonal_cross":"Diagonal cross","tree":"Tree","hedge":"Hedge","gardener_box":"Gardener box","no":"Nothing"}}},"location_wegoto":{"key":"obstacle:location","type":"combo","label":"Location","strings":{"options":{"right":"Right","center":"Center","left":"Left"}}},"marquage_wegoto":{"key":"crossing_ref","type":"combo","label":"Crossing reference","placeholder":"Bande blanche, absence de marquage, ...","strings":{"options":{"zebra":"Zebra","dammaged":"Dammaged","unmarked":"Unmarked","other":"Other","temporary":"Temporary"}}},"name":{"key":"name","type":"localized","label":"Name","placeholder":"Street"},"note":{"key":"note","type":"textarea","universal":true,"icon":"note","label":"Note"},"obstacle_wegoto":{"key":"crossing:railway","type":"combo","label":"Crossing obstacle","placeholder":"Pas d'obstacle, rail,  ...","strings":{"options":{"no":"No","yes":"Yes"}}},"parking":{"key":"parking","type":"combo","label":"Type","strings":{"options":{"surface":"Surface","multi-storey":"Multilevel","underground":"Underground","sheds":"Sheds","carports":"Carports","garage_boxes":"Garage Boxes","lane":"Roadside Lane"}}},"position_wegoto":{"key":"obstacle:position","type":"combo","label":"Position","strings":{"options":{"on":"On","off":"Off"}}},"poteau_droit_h_wegoto":{"key":"crossing:bollard:right:high","type":"number","label":"Right high crossing bollard"},"poteau_droit_wegoto":{"key":"crossing:bollard:right","type":"combo","label":"Right crossing bollard","strings":{"options":{"contrasted":"Contrasted","yes":"Yes","barrier":"Barrier","no":"No bollard","other":"Other"}}},"poteau_gauche_h_wegoto":{"key":"crossing:bollard:left:high","type":"number","label":"Left high crossing bollard"},"poteau_gauche_wegoto":{"key":"crossing:bollard:left","type":"combo","label":"Left crossing bollard","strings":{"options":{"contrasted":"Contrasted","yes":"Yes","barrier":"Barrier","no":"No bollard","other":"Other"}}},"railway":{"key":"railway","type":"typeCombo","label":"Type"},"ref":{"key":"ref","type":"text","label":"Reference"},"relation":{"key":"type","type":"combo","label":"Type"},"route":{"key":"route","type":"combo","label":"Type"},"shoulder_left":{"key":"shoulder:left","type":"combo","label":"Shoulder left","strings":{"options":{"road":"Road","rail":"Rail","bicycle":"Bicycle","vegetation":"Vegetation","grass":"Grass","designated_parking":"Designated parking","longside_parking":"Longside parking","angled_parking":"Angled parking","wall":"Wall","building":"Building","house":"House","gap":"Gap","free_space":"Free space"}}},"shoulder_right":{"key":"shoulder:right","type":"combo","label":"Shoulder right","strings":{"options":{"road":"Road","rail":"Rail","bicycle":"Bicycle","vegetation":"Vegetation","grass":"Grass","designated_parking":"Designated Parking","longside_parking":"Longside Parking","angled_parking":"Angled parking","wall":"Wall","building":"Building","house":"House","gap":"Gap","free_space":"Free Space"}}},"sloped_curb":{"key":"sloped_curb","type":"combo","label":"Sloped Curb"},"smoothness":{"key":"smoothness","type":"combo","label":"Smoothness","placeholder":"Thin Rollers, Wheels, Off-Road...","strings":{"options":{"excellent":"Thin Rollers: rollerblade, skateboard","good":"Thin Wheels: racing bike","intermediate":"Wheels: city bike, wheelchair, scooter","bad":"Robust Wheels: trekking bike, car, rickshaw","very_bad":"High Clearance: light duty off-road vehicle","horrible":"Off-Road: heavy duty off-road vehicle","very_horrible":"Specialized off-road: tractor, ATV","impassable":"Impassable / No wheeled vehicle"}}},"smoothness_wegoto":{"key":"smoothness","type":"combo","label":"Smoothnesss","placeholder":"Excellent, intermediate, Bad...","strings":{"options":{"excellent":"Excellent","intermediate":"Intermediate","bad":"Bad"}}},"surface":{"key":"surface","type":"combo","label":"Surface"},"surface_wegoto":{"key":"surface","type":"combo","label":"Surface","strings":{"options":{"asphalt":"Asphalt","paving_stone":"Paving stone","dirt":"Dirt","compacted":"Compacted","grass":"Grass","dalle":"Dalle","wood":"Wood"}}},"tactile_paving":{"key":"tactile_paving","type":"combo","label":"Tactile Paving","placeholder":"BEV","strings":{"options":{"no":"Non présent","yes:m":"Etat 1","limited:1:m":" Etat 1","limited:2:m":"Etat 1","yes:l":"Etat 1","limited:1:l":"Etat 1","limited:2:l":"Etat 1","yes:r":"Etat 1","limited:1:r":"Etat 1","limited:2:r":"Etat 1"}}},"traffic_signals":{"key":"traffic_signals","type":"combo","label":"Type","default":"signal"},"traffic_signals_wegoto":{"key":"traffic_signals:presence","type":"check","label":"Traffic signal"},"traffic_signals_wegoto2":{"key":"traffic_signals:sound","type":"check","label":"Sound Traffic signal"},"wheelchair":{"key":"wheelchair","type":"radio","options":["yes","limited","no"],"icon":"wheelchair","universal":true,"label":"Wheelchair Access"},"width":{"key":"est_width","type":"number","label":"Width (Meters)","placeholder":"En cm"},"wikipedia":{"key":"wikipedia","keys":["wikipedia","wikidata"],"type":"wikipedia","icon":"wikipedia","universal":true,"label":"Wikipedia"}}};