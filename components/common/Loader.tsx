import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Loader = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:Colors.background}}>
        <ActivityIndicator size={'large'} color={Colors.primary} />
    </View>
  )
}

export default Loader