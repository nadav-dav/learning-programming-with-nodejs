describe("Learning about types", function(){

    learnAbout("Numbers", function(){
        expect(1 + 1).toEqual(__);
        expect(4 + 6).toEqual(__);
        expect( (4 + 6) / 2 ).toEqual(__);
        expect( 2.5 - 0.6 ).toEqual(__);
    });

    learnAbout("Booleans", function(){
        expect(true ).toEqual(__);
        expect(false ).toEqual(__);
        expect(true || true ).toEqual(__);
        expect(true || false ).toEqual(__);
        expect(false || true ).toEqual(__);
        expect(false || false ).toEqual(__);
        expect(true && true ).toEqual(__);
        expect(true && false ).toEqual(__);
        expect(false && true ).toEqual(__);
        expect(false && false ).toEqual(__);
    });

    learnAbout("Comparisons", function(){
        expect(1 == 1 ).toEqual(__);
        expect(1 == 2 ).toEqual(__);
        expect(1 != 1 ).toEqual(__);
        expect(1 != 2 ).toEqual(__);
        expect(1 > 2 ).toEqual(__);
        expect(1 < 2 ).toEqual(__);
        expect(1 >= 2 ).toEqual(__);
        expect(1 <= 2 ).toEqual(__);
    });

    learnAbout("Strings", function(){
        expect("1"+"1").toEqual(__);
        expect("hello "+"world").toEqual(__);
        expect(" "+"  ").toEqual(__);

        // this is how you add parenthesis
        expect('"cool"' ).toEqual(__);

        // you can also add parenthesis this way
        expect("\"hello\"" ).toEqual(__);


        // substringing
        expect("hello".substring(0,1) ).toEqual(__);
        expect("hello".substring(2,3) ).toEqual(__);

        // index of
        expect("learn About indexOf".indexOf("a") ).toEqual(__);
        expect("learn About indexOf".indexOf("A") ).toEqual(__);
        expect("learn About indexOf".indexOf("z") ).toEqual(__);
    });
});