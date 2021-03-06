import React, { Component } from 'react';
import { Alert, Image, ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, State } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';


const Landing = () => {
    const [senha, onChangeText] = React.useState('');

    const { navigate } = useNavigation();


    function handleNavigateToInicio() {
        if (senha === '123') {
            navigate('Inicio');
        } else {
            Alert.alert("ATENÇÃO", "senha incorreta")
        }

    }






    return (


        <View style={styles.container}>

            <ImageBackground
                source={require('../../assets/images/landingFundo.png')}
                style={styles.container}
                imageStyle={{ width: '100%', height: 308.64, left: 0, top: 0 }}
            >


                <View style={styles.container2}>

                    <View style={styles.containertopo}>
                        <View style={styles.logo}>
                            <Image source={landingImg} />
                        </View>
                    </View>


                    <View style={styles.containerbottom}>

                        <Text style={styles.title1}>Bem vindo</Text>
                        <Text style={styles.title2}>Acesse para continuar</Text>

                        <KeyboardAvoidingView>
                            <TextInput
                                style={styles.input}
                                placeholder="Senha"
                                secureTextEntry={true}
                                onChangeText={text => onChangeText(text)}

                            />
                        </KeyboardAvoidingView>

                        <RectButton
                            style={styles.button}
                            onPress={handleNavigateToInicio}
                        >
                            <Text
                                style={styles.login}
                            >LOGIN</Text>
                        </RectButton>
                    </View>


                </View>

            </ImageBackground>

        </View>

    );
}

export default Landing;