using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace TestCruds.Models
{
    public class CustomerDataAccessLayer
    {
        TestDetailContext db = new TestDetailContext();

        //public object APIHelperMethods { get; private set; }

        public IEnumerable<CustomerTbl> GetAllCustomer()
        {
            try
            {
                return db.CustomerTbl.ToList();
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        string a;
        public List<Customer> ShowcustomerNo()
        {
            List<Customer> Customers = new List<Customer>();
            List<Customer> Customers1 = new List<Customer>();

            using (var db = new TestDetailContext())
            {

                
                Customer Customer1;
                foreach (var Cust in db.CustomerTbl.ToList())
                {
                    Customer1 = new Customer();
                    Customer1.CustomerNo = Cust.CustomerNo;
                    Customers.Add(Customer1);
                }

              
                {
                    string s = "0";
                    int number = Convert.ToInt32(s);
                    number += 1;
                    a = "C" + number.ToString("D5");
                    X:
                    bool No = Customers.Any(x => x.CustomerNo == a);
                    if (No == true)
                    {
                        number += 1;
                        a = "C" + number.ToString("D5");
                        goto X;

                    }
                }

                Customer Customer2;
                Customer2 = new Customer();
                Customer2.CustomerNo = a;
                Customers1.Add(Customer2);
                return Customers1;

            }
        }

        public List<CustomerTbl> GetCustomers()
        {
            List<CustomerTbl> lstcustomer = new List<CustomerTbl>();
            lstcustomer = (from CustomerList in db.CustomerTbl select CustomerList).ToList();

            return lstcustomer;
        }

        public int AddCustomer(CustomerTbl cust,Customer ct,string Customername, string CustomerNo)
        {
            //List<Customer> Items = new List<Customer>();
            int returnVal = 0;

            //try
            //{
            //    using (var db = new TestDetailContext())
            //    {
            //        Customer get;
            //        foreach (var it in db.CustomerTbl)
            //        {
            //            get = new Customer();
            //            get.CustomerNo = it.CustomerNo;
            //            get.CustomerName = it.CustomerName;
            //            get.CreatedBy = it.CreatedBy;
            //            get.CreatedDate = it.CreatedDate;
            //            Items.Add(get);
            //        }
            //        CustomerTbl Cust;
            //        Cust = new CustomerTbl();
            //        Cust.CustomerNo = cust.CustomerNo;
            //        Cust.CustomerName = cust.CustomerName;
            //        Cust.CreatedBy = "abc";
            //        Cust.CreatedDate = DateTime.Now;
            //        CustomerNo = Cust.CustomerNo;

            //        Customername = cust.CustomerName;
            //        bool existingCustomernumber = db.CustomerTbl.Any(x => x.CustomerNo == cust.CustomerNo);
            //        if (existingCustomernumber == true)
            //        {
            //            returnVal = -2;
            //        }

            //        bool existingCustomer = db.CustomerTbl.Any(x => x.CustomerName == cust.CustomerName);
            //        if (existingCustomer == true)
            //        {
            //            returnVal = -1;
            //        }
            //        if (existingCustomer == false && existingCustomernumber == false)
            //        {
            //            db.CustomerTbl.Add(Cust);
            //            returnVal = db.SaveChanges();


            //        }

            //        return 1;
            //    }
            //}
            //catch (Exception ex)
            //{

            //    throw;
            //}

            try
            {
                Customername = cust.CustomerName;
                cust.CreatedDate = DateTime.Now;
                if (cust.CreatedDate != null)
                {
                    cust.CreatedBy = "abcd";
                }
                bool existingCustomernumber = db.CustomerTbl.Any(x => x.CustomerNo == cust.CustomerNo);
                if (existingCustomernumber == true)
                {
                    returnVal = -2;
                }

                bool existingCustomer = db.CustomerTbl.Any(x => x.CustomerName == Customername);
                if (existingCustomer == true)
                {
                    returnVal = -1;
                }
                if (existingCustomer == false && existingCustomernumber == false)
                {
                    db.CustomerTbl.Add(cust);
                    db.SaveChanges();
                }

                //return 1;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                //throw;
            }





            return returnVal;
        }

        public int UpdateCustomer(CustomerTbl cust, int Customerid, string Customername)
        {
            int returnVal = 0;

           
            try
            {
                //db.Entry(cust).State = EntityState.Modified;
                //db.SaveChanges();

                //return 1;

                Customerid = cust.CustomerId;
                Customername = cust.CustomerName;

                cust = db.CustomerTbl.FirstOrDefault(x => x.CustomerId == Customerid);

                if (cust != null)
                {
                    cust.CustomerId = Customerid;
                    cust.CustomerName = Customername;
                    db.CustomerTbl.Update(cust);
                    Customerid = cust.CustomerId;
                    Customername = cust.CustomerName;
                }

                bool existingCustomer = db.CustomerTbl.Any(x => x.CustomerName == Customername);
                bool existingCustomer1 = db.CustomerTbl.Any(x => (x.CustomerId == Customerid) && (x.CustomerName == Customername));

                if (existingCustomer1 == true)
                {
                    returnVal = db.SaveChanges();
                }
                else if (existingCustomer == true)
                {
                    returnVal = -1;
                }
                else
                {
                    returnVal = db.SaveChanges();
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                //throw;
            }
            return returnVal;
        }

        public CustomerTbl GetCustomer(int id)
        {
            try
            {
                CustomerTbl c = db.CustomerTbl.Find(id);
                return c;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int DeleteCustomer(int id)
        {
            try
            {
                CustomerTbl cust = db.CustomerTbl.Find(id);
                db.CustomerTbl.Remove(cust);
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }


        public IEnumerable<InvoiceTbl> GetAllInvoice()
        {
            try
            {
                return db.InvoiceTbl.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        string b;
        public List<Invoices> ShowInvoice()
        {
            List<Invoices> Invoice = new List<Invoices>();
            List<Invoices> Invo = new List<Invoices>();

            using (var db = new TestDetailContext())
            {

              
                Invoices Inv;
                foreach (var inv in db.InvoiceTbl.ToList())
                {
                    Inv = new Invoices();
                    Inv.InvoiceNo = inv.InvoiceNo;
                    Invoice.Add(Inv);
                }

               
                {
                    string s = "0";
                    int number = Convert.ToInt32(s);
                    number += 1;
                    b = "I" + number.ToString("D5");
                    X:
                    bool No = Invoice.Any(x => x.InvoiceNo == b);
                    if (No == true)
                    {
                        
                        number += 1;
                        b = "I" + number.ToString("D5");
                        goto X;

                    }
                }

                Invoices Invoice2;
                Invoice2 = new Invoices();
                Invoice2.InvoiceNo = b;
                Invo.Add(Invoice2);
                return Invo;

            }
        }

        public int AddInvoice(InvoiceTbl inv, string Invoiceno)
        {
            int returnVal = 0;
            try
            {
                if (inv.InvoiceDate == DateTime.MinValue)
                {
                    inv.InvoiceDate = DateTime.Now;
                }
                else
                {
                    inv.InvoiceDate = inv.InvoiceDate;
                }
                inv.PaymentDueDate = inv.InvoiceDate.AddDays(30);

                inv.CreatedDate = DateTime.Now;
                if (inv.CreatedDate != null)
                {
                    inv.CreatedBy = "abcd";
                }

                Invoiceno = inv.InvoiceNo;

                bool existingCustomer = db.InvoiceTbl.Any(x => x.InvoiceNo == Invoiceno);
                if (existingCustomer == true)
                {
                    returnVal = -1;
                }
                if (existingCustomer == false)
                {
                    db.InvoiceTbl.Add(inv);
                    db.SaveChanges();
                }
               
               // return 1;
            }
            catch (Exception ex)
            {

                throw;
            }
            return returnVal;
        }


        public int UpdateInvoice(InvoiceTbl inv)
        {
            try
            {
                db.Entry(inv).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }


        public InvoiceTbl GetInvoice(int id)
        {
            try
            {
                InvoiceTbl c = db.InvoiceTbl.Find(id);
                return c;
            }
            catch (Exception)
            {

                throw;
            }
        }


        public int DeleteInvoice(int id)
        {
            try
            {
                InvoiceTbl inv = db.InvoiceTbl.Find(id);
                db.InvoiceTbl.Remove(inv);
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<PaymentTbl> GetAllPayment()
        {
            try
            {
                return db.PaymentTbl.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        string c;
        public List<Payment> ShowPayment()
        {
            List<Payment> Invoices = new List<Payment>();
            List<Payment> Invoices1 = new List<Payment>();

            using (var db = new TestDetailContext())
            {

                //GetPaymentNO
                Payment Payment1;
                foreach (var pay in db.PaymentTbl.ToList())
                {
                    Payment1 = new Payment();
                    Payment1.PaymentNo = pay.PaymentNo;
                    Invoices.Add(Payment1);
                }

               
                {
                    string s = "0";
                    int number = Convert.ToInt32(s);
                    number += 1;
                    c = "P" + number.ToString("D5");
                    X:
                    bool No = Invoices.Any(x => x.PaymentNo == c);
                    if (No == true)
                    {
                        //   str = str.Substring(1);
                        number += 1;
                        c = "P" + number.ToString("D5");
                        goto X;

                    }
                }

                Payment Payment2;
                Payment2 = new Payment();
                Payment2.PaymentNo = c;
                Invoices1.Add(Payment2);
                return Invoices1;

            }
        }

        public int AddPayment(PaymentTbl pt, string Paymentno)
        {
            int returnVal = 0;
            try
            {
                Paymentno = pt.PaymentNo;

                pt.CreatedDate = DateTime.Now;
                if (pt.CreatedDate != null)
                {
                    pt.CreatedBy = "abcd";
                }

                bool existingCustomer = db.PaymentTbl.Any(x => x.PaymentNo == Paymentno);
                if (existingCustomer == true)
                {
                    returnVal = -1;
                }
                if (existingCustomer == false)
                {
                    db.PaymentTbl.Add(pt);
                    db.SaveChanges();
                }

              
                //return 1;
            }
            catch (Exception ex)
            {

                throw;
            }
            return returnVal;
        }

        public int UpdatePayment(PaymentTbl pt)
        {
            try
            {
                db.Entry(pt).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public PaymentTbl GetPayment(int id)
        {
            try
            {
                PaymentTbl c = db.PaymentTbl.Find(id);
                return c;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int DeletePayment(int id)
        {
            try
            {
                PaymentTbl inv = db.PaymentTbl.Find(id);
                db.PaymentTbl.Remove(inv);
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public string GetAllInvoiceDetails(int InvoiceID, string CustomerName, DateTime InvoiceDate, string InvoiceAmount, string PaymentAmount)
        {
            try
            {
                using (var context = new TestDetailContext() )
                using (var command = context.Database.GetDbConnection().CreateCommand())
                {
                    command.CommandText = "proc_GetAllInvoiceDetail";
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@InvoiceID", InvoiceID));
                    command.Parameters.Add(new SqlParameter("@CustomerName", CustomerName));
                    command.Parameters.Add(new SqlParameter("@InvoiceDate", InvoiceDate));
                    command.Parameters.Add(new SqlParameter("@InvoiceAmount", InvoiceAmount));
                    command.Parameters.Add(new SqlParameter("@PaymentAmount", PaymentAmount));
                    //DbDataAdapter da = APIHelperMethods.CreateDataAdapter(command);
                    DbDataAdapter adapter = DbProviderFactories.GetFactory(command.Connection).CreateDataAdapter();
                    adapter.SelectCommand = command;
                    DataSet result = new DataSet();
                    adapter.Fill(result);
                    string JSONString = string.Empty;
                    JSONString = JsonConvert.SerializeObject(result);
                    return JSONString;
                }
            }
            catch (Exception ex)
            {
                //_logger.LogError(ex.Message);
                return null;
            }
        }

    }
}
