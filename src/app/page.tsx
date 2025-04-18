"use client";
import { Modal } from "@/primitives/Modal";
import { Button } from "./button";
import { AlertDialog } from "@/primitives/AlertDialog";
import {
  DialogTrigger,
  DisclosurePanel,
  Form,
  Group,
  Heading,
  MenuTrigger,
  ToggleButtonGroup,
  TooltipTrigger,
} from "react-aria-components";
import { Autocomplete, AutocompleteItem } from "@/primitives/AutoComplete";
import { Breadcrumb, Breadcrumbs } from "@/primitives/BreadCrumbs";
import { Calendar } from "@/primitives/Calendar";
import { Checkbox, CheckboxGroup } from "@/primitives/CheckBox";
import { ComboBox, ComboBoxItem } from "@/primitives/ComboBox";
import { DateField } from "@/primitives/DateField";
import { DatePicker } from "@/primitives/DatePicker";
import { DateRangePicker } from "@/primitives/DateRangePicker";
import {
  Disclosure,
  DisclosureGroup,
  DisclosureHeader,
} from "@/primitives/Disclosure";
import { GridList, GridListItem } from "@/primitives/GridList";
import { Link } from "@/primitives/Link";
import { ListBox, ListBoxItem } from "@/primitives/ListBox";
import {
  Bold,
  BoldIcon,
  HelpCircle,
  Italic,
  ItalicIcon,
  MoreHorizontal,
  PrinterIcon,
  SaveIcon,
  Underline,
  UnderlineIcon,
} from "lucide-react";
import { Menu, MenuItem, MenuSeparator } from "@/primitives/Menu";
import { Meter } from "@/primitives/Meter";
import { NumberField } from "@/primitives/NumberField";
import { Popover } from "@/primitives/Popover";
import { Dialog } from "@/primitives/Dialog";
import { ProgressBar } from "@/primitives/ProgressBar";
import { Radio, RadioGroup } from "@/primitives/RadioGroup";
import { RangeCalendar } from "@/primitives/RangeCalendar";
import { SearchField } from "@/primitives/SearchField";
import { Select, SelectItem } from "@/primitives/Select";
import { Slider } from "@/primitives/Slider";
import { Switch } from "@/primitives/Switch";
import { Separator } from "@/primitives/Separator";
import { Tab, TabList, TabPanel, Tabs } from "@/primitives/Tabs";
import { Tag, TagGroup } from "@/primitives/TagGroup";
import { TextField } from "@/primitives/TextField";
import { TimeField } from "@/primitives/TimeField";
import { ToggleButton } from "@/primitives/ToggleButton";
import { Toolbar } from "@/primitives/Toolbar";
import { Tooltip } from "@/primitives/ToolTip";
import { Tree, TreeItem, TreeItemContent } from "@/primitives/Tree";

export default function Home() {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <ButtonVariation />
      <AlertDialogeExample />
      <AutoCompleteExample />
      <BreadCrumbsExample />
      <CalenderExample />
      <CheckBoxExample />
      <CheckBOxGroupExample />
      <ComboBoxExample />
      <DateFieldExample />
      <DatePickerExample />
      <DateRangePickerExample />
      <DisclosureExample />
      <DisclosueGroup />
      <GridListExample />
      <LinkExample />
      <ListBoxExample />
      <MenuExample />
      <MeterExample />
      <NumberFieldExaple />
      <PopoverExample />
      <ProgressBarExample />
      <RadioGroupExample />
      <RangeCalendarExample />
      <SearchFieldExample />
      <SelectExample />
      <SliderExample />
      <SwitchExample />
      <SepartorExample />
      <TabsExample />
      <TagGroupExample />
      <TextFieldExample />
      <TimeFieldExample />
      <ToggleButtonExample />
      <ToggleButtonGroupExample />
      <ToolBarExample />
      <ToolTipExample />
      <TreeExample />
    </div>
  );
}
function TreeExample() {
  return (
    <Tree
      aria-label="Files"
      defaultExpandedKeys={["documents", "photos", "project"]}
      defaultSelectedKeys={["project"]}
      selectionMode="multiple"
      style={{
        height: "400px",
        width: "300px",
      }}
    >
      <TreeItem id="documents" textValue="Documents">
        <TreeItemContent>Documents</TreeItemContent>
        <TreeItem id="project" textValue="Project">
          <TreeItemContent>Project</TreeItemContent>
          <TreeItem id="report" textValue="Weekly Report">
            <TreeItemContent>Weekly Report</TreeItemContent>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem id="photos" textValue="Photos">
        <TreeItemContent>Photos</TreeItemContent>
        <TreeItem id="one" textValue="Image 1">
          <TreeItemContent>Image 1</TreeItemContent>
        </TreeItem>
        <TreeItem id="two" textValue="Image 2">
          <TreeItemContent>Image 2</TreeItemContent>
        </TreeItem>
      </TreeItem>
    </Tree>
  );
}
function ToolTipExample() {
  return (
    <div className="flex gap-2">
      <TooltipTrigger>
        <Button className="px-2">
          <SaveIcon className="w-5 h-5" />
        </Button>
        <Tooltip>Save</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger>
        <Button className="px-2">
          <PrinterIcon className="w-5 h-5" />
        </Button>
        <Tooltip>Print</Tooltip>
      </TooltipTrigger>
    </div>
  );
}
function ToolBarExample() {
  return (
    <Toolbar aria-label="Text formatting">
      <Group aria-label="Style" className="contents">
        <ToggleButton aria-label="Bold" className="p-2.5">
          <BoldIcon className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton aria-label="Italic" className="p-2.5">
          <ItalicIcon className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton aria-label="Underline" className="p-2.5">
          <UnderlineIcon className="w-4 h-4" />
        </ToggleButton>
      </Group>
      <Separator orientation="vertical" />
      <Group aria-label="Clipboard" className="contents">
        <Button>Copy</Button>
        <Button>Paste</Button>
        <Button>Cut</Button>
      </Group>
      <Separator orientation="vertical" />
      <Checkbox>Night Mode</Checkbox>
    </Toolbar>
  );
}
function ToggleButtonExample() {
  return <ToggleButton>Pin</ToggleButton>;
}
function ToggleButtonGroupExample() {
  return (
    <ToggleButtonGroup
      onSelectionChange={function Ma() {}}
      selectionMode="multiple"
    >
      <ToggleButton aria-label="Bold" id="bold">
        <Bold className="w-4 h-4" />
      </ToggleButton>
      <ToggleButton aria-label="Italic" id="italic">
        <Italic className="w-4 h-4" />
      </ToggleButton>
      <ToggleButton aria-label="Underline" id="underline">
        <Underline className="w-4 h-4" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
function TimeFieldExample() {
  return <TimeField label="Event time" />;
}
function TextFieldExample() {
  return (
    <Form className="flex flex-col gap-2 items-start">
      <TextField isRequired label="Name" />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
function TagGroupExample() {
  return (
    <TagGroup label="Ice cream flavor" selectionMode="single">
      <Tag>Chocolate</Tag>
      <Tag isDisabled>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </TagGroup>
  );
}
function TabsExample() {
  return (
    <Tabs>
      <TabList aria-label="History of Ancient Rome">
        <Tab id="FoR">Founding of Rome</Tab>
        <Tab id="MaR">Monarchy and Republic</Tab>
        <Tab id="Emp">Empire</Tab>
      </TabList>
      <TabPanel id="FoR">
        Arma virumque cano, Troiae qui primus ab oris.
      </TabPanel>
      <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
      <TabPanel id="Emp">Alea jacta est.</TabPanel>
    </Tabs>
  );
}
function SepartorExample() {
  return <Separator orientation="vertical" />;
}
function SwitchExample() {
  return <Switch>Wi-Fi</Switch>;
}
function SliderExample() {
  return <Slider defaultValue={[30, 60]} label="Range" />;
}
function SelectExample() {
  return (
    <Select label="Ice cream flavor">
      <SelectItem>Chocolate</SelectItem>
      <SelectItem id="mint">Mint</SelectItem>
      <SelectItem>Strawberry</SelectItem>
      <SelectItem>Vanilla</SelectItem>
    </Select>
  );
}
function RadioGroupExample() {
  return (
    <RadioGroup description="" label="Favorite sport">
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball">Baseball</Radio>
      <Radio value="basketball">Basketball</Radio>
    </RadioGroup>
  );
}
function SearchFieldExample() {
  return <SearchField label="Search" />;
}
function RangeCalendarExample() {
  return <RangeCalendar aria-label="Trip dates" />;
}
function ProgressBarExample() {
  return <ProgressBar label="Loading…" value={80} />;
}
function PopoverExample() {
  return (
    <DialogTrigger>
      <Button aria-label="Help">
        <HelpCircle className="w-4 h-4" />
      </Button>
      <Popover className="max-w-[250px]">
        <Dialog>
          <Heading slot="title" className="text-lg font-semibold mb-2">
            Help
          </Heading>
          <p className="text-sm">
            For help accessing your account, please contact support.
          </p>
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}
function MeterExample() {
  return <Meter label="Storage Space" value={89} />;
}
function MenuExample() {
  return (
    <MenuTrigger>
      <Button className="px-2">
        <MoreHorizontal className="w-5 h-5" />
      </Button>
      <Menu>
        <MenuItem id="new">New…</MenuItem>
        <MenuItem id="open">Open…</MenuItem>
        <MenuSeparator />
        <MenuItem id="save">Save</MenuItem>
        <MenuItem id="saveAs">Save as…</MenuItem>
        <MenuSeparator />
        <MenuItem id="print">Print…</MenuItem>
      </Menu>
    </MenuTrigger>
  );
}
function LinkExample() {
  return <Link href="#"> the missing link</Link>;
}
function ListBoxExample() {
  return (
    <ListBox aria-label="Ice cream flavor" selectionMode="multiple">
      <ListBoxItem id="chocolate">Chocolate</ListBoxItem>
      <ListBoxItem id="mint">Mint</ListBoxItem>
      <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
      <ListBoxItem id="vanilla">Vanilla</ListBoxItem>
    </ListBox>
  );
}
function NumberFieldExaple() {
  return <NumberField label="Cookies" />;
}
function GridListExample() {
  return (
    <GridList
      aria-label="Ice cream flavors"
      onAction={undefined}
      onScroll={() => {}}
      onSelectionChange={() => {}}
      selectionMode="multiple"
    >
      <GridListItem id="chocolate">Chocolate</GridListItem>
      <GridListItem id="mint">Mint</GridListItem>
      <GridListItem id="strawberry">Strawberry</GridListItem>
      <GridListItem id="vanilla">Vanilla</GridListItem>
    </GridList>
  );
}
function DisclosueGroup() {
  return (
    <DisclosureGroup
      onExpandedChange={() => {
        console.log("changed");
      }}
    >
      <Disclosure>
        <DisclosureHeader>Files</DisclosureHeader>
        <DisclosurePanel>Files content</DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureHeader>Images</DisclosureHeader>
        <DisclosurePanel>Images content</DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureHeader>Documents</DisclosureHeader>
        <DisclosurePanel>Documents content</DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  );
}
function DisclosureExample() {
  return (
    <Disclosure
      onExpandedChange={(state) => {
        console.log(state);
      }}
    >
      <DisclosureHeader>Files</DisclosureHeader>
      <DisclosurePanel>Files content</DisclosurePanel>
    </Disclosure>
  );
}
function DateRangePickerExample() {
  return <DateRangePicker label="Trip Dates" />;
}
function DatePickerExample() {
  return <DatePicker label="Event Date" />;
}
function DateFieldExample() {
  return <DateField label="Event date" />;
}
function ComboBoxExample() {
  return (
    <ComboBox>
      <ComboBoxItem>Chocolate</ComboBoxItem>
      <ComboBoxItem id="mint">Mint</ComboBoxItem>
      <ComboBoxItem>Strawberry</ComboBoxItem>
      <ComboBoxItem>Vanilla</ComboBoxItem>
    </ComboBox>
  );
}
function CheckBOxGroupExample() {
  return (
    <CheckboxGroup label="Cities">
      <>
        <Checkbox value="sf">San Francisco</Checkbox>
        <Checkbox value="ny">New York</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </>
    </CheckboxGroup>
  );
}
function CheckBoxExample() {
  return <Checkbox>Checkbox</Checkbox>;
}
function CalenderExample() {
  return (
    <Calendar
      aria-label="Event date"
      onChange={function Ma() {}}
      onFocusChange={function Ma() {}}
    />
  );
}

function BreadCrumbsExample() {
  return (
    <Breadcrumbs
      onAction={() => {
        console.log("navigated");
      }}
    >
      <Breadcrumb href="/">Home</Breadcrumb>
      <Breadcrumb href="/react-aria">React Aria</Breadcrumb>
      <Breadcrumb>Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
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
