"use client";

import { useSelector } from "react-redux";
import TransactionItem from "./TransactionItem";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ExecuteTransactionBtn } from "@/components/ui/ClientButtons";

const TransactionList = () => {
  const transactions = useSelector((state) => state.tlbank.queue);

  return transactions && transactions.length > 0 ? (
    <div className="mt-6 flex h-[85%] flex-col justify-between space-y-3">
      <div className="space-y-2">
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            amount={transaction.quantity}
            time={transaction.lockDate}
            pubKey={transaction.walletAddress}
          />
        ))}
      </div>

      <ExecuteTransactionBtn />
    </div>
  ) : (
    <div className="mt-6 text-center">
      <button
        style={{
          background: "url(/images/tlBank/bg-btn.svg) no-repeat center center",
        }}
        className="mx-auto flex h-16 w-16 items-center justify-center"
      >
        <PlusIcon className="h-10 w-10 text-gray-400" />
      </button>

      <div className="mt-6 space-y-3">
        <h4 className="text-center text-xl font-semibold text-gray-400">
          No transactions on queue
        </h4>

        <p className="font-base text-gray-600">
          To create a transaction, add one or more contributors to the queue.
        </p>
      </div>
    </div>
  );
};

export default TransactionList;
