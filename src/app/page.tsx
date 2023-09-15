import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { InputControl, InputPrefix, InputRoot } from './components/Input'
import { SettingTabs } from './components/SettingTabs'
import * as FileInput from './components/Form/FileInput/Index'
import { Select } from './components/Form/Select'
import { SelectItem } from './components/Form/Select/SelectItem'
import { Textarea } from './components/Form/textarea'
import { Button } from './components/Button'

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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
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
                  <Mail className="h-5 w-5 text-zinc-500" />
                </InputPrefix>
                <InputControl type="email" defaultValue="Rodrigo@hotmail.com" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">
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
            <label className="text-sm font-medium text-zinc-700">Role</label>
            <div className="grid gap-6">
              <InputRoot>
                <InputControl type="" defaultValue="Product Designer" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">Country</label>
            <Select placeholder="Select a country" iconType="location">
              <SelectItem option="Brasil" value="br" />
              <SelectItem option="United States" value="us" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">
              timezone
            </label>
            <Select placeholder="Select timezone" iconType="clock">
              <SelectItem
                option="Pacific Standard Time (PST) UTC−08:00 "
                value="br"
              />
              <SelectItem option="United States" value="us" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block to-zinc-500 text-sm font-normal">
                Write a short introduction{' '}
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-6">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem option="Normal text" value="normal" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button
                    variant="ghost"
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">
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

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
