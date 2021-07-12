import React from 'react'

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>店舗情報</h3>
          <span>三重県四日市市</span>
          <span>富田栄町２９−１</span>
        </div>
        <div className="hours">
          <h3>営業時間</h3>
          <span>13:00~21:00</span>
          <span>休日：　水木</span>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <a href="https://asagiroast.theshop.jp/">
          <span>https://asagiroast.theshop.jp/</span>
          </a>
          <a href="https://www.instagram.com/asagi_handroast/?hl=ja">
            <span>@asagi_handroast</span>
          </a>
          
        </div>
      </section>
      <p>Built by
        <a href="https://crollacreations.com" target="_blank" rel="noopener noreferrer">crollacreations</a>
      </p>
    </footer>
  )
}

export default Footer;