﻿using CO_Working_Space;
using coworking_space.DAL.Data;
using coworking_space.DAL.Data.Models;
using coworking_space.DAL.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace coworking_space.DAL.Repository.Implementations {
    // Implementations/ClientRepository.cs
   

    // Implementations/ExpensesRepository.cs
    public class ExpensesRepository : GenericRepository<Expenses>, IExpensesRepository {
        public ExpensesRepository(Context context) : base(context) { }
    }

    // Implementations/OrderRepository.cs
    //public class OrderRepository : GenericRepository<Order>, IOrderRepository {
    //    public OrderRepository(Context context) : base(context) { }
    //}

    // Implementations/OrderItemRepository.cs
    public class OrderItemRepository : GenericRepository<OrderItem>, IOrderItemRepository {
        public OrderItemRepository(Context context) : base(context) { }
    }

    // Implementations/PaymentRepository.cs
    //public class PaymentRepository : GenericRepository<Payment>, IPaymentRepository {
    //    public PaymentRepository(Context context) : base(context) { }
    //}

    // Implementations/PurchasedItemRepository.cs
    //public class PurchasedItemRepository : GenericRepository<PurchasedItem>, IPurchasedItemRepository {
    //    public PurchasedItemRepository(Context context) : base(context) { }
    //}

    // Implementations/ReservationsRepository.cs
  

    // Implementations/RoomRepository.cs
    
    // Implementations/SuplierRepository.cs
    public class SuplierRepository : GenericRepository<Supplier>, ISuplierRepository {
        public SuplierRepository(Context context) : base(context) { }
    }
    public class ProductRepository : GenericRepository<Product>, IProductRepository {
        public ProductRepository(Context context) : base(context) { }
    }
    
}
