//existem tipos de como chamar elementos html pro js são eles 

//pelo 

// document.getElementById - pega diretamente um elemento que tem um id

// document.getElementsByClassName - pega diretamente um elemento que tenha uma class ou name

// document.querySelector - aqui pega qualquer um pode ser pelo id, class, ou name é so colocar assim (".") para class ("#") para id

// document.querySelectorAll - nesse caso ele é pra quando te tipo uma div com vario elementos dentro e vc puxa cada um deles ai ele retorna um vetor com todos  ex 

// document.querySelectorAll(".div") - aqui ele esta puxando uma div que tem varios elementos 

let titulo = document.getElementById("titulo")

titulo.textContent = 'outro titulo'

// titulo.innerHTML = '<input type="text" placeholder="coisa">'

//a diferença entre textContent & innerHTML é que pelo 

// titulo.textContent = 'outro titulo' você consegue mudar apenas o conteudo, o texto do elemento 

// agora pelo titulo.innerHTML = '<input type="text" placeholder="coisa">'  você consegue literalmente trocar um elemento por outra tag 

let paragrafo = document.querySelector("#paragrafo")

paragrafo.innerHTML = '   <input type="text" placeholder="testando" style="padding: 10px; border: none; outline: none; background-color: gray; color: black; border-radius: 8px; cursor: pointer;">' //tambem é possivel uma tag com style 


let ul = document.getElementById("ul")

function trocar() {
    paragrafo.style.fontSize = "20px"
}

