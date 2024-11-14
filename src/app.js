export class Main{

    simpleMinutes(minutes){

        const onLamps = minutes % 5; 

        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    fiveMinutes(minutes) {
        
        if (minutes === 0) return "OOOOOOOOOOO";

        if (minutes === 5) return "YOOOOOOOOOO";
        
        return "OOOOOOOOOOO";
      }
}