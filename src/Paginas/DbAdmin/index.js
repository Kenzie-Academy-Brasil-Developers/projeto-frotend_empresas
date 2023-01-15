import { eventLogout } from "../../scripts/enventoBotao.js";
import { renderSelectCompany } from "../../scripts/renderizar.js";
import { eventShowMenu } from "../../scripts/mostrarMenu.js";

eventShowMenu()
eventLogout()

await renderSelectCompany()

