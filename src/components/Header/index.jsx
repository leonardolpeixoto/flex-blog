import React from 'react';

const Header = (props) => {
  return (
    <header className='menu-bg'>
      <div className='menu'>
        <div className='menu-logo'>
          <a href="#">Flex Blog</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#preco">Preço</a>
            </li>
            <li>
              <a href="#qualidade">Qualidade</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;