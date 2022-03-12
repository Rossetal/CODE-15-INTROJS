let comidaFavorita = prompt("Comida favorita:")

switch(comidaFavorita){
    case "carne":
    case "Pollo":
    case "pescado":
        alert('Eres carnivoro')
        break;
        case "lechuga":
        case "acelgas":
            alert('Eres vegetariano')
            break;
            case "Tofu":
                alert('Eres vegano')
                break;
                default:
                alert("Entonces que comes ?")
                break;  
}