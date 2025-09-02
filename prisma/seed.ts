import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('password123', 12);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin user created:', adminUser.email);

  // Create sample customers
  const customers = await Promise.all([
    prisma.customer.upsert({
      where: { email: 'john.doe@example.com' },
      update: {},
      create: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, New York, NY 10001',
        totalOrders: 15,
        totalSpent: 2499.99,
      },
    }),
    prisma.customer.upsert({
      where: { email: 'jane.smith@example.com' },
      update: {},
      create: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1 (555) 234-5678',
        address: '456 Oak Ave, Los Angeles, CA 90210',
        totalOrders: 8,
        totalSpent: 1299.99,
      },
    }),
    prisma.customer.upsert({
      where: { email: 'mike.johnson@example.com' },
      update: {},
      create: {
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        phone: '+1 (555) 345-6789',
        address: '789 Pine Rd, Chicago, IL 60601',
        totalOrders: 23,
        totalSpent: 3899.99,
      },
    }),
  ]);

  console.log('✅ Customers created:', customers.length);

  // Create sample products
  const products = await Promise.all([
    prisma.product.upsert({
      where: { id: 'prod-1' },
      update: {},
      create: {
        id: 'prod-1',
        name: 'Wireless Bluetooth Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 99.99,
        category: 'Electronics',
        stock: 45,
        imageUrl: '/api/placeholder/300/300',
      },
    }),
    prisma.product.upsert({
      where: { id: 'prod-2' },
      update: {},
      create: {
        id: 'prod-2',
        name: 'Organic Cotton T-Shirt',
        description: 'Comfortable organic cotton t-shirt',
        price: 29.99,
        category: 'Clothing',
        stock: 120,
        imageUrl: '/api/placeholder/300/300',
      },
    }),
    prisma.product.upsert({
      where: { id: 'prod-3' },
      update: {},
      create: {
        id: 'prod-3',
        name: 'Programming Fundamentals Book',
        description: 'Comprehensive guide to programming basics',
        price: 49.99,
        category: 'Books',
        stock: 25,
        imageUrl: '/api/placeholder/300/300',
      },
    }),
    prisma.product.upsert({
      where: { id: 'prod-4' },
      update: {},
      create: {
        id: 'prod-4',
        name: 'Smart Home Security Camera',
        description: 'WiFi-enabled security camera with night vision',
        price: 199.99,
        category: 'Electronics',
        stock: 0,
        imageUrl: '/api/placeholder/300/300',
      },
    }),
    prisma.product.upsert({
      where: { id: 'prod-5' },
      update: {},
      create: {
        id: 'prod-5',
        name: 'Yoga Mat Premium',
        description: 'Non-slip yoga mat for all types of yoga',
        price: 39.99,
        category: 'Sports',
        stock: 80,
        imageUrl: '/api/placeholder/300/300',
      },
    }),
  ]);

  console.log('✅ Products created:', products.length);

  // Create sample orders
  const orders = await Promise.all([
    prisma.order.upsert({
      where: { id: 'ord-1' },
      update: {},
      create: {
        id: 'ord-1',
        customerId: customers[0].id,
        total: 299.99,
        status: 'DELIVERED',
      },
    }),
    prisma.order.upsert({
      where: { id: 'ord-2' },
      update: {},
      create: {
        id: 'ord-2',
        customerId: customers[1].id,
        total: 149.99,
        status: 'PROCESSING',
      },
    }),
    prisma.order.upsert({
      where: { id: 'ord-3' },
      update: {},
      create: {
        id: 'ord-3',
        customerId: customers[2].id,
        total: 89.99,
        status: 'SHIPPED',
      },
    }),
  ]);

  console.log('✅ Orders created:', orders.length);

  // Create sample analytics data
  const analytics = await Promise.all([
    prisma.analytics.upsert({
      where: { id: 'analytics-1' },
      update: {},
      create: {
        id: 'analytics-1',
        date: new Date('2024-01-01'),
        revenue: 15000,
        orders: 120,
        customers: 85,
      },
    }),
    prisma.analytics.upsert({
      where: { id: 'analytics-2' },
      update: {},
      create: {
        id: 'analytics-2',
        date: new Date('2024-01-02'),
        revenue: 18000,
        orders: 145,
        customers: 92,
      },
    }),
  ]);

  console.log('✅ Analytics data created:', analytics.length);

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
