 const Convertertobase64 = ( file ) => {
    if (file != null) {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
          const data = reader.result.split(',')[1]
          return data
         };
      }
 }

 export default Convertertobase64;