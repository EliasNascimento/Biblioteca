using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca.Models
{
    public class LivroViewModel
    {
        public int Id { get; set; }

        public int Codigo { get; set; }

        public string Nome { get; set; }

        public string Autor { get; set; }

        public string ISBN { get; set; }

        public int AnoLancamento { get; set; }
    }
}
