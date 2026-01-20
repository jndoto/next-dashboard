import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      
      {/* Page Title */}
      <h1
        className={`${lusitana.className} mb-6 text-xl md:text-2xl font-semibold`}
      >
        Dashboard
      </h1>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Collected"
          value={totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Pending"
          value={totalPendingInvoices}
          type="pending"
        />
        <Card
          title="Total Invoices"
          value={numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </section>

      {/* Charts & Latest Invoices */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        
        {/* Revenue Chart (Wider) */}
        <div className="lg:col-span-8">
          <RevenueChart revenue={revenue} />
        </div>

        {/* Latest Invoices (Narrower) */}
        <div className="lg:col-span-4">
          <LatestInvoices latestInvoices={latestInvoices} />
        </div>

      </section>
    </main>
  );
}
