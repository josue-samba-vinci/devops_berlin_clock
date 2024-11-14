export class Main{

    simpleMinutes(minutes){

        const onLamps = minutes % 5; 

        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    fiveMinutes(minutes) {
        
        if (minutes === 0) return "OOOOOOOOOOO";

        if (minutes === 5) return "YOOOOOOOOOO";

        if (minutes === 10) return "YYOOOOOOOOO";

        if (minutes === 15) return "YYROOOOOOOO";

        if (minutes === 45) return "YYRYYRYYROO";

        return "OOOOOOOOOOO";
      }
}