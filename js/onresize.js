import {containerTypeOR} from "./arrowsWorking.js";
import {mainBlockOR} from "./main.js";
window.onresize = function () {
	containerTypeOR();
	mainBlockOR();
}
