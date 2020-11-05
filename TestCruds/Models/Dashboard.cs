using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestCruds.Models
{
    public class Dashboard
    {
        public int TotalCustomer { get; set; }
        public int CustomerMonthly { get; set; }
        public int CustomerYearly { get; set; }

        public int TotalInvoices { get; set; }
        public int InvoiceMonthly { get; set; }
        public int InvoiceYearly { get; set; }

        public int TotalPayments { get; set; }
        public int PaymentsMonthly { get; set; }
        public int PaymentsYearly { get; set; }

        public Decimal TotalSeles { get; set; }
        public Decimal SalesMonthly { get; set; }
        public Decimal SalesYearly { get; set; }

        public Decimal TotalPaymentCollestions { get; set; }
        public Decimal PaymentCollestionsMonthly { get; set; }
        public Decimal PaymentCollestionsYearly { get; set; }

        public int CustomerMonthlyGrowth { get; set; }
        public int CustomerYearlyGrowth { get; set; }


        public int SalesMonthlyGrowth { get; set; }
        public int SalesYearlyGrowth { get; set; }

        public int PaymentCollestionsMonthlyGroth { get; set; }
        public int PaymentCollestionsYearlyGrowth { get; set; }
    }
}
