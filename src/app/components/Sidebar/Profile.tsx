import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className=" fixed bottom-0 left-0 flex w-80  items-center gap-3  border-r border-violet-600 bg-white p-2">
      <img
        src="https://github.com/RoMartins.png"
        className="h-10 w-10 rounded-full"
        alt=""
        srcset=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Rodrigo Martins
        </span>

        <span className="truncate text-sm text-zinc-500">
          Rodrigo@developer.com.br
        </span>
      </div>

      <button type="button" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
