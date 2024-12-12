import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='HomeScreen' />
        <Tabs.Screen name='MessageScreen' />
        <Tabs.Screen name='FavouriteScreen' />
        <Tabs.Screen name='ProfileScreen' />
    </Tabs>
  )
}

export default TabLayout