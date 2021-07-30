import {Initializer} from "./models/Initializer";
import {Lawn} from "./models/Lawn";

let initializer : Initializer = new Initializer();
const lawn : Lawn = new Lawn(initializer.initializeLawn().X, initializer.initializeLawn().Y, initializer.initalizeMowers());