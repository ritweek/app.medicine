using System.Collections.Generic;
using app.medicine.api.Middleware;
using app.medicine.api.Models;
using Microsoft.AspNetCore.Mvc;

namespace app.medicine.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private readonly IMedicineService _medicineService;

        public MedicineController(IMedicineService medicineService)
        {
            if (_medicineService == null) _medicineService = medicineService;
        }

        [HttpGet("getmedicine")]
        public IEnumerable<Medicine> getMedicine()
        {
            return _medicineService.getMedicine();
        }
    }
}
