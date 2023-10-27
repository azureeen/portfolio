import { basic, initSidebar, initTopbar } from './modules/layouts';
import { initLocaleDatetime, loadImg } from './modules/plugins';
import { incrementBeforeDisplay } from "./modules/firebase/visits";

basic();
initSidebar();
initTopbar();
initLocaleDatetime();
loadImg();
incrementBeforeDisplay();



