


//=============Extract the domain name from a URL=================
function domainName(url) {
	return url.replace(/.*\/\/([a-zA-Z])\..+/g, '$1')
};