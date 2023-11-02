
 export const colorFnc = (isSport, done) => {
  
   const border = "rgba(239, 237, 232, 0.2)";
  
   if (!isSport){
   return 0 > done? "rgba(233, 16, 29, 1)":border
   }
   if (isSport){
    return  0 > done? "rgba(60, 191, 97, 1)":border
   }

   return border

  }


