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
    [RoutePrefix("api/customers")]
    public class CustomersController : ApiController
    {
        private CustomersRepository _customersRepository;
        public CustomersController()
        {
            _customersRepository = new CustomersRepository();
        }
        // GET api/customers
        //[Authorize]
        //[HttpGet]
        //public IEnumerable<Customer> Get()
        //{
        //    return _customersRepository.List();
        //}

        [Route("{prmsStr}")]
        [Authorize]
        [HttpGet]
        public IEnumerable<Customer> GetWithParams(string prmsStr)
        {
            Customer customer = new Customer();
            string[] parsedPrms = prmsStr.Split('|');
            customer.CustomerID = parsedPrms[0];
            customer.CompanyName = parsedPrms[1];
            customer.Country = parsedPrms[2];

            if (parsedPrms.All(prm=>String.IsNullOrEmpty(prm)))
            return _customersRepository.List();
            return _customersRepository.ListWithParams(customer);
        }
    }
}
