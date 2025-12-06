import React from "react";

type Props = { userName: string };

export default function OutbidEmail({ userName }: Props) {
  return (
    <div>
      <h1>You have been outbid</h1>
      <p>Hello {userName},</p>
      <p>
        Placeholder for the <strong>You have been outbid</strong> email used by Sellorbid.ie. Connect this to your
        email provider before going live.
      </p>
    </div>
  );
}
