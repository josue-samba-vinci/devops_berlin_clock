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

        const onLamps = Math.floor(hours / 5);

        return "R".repeat(onLamps) + "O".repeat(4 - onLamps);
      }

      seconds(seconds) {

        return seconds % 2 === 0 ? "Y" : "O";
      }

      berlinClock(hours, minutes, seconds) {
          return this.seconds(seconds) + "\n" + this.fiveHours(hours) + "\n" + this.singleHours(hours) + "\n" + this.fiveMinutes(minutes) + "\n" + this.simpleMinutes(minutes);              
      }
      
  }



