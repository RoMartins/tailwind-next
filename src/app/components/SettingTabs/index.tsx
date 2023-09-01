'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingTabs() {
  const [tabSelected, setTabSelected] = useState('tab1')
  return (
    <>
      <Tabs.Root value={tabSelected} onValueChange={setTabSelected}>
        <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 ">
          <TabItem
            title="My details"
            value="tab1"
            isSelected={tabSelected === 'tab1'}
          />
          <TabItem
            title="Profile"
            value="tab2"
            isSelected={tabSelected === 'tab2'}
          />
          <TabItem
            title="Password"
            value="tab3"
            isSelected={tabSelected === 'tab3'}
          />
          <TabItem
            title="Team"
            value="tab4"
            isSelected={tabSelected === 'tab4'}
          />
          <TabItem
            title="Plan"
            value="tab5"
            isSelected={tabSelected === 'tab5'}
          />
          <TabItem
            title="Billing"
            value="tab6"
            isSelected={tabSelected === 'tab6'}
          />
          <TabItem
            title="Email"
            value="tab7"
            isSelected={tabSelected === 'tab7'}
          />
          <TabItem
            title="Notifications"
            value="tab8"
            isSelected={tabSelected === 'tab8'}
          />
          <TabItem
            title="Integrations"
            value="tab9"
            isSelected={tabSelected === 'tab9'}
          />
          <TabItem
            title="API"
            value="tab10"
            isSelected={tabSelected === 'tab10'}
          />
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}
