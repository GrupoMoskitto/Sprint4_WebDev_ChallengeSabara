import React, { useEffect, useState } from "react";

const ChamadaAtual = () => {
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Fiware-Service", "default");
      myHeaders.append("Fiware-ServicePath", "/");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch("http://20.197.240.85:1026/v2/entities", requestOptions);
        const data = await response.json();
        if (data.length > 0 && data[0].text?.value) {
          setTexto(data[0].text.value);
        } else {
          setTexto("Texto não encontrado.");
        }
      } catch (error) {
        setError("Erro ao buscar dados da API.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <p>{texto}</p>
    </div>
  );
};

export default ChamadaAtual;
