import React from "react";

type Props = { userName: string };

export default function TransportOfferEmail({ userName }: Props) {
  return (
    <div>
      <h1>New transport offer</h1>
      <p>Hello {userName},</p>
      <p>
        Placeholder for the <strong>New transport offer</strong> email used by Sellorbid.ie. Connect this to your
        email provider before going live.
      </p>
    </div>
  );
}
