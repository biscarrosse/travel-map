const init_coordinates = [49.19670569759333, 16.604925309898263]; // Brn
const init_zoom = 5;

// initiate map:
const map = L.map("map", {
  zoomControl: false, // rm defaultly positioned zoom in / out buttons
}).setView([...init_coordinates], init_zoom);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// add zoom in / out buttons where I want them:
L.control
  .zoom({
    position: "topright",
  })
  .addTo(map);

for (let i = 0; i < COUNTRIES.length; i++) {
  const { name, code, visited } = COUNTRIES[i];
  console.log("___ each country ", name, code);

  for (let j = 0; j < visited.length; j++) {
    const city = visited[j];

    // create a marker on the map:
    const marker = L.marker([...city.coordinates]).addTo(map);

    // add on click popup:
    marker.bindPopup(`<b>${city.name}</b><br>${name}`).openPopup();
  }
}

const BLUE = "#0760f3";
const GREEN = "#a0f307";
const YELLOW = "#f3e007";
const VIOLET = "#b907f3";
const ORANGE = "#f3ad07";
const RED = "#f13b0d";

const TRIPS = {
  kgz: {
    color: RED,
    path: [
      [49.19659186277392, 16.605313613876724], // Brn
      [48.14189289420522, 16.476544666962194], // Vie
      [44.92607643746896, 20.42243385731396], // Beograd
      [41.30618501564938, 28.724476306537024], // Ist
      [40.433361047401235, 57.01337083009951], // above Aral sea
      [43.058958936726874, 74.47116899349054], // Bishkek
      [42.64366797717279, 77.09540375211677], // Cholpon Ata
      [42.870466632411706, 74.60772561670755], // Bishkek back
      [41.039422616858765, 28.889920820092577], // Ist back
      [45.45261245014712, 22.232705690281975], // Romania
      [48.14189289420522, 16.476544666962194], // Vie back
    ],
  },
  thai: {
    color: BLUE,
    path: [
      [49.19659186277392, 16.605313613876724], // Brn
      [48.14189289420522, 16.476544666962194], // Vie
      [42.1254095034697, 28.63698129388245], // Black sea
      [39.03206945719734, 43.47956614076437], // Western Armenia
      [36.02345939302541, 51.952327388896336], // Tehran
      [25.69699734092922, 67.3274249013985], // Karachi
      [18.429445293769135, 83.03842676096394], // India
      [16.856268004106223, 97.65194079874615], // Burma
      [13.696963528629654, 100.75362844772549], // Bkk
      [13.537698831090752, 100.58283495220695], // Battleship
      [13.822076015234305, 100.37119088530818], // Bkk back
      [16.988256558487514, 95.03829398408084], // Burma back
      [22.0774737090648, 78.1187962002489], // India back
      [25.69699734092922, 67.3274249013985], // Karachi
      [35.40807490943761, 50.535530803236014], // Tehran back
      [40.762086101099285, 42.23252982004609], // Western Armenia
      [41.53792065525944, 29.939773395210928], // Black sea back
      [48.26243630455866, 16.53476037596082], // Vie back
      [49.19659186277392, 16.605313613876724], // Brn back
    ],
  },
  erasmus: {
    color: GREEN,
    path: [
      [49.82402197971173, 18.26593289857898], // Ost
      [50.1113183043188, 14.273462681583746], // Prg
      [47.99861359208542, 11.582786753618922], // Munich
      [46.617080522148605, 7.314088104898799], // Suisse
      [43.54028896225771, 4.003254936826045], // France south
      [39.48922443202097, -0.47678115309946306], // Vlc
      [40.345230833642745, -1.1095963971625742], // Teruel
      [40.070571272740764, -2.1358322375650602], // Cuenca
      [39.48922443202097, -0.47678115309946306], // Vlc
      [41.29961125091198, 2.0862672058438143], // Bcn
      [39.48922443202097, -0.47678115309946306], // Vlc back
      [47.15663568453743, -1.6054201255778524], // Nantes
      [49.182634856128615, -0.35567642087434864], // Caen
      [49.0065507233973, 2.5496793386942342], // Paris
      [50.1113183043188, 14.273462681583746], // Prg back
      [49.82402197971173, 18.26593289857898], // Ost back
    ],
  },
  venice: {
    color: YELLOW,
    path: [
      [49.19659186277392, 16.605313613876724], // Brn
      [48.14189289420522, 16.476544666962194], // Vie
      [46.57654900295966, 14.926212645260948], // Slovenia
      [45.50883542679869, 12.350383746310458], // Venice
      [45.41537469583358, 12.375825235279354], // Lido
      [45.47743379966604, 12.288773222011104], // Venice back
      [46.20504756914106, 14.782369498199005], // Slovenia back
      [48.195710663312916, 16.24704334791462], // Vie back
      [49.19659186277392, 16.605313613876724], // Brn back
    ],
  },
  uk: {
    color: VIOLET,
    path: [
      [49.82402197971173, 18.26593289857898], // Ost
      [50.1113183043188, 14.273462681583746], // Prg
      [50.31633101906627, 8.953189142585572], // Frankfurt
      [50.81315815060671, 4.528351940637644], // Bruxelles
      [51.513589533913795, -0.13184621946184072], // London
      [50.818072853901356, -1.0784413443913627], // Portsmouth
      [50.82224589320671, -0.15094167454655338], // Brighton
      [51.47932711392431, -0.2150941076187971], // London back
      [51.19003832967934, 4.561783840150197], // Antwerp
      [50.39000095340331, 8.869087710890055], // Frankfurt back
      [50.00632938402124, 14.406040453107018], // Prg back
      [49.82402197971173, 18.26593289857898], // Ost back
    ],
  },
  mallorca: {
    color: ORANGE,
    path: [
      [49.19659186277392, 16.605313613876724], // Brn
      [48.14189289420522, 16.476544666962194], // Vie
      [46.53488335559948, 14.065761825882921], // Klagenfurt
      [45.55851417215665, 9.471302477122753], // Milano
      [43.18261266455959, 5.43245479249192], // Marseille
      [39.55134242461853, 2.7270977540373043], // Palma
      [39.796874327896454, 2.6952640864935904], // Soller
      [39.579718817460375, 2.6472762654642996], // Palma back
      [43.651096742120586, 7.399816807660851], // Nice
      [46.0785763738354, 11.211232940559121], // Trento
      [47.01352423126173, 15.457616913587392], // Graz
      [48.10437808750992, 16.341728088499774], // Vie back
      [49.19659186277392, 16.605313613876724], // Brn back
    ],
  },
};

const RENDERED_TRIPS = {};

function drawPolyline(element) {
  if (element.checked) {
    RENDERED_TRIPS[element.name] = L.polyline(TRIPS[element.name].path, {
      color: TRIPS[element.name].color,
      weight: 4,
      snakingSpeed: 400,
    })
      .addTo(map)
      .snakeIn();
  } else {
    RENDERED_TRIPS[element.name].removeFrom(map);
  }
}

// independent popups:
const popup_1 = L.popup(PLACES.eastTurkestan.coordinates, {
  content: `<b>${PLACES.eastTurkestan.name}</b>`,
  // TODO: render flag
  autoClose: false,
}).addTo(map);
const popup_2 = L.popup(PLACES.repOfChina.coordinates, {
  content: `<b>${PLACES.repOfChina.name}</b>`,
  // TODO: render flag
  autoClose: false,
}).addTo(map);
const popup_3 = L.popup(PLACES.tibet.coordinates, {
  content: `<b>${PLACES.tibet.name}</b>`,
  // TODO: render flag
  autoClose: false,
}).addTo(map);
const popup_4 = L.popup(PLACES.northernAsia.coordinates, {
  content: `<b>${PLACES.northernAsia.name}</b>`,
  // TODO: render flag
  autoClose: false,
}).addTo(map);
