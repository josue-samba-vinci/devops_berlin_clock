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
    });