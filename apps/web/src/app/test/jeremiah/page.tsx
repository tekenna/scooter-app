"use client";

import React, { useState } from "react";
import { ButtonFill, RoundButton, ButtonOutline } from "ui";

export default function Page(): JSX.Element {
  const [loading, setLoading] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center w-full gap-5">
        <ButtonFill
          onClick={() => console.log("text")}
          variant="warning"
          className="min-h-[50px] w-[150px] rounded-none"
        >
          Test +
        </ButtonFill>
        <ButtonFill
          variant="success"
          disabled
          className="w-[150px] rounded-[36px]  text-[#fff]"
          onClick={() => console.log("clicked")}
        >
          Test
        </ButtonFill>
        <RoundButton
          className="w-[50px] h-[50px]"
          variant={"error"}
          onClick={() => console.log("text")}
        >
          +
        </RoundButton>
        <ButtonFill
          style={{ background: "blue" }}
          size={"big"}
          className="w-[150px] rounded-[36px] text-[#fff]"
          onClick={() => alert("btn click")}
        >
          Test
        </ButtonFill>
        <RoundButton
          className="w-[100px] h-[100px] min-h-[100px] rounded-[100px]"
          variant={"normal"}
          onClick={() => setLoading(!loading)}
          loading={loading}
        >
          loading
        </RoundButton>
        <ButtonOutline
          variantColor={"red"}
          className="w-[200px] h-[70px] "
        >
          {" "}
          outline button
        </ButtonOutline>
      </div>
    </main>
  );
}
