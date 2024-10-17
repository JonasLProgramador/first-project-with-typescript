export class Negociacao {
  private readonly _data;
  private readonly _valor;
  private readonly _quantidade;

  constructor(data: Date, valor: number, quantidade: number) {
    this._data = data;
    this._valor = valor;
    this._quantidade = quantidade;
  }
  get data():Date {
    return this.data;
  }
  get valor():number {
    return this.valor;
  }

  get quantidade():number {
    return this.quantidade;
  }

  get volume() :number{
    return this.quantidade * this.valor;
  }
}
