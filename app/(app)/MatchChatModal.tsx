// import { Colors } from '@/constants/Colors'
// import { View, Text, HStack, Pressable, Box } from '@gluestack-ui/themed'
// import { useLocalSearchParams } from 'expo-router'
// import React from 'react'
// import FastImage from 'react-native-fast-image'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const Page = () => {
//     const {image} = useLocalSearchParams()
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:'#FFF5EE',}}>
//         <Box gap={25} alignItems='center' mt={80} flex={1}>

//       <Text fontFamily='Bold' fontSize={20} color='$black'>Wooo</Text>
//       <Text fontFamily='Bold' fontSize={30} color='$black'>It's a Match</Text>
//       <Text fontFamily='Medium' fontSize={20} color='$secondary400'> Start to chat now</Text>

//       <HStack>
//       <FastImage
//             style={{
//                 width: 150,
//                 height: 150,
//               borderRadius: 100,
//             }}
//             source={{
//               uri: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
//             }}
//           />
//       <FastImage

//             style={{
//               width: 150,
//               height: 150,
//               borderRadius: 100,
//               position:'relative',
//               right:20
//             }}
//             source={{
//               uri: String(image),
//             }}
//           />
//       </HStack>
//       <Box gap={10}>
//         <Pressable alignItems='center' justifyContent='center' backgroundColor='$white' minWidth={'65%'} py={14} rounded={'$xl'}>
//             <Text fontSize={18} fontFamily='Bold' color={Colors.primary}>Say Hi to her</Text>
//         </Pressable>
//         <Pressable alignItems='center' justifyContent='center' backgroundColor='#FFF5EE' minWidth={'65%'} py={10} rounded={'$xl'}>
//             <Text fontSize={18} fontFamily='Bold' color={Colors.primary}>Maybe Later</Text>
//         </Pressable>
//       </Box>
//       </Box>

//     </SafeAreaView>
//   )
// }

// export default Page



import { Colors } from '@/constants/Colors'
import { View, Text, HStack, Pressable, Box } from '@gluestack-ui/themed'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'

const Page = () => {
    const { image } = useLocalSearchParams()
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF5EE' }}>
            <Box gap={25} alignItems='center' mt={80} flex={1}>

                <Text fontFamily='Bold' fontSize={20} color='$black'>Congratulations!</Text>
                <Text fontFamily='Bold' fontSize={30} color='$black'>You’ve Got a Match!</Text>
                <Text textAlign='center'  fontFamily='Medium' fontSize={20} color='$secondary400'>
                    Start a conversation and get to know each other.
                </Text>

                <HStack>
                    <FastImage
                        style={{
                            width: 170,
                            height: 170,
                            borderRadius: 100,
                            position: 'relative',
                            left: 20
                        }}
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s',
                        }}
                    />
                    <FastImage
                        style={{
                            width: 170,
                            height: 170,
                            borderRadius: 100,
                            position: 'relative',
                            right: 20
                        }}
                        source={{
                            uri: String(image),
                        }}
                    />
                </HStack>
                
                <Box gap={10}>
                    <Pressable onPress={()=>{router.replace('/ChatScreen')}} alignItems='center' justifyContent='center' backgroundColor='$white' minWidth={'65%'} py={14} rounded={'$xl'}>
                        <Text fontSize={18} fontFamily='Bold' color={Colors.primary}>Say Hi to her</Text>
                    </Pressable>
                    <Pressable onPress={()=>{router.back()}} alignItems='center' justifyContent='center' backgroundColor='#FFF5EE' minWidth={'65%'} py={10} rounded={'$xl'}>
                        <Text fontSize={18} fontFamily='Bold' color={Colors.primary}>Maybe Later</Text>
                    </Pressable>
                </Box>
                
            </Box>
        </SafeAreaView>
    )
}

export default Page
