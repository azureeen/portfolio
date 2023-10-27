import { basic, initSidebar, initTopbar } from './modules/layouts';
import { initLocaleDatetime } from './modules/plugins';
import { incrementBeforeDisplay } from "./modules/firebase/visits";

basic();
initSidebar();
initTopbar();
initLocaleDatetime();
incrementBeforeDisplay();

