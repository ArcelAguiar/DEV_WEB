
/*---------------------------------------------------------------------------------------
FAESA_Desenvolvimento WEB I
-----------------------------------------------------------------------------------------
Projeto.........: HTML + javascript 
Subsistema......:
Modulo..........: Jogo para buscar cores da pagina W3c e gerar um vetor com 10 
                  cores aleatoriamente e pedir para o usuário escolher. Acertando
                  dar os parabéns, caso contrário dizer que perdeu
Versao..........: 1.0
Compilacao......: Visual estudio Code
Status..........: Em Desenvolvimento
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
    [02/11/2020 - Arcel]:
      => Buscar todas as cores no site https://www.w3schools.com/colors/colors_names.asp
      => Gerar vetor randomicamente
    [03/11/2020 - Arcel]: 
      => Correção de Bug na variável "var" para "let"   
----------------------------------------------------------------------------------------     
*/

let cores = ["AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen"];


let count = 0;
let corEscolhida;
let valueInput;
coresRandomicas();

function valorInput() {
    valueInput = document.querySelector("input").value; {
        if (valueInput.toLowerCase() === corEscolhida.toLowerCase()) {
            document.getElementById("fundo").style.backgroundColor = corEscolhida;
            document.querySelector(".teste").append("YOU WIN !!")
            count++;
        }
        else {
            if (count !== 2 && valueInput.toLowerCase() > corEscolhida.toLowerCase()) {
                alert("Você Errou, Sua cor é alfabeticamente maior que a minha");
            }
            else if(count !== 2 && valueInput.toLowerCase() < corEscolhida.toLowerCase()) {
                alert("Você Errou, Sua cor é alfabeticamente menor que a minha");
            }
            else{
                alert("YOU LOSE :(")
                window.location.reload();
            }
            count++;
        }
    }
   
}

function coresRandomicas() {
    const result = []

    for (let i = 0; i < 10; i++) {
        result.push(cores[Math.floor(Math.random() * cores.length)]);
    }
    document.getElementById("demo").innerHTML = `[${result}]`
    corEscolhida = result[Math.floor(Math.random() * result.length)]
    console.log(corEscolhida);
}






