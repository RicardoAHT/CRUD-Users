import React from 'react'

const Footer = ({nightMode}) => {
  return (
    <footer className={`footer ${nightMode && "footer__night"}`}>
      <ul className='footer__ul'>
        <a target='blank' href="https://instagram.com/ricardoraht?igshid=MzNlNGNkZWQ4Mg==">
            <i className="fa-brands fa-instagram"></i>
        </a>
        <a target='blank' href="https://www.linkedin.com/in/ricardo-herrera-tapias">
            <i className="fa-brands fa-linkedin"></i>
        </a>
        <a target='blank' href="https://www.facebook.com/ricardo.andres.5895?mibextid=nW3QTL">
            <i className="fa-brands fa-facebook"></i>
        </a>
        <a target='blank' href="https://github.com/RicardoAHT">
          <i className="fa-brands fa-github"></i>
        </a>
      </ul>
    </footer>
  )
}

export default Footer
