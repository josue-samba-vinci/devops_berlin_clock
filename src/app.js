export class Main{

    simpleMinutes(minutes){

        const onLamps = minutes % 5; 

        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    fiveMinutes(minutes) {
       
        return "OOOOOOOOOOO";
      }
}