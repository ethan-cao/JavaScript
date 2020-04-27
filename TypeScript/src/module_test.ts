import * as F from "./module";
import {f1 as F1} from "./module";
import F4 from  "./module";  // can use any thing to refer to the default export

// ./module is run only once, when the 1st time it is loaded

F.f1();
F1();
F4();