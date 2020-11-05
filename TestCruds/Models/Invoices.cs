using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TestCruds.Models
{
    public class Invoices
    {
        [Key]
        public int InvoiceId { get; set; }
        public string InvoiceNo { get; set; }
        //public int CustomerId { get; set; }

        public string CustomerName { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string InvoiceAmount { get; set; }
        public DateTime PaymentDueDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifyBy { get; set; }
        public DateTime ModifyDate { get; set; }
    }
}
