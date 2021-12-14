import React from 'react'
import { View, Text } from 'react-native';
import { BotonClac } from '../components/BotonClac';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';





export const CalculadoraScreen = () => {
   
    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnRestar,
        btnDividir,
        btnMultiplicar,
        armarNumero,
        calcular,
        btnSumar,
        btnDelete

    }= useCalculadora()


    return (
        <View style={styles.calculadoraContainer}>

            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>

                )
            }

            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit>{numero}</Text>


            <View style={styles.fila}>
                <BotonClac texto='C' color='#9B9B9B' accion={limpiar} />
                <BotonClac texto='+/-' color='#9B9B9B' accion={positivoNegativo} />
                <BotonClac texto='del' color='#9B9B9B' accion={btnDelete} />
                <BotonClac texto='/' color='#FF9427' accion={btnDividir} />

            </View>
            <View style={styles.fila}>
                <BotonClac texto='7' accion={armarNumero} />
                <BotonClac texto='8' accion={armarNumero} />
                <BotonClac texto='9' accion={armarNumero} />
                <BotonClac texto='*' color='#FF9427' accion={btnMultiplicar} />

            </View>
            <View style={styles.fila}>
                <BotonClac texto='4' accion={armarNumero} />
                <BotonClac texto='5' accion={armarNumero} />
                <BotonClac texto='6' accion={armarNumero} />
                <BotonClac texto='-' color='#FF9427' accion={btnRestar} />

            </View>
            <View style={styles.fila}>
                <BotonClac texto='1' accion={armarNumero} />
                <BotonClac texto='2' accion={armarNumero} />
                <BotonClac texto='3' accion={armarNumero} />
                <BotonClac texto='+' color='#FF9427' accion={btnSumar} />

            </View>
            <View style={styles.fila}>

                <BotonClac texto='0' accion={armarNumero} ancho />
                <BotonClac texto='.' accion={armarNumero} />
                <BotonClac texto='=' color='#FF9427' accion={calcular} />

            </View>
        </View>
    )
}
