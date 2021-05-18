import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Text
} from 'react-native'
import { SIZES, COLORS } from '../../assets/theme/index'

const ReactAlert = () => {

    const [name, setName] = useState('')

    const onInputChange = value => {
        setName(value)
    }

    const onAlert = () => {
        name && alert('Welcome , ' + name)
    }

    return (
        <>
            <SafeAreaView>
                <View>
                    <TextInput
                        placeholder='Input something please...'
                        style={[
                            styles.text_field
                        ]}
                        onChangeText={onInputChange}
                    />
                    <TouchableOpacity style={styles.button} onPress={onAlert}>
                        <Text style={styles.textBtn}>Alert</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ReactAlert

const styles = StyleSheet.create({
    text_field: {
        marginTop: 320,
        borderColor: '#E91E63',
        borderWidth: .5,
        margin: SIZES.base(),
        height: SIZES.height,
        borderRadius: SIZES.radius,
        padding: SIZES.base(1)
    },
    button: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SIZES.base(),
        marginRight: SIZES.base(),
        height: SIZES.height,
        backgroundColor: COLORS.black
    },
    textBtn: {
        color: COLORS.while,
        fontSize: 16
    }
})