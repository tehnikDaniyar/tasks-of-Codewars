


//=============Extract the domain name from a URL=================
function domainName(url) {
	return url.replace(/(\w+[\.\/\/:]+)*([a-zA-Z\d\s-]+)\..+/g, '$2')
};