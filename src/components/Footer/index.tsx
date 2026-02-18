import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="./imagens/fb.png" alt="Facebook logo" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="./imagens/tw.png" alt="Twitter logo" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="./imagens/ig.png" alt="Instagram logo" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="./imagens/logo.png" alt="Organo logo" />
      </section>
      <section>
        <p>Developed by Luan.</p>
      </section>
    </footer>
  )
}

export default Footer
