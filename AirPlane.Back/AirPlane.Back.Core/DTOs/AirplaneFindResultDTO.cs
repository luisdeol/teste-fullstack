using System;

namespace AirPlane.Back.Core.DTOs
{
    public class AirplaneFindResultDTO
    {
        public AirplaneFindResultDTO(string codigo, string modelo, int quantidadePassageiros, DateTime dataCriacao)
        {
            this.Codigo = codigo;
            this.Modelo = modelo;

            if (quantidadePassageiros < 0) {
                throw new ArgumentOutOfRangeException();
            }

            this.QuantidadePassageiros = quantidadePassageiros;
            this.DataCriacao = dataCriacao;
        }

        public string Codigo { get; private set; }
        public string Modelo { get; private set; }
        public int QuantidadePassageiros { get; private set; }
        public DateTime DataCriacao { get; private set; }
    }
}