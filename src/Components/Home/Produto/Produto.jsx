import { BoxProduto, BoxImgProduto, BoxProdutoInfo } from './produtoStyle.js'

const Produto = ({ produto }) => {
  return (
    <BoxProduto>
            <BoxImgProduto>
                <img src="../assets/imgs/restaurante-teste2.jpg" alt=""/>
            </BoxImgProduto>
            <BoxProdutoInfo>
                <h4>{ produto.nome }</h4>
                <p>{ produto.descricao}</p>
                <span>R$ {produto.valor}</span>
            </BoxProdutoInfo>
        </BoxProduto>
  )
}

export default Produto
