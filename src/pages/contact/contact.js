import logo from '../../logo/logo.png'
import internet from '../../images/ICONS/icons8-internet-100.png'
import facebook from '../../images/ICONS/icons8-facebook-480.png'
import gmail from '../../images/ICONS/icons8-gmail-logo-50.png'
import telephone from '../../images/ICONS/icons8-telephone-64.png'
import address from '../../images/ICONS/icons8-address-64.png'

import './styles/contact.css'




export default function Contact(){
    return (
  <div class="container">
  <section class="contact">
  <div class="left-col">
  <img src={logo} alt="Logo" className="logo-contact"/>
    <h6>TRIPLE O GLASS</h6>
  </div> 
  <div class="right-col1">
  <img src={internet} alt="Icon 1" className="all-icon"/>
    <h7>https://www.tripleoglass.com</h7>
  </div>
  <div class="right-col2">
  <img src={facebook} alt="Icon 2" className="all-icon"/>
    <h8>https://www.facebook.com/tripleo.glass.1</h8>
  </div>
  <div class="right-col3">
  <img src={gmail} alt="Icon 3" className="all-icon"/>
    <h9>tripleoglass@gmail.com</h9>
  </div>
  <div class="right-col4">
  <img src={telephone} alt="Icon 4" className="all-icon"/>
    <h10>(046) 413-2208 / (046) 686-1461</h10>
  </div>
  <div class="right-col5">
    <h11>09279994308 / 09186505319</h11>
  </div>
</section>

<div class="branches">
  <h12>Branches</h12>
</div>
<div class="branch1">
<img src={address} alt="Icon 5" className="icon-5"/>
  <h13>40 Gen. Emilio Aguinaldo Highway, Tagaytay City</h13>
</div>
<div class="branch2">
<img src={address} alt="Icon 5" className="icon-5"/>
  <h14>4103 Gen. Emilio Aguinaldo Highway, Imus, Cavite</h14>
</div>
</div>
    )
}