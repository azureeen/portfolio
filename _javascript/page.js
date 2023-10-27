import { basic, initSidebar, initTopbar } from './modules/layouts';
import { loadImg, imgPopup, initClipboard } from './modules/plugins';
import { incrementBeforeDisplay } from "./modules/firebase/visits";

basic();
initSidebar();
initTopbar();
loadImg();
imgPopup();
initClipboard();
incrementBeforeDisplay();

