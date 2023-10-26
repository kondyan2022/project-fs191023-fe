
 export const colorFnc = (norm, done) => {
   
   const border = "rgba(239, 237, 232, 0.2)";

    
   if (norm > done){
    return  "rgba(233, 16, 29, 1)";
   }
   if (norm < done){
    return "rgba(60, 191, 97, 1)";
   }

   return border

  }


