using System;

namespace AirPlane.Back.Core.Exceptions
{
    public class AirplaneNotFoundException : Exception
    {
        public AirplaneNotFoundException() : base("Airplane not found for the given Code.")
        {
        }
    }
}