ej.addCulture( "se-FI", {
	name: "se-FI",
	englishName: "Sami, Northern (Finland)",
	nativeName: "davvisámegiella (Suopma)",
	language: "se",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["sotnabeaivi","vuossárga","maŋŋebárga","gaskavahkku","duorastat","bearjadat","lávvardat"],
				namesAbbr: ["sotn","vuos","maŋ","gask","duor","bear","láv"],
				namesShort: ["s","v","m","g","d","b","l"]
			},
			months: {
				names: ["ođđajagemánu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu",""],
				namesAbbr: ["ođđj","guov","njuk","cuoŋ","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]
			},
			monthsGenitive: {
				names: ["ođđajagemánu","guovvamánu","njukčamánu","cuoŋománu","miessemánu","geassemánu","suoidnemánu","borgemánu","čakčamánu","golggotmánu","skábmamánu","juovlamánu",""],
				namesAbbr: ["ođđj","guov","njuk","cuoŋ","mies","geas","suoi","borg","čakč","golg","skáb","juov",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy",
				D: "dddd', 'MMMM d'. b. 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd', 'MMMM d'. b. 'yyyy H:mm",
				F: "dddd', 'MMMM d'. b. 'yyyy H:mm:ss",
				M: "MMMM d'. b.'"
			}
		}
	}
});
