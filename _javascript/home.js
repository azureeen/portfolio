import { basic, initSidebar, initTopbar } from './modules/layouts';
import { initLocaleDatetime, loadImg } from './modules/plugins';
import { countVisitors } from "./modules/firebase/visits";
import { initializeFirebase } from './modules/firebase/config'

basic();
initSidebar();
initTopbar();
initLocaleDatetime();
loadImg();
initializeFirebase();
countVisitors();
