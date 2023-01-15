
import { eventEdit, eventLogout } from "../../scripts/enventoBotao.js";
import { renderCompanyUser, renderInforUser } from "../../scripts/renderizar.js";
import { eventShowMenu } from "../../scripts/mostrarMenu.js";


eventShowMenu()
eventLogout()

renderInforUser()
renderCompanyUser()

eventEdit()

