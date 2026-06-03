import Link from "next/link";
import { Receipt, ArrowRight } from "lucide-react";

const invoices = [
  {
    id: "INV-0422",
    date: "Sep 15, 2024",
    amount: "$1,200.00",
    status: "PAID",
  },
  {
    id: "INV-0310",
    date: "Jul 02, 2024",
    amount: "$350.00",
    status: "PAID",
  },
];

export function InvoiceList() {
  return (
    <div className="bg-surface-card rounded-xl border border-border p-6 flex-1">
      <h3 className="text-lg font-display font-medium text-text mb-4 flex items-center gap-2">
        <Receipt size={18} className="text-text-faint" />
        Recent Invoices
      </h3>

      <ul className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <li
            key={invoice.id}
            className="flex justify-between items-center pb-3 border-b border-border"
          >
            <div>
              <p className="text-xs font-mono text-text tracking-wider">
                {invoice.id}
              </p>
              <p className="text-xs text-text-faint">{invoice.date}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-text">{invoice.amount}</p>
              <span className="text-[10px] font-mono font-medium text-primary bg-primary/15 px-2 py-0.5 rounded">
                {invoice.status}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className="inline-flex items-center gap-1 text-accent text-xs font-medium mt-4 hover:underline"
      >
        View all billing history
        <ArrowRight size={12} />
      </Link>
    </div>
  );
}
