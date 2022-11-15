const capitalize= require('./capitalize');

test('should capitalize single Word ', () => { 
    expect(capitalize("kibre")).toBe("Kibre");
 });

 test('should capitalize each Word ', () => { 
    expect(capitalize("kibrewossen yitbarek mekasha")).toBe("Kibrewossen Yitbarek Mekasha");
 });