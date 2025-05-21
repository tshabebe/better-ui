import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MailIcon,
  Trash2Icon,
} from 'lucide-react'
import { Button } from '../primitives/button'
import { ButtonWithStates } from './client.button'

// make sure each components are responsive
export default function ButtonPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center py-4 border-b">
        <BaseButton />
      </div>
      <div className="flex gap-2 p-2">
        <div className="flex flex-col items-center gap-4">
          <DisabledButton />
          <p>Disabled Button</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <ButtonWithIcon />
          <p>Button with Icon</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <ButtonWithIconArrowLeftMoving />
          <p>Button with arrow moving</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <ButtonWithArrowRightMovingWithMail />
          <p>arrow moving and mail</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <ButtonWithAutomaticSvgStyling />
          <p>Automatic Svg Styling</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <ButtonWithStates />
          <p>With States</p>
        </div>
      </div>
    </div>
  )
}

function BaseButton() {
  return (
    <Button
      className={
        'px-2 py-1 bg-gray-elevation-1 border rounded-4xl hover:bg-gray-elevation-2'
      }
    >
      <span>Hello world</span>
    </Button>
  )
}

function DisabledButton() {
  return (
    <Button
      className={
        'px-2 py-1 bg-gray-elevation-1 border rounded-4xl hover:bg-gray-elevation-2'
      }
      isDisabled
    >
      <span>Hello world</span>
    </Button>
  )
}

function ButtonWithIcon() {
  return (
    <Button
      className={
        'px-2 py-1 bg-gray-elevation-1 border rounded-4xl hover:bg-gray-elevation-2 flex gap-2 items-center'
      }
    >
      <Trash2Icon className="w-4 h-4" aria-hidden />
      <span>Button</span>
    </Button>
  )
}

function ButtonWithIconArrowLeftMoving() {
  return (
    <Button
      className={
        'px-2 group py-1 bg-gray-elevation-1 border rounded-4xl hover:bg-gray-elevation-2 flex gap-2 items-center'
      }
    >
      <ArrowLeftIcon
        className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
        aria-hidden
      />
      <span>Button</span>
    </Button>
  )
}

function ButtonWithArrowRightMovingWithMail() {
  return (
    <Button
      className={
        'px-2 group py-1 bg-gray-elevation-1 border rounded-4xl hover:bg-gray-elevation-2 flex gap-2 items-center'
      }
    >
      <MailIcon className="opacity-60" size={16} aria-hidden="true" />
      <span>Button</span>
      <ArrowRightIcon
        className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
    </Button>
  )
}

function ButtonWithAutomaticSvgStyling() {
  return (
    <Button
      className={
        'px-2 group py-1 bg-gray-elevation-1 border rounded-4xl hover:bg-gray-elevation-2 flex gap-2 items-center [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
      }
    >
      <MailIcon className="opacity-60" aria-hidden />
      <span>Button</span>
      <Trash2Icon aria-hidden />
    </Button>
  )
}
