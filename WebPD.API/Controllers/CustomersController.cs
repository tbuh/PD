using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebPD.API.Entities;
using WebPD.API.Entities.Repositories;

namespace WebPD.API.Controllers
{
    [RoutePrefix("api/Customers")]
    public class CustomersController : ApiController
    {
        private CustomersRepository _customersRepository;
        public CustomersController()
        {
            _customersRepository = new CustomersRepository();
        }
        // GET api/customers
        [Authorize]
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return _customersRepository.List();
        }
    }
}
