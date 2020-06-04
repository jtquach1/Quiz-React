import * as React from 'react'
import Avatar from 'avataaars'

export default class Daughter extends React.Component {
  render () {
    return ( 
        <div>
            Your avatar:
            <Avatar
                avatarStyle='Transparent'
                topType='LongHairBigHair'
                accessoriesType='Blank'
                hatColor='Red'
                hairColor='Black'
                facialHairType='Blank'
                clotheType='Hoodie'
                clotheColor='PastelOrange'
                eyeType='Default'
                eyebrowType='Default'
                mouthType='Default'
                skinColor='DarkBrown'
            />
        </div>
    )
  }
}