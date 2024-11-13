import { Main } from '../src/app.js';

describe("Berlin Clock - Simple Minutes", function() {
    const main = new Main();

    it("hould activate a light if the minutes are equal to 0", function () {

        const result = main.simpleMinutes(0);
        
        expect(result).toEqual("OOOO");
      });
    });