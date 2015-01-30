using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
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
        [ResponseType(typeof(IEnumerable<Customer>))]
        [Authorize]
        [HttpGet]
        public IHttpActionResult GetWithParams(string prmsStr)
        {
            Customer customer = new Customer();
            string[] parsedPrms = prmsStr.Split('|');
            customer.CustomerID = parsedPrms[0];
            customer.CompanyName = parsedPrms[1];
            customer.Country = parsedPrms[2];

            if (parsedPrms.All(prm => String.IsNullOrEmpty(prm)))
                return Ok(_customersRepository.List());
            return Ok(_customersRepository.ListWithParams(customer));
        }

        [ResponseType(typeof(Customer))]
        [Authorize]
        [HttpPost]
        public IHttpActionResult PostCustomer(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _customersRepository.Add(customer);
            return CreatedAtRoute("DefaultApi", new { id = customer.CustomerID }, customer); ;
        }

        [Route("{customerID}")]
        [HttpDelete]
        public IHttpActionResult DeleteCustomer(string customerID)
        {
            _customersRepository.Delete(customerID);

            return Ok(customerID);
        }
    }
}
