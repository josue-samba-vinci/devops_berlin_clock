import { Main } from '../src/app.js';

describe("Berlin Clock - Simple Minutes", function() {
    const main = new Main();

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

      it("should work the same for minutes greater than 4 for minutes greater ", function () {
        expect(main.simpleMinutes(5)).toEqual("OOOO"); 
        expect(main.simpleMinutes(6)).toEqual("YOOO"); 
        expect(main.simpleMinutes(7)).toEqual("YYOO"); 
        expect(main.simpleMinutes(8)).toEqual("YYYO"); 
        expect(main.simpleMinutes(9)).toEqual("YYYY"); 
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

    });
  });
