const cipher = {
  encode:(Offset,inputCaixaTexto)=>{
    if(typeof Offset !== "number" || typeof inputCaixaTexto !== "string"){
      throw new TypeError;
    }
  
    let resultado = "";
    for (let i=0; i< inputCaixaTexto.length; i++){
      let codigoAsc = inputCaixaTexto.charCodeAt(i);
      if(codigoAsc >= 65 && codigoAsc <= 90){
        codigoAsc = ((codigoAsc - 65 + Offset)%26)+65;
        resultado += String.fromCharCode(codigoAsc);
      }
    }
    return resultado;
  },

  decode:(Offset,inputCaixaTexto)=>{
    if(typeof Offset !== "number" || typeof inputCaixaTexto !== "string"){
      throw new TypeError;
  }
    let resultado= "";
    for(let i=0; i< inputCaixaTexto.length; i++){
      let codigoAsc= inputCaixaTexto.charCodeAt(i);
      if (codigoAsc>= 65 && codigoAsc <=90){
        codigoAsc = ((codigoAsc - 90 - Offset)%26)+90;
        resultado += String.fromCharCode(codigoAsc);
      }
    }
    return resultado;
  },
};

export default cipher;
