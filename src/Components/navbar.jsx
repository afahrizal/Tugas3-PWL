import { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
        <div className="bg-white h-20 w-full flex p-6 fixed drop-shadow-lg">
            <div className="flex justify-between">
                <a href="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold underline' : ''} text-black mx-5`}>Beranda</a>
                <a href="/konversi" className={`text-lg ${location.pathname === '/konversi' ? 'font-semibold underline' : ''} text-black mx-5`}>Konversi Mata Uang</a>
                <a href="/saran" className={`text-lg ${location.pathname === '/saran' ? 'font-semibold underline' : ''} text-black mx-5`}>Saran</a>
            </div>
        </div>
    )
  }
}
export default Navbar;