


//===========remove conestive duplicate words =============
/*Your task is to remove all consecutive duplicate words from a string, leaving only first words entries*/

const removeConsecutiveDuplicates = s => s.split(' ').filter((w, i, a) => w !== a[i + 1]).join(' ');