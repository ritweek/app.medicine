using app.medicine.api.Models;
using System.Collections.Generic;

namespace app.medicine.api.Middleware
{
    public interface IMedicineService
    {
        IEnumerable<Medicine> getMedicine();


    }
}
