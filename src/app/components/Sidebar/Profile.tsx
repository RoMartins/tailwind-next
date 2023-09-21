import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className=" flex items-center gap-3 ">
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

      <Button variant="ghost" type="button" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
