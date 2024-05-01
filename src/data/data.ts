import cerveja from "./pictures/cerveja.png"
import vinho from "./pictures/vinho.png"
import refrigerente from "./pictures/refrigerante.png"
import aguaMineral from "./pictures/agua-mineral.png"
import sucoLaranja from "./pictures/suco-laranja.png"
import paoFrances from "./pictures/pao-frances.png"
import leite from "./pictures/caixa-de-leite.png"
import cafe from "./pictures/cafe.png"
import chaVerde from "./pictures/cha-verde.png"
import macarrao from "./pictures/macarrao.png"
import arroz from "./pictures/arroz.png"
import feijao from "./pictures/feijao.png"
import azeite from "./pictures/azeite.png"
import sal from "./pictures/sal.png"
import milho from "./pictures/milho.png"
import acucar from "./pictures/acucar.png"
import ervilha from "./pictures/ervilha.png"
import molhoTomate from "./pictures/molho tomate.png"
import queijoPrato from "./pictures/queijo prato.png"
import iorgute from "./pictures/iorgute.png"
import peitoFrango from "./pictures/peito de frango.png"
import picanha from "./pictures/picanha.png"
import salmao from "./pictures/salmao.png"
import linguado from "./pictures/linguado.png"
import maca from "./pictures/maca.png"
import banana from "./pictures/banana.png"
import alface from "./pictures/alface.png"
import cenoura from "./pictures/cenoura.png"
import boloChocolate from "./pictures/bolo de chocolate.png"
import sorveteMorango from "./pictures/sorvete de morango.png"
import biscoitoChocolate from "./pictures/biscoito de chocolate.png"
import pipoca from "./pictures/pipoca.png"
import amendoin from "./pictures/amendoin.png"
import batataChips from "./pictures/batata frita.png"
import geleiaMorango from "./pictures/geleia de morango.png"
import doceLeite from "./pictures/doce de leite.png"
import biscoitoPolvilho from "./pictures/biscoito de polvilho.png"
import granola from "./pictures/granola.png"
import iorguteGrego from "./pictures/iorgute grego.png"
import coxinha from "./pictures/coxinha.png"
import murfin from "./pictures/murfin.png"
import tortaLimao from "./pictures/torta de limao.png"
import bolachaMaria from "./pictures/bolacha maria.png"
import lasanha from "./pictures/lasanha.png"
import sucoUva from "./pictures/suco de uva.png"
import chaCamomila from "./pictures/cha de camomila.png"
import queijoCottage from "./pictures/queijo cotagg.png"
import iorguteMorango from "./pictures/iorgute de morango.png"
import salsicha from "./pictures/salsicha.png"
import hamburguer from "./pictures/hamburguer.png"

interface Product {
  id: number,
  title: string,
  picture?: string,
  price: number,
  size: string,
  category?: string
}

export const products:Product[] = [
  {
    id: 1,
    title: "Cerveja",
    picture: cerveja,
    price: 12,
    size: "350ml",
    category: "Bebidas"
  },
  {
    id: 2,
    title: "Vinho",
    picture: vinho,
    price: 25,
    size: "750ml",
    category: "Bebidas"
  },
  {
    id: 3,
    title: "Refrigerante",
    picture: refrigerente,
    price: 5,
    size: "500ml",
    category: "Bebidas"
  },
  {
    id: 4,
    title: "Água Mineral",
    picture: aguaMineral,
    price: 3,
    size: "500ml",
    category: "Bebidas"
  },
  {
    id: 5,
    title: "Suco de Laranja",
    picture: sucoLaranja,
    price: 8,
    size: "1L",
    category: "Bebidas"
  },
  {
    id: 6,
    title: "Leite",
    picture: leite,
    price: 4,
    size: "1L",
    category: "Laticínios"
  },
  {
    id: 7,
    title: "Café",
    picture: cafe,
    price: 10,
    size: "250g",
    category: "Bebidas"
  },
  {
    id: 8,
    title: "Chá Verde",
    picture: chaVerde,
    price: 6,
    size: "250g",
    category: "Bebidas"
  },
  {
    id: 9,
    title: "Pão Francês",
    picture: paoFrances,
    price: 2,
    size: "un",
    category: "Pães e Massas"
  },
  {
    id: 10,
    title: "Macarrão Espaguete",
    picture: macarrao,
    price: 3,
    size: "500g",
    category: "Pães e Massas"
  },
  {
    id: 11,
    title: "Arroz",
    picture: arroz,
    price: 6,
    size: "1kg",
    category: "Grãos e Cereais"
  },
  {
    id: 12,
    title: "Feijão",
    picture: feijao,
    price: 8,
    size: "1kg",
    category: "Grãos e Cereais"
  },
  {
    id: 13,
    title: "Azeite de Oliva",
    picture: azeite,
    price: 15,
    size: "500ml",
    category: "Molhos e Condimentos"
  },
  {
    id: 14,
    title: "Sal",
    picture: sal,
    price: 3,
    size: "1kg",
    category: "Molhos e Condimentos"
  },
  {
    id: 15,
    title: "Açúcar",
    picture: acucar,
    price: 4,
    size: "1kg",
    category: "Molhos e Condimentos"
  },
  {
    id: 16,
    title: "Milho",
    picture: milho,
    price: 2,
    size: "300g",
    category: "Enlatados e Conservas"
  },
  {
    id: 17,
    title: "Ervilha",
    picture: ervilha,
    price: 2,
    size: "200g",
    category: "Enlatados e Conservas"
  },
  {
    id: 18,
    title: "Molho de Tomate",
    picture: molhoTomate,
    price: 3,
    size: "350g",
    category: "Enlatados e Conservas"
  },
  {
    id: 19,
    title: "Queijo Prato",
    picture: queijoPrato,
    price: 7,
    size: "500g",
    category: "Laticínios"
  },
  {
    id: 20,
    title: "Iogurte",
    picture: iorgute,
    price: 4,
    size: "500g",
    category: "Laticínios"
  },
  {
    id: 21,
    title: "Peito de Frango",
    picture: peitoFrango,
    price: 12,
    size: "800g",
    category: "Carnes e Aves"
  },
  {
    id: 22,
    title: "Picanha",
    picture: picanha,
    price: 30,
    size: "1kg",
    category: "Carnes e Aves"
  },
  {
    id: 23,
    title: "Salmão",
    picture: salmao,
    price: 25,
    size: "500g",
    category: "Peixes e Frutos do Mar"
  },
  {
    id: 24,
    title: "Linguado",
    picture: linguado,
    price: 20,
    size: "400g",
    category: "Peixes e Frutos do Mar"
  },
  {
    id: 25,
    title: "Maçã",
    picture: maca,
    price: 3,
    size: "1kg",
    category: "Frutas"
  },
  {
    id: 26,
    title: "Banana",
    picture: banana,
    price: 2,
    size: "1kg",
    category: "Frutas"
  },
  {
    id: 27,
    title: "Alface",
    picture: alface,
    price: 2,
    size: "un",
    category: "Vegetais"
  },
  {
    id: 28,
    title: "Cenoura",
    picture: cenoura,
    price: 2,
    size: "un",
    category: "Vegetais"
  },
  {
    id: 29,
    title: "Bolo de Chocolate",
    picture: boloChocolate,
    price: 10,
    size: "1kg",
    category: "Sobremesas"
  },
  {
    id: 30,
    title: "Sorvete de Morango",
    picture: sorveteMorango,
    price: 8,
    size: "1L",
    category: "Sobremesas"
  },
  {
    id: 31,
    title: "Biscoito de Chocolate",
    picture: biscoitoChocolate,
    price: 5,
    size: "200g",
    category: "Snacks e Petiscos"
  },
  {
    id: 32,
    title: "Pipoca",
    picture: pipoca,
    price: 3,
    size: "100g",
    category: "Snacks e Petiscos"
  },
  {
    id: 33,
    title: "Amendoim",
    picture: amendoin,
    price: 4,
    size: "150g",
    category: "Snacks e Petiscos"
  },
  {
    id: 34,
    title: "Batata Chips",
    picture: batataChips,
    price: 6,
    size: "200g",
    category: "Snacks e Petiscos"
  },
  {
    id: 35,
    title: "Geléia de Morango",
    picture: geleiaMorango,
    price: 7,
    size: "250g",
    category: "Enlatados e Conservas"
  },
  {
    id: 36,
    title: "Doce de Leite",
    picture: doceLeite,
    price: 9,
    size: "400g",
    category: "Sobremesas"
  },
  {
    id: 37,
    title: "Biscoito de Polvilho",
    picture: biscoitoPolvilho,
    price: 4,
    size: "250g",
    category: "Snacks e Petiscos"
  },
  {
    id: 38,
    title: "Granola",
    picture: granola,
    price: 10,
    size: "300g",
    category: "Grãos e Cereais"
  },
  {
    id: 39,
    title: "Iogurte Grego",
    picture: iorguteGrego,
    price: 6,
    size: "400g",
    category: "Laticínios"
  },
  {
    id: 40,
    title: "Coxinha",
    picture: coxinha,
    price: 3,
    size: "un",
    category: "Pães e Massas"
  },
  {
    id: 41,
    title: "Muffin de Blueberry",
    picture: murfin,
    price: 4,
    size: "un",
    category: "Sobremesas"
  },
  {
    id: 42,
    title: "Torta de Limão",
    picture: tortaLimao,
    price: 15,
    size: "1kg",
    category: "Sobremesas"
  },
  {
    id: 43,
    title: "Bolacha Maria",
    picture: bolachaMaria,
    price: 2,
    size: "200g",
    category: "Snacks e Petiscos"
  },
  {
    id: 44,
    title: "Lasanha",
    picture: lasanha,
    price: 12,
    size: "500g",
    category: "Pães e Massas"
  },
  {
    id: 45,
    title: "Suco de Uva",
    picture: sucoUva,
    price: 7,
    size: "1L",
    category: "Bebidas"
  },
  {
    id: 46,
    title: "Chá de Camomila",
    picture: chaCamomila,
    price: 3,
    size: "25g",
    category: "Bebidas"
  },
  {
    id: 47,
    title: "Queijo Cottage",
    picture: queijoCottage,
    price: 6,
    size: "300g",
    category: "Laticínios"
  },
  {
    id: 48,
    title: "Iogurte de Morango",
    picture: iorguteMorango,
    price: 4,
    size: "500g",
    category: "Laticínios"
  },
  {
    id: 49,
    title: "Salsicha",
    picture: salsicha,
    price: 5,
    size: "500g",
    category: "Carnes e Aves"
  },
  {
    id: 50,
    title: "Hambúrguer",
    picture: hamburguer,
    price: 8,
    size: "400g",
    category: "Carnes e Aves"
  }
];
