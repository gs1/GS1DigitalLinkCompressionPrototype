function GS1DLgs1digitalLinkToGS1elementStrings(input,brackets) {
	var rv=input;
	var re=/\/(?:gtin|01)\/(\d{8}|\d{12,14})\b/;

	if (re.test(input)) {
		rv = input.match(re)[1];		

		if (brackets){

			if (rv.length <14) {
				rv="0".repeat(14-rv.length)+rv;
			}
	
			rv="(01)"+rv;
		}

	}	

	return rv;
}