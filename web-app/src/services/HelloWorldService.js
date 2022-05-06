export const fetchHelloWorld = async () => {
    //Este funcion no espera el fetch sino que es muy inteligente y hasta exista nuevo evento este lo retorna
  const response = await fetch("http://localhost:9000");
  return await response.text();
};
