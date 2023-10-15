import { Component } from 'react';

class Footer extends Component {
  render() {
    return(
        <div className="bg-white absolute bottom-0 flex justify-center w-full h-20 p-6">
          <div className=''>
            <a href="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold underline' : ''} text-black mx-5`}>Beranda</a>
            <a href="/konversi" className={`text-lg ${location.pathname === '/konversi' ? 'font-semibold underline' : ''} text-black mx-5`}>Konversi Mata Uang</a>
            <a href="/saran" className={`text-lg ${location.pathname === '/saran' ? 'font-semibold underline' : ''} text-black mx-5`}>Saran</a>
          </div>
          <div>
            <hr className='border-solid border-2 h-7 border-black'/>
          </div>
          <div>
            <p className='text-lg mx-10'>Akhmad Fahrizal</p>
          </div>
        </div>
    )
  }
}
export default Footer;