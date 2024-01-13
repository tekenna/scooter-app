import { Button } from "ui";
export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center w-full">
        <h2>
          <Button variant="warning" size="big">
            Test
          </Button>
        </h2>
      </div>
    </main>
  );
}
