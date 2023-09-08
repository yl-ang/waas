'use client'

import Link from "next/link";
import Page from "../components/common/PageLayout";
import Card from "../components/ui/Card";
import Island from "../components/ui/Island";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import { formatAsMoney } from "../../../utils/fomatters";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [money, setMoney] = useState<number>(0);
  
  useEffect(() => {
    // const apiUrl = "https://api.example.com/get-money"; 

    setMoney(420.69);

    // fetch(apiUrl)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     const moneyFromApi = data.money;

    //     setMoney(moneyFromApi);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching money:", error);
    //   });
  }, []);


  const handlePayClick = () => {
    // Handle pay button click
  };

  const handleRequestClick = () => {
    // Handle request button click
  };

  return (
    <>
      <Page title={"Dashboard"}>
        <div className="flex flex-col md:flex-row pt-3 gap-x-3">
          
          
          <div className="flex-[3_3_0%]">
            {/* Balance */}
            <div>
              <Card title={"Balance"}>
                <div className="text-4xl font-bold mb-2">{formatAsMoney(money)}</div>
                  <div className="text-sm text-gray-500">{money === 0 ? "No funds available" : "Available"}</div>
                  <SecondaryButton 
                    handler={function (): void {throw new Error("Function not implemented.");} } 
                    loading={false} 
                    disabled={false} 
                    width={"1/2"} 
                    logo={undefined}>
                    Transfer Funds
                  </SecondaryButton>
              </Card>
            </div>

            {/* Transactions */}
            <div className="py-4">
              <Card title={"Transaction History"}>
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="text-xl font-semibold mb-4">Recent Activity</div>
                  <div className="border-t border-gray-200 dark:border-trueGray-700 p-4 rounded-md">
                    <div className="flex items-center">
                      <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img
                          src="https://pics.paypal.com/00/s/NjU4OWQ2NzQtZWFiZC00Y2U2LWEzZjUtZDZmMGD0NWU2MDc3/file.PNG"
                          alt="User"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-semibold" data-testid="counterpartyName" data-cy="counterpartyName">
                          Nintendo
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="mr-1" data-testid="dateText" data-cy="dateText">
                            17 Jun
                          </span>
                          <span className="mr-1">·</span>
                          <span data-cy="transactionType">Automatic Payment</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-xl text-red-500" data-cy="transactionAmount">
                        <span className="mr-1">−</span> $4.99
                      </div>
                      <a href="#" className="text-blue-500 hover:underline" pa-marked="1">
                        Show all
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex-[2_2_0%] w-full" style={{ height: 'calc(100vh - 400px)' }}>
            <Island>
            <h2 className="text-xl font-semibold mb-4">Actions</h2>
              <div className="flex flex-row gap-x-5">
                <PrimaryButton
                  handler={handlePayClick}
                  loading={false}
                  disabled={false}
                  width={'full'}
                >
                  Pay
                </PrimaryButton>
                <PrimaryButton
                  handler={handleRequestClick}
                  loading={false}
                  disabled={false}
                  width={'full'}
                >
                  Request
                </PrimaryButton>
              </div>
            </Island>
          </div>
        </div>
      </Page>
    </>
  );
}
