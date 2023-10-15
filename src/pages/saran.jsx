import Layout from "../Components/layout"
import { useState } from "react"
import React from "react";

const Saran = () => {  

  const [saran, setSaran] = useState("");
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <Layout>
      <div className="bg-white w-[30%] p-5 rounded-lg min-h-[20rem] item-center drop-shadow-lg">
        <div className="p-4 item-center flex flex-col items-center">
          <p className="text-center text-lg font-semibold">Akhmad Fahrizal</p>
          <img src="./src/assets/ical.jpg" alt="Akhmad Fahrizal" className="w-[40%] rounded-full my-4" />  
        </div>
        <p className="text-center">Saya Akhmad Fahrizal, mahasiswa Teknik Informatika dari Institut Teknologi Sumatera.</p>
        <form onSubmit={handleSubmit} className="flex flex-col" >
          <label htmlFor="Saran" className="mt-3">Kotak Saran</label>
          <textarea className="border-2 border-black rounded-md" name="" id="Saran" cols="30" rows="2" value={saran} required onChange={(e) => setSaran(e.target.value)}></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5 mb-2 drop-shadow-lg" type="submit">Submit</button>
        </form>
        <p className="text-xl font-light mb-4 text-center">Jumlah saran diterima : {count}</p>
      </div>
    </Layout>
  )
}

export default Saran