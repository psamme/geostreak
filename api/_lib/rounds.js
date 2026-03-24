const DAILY_START_DATE = "2026-03-20";
const DAILY_RUN_LENGTH = 10;

const COUNTRY_ROUNDS = [
  { id: "day-1-jp", country: "Japan", code: "JP", tier: "Easy", cities: ["Tokyo", "Osaka", "Kyoto", "Sapporo", "Nagoya"] },
  { id: "day-2-it", country: "Italy", code: "IT", tier: "Easy", cities: ["Rome", "Milan", "Naples", "Turin", "Palermo"] },
  { id: "day-3-br", country: "Brazil", code: "BR", tier: "Easy", cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Recife"] },
  { id: "day-4-tr", country: "Turkey", code: "TR", tier: "Easy", cities: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"] },
  { id: "day-5-ma", country: "Morocco", code: "MA", tier: "Medium", cities: ["Casablanca", "Fez", "Marrakesh", "Tangier", "Oujda"] },
  { id: "day-6-ro", country: "Romania", code: "RO", tier: "Medium", cities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi", "Constanta"] },
  { id: "day-7-kz", country: "Kazakhstan", code: "KZ", tier: "Medium", cities: ["Almaty", "Astana", "Shymkent", "Aktobe", "Karaganda"] },
  { id: "day-8-kh", country: "Cambodia", code: "KH", tier: "Medium", cities: ["Phnom Penh", "Siem Reap", "Battambang", "Kampot", "Sihanoukville"] },
  { id: "day-9-kg", country: "Kyrgyzstan", code: "KG", tier: "Hard", cities: ["Bishkek", "Osh", "Karakol", "Jalal-Abad", "Naryn"] },
  { id: "day-10-md", country: "Moldova", code: "MD", tier: "Hard", cities: ["Chisinau", "Balti", "Cahul", "Orhei", "Soroca"] },
  { id: "day-11-la", country: "Laos", code: "LA", tier: "Hard", cities: ["Vientiane", "Luang Prabang", "Pakse", "Savannakhet", "Vang Vieng"] },
  { id: "day-12-bf", country: "Burkina Faso", code: "BF", tier: "Hard", cities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora"] },
  { id: "day-13-uz", country: "Uzbekistan", code: "UZ", tier: "Expert", cities: ["Tashkent", "Samarkand", "Bukhara", "Andijan", "Nukus"] },
  { id: "day-14-na", country: "Namibia", code: "NA", tier: "Expert", cities: ["Windhoek", "Walvis Bay", "Swakopmund", "Luderitz", "Otjiwarongo"] },
  { id: "day-15-tj", country: "Tajikistan", code: "TJ", tier: "Expert", cities: ["Dushanbe", "Khujand", "Kulob", "Bokhtar", "Khorog"] },
  { id: "day-16-al", country: "Albania", code: "AL", tier: "Expert", cities: ["Tirana", "Durres", "Shkoder", "Vlore", "Gjirokaster"] },
  { id: "day-17-pt", country: "Portugal", code: "PT", tier: "Easy", cities: ["Lisbon", "Porto", "Braga", "Coimbra", "Faro"] },
  { id: "day-18-th", country: "Thailand", code: "TH", tier: "Easy", cities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Khon Kaen"] },
  { id: "day-19-eg", country: "Egypt", code: "EG", tier: "Easy", cities: ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan"] },
  { id: "day-20-za", country: "South Africa", code: "ZA", tier: "Easy", cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"] },
  { id: "day-21-ar", country: "Argentina", code: "AR", tier: "Easy", cities: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "La Plata"] },
  { id: "day-22-in", country: "India", code: "IN", tier: "Easy", cities: ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata"] },
  { id: "day-23-id", country: "Indonesia", code: "ID", tier: "Easy", cities: ["Jakarta", "Surabaya", "Bandung", "Medan", "Yogyakarta"] },
  { id: "day-24-ca", country: "Canada", code: "CA", tier: "Easy", cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa"] },
  { id: "day-25-es", country: "Spain", code: "ES", tier: "Easy", cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao"] },
  { id: "day-26-de", country: "Germany", code: "DE", tier: "Easy", cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"] },
  { id: "day-27-mx", country: "Mexico", code: "MX", tier: "Easy", cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Merida"] },
  { id: "day-28-vn", country: "Vietnam", code: "VN", tier: "Easy", cities: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue", "Can Tho"] },
  { id: "day-29-pl", country: "Poland", code: "PL", tier: "Medium", cities: ["Warsaw", "Krakow", "Gdansk", "Wroclaw", "Poznan"] },
  { id: "day-30-my", country: "Malaysia", code: "MY", tier: "Medium", cities: ["Kuala Lumpur", "George Town", "Johor Bahru", "Ipoh", "Kota Kinabalu"] },
  { id: "day-31-pe", country: "Peru", code: "PE", tier: "Medium", cities: ["Lima", "Cusco", "Arequipa", "Trujillo", "Piura"] },
  { id: "day-32-gr", country: "Greece", code: "GR", tier: "Medium", cities: ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa"] },
  { id: "day-33-sa", country: "Saudi Arabia", code: "SA", tier: "Medium", cities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam"] },
  { id: "day-34-ph", country: "Philippines", code: "PH", tier: "Medium", cities: ["Manila", "Cebu City", "Davao", "Baguio", "Iloilo City"] },
  { id: "day-35-cl", country: "Chile", code: "CL", tier: "Medium", cities: ["Santiago", "Valparaiso", "Concepcion", "Antofagasta", "Puerto Montt"] },
  { id: "day-36-ke", country: "Kenya", code: "KE", tier: "Medium", cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"] },
  { id: "day-37-se", country: "Sweden", code: "SE", tier: "Medium", cities: ["Stockholm", "Gothenburg", "Malmo", "Uppsala", "Linkoping"] },
  { id: "day-38-np", country: "Nepal", code: "NP", tier: "Medium", cities: ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Bharatpur"] },
  { id: "day-39-tz", country: "Tanzania", code: "TZ", tier: "Hard", cities: ["Dar es Salaam", "Dodoma", "Arusha", "Mwanza", "Zanzibar City"] },
  { id: "day-40-hr", country: "Croatia", code: "HR", tier: "Hard", cities: ["Zagreb", "Split", "Rijeka", "Osijek", "Dubrovnik"] },
  { id: "day-41-jo", country: "Jordan", code: "JO", tier: "Hard", cities: ["Amman", "Aqaba", "Irbid", "Zarqa", "Madaba"] },
  { id: "day-42-ec", country: "Ecuador", code: "EC", tier: "Hard", cities: ["Quito", "Guayaquil", "Cuenca", "Loja", "Manta"] },
  { id: "day-43-gh", country: "Ghana", code: "GH", tier: "Hard", cities: ["Accra", "Kumasi", "Takoradi", "Tamale", "Cape Coast"] },
  { id: "day-44-fi", country: "Finland", code: "FI", tier: "Hard", cities: ["Helsinki", "Turku", "Tampere", "Oulu", "Rovaniemi"] },
  { id: "day-45-at", country: "Austria", code: "AT", tier: "Hard", cities: ["Vienna", "Salzburg", "Graz", "Innsbruck", "Linz"] },
  { id: "day-46-rs", country: "Serbia", code: "RS", tier: "Hard", cities: ["Belgrade", "Novi Sad", "Nis", "Kragujevac", "Subotica"] },
  { id: "day-47-bo", country: "Bolivia", code: "BO", tier: "Expert", cities: ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Potosi"] },
  { id: "day-48-ge", country: "Georgia", code: "GE", tier: "Expert", cities: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Zugdidi"] },
  { id: "day-49-tn", country: "Tunisia", code: "TN", tier: "Expert", cities: ["Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte"] },
  { id: "day-50-lk", country: "Sri Lanka", code: "LK", tier: "Expert", cities: ["Colombo", "Kandy", "Galle", "Jaffna", "Negombo"] },
  { id: "day-51-kr", country: "South Korea", code: "KR", tier: "Expert", cities: ["Seoul", "Busan", "Incheon", "Daegu", "Gwangju"] },
  { id: "day-52-nl", country: "Netherlands", code: "NL", tier: "Expert", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"] },
  { id: "day-53-ch", country: "Switzerland", code: "CH", tier: "Expert", cities: ["Zurich", "Geneva", "Basel", "Bern", "Lausanne"] },
  { id: "day-54-bd", country: "Bangladesh", code: "BD", tier: "Expert", cities: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"] },
  { id: "day-55-be", country: "Belgium", code: "BE", tier: "Expert", cities: ["Brussels", "Antwerp", "Ghent", "Bruges", "Liege"] },
  { id: "day-56-az", country: "Azerbaijan", code: "AZ", tier: "Expert", cities: ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Lankaran"] },
  { id: "day-57-gt", country: "Guatemala", code: "GT", tier: "Expert", cities: ["Guatemala City", "Quetzaltenango", "Antigua Guatemala", "Escuintla", "Puerto Barrios"] },
  { id: "day-58-bw", country: "Botswana", code: "BW", tier: "Expert", cities: ["Gaborone", "Francistown", "Maun", "Kasane", "Serowe"] },
  { id: "day-59-uy", country: "Uruguay", code: "UY", tier: "Expert", cities: ["Montevideo", "Salto", "Paysandu", "Maldonado", "Rivera"] },
  { id: "day-60-cm", country: "Cameroon", code: "CM", tier: "Expert", cities: ["Yaounde", "Douala", "Garoua", "Bamenda", "Bafoussam"] },
  { id: "day-61-fr", country: "France", code: "FR", tier: "Medium", cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Bordeaux"] },
  { id: "day-62-au", country: "Australia", code: "AU", tier: "Medium", cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"] },
  { id: "day-63-ua", country: "Ukraine", code: "UA", tier: "Medium", cities: ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Lviv"] },
  { id: "day-64-ug", country: "Uganda", code: "UG", tier: "Medium", cities: ["Kampala", "Entebbe", "Jinja", "Mbarara", "Gulu"] },
  { id: "day-65-mr", country: "Mauritania", code: "MR", tier: "Hard", cities: ["Nouakchott", "Nouadhibou", "Kiffa", "Rosso", "Atar"] },
  { id: "day-66-mg", country: "Madagascar", code: "MG", tier: "Hard", cities: ["Antananarivo", "Toamasina", "Antsirabe", "Mahajanga", "Fianarantsoa"] },
  { id: "day-67-nz", country: "New Zealand", code: "NZ", tier: "Hard", cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Dunedin"] },
  { id: "day-68-py", country: "Paraguay", code: "PY", tier: "Hard", cities: ["Asuncion", "Ciudad del Este", "Encarnacion", "Pedro Juan Caballero", "Concepcion"] },
  { id: "day-69-om", country: "Oman", code: "OM", tier: "Expert", cities: ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"] },
  { id: "day-70-by", country: "Belarus", code: "BY", tier: "Expert", cities: ["Minsk", "Gomel", "Brest", "Vitebsk", "Grodno"] },
  { id: "day-71-am", country: "Armenia", code: "AM", tier: "Medium", cities: ["Yerevan", "Gyumri", "Vanadzor", "Hrazdan", "Goris"] },
  { id: "day-72-ml", country: "Mali", code: "ML", tier: "Medium", cities: ["Bamako", "Sikasso", "Mopti", "Kayes", "Gao"] },
  { id: "day-73-gy", country: "Guyana", code: "GY", tier: "Medium", cities: ["Georgetown", "Linden", "New Amsterdam", "Bartica", "Anna Regina"] },
  { id: "day-74-qa", country: "Qatar", code: "QA", tier: "Medium", cities: ["Doha", "Al Rayyan", "Al Wakrah", "Al Khor", "Madinat ash Shamal"] },
  { id: "day-75-ee", country: "Estonia", code: "EE", tier: "Hard", cities: ["Tallinn", "Tartu", "Narva", "Parnu", "Viljandi"] },
  { id: "day-76-mn", country: "Mongolia", code: "MN", tier: "Hard", cities: ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Khovd"] },
  { id: "day-77-pg", country: "Papua New Guinea", code: "PG", tier: "Hard", cities: ["Port Moresby", "Lae", "Mount Hagen", "Madang", "Kimbe"] },
  { id: "day-78-sn", country: "Senegal", code: "SN", tier: "Hard", cities: ["Dakar", "Touba", "Thies", "Saint-Louis", "Kaolack"] },
  { id: "day-79-hu", country: "Hungary", code: "HU", tier: "Expert", cities: ["Budapest", "Debrecen", "Szeged", "Pecs", "Gyor"] },
  { id: "day-80-bg", country: "Bulgaria", code: "BG", tier: "Expert", cities: ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse"] },
  { id: "day-81-td", country: "Chad", code: "TD", tier: "Medium", cities: ["N'Djamena", "Moundou", "Sarh", "Abéché", "Faya-Largeau"] },
  { id: "day-82-vu", country: "Vanuatu", code: "VU", tier: "Medium", cities: ["Port Vila", "Luganville", "Norsup", "Isangel", "Lakatoro"] },
  { id: "day-83-lt", country: "Lithuania", code: "LT", tier: "Medium", cities: ["Vilnius", "Kaunas", "Klaipeda", "Siauliai", "Panevezys"] },
  { id: "day-84-lv", country: "Latvia", code: "LV", tier: "Medium", cities: ["Riga", "Daugavpils", "Liepaja", "Jelgava", "Ventspils"] },
  { id: "day-85-gn", country: "Guinea", code: "GN", tier: "Hard", cities: ["Conakry", "Kankan", "Kindia", "Labe", "Nzerekore"] },
  { id: "day-86-no", country: "Norway", code: "NO", tier: "Hard", cities: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromso"] },
  { id: "day-87-zw", country: "Zimbabwe", code: "ZW", tier: "Hard", cities: ["Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo"] },
  { id: "day-88-ye", country: "Yemen", code: "YE", tier: "Hard", cities: ["Sanaa", "Aden", "Taiz", "Al Hudaydah", "Ibb"] },
  { id: "day-89-fj", country: "Fiji", code: "FJ", tier: "Expert", cities: ["Suva", "Nadi", "Lautoka", "Labasa", "Ba"] },
  { id: "day-90-sr", country: "Suriname", code: "SR", tier: "Expert", cities: ["Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo", "Albina"] },
  { id: "day-91-tg", country: "Togo", code: "TG", tier: "Medium", cities: ["Lome", "Sokode", "Kara", "Atakpame", "Dapaong"] },
  { id: "day-92-bj", country: "Benin", code: "BJ", tier: "Medium", cities: ["Cotonou", "Porto-Novo", "Parakou", "Abomey-Calavi", "Natitingou"] },
  { id: "day-93-mw", country: "Malawi", code: "MW", tier: "Medium", cities: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Karonga"] },
  { id: "day-94-mz", country: "Mozambique", code: "MZ", tier: "Medium", cities: ["Maputo", "Beira", "Nampula", "Quelimane", "Tete"] },
  { id: "day-95-ao", country: "Angola", code: "AO", tier: "Hard", cities: ["Luanda", "Huambo", "Lobito", "Benguela", "Lubango"] },
  { id: "day-96-dz", country: "Algeria", code: "DZ", tier: "Hard", cities: ["Algiers", "Oran", "Constantine", "Annaba", "Tlemcen"] },
  { id: "day-97-ly", country: "Libya", code: "LY", tier: "Hard", cities: ["Tripoli", "Benghazi", "Misrata", "Sabha", "Zawiya"] },
  { id: "day-98-sd", country: "Sudan", code: "SD", tier: "Hard", cities: ["Khartoum", "Omdurman", "Port Sudan", "Nyala", "Kassala"] },
  { id: "day-99-iq", country: "Iraq", code: "IQ", tier: "Expert", cities: ["Baghdad", "Basra", "Mosul", "Erbil", "Najaf"] },
  { id: "day-100-ir", country: "Iran", code: "IR", tier: "Expert", cities: ["Tehran", "Mashhad", "Isfahan", "Tabriz", "Shiraz"] },
  { id: "day-101-lb", country: "Lebanon", code: "LB", tier: "Medium", cities: ["Beirut", "Tripoli", "Sidon", "Tyre", "Zahle"] },
  { id: "day-102-kw", country: "Kuwait", code: "KW", tier: "Medium", cities: ["Kuwait City", "Al Ahmadi", "Hawalli", "Salmiya", "Al Jahra"] },
  { id: "day-103-ae", country: "United Arab Emirates", code: "AE", tier: "Medium", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ras Al Khaimah"] },
  { id: "day-104-zm", country: "Zambia", code: "ZM", tier: "Medium", cities: ["Lusaka", "Ndola", "Kitwe", "Livingstone", "Kasama"] },
  { id: "day-105-cg", country: "Congo", code: "CG", tier: "Hard", cities: ["Brazzaville", "Pointe-Noire", "Dolisie", "Nkayi", "Owando"] },
  { id: "day-106-lr", country: "Liberia", code: "LR", tier: "Hard", cities: ["Monrovia", "Gbarnga", "Buchanan", "Kakata", "Zwedru"] },
  { id: "day-107-sl", country: "Sierra Leone", code: "SL", tier: "Hard", cities: ["Freetown", "Bo", "Kenema", "Makeni", "Koidu"] },
  { id: "day-108-dj", country: "Djibouti", code: "DJ", tier: "Hard", cities: ["Djibouti", "Ali Sabieh", "Tadjoura", "Dikhil", "Obock"] },
  { id: "day-109-er", country: "Eritrea", code: "ER", tier: "Expert", cities: ["Asmara", "Keren", "Massawa", "Mendefera", "Barentu"] },
  { id: "day-110-ga", country: "Gabon", code: "GA", tier: "Expert", cities: ["Libreville", "Port-Gentil", "Franceville", "Oyem", "Lambarene"] },
  { id: "day-111-ie", country: "Ireland", code: "IE", tier: "Medium", cities: ["Dublin", "Cork", "Galway", "Limerick", "Sligo"] },
  { id: "day-112-is", country: "Iceland", code: "IS", tier: "Medium", cities: ["Reykjavik", "Kopavogur", "Akureyri", "Hafnarfjordur", "Egilsstadir"] },
  { id: "day-113-dk", country: "Denmark", code: "DK", tier: "Medium", cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg"] },
  { id: "day-114-sk", country: "Slovakia", code: "SK", tier: "Medium", cities: ["Bratislava", "Kosice", "Presov", "Zilina", "Banska Bystrica"] },
  { id: "day-115-si", country: "Slovenia", code: "SI", tier: "Hard", cities: ["Ljubljana", "Maribor", "Celje", "Kranj", "Koper"] },
  { id: "day-116-lu", country: "Luxembourg", code: "LU", tier: "Hard", cities: ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck"] },
  { id: "day-117-pk", country: "Pakistan", code: "PK", tier: "Hard", cities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Peshawar"] },
  { id: "day-118-af", country: "Afghanistan", code: "AF", tier: "Hard", cities: ["Kabul", "Herat", "Mazar-i-Sharif", "Kandahar", "Jalalabad"] },
  { id: "day-119-mm", country: "Myanmar", code: "MM", tier: "Expert", cities: ["Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Pathein"] },
  { id: "day-120-bt", country: "Bhutan", code: "BT", tier: "Expert", cities: ["Thimphu", "Phuntsholing", "Punakha", "Paro", "Trongsa"] },
  { id: "day-121-bn", country: "Brunei", code: "BN", tier: "Medium", cities: ["Bandar Seri Begawan", "Kuala Belait", "Tutong", "Seria", "Bangar"] },
  { id: "day-122-il", country: "Israel", code: "IL", tier: "Medium", cities: ["Jerusalem", "Tel Aviv", "Haifa", "Beer Sheva", "Nazareth"] },
  { id: "day-123-pa", country: "Panama", code: "PA", tier: "Medium", cities: ["Panama City", "Colon", "David", "Santiago", "Chitre"] },
  { id: "day-124-cr", country: "Costa Rica", code: "CR", tier: "Medium", cities: ["San Jose", "Limon", "Alajuela", "Heredia", "Liberia"] },
  { id: "day-125-ni", country: "Nicaragua", code: "NI", tier: "Hard", cities: ["Managua", "Leon", "Masaya", "Granada", "Esteli"] },
  { id: "day-126-hn", country: "Honduras", code: "HN", tier: "Hard", cities: ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choloma", "Comayagua"] },
  { id: "day-127-sv", country: "El Salvador", code: "SV", tier: "Hard", cities: ["San Salvador", "Santa Ana", "San Miguel", "Soyapango", "Ahuachapan"] },
  { id: "day-128-bz", country: "Belize", code: "BZ", tier: "Hard", cities: ["Belize City", "Belmopan", "San Ignacio", "Orange Walk", "Dangriga"] },
  { id: "day-129-jm", country: "Jamaica", code: "JM", tier: "Expert", cities: ["Kingston", "Montego Bay", "Spanish Town", "Portmore", "Mandeville"] },
  { id: "day-130-cu", country: "Cuba", code: "CU", tier: "Expert", cities: ["Havana", "Santiago de Cuba", "Camaguey", "Holguin", "Cienfuegos"] },
  { id: "day-131-bs", country: "Bahamas", code: "BS", tier: "Medium", cities: ["Nassau", "Freeport", "Marsh Harbour", "George Town", "West End"] },
  { id: "day-132-sr", country: "Suriname", code: "SR", tier: "Medium", cities: ["Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo", "Albina"] },
  { id: "day-133-gw", country: "Guinea-Bissau", code: "GW", tier: "Medium", cities: ["Bissau", "Bafata", "Gabu", "Bissora", "Cacheu"] },
  { id: "day-134-rw", country: "Rwanda", code: "RW", tier: "Medium", cities: ["Kigali", "Butare", "Gisenyi", "Ruhengeri", "Kibuye"] },
  { id: "day-135-bi", country: "Burundi", code: "BI", tier: "Hard", cities: ["Bujumbura", "Gitega", "Ngozi", "Rumonge", "Muyinga"] },
  { id: "day-136-so", country: "Somalia", code: "SO", tier: "Hard", cities: ["Mogadishu", "Hargeisa", "Kismayo", "Bosaso", "Baidoa"] },
  { id: "day-137-at", country: "Austria", code: "AT", tier: "Hard", cities: ["Vienna", "Salzburg", "Graz", "Innsbruck", "Linz"] },
  { id: "day-138-ch", country: "Switzerland", code: "CH", tier: "Hard", cities: ["Zurich", "Geneva", "Basel", "Bern", "Lausanne"] },
  { id: "day-139-be", country: "Belgium", code: "BE", tier: "Expert", cities: ["Brussels", "Antwerp", "Ghent", "Bruges", "Liege"] },
  { id: "day-140-nl", country: "Netherlands", code: "NL", tier: "Expert", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"] },
  { id: "day-141-kr", country: "South Korea", code: "KR", tier: "Medium", cities: ["Seoul", "Busan", "Incheon", "Daegu", "Gwangju"] },
  { id: "day-142-cm", country: "Cameroon", code: "CM", tier: "Medium", cities: ["Yaounde", "Douala", "Garoua", "Bamenda", "Bafoussam"] },
  { id: "day-143-uy", country: "Uruguay", code: "UY", tier: "Medium", cities: ["Montevideo", "Salto", "Paysandu", "Maldonado", "Rivera"] },
  { id: "day-144-tn", country: "Tunisia", code: "TN", tier: "Medium", cities: ["Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte"] },
  { id: "day-145-jo", country: "Jordan", code: "JO", tier: "Hard", cities: ["Amman", "Aqaba", "Irbid", "Zarqa", "Madaba"] },
  { id: "day-146-fi", country: "Finland", code: "FI", tier: "Hard", cities: ["Helsinki", "Turku", "Tampere", "Oulu", "Rovaniemi"] },
  { id: "day-147-bo", country: "Bolivia", code: "BO", tier: "Hard", cities: ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Potosi"] },
  { id: "day-148-ge", country: "Georgia", code: "GE", tier: "Hard", cities: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Zugdidi"] },
  { id: "day-149-ec", country: "Ecuador", code: "EC", tier: "Expert", cities: ["Quito", "Guayaquil", "Cuenca", "Loja", "Manta"] },
  { id: "day-150-ke", country: "Kenya", code: "KE", tier: "Expert", cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"] },
  { id: "day-151-pt", country: "Portugal", code: "PT", tier: "Medium", cities: ["Lisbon", "Porto", "Braga", "Coimbra", "Faro"] },
  { id: "day-152-th", country: "Thailand", code: "TH", tier: "Medium", cities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Khon Kaen"] },
  { id: "day-153-eg", country: "Egypt", code: "EG", tier: "Medium", cities: ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan"] },
  { id: "day-154-in", country: "India", code: "IN", tier: "Medium", cities: ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata"] },
  { id: "day-155-mx", country: "Mexico", code: "MX", tier: "Hard", cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Merida"] },
  { id: "day-156-de", country: "Germany", code: "DE", tier: "Hard", cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"] },
  { id: "day-157-vn", country: "Vietnam", code: "VN", tier: "Hard", cities: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue", "Can Tho"] },
  { id: "day-158-gr", country: "Greece", code: "GR", tier: "Hard", cities: ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa"] },
  { id: "day-159-ph", country: "Philippines", code: "PH", tier: "Expert", cities: ["Manila", "Cebu City", "Davao", "Baguio", "Iloilo City"] },
  { id: "day-160-np", country: "Nepal", code: "NP", tier: "Expert", cities: ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Bharatpur"] }
];

function pointsForIndex(index) {
  return Math.max(1, 5 - index);
}

function parseDateKey(dateKey) {
  const [year, month, day] = String(dateKey || DAILY_START_DATE).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function puzzleIndexForDate(dateKey) {
  const start = parseDateKey(DAILY_START_DATE);
  const target = parseDateKey(dateKey);
  const diffMs = target.getTime() - start.getTime();
  return Math.floor(diffMs / 86400000);
}

function authoredDayCount() {
  return Math.floor(COUNTRY_ROUNDS.length / DAILY_RUN_LENGTH);
}

function getRoundByLevel(level, runLength = DAILY_RUN_LENGTH) {
  const effectiveLevel = Math.max(1, Math.min(Number(level) || 1, runLength, COUNTRY_ROUNDS.length));
  return {
    ...COUNTRY_ROUNDS[effectiveLevel - 1],
    level: effectiveLevel
  };
}

function getRoundForDate(dateKey = DAILY_START_DATE, roundNumber = 1) {
  const safeDayIndex = Math.max(0, Math.min(puzzleIndexForDate(dateKey), authoredDayCount() - 1));
  const safeRoundNumber = Math.max(1, Math.min(Number(roundNumber) || 1, DAILY_RUN_LENGTH));
  const safeIndex = safeDayIndex * DAILY_RUN_LENGTH + (safeRoundNumber - 1);
  return {
    ...COUNTRY_ROUNDS[safeIndex],
    level: safeIndex + 1,
    puzzleNumber: safeDayIndex + 1,
    dateKey,
    roundNumber: safeRoundNumber
  };
}

function serializeRound(round, visibleClueCount = 1) {
  const clues = [...round.cities]
    .reverse()
    .slice(0, Math.max(0, Math.min(visibleClueCount, round.cities.length)))
    .map((city, index) => ({
      city,
      clueLabel: `Clue ${index + 1}`,
      points: pointsForIndex(index)
    }));

  return {
    id: round.id,
    tier: round.tier,
    level: round.level,
    puzzleNumber: round.puzzleNumber,
    dateKey: round.dateKey,
    roundNumber: round.roundNumber,
    visibleClueCount: clues.length,
    totalClueCount: round.cities.length,
    clues
  };
}

module.exports = {
  COUNTRY_ROUNDS,
  DAILY_RUN_LENGTH,
  DAILY_START_DATE,
  authoredDayCount,
  getRoundByLevel,
  getRoundForDate,
  serializeRound
};
