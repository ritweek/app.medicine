using app.medicine.api.Middleware;
using app.medicine.api.Models;
using System;
using System.Collections.Generic;

namespace app.medicine.api.Services
{
    public class MedicineService : IMedicineService
    {
        public IEnumerable<Medicine> getMedicine()
        {
            var medicines = new List<Medicine>();
            medicines.Add(new Medicine { Id = 1, Name = "Medicine 1", Brand = "Brand 1", Price = 10, Expiry = Convert.ToDateTime("1/1/2021 12:10:15 PM"), Notes = "Note 1", Quantity = 50 });
            return medicines;

        }
    }
}
