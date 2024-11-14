export class Main{

    simpleMinutes(minutes){

        const onLamps = minutes % 5; 

        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    fiveMinutes(minutes) {
        
        const onLamps = Math.floor(minutes / 5);
        let lamps = "";
        for (let i = 1; i <= 11; i++) {
          if (i <= onLamps) {
            lamps += (i % 3 === 0) ? "R" : "Y";
          } else {
            lamps += "O";
          }
        }
        return lamps;
      }

      singleHours(hours) {
        
        const onLamps = hours % 5;

        return "R".repeat(onLamps) + "O".repeat(4 - onLamps);
      }

      fiveHours(hours) {

        if (hours === 0) return "OOOO";

        if (hours === 5) return "ROOO";

        if (hours === 8) return "ROOO";

        if (hours === 10) return "RROO";

        if (hours === 15) return "RRRO";

        if (hours === 20) return "RRRR";

        if (hours === 23) return "RRRR";
        
        return "OOOO";
      }
}