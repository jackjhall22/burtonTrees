import Link from "next/link";
import { MaterialIcon } from "@/components/layout/material-icon";

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
    <div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm shadow-[rgba(31,93,58,0.08)] p-6 flex-1">
      <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
        <MaterialIcon name="receipt_long" className="text-outline" />
        Recent Invoices
      </h3>

      <ul className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <li
            key={invoice.id}
            className="flex justify-between items-center pb-3 border-b border-outline-variant/20"
          >
            <div>
              <p className="text-xs font-bold text-on-surface tracking-wide">
                {invoice.id}
              </p>
              <p className="text-xs text-outline">{invoice.date}</p>
            </div>
            <div className="text-right">
              <p className="text-base text-on-surface">{invoice.amount}</p>
              <span className="text-[10px] font-bold text-primary bg-primary-container px-2 py-0.5 rounded">
                {invoice.status}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className="inline-flex items-center gap-1 text-primary text-xs font-bold tracking-wide mt-4 hover:underline"
      >
        View all billing history
        <MaterialIcon name="arrow_forward" className="text-base" />
      </Link>
    </div>
  );
}
