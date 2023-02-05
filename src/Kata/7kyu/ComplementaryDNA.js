


//=========Complementary DNA===============
/*In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).*/

function DNAStrand(dna) {
	return dna.split('').map(letter => {
		switch (true) {
			case letter === 'A':
				return 'T';
			case letter === 'C':
				return 'G';
			case letter === 'T':
				return 'A';
			case letter === 'G':
				return 'C';
			default: letter;
		};
	}).join('');
};

console.log(DNAStrand('ATTGC'));

// const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);