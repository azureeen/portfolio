import { basic, initSidebar, initTopbar } from './modules/layouts';
import { incrementBeforeDisplay } from "./modules/firebase/visits";

basic();
initSidebar();
initTopbar();
incrementBeforeDisplay();
