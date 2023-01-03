const simbol  = document.querySelector(".simbol");
const input   = document.querySelector(".add > input");
const deletar = document.querySelector(".deletar");
let total     = 0;

function del(e) {
    e.parentElement.remove();
    total--;
}

simbol.addEventListener("click", ()=> {
    if (!input.value) {
        return;
    }
    total++;
    document.querySelector(".added").innerHTML += `<div class="assignment colorBack"><div style="width:100%;">${input.value}</div><img src="assets/img/delete.png" class="deletar" onclick="del(this)" alt="deletar"></div>`;
    input.value = "";
})

