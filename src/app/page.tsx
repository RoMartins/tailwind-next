import { Mail } from 'lucide-react'
import { InputControl, InputPrefix, InputRoot } from './components/Input'
import { SettingTabs } from './components/SettingTabs'
import * as FileInput from './components/Form/FileInput/Index'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      </div>

      <SettingTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="flex flex-col space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-800"
            >
              Save
            </button>
          </div>
        </div>

        <form
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-indigo-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl defaultValue="Rodrigo" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Martins" />
              </InputRoot>
            </div>

            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <div className="grid gap-6">
              <InputRoot>
                <InputPrefix>
                  <Mail className="" />
                </InputPrefix>
                <InputControl type="email" defaultValue="Rodrigo@hotmail.com" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label>
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-700">
                Yhis will be displayed on your profile
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label>Role</label>
            <div className="grid gap-6">
              <InputRoot>
                <InputControl type="" defaultValue="Product Designer" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label>Country</label>
            <Select placeholder="Select a country">
              <SelectItem option="Brasil" value="br" />
              <SelectItem option="United States" value="us" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label>timezone</label>
            <Select>
              <SelectItem
                option="Pacific Standard Time (PST) UTC−08:00 "
                value="br"
              />
              <SelectItem option="United States" value="us" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label>Bio</label>
            <div className="grid grid-cols-2 gap-6"></div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label>
              Portfolio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-700">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root className="flex flex-col ">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
        </form>
      </div>
    </>
  )
}
