import { View, ImageBackground } from "react-native";

import backgroungImg from '../../assets/background-galaxy.png'

import { styles } from "./styles";

interface Props {
  children: React.ReactNode
}

export function Background({children}: Props) {
  return (
    <ImageBackground 
    source={backgroungImg}

    style={styles.container}
    defaultSource={backgroungImg}
    >
      {children}
    </ImageBackground>
  )
}