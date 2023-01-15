import { eventButtonDesabled } from "../../scripts/enventoBotao.js";
import { eventShowMenu } from "../../scripts/mostrarMenu.js";

eventShowMenu()

let select = document.querySelector("select")
select.classList.add("select-selected")

select.addEventListener("change", () => {
    if (select.value != 0) {
        select.classList.remove("select-selected")
        select.classList.add("font-5-bold", "roxoAzul-2")
    } else if (select.value == 0) {
        select.classList.remove("font-5-bold", "roxoAzul-2")
        select.classList.add("select-selected")
    }
})

eventButtonDesabled("register")