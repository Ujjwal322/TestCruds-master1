using System;
using System.Collections.Generic;

namespace TestCruds.Models
{
    public partial class InvoiceTbl
    {
        public InvoiceTbl()
        {
            PaymentTbl = new HashSet<PaymentTbl>();
        }

        public int InvoiceId { get; set; }
        public string InvoiceNo { get; set; }
        public int CustomerId { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string InvoiceAmount { get; set; }
        public DateTime PaymentDueDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifyBy { get; set; }
        public DateTime? ModifyDate { get; set; }

        public virtual ICollection<PaymentTbl> PaymentTbl { get; set; }
    }
}
