import { useState } from "react"
import Layout from "../Components/layout"
import axios from "axios";

const Konversi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idr, setIdr] = useState(0);
  const fetchData = () => {
    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/convertcurrency?have=IDR&want=USD&amount=' + idr,{
      headers: { 'X-Api-Key': 'Jv8Vr4mbOFnYMwtRaliuNg==lvrOcA2FvPEoDE87'}
    })
      .then((response) => {
        setData(response.data);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };
  return (
    <Layout>
      <div className="bg-white min-w-1/4 p-5 rounded-lg min-h-0 drop-shadow-lg">
        <p className="text-xl font-bold mb-4 text-center">Konversi Mata Uang dari IDR ke USD</p>
        <div className="justify-center flex item-center">
          <input className="p-2 border-2 border-blue-600 rounded-lg mx-4 h-min" type="text" value={idr} onChange={(event) => {setIdr(event.target.value)}}/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-5 drop-shadow-lg" onClick={fetchData} disabled={loading}>Konversi</button>
        </div>
        <p className="text-2xl font-serif mb-4">$ {data.new_amount}</p>
      </div>
    </Layout>
  )
}

export default Konversi
