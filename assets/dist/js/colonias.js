function change(alcaldia, colonia){
    alcaldia = document.getElementById(alcaldia);
    colonia = document.getElementById(colonia);
    colonia.value ="";
    colonia.innerHTML = "";
    if(alcaldia.value == "Cabo Delgado"){
    var optionArray = ["|","Ancuabe|Ancuabe",
                              "Balama|Balama",
                              "Chiúre|Chiúre",
                              "Ibo|Ibo",
                              "Macomia|Macomia",
                              "Mecúfi|Mecúfi",
                              "Meluco|Meluco",
                              "Metuge|Metuge",
                              "Mocímboa da Praia|Mocímboa da Praia",
                              "Montepuez|Montepuez",
                              "Mueda|Mueda",
                              "Muidumbe|Muidumbe",
                              "Namuno|Namuno",
                              "Nangade|Nangade",
                              "Palma|Palma",
                              "Pemba|Pemba",
                              "Quissanga|Quissanga"];
    } else if(alcaldia.value == "Gaza"){
    var optionArray = ["|","Bilene|Bilene",
                              "Chibuto|Chibuto",
                              "Chicualacuala|Chicualacuala",
                              "Chigubo|Chigubo",
                              "Chókwè|Chókwè",
                              "Chongoene|Chongoene",
                              "Guijá|Guijá",
                              "Limpopo|Limpopo",
                              "Mabalane|Mabalane",
                              "Manjacaze|Manjacaze",
                              "Mapai|Mapai",
                              "Massangena|Massangena",
                              "Massingir|Massingir",
                              "Xai-Xai|Xai-Xai"];                              
    } else if(alcaldia.value == "Inhambane"){
    var optionArray = ["|",   "Funhalouro|Funhalouro",
                              "Govuro|Govuro",
                              "Homoíne|Homoíne",
                              "Inhambane|Inhambane",
                              "Inharrime|Inharrime",
                              "Inhassoro|Inhassoro",
                              "Jangamo|Jangamo",
                              "Mabote|Mabote",
                              "Massinga|Massinga",
                              "Maxixe|Maxixe",
                              "Morrumbene|Morrumbene",
                              "Panda|Panda",
                              "Vilanculos|Vilanculos",
                              "Zavala|Zavala"];                           
    } else if(alcaldia.value == "Manica"){
    var optionArray = ["|","Bárue|Bárue",
                              "Chimoio|Chimoio",
                              "Gondola|Gondola",
                              "Guro|Guro",
                              "Macate|Macate",
                              "Machaze|Machaze",
                              "Macossa|Macossa",
                              "Manica|Manica",
                              "Mossurize|Mossurize",
                              "Sussundenga|Sussundenga",
                              "Tambara|Tambara",
                              "Vanduzi|Vanduzi"];                            
    } else if(alcaldia.value == "Provincia de Maputo"){ 
    var optionArray = ["|","Boane|Boane",
                              "Magude|Magude",
                              "Manhiça|Manhiça",
                              "Marracuene|Marracuene",
                              "Matola|Matola",
                              "Matutuíne|Matutuíne",
                              "Moamba|Moamba",
                              "Namaacha|Namaacha"];                           
    }else if(alcaldia.value == "Nampula"){
    var optionArray = ["|","Angoche|Angoche",
                              "Eráti|Eráti",
                              "Ilha de Moçambique|Ilha de Moçambique",
                              "Lalaua|Lalaua",
                              "Larde|Larde",
                              "Liúpo|Liúpo",
                              "Malema|Malema",
                              "Meconta|Meconta",
                              "Mecubúri|Mecubúri",
                              "Memba|Memba",
                              "Mogincual|Mogincual",
                              "Mogovolas|Mogovolas",
                              "Moma|Moma",
                              "Monapo|Monapo",
                              "Mossuril|Mossuril",
                              "Muecate|Muecate",
                              "Murrupula|Murrupula",
                              "Nacala-a-Velha|Nacala-a-Velha",
                              "Nacala Porto|Nacala Porto",
                              "Nacarôa|Nacarôa",
                              "Nampula|Nampula",
                              "Rapale|Rapale",
                              "Ribaué|Rapale"];                          
    } else if(alcaldia.value == "Niassa"){
    var optionArray = ["|","Chimbonila|Chimbonila",
                              "Cuamba|Cuamba",
                              "Lago|Lago",
                              "Lichinga|Lichinga",
                              "Majune|Majune",
                              "Mandimba|Mandimba",
                              "Marrupa|Marrupa",
                              "Maúa|Maúa",
                              "Mavago|Mavago",
                              "Mecanhelas|Mecanhelas",
                              "Mecula|Mecula",
                              "Metarica|Metarica",
                              "Muembe|Muembe",
                              "N'gauma|N'gauma",
                              "Nipepe|Nipepe",
                              "Sanga|Sanga"];
    } else if(alcaldia.value == "Sofala"){
    var optionArray = ["|","Beira|Beira",
                              "Búzi|Búzi",
                              "Caia|Caia",
                              "Chemba|Chemba",
                              "Cheringoma|Cheringoma",
                              "Chibabava|Chibabava",
                              "Dondo|Dondo",
                              "Gorongosa|Gorongosa",
                              "Machanga|Machanga",
                              "Maringué|Maringué",
                              "Marromeu|Marromeu",
                              "Muanza|Muanza",
                              "Nhamatanda|Nhamatanda"];
    } else if(alcaldia.value == "Tete"){
    var optionArray = ["|","Angónia|Angónia",
                              "Cahora-Bassa|Cahora-Bassa",
                              "Changara|Changara",
                              "Chifunde|Chifunde",
                              "Chiuta|Chiuta",
                              "Dôa|Dôa",
                              "Macanga|Macanga",
                              "Magoé|Magoé",
                              "Marara|Marara",
                              "Marávia|Marávia",
                              "Moatize|Moatize",
                              "Mutarara|Mutarara",
                              "Tete|Tete",
                              "Tsangano|Tsangano",
                              "Zumbo|Zumbo"];
    } else if(alcaldia.value == "Zambezia"){
    var optionArray = ["|","Alto Molócue|Alto Molócue",
                              "Chinde|Chinde",
                              "Derre|Derre",
                              "Gilé|Gilé",
                              "Gurué|Gurué",
                              "Ile|Ile",
                              "Inhassunge|Inhassunge",
                              "Luabo|Luabo",
                              "Lugela|Lugela",
                              "Maganja da Costa|Maganja da Costa",
                              "Milange|Milange",
                              "Mocuba|Mocuba",
                              "Mocubela|Mocuba",
                              "Molumbo|Molumbo",
                              "Mopeia|Mopeia",
                              "Morrumbala|Morrumbala",
                              "Mulevala|Mulevala",
                              "Namacurra|Namacurra",
                              "Namarroi|Namarroi",
                              "Nicoadala|Nicoadala",
                              "Pebane|Pebane",
                              "Quelimane|Quelimane"];
    } else if(alcaldia.value == "Maputo Cidade"){
    var optionArray = ["|","Distrito Urbano de KaMpfumo|Distrito Urbano de KaMpfumo",
                              "Distrito Urbano de Nlhamankulu|Distrito Urbano de Nlhamankulu",
                              "Distrito Urbano de KaMaxaquene|Distrito Urbano de KaMaxaquene",
                              "Distrito Urbano de KaMavota|Distrito Urbano de KaMavota",
                              "Distrito Urbano de KaMubukwana|Distrito Urbano de KaMubukwana",
                              "Distrito Municipal de KaTembe|Distrito Municipal de KaTembe",
                              "Distrito Municipal de KaNyaka|Distrito Municipal de KaNyaka"];
                            
    } ;

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    colonia.options.add(newOption);
  };    
}



function change(alcaldiaP, coloniaP){
    alcaldiaP = document.getElementById(alcaldiaP);
    coloniaP = document.getElementById(coloniaP);
    coloniaP.value ="";
    coloniaP.innerHTML = "";
    if(alcaldiaP.value == "Cabo Delgado"){
    var optionArray = ["|","Ancuabe|Ancuabe",
                              "Balama|Balama",
                              "Chiúre|Chiúre",
                              "Ibo|Ibo",
                              "Macomia|Macomia",
                              "Mecúfi|Mecúfi",
                              "Meluco|Meluco",
                              "Metuge|Metuge",
                              "Mocímboa da Praia|Mocímboa da Praia",
                              "Montepuez|Montepuez",
                              "Mueda|Mueda",
                              "Muidumbe|Muidumbe",
                              "Namuno|Namuno",
                              "Nangade|Nangade",
                              "Palma|Palma",
                              "Pemba|Pemba",
                              "Quissanga|Quissanga"];
    } else if(alcaldiaP.value == "Gaza"){
    var optionArray = ["|","Bilene|Bilene",
                              "Chibuto|Chibuto",
                              "Chicualacuala|Chicualacuala",
                              "Chigubo|Chigubo",
                              "Chókwè|Chókwè",
                              "Chongoene|Chongoene",
                              "Guijá|Guijá",
                              "Limpopo|Limpopo",
                              "Mabalane|Mabalane",
                              "Manjacaze|Manjacaze",
                              "Mapai|Mapai",
                              "Massangena|Massangena",
                              "Massingir|Massingir",
                              "Xai-Xai|Xai-Xai"];                              
    } else if(alcaldiaP.value == "Inhambane"){
    var optionArray = ["|",   "Funhalouro|Funhalouro",
                              "Govuro|Govuro",
                              "Homoíne|Homoíne",
                              "Inhambane|Inhambane",
                              "Inharrime|Inharrime",
                              "Inhassoro|Inhassoro",
                              "Jangamo|Jangamo",
                              "Mabote|Mabote",
                              "Massinga|Massinga",
                              "Maxixe|Maxixe",
                              "Morrumbene|Morrumbene",
                              "Panda|Panda",
                              "Vilanculos|Vilanculos",
                              "Zavala|Zavala"];                           
    } else if(alcaldiaP.value == "Manica"){
    var optionArray = ["|","Bárue|Bárue",
                              "Chimoio|Chimoio",
                              "Gondola|Gondola",
                              "Guro|Guro",
                              "Macate|Macate",
                              "Machaze|Machaze",
                              "Macossa|Macossa",
                              "Manica|Manica",
                              "Mossurize|Mossurize",
                              "Sussundenga|Sussundenga",
                              "Tambara|Tambara",
                              "Vanduzi|Vanduzi"];                            
    } else if(alcaldiaP.value == "Provincia de Maputo"){ 
    var optionArray = ["|","Boane|Boane",
                              "Magude|Magude",
                              "Manhiça|Manhiça",
                              "Marracuene|Marracuene",
                              "Matola|Matola",
                              "Matutuíne|Matutuíne",
                              "Moamba|Moamba",
                              "Namaacha|Namaacha"];                           
    }else if(alcaldiaP.value == "Nampula"){
    var optionArray = ["|","Angoche|Angoche",
                              "Eráti|Eráti",
                              "Ilha de Moçambique|Ilha de Moçambique",
                              "Lalaua|Lalaua",
                              "Larde|Larde",
                              "Liúpo|Liúpo",
                              "Malema|Malema",
                              "Meconta|Meconta",
                              "Mecubúri|Mecubúri",
                              "Memba|Memba",
                              "Mogincual|Mogincual",
                              "Mogovolas|Mogovolas",
                              "Moma|Moma",
                              "Monapo|Monapo",
                              "Mossuril|Mossuril",
                              "Muecate|Muecate",
                              "Murrupula|Murrupula",
                              "Nacala-a-Velha|Nacala-a-Velha",
                              "Nacala Porto|Nacala Porto",
                              "Nacarôa|Nacarôa",
                              "Nampula|Nampula",
                              "Rapale|Rapale",
                              "Ribaué|Rapale"];                          
    } else if(alcaldiaP.value == "Niassa"){
    var optionArray = ["|","Chimbonila|Chimbonila",
                              "Cuamba|Cuamba",
                              "Lago|Lago",
                              "Lichinga|Lichinga",
                              "Majune|Majune",
                              "Mandimba|Mandimba",
                              "Marrupa|Marrupa",
                              "Maúa|Maúa",
                              "Mavago|Mavago",
                              "Mecanhelas|Mecanhelas",
                              "Mecula|Mecula",
                              "Metarica|Metarica",
                              "Muembe|Muembe",
                              "N'gauma|N'gauma",
                              "Nipepe|Nipepe",
                              "Sanga|Sanga"];
    } else if(alcaldiaP.value == "Sofala"){
    var optionArray = ["|","Beira|Beira",
                              "Búzi|Búzi",
                              "Caia|Caia",
                              "Chemba|Chemba",
                              "Cheringoma|Cheringoma",
                              "Chibabava|Chibabava",
                              "Dondo|Dondo",
                              "Gorongosa|Gorongosa",
                              "Machanga|Machanga",
                              "Maringué|Maringué",
                              "Marromeu|Marromeu",
                              "Muanza|Muanza",
                              "Nhamatanda|Nhamatanda"];
    } else if(alcaldiaP.value == "Tete"){
    var optionArray = ["|","Angónia|Angónia",
                              "Cahora-Bassa|Cahora-Bassa",
                              "Changara|Changara",
                              "Chifunde|Chifunde",
                              "Chiuta|Chiuta",
                              "Dôa|Dôa",
                              "Macanga|Macanga",
                              "Magoé|Magoé",
                              "Marara|Marara",
                              "Marávia|Marávia",
                              "Moatize|Moatize",
                              "Mutarara|Mutarara",
                              "Tete|Tete",
                              "Tsangano|Tsangano",
                              "Zumbo|Zumbo"];
    } else if(alcaldia.value == "Zambezia"){
    var optionArray = ["|","Alto Molócue|Alto Molócue",
                              "Chinde|Chinde",
                              "Derre|Derre",
                              "Gilé|Gilé",
                              "Gurué|Gurué",
                              "Ile|Ile",
                              "Inhassunge|Inhassunge",
                              "Luabo|Luabo",
                              "Lugela|Lugela",
                              "Maganja da Costa|Maganja da Costa",
                              "Milange|Milange",
                              "Mocuba|Mocuba",
                              "Mocubela|Mocuba",
                              "Molumbo|Molumbo",
                              "Mopeia|Mopeia",
                              "Morrumbala|Morrumbala",
                              "Mulevala|Mulevala",
                              "Namacurra|Namacurra",
                              "Namarroi|Namarroi",
                              "Nicoadala|Nicoadala",
                              "Pebane|Pebane",
                              "Quelimane|Quelimane"];
    } else if(alcaldiaP.value == "Maputo Cidade"){
    var optionArray = ["|","Distrito Urbano de KaMpfumo|Distrito Urbano de KaMpfumo",
                              "Distrito Urbano de Nlhamankulu|Distrito Urbano de Nlhamankulu",
                              "Distrito Urbano de KaMaxaquene|Distrito Urbano de KaMaxaquene",
                              "Distrito Urbano de KaMavota|Distrito Urbano de KaMavota",
                              "Distrito Urbano de KaMubukwana|Distrito Urbano de KaMubukwana",
                              "Distrito Municipal de KaTembe|Distrito Municipal de KaTembe",
                              "Distrito Municipal de KaNyaka|Distrito Municipal de KaNyaka"];
                            
    } ;

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    coloniaP.options.add(newOption);
  };    
}