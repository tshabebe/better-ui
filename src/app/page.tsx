import { Button } from "../../primitives/buttons";

export default function Home() {
  return (
    <div className=" flex gap-2 p-2">
      <Button
        variant="red"
        elevation="elevation-1"
        className={"text-red-text-primary"}
      >
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-2"
        className={"text-red-text-primary"}
      >
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-3"
        className={"text-red-text-primary"}
      >
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-4"
        className={"text-red-text-primary"}
      >
        hello
      </Button>
      <Button variant="red" styles="solid" className={"text-background"}>
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-1"
        styles="outline"
        className={
          "border-red-elevation-4-border text-red-text-primary bg-red-elevation-1 hover:bg-red hover:text-background"
        }
      >
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-1"
        styles="outline"
        className={
          "border-red-elevation-4-border border-dashed text-red-text-primary bg-red-elevation-1 hover:bg-red hover:text-background"
        }
      >
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-1"
        styles="outline"
        className={
          "text-red-text-primary border-none bg-red-elevation-1 hover:bg-red hover:text-background"
        }
      >
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-1"
        styles="outline"
        className={
          "text-red-text-primary border-none bg-red-elevation-2 hover:bg-red hover:text-background"
        }
      >
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-1"
        styles="outline"
        className={
          "text-red-text-primary border-none bg-red-elevation-3 hover:bg-red hover:text-background"
        }
      >
        hello
      </Button>
      <Button
        variant="red"
        elevation="elevation-1"
        styles="outline"
        className={
          "text-red-text-primary border-none bg-red-elevation-4 hover:bg-red hover:text-background"
        }
      >
        hello
      </Button>
      <Button
        variant="red"
        styles="outline"
        className={
          "text-red-text-primary border-none bg-none hover:bg-red hover:text-background"
        }
      >
        hello
      </Button>
      <Button
        variant="red"
        styles="outline"
        className={
          "text-red-text-primary border-none bg-none hover:bg-red-elevation-1"
        }
      >
        hello
      </Button>
      <Button className={'border-none p-0 text-red-text-primary hover:text-red-text-primary-hover'}>hello</Button>
    </div>
  );
}
