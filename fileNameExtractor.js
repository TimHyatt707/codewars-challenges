class FileNameExtractor {
    static extractFileName (dirtyFileName) { 
	let removedDate = dirtyFileName.replace(/(^([0-9])+\_)/g,'');
	let fileName = removedDate.match(/((\w*)+\.\w*)/);
	if(fileName !== null){
	    let result = fileName[0];
	    result.endsWith('.') ? result = result.slice(0, result.length - 1) : result;
	    return result; 
	} else {
	    return '';
	}
    }
}

console.log(FileNameExtractor.extractFileName('1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34'));
