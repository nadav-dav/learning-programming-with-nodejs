describe("Variables", function(){

    learnAbout("Setting up a variable", function(){
        var myVar;
        myVar = 10;
        expect(myVar ).toEqual(__);
        myVar = 20;
        expect(myVar ).toEqual(__);
        myVar = "now its a string";
        expect(myVar ).toEqual(__);
    });

    learnAbout("adding up variables", function(){
        var a = 10;
        var b = 33;
        expect( a + b ).toEqual(__);
        a = 80; b = 90;
        expect( a + b ).toEqual(__);
        a = "my age is ";
        expect( a + b ).toEqual(__);
    });

    learnAbout("comparing variables", function(){
        var a = 10;
        var b = 10;
        expect( a == b ).toBe (__);
        expect( a != b ).toBe (__);
        expect( a < b ).toBe (__);
        expect( a >= b ).toBe (__);
        expect( a <= b ).toBe (__);

        var c = 0;
        expect( a == c ).toBe (__);
        expect( a = c ).toBe (__);
    });

    learnAbout("type checks", function(){
        var a = 10;
        var b = "10";
        expect( typeof a ).toEqual(__);
        expect( typeof b ).toEqual(__);
    });
});