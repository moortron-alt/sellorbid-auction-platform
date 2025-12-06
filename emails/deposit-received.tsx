import React from "react";

type Props = { userName: string };

export default function DepositReceivedEmail({ userName }: Props) {
  return (
    <div>
      <h1>Deposit received</h1>
      <p>Hello {userName},</p>
      <p>
        Placeholder for the <strong>Deposit received</strong> email used by Sellorbid.ie. Connect this to your
        email provider before going live.
      </p>
    </div>
  );
}
