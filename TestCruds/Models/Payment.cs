using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestCruds.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public string PaymentNo { get; set; }
        public int InvoiceId { get; set; }
        public DateTime PaymentDate { get; set; }
        public string PaymentAmount { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifyBy { get; set; }
        public DateTime ModifyDate { get; set; }
    }
}
