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
    });