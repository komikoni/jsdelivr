ej.addCulture( "br-FR", {
	name: "br-FR",
	englishName: "Breton (France)",
	nativeName: "brezhoneg (Frañs)",
	language: "br",
	numberFormat: {
		pattern: ['-n'],
		",": " ",
		".": ",",
		groupSizes: [3],
		"NaN": "NkN",
		negativeInfinity: "-Anfin",
		positiveInfinity: "+Anfin",
		percent: {
			pattern: ['-n%', 'n%'],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			'/': '/',
			':': ':',
			firstDay: 1,
			days: {
				names: ["Sul","Lun","Meurzh","Merc'her","Yaou","Gwener","Sadorn"],
				namesAbbr: ["Sul","Lun","Meu.","Mer.","Yaou","Gwe.","Sad."],
				namesShort: ["Su","L","Mz","Mc","Y","G","Sa"]
			},
			months: {
				names: ["Genver","C'hwevrer","Meurzh","Ebrel","Mae","Mezheven","Gouere","Eost","Gwengolo","Here","Du","Kerzu",""],
				namesAbbr: ["Gen.","C'hwe.","Meur.","Ebr.","Mae","Mezh.","Goue.","Eost","Gwen.","Here","Du","Kzu",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"g. J.-K.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});