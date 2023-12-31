import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';
import { black } from 'ansi-colors';

export default function Login() {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    async function handleSubmit() {
        console.log(email);
        console.log(techs);

        // Quando tento retornar o id,
        // da erro de rede *Não resolvido até então*
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>SEU EMAIL *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite seu email"
                    placeholderTextColor="grey"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse" 
                    placeholderTextColor="grey"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },  

    button: {
        height: 42,
        backgroundColor: 'rgb(250, 85, 25)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },  
});