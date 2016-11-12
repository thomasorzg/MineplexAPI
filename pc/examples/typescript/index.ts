import { Mineplex } from "mineplex";

let api = new Mineplex.MineplexAPI("API KEY");

let playerName = "Phinary";
api.getPlayer(playerName)
  .then(player => {
    console.log(`${playerName} is level ${player.level.value}`);
  });
