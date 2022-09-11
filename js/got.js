'use strict'

// adatok lekérése url és fetch segítségével, aszinkronitás, try...catch hibakezelés

let charData = [];
let filteredCharData = [];

const getData = async (url='') => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
  } catch {
    console.error(error);
  }
};

//nem élő karakterek eltávolítása

//a karakterek abc sorrendbe rendezése, angol karakterkészletet használatával (Intl.Collator)

getData("./json/got.json");

