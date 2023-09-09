'use client'

import Link from "next/link";
import Page from "../components/common/PageLayout";
import Card from "../components/ui/Card";
import Island from "../components/ui/Island";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import { formatAsMoney } from "../../../utils/fomatters";
import { useEffect, useState } from "react";
import TransactionHistory from "../components/dashboard/TransactionHistory";
import { AiFillBank } from 'react-icons/ai';
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [money, setMoney] = useState<number>(0);
  const router = useRouter();
  
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
    router.push(`/payments/pay`)  ;
  };

  const handleRequestClick = () => {
    router.push(`/payments/request`)
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
                    <div className="flex flex-col items-center">
                      <TransactionHistory />
                      <a href="#" className="text-blue-500 hover:underline" pa-marked="1">
                        Show all
                      </a>
                  </div>
              </Card>
            </div>
          </div>

          <div className="flex-[2_2_0%] w-full" style={{ height: 'calc(100vh - 400px)' }}>
            <Island>
            <h2 className="text-xl font-semibold mb-4 md:flex hidden">Actions</h2>
              <div className="flex flex-row gap-x-5 md:h-auto h-1/3">
                <PrimaryButton
                  handler={handlePayClick}
                  loading={false}
                  disabled={false}
                  width={'full'}
                  height={'full'}
                >
                  Pay
                </PrimaryButton>
                <PrimaryButton
                  handler={handleRequestClick}
                  loading={false}
                  disabled={false}
                  width={'full'}
                  height={'full'}
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
