import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LucideLifeBuoy,
  Search,
  SquareStack,
  User,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'

export function Sidebar() {
  return (
    <>
      <aside className=" flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
        <Logo />

        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={User} />
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LucideLifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <div className=" flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
            <div className="space-y-1">
              <span className="block text-sm/5 font-medium text-violet-700">
                Used space
              </span>
              <span className="text-sm/5 text-violet-500">
                Your team has used 80% of your available space. Need More?
              </span>
            </div>

            <div className="h-2 rounded-full bg-violet-100">
              <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
            </div>

            <div className="space-x-3">
              <button
                type="button"
                className="text-sm font-medium text-violet-500 hover:text-violet-700"
              >
                Dismiss
              </button>
              <button
                type="button"
                className="text-sm font-medium text-violet-700 hover:text-violet-900"
              >
                Upgrade
              </button>
            </div>
          </div>
          <div className="h-px bg-zinc-200" />

          <Profile />
        </div>
      </aside>
    </>
  )
}
