describe("Advance data structure", function(){

    learnAbout("Arrays", function(){
        var fruits = ["apple","banana","mango"];
        expect(fruits[1] ).toEqual(__);
        expect(fruits[2] ).toEqual(__);
        expect(fruits.length ).toEqual(__);

        expect(fruits ).toEqual(__);
        fruits.push("pair");
        expect(fruits ).toEqual(__);
        
        var myFruit = fruits.pop();
        expect(myFruit ).toEqual(__);
        expect(fruits ).toEqual(__);

        expect( fruits.indexOf("banana") ).toEqual(__);
        expect( fruits.indexOf("tomato") ).toEqual(__);
    });
    
    learnAbout("Objects", function(){
        var fruit = { name : "apple", size: 5, color: "red"};
        expect( fruit.name ).toEqual(__);
        expect( fruit["color"]).toEqual(__);
        expect( fruit.size> 10 ).toEqual(__);
        fruit.size = 20;
        expect( fruit.size> 10 ).toEqual(__);
        fruit["isYummy"] = true;
        expect( fruit.isYummy ).toEqual(__);
    });
});