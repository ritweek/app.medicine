using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app.medicine.api.Models
{
    public class Medicine
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Brand { get; set; }

        public int Price { get; set; }

        public int Quantity { get; set; }

        public DateTime Expiry { get; set; }

        public string Notes { get; set; }
    }
}
