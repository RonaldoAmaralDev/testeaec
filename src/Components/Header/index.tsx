import React from "react";
import { BiCart } from "react-icons/bi";
import "./Header.scss";
import { useProvaider } from "../../Context/UserProvaider";

const Header = () => {
    const { setCart, cartiten } = useProvaider();

    const QtnProdutoTotal = cartiten.reduce((acc, item) => {return  acc + item.qtn}, 0)

    return (
        <header className="heading_logo">
            <img src="https://www.aec.com.br/wp-content/themes/aec/dist/img/logotipo.webp" alt="AeC Logotipo" title="AeC Relacionamento com Responsabilidade" width="435" height="86"></img>

            <button onClick={() => setCart(true)}>
                <BiCart />

                {
                    QtnProdutoTotal
                }
            </button>
        </header>
    );
};
export default Header;
