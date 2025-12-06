import React from "react";

type Props = { userName: string };

export default function NonPaymentWarningEmail({ userName }: Props) {
  return (
    <div>
      <h1>Non-payment warning</h1>
      <p>Hello {userName},</p>
      <p>
        Placeholder for the <strong>Non-payment warning</strong> email used by Sellorbid.ie. Connect this to your
        email provider before going live.
      </p>
    </div>
  );
}
