using System;

namespace AirPlane.Back.Core.Entities
{
    public class Airplane
    {
        protected Airplane() {

        }

        public static Airplane CreateAirplane(string codigo, string modelo, int quantidadePassageiros) {

            if (quantidadePassageiros < 0) {
                throw new ArgumentOutOfRangeException();
            }

            return new Airplane(codigo, modelo, quantidadePassageiros);
        }
        
        private Airplane(string codigo, string modelo, int quantidadePassageiros)
        {
            this.Codigo = codigo;
            this.Modelo = modelo;

            if (quantidadePassageiros < 0) {
                throw new ArgumentOutOfRangeException();
            }

            this.QuantidadePassageiros = quantidadePassageiros;
            this.DataCriacao = DateTime.Now;
        }

        public string Codigo { get; private set; }
        public string Modelo { get; private set; }
        public int QuantidadePassageiros { get; private set; }
        public DateTime DataCriacao { get; private set; }
    }
}