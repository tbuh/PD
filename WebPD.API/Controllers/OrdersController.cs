using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebPD.API.Entities;

namespace WebPD.API.Controllers
{
    [RoutePrefix("api/Orders")]
    public class OrdersController : ApiController
    {
        // GET api/orders
        [Authorize]
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return Order.CreateOrders();
        }
    }
}
