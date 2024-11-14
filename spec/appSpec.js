import { Main } from '../src/app.js';

const main = new Main();

describe("Simple Minutes", function() {
    

    it("should activate a light if the minutes are equal to 0", function () {

        const result = main.simpleMinutes(0);
        
        expect(result).toEqual("OOOO");
      });

    it("should activate a light if the minutes are equal to 1", function () {

        const result = main.simpleMinutes(1);
        
        expect(result).toEqual("YOOO");
      });

    
    it("should activate a light if the minutes are equal to 2", function () {

        const result = main.simpleMinutes(2);
        
        expect(result).toEqual("YYOO");
      });
    
    it("should activate a light if the minutes are equal to 3", function () {

        const result = main.simpleMinutes(3);
        
        expect(result).toEqual("YYYO");
      });

    it("should activate a light if the minutes are equal to 4", function () {

        const result = main.simpleMinutes(4);
        
        expect(result).toEqual("YYYY");
      });

      it("should work the same for minutes greater than 4", function () {
        expect(main.simpleMinutes(5)).toEqual("OOOO"); 
        expect(main.simpleMinutes(6)).toEqual("YOOO"); 
        expect(main.simpleMinutes(7)).toEqual("YYOO"); 
        expect(main.simpleMinutes(8)).toEqual("YYYO"); 
        expect(main.simpleMinutes(9)).toEqual("YYYY"); 
      });
  });


describe("Five Minutes", function () {

    it("should turn off all lamps when minutes are 0", function () {

        const result = main.fiveMinutes(0);

        expect(result).toEqual("OOOOOOOOOOO");
    });

    it("it should turn on the first lamp when minutes are 5", function () {

        const result = main.fiveMinutes(5);

        expect(result).toEqual("YOOOOOOOOOO");
    });

    it("it should turn on the first two lamps when minutes are 10", function () {

        const result = main.fiveMinutes(10);

        expect(result).toEqual("YYOOOOOOOOO");
    });

    it("it should turn on the first three lamps when minutes are 15", function () {

        const result = main.fiveMinutes(15);

        expect(result).toEqual("YYROOOOOOOO");
    });

    it("it should turn on the first nine lamps when minutes are 45", function () {

      const result = main.fiveMinutes(45);

      expect(result).toEqual("YYRYYRYYROO");

    });

    it("it should turn on all lamps when minutes are 55", function () {

      const result = main.fiveMinutes(55);

      expect(result).toEqual("YYRYYRYYRYY");

    });
});

describe("One Hour", function () {

    it("should have all lamps turned off when hour is 0", function () {

        const result = main.singleHours(0);

        expect(result).toEqual("OOOO");
    });

    it("should turn on the first lamp when hour is 1", function () {

        const result = main.singleHours(1);

        expect(result).toEqual("ROOO");
    });

    it("should turn on the first lamp when hour is 2", function () {

        const result = main.singleHours(2);

        expect(result).toEqual("RROO");
    });

    it("should turn on the first lamp when hour is 3", function () {

        const result = main.singleHours(3);

        expect(result).toEqual("RRRO");
    });

    it("should turn on the first lamp when hour is 4", function () {
      
        const result = main.singleHours(4);

        expect(result).toEqual("RRRR");
    });
    
    it("should work the same for hours greater than 4", function () {
        expect(main.singleHours(10)).toEqual("OOOO");
        expect(main.singleHours(16)).toEqual("ROOO");
        expect(main.singleHours(19)).toEqual("RRRR");
        expect(main.singleHours(22)).toEqual("RROO");
        expect(main.singleHours(23)).toEqual("RRRO");
    });

    describe("Five Hours", function () {

    it("should have all lamps turned off when hour is 0", function(){

        const result = main.fiveHours(0);

        expect(result).toEqual("OOOO");
    })

    it("should have one lamp turned on when hour is 5", function(){

        const result = main.fiveHours(5);

        expect(result).toEqual("ROOO");
    })

    it("should have one lamps turned on when hour is 8", function(){

        const result = main.fiveHours(8);

        expect(result).toEqual("ROOO");
    })

    it("should have two lamps turned on when hour is 10", function(){

        const result = main.fiveHours(10);

        expect(result).toEqual("RROO");
    })

    it("should have three lamps turned on when hour is 15", function(){

        const result = main.fiveHours(15);

        expect(result).toEqual("RRRO");
    })

    it("should have all lamps turned on when hour is 20", function(){

        const result = main.fiveHours(20);

        expect(result).toEqual("RRRR");
    })

    it("should have all lamps turned on when hour is 23", function(){

        const result = main.fiveHours(23);

        expect(result).toEqual("RRRR");})
  });
});

describe("Seconds", function () {

    it ("should have the lamp turned on when second is 0 (even)", function () {

        const result = main.seconds(0);

        expect(result).toEqual("Y");
    });

    it ("should have the lamp turned off when second is 1 (odd)", function () {

        const result = main.seconds(1);

        expect(result).toEqual("O");
    });

    it ("should have the lamp turned on when second is 2 (even)", function () {

        const result = main.seconds(2);

        expect(result).toEqual("Y");
    });

    it ("should have the lamp turned off when second is 3 (odd)", function () {

        const result = main.seconds(3);

        expect(result).toEqual("O");
    });

    it ("should have the lamp turned on when second is 32 (even)", function () {

        const result = main.seconds(32);

        expect(result).toEqual("Y");
    });
    
});
