import Layout from "../Components/layout"

const beranda = () => {
  return (
    <Layout>
      <div className="bg-white w-1/4 h-2/4 rounded-lg p-4  drop-shadow-lg">
        <div>
          <p className="text-center text-lg font-semibold">Selamat Datang di Tugas 3 <br /> Berikut beberapa halaman yang ada di web ini</p>
        </div>
        <div className="flex justify-center">
          <div className="text-lg p-4">
            <p className="p-2 border-solid border-2 border-blue-300 rounded-lg"><a href="/konversi">Konversi Mata Uang</a></p>
          </div>
          <div className="text-lg p-4">
            <p className="p-2 border-solid border-2 border-blue-300 rounded-lg"><a href="/saran">Saran</a></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default beranda