function importXML(src) {
    xmlFile = new XMLHttpRequest();
    xmlFile.open("GET", src, false)
    xmlFile.send()
    
    return xmlFile.responseXML;
}