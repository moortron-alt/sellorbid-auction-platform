import React from "react";

type Props = { userName: string };

export default function AuctionWonEmail({ userName }: Props) {
  return (
    <div>
      <h1>Auction won – deposit required</h1>
      <p>Hello {userName},</p>
      <p>
        Placeholder for the <strong>Auction won – deposit required</strong> email used by Sellorbid.ie. Connect this to your
        email provider before going live.
      </p>
    </div>
  );
}
