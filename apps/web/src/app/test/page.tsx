import { Button } from "ui";
import { CloseIcon } from "icons";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center w-full gap-10 ">
        <Button>root</Button>
        <Button variant="success">success</Button>
        <Button size="big" variant="warning">
          warning
        </Button>
        <Button variant="error" size="small">
          error
        </Button>
        <Button loading>loading</Button>
        <CloseIcon className="w-10 h-10 text-red-400" />
      </div>
    </main>
  );
}
