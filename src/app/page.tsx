"use client";
import { Modal } from "@/primitives/Modal";
import { Button } from "./button";
import { AlertDialog } from "@/primitives/AlertDialog";
import { DialogTrigger } from "react-aria-components";
import { Autocomplete, AutocompleteItem } from "@/primitives/AutoComplete";
import { Breadcrumb, Breadcrumbs } from "@/primitives/BreadCrumbs";
import { Calendar } from "@/primitives/Calender";
import { Checkbox, CheckboxGroup } from "@/primitives/CheckBox";
import { ComboBox, ComboBoxItem } from "@/primitives/ComboBox";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <ButtonVariation />
      <AlertDialogeExample />
      <AutoCompleteExample />
      <BreadCrumbsExample />
      <CalenderExample />
      <CheckBoxExample />
      <CheckBOxGroupExample />
      <ComboBoxExample />
    </div>
  );
}
function ComboBoxExample() {
  return <ComboBox
>
  <ComboBoxItem>
    Chocolate
  </ComboBoxItem>
  <ComboBoxItem id="mint">
    Mint
  </ComboBoxItem>
  <ComboBoxItem>
    Strawberry
  </ComboBoxItem>
  <ComboBoxItem>
    Vanilla
  </ComboBoxItem>
</ComboBox>
}
function CheckBOxGroupExample() {
  return <CheckboxGroup
  label="Cities"
>
  <>
    <Checkbox value="sf">
      San Francisco
    </Checkbox>
    <Checkbox value="ny">
      New York
    </Checkbox>
    <Checkbox value="sydney">
      Sydney
    </Checkbox>
    <Checkbox value="london">
      London
    </Checkbox>
    <Checkbox value="tokyo">
      Tokyo
    </Checkbox>
  </>
</CheckboxGroup>
}
function CheckBoxExample() {
  return <Checkbox
>
  Checkbox
</Checkbox>
}
function CalenderExample() {
  return <Calendar
  aria-label="Event date"
  onChange={function Ma(){}}
  onFocusChange={function Ma(){}}
/>
}

function BreadCrumbsExample() {
  return   <Breadcrumbs onAction={() => {
    console.log("navigated")
  } }>
  <Breadcrumb href="/">Home</Breadcrumb>
  <Breadcrumb href="/react-aria">React Aria</Breadcrumb>
  <Breadcrumb>Breadcrumbs</Breadcrumb>
</Breadcrumbs>

}
function AutoCompleteExample() {
  return (
    <Autocomplete
      label="IceCream Flavour"
      onInputChange={(input) => {
        console.log(input);
      }}
    >
      <AutocompleteItem>Chocolate</AutocompleteItem>
      <AutocompleteItem id="mint">Mint</AutocompleteItem>
      <AutocompleteItem>Strawberry</AutocompleteItem>
      <AutocompleteItem>Vanilla</AutocompleteItem>
      <AutocompleteItem>Cookies and Cream</AutocompleteItem>
    </Autocomplete>
  );
}
function AlertDialogeExample() {
  return (
    <DialogTrigger>
      <Button>Delete…</Button>
      <Modal>
        <AlertDialog
          actionLabel="Delete something"
          onAction={function Ma() {
            console.log("deleted");
          }}
          title="Delete folder"
          variant="info"
        >
          Are you sure you want to delete &quot;Documents&quot;? All contents
          will be permanently destroyed.
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}

const StitchesButton = () => {
  return (
    <button className="group relative rounded-lg border-2 border-red-border bg-red px-5 py-1 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-red-500/50">
      <span className="absolute left-0 top-0 size-full rounded-md border border-dashed border-red-50 shadow-inner shadow-white/30 group-active:shadow-white/10"></span>
      <span className="absolute left-0 top-0 size-full rotate-180 rounded-md border-red-50 shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
      SyntaxUI
    </button>
  );
};

function ButtonVariation() {
  return (
    <div className=" flex wrap gap-2 p-2">
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
      <Button
        className={
          "border-none p-0 text-red-text-primary hover:text-red-text-primary-hover"
        }
      >
        hello
      </Button>
      <StitchesButton />
    </div>
  );
}
