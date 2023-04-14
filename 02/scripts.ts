type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: "credito" | "Debito";
  cartao: Cartao;
};

type Endereco = {
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
};

type Transacao = Lowercase<"credito" | "debito">;

type NovoCarrinho = Omit<Carrinho, "tipoTransacao"> & {
  endereco: Endereco;
  tipoTransacao: Transacao;
};
