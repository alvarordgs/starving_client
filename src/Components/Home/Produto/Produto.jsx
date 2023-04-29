import { BoxProduto, BoxImgProduto, BoxProdutoInfo } from './produtoStyle.js'

const Produto = () => {
  return (
    <BoxProduto>
            <BoxImgProduto>
                <img src="../assets/imgs/restaurante-teste2.jpg" alt=""/>
            </BoxImgProduto>
            <BoxProdutoInfo>
                <h4>Nome Produto</h4>
                <p>Descrição Produto</p>
                <span>R$ 24,99</span>
            </BoxProdutoInfo>
        </BoxProduto>
  )
}

export default Produto
