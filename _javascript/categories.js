import { basic, initSidebar, initTopbar } from './modules/layouts';
import { categoryCollapse } from './modules/plugins';
import { incrementBeforeDisplay } from "./modules/firebase/visits";

basic();
initSidebar();
initTopbar();
categoryCollapse();
incrementBeforeDisplay();


