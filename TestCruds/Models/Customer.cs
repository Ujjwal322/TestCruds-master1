using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestCruds.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerNo { get; set; }
        public string CustomerName { get; set; }

        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifyBy { get; set; }
        public DateTime? ModifyDate { get; set; }
    }
}
